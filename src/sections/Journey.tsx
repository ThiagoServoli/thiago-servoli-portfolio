"use client";

import { useEffect, useRef } from "react";
import { profile } from "@/data/profile";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { CropMarks } from "@/components/Blueprint";
import { useLanguage } from "@/context/LanguageContext";

const DESKTOP = "(min-width: 1024px)";

export default function Journey() {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);
  const viewportRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const fillRef = useRef<HTMLDivElement>(null);
  const slotRef = useRef<HTMLDivElement>(null);
  const total = profile.timeline.length;

  /*
   * Desktop: a seção fica fixada (sticky) e a rolagem vertical desloca a trilha
   * na horizontal. A altura da seção é calculada para que a rolagem dure
   * exatamente o deslocamento necessário. Só transform — nada de layout por frame.
   */
  useEffect(() => {
    const section = sectionRef.current;
    const viewport = viewportRef.current;
    const track = trackRef.current;
    const fill = fillRef.current;
    const slot = slotRef.current;
    if (!section || !viewport || !track || !fill || !slot) return;

    const desktop = window.matchMedia(DESKTOP);
    let shift = 0;
    let raf = 0;

    const layout = () => {
      if (!desktop.matches) {
        section.style.height = "";
        track.style.transform = "";
        return;
      }
      const style = getComputedStyle(viewport);
      const inner = viewport.clientWidth - parseFloat(style.paddingLeft) - parseFloat(style.paddingRight);
      shift = Math.max(track.scrollWidth - inner, 0);
      // 1.5× o deslocamento: a trilha anda mais devagar que a rolagem, dando
      // tempo de ler cada prancha
      section.style.height = `${window.innerHeight + shift * 1.5}px`;
    };

    const update = () => {
      raf = 0;
      if (!desktop.matches) return;
      const rect = section.getBoundingClientRect();
      const range = rect.height - window.innerHeight;
      const p = range > 0 ? Math.min(Math.max(-rect.top / range, 0), 1) : 0;
      track.style.transform = `translate3d(${-p * shift}px, 0, 0)`;
      fill.style.transform = `scaleX(${p})`;
      // Ponto de pouso do avatar: caminha sobre a linha de base
      slot.style.transform = `translateX(${p * track.scrollWidth}px)`;
    };

    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    const onResize = () => {
      layout();
      onScroll();
    };

    layout();
    update();
    const observer = new ResizeObserver(onResize);
    observer.observe(track);
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);
    desktop.addEventListener("change", onResize);
    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
      desktop.removeEventListener("change", onResize);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section ref={sectionRef} id="trajetoria" className="relative bg-surface">
      <div className="px-6 py-28 lg:sticky lg:top-0 lg:flex lg:h-screen lg:flex-col lg:justify-center lg:overflow-hidden lg:px-10 lg:py-0">
        <div className="mx-auto w-full max-w-content">
          <Reveal className="flex items-end justify-between gap-8">
            <SectionHeading index="05" eyebrow={t.journey.eyebrow} title={t.journey.title} />
            <p className="hidden shrink-0 text-xs font-bold uppercase tracking-[0.2em] text-fg4 lg:block">
              {profile.timeline[0].year} — {profile.timeline[total - 1].year}
            </p>
          </Reveal>

          {/* Janela da trilha: recorta na largura do conteúdo (o respiro lateral
              mantém visíveis as marcas de corte dos cards) */}
          <div ref={viewportRef} className="mt-12 lg:-mx-4 lg:overflow-hidden lg:px-4 lg:pt-3">
            <div ref={trackRef} className="relative will-change-transform lg:w-max">
              <ol className="flex flex-col gap-6 lg:flex-row lg:gap-8 lg:pb-[9.5rem]">
                {profile.timeline.map((item, i) => {
                  const copy = t.journey.items[i];
                  return (
                    <li key={item.year} className="relative lg:w-[27rem]">
                      <article className="relative h-full border border-line/15 bg-card p-7">
                        <CropMarks className="text-accent/50" inset={-8} />
                        <div className="flex items-center justify-between border-b border-line/10 pb-4">
                          <span className="text-xs font-bold tabular-nums tracking-[0.2em] text-accent">
                            05.{i + 1}
                          </span>
                          <span className="text-xs font-bold tabular-nums text-fg4">
                            {String(i + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
                          </span>
                        </div>
                        <p className="mt-6 text-5xl font-bold tracking-tight text-accent">{item.year}</p>
                        <h3 className="mt-4 text-xl font-bold leading-snug text-fg">{copy.title}</h3>
                        {copy.place && (
                          <p className="mt-1 text-[15px] font-medium text-fg3">{copy.place}</p>
                        )}
                        <p className="mt-4 text-[15px] leading-relaxed text-fg2">{copy.focus}</p>
                        <ul className="mt-5 flex flex-wrap gap-2">
                          {copy.tags.map((tag) => (
                            <li
                              key={tag}
                              className="border border-accent/20 px-2.5 py-1 text-xs font-semibold text-accent"
                            >
                              {tag}
                            </li>
                          ))}
                        </ul>
                      </article>
                      {/* Marco sobre a linha de base (desktop) */}
                      <span
                        className="absolute left-7 top-[calc(100%+99px)] hidden h-4 w-4 rounded-full border-2 border-accent bg-surface lg:block"
                        aria-hidden="true"
                      />
                    </li>
                  );
                })}
              </ol>

              {/* Linha de base: trilho + preenchimento que acompanha a rolagem */}
              <div className="absolute bottom-[2.75rem] left-0 right-0 hidden h-[2px] bg-line/15 lg:block" aria-hidden="true">
                <div ref={fillRef} className="h-full origin-left bg-accent" style={{ transform: "scaleX(0)" }} />
              </div>
              <div
                ref={slotRef}
                data-avatar-slot="trajetoria"
                data-avatar-scale="0.62"
                className="absolute bottom-[2.875rem] left-0 hidden h-[140px] w-0 lg:block"
                aria-hidden="true"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
