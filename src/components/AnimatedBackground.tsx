"use client";

import { useEffect, useRef } from "react";
import { useReducedMotion } from "@/hooks/useReducedMotion";

/**
 * Fundo fixo com "orbs" neon que se movem sutilmente com o scroll (parallax)
 * além de flutuarem continuamente via CSS. Isso garante que a página sempre
 * pareça viva, mesmo antes do usuário interagir, e reage visivelmente ao
 * rolar a tela.
 */
export default function AnimatedBackground() {
  const greenRef = useRef<HTMLDivElement>(null);
  const purpleRef = useRef<HTMLDivElement>(null);
  const cyanRef = useRef<HTMLDivElement>(null);
  const prefersReduced = useReducedMotion();

  useEffect(() => {
    if (prefersReduced) return;
    let raf = 0;

    const onScroll = () => {
      const y = window.scrollY;
      if (greenRef.current) greenRef.current.style.transform = `translate3d(0, ${y * 0.12}px, 0)`;
      if (purpleRef.current)
        purpleRef.current.style.transform = `translate3d(0, ${y * -0.08}px, 0)`;
      if (cyanRef.current) cyanRef.current.style.transform = `translate3d(0, ${y * 0.05}px, 0)`;
    };

    const loop = () => {
      onScroll();
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);

    return () => cancelAnimationFrame(raf);
  }, [prefersReduced]);

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden" aria-hidden="true">
      <div className="absolute inset-0 bg-ink-950" />
      <div
        ref={greenRef}
        className="absolute -left-40 top-[-10%] h-[36rem] w-[36rem] rounded-full bg-neon-green/25 blur-[130px] animate-float"
      />
      <div
        ref={purpleRef}
        className="absolute -right-32 top-[20%] h-[40rem] w-[40rem] rounded-full bg-neon-purple/25 blur-[150px] animate-float-slow"
      />
      <div
        ref={cyanRef}
        className="absolute bottom-[-10%] left-1/3 h-[32rem] w-[32rem] rounded-full bg-neon-cyan/15 blur-[140px] animate-float"
        style={{ animationDelay: "-4s" }}
      />
      <div className="grid-overlay absolute inset-0 h-full w-full" />
    </div>
  );
}
