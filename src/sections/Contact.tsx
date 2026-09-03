"use client";

import { Github, Linkedin } from "lucide-react";
import { profile } from "@/data/profile";
import { buildMailto } from "@/lib/utils";
import Reveal from "@/components/Reveal";
import MagneticButton from "@/components/MagneticButton";
import { useLanguage } from "@/context/LanguageContext";

export default function Contact() {
  const { t } = useLanguage();

  return (
    <section
      id="contato"
      className="relative overflow-hidden border-t border-line/10 px-6 py-36 lg:px-10"
    >
      <Reveal className="relative mx-auto max-w-content text-center">
        <p className="font-mono text-sm font-bold uppercase tracking-[0.3em] text-neon-green">
          {t.contact.eyebrow}
        </p>
        <h2 className="mx-auto mt-6 max-w-3xl font-display text-5xl font-bold leading-tight text-fg text-balance sm:text-6xl">
          {t.contact.titleBefore}
          <span className="text-neon-gradient">{t.contact.titleHighlight}</span>
          {t.contact.titleAfter}
        </h2>
        <p className="mx-auto mt-6 max-w-lg text-balance text-xl text-fg2">{t.contact.subtitle}</p>

        <div className="mt-12 flex flex-wrap items-center justify-center gap-6">
          <MagneticButton href={buildMailto(profile.email)}>{t.contact.cta}</MagneticButton>
          {profile.socials.github && (
            <MagneticButton href={profile.socials.github} variant="secondary" external>
              <Github size={18} />
              {t.contact.github}
            </MagneticButton>
          )}
          {profile.socials.linkedin && (
            <MagneticButton href={profile.socials.linkedin} variant="secondary" external>
              <Linkedin size={18} />
              {t.contact.linkedin}
            </MagneticButton>
          )}
        </div>

        <p className="mt-10 font-mono text-lg text-fg3">{profile.email}</p>
      </Reveal>
    </section>
  );
}
