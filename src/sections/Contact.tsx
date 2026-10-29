"use client";

import { Github, Linkedin, Mail } from "lucide-react";
import { profile } from "@/data/profile";
import { buildMailto } from "@/lib/utils";
import Reveal from "@/components/Reveal";
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
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage: "radial-gradient(rgba(255,255,255,0.12) 1px, transparent 1px)",
            backgroundSize: "22px 22px",
            maskImage: "linear-gradient(90deg, transparent 30%, #000)",
          }}
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full border-[40px] border-white/[0.06]"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute -bottom-32 right-40 h-64 w-64 rounded-full border border-white/10 animate-spin-slow"
          aria-hidden="true"
        />

        <div className="relative">
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-white/70">
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
