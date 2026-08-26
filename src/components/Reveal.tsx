"use client";

import { createElement, useEffect, useRef, useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";

interface RevealProps {
  children: ReactNode;
  className?: string;
  /** Atraso em ms antes de revelar, útil para escalonar elementos em sequência */
  delay?: number;
  direction?: "up" | "left" | "right";
  as?: "div" | "h2" | "h3" | "section" | "article" | "span" | "li";
}

/**
 * Revela o conteúdo quando ele entra na viewport. Usa IntersectionObserver puro
 * (sem depender de plugins externos), então funciona de forma previsível em
 * qualquer navegador assim que o usuário rola a página.
 */
export default function Reveal({
  children,
  className,
  delay = 0,
  direction = "up",
  as = "div",
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            window.setTimeout(() => setVisible(true), delay);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);

  const directionClass =
    direction === "left" ? "reveal-left" : direction === "right" ? "reveal-right" : "";

  return createElement(
    as,
    {
      ref,
      className: cn("reveal", directionClass, visible && "reveal-visible", className),
    },
    children
  );
}
