"use client";

import type { ReactNode } from "react";
import { ThemeProvider } from "@/context/ThemeContext";
import { LanguageProvider } from "@/context/LanguageContext";
import type { Locale } from "@/i18n/translations";

export default function Providers({ locale, children }: { locale: Locale; children: ReactNode }) {
  return (
    <ThemeProvider>
      <LanguageProvider locale={locale}>{children}</LanguageProvider>
    </ThemeProvider>
  );
}
