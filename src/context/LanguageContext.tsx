"use client";

import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import { dictionaries, type Dictionary, type Locale } from "@/i18n/translations";

interface LanguageContextValue {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: Dictionary;
}

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);

const STORAGE_KEY = "locale";
const LOCALES: Locale[] = ["pt", "en", "es"];

function isLocale(value: string | null): value is Locale {
  return !!value && (LOCALES as string[]).includes(value);
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("pt");
  const [hydrated, setHydrated] = useState(false);

  // Mesma lógica de gate do ThemeProvider: sem "hydrated", o efeito de
  // escrita abaixo grava o idioma padrão no localStorage antes da leitura
  // terminar, corrompendo a preferência salva (agravado pelo StrictMode).
  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (isLocale(stored)) setLocaleState(stored);
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    document.documentElement.lang = dictionaries[locale].meta.htmlLang;
    window.localStorage.setItem(STORAGE_KEY, locale);
  }, [locale, hydrated]);

  const setLocale = (next: Locale) => setLocaleState(next);

  return (
    <LanguageContext.Provider value={{ locale, setLocale, t: dictionaries[locale] }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage deve ser usado dentro de um LanguageProvider");
  return context;
}
