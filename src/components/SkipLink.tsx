"use client";

import { useLanguage } from "@/context/LanguageContext";

export default function SkipLink() {
  const { t } = useLanguage();

  return (
    <a
      href="#conteudo-principal"
      className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:rounded focus:bg-neon-green focus:px-4 focus:py-2 focus:text-ink-950 focus:font-bold"
    >
      {t.nav.skip}
    </a>
  );
}
