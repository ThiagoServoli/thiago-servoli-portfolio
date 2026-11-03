"use client";

import { ArrowUpRight, Download, Github, Linkedin, Mail, MessageCircle } from "lucide-react";
import { profile } from "@/data/profile";
import { buildMailto } from "@/lib/utils";
import Reveal from "@/components/Reveal";
import { click } from "@/data/click";
import { chapterNumber } from "@/data/chapters";
import dynamic from "next/dynamic";
import ButtonLink from "@/components/ButtonLink";
import { useLanguage } from "@/context/LanguageContext";

// O formulário fica no fim da página: carrega num pedaço separado, fora da
// hidratação inicial (menos trabalho no celular ao abrir o site)
const ContactForm = dynamic(() => import("@/components/ContactForm"), {
  ssr: false,
  loading: () => <div className="h-[46rem] rounded-2xl border border-white/15 bg-white/[0.06]" aria-hidden="true" />,
});

export default function Contact() {
  const { t } = useLanguage();

  return (
    <section id="contato" className="px-6 py-28 lg:px-10">
      <Reveal
        direction="scale"
        className="relative mx-auto max-w-content overflow-hidden rounded-3xl bg-gradient-to-br from-navy via-[#191999] to-[#2b3fc0] px-6 py-14 text-white sm:px-14 sm:py-20"
      >
        {/* Luz de fundo estática */}
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(55%_70%_at_90%_10%,rgba(255,255,255,0.14),transparent_70%)]"
          aria-hidden="true"
        />

        <div className="relative">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-14">
            <div className="lg:col-span-6">
              <p className="flex items-center gap-4 text-xs font-bold uppercase tracking-[0.22em]">
                <span className="tabular-nums text-white">{chapterNumber("contato")}</span>
                <span className="text-white/70">{t.contact.eyebrow}</span>
                <span className="h-px w-16 bg-white/25" aria-hidden="true" />
              </p>
              <h2 className="mt-6 max-w-2xl text-4xl font-bold leading-[1.08] tracking-[-0.025em] text-balance sm:text-[3.25rem]">
                {t.contact.title}
              </h2>
              <p className="mt-5 max-w-xl text-lg text-white/80">{t.contact.subtitle}</p>

              <div className="mt-10 flex flex-wrap gap-3">
                <ButtonLink href={buildMailto(profile.email)} variant="inverted">
                  <Mail size={17} />
                  {t.contact.cta}
                </ButtonLink>
                <ButtonLink
                  href={`https://wa.me/${profile.whatsapp}?text=${encodeURIComponent(t.contact.form.whatsappHeading)}`}
                  variant="invertedOutline"
                  external
                >
                  <MessageCircle size={17} />
                  WhatsApp
                </ButtonLink>
                <ButtonLink href={t.common.cvHref} variant="invertedOutline" download>
                  <Download size={17} />
                  {t.contact.cv}
                </ButtonLink>
                {profile.socials.linkedin && (
                  <ButtonLink href={profile.socials.linkedin} variant="invertedOutline" external>
                    <Linkedin size={17} />
                    {t.contact.linkedin}
                  </ButtonLink>
                )}
                {profile.socials.github && (
                  <ButtonLink href={profile.socials.github} variant="invertedOutline" external>
                    <Github size={17} />
                    {t.contact.github}
                  </ButtonLink>
                )}
              </div>
            </div>

            <div className="lg:col-span-6">
              <ContactForm />
            </div>
          </div>

          <div className="mt-12 flex flex-col gap-4 border-t border-white/15 pt-6 text-[15px] sm:flex-row sm:items-center sm:justify-between">
            <p className="text-white/70">{profile.email}</p>
            <p className="text-white/70">
              {t.contact.clickNote}{" "}
              <a
                href={click.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-1 font-semibold text-white underline decoration-white/30 underline-offset-4 transition-colors hover:decoration-white"
              >
                {t.contact.clickCta}
                <ArrowUpRight size={15} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
            </p>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
