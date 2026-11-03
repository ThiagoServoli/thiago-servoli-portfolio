"use client";

import { useEffect, useRef } from "react";
import { ArrowUpRight, Linkedin } from "lucide-react";
import Reveal from "@/components/Reveal";
import { click } from "@/data/click";
import { chapterNumber } from "@/data/chapters";
import { useLanguage } from "@/context/LanguageContext";

/** Ponto final laranja da marca: encerra títulos (nunca destaca palavras inteiras) */
function Dot() {
  return <span className="text-click-orange">.</span>;
}

/**
 * Onda do clique: círculos concêntricos a partir de um ponto laranja (manual,
 * "Elementos gráficos"). Anéis estáticos + anéis animados em CSS.
 */
function ClickWave({ className }: { className?: string }) {
  const rings = [60, 120, 190, 270];
  return (
    <svg viewBox="-300 -300 600 600" className={className} aria-hidden="true">
      {rings.map((r, i) => (
        <circle
          key={r}
          r={r}
          fill="none"
          stroke="#FB4F14"
          strokeOpacity={0.5 - i * 0.12}
          strokeWidth="1.2"
          vectorEffect="non-scaling-stroke"
        />
      ))}
      {[0, 1.6, 3.2].map((delay) => (
        <circle
          key={delay}
          r="290"
          fill="none"
          stroke="#FB4F14"
          strokeOpacity="0.35"
          strokeWidth="1.2"
          vectorEffect="non-scaling-stroke"
          className="click-wave-ring"
          style={{ animationDelay: `${delay}s` }}
        />
      ))}
      <circle r="16" fill="#FB4F14" />
    </svg>
  );
}

export default function ClickVenture() {
  const { t } = useLanguage();
  const c = t.click;
  const sectionRef = useRef<HTMLElement>(null);

  // A onda só anima com a seção na tela: fora dela, nada roda
  useEffect(() => {
    const section = sectionRef.current;
    if (!section || typeof IntersectionObserver === "undefined") return;
    const observer = new IntersectionObserver(([entry]) => {
      section.dataset.inview = String(entry.isIntersecting);
    });
    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="click"
      className="relative overflow-hidden bg-click-coal px-6 py-28 font-geist text-click-cream lg:px-10 lg:py-36"
    >
      <ClickWave className="pointer-events-none absolute -right-[19rem] -top-[17rem] h-[44rem] w-[44rem] lg:-right-[14rem] lg:-top-[16rem]" />

      <div className="relative mx-auto max-w-content">
        {/* Abertura do capítulo, na linguagem do portfólio mas com as cores da marca */}
        <Reveal>
          <p className="flex items-center gap-4 text-xs font-semibold uppercase tracking-[0.22em]">
            <span className="tabular-nums text-click-orange">{chapterNumber("click")}</span>
            <span className="text-click-sand">{c.eyebrow}</span>
            <span className="rule-draw h-px flex-1 bg-click-cream/15" aria-hidden="true" />
          </p>
        </Reveal>

        <div className="mt-14 grid gap-14 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <Reveal>
              <h2>
                <span className="click-wordmark w-[13rem] text-click-cream sm:w-[17rem]" role="img" aria-label="Click." />
              </h2>
              <p className="mt-6 inline-flex items-center gap-2.5 rounded-full border border-click-cream/15 px-4 py-1.5 text-sm font-medium text-click-cream">
                <span className="h-2 w-2 rounded-full bg-click-orange" aria-hidden="true" />
                {c.role}
              </p>
            </Reveal>

            <Reveal delay={100}>
              <p className="mt-10 font-unbounded text-[1.9rem] font-semibold leading-[1.05] tracking-[-0.025em] text-balance sm:text-[2.6rem] lg:text-[3.1rem]">
                {c.title}
                <Dot />
              </p>
              <p className="mt-7 max-w-xl text-[17px] leading-[1.6] text-click-sand">{c.intro}</p>
            </Reveal>

            <Reveal delay={180} className="mt-10 flex flex-wrap gap-3">
              {/* Texto sobre laranja sempre em carvão (contraste acessível, manual) */}
              <a
                href={click.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 rounded-full bg-click-orange px-6 py-3 text-[15px] font-semibold text-click-coal transition-transform duration-300 ease-premium hover:-translate-y-0.5"
              >
                {c.ctaSite}
                <ArrowUpRight
                  size={17}
                  className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </a>
              <a
                href={click.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-click-cream/25 px-6 py-3 text-[15px] font-semibold text-click-cream transition-colors hover:border-click-cream hover:bg-click-cream/5"
              >
                <Linkedin size={17} />
                {c.ctaLinkedin}
              </a>
            </Reveal>
          </div>

          {/* Meu papel */}
          <Reveal direction="right" delay={120} className="lg:col-span-5">
            <div className="rounded-2xl border border-click-cream/10 bg-click-panel p-7 sm:p-8">
              <p className="font-unbounded text-lg font-semibold tracking-[-0.01em]">
                {c.roleTitle}
                <Dot />
              </p>
              <p className="mt-4 text-[15px] leading-[1.65] text-click-cream/85">{c.roleText}</p>
              <dl className="mt-7">
                {c.facts.map((fact) => (
                  <div
                    key={fact.label}
                    className="grid grid-cols-[6.5rem_1fr] gap-4 border-t border-click-cream/10 py-3.5 text-[14px] sm:grid-cols-[7.5rem_1fr]"
                  >
                    <dt className="text-click-sand">{fact.label}</dt>
                    <dd className="font-medium text-click-cream">{fact.value}</dd>
                  </div>
                ))}
              </dl>
              <p className="mt-2 border-t border-click-cream/10 pt-4 text-[13px] text-click-sand">{click.host}</p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
