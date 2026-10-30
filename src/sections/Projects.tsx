"use client";

import { useRef, type MouseEvent } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Github } from "lucide-react";
import { projects } from "@/data/projects";
import Reveal from "@/components/Reveal";
import { DimensionLine } from "@/components/Blueprint";
import SectionHeading from "@/components/SectionHeading";
import { useLanguage } from "@/context/LanguageContext";
import type { Dictionary } from "@/i18n/translations";

/** Captura de tela dentro de uma moldura de navegador, na proporção real da imagem */
function BrowserMockup({ project }: { project: (typeof projects)[number] }) {
  const ref = useRef<HTMLDivElement>(null);

  // Inclinação 3D no hover — só reage a mousemove, não roda nada parado
  const onMove = (event: MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;
    el.style.transform = `perspective(1200px) rotateX(${y * -6}deg) rotateY(${x * 8}deg) scale(1.02)`;
  };
  const onLeave = () => {
    if (ref.current) ref.current.style.transform = "";
  };

  const host = project.liveUrl.replace(/^https?:\/\//, "").replace(/\/$/, "");

  return (
    <div className="relative rounded-2xl bg-gradient-to-br from-navy via-[#22229e] to-[#3d5bd9] p-5 pb-4 sm:p-8 sm:pb-5">
      {/* Linhas de construção no painel */}
      <svg className="pointer-events-none absolute inset-0 h-full w-full" aria-hidden="true">
        <line x1="0" y1="50%" x2="100%" y2="50%" stroke="rgba(255,255,255,0.14)" strokeDasharray="14 4 2 4" />
        <line x1="50%" y1="0" x2="50%" y2="100%" stroke="rgba(255,255,255,0.14)" strokeDasharray="14 4 2 4" />
        <circle cx="50%" cy="50%" r="42%" fill="none" stroke="rgba(255,255,255,0.1)" />
      </svg>
      <div
        ref={ref}
        onMouseMove={onMove}
        onMouseLeave={onLeave}
        className="relative overflow-hidden rounded-lg bg-white shadow-[0_30px_60px_-20px_rgba(0,0,0,0.55)] transition-transform duration-300 ease-out"
      >
        <div className="flex items-center gap-2 border-b border-black/10 bg-[#f1f3f8] px-3 py-2">
          <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
          <span className="ml-3 truncate rounded bg-white px-2 py-0.5 text-[11px] text-[#5a5f7d]">
            {host}
          </span>
        </div>
        <Image
          src={project.image}
          alt=""
          width={project.imageWidth}
          height={project.imageHeight}
          quality={90}
          sizes="(min-width: 1200px) 600px, (min-width: 1024px) 50vw, 100vw"
          className="block h-auto w-full"
        />
      </div>
      <DimensionLine tone="light" className="relative mt-4">
        {project.imageWidth} × {project.imageHeight} px
      </DimensionLine>
    </div>
  );
}

function ProjectRow({
  project,
  index,
  t,
}: {
  project: (typeof projects)[number];
  index: number;
  t: Dictionary;
}) {
  const copy = t.projects.items[project.slug];
  const reversed = index % 2 === 1;

  return (
    <article className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
      <Reveal direction={reversed ? "right" : "left"} className={reversed ? "lg:order-2" : ""}>
        <BrowserMockup project={project} />
      </Reveal>

      <Reveal direction={reversed ? "left" : "right"} delay={100}>
        <p className="text-sm font-bold text-accent">
          {String(index + 1).padStart(2, "0")}{" "}
          <span className="text-fg4">/ {String(projects.length).padStart(2, "0")}</span>
        </p>
        <div className="mt-4 flex items-center gap-3">
          <Image src={project.icon} alt="" width={44} height={44} className="h-11 w-11 rounded-xl" />
          <h3 className="text-3xl font-bold tracking-tight text-fg">{project.name}</h3>
        </div>

        <p className="mt-5 leading-relaxed text-fg2">{copy.description}</p>

        <dl className="mt-6 grid gap-4 text-[15px] sm:grid-cols-2">
          <div className="rounded-lg border border-line/10 bg-card p-4">
            <dt className="font-semibold text-fg">{t.projects.problemLabel}</dt>
            <dd className="mt-1 text-fg3">{copy.problem}</dd>
          </div>
          <div className="rounded-lg border border-line/10 bg-card p-4">
            <dt className="font-semibold text-fg">{t.projects.contributionLabel}</dt>
            <dd className="mt-1 text-fg3">{copy.contribution}</dd>
          </div>
        </dl>

        <ul className="mt-6 flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <li
              key={tech}
              className="rounded-md bg-accent/[0.08] px-2.5 py-1 text-sm font-medium text-accent"
            >
              {tech}
            </li>
          ))}
        </ul>

        <div className="mt-8 flex flex-wrap items-center gap-5">
          <Link
            href={`/projects/${project.slug}`}
            className="group inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 font-semibold text-white transition-colors hover:bg-primary/90"
          >
            {t.projects.viewProject}
            <ArrowRight size={17} className="transition-transform group-hover:translate-x-1" />
          </Link>
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-1.5 font-semibold text-fg2 transition-colors hover:text-accent"
          >
            {t.projectPage.visit}
            <ArrowUpRight
              size={17}
              className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </a>
          {project.repoUrl && (
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-fg3 transition-colors hover:text-fg"
            >
              <Github size={17} />
              {t.projects.viewCode}
            </a>
          )}
        </div>
      </Reveal>
    </article>
  );
}

export default function Projects() {
  const { t } = useLanguage();

  return (
    <section id="projetos" className="relative px-6 py-28 lg:px-10">
      <div className="mx-auto max-w-content">
        <div className="flex items-end justify-between gap-8">
          <Reveal>
            <SectionHeading index="04" eyebrow={t.projects.eyebrow} title={t.projects.title} />
          </Reveal>
          <div data-avatar-slot="projetos" className="hidden h-[140px] w-[112px] shrink-0 lg:block" aria-hidden="true" />
        </div>

        <div className="mt-16 space-y-24">
          {projects.map((project, index) => (
            <ProjectRow key={project.slug} project={project} index={index} t={t} />
          ))}
        </div>
      </div>
    </section>
  );
}
