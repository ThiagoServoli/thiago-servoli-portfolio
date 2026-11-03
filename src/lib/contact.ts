/**
 * Regras do formulário de contato, compartilhadas entre o navegador (validação
 * e contadores) e a rota /api/contact (validação final e mensagem enviada).
 */

export const CONTACT_LIMITS = { name: 80, email: 120, phone: 20, company: 80, message: 1000 } as const;
export const MESSAGE_MIN = 20;

export const SUBJECTS = ["job", "freelance", "click", "partnership", "other"] as const;
export type Subject = (typeof SUBJECTS)[number];

export const BUDGETS = ["upTo15", "from15to50", "from50to150", "over150", "talk"] as const;
export type Budget = (typeof BUDGETS)[number];

/** Assuntos em que faz sentido perguntar a faixa de investimento */
export const SUBJECTS_WITH_BUDGET: readonly Subject[] = ["freelance", "click"];

export const PREFERENCES = ["email", "whatsapp"] as const;
export type Preference = (typeof PREFERENCES)[number];

export const RECAPTCHA_ACTION = "contact";
export const RECAPTCHA_MIN_SCORE = 0.5;

export interface ContactData {
  name: string;
  email: string;
  phone: string;
  company: string;
  subject: Subject;
  budget: Budget | "";
  preference: Preference;
  message: string;
}

export type ContactField = keyof ContactData;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const PHONE_RE = /^[0-9()+\-.\s]+$/;

function text(value: unknown, max: number) {
  return typeof value === "string" ? value.trim().slice(0, max) : "";
}

function oneOf<T extends string>(value: unknown, options: readonly T[]): T | undefined {
  return typeof value === "string" && (options as readonly string[]).includes(value) ? (value as T) : undefined;
}

/** Normaliza e valida; devolve os dados limpos (`data`) ou os campos inválidos (`fields`) */
export function validateContact(
  input: Record<string, unknown>
): { data: ContactData; fields?: undefined } | { data?: undefined; fields: ContactField[] } {
  const fields: ContactField[] = [];

  const name = text(input.name, CONTACT_LIMITS.name);
  const email = text(input.email, CONTACT_LIMITS.email);
  const phone = text(input.phone, CONTACT_LIMITS.phone);
  const company = text(input.company, CONTACT_LIMITS.company);
  const message = text(input.message, CONTACT_LIMITS.message);
  const subject = oneOf(input.subject, SUBJECTS);
  const preference = oneOf(input.preference, PREFERENCES) ?? "email";
  const budget = subject && SUBJECTS_WITH_BUDGET.includes(subject) ? oneOf(input.budget, BUDGETS) ?? "" : "";
  const phoneDigits = phone.replace(/\D/g, "").length;

  if (name.length < 2) fields.push("name");
  if (!EMAIL_RE.test(email)) fields.push("email");
  if (phone && (!PHONE_RE.test(phone) || phoneDigits < 10 || phoneDigits > 13)) fields.push("phone");
  if (preference === "whatsapp" && !phone) fields.push("phone");
  if (!subject) fields.push("subject");
  if (message.length < MESSAGE_MIN) fields.push("message");

  if (fields.length > 0 || !subject) return { fields: Array.from(new Set(fields)) };
  return { data: { name, email, phone, company, subject, budget, preference, message } };
}

export interface ContactLabels {
  name: string;
  email: string;
  phone: string;
  company: string;
  subject: string;
  budget: string;
  preference: string;
  message: string;
  subjects: Record<Subject, string>;
  budgets: Record<Budget, string>;
  preferences: Record<Preference, string>;
}

/** Texto da mensagem (WhatsApp / e-mail), com os rótulos do idioma informado */
export function formatContactMessage(data: ContactData, labels: ContactLabels, heading: string) {
  const details = [
    `${labels.name}: ${data.name}`,
    `${labels.email}: ${data.email}`,
    data.phone && `${labels.phone}: ${data.phone}`,
    data.company && `${labels.company}: ${data.company}`,
    `${labels.subject}: ${labels.subjects[data.subject]}`,
    data.budget && `${labels.budget}: ${labels.budgets[data.budget]}`,
    `${labels.preference}: ${labels.preferences[data.preference]}`,
  ].filter(Boolean);
  return [heading, "", ...details, "", data.message].join("\n");
}
