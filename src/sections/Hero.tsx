"use client";

import { ArrowRight, MapPin } from "lucide-react";
import { profile } from "@/data/profile";
import ButtonLink from "@/components/ButtonLink";
import Avatar3D from "@/components/Avatar3D";
import { useLanguage } from "@/context/LanguageContext";

/** Atraso escalonado da animação de entrada (CSS puro, roda já na primeira pintura) */
const stagger = (i: number) => ({ animationDelay: `${120 + i * 110}ms` });

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section id="inicio" className="relative overflow-hidden px-6 pb-24 pt-32 lg:px-10 lg:pb-32 lg:pt-36">
      <div className="bg-glow pointer-events-none absolute inset-0" aria-hidden="true" />
      <div className="bg-dots pointer-events-none absolute inset-0" aria-hidden="true" />

      <div className="relative mx-auto grid max-w-content items-center gap-20 lg:grid-cols-[1.2fr_1fr] lg:gap-16">
        <div>
          <p
            className="inline-flex items-center gap-2 rounded-full border border-accent/20 bg-card/70 px-3.5 py-1.5 text-sm font-semibold text-accent animate-enter"
            style={stagger(0)}
          >
            <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
            {t.common.role}
          </p>

          <h1
            className="mt-6 text-5xl font-bold leading-[1.02] tracking-tight text-fg animate-enter sm:text-6xl lg:text-[5.25rem]"
            style={stagger(1)}
          >
            Thiago
            <br />
            <span className="bg-gradient-to-r from-navy via-[#2f2fc4] to-[#4f7dff] bg-clip-text text-transparent dark:from-[#a3a5ff] dark:via-[#8c9bff] dark:to-[#7fb0ff]">
              Servoli
            </span>
          </h1>

          <p className="mt-7 max-w-xl text-lg leading-relaxed text-fg2 animate-enter" style={stagger(2)}>
            {t.hero.subtitle}
          </p>

          <ul
            className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-[15px] text-fg3 animate-enter"
            style={stagger(3)}
          >
            <li className="flex items-center gap-1.5">
              <MapPin size={16} aria-hidden="true" />
              {t.common.location}
            </li>
            {t.hero.languages.map((lang) => (
              <li key={lang.name}>
                {lang.name} <span className="text-fg4">· {lang.level}</span>
              </li>
            ))}
          </ul>

          <div className="mt-10 flex flex-wrap gap-3 animate-enter" style={stagger(4)}>
            <ButtonLink href="#projetos" className="group">
              {t.hero.ctaProjects}
              <ArrowRight size={17} className="transition-transform group-hover:translate-x-1" />
            </ButtonLink>
            <ButtonLink href="#contato" variant="secondary">
              {t.hero.ctaContact}
            </ButtonLink>
          </div>
        </div>

        <div className="animate-enter" style={stagger(2)}>
          <Avatar3D
            alt={t.hero.photoAlt.replace("{name}", profile.displayName)}
            availableLabel={t.hero.available}
          />
        </div>
      </div>

      <a
        href="#sobre"
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-fg3 transition-colors hover:text-accent lg:flex"
      >
        <span className="flex h-9 w-5 justify-center rounded-full border-2 border-current pt-1.5" aria-hidden="true">
          <span className="h-2 w-1 rounded-full bg-current animate-scroll-dot" />
        </span>
        {t.hero.scroll}
      </a>
    </section>
  );
}
