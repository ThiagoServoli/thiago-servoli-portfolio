"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import TechIcon from "@/components/TechIcon";
import { CropMarks } from "@/components/Blueprint";
import { useReducedMotion } from "@/hooks/useReducedMotion";

const badges = [
  { name: "React", className: "-left-2 top-[12%] sm:-left-10", z: 90, delay: "0s" },
  { name: "TypeScript", className: "-right-2 top-[38%] sm:-right-8", z: 120, delay: "-1.5s" },
  { name: "Node.js", className: "-left-2 bottom-[18%] sm:-left-8", z: 70, delay: "-3s" },
  { name: "Next.js", className: "right-[12%] -top-5", z: 60, delay: "-4.5s" },
];

/**
 * Foto em camadas 3D (perspective + preserve-3d) sobre linhas de construção de
 * desenho técnico. A cena gira e se afasta conforme a rolagem e inclina
 * seguindo o mouse. O loop de animação só roda enquanto os valores ainda estão
 * convergindo — parado, não custa nada.
 */
export default function PhotoCard({ alt }: { alt: string }) {
  const sceneRef = useRef<HTMLDivElement>(null);
  const prefersReduced = useReducedMotion();

  useEffect(() => {
    const scene = sceneRef.current;
    if (!scene || prefersReduced) return;

    const target = { rx: 0, ry: 0, y: 0, s: 1 };
    const current = { ...target };
    const mouse = { x: 0, y: 0 };
    let raf = 0;

    const computeScroll = () => {
      // 0 no topo da página → 1 quando o hero já saiu da tela
      const p = Math.min(Math.max(window.scrollY / window.innerHeight, 0), 1);
      target.rx = mouse.y * -10 + p * 18;
      target.ry = mouse.x * 14 - p * 28;
      target.y = p * 140;
      target.s = 1 - p * 0.18;
    };

    const tick = () => {
      let moving = false;
      for (const key of ["rx", "ry", "y", "s"] as const) {
        const diff = target[key] - current[key];
        if (Math.abs(diff) > 0.001) moving = true;
        current[key] += diff * 0.12;
      }
      scene.style.transform = `translate3d(0, ${current.y}px, 0) rotateX(${current.rx}deg) rotateY(${current.ry}deg) scale(${current.s})`;
      raf = moving ? requestAnimationFrame(tick) : 0;
    };

    const kick = () => {
      computeScroll();
      if (!raf) raf = requestAnimationFrame(tick);
    };

    const onPointerMove = (event: PointerEvent) => {
      if (window.scrollY > window.innerHeight) return;
      mouse.x = event.clientX / window.innerWidth - 0.5;
      mouse.y = event.clientY / window.innerHeight - 0.5;
      kick();
    };

    const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    window.addEventListener("scroll", kick, { passive: true });
    if (finePointer) window.addEventListener("pointermove", onPointerMove, { passive: true });
    kick();

    return () => {
      window.removeEventListener("scroll", kick);
      window.removeEventListener("pointermove", onPointerMove);
      cancelAnimationFrame(raf);
    };
  }, [prefersReduced]);

  return (
    <div className="relative mx-auto w-full max-w-[20rem] sm:max-w-[24rem]">
      {/* Linhas de construção: círculos concêntricos e linhas de centro (estáticas) */}
      <svg
        viewBox="0 0 400 400"
        className="pointer-events-none absolute -inset-[30%] h-[160%] w-[160%] overflow-visible"
        aria-hidden="true"
      >
        <circle cx="200" cy="200" r="128" fill="none" className="bp-stroke" strokeWidth="0.8" />
        <circle cx="200" cy="200" r="168" fill="none" className="bp-stroke" strokeWidth="0.8" />
        <circle cx="200" cy="200" r="196" fill="none" className="bp-centerline" strokeWidth="0.8" />
        <path d="M0 200 H400 M200 0 V400" fill="none" className="bp-centerline" strokeWidth="0.8" />
        <path d="M60 60 L340 340" fill="none" className="bp-stroke" strokeWidth="0.6" />
      </svg>

      <div className="[perspective:1200px]">
        <div ref={sceneRef} className="preserve-3d relative will-change-transform">
          {/* Bloco sólido azul, deslocado em profundidade */}
          <div
            className="absolute inset-0 rounded-2xl bg-navy"
            style={{ transform: "translate3d(22px, 22px, -60px)" }}
            aria-hidden="true"
          />

          <div className="relative aspect-square overflow-hidden rounded-2xl shadow-[0_30px_60px_-20px_rgba(17,17,132,0.45)] ring-1 ring-white/10">
            <Image
              src="/images/profile.jpg"
              alt={alt}
              fill
              priority
              sizes="(min-width: 640px) 384px, 320px"
              className="object-cover"
            />
            <div
              className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/0 to-white/15"
              aria-hidden="true"
            />
          </div>
          <CropMarks className="text-accent" inset={-14} />

          {badges.map((badge) => (
            <div
              key={badge.name}
              className={`absolute ${badge.className}`}
              style={{ transform: `translateZ(${badge.z}px)` }}
            >
              <div
                className="flex items-center gap-2 rounded-xl border border-line/10 bg-card px-3 py-2 text-sm font-semibold text-fg shadow-lg animate-float"
                style={{ animationDelay: badge.delay }}
              >
                <TechIcon name={badge.name} className="text-lg" />
                {badge.name}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
