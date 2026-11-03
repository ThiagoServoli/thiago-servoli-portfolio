"use client";

import { createContext, useContext, type ReactNode } from "react";
import { usePathname, useRouter } from "next/navigation";
import { dictionaries, type Dictionary, type Locale } from "@/i18n/translations";
import { localePath, stripLocale } from "@/i18n/routing";

interface LanguageContextValue {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  /** Caminho no idioma atual ("/#sobre" → "/en#sobre") */
  href: (path?: string) => string;
  t: Dictionary;
}

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);

/**
 * O idioma vem da URL ("/", "/en", "/es"), então cada versão é uma página
 * própria, indexável. Trocar de idioma navega para a mesma página no outro idioma.
 */
export function LanguageProvider({ locale, children }: { locale: Locale; children: ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();

  const setLocale = (next: Locale) => {
    if (next === locale) return;
    router.push(localePath(next, stripLocale(pathname ?? "/")), { scroll: false });
  };

  const href = (path = "/") => localePath(locale, path);

  return (
    <LanguageContext.Provider value={{ locale, setLocale, href, t: dictionaries[locale] }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage deve ser usado dentro de um LanguageProvider");
  return context;
}
