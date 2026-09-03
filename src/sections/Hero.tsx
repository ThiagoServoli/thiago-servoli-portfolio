"use client";

import Image from "next/image";
import { ArrowDown, Sparkles } from "lucide-react";
import { profile } from "@/data/profile";
import MagneticButton from "@/components/MagneticButton";
import { useLanguage } from "@/context/LanguageContext";

const orbitBadges = [
  { label: "React", style: "top-[6%] -left-6 md:-left-10", delay: "0s" },
  { label: "Next.js", style: "top-[28%] -right-8 md:-right-14", delay: "-2s" },
  { label: "TypeScript", style: "bottom-[22%] -left-10 md:-left-16", delay: "-4s" },
  { label: "Node.js", style: "bottom-[4%] -right-6 md:-right-12", delay: "-6s" },
];

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section
      id="inicio"
      className="relative flex min-h-[100svh] items-center overflow-hidden px-6 pt-32 lg:px-10"
    >
      <div className="mx-auto grid w-full max-w-content items-center gap-16 lg:grid-cols-[1.1fr_0.9fr] lg:gap-10">
        <div>
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-neon-green/40 bg-neon-green/10 px-4 py-2">
            <Sparkles size={16} className="text-neon-green" />
            <span className="font-mono text-sm font-semibold uppercase tracking-[0.25em] text-neon-green">
              {t.hero.badge}
            </span>
          </div>

          <h1 className="font-display text-[3rem] font-bold leading-[1.05] tracking-tight text-fg text-balance sm:text-6xl lg:text-[5rem]">
            {t.hero.titleBefore}
            <span className="text-neon-gradient">{t.hero.titleHighlight}</span>
          </h1>

          <p className="mt-7 max-w-xl text-balance text-lg leading-relaxed text-fg2 sm:text-xl">
            {t.hero.subtitle}
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            {t.hero.languages.map((lang) => (
              <span
                key={lang.name}
                className="rounded-full border border-neon-green/30 bg-neon-green/5 px-4 py-1.5 font-mono text-sm font-semibold text-neon-green"
              >
                {lang.name} · {lang.level}
              </span>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-5">
            <MagneticButton href="#projetos">{t.hero.ctaProjects}</MagneticButton>
            <MagneticButton href="#contato" variant="secondary">
              {t.hero.ctaContact}
            </MagneticButton>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-xs lg:max-w-sm">
          <div
            className="profile-ring absolute -inset-3 animate-spin-slow opacity-70"
            style={{
              background:
                "conic-gradient(from 90deg, #39ff88, #8dffbf, #1fae5c, #8dffbf, #39ff88)",
            }}
            aria-hidden="true"
          />
          <div className="profile-ring relative aspect-[4/5] w-full overflow-hidden bg-ink-800">
            <Image
              src="/images/profile.jpg"
              alt={t.hero.photoAlt.replace("{name}", profile.displayName)}
              fill
              priority
              sizes="(min-width: 1024px) 24rem, 20rem"
              className="object-cover"
            />
          </div>

          {orbitBadges.map((badge) => (
            <div
              key={badge.label}
              className={`card-glass absolute z-10 hidden rounded-2xl px-4 py-2.5 shadow-[0_0_20px_rgba(57,255,136,0.15)] animate-float sm:block ${badge.style}`}
              style={{ animationDelay: badge.delay }}
            >
              <span className="font-mono text-sm font-bold text-fg">{badge.label}</span>
            </div>
          ))}
        </div>
      </div>

      <a
        href="#stack"
        data-cursor-hover
        aria-label={t.hero.scrollAria}
        className="absolute bottom-10 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-neon-green transition-colors hover:text-fg sm:flex"
      >
        <span className="font-mono text-xs uppercase tracking-widest">{t.hero.scroll}</span>
        <ArrowDown size={20} className="animate-bounce" />
      </a>
    </section>
  );
}
