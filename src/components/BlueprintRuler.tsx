"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowUp } from "lucide-react";
import { cn } from "@/lib/utils";
import { useActiveSection } from "@/hooks/useActiveSection";
import { useLanguage } from "@/context/LanguageContext";

const SECTION_IDS = ["inicio", "sobre", "stack", "projetos", "trajetoria", "formacao", "contato"];
const MINOR_TICKS = 48;

/**
 * Régua de navegação (telas largas): marcações como uma escala técnica, uma
 * cota por seção na posição proporcional dela na página, e um cursor que
 * acompanha a rolagem. Inclui o botão de voltar ao topo.
 */
export default function BlueprintRuler() {
  const { t } = useLanguage();
  const active = useActiveSection(SECTION_IDS);
  const cursorRef = useRef<HTMLDivElement>(null);
  const [marks, setMarks] = useState<number[]>([]);
  const [pastHero, setPastHero] = useState(false);

  useEffect(() => {
    const measure = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setMarks(
        SECTION_IDS.map((id) => {
          const el = document.getElementById(id);
          return el && max > 0 ? Math.min(el.offsetTop / max, 1) : 0;
        })
      );
    };

    let raf = 0;
    const update = () => {
      raf = 0;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const progress = max > 0 ? window.scrollY / max : 0;
      if (cursorRef.current) cursorRef.current.style.top = `${progress * 100}%`;
      setPastHero(window.scrollY > window.innerHeight * 0.8);
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    const onResize = () => {
      measure();
      onScroll();
    };

    measure();
    update();
    // Remede sempre que a altura da página muda (imagens, fontes, seções que
    // ajustam a própria altura via JS, troca de idioma...)
    const observer = new ResizeObserver(measure);
    observer.observe(document.body);
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);
    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
      cancelAnimationFrame(raf);
    };
  }, []);

  const labels: Record<string, string> = {
    inicio: t.nav.home,
    sobre: t.nav.about,
    stack: t.nav.stack,
    projetos: t.nav.projects,
    trajetoria: t.nav.experience,
    formacao: t.nav.education,
    contato: t.nav.contact,
  };

  return (
    <>
      <nav
        aria-label={t.nav.sectionsLabel}
        className="fixed left-6 top-1/2 z-40 hidden h-[56vh] -translate-y-1/2 min-[1440px]:block"
      >
        {/* Escala */}
        <div className="absolute inset-y-0 left-0 w-px bg-accent/25" aria-hidden="true" />
        {Array.from({ length: MINOR_TICKS + 1 }, (_, i) => (
          <span
            key={i}
            className={cn("absolute left-0 h-px bg-accent/25", i % 4 === 0 ? "w-2.5" : "w-1.5")}
            style={{ top: `${(i / MINOR_TICKS) * 100}%` }}
            aria-hidden="true"
          />
        ))}

        {/* Cotas das seções */}
        <ul>
          {SECTION_IDS.map((id, i) => {
            const isActive = active === id;
            return (
              <li key={id} className="absolute left-0 -translate-y-1/2" style={{ top: `${(marks[i] ?? 0) * 100}%` }}>
                <a
                  href={`#${id}`}
                  aria-current={isActive ? "true" : undefined}
                  className="group flex items-center gap-2 py-1"
                >
                  <span
                    className={cn(
                      "h-[2px] transition-all duration-300",
                      isActive ? "w-5 bg-accent" : "w-3.5 bg-accent/50 group-hover:w-5"
                    )}
                  />
                  <span
                    className={cn(
                      "text-[10px] font-bold tabular-nums transition-colors",
                      isActive ? "text-accent" : "text-fg4 group-hover:text-accent"
                    )}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span
                    className={cn(
                      "whitespace-nowrap text-[10px] font-semibold uppercase tracking-[0.16em] transition-all duration-300",
                      "-translate-x-1 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 group-focus-visible:translate-x-0 group-focus-visible:opacity-100",
                      isActive ? "text-accent" : "text-fg3"
                    )}
                  >
                    {labels[id]}
                  </span>
                </a>
              </li>
            );
          })}
        </ul>

        {/* Cursor de leitura */}
        <div
          ref={cursorRef}
          className="absolute -left-[5px] -translate-y-1/2 transition-[top] duration-150 ease-out"
          style={{ top: "0%" }}
          aria-hidden="true"
        >
          <svg viewBox="0 0 10 10" className="h-2.5 w-2.5 fill-accent">
            <path d="M0 0 L10 5 L0 10 Z" />
          </svg>
        </div>
      </nav>

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
