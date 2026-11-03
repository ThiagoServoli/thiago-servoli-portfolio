"use client";

import { profile } from "@/data/profile";
import Reveal from "@/components/Reveal";
import CountUp from "@/components/CountUp";
import SectionHeading from "@/components/SectionHeading";
import { chapterNumber } from "@/data/chapters";
import { useLanguage } from "@/context/LanguageContext";

export default function About() {
  const { t } = useLanguage();
  const [lead, ...rest] = t.about.summary;
  const chapter = chapterNumber("sobre");

  return (
    <section id="sobre" className="relative px-6 py-28 lg:px-10">
      <div className="mx-auto max-w-content">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-6">
            <Reveal direction="left">
              <SectionHeading index={chapter} eyebrow={t.about.eyebrow} title={t.about.title} />
            </Reveal>
            <Reveal delay={100}>
              <p className="mt-8 text-xl font-medium leading-relaxed text-fg sm:text-[1.4rem]">{lead}</p>
            </Reveal>

            {/* Pilares, ao lado da ficha técnica */}
            <div className="mt-12 space-y-8">
              {rest.map((paragraph, i) => (
                <Reveal key={paragraph} delay={160 + i * 110} className="relative pt-5">
                  <span className="rule-draw absolute inset-x-0 top-0 h-px bg-line/20" aria-hidden="true" />
                  <p className="flex items-baseline gap-4">
                    <span className="text-xs font-bold tabular-nums text-accent">
                      {chapter}.{i + 1}
                    </span>
                    <span className="text-lg font-bold text-fg">{t.about.pillars[i]}</span>
                  </p>
                  <p className="mt-2 text-[15px] leading-relaxed text-fg2">{paragraph}</p>
                </Reveal>
              ))}
            </div>
          </div>

          {/* Ficha técnica */}
          <Reveal direction="right" className="lg:col-span-6 lg:pt-14">
            <div className="rounded-2xl border border-line/10 bg-card p-2 shadow-[0_30px_60px_-40px_rgba(17,17,132,0.35)]">
              <div className="flex items-center justify-between px-5 pb-3 pt-4">
                <span className="text-xs font-bold uppercase tracking-[0.22em] text-fg">{t.about.specTitle}</span>
                <span className="h-2 w-2 rounded-full bg-accent" aria-hidden="true" />
              </div>
              <dl>
                {t.about.specs.map((spec, i) => (
                  <div
                    key={spec.label}
                    className="grid grid-cols-[8.75rem_1fr] items-baseline gap-3 border-t border-line/10 px-5 py-3.5 transition-colors hover:bg-accent/[0.04] sm:grid-cols-[12rem_1fr]"
                  >
                    <dt className="flex items-baseline gap-3 text-[11px] font-bold uppercase tracking-[0.14em] text-fg4">
                      <span className="w-6 shrink-0 text-[10px] tabular-nums text-accent" aria-hidden="true">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      {spec.label}
                    </dt>
                    <dd className="text-[15px] font-semibold text-fg">{spec.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </Reveal>
        </div>

        {/* Números */}
        <dl className="mt-20 grid gap-px overflow-hidden rounded-2xl border border-line/10 bg-line/10 sm:grid-cols-3">
          {profile.stats.map((stat, i) => (
            <Reveal key={t.about.statsLabels[i]} delay={i * 110} className="flex flex-col-reverse bg-page px-8 py-9">
              <dt className="mt-2 text-[15px] text-fg3">{t.about.statsLabels[i]}</dt>
              <dd className="text-6xl font-bold tracking-[-0.04em] text-accent">
                <CountUp value={stat.value} suffix={stat.suffix} />
              </dd>
            </Reveal>
          ))}
        </dl>
      </div>
    </section>
  );
}
