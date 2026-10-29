"use client";

import { createElement, useEffect, useRef, useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";

interface RevealProps {
  children: ReactNode;
  className?: string;
  /** Atraso em ms antes de revelar, útil para escalonar elementos em sequência */
  delay?: number;
  direction?: "up" | "left" | "right" | "scale";
  as?: "div" | "h2" | "h3" | "section" | "article" | "span" | "li";
}

/**
 * Revela o conteúdo com fade + deslocamento quando ele entra na viewport.
 * Usa IntersectionObserver puro, sem bibliotecas de animação.
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

    if (typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }

    let timer = 0;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          timer = window.setTimeout(() => setVisible(true), delay);
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -5% 0px" }
    );

    observer.observe(el);
    return () => {
      window.clearTimeout(timer);
      observer.disconnect();
    };
  }, [delay]);

  return createElement(
    as,
    {
      ref,
      className: cn(
        "reveal",
        direction !== "up" && `reveal-${direction}`,
        visible && "reveal-visible",
        className
      ),
    },
    children
  );
}
