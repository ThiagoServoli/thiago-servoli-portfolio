"use client";

import { profile } from "@/data/profile";
import Reveal from "@/components/Reveal";
import CountUp from "@/components/CountUp";
import SectionHeading from "@/components/SectionHeading";
import { CropMarks, DimensionLine } from "@/components/Blueprint";
import { useLanguage } from "@/context/LanguageContext";

export default function About() {
  const { t } = useLanguage();
  const [lead, ...rest] = t.about.summary;

  return (
    <section id="sobre" className="relative px-6 py-28 lg:px-10">
      <div className="mx-auto max-w-content">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-6">
            <Reveal direction="left">
              <SectionHeading index="02" eyebrow={t.about.eyebrow} title={t.about.title} />
            </Reveal>
            <Reveal delay={100}>
              <p className="mt-8 border-l-2 border-accent pl-6 text-xl font-medium leading-relaxed text-fg sm:text-[1.4rem]">
                {lead}
              </p>
            </Reveal>
            <div data-avatar-slot="sobre" className="mt-10 hidden h-[140px] w-[112px] lg:block" aria-hidden="true" />
          </div>

          {/* Ficha técnica no formato de carimbo de prancha */}
          <Reveal direction="right" className="lg:col-span-6">
            <div className="relative border border-line/20 bg-card">
              <CropMarks className="text-accent/60" />
              <div className="flex items-center justify-between bg-navy px-5 py-3 text-white">
                <span className="text-xs font-bold uppercase tracking-[0.2em]">{t.about.specTitle}</span>
                <span className="text-[10px] font-semibold tracking-[0.2em] text-white/60">REV. 2026</span>
              </div>
              <dl>
                {t.about.specs.map((spec, i) => (
                  <div
                    key={spec.label}
                    className="grid grid-cols-[2.25rem_7.5rem_1fr] items-baseline gap-3 border-t border-line/10 px-5 py-3.5 transition-colors hover:bg-accent/[0.04] sm:grid-cols-[2.25rem_9rem_1fr]"
                  >
                    <span className="text-[10px] font-bold tabular-nums text-accent/70">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <dt className="text-[11px] font-bold uppercase tracking-[0.14em] text-fg4">{spec.label}</dt>
                    <dd className="text-[15px] font-semibold text-fg">{spec.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </Reveal>
        </div>

        {/* Pilares */}
        <div className="mt-20 grid gap-10 md:grid-cols-3 md:gap-8">
          {rest.map((paragraph, i) => (
            <Reveal key={paragraph} delay={i * 110} className="border-t-2 border-fg pt-6">
              <p className="flex items-baseline justify-between">
                <span className="text-lg font-bold text-fg">{t.about.pillars[i]}</span>
                <span className="text-xs font-bold tabular-nums text-accent">02.{i + 1}</span>
              </p>
              <p className="mt-3 text-[15px] leading-relaxed text-fg2">{paragraph}</p>
            </Reveal>
          ))}
        </div>

        {/* Números com cotas */}
        <dl className="mt-20 grid gap-12 sm:grid-cols-3 sm:gap-8">
          {profile.stats.map((stat, i) => (
            <Reveal key={stat.label} direction="scale" delay={i * 110} className="flex flex-col-reverse">
              <dt className="mt-3 text-center text-[15px] text-fg3">{t.about.statsLabels[i]}</dt>
              <dd>
                <p className="text-center text-6xl font-bold tracking-tight text-accent">
                  <CountUp value={stat.value} suffix={stat.suffix} />
                </p>
                <DimensionLine className="mt-3">
                  {String(i + 1).padStart(2, "0")}
                </DimensionLine>
              </dd>
            </Reveal>
          ))}
        </dl>
      </div>
    </section>
  );
}
