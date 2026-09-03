"use client";

import { useRef } from "react";
import type { ReactNode, MouseEvent } from "react";
import { gsap } from "@/lib/gsap";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { cn } from "@/lib/utils";

interface MagneticButtonProps {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
  external?: boolean;
}

export default function MagneticButton({
  href,
  children,
  variant = "primary",
  className,
  external = false,
}: MagneticButtonProps) {
  const ref = useRef<HTMLAnchorElement>(null);
  const prefersReduced = useReducedMotion();

  const handleMouseMove = (event: MouseEvent<HTMLAnchorElement>) => {
    if (prefersReduced || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = event.clientX - rect.left - rect.width / 2;
    const y = event.clientY - rect.top - rect.height / 2;

    gsap.to(ref.current, {
      x: x * 0.35,
      y: y * 0.35,
      duration: 0.4,
      ease: "power3.out",
    });
  };

  const handleMouseLeave = () => {
    if (prefersReduced || !ref.current) return;
    gsap.to(ref.current, { x: 0, y: 0, duration: 0.6, ease: "elastic.out(1, 0.4)" });
  };

  return (
    <a
      ref={ref}
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      data-cursor-hover
      className={cn(
        "group relative inline-flex items-center justify-center gap-2 rounded-full px-8 py-4 text-base font-bold tracking-wide transition-all duration-300 ease-premium",
        variant === "primary"
          ? "bg-neon-green text-ink-950 shadow-[0_0_25px_rgba(57,255,136,0.45)] hover:shadow-[0_0_45px_rgba(57,255,136,0.85)]"
          : "border-2 border-neon-green/50 text-fg hover:bg-neon-green/10 hover:border-neon-green hover:shadow-[0_0_35px_rgba(57,255,136,0.5)]",
        className
      )}
    >
      {children}
    </a>
  );
}
