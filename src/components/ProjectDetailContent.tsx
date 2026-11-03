"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, ArrowUpRight, Github } from "lucide-react";
import { projects, type Project } from "@/data/projects";
import ButtonLink from "@/components/ButtonLink";
import Reveal from "@/components/Reveal";
import { useLanguage } from "@/context/LanguageContext";
import { cn } from "@/lib/utils";

/**
 * Estudo de caso no estilo editorial: abertura com ficha do projeto, captura
 * principal, capítulos (contexto → desafio → solução → resultado) e galeria
 * com capturas reais do projeto publicado.
 */
export default function ProjectDetailContent({ project }: { project: Project }) {
  const { t, href } = useLanguage();
  const copy = t.projects.items[project.slug];
  const p = t.projectPage;
  const index = projects.findIndex((item) => item.slug === project.slug);
  const next = projects[(index + 1) % projects.length];
  const host = project.liveUrl.replace(/^https?:\/\//, "").replace(/\/$/, "");

  const chapters = [
    { label: p.contextLabel, text: copy.context },
    { label: p.challengeLabel, text: copy.challenge },
    { label: p.solutionLabel, text: copy.solution },
    { label: p.resultLabel, text: copy.result },
  ];

  return (
    <main id="conteudo-principal" className="px-6 pb-28 pt-32 lg:px-10 lg:pt-36">
      <div className="mx-auto max-w-content">
        <Link
          href={href("/#projetos")}
          className="group inline-flex items-center gap-1.5 text-[15px] text-fg3 transition-colors hover:text-accent"
        >
          <ArrowLeft size={16} className="transition-transform group-hover:-translate-x-1" />
          {p.back}
        </Link>

        {/* Abertura */}
        <p className="mt-12 flex items-center gap-4 text-xs font-bold uppercase tracking-[0.22em] animate-enter">
          <span className="tabular-nums text-accent">
            {String(index + 1).padStart(2, "0")} / {String(projects.length).padStart(2, "0")}
          </span>
          <span className="text-fg3">{p.caseStudy}</span>
          <span className="h-px flex-1 bg-line/15" aria-hidden="true" />
        </p>

        <div className="mt-8 grid gap-12 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <div className="flex items-center gap-4 animate-enter" style={{ animationDelay: "80ms" }}>
              <Image
                src={project.icon}
                alt={p.logoAlt.replace("{name}", project.name)}
                width={56}
                height={56}
                className="h-14 w-14 rounded-xl"
              />
              <h1 className="text-[2.6rem] font-bold leading-[1.02] tracking-[-0.035em] text-fg sm:text-[4rem]">
                {project.name}
              </h1>
            </div>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-fg2 animate-enter" style={{ animationDelay: "160ms" }}>
              {copy.summary}
            </p>
            <div className="mt-8 flex flex-wrap gap-3 animate-enter" style={{ animationDelay: "240ms" }}>
              <ButtonLink href={project.liveUrl} external className="group">
                {p.visit}
                <ArrowUpRight size={17} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </ButtonLink>
              {project.repoUrl && (
                <ButtonLink href={project.repoUrl} variant="secondary" external>
                  <Github size={17} />
                  {p.viewCode}
                </ButtonLink>
              )}
            </div>
          </div>

          {/* Ficha do projeto */}
          <dl
            className="grid min-w-0 grid-cols-[minmax(0,1fr)] gap-px overflow-hidden rounded-2xl border border-line/10 bg-line/10 animate-enter lg:col-span-5"
            style={{ animationDelay: "240ms" }}
          >
            <div className="bg-card px-6 py-4">
              <dt className="text-[10px] font-bold uppercase tracking-[0.22em] text-fg4">{p.roleLabel}</dt>
              <dd className="mt-1 text-[15px] font-semibold text-fg">{copy.role}</dd>
            </div>
            <div className="bg-card px-6 py-4">
              <dt className="text-[10px] font-bold uppercase tracking-[0.22em] text-fg4">{p.technologiesLabel}</dt>
              <dd className="mt-2 flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span key={tech} className="rounded-md bg-accent/[0.08] px-2.5 py-1 text-sm font-medium text-accent">
                    {tech}
                  </span>
                ))}
              </dd>
            </div>
            <div className="bg-card px-6 py-4">
              <dt className="text-[10px] font-bold uppercase tracking-[0.22em] text-fg4">{p.linksLabel}</dt>
              <dd className="mt-1 truncate text-[15px] font-semibold text-fg">
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="hover:text-accent">
                  {host}
                </a>
              </dd>
            </div>
          </dl>
        </div>

        {/* Captura principal */}
        <figure className="mt-16 animate-enter" style={{ animationDelay: "320ms" }}>
          <div className="relative rounded-2xl bg-gradient-to-br from-navy via-[#1c1c96] to-[#2f45c4] p-4 sm:p-8">
            <div className="overflow-hidden rounded-lg bg-white shadow-[0_30px_60px_-20px_rgba(0,0,0,0.55)]">
              <Image
                src={project.image}
                alt={p.screenshotAlt.replace("{name}", project.name)}
                width={project.imageWidth}
                height={project.imageHeight}
                quality={90}
                priority
                sizes="(min-width: 1200px) 1136px, 100vw"
                className="block h-auto w-full"
              />
            </div>
          </div>
          <figcaption className="mt-4 flex items-baseline gap-3 text-[13px] text-fg3">
            <span className="font-bold uppercase tracking-[0.18em] text-fg">Fig. 01</span>
            <span className="h-px w-6 bg-line/20" aria-hidden="true" />
            <span className="truncate">{host}</span>
          </figcaption>
        </figure>

        {/* Capítulos do estudo de caso */}
        <div className="mt-24 space-y-14">
          {chapters.map((chapter, i) => (
            <Reveal key={chapter.label} className="grid gap-4 lg:grid-cols-12 lg:gap-12">
              <div className="relative pt-5 lg:col-span-4">
                <span className="rule-draw absolute inset-x-0 top-0 h-px bg-line/20" aria-hidden="true" />
                <p className="flex items-baseline gap-3 text-xs font-bold uppercase tracking-[0.22em]">
                  <span className="tabular-nums text-accent">{String(i + 1).padStart(2, "0")}</span>
                  <span className="text-fg">{chapter.label}</span>
                </p>
              </div>
              <p className="text-lg leading-relaxed text-fg2 lg:col-span-8 lg:pt-4">{chapter.text}</p>
            </Reveal>
          ))}
        </div>

        {/* Galeria */}
        <div className="mt-28">
          <Reveal>
            <p className="flex items-center gap-4 text-xs font-bold uppercase tracking-[0.22em]">
              <span className="tabular-nums text-accent">05</span>
              <span className="text-fg">{p.galleryLabel}</span>
              <span className="rule-draw h-px flex-1 bg-line/15" aria-hidden="true" />
            </p>
          </Reveal>
          <div className="mt-10 grid gap-6 lg:grid-cols-12">
            {project.gallery.map((image, i) => (
              <Reveal
                key={image.src}
                delay={i * 90}
                className={cn(
                  image.kind === "desktop" ? "lg:col-span-5" : "lg:col-span-2",
                  image.kind === "mobile" && "mx-auto w-full max-w-[16rem] lg:max-w-none"
                )}
              >
                <figure>
                  <div
                    className={cn(
                      "overflow-hidden border border-line/10 bg-card shadow-[0_24px_50px_-30px_rgba(17,17,132,0.45)]",
                      image.kind === "mobile" ? "rounded-[1.6rem] border-[6px] border-fg/90" : "rounded-xl"
                    )}
                  >
                    <Image
                      src={image.src}
                      alt={`${p.screenshotAlt.replace("{name}", project.name)} — ${
                        image.kind === "mobile" ? p.mobile : p.desktop
                      }`}
                      width={image.width}
                      height={image.height}
                      sizes={image.kind === "mobile" ? "(min-width: 1024px) 180px, 256px" : "(min-width: 1024px) 460px, 100vw"}
                      className="block h-auto w-full"
                    />
                  </div>
                  <figcaption className="mt-3 flex items-baseline gap-3 text-[13px] text-fg3">
                    <span className="font-bold uppercase tracking-[0.18em] text-fg">
                      Fig. {String(i + 2).padStart(2, "0")}
                    </span>
                    <span>{image.kind === "mobile" ? p.mobile : p.desktop}</span>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Próximo projeto */}
        {next.slug !== project.slug && (
          <Link
            href={href(`/projects/${next.slug}`)}
            className="group mt-28 flex items-center justify-between gap-6 border-y border-line/15 py-8"
          >
            <span>
              <span className="block text-xs font-bold uppercase tracking-[0.22em] text-fg4">{p.next}</span>
              <span className="mt-2 block text-3xl font-bold tracking-[-0.03em] text-fg transition-colors group-hover:text-accent sm:text-[2.6rem]">
                {next.name}
              </span>
            </span>
            <ArrowRight
              size={28}
              className="shrink-0 text-fg3 transition-all duration-300 ease-premium group-hover:translate-x-2 group-hover:text-accent"
            />
          </Link>
        )}
      </div>
    </main>
  );
}
