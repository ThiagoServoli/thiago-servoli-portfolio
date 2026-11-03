"use client";

import { useEffect, useRef, type CSSProperties } from "react";

/**
 * Luzes de fundo do hero: três focos em gradiente radial que derivam devagar
 * (CSS), ganham profundidade com o mouse e sobem mais devagar que a rolagem.
 * Só transform; as animações pausam quando o hero sai da tela.
 */
export default function HeroBackdrop() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    const section = el?.parentElement;
    if (!el || !section) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let raf = 0;
    let mx = 0;
    let my = 0;
    let visible = true;

    const apply = () => {
      raf = 0;
      el.style.setProperty("--mx", mx.toFixed(3));
      el.style.setProperty("--my", my.toFixed(3));
      el.style.setProperty("--sy", `${Math.round(window.scrollY * 0.3)}px`);
    };
    const schedule = () => {
      if (!raf && visible) raf = requestAnimationFrame(apply);
    };
    const onPointer = (event: PointerEvent) => {
      mx = event.clientX / window.innerWidth - 0.5;
      my = event.clientY / window.innerHeight - 0.5;
      schedule();
    };

    const observer = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      el.dataset.inview = String(visible);
    });
    observer.observe(section);

    if (!reduced) {
      if (window.matchMedia("(pointer: fine)").matches) section.addEventListener("pointermove", onPointer);
      window.addEventListener("scroll", schedule, { passive: true });
    }
    return () => {
      observer.disconnect();
      section.removeEventListener("pointermove", onPointer);
      window.removeEventListener("scroll", schedule);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div ref={ref} className="hero-backdrop pointer-events-none absolute inset-0" aria-hidden="true">
      <div className="hero-scroll">
        <div className="hero-depth" style={{ "--depth": "60px" } as CSSProperties}>
          <span className="hero-orb hero-orb-a" />
        </div>
        <div className="hero-depth" style={{ "--depth": "-40px" } as CSSProperties}>
          <span className="hero-orb hero-orb-b" />
        </div>
        <div className="hero-depth" style={{ "--depth": "90px" } as CSSProperties}>
          <span className="hero-orb hero-orb-c" />
        </div>
      </div>
    </div>
  );
}
