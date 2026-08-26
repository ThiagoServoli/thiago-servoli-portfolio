"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

let registered = false;

/**
 * Registra os plugins do GSAP uma única vez, apenas no client.
 * Evita registro duplicado durante hot reload / múltiplas montagens.
 */
export function useGsapPlugins() {
  if (typeof window === "undefined") return { gsap, ScrollTrigger };

  if (!registered) {
    gsap.registerPlugin(ScrollTrigger);
    registered = true;
  }

  return { gsap, ScrollTrigger };
}

export { gsap, ScrollTrigger };
