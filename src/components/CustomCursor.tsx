"use client";

import { useEffect, useRef } from "react";
import { useReducedMotion } from "@/hooks/useReducedMotion";

/**
 * Cursor customizado neon: núcleo verde sólido + anel externo com glow
 * roxo/ciano. Desativado em touch e prefers-reduced-motion.
 */
export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const prefersReduced = useReducedMotion();

  useEffect(() => {
    const supportsHover = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    if (!supportsHover || prefersReduced) return;

    document.body.classList.add("has-custom-cursor");

    let ringX = 0;
    let ringY = 0;
    let targetX = 0;
    let targetY = 0;
    let raf = 0;
    let hoverScale = 1;

    const onMove = (event: PointerEvent) => {
      targetX = event.clientX;
      targetY = event.clientY;
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${targetX}px, ${targetY}px, 0) translate(-50%, -50%)`;
      }
    };

    const loop = () => {
      ringX += (targetX - ringX) * 0.2;
      ringY += (targetY - ringY) * 0.2;
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringX}px, ${ringY}px, 0) translate(-50%, -50%) scale(${hoverScale})`;
      }
      raf = requestAnimationFrame(loop);
    };

    const onEnterInteractive = () => {
      hoverScale = 1.8;
    };
    const onLeaveInteractive = () => {
      hoverScale = 1;
    };

    window.addEventListener("pointermove", onMove);
    raf = requestAnimationFrame(loop);

    const interactiveEls = document.querySelectorAll("a, button, [data-cursor-hover]");
    interactiveEls.forEach((el) => {
      el.addEventListener("mouseenter", onEnterInteractive);
      el.addEventListener("mouseleave", onLeaveInteractive);
    });

    return () => {
      document.body.classList.remove("has-custom-cursor");
      window.removeEventListener("pointermove", onMove);
      cancelAnimationFrame(raf);
      interactiveEls.forEach((el) => {
        el.removeEventListener("mouseenter", onEnterInteractive);
        el.removeEventListener("mouseleave", onLeaveInteractive);
      });
    };
  }, [prefersReduced]);

  if (prefersReduced) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[70] hidden md:block" aria-hidden="true">
      <div
        ref={dotRef}
        className="fixed left-0 top-0 h-2 w-2 rounded-full bg-neon-green"
        style={{ boxShadow: "0 0 10px 2px rgba(57,255,136,0.9)" }}
      />
      <div
        ref={ringRef}
        className="fixed left-0 top-0 h-9 w-9 rounded-full border-2 border-neon-green/50"
        style={{ boxShadow: "0 0 18px rgba(57,255,136,0.4)" }}
      />
    </div>
  );
}
