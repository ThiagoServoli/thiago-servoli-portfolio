"use client";

import { useEffect, useState } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import { cn } from "@/lib/utils";
import { useTheme } from "@/context/ThemeContext";
import { useLanguage } from "@/context/LanguageContext";
import type { Locale } from "@/i18n/translations";

const localeOptions: { locale: Locale; countryCode: string; label: string }[] = [
  { locale: "pt", countryCode: "br", label: "Português" },
  { locale: "en", countryCode: "us", label: "English" },
  { locale: "es", countryCode: "es", label: "Español" },
];

function LanguageSwitcher({ className }: { className?: string }) {
  const { locale, setLocale, t } = useLanguage();

  return (
    <div
      role="group"
      aria-label={t.nav.languageLabel}
      className={cn("flex items-center gap-1 rounded-full border border-line/15 p-1", className)}
    >
      {localeOptions.map((option) => (
        <button
          key={option.locale}
          type="button"
          data-cursor-hover
          onClick={() => setLocale(option.locale)}
          aria-label={option.label}
          aria-pressed={locale === option.locale}
          title={option.label}
          className={cn(
            "flex h-8 w-9 items-center justify-center rounded-md transition-all duration-300",
            locale === option.locale
              ? "bg-neon-green/15 shadow-[0_0_12px_rgba(57,255,136,0.5)] ring-1 ring-neon-green/60"
              : "opacity-55 hover:opacity-100"
          )}
        >
          <span
            aria-hidden="true"
            className={cn("fi", `fi-${option.countryCode}`, "h-4 w-6 rounded-[3px]")}
          />
        </button>
      ))}
    </div>
  );
}

function ThemeToggle({ className }: { className?: string }) {
  const { theme, toggleTheme } = useTheme();
  const { t } = useLanguage();

  return (
    <button
      type="button"
      data-cursor-hover
      onClick={toggleTheme}
      aria-label={theme === "dark" ? t.nav.themeToLight : t.nav.themeToDark}
      title={theme === "dark" ? t.nav.themeToLight : t.nav.themeToDark}
      className={cn(
        "flex h-9 w-9 items-center justify-center rounded-full border border-line/15 text-fg transition-all duration-300 hover:border-neon-green/60 hover:text-neon-green",
        className
      )}
    >
      {theme === "dark" ? <Sun size={17} /> : <Moon size={17} />}
    </button>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { t } = useLanguage();

  const links = [
    { href: "#sobre", label: t.nav.about },
    { href: "#stack", label: t.nav.stack },
    { href: "#projetos", label: t.nav.projects },
    { href: "#trajetoria", label: t.nav.experience },
    { href: "#contato", label: t.nav.contact },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-1 z-50 transition-all duration-500 ease-premium",
        scrolled
          ? "border-b border-line/10 bg-page/70 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      )}
    >
      <div className="mx-auto flex max-w-content items-center justify-between px-6 py-5 lg:px-10">
        <a
          href="#inicio"
          data-cursor-hover
          className="font-display text-lg font-bold tracking-[0.15em] text-fg"
        >
          THIAGO<span className="text-neon-green">.</span>SERVOLI
        </a>

        <nav aria-label={t.nav.navMain} className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              data-cursor-hover
              className="group relative text-base font-medium text-fg2 transition-colors duration-300 hover:text-fg"
            >
              {link.label}
              <span className="absolute -bottom-1.5 left-0 h-0.5 w-0 bg-neon-green shadow-[0_0_10px_rgba(57,255,136,0.9)] transition-all duration-300 ease-premium group-hover:w-full" />
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-4 md:flex">
          <LanguageSwitcher />
          <ThemeToggle />
          <a
            href="#contato"
            data-cursor-hover
            className="inline-flex rounded-full border-2 border-neon-green/60 px-6 py-2.5 text-base font-semibold text-neon-green transition-all duration-300 hover:bg-neon-green hover:text-ink-950 hover:shadow-[0_0_25px_rgba(57,255,136,0.6)]"
          >
            {t.nav.talk}
          </a>
        </div>

        <div className="flex items-center gap-3 md:hidden">
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setMenuOpen((v) => !v)}
            aria-expanded={menuOpen}
            aria-label={menuOpen ? t.nav.menuClose : t.nav.menuOpen}
            className="text-fg"
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav
          aria-label={t.nav.navMobile}
          className="flex flex-col gap-1 border-t border-line/10 bg-page px-6 py-6 md:hidden"
        >
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="rounded-lg px-2 py-4 text-lg text-fg transition-colors hover:bg-line/5"
            >
              {link.label}
            </a>
          ))}

          <div className="mt-2 flex items-center justify-center py-2">
            <LanguageSwitcher />
          </div>

          <a
            href="#contato"
            onClick={() => setMenuOpen(false)}
            className="mt-3 rounded-full bg-neon-green px-5 py-3.5 text-center text-base font-semibold text-ink-950"
          >
            {t.nav.talk}
          </a>
        </nav>
      )}
    </header>
  );
}
