"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import { cn } from "@/lib/utils";
import { useActiveSection } from "@/hooks/useActiveSection";
import { useLanguage } from "@/context/LanguageContext";

const SECTION_IDS = ["inicio", "sobre", "stack", "projetos", "trajetoria", "formacao", "contato"];

/**
 * Navegação lateral fixa (desktop): um marcador por seção, com o nome
 * aparecendo no hover, e botão de voltar ao topo depois do hero.
 */
export default function SectionNav() {
  const { t } = useLanguage();
  const active = useActiveSection(SECTION_IDS);
  const [pastHero, setPastHero] = useState(false);

  useEffect(() => {
    const onScroll = () => setPastHero(window.scrollY > window.innerHeight * 0.8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
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
        className="fixed right-6 top-1/2 z-40 hidden -translate-y-1/2 xl:block"
      >
        <ul className="flex flex-col items-end gap-3">
          {SECTION_IDS.map((id) => {
            const isActive = active === id;
            return (
              <li key={id}>
                <a
                  href={`#${id}`}
                  aria-current={isActive ? "true" : undefined}
                  className="group flex items-center gap-3 py-0.5"
                >
                  <span
                    className={cn(
                      "rounded-md bg-card px-2 py-0.5 text-xs font-semibold shadow-sm transition-all duration-300",
                      "translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 group-focus-visible:translate-x-0 group-focus-visible:opacity-100",
                      isActive ? "text-accent" : "text-fg"
                    )}
                  >
                    {labels[id]}
                  </span>
                  <span
                    className={cn(
                      "block h-2 rounded-full transition-all duration-300 ease-premium",
                      isActive ? "w-6 bg-primary" : "w-2 bg-fg4/50 group-hover:bg-fg3"
                    )}
                  />
                </a>
              </li>
            );
          })}
        </ul>
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
