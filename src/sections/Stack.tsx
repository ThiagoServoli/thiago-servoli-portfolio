"use client";

import type { CSSProperties } from "react";
import { technologies, type TechCategory } from "@/data/technologies";
import Reveal from "@/components/Reveal";
import TechIcon, { techBrands } from "@/components/TechIcon";
import SectionHeading from "@/components/SectionHeading";
import { useLanguage } from "@/context/LanguageContext";

const categories: TechCategory[] = ["frontend", "backend", "tools"];

export default function Stack() {
  const { t } = useLanguage();

  return (
    <section id="stack" className="relative bg-surface px-6 py-28 lg:px-10">
      <div className="mx-auto max-w-content">
        <div className="flex items-end justify-between gap-8">
          <Reveal>
            <SectionHeading index="03" eyebrow={t.stack.eyebrow} title={t.stack.title} />
          </Reveal>
          <div data-avatar-slot="stack" className="hidden h-[140px] w-[112px] shrink-0 lg:block" aria-hidden="true" />
        </div>

        <div className="mt-14 space-y-12">
          {categories.map((category) => {
            const items = technologies.filter((tech) => tech.category === category);
            return (
              <div key={category}>
                <Reveal direction="left">
                  <h3 className="flex items-center gap-4 text-sm font-semibold uppercase tracking-[0.14em] text-fg3">
                    {t.stack.categories[category]}
                    <span className="h-px flex-1 bg-line/10" aria-hidden="true" />
                    <span className="text-fg4">{String(items.length).padStart(2, "0")}</span>
                  </h3>
                </Reveal>
                <ul className="mt-5 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
                  {items.map((tech, i) => {
                    const brand = techBrands[tech.name]?.color ?? "currentColor";
                    return (
                      <Reveal
                        as="li"
                        key={tech.name}
                        delay={i * 60}
                        direction="scale"
                        className="group"
                      >
                        <div
                          className="relative flex h-full flex-col items-center gap-3 overflow-hidden rounded-xl border border-line/10 bg-card px-4 py-7 text-center transition-all duration-300 ease-premium hover:-translate-y-1.5 hover:border-[color:var(--brand)] hover:shadow-[0_18px_40px_-18px_var(--brand)]"
                          style={{ "--brand": brand === "currentColor" ? "rgb(var(--c-fg))" : brand } as CSSProperties}
                        >
                          <TechIcon
                            name={tech.name}
                            className="text-4xl transition-transform duration-300 ease-premium group-hover:scale-110"
                          />
                          <span className="text-[15px] font-semibold text-fg">{tech.name}</span>
                          <span
                            className="absolute inset-x-0 bottom-0 h-1 origin-left scale-x-0 bg-[color:var(--brand)] transition-transform duration-300 ease-premium group-hover:scale-x-100"
                            aria-hidden="true"
                          />
                        </div>
                      </Reveal>
                    );
                  })}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
