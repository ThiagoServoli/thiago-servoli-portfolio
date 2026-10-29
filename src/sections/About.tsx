"use client";

import { profile } from "@/data/profile";
import Reveal from "@/components/Reveal";
import CountUp from "@/components/CountUp";
import SectionHeading from "@/components/SectionHeading";
import { useLanguage } from "@/context/LanguageContext";

export default function About() {
  const { t } = useLanguage();
  const [lead, ...rest] = t.about.summary;

  return (
    <section id="sobre" className="relative px-6 py-28 lg:px-10">
      <div className="mx-auto max-w-content">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <Reveal direction="left" className="lg:col-span-4">
            <SectionHeading eyebrow={t.about.eyebrow} title={t.about.title} />
          </Reveal>

          <div className="lg:col-span-8">
            <Reveal>
              <p className="text-xl font-medium leading-relaxed text-fg sm:text-2xl">{lead}</p>
            </Reveal>
            <div className="mt-8 grid gap-6 sm:grid-cols-3">
              {rest.map((paragraph, i) => (
                <Reveal
                  key={paragraph}
                  delay={i * 100}
                  className="rounded-xl border border-line/10 bg-card p-6 text-[15px] leading-relaxed text-fg2 transition-transform duration-300 hover:-translate-y-1"
                >
                  <span className="mb-3 block text-sm font-bold text-accent">0{i + 1}</span>
                  {paragraph}
                </Reveal>
              ))}
            </div>
          </div>
        </div>

        <dl className="mt-16 grid grid-cols-1 gap-4 sm:grid-cols-3">
          {profile.stats.map((stat, i) => (
            <Reveal
              key={stat.label}
              direction="scale"
              delay={i * 100}
              className="relative flex flex-col-reverse overflow-hidden rounded-xl bg-navy px-8 py-7 text-white"
            >
              <div
                className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full border-[20px] border-white/5"
                aria-hidden="true"
              />
              <dt className="mt-1 text-[15px] text-white/70">{t.about.statsLabels[i]}</dt>
              <dd className="text-5xl font-bold tracking-tight">
                <CountUp value={stat.value} suffix={stat.suffix} />
              </dd>
            </Reveal>
          ))}
        </dl>
      </div>
    </section>
  );
}
