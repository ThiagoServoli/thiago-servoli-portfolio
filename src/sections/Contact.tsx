"use client";

import { Github, Linkedin, Mail } from "lucide-react";
import { profile } from "@/data/profile";
import { buildMailto } from "@/lib/utils";
import Reveal from "@/components/Reveal";
import { CropMarks, SectionCallout } from "@/components/Blueprint";
import ButtonLink from "@/components/ButtonLink";
import { useLanguage } from "@/context/LanguageContext";

export default function Contact() {
  const { t } = useLanguage();

  return (
    <section id="contato" className="px-6 py-28 lg:px-10">
      <Reveal
        direction="scale"
        className="relative mx-auto max-w-content overflow-hidden rounded-3xl bg-gradient-to-br from-navy via-[#191999] to-[#2b3fc0] px-8 py-16 text-white sm:px-14 sm:py-20"
      >
        {/* Elementos decorativos estáticos */}
        <svg
          viewBox="0 0 600 600"
          className="pointer-events-none absolute -right-40 top-1/2 aspect-square h-[150%] -translate-y-1/2 overflow-visible"
          aria-hidden="true"
        >
          <circle cx="300" cy="300" r="140" fill="none" stroke="rgba(255,255,255,0.12)" />
          <circle cx="300" cy="300" r="210" fill="none" stroke="rgba(255,255,255,0.09)" />
          <circle cx="300" cy="300" r="280" fill="none" stroke="rgba(255,255,255,0.12)" strokeDasharray="14 4 2 4" />
          <path d="M-400 300 H600 M300 0 V600" stroke="rgba(255,255,255,0.12)" strokeDasharray="14 4 2 4" />
        </svg>
        <CropMarks className="text-white/40" inset={16} />
        <div
          data-avatar-slot="contato"
          className="absolute bottom-0 right-16 hidden h-[140px] w-[112px] lg:block"
          aria-hidden="true"
        />

        <div className="relative">
          <p className="flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.16em] text-white/80">
            <SectionCallout index="07" tone="light" />
            {t.contact.eyebrow}
          </p>
          <h2 className="mt-4 max-w-2xl text-4xl font-bold leading-tight tracking-tight text-balance sm:text-5xl">
            {t.contact.title}
          </h2>
          <p className="mt-5 max-w-xl text-lg text-white/80">{t.contact.subtitle}</p>

          <div className="mt-10 flex flex-wrap gap-3">
            <ButtonLink href={buildMailto(profile.email)} variant="inverted">
              <Mail size={17} />
              {t.contact.cta}
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

          <p className="mt-8 text-white/70">{profile.email}</p>
        </div>
      </Reveal>
    </section>
  );
}
