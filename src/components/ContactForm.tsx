"use client";

import { useEffect, useRef, useState, type FormEvent, type ReactNode } from "react";
import { CheckCircle2, ChevronDown, MessageCircle, Send } from "lucide-react";
import { profile } from "@/data/profile";
import { useLanguage } from "@/context/LanguageContext";
import { cn } from "@/lib/utils";
import {
  BUDGETS,
  CONTACT_LIMITS,
  formatContactMessage,
  MESSAGE_MIN,
  PREFERENCES,
  RECAPTCHA_ACTION,
  SUBJECTS,
  SUBJECTS_WITH_BUDGET,
  validateContact,
  type ContactData,
  type ContactField,
  type Preference,
  type Subject,
} from "@/lib/contact";
import { getRecaptchaToken, loadRecaptcha, recaptchaEnabled } from "@/lib/recaptcha";

type Status = "idle" | "sending" | "success" | "error" | "unavailable" | "captcha";

interface Values {
  name: string;
  email: string;
  phone: string;
  company: string;
  subject: Subject | "";
  budget: string;
  preference: Preference;
  message: string;
}

const EMPTY: Values = {
  name: "",
  email: "",
  phone: "",
  company: "",
  subject: "",
  budget: "",
  preference: "email",
  message: "",
};

// Cartão branco fixo (não muda com o tema): tons de azul-marinho sobre branco
const control =
  "w-full rounded-lg border bg-[#f4f6fc] px-4 py-3 text-[15px] text-[#0e102e] placeholder:text-[#7a7f9e] transition-colors focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#111184]/15";

function Field({
  id,
  label,
  optional,
  error,
  children,
  className,
}: {
  id: string;
  label: string;
  optional?: string;
  error?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={className}>
      <label htmlFor={id} className="mb-1.5 flex items-baseline gap-2 text-[13px] font-semibold text-[#343858]">
        {label}
        {optional && <span className="text-[11px] font-medium text-[#646988]">({optional})</span>}
      </label>
      {children}
      {error && (
        <p id={`${id}-error`} className="mt-1.5 text-[13px] text-rose-700">
          {error}
        </p>
      )}
    </div>
  );
}

/** Formulário de contato (sobre o cartão azul do Contato), enviado para /api/contact */
export default function ContactForm() {
  const { t } = useLanguage();
  const f = t.contact.form;
  const formRef = useRef<HTMLFormElement>(null);
  const honeypotRef = useRef<HTMLInputElement>(null);
  const [values, setValues] = useState<Values>(EMPTY);
  const [errors, setErrors] = useState<Set<ContactField>>(new Set());
  const [status, setStatus] = useState<Status>("idle");
  const [sent, setSent] = useState<ContactData | null>(null);

  // Carrega o reCAPTCHA só quando o formulário se aproxima da tela
  useEffect(() => {
    const form = formRef.current;
    if (!form || !recaptchaEnabled || typeof IntersectionObserver === "undefined") return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();
        loadRecaptcha().catch(() => {});
      },
      { rootMargin: "400px 0px" }
    );
    observer.observe(form);
    return () => observer.disconnect();
  }, []);

  const set = <K extends keyof Values>(key: K, value: Values[K]) => {
    setValues((current) => ({ ...current, [key]: value }));
    if (errors.has(key as ContactField)) {
      setErrors((current) => {
        const next = new Set(current);
        next.delete(key as ContactField);
        return next;
      });
    }
  };

  const showBudget = values.subject !== "" && SUBJECTS_WITH_BUDGET.includes(values.subject);
  const errorText = (field: ContactField) => {
    if (!errors.has(field)) return undefined;
    const key = field as keyof typeof f.errors;
    return f.errors[key]?.replace("{min}", String(MESSAGE_MIN));
  };
  const invalid = (field: ContactField) =>
    errors.has(field)
      ? { "aria-invalid": true as const, "aria-describedby": `contato-${field}-error` }
      : {};
  const border = (field: ContactField) =>
    errors.has(field) ? "border-rose-500 focus:border-rose-600" : "border-[#dfe3f2] focus:border-[#111184]";

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const { data, fields } = validateContact({ ...values });
    if (!data) {
      setErrors(new Set(fields));
      formRef.current?.querySelector<HTMLElement>(`[name="${fields[0]}"]`)?.focus();
      return;
    }
    setErrors(new Set());
    setSent(data);
    setStatus("sending");

    let token = "";
    try {
      token = await getRecaptchaToken(RECAPTCHA_ACTION);
    } catch {
      setStatus("captcha");
      return;
    }

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, website: honeypotRef.current?.value ?? "", token }),
      });
      if (response.ok) {
        setValues(EMPTY);
        setStatus("success");
      } else {
        setStatus(response.status === 503 ? "unavailable" : response.status === 403 ? "captcha" : "error");
      }
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div
        className="flex h-full min-h-[20rem] flex-col items-start justify-center gap-4 rounded-2xl bg-white p-8 text-[#0e102e] shadow-[0_40px_80px_-40px_rgba(0,0,0,0.6)]"
        role="status"
      >
        <CheckCircle2 size={28} className="text-emerald-600" aria-hidden="true" />
        <p className="text-lg font-semibold">{f.success}</p>
      </div>
    );
  }

  const whatsappHref =
    sent &&
    `https://wa.me/${profile.whatsapp}?text=${encodeURIComponent(formatContactMessage(sent, f, f.whatsappHeading))}`;
  const failed = status === "error" || status === "unavailable" || status === "captcha";
  const length = values.message.length;
  const [privacyText, rest] = f.recaptcha.split("{privacy}");
  const [middleText, endText] = (rest ?? "").split("{terms}");

  return (
    <form
      ref={formRef}
      onSubmit={onSubmit}
      noValidate
      className="rounded-2xl bg-white p-6 text-[#0e102e] shadow-[0_40px_80px_-40px_rgba(0,0,0,0.6)] sm:p-8"
      aria-label={f.title}
    >
      <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#111184]">{f.title}</p>

      <div className="mt-6 grid gap-5 sm:grid-cols-2">
        <Field id="contato-name" label={f.name} error={errorText("name")}>
          <input
            id="contato-name"
            name="name"
            value={values.name}
            onChange={(e) => set("name", e.target.value)}
            maxLength={CONTACT_LIMITS.name}
            autoComplete="name"
            required
            className={cn(control, border("name"))}
            {...invalid("name")}
          />
        </Field>
        <Field id="contato-email" label={f.email} error={errorText("email")}>
          <input
            id="contato-email"
            name="email"
            type="email"
            value={values.email}
            onChange={(e) => set("email", e.target.value)}
            maxLength={CONTACT_LIMITS.email}
            autoComplete="email"
            required
            className={cn(control, border("email"))}
            {...invalid("email")}
          />
        </Field>
        <Field
          id="contato-phone"
          label={f.phone}
          optional={values.preference === "whatsapp" ? undefined : f.optional}
          error={errorText("phone")}
        >
          <input
            id="contato-phone"
            name="phone"
            type="tel"
            inputMode="tel"
            value={values.phone}
            onChange={(e) => set("phone", e.target.value.replace(/[^0-9()+\-.\s]/g, ""))}
            maxLength={CONTACT_LIMITS.phone}
            autoComplete="tel"
            placeholder="(11) 90000-0000"
            className={cn(control, border("phone"))}
            {...invalid("phone")}
          />
        </Field>
        <Field id="contato-company" label={f.company} optional={f.optional}>
          <input
            id="contato-company"
            name="company"
            value={values.company}
            onChange={(e) => set("company", e.target.value)}
            maxLength={CONTACT_LIMITS.company}
            autoComplete="organization"
            className={cn(control, border("company"))}
          />
        </Field>

        <Field
          id="contato-subject"
          label={f.subject}
          error={errorText("subject")}
          className={showBudget ? undefined : "sm:col-span-2"}
        >
          <div className="relative">
            <select
              id="contato-subject"
              name="subject"
              value={values.subject}
              onChange={(e) => set("subject", e.target.value as Subject | "")}
              required
              className={cn(
                control,
                border("subject"),
                "appearance-none pr-10 [&_option]:text-[#0e102e]",
                values.subject === "" && "text-[#7a7f9e]"
              )}
              {...invalid("subject")}
            >
              <option value="" disabled>
                {f.subjectPlaceholder}
              </option>
              {SUBJECTS.map((subject) => (
                <option key={subject} value={subject}>
                  {f.subjects[subject]}
                </option>
              ))}
            </select>
            <ChevronDown
              size={16}
              className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-[#646988]"
              aria-hidden="true"
            />
          </div>
        </Field>

        {showBudget && (
          <Field id="contato-budget" label={f.budget} optional={f.optional} className="animate-enter">
            <div className="relative">
              <select
                id="contato-budget"
                name="budget"
                value={values.budget}
                onChange={(e) => set("budget", e.target.value)}
                className={cn(
                  control,
                  border("budget"),
                  "appearance-none pr-10 [&_option]:text-[#0e102e]",
                  values.budget === "" && "text-[#7a7f9e]"
                )}
              >
                <option value="">{f.budgetPlaceholder}</option>
                {BUDGETS.map((budget) => (
                  <option key={budget} value={budget}>
                    {f.budgets[budget]}
                  </option>
                ))}
              </select>
              <ChevronDown
                size={16}
                className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-[#646988]"
                aria-hidden="true"
              />
            </div>
          </Field>
        )}

        <fieldset className="sm:col-span-2">
          <legend className="mb-1.5 text-[13px] font-semibold text-[#343858]">{f.preference}</legend>
          <div className="flex flex-wrap gap-2">
            {PREFERENCES.map((preference) => (
              <label
                key={preference}
                className={cn(
                  "cursor-pointer rounded-full border px-4 py-2 text-sm font-semibold transition-colors has-[:focus-visible]:outline has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-2 has-[:focus-visible]:outline-[#111184]",
                  values.preference === preference
                    ? "border-[#111184] bg-[#111184] text-white"
                    : "border-[#dfe3f2] text-[#343858] hover:border-[#111184]/50"
                )}
              >
                <input
                  type="radio"
                  name="preference"
                  value={preference}
                  checked={values.preference === preference}
                  onChange={() => set("preference", preference)}
                  className="sr-only"
                />
                {f.preferences[preference]}
              </label>
            ))}
          </div>
        </fieldset>

        <Field id="contato-message" label={f.message} error={errorText("message")} className="sm:col-span-2">
          <textarea
            id="contato-message"
            name="message"
            value={values.message}
            onChange={(e) => set("message", e.target.value)}
            maxLength={CONTACT_LIMITS.message}
            rows={5}
            required
            placeholder={f.messagePlaceholder}
            aria-describedby={cn("contato-message-counter", errors.has("message") && "contato-message-error")}
            aria-invalid={errors.has("message") || undefined}
            className={cn(control, border("message"), "resize-y")}
          />
          <p id="contato-message-counter" className="mt-1.5 flex justify-between gap-4 text-[12px] text-[#646988]">
            <span>{length < MESSAGE_MIN ? f.minHint.replace("{min}", String(MESSAGE_MIN)) : ""}</span>
            <span
              className={cn(
                "tabular-nums",
                length >= CONTACT_LIMITS.message * 0.9 && "text-amber-700",
                length >= CONTACT_LIMITS.message && "font-bold"
              )}
            >
              {f.counter.replace("{n}", String(length)).replace("{max}", String(CONTACT_LIMITS.message))}
            </span>
          </p>
        </Field>
      </div>

      {/* Honeypot: invisível para pessoas, preenchido só por robôs */}
      <input
        ref={honeypotRef}
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden="true"
      />

      <div className="mt-6 flex flex-wrap items-center gap-3">
        <button
          type="submit"
          disabled={status === "sending"}
          className="inline-flex items-center gap-2 rounded-md bg-[#111184] px-6 py-3 text-[15px] font-semibold text-white transition-colors hover:bg-[#0d0d66] disabled:opacity-60"
        >
          <Send size={16} aria-hidden="true" />
          {status === "sending" ? f.sending : f.send}
        </button>
        {failed && whatsappHref && (
          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-md bg-[#25D366] px-5 py-3 text-[15px] font-semibold text-[#0b2e1a] transition-colors hover:bg-[#2ee072]"
          >
            <MessageCircle size={16} aria-hidden="true" />
            {f.whatsapp}
          </a>
        )}
      </div>
      <p className="mt-3 text-sm text-[#343858]" role="status" aria-live="polite">
        {status === "error" && f.error}
        {status === "unavailable" && f.unavailable}
        {status === "captcha" && f.captcha}
      </p>

      {recaptchaEnabled && (
        <p className="mt-4 text-[12px] leading-relaxed text-[#646988]">
          {privacyText}
          <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="underline">
            {f.privacy}
          </a>
          {middleText}
          <a href="https://policies.google.com/terms" target="_blank" rel="noopener noreferrer" className="underline">
            {f.terms}
          </a>
          {endText}
        </p>
      )}
    </form>
  );
}
