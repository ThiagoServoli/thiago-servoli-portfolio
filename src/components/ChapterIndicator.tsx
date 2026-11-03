"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import { cn } from "@/lib/utils";
import { useActiveSection } from "@/hooks/useActiveSection";
import { useLanguage } from "@/context/LanguageContext";
import { chapterIds, chapterLabels, chapterNumber, chapterTotal } from "@/data/chapters";

/**
 * Cabeço corrido, como num relatório impresso: em telas largas mostra o
 * capítulo atual no canto inferior esquerdo. Inclui o botão de voltar ao topo.
 */
export default function ChapterIndicator() {
  const { t } = useLanguage();
  const active = useActiveSection([...chapterIds]);
  const [pastHero, setPastHero] = useState(false);

  useEffect(() => {
    let raf = 0;
    const update = () => {
      raf = 0;
      setPastHero(window.scrollY > window.innerHeight * 0.8);
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  const current = chapterIds.find((id) => id === active) ?? chapterIds[0];
  // A seção da Click. tem fundo carvão fixo: o indicador troca para as cores da marca
  const onClick = current === "click";

  return (
    <>
      <p
        className={cn(
          "fixed bottom-8 left-8 z-40 hidden flex-col gap-3 transition-opacity duration-500 min-[1440px]:flex",
          pastHero ? "opacity-100" : "pointer-events-none opacity-0"
        )}
        aria-hidden="true"
      >
        <span
          className={cn(
            "text-[10px] font-bold uppercase tracking-[0.22em] transition-colors",
            onClick ? "text-click-sand" : "text-fg4"
          )}
        >
          {t.common.chapter}
        </span>
        <span className="flex items-baseline gap-1 tabular-nums">
          <span
            key={current}
            className={cn("text-lg font-bold animate-enter", onClick ? "text-click-orange" : "text-accent")}
          >
            {chapterNumber(current)}
          </span>
          <span className={cn("text-xs font-semibold", onClick ? "text-click-sand" : "text-fg4")}>
            / {chapterTotal}
          </span>
        </span>
        <span className={cn("h-px w-8", onClick ? "bg-click-cream/20" : "bg-line/20")} />
        <span
          key={`${current}-label`}
          className={cn(
            "text-[11px] font-semibold uppercase tracking-[0.18em] animate-enter",
            onClick ? "text-click-cream" : "text-fg2"
          )}
        >
          {chapterLabels(t)[current]}
        </span>
      </p>

      <a
        href="#inicio"
        aria-label={t.nav.backToTop}
        title={t.nav.backToTop}
        className={cn(
          "fixed bottom-6 right-6 z-40 flex h-11 w-11 items-center justify-center rounded-full bg-primary text-white shadow-lg transition-all duration-300 hover:-translate-y-1",
          pastHero ? "opacity-100" : "pointer-events-none translate-y-4 opacity-0"
        )}
      >
        <ArrowUp size={18} />
      </a>
    </>
  );
}
