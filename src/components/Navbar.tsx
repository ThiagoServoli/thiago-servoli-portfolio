"use client";

import { useEffect, useState } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import { cn } from "@/lib/utils";
import { useTheme } from "@/context/ThemeContext";
import { useLanguage } from "@/context/LanguageContext";
import { useActiveSection } from "@/hooks/useActiveSection";
import type { Locale } from "@/i18n/translations";

const localeOptions: { locale: Locale; flag: string; label: string }[] = [
  { locale: "pt", flag: "/images/flags/br.png", label: "Português" },
  { locale: "en", flag: "/images/flags/us.png", label: "English" },
  { locale: "es", flag: "/images/flags/es.png", label: "Español" },
];

const NAV_IDS = ["sobre", "click", "stack", "projetos", "trajetoria", "contato"];

function LanguageSwitcher({ className }: { className?: string }) {
  const { locale, setLocale, t } = useLanguage();

  return (
    <div
      role="group"
      aria-label={t.nav.languageLabel}
      className={cn("flex items-center gap-0.5 rounded-lg border border-line/15 p-1", className)}
    >
      {localeOptions.map((option) => (
        <button
          key={option.locale}
          type="button"
          onClick={() => setLocale(option.locale)}
          aria-label={option.label}
          aria-pressed={locale === option.locale}
          title={option.label}
          className={cn(
            "flex h-7 w-9 items-center justify-center rounded-md transition-all duration-200",
            locale === option.locale
              ? "bg-primary/10 ring-1 ring-primary/40"
              : "opacity-50 grayscale-[40%] hover:opacity-100 hover:grayscale-0"
          )}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={option.flag}
            alt=""
            width={24}
            height={18}
            className="h-[18px] w-6 rounded-[3px] object-cover shadow-sm"
          />
        </button>
      ))}
    </div>
  );
}

function ThemeToggle({ className }: { className?: string }) {
  const { theme, toggleTheme } = useTheme();
  const { t } = useLanguage();
  const label = theme === "dark" ? t.nav.themeToLight : t.nav.themeToDark;

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={label}
      title={label}
      className={cn(
        "flex h-9 w-9 items-center justify-center rounded-lg border border-line/15 text-fg2 transition-colors hover:border-accent hover:text-accent",
        className
      )}
    >
      {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
    </button>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [pastHero, setPastHero] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { t, href } = useLanguage();
  const active = useActiveSection(NAV_IDS);

  const links = [
    { id: "sobre", label: t.nav.about },
    { id: "click", label: t.nav.click },
    { id: "stack", label: t.nav.stack },
    { id: "projetos", label: t.nav.projects },
    { id: "trajetoria", label: t.nav.experience },
    { id: "contato", label: t.nav.contact },
  ];

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 8);
      setPastHero(window.scrollY > window.innerHeight * 0.6);
    };
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
        "fixed inset-x-0 top-0 z-50 border-b px-6 transition-colors duration-300 lg:px-10",
        scrolled || menuOpen
          ? "border-line/10 bg-page/85 backdrop-blur-md"
          : "border-transparent bg-transparent"
      )}
    >
      <div className="mx-auto flex h-16 max-w-content items-center justify-between">
        <a href={href("/#inicio")} className="flex items-center gap-3 whitespace-nowrap text-[17px] font-bold tracking-tight text-fg">
          <span
            className="flex h-8 w-8 items-center justify-center rounded-md bg-primary text-[12px] font-bold tracking-normal text-white"
            aria-hidden="true"
          >
            TS
          </span>
          Thiago Servoli
        </a>

        <nav aria-label={t.nav.navMain} className="hidden items-center gap-1 lg:flex">
          {links.map((link) => {
            const isActive = active === link.id && pastHero;
            return (
              <a
                key={link.id}
                href={href(`/#${link.id}`)}
                aria-current={isActive ? "true" : undefined}
                className={cn(
                  "relative rounded-md px-3 py-2 text-[15px] font-medium transition-colors",
                  isActive ? "text-accent" : "text-fg2 hover:text-fg"
                )}
              >
                {link.label}
                <span
                  className={cn(
                    "absolute inset-x-3 -bottom-0.5 h-0.5 origin-left rounded-full bg-primary transition-transform duration-300 ease-premium",
                    isActive ? "scale-x-100" : "scale-x-0"
                  )}
                />
              </a>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <LanguageSwitcher />
          <ThemeToggle />
          {/* Só em telas largas: entre 1024 e 1280px não cabe ao lado dos links */}
          <a
            href={href("/#contato")}
            className="hidden whitespace-nowrap rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-primary/90 xl:block"
          >
            {t.nav.talk}
          </a>
        </div>

        <div className="flex items-center gap-3 lg:hidden">
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setMenuOpen((v) => !v)}
            aria-expanded={menuOpen}
            aria-label={menuOpen ? t.nav.menuClose : t.nav.menuOpen}
            className="text-fg"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav
          aria-label={t.nav.navMobile}
          className="flex h-[calc(100svh-4rem)] flex-col gap-1 py-6 lg:hidden"
        >
          {links.map((link, i) => (
            <a
              key={link.id}
              href={href(`/#${link.id}`)}
              onClick={() => setMenuOpen(false)}
              className="flex items-center justify-between border-b border-line/10 py-4 text-lg font-medium text-fg animate-enter"
              style={{ animationDelay: `${i * 50}ms` }}
            >
              {link.label}
              <span className="text-sm text-fg4">0{i + 1}</span>
            </a>
          ))}
          <LanguageSwitcher className="mt-6 self-start" />
        </nav>
      )}
    </header>
  );
}
