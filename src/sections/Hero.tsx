"use client";

import { ArrowRight } from "lucide-react";
import { profile } from "@/data/profile";
import ButtonLink from "@/components/ButtonLink";
import PhotoCard from "@/components/PhotoCard";
import { DimensionLine, RegistrationMark, SectionCallout } from "@/components/Blueprint";
import { useLanguage } from "@/context/LanguageContext";

/** Atraso escalonado da animação de entrada (CSS puro, roda já na primeira pintura) */
const stagger = (i: number) => ({ animationDelay: `${120 + i * 110}ms` });

export default function Hero() {
  const { t } = useLanguage();
  const tb = t.hero.titleBlock;

  const cells = [
    {
      label: tb.availability,
      value: (
        <span className="flex items-center gap-2">
          <span className="relative flex h-2 w-2" aria-hidden="true">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
          </span>
          {tb.availabilityValue}
        </span>
      ),
    },
    { label: tb.base, value: t.common.location },
    { label: tb.languages, value: t.hero.languages.map((l) => `${l.name} · ${l.level}`).join(" / ") },
    { label: tb.focus, value: tb.focusValue },
  ];

  return (
    <section id="inicio" className="relative overflow-hidden px-6 pb-16 pt-28 lg:px-10 lg:pt-32">
      <div className="bg-glow pointer-events-none absolute inset-0" aria-hidden="true" />

      <div className="relative mx-auto max-w-content">
        {/* Marcas de registro e coordenadas — detalhes de prancha técnica */}
        <RegistrationMark className="absolute -left-3 -top-3 hidden lg:block" />
        <RegistrationMark className="absolute -right-3 -top-3 hidden lg:block" />
        <p className="absolute right-6 top-0 hidden text-[11px] font-semibold tracking-[0.2em] text-fg4 lg:block">
          23°33′S · 46°38′W
        </p>

        <div className="grid items-center gap-20 pt-6 lg:grid-cols-[1.2fr_1fr] lg:gap-16">
          <div>
            <p
              className="flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.16em] text-accent animate-enter"
              style={stagger(0)}
            >
              <SectionCallout index="01" />
              {t.common.role}
            </p>

            <div className="mt-7 w-fit animate-enter" style={stagger(1)}>
              <h1 className="text-5xl font-bold leading-[1.02] tracking-tight text-fg sm:text-6xl lg:text-[5.25rem]">
                Thiago
                <br />
                <span className="text-accent">Servoli</span>
              </h1>
              <DimensionLine className="mt-4">
                {profile.stats[0].value}
                {profile.stats[0].suffix} {t.about.statsLabels[0]}
              </DimensionLine>
            </div>

            <p className="mt-7 max-w-xl text-lg leading-relaxed text-fg2 animate-enter" style={stagger(2)}>
              {t.hero.subtitle}
            </p>

            <div className="mt-10 flex flex-wrap gap-3 animate-enter" style={stagger(3)}>
              <ButtonLink href="#projetos" className="group">
                {t.hero.ctaProjects}
                <ArrowRight size={17} className="transition-transform group-hover:translate-x-1" />
              </ButtonLink>
              <ButtonLink href="#contato" variant="secondary">
                {t.hero.ctaContact}
              </ButtonLink>
            </div>
          </div>

          <div className="relative animate-enter" style={stagger(2)}>
            <PhotoCard alt={t.hero.photoAlt.replace("{name}", profile.displayName)} />
            {/* Ponto de pouso do avatar: em frente ao canto da foto */}
            <div
              data-avatar-slot="inicio"
              className="absolute -bottom-10 right-0 hidden h-[140px] w-[112px] lg:block xl:-right-6"
              aria-hidden="true"
            />
          </div>
        </div>

        {/* Legenda técnica (carimbo de prancha) */}
        <dl
          className="mt-24 grid grid-cols-1 gap-px border border-line/15 bg-line/15 animate-enter sm:grid-cols-2 lg:grid-cols-4"
          style={stagger(5)}
        >
          {cells.map((cell, i) => (
            <div
              key={cell.label}
              className="flex flex-col-reverse gap-1 bg-card px-5 py-4"
            >
              <dd className="text-[15px] font-semibold text-fg">{cell.value}</dd>
              <dt className="flex items-center justify-between text-[10px] font-bold uppercase tracking-[0.2em] text-fg4">
                {cell.label}
                <span className="tabular-nums">A{i + 1}</span>
              </dt>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
