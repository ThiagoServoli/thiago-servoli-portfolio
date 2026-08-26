"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Registra o plugin assim que este módulo é importado no client.
// Evita o aviso "Invalid property scrollTrigger... Missing plugin?"
// que ocorria quando nenhum componente chamava o registro manualmente.
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export { gsap, ScrollTrigger };
