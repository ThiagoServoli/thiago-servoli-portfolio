"use client";

import { useEffect, useRef } from "react";
import { profile } from "@/data/profile";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/context/LanguageContext";

export default function Journey() {
  const { t } = useLanguage();
  const listRef = useRef<HTMLOListElement>(null);
  const fillRef = useRef<HTMLDivElement>(null);

  // A linha da timeline se preenche conforme a rolagem e acende cada marco
  // que a "ponta" já passou. Atualiza no máximo uma vez por frame.
  useEffect(() => {
    const list = listRef.current;
    const fill = fillRef.current;
    if (!list || !fill) return;

    let raf = 0;
    const update = () => {
      raf = 0;
      const rect = list.getBoundingClientRect();
      const anchor = window.innerHeight * 0.6;
      const progress = Math.min(Math.max((anchor - rect.top) / rect.height, 0), 1);
      fill.style.transform = `scaleY(${progress})`;
      list.querySelectorAll<HTMLElement>("[data-milestone]").forEach((item) => {
        item.dataset.reached = String(item.getBoundingClientRect().top < anchor);
      });
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section id="trajetoria" className="relative bg-surface px-6 py-28 lg:px-10">
      <div className="mx-auto grid max-w-content gap-12 lg:grid-cols-12 lg:gap-16">
        <Reveal direction="left" className="lg:col-span-4">
          <div className="lg:sticky lg:top-28">
            <SectionHeading eyebrow={t.journey.eyebrow} title={t.journey.title} />
          </div>
        </Reveal>

        <ol ref={listRef} className="relative lg:col-span-8">
          <div className="absolute bottom-2 left-[7px] top-2 w-0.5 bg-line/10" aria-hidden="true" />
          <div
            ref={fillRef}
            className="absolute bottom-2 left-[7px] top-2 w-0.5 origin-top bg-gradient-to-b from-navy to-[#4f7dff]"
            style={{ transform: "scaleY(0)" }}
            aria-hidden="true"
          />
          {profile.timeline.map((item, i) => {
            const copy = t.journey.items[i];
            return (
              <li key={item.year} data-milestone className="group relative pb-12 pl-12 last:pb-0">
                <span
                  className={cn(
                    "absolute left-0 top-1.5 h-4 w-4 rounded-full border-2 border-line/20 bg-page transition-all duration-500",
                    "group-data-[reached=true]:scale-110 group-data-[reached=true]:border-primary group-data-[reached=true]:bg-primary group-data-[reached=true]:shadow-[0_0_0_5px_rgb(var(--c-primary)/0.15)]"
                  )}
                  aria-hidden="true"
                />
                <Reveal direction="right" delay={60}>
                  <div className="rounded-xl border border-line/10 bg-card p-6 transition-transform duration-300 hover:translate-x-1">
                    <p className="text-sm font-bold text-accent">{item.year}</p>
                    <h3 className="mt-1 text-xl font-bold text-fg">{copy.title}</h3>
                    {copy.place && <p className="mt-0.5 text-fg3">{copy.place}</p>}
                  </div>
                </Reveal>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
