import type { Dictionary } from "@/i18n/translations";

/** Capítulos da home, na ordem da página. A numeração (01, 02...) sai daqui. */
export const chapterIds = ["sobre", "click", "stack", "projetos", "trajetoria", "formacao", "contato"] as const;

export type ChapterId = (typeof chapterIds)[number];

export const chapterTotal = String(chapterIds.length).padStart(2, "0");

export function chapterNumber(id: ChapterId) {
  return String(chapterIds.indexOf(id) + 1).padStart(2, "0");
}

export function chapterLabels(t: Dictionary): Record<ChapterId, string> {
  return {
    sobre: t.nav.about,
    click: t.nav.click,
    stack: t.nav.stack,
    projetos: t.nav.projects,
    trajetoria: t.nav.experience,
    formacao: t.nav.education,
    contato: t.nav.contact,
  };
}
