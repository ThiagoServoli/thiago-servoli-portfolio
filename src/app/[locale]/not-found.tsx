"use client";

import { ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ButtonLink from "@/components/ButtonLink";
import { useLanguage } from "@/context/LanguageContext";

/** 404 no estilo editorial: "página fora do sumário" */
export default function NotFound() {
  const { t, href } = useLanguage();

  return (
    <>
      <Navbar />
      <main id="conteudo-principal" className="relative overflow-hidden px-6 pb-28 pt-40 lg:px-10">
        <div className="mx-auto max-w-content">
          <p className="flex items-center gap-4 text-xs font-bold uppercase tracking-[0.22em] animate-enter">
            <span className="tabular-nums text-accent">404</span>
            <span className="text-fg3">{t.notFound.eyebrow}</span>
            <span className="h-px flex-1 bg-line/15" aria-hidden="true" />
          </p>
          <h1 className="mt-8 max-w-3xl text-[2.6rem] font-bold leading-[1.05] tracking-[-0.035em] text-fg text-balance sm:text-[4rem]">
            <span className="line-mask">
              <span className="animate-line-up">{t.notFound.title}</span>
            </span>
          </h1>
          <p className="mt-6 max-w-xl text-lg text-fg2 animate-enter" style={{ animationDelay: "200ms" }}>
            {t.notFound.text}
          </p>
          <div className="mt-10 flex flex-wrap gap-3 animate-enter" style={{ animationDelay: "320ms" }}>
            <ButtonLink href={href("/")} className="group">
              {t.notFound.home}
              <ArrowRight size={17} className="transition-transform group-hover:translate-x-1" />
            </ButtonLink>
            <ButtonLink href={href("/#projetos")} variant="secondary">
              {t.nav.projects}
            </ButtonLink>
          </div>
        </div>
        {/* Numeral gigante de fundo, como uma folha numerada */}
        <span
          className="pointer-events-none absolute -bottom-16 right-0 select-none text-[16rem] font-bold leading-none tracking-[-0.06em] text-accent/[0.06] sm:text-[24rem]"
          aria-hidden="true"
        >
          404
        </span>
      </main>
      <Footer />
    </>
  );
}
