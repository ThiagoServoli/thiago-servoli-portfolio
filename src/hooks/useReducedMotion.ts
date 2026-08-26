"use client";

import { useEffect, useState } from "react";

/**
 * Retorna true quando o usuário prefere movimento reduzido.
 * Todas as seções com animação GSAP devem consultar este hook
 * e oferecer um estado final estático equivalente.
 */
export function useReducedMotion(): boolean {
  const [prefersReduced, setPrefersReduced] = useState(false);

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReduced(query.matches);

    const listener = (event: MediaQueryListEvent) =>
      setPrefersReduced(event.matches);

    query.addEventListener("change", listener);
    return () => query.removeEventListener("change", listener);
  }, []);

  return prefersReduced;
}
