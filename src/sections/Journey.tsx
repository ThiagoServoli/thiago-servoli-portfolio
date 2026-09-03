"use client";

import { profile } from "@/data/profile";
import Reveal from "@/components/Reveal";
import { useLanguage } from "@/context/LanguageContext";

export default function Journey() {
  const { t } = useLanguage();

  return (
    <section id="trajetoria" className="border-t border-line/10 px-6 py-32 lg:px-10">
      <div className="mx-auto max-w-content">
        <Reveal className="mb-16 max-w-2xl">
          <p className="font-mono text-sm font-bold uppercase tracking-[0.3em] text-neon-green">
            {t.journey.eyebrow}
          </p>
          <h2 className="mt-4 font-display text-4xl font-bold leading-tight text-fg sm:text-5xl">
            {t.journey.title}
          </h2>
        </Reveal>

        <ol className="relative border-l-2 border-line/10 pl-9 sm:pl-12">
          {profile.timeline.map((item, i) => {
            const copy = t.journey.items[i];
            return (
              <Reveal key={item.year} direction="left" delay={i * 90}>
                <li className="relative pb-16 last:pb-0">
                  <span
                    className="absolute -left-[calc(2.25rem+2px)] top-1.5 h-4 w-4 rounded-full bg-neon-green sm:-left-[calc(3rem+2px)]"
                    style={{ boxShadow: "0 0 16px 3px rgba(57,255,136,0.7)" }}
                    aria-hidden="true"
                  />
                  <p className="font-mono text-lg font-bold text-neon-green">{item.year}</p>
                  <h3 className="mt-2 font-display text-2xl font-bold text-fg sm:text-3xl">
                    {copy.title}
                  </h3>
                  {copy.place && <p className="mt-1.5 text-lg text-fg3">{copy.place}</p>}
                </li>
              </Reveal>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
