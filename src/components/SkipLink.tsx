"use client";

import { useLanguage } from "@/context/LanguageContext";

export default function SkipLink() {
  const { t } = useLanguage();

  return (
    <a
      href="#conteudo-principal"
      className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:rounded-md focus:bg-navy focus:px-4 focus:py-2 focus:font-semibold focus:text-white"
    >
      {t.nav.skip}
    </a>
  );
}
