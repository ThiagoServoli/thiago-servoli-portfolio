"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ArrowRight, Download } from "lucide-react";
import ButtonLink from "@/components/ButtonLink";
import HeroBackdrop from "@/components/HeroBackdrop";
import { chapterIds, chapterLabels, chapterNumber } from "@/data/chapters";
import { useLanguage } from "@/context/LanguageContext";

/** Atraso escalonado da animação de entrada (CSS puro, roda já na primeira pintura) */
const stagger = (i: number, step = 80) => ({ animationDelay: `${60 + i * step}ms` });

/**
 * Palavra revelada letra a letra, subindo de dentro de uma máscara. Cada letra
 * tem um span interno só para o hover (o externo fica preso à animação).
 */
function Letters({ word, start, className }: { word: string; start: number; className?: string }) {
  return (
    <span className="line-mask" aria-hidden="true">
      <span className={className}>
        {Array.from(word).map((char, i) => (
          <span key={i} className="inline-block animate-line-up" style={{ animationDelay: `${start + i * 40}ms` }}>
            <span className="inline-block transition-transform duration-500 ease-premium hover:-translate-y-[0.07em]">
              {char}
            </span>
          </span>
        ))}
      </span>
    </span>
  );
}

/** Alterna os cargos a cada poucos segundos (fica parado com movimento reduzido) */
function RoleTicker({ roles }: { roles: string[] }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    setIndex(0);
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = window.setInterval(() => setIndex((i) => (i + 1) % roles.length), 2800);
    return () => window.clearInterval(id);
  }, [roles]);

  return (
    <span className="line-mask">
      <span key={index} className="animate-line-up">
        {roles[index]}
      </span>
    </span>
  );
}

export default function Hero() {
  const { t } = useLanguage();
  const tb = t.hero.titleBlock;
  const labels = chapterLabels(t);

  const facts = [
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
    <section id="inicio" className="relative overflow-hidden px-6 pb-16 pt-32 lg:px-10 lg:pt-40">
      <HeroBackdrop />

      <div className="relative mx-auto max-w-content">
        <div className="grid gap-16 lg:grid-cols-12 lg:items-end lg:gap-12">
          <div className="lg:col-span-8">
            <p
              className="flex items-center gap-4 text-xs font-bold uppercase tracking-[0.22em] text-fg3 animate-enter"
              style={stagger(0)}
            >
              <span className="hidden sm:inline">{t.common.location}</span>
              <span className="hidden h-px w-10 bg-line/20 sm:block" aria-hidden="true" />
              <span className="sr-only">{t.common.role}</span>
              <span className="text-accent" aria-hidden="true">
                <RoleTicker roles={t.hero.roles} />
              </span>
            </p>

            <h1 className="mt-8 text-[3.6rem] font-bold leading-[0.95] tracking-[-0.045em] text-fg sm:text-[5.5rem] lg:text-[7.25rem]">
              <span className="sr-only">Thiago Servoli</span>
              <Letters word="Thiago" start={120} />
              <Letters word="Servoli" start={300} className="text-accent" />
            </h1>

            <p className="mt-8 max-w-xl text-lg leading-relaxed text-fg2 animate-enter" style={stagger(3)}>
              {t.hero.subtitle}
            </p>

            <div className="mt-10 flex flex-wrap gap-3 animate-enter" style={stagger(4)}>
              <ButtonLink href="#projetos" className="group">
                {t.hero.ctaProjects}
                <ArrowRight size={17} className="transition-transform group-hover:translate-x-1" />
              </ButtonLink>
              <ButtonLink href="#contato" variant="secondary">
                {t.hero.ctaContact}
              </ButtonLink>
              <ButtonLink href={t.common.cvHref} variant="secondary" download className="group">
                <Download size={17} className="transition-transform group-hover:translate-y-0.5" />
                {t.hero.cv}
              </ButtonLink>
            </div>
          </div>

          {/* Sumário: o índice do portfólio, como na abertura de um relatório */}
          <nav aria-label={t.hero.indexTitle} className="hidden lg:col-span-4 lg:block">
            <p
              className="flex items-baseline justify-between border-b border-fg pb-3 text-xs font-bold uppercase tracking-[0.22em] animate-enter"
              style={stagger(4)}
            >
              <span className="text-fg">{t.hero.indexTitle}</span>
              <span className="text-fg4">
                {t.hero.indexCount.replace("{n}", String(chapterIds.length).padStart(2, "0"))}
              </span>
            </p>
            <ol>
              {chapterIds.map((id, i) => (
                <li key={id} className="animate-enter" style={stagger(5 + i, 70)}>
                  <a
                    href={`#${id}`}
                    className="group flex items-center gap-4 border-b border-line/10 py-3 text-[15px] transition-colors hover:border-accent/40"
                  >
                    <span className="w-6 text-xs font-bold tabular-nums text-fg4 transition-colors group-hover:text-accent">
                      {chapterNumber(id)}
                    </span>
                    <span className="flex-1 font-semibold text-fg2 transition-all duration-300 ease-premium group-hover:translate-x-1 group-hover:text-fg">
                      {labels[id]}
                    </span>
                    <ArrowRight
                      size={15}
                      className="-translate-x-2 text-accent opacity-0 transition-all duration-300 ease-premium group-hover:translate-x-0 group-hover:opacity-100"
                      aria-hidden="true"
                    />
                  </a>
                </li>
              ))}
            </ol>
          </nav>
        </div>

        {/* Atualmente: as duas frentes de trabalho */}
        <div className="mt-20 border-t border-line/15 animate-enter" style={stagger(6)}>
          <p className="pt-6 text-xs font-bold uppercase tracking-[0.22em] text-fg4">{t.hero.currently}</p>
          <div className="grid lg:grid-cols-2 lg:gap-10">
            {[
              {
                href: "#click",
                badge: (
                  // Versão negativa do logo (creme sobre carvão), acima do tamanho mínimo de 80 px
                  <span className="flex h-12 w-40 shrink-0 items-center justify-center rounded-lg bg-click-coal px-6 text-click-cream">
                    <Image
                      src="/images/brands/click-wordmark-cream.png"
                      alt="Click."
                      width={1200}
                      height={312}
                      sizes="112px"
                      className="h-auto w-full"
                    />
                  </span>
                ),
                title: t.hero.currentlyRole,
                text: t.hero.currentlyText,
              },
              {
                href: "#trajetoria",
                badge: (
                  // Logo do Grupo In Press (texto branco + "In" vermelho) sobre preto, como no LinkedIn deles
                  <span className="flex h-12 w-40 shrink-0 items-center justify-center rounded-lg bg-black px-4">
                    <Image
                      src="/images/brands/grupo-inpress.png"
                      alt="Grupo In Press"
                      width={640}
                      height={96}
                      sizes="128px"
                      className="h-auto w-full"
                    />
                  </span>
                ),
                title: t.hero.currentlyJob,
                text: t.hero.currentlyJobText,
              },
            ].map((item, i) => (
              <a
                key={item.href}
                href={item.href}
                className="group flex flex-col gap-4 border-b border-line/15 py-6 animate-enter sm:flex-row sm:items-center sm:gap-6"
                style={stagger(7 + i)}
              >
                <span className="block w-fit shrink-0 transition-transform duration-500 ease-premium group-hover:-translate-y-0.5 group-hover:scale-[1.03]">
                  {item.badge}
                </span>
                <span className="flex-1">
                  <span className="block text-[17px] font-bold text-fg">{item.title}</span>
                  <span className="block text-[15px] text-fg3">{item.text}</span>
                </span>
                <ArrowRight
                  size={20}
                  className="hidden shrink-0 text-fg3 transition-all duration-300 ease-premium group-hover:translate-x-1 group-hover:text-accent sm:block"
                  aria-hidden="true"
                />
              </a>
            ))}
          </div>
        </div>

        {/* Ficha rápida */}
        <dl className="mt-10 grid grid-cols-1 gap-8 animate-enter sm:grid-cols-2 lg:grid-cols-4" style={stagger(9)}>
          {facts.map((fact) => (
            <div key={fact.label} className="flex flex-col-reverse gap-1.5">
              <dd className="text-[15px] font-semibold text-fg">{fact.value}</dd>
              <dt className="text-[10px] font-bold uppercase tracking-[0.22em] text-fg4">{fact.label}</dt>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
