"use client";

import { useRef, useState, type MouseEvent } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Github } from "lucide-react";
import { projects } from "@/data/projects";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import MobileToggle from "@/components/MobileToggle";
import { chapterNumber } from "@/data/chapters";
import { useLanguage } from "@/context/LanguageContext";
import { cn } from "@/lib/utils";

/** Captura de tela dentro de uma moldura de navegador, na proporção real da imagem */
function BrowserMockup({ project, index }: { project: (typeof projects)[number]; index: number }) {
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
    <figure>
      <div className="relative rounded-2xl bg-gradient-to-br from-navy via-[#1c1c96] to-[#2f45c4] p-5 sm:p-8">
        {/* Brilho suave no painel (estático) */}
        <div
          className="pointer-events-none absolute inset-0 rounded-2xl bg-[radial-gradient(60%_60%_at_80%_10%,rgba(255,255,255,0.16),transparent_70%)]"
          aria-hidden="true"
        />
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
      </div>
      {/* Legenda de figura, como num relatório */}
      <figcaption className="mt-4 flex items-baseline gap-3 text-[13px] text-fg3">
        <span className="font-bold uppercase tracking-[0.18em] text-fg">Fig. {String(index + 1).padStart(2, "0")}</span>
        <span className="h-px w-6 bg-line/20" aria-hidden="true" />
        <span className="truncate">{host}</span>
      </figcaption>
    </figure>
  );
}

/** No celular, só os primeiros projetos aparecem; os demais abrem pelo botão */
const VISIBLE_ON_MOBILE = 2;

function ProjectRow({
  project,
  index,
  collapsed,
}: {
  project: (typeof projects)[number];
  index: number;
  collapsed: boolean;
}) {
  const { t, href } = useLanguage();
  const copy = t.projects.items[project.slug];
  const reversed = index % 2 === 1;

  return (
    <article className={cn("grid items-center gap-10 lg:grid-cols-2 lg:gap-16", collapsed && "max-md:hidden")}>
      <Reveal direction={reversed ? "right" : "left"} className={reversed ? "lg:order-2" : ""}>
        <BrowserMockup project={project} index={index} />
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

        <p className="mt-5 leading-relaxed text-fg2">{copy.summary}</p>

        <dl className="mt-6 grid gap-4 text-[15px] sm:grid-cols-2">
          <div className="rounded-lg border border-line/10 bg-card p-4">
            <dt className="font-semibold text-fg">{t.projects.challengeLabel}</dt>
            <dd className="mt-1 text-fg3">{copy.challenge}</dd>
          </div>
          <div className="rounded-lg border border-line/10 bg-card p-4">
            <dt className="font-semibold text-fg">{t.projects.roleLabel}</dt>
            <dd className="mt-1 text-fg3">{copy.role}</dd>
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
            href={href(`/projects/${project.slug}`)}
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
  const [expanded, setExpanded] = useState(false);
  const toggleRef = useRef<HTMLDivElement>(null);

  const onToggle = () => {
    setExpanded((value) => !value);
    // Ao recolher, mantém o botão à vista (o conteúdo acima dele encolhe)
    if (expanded) requestAnimationFrame(() => toggleRef.current?.scrollIntoView({ block: "center" }));
  };

  return (
    <section id="projetos" className="relative px-6 py-28 lg:px-10">
      <div className="mx-auto max-w-content">
        <Reveal>
          <SectionHeading index={chapterNumber("projetos")} eyebrow={t.projects.eyebrow} title={t.projects.title} />
        </Reveal>

        <div id="projetos-lista" className="mt-16 space-y-24">
          {projects.map((project, index) => (
            <ProjectRow
              key={project.slug}
              project={project}
              index={index}
              collapsed={!expanded && index >= VISIBLE_ON_MOBILE}
            />
          ))}
        </div>

        {projects.length > VISIBLE_ON_MOBILE && (
          <div ref={toggleRef} className="mt-16 flex justify-center md:hidden">
            <MobileToggle
              expanded={expanded}
              onToggle={onToggle}
              controls="projetos-lista"
              showLabel={t.projects.showMore}
              hideLabel={t.projects.showLess}
            />
          </div>
        )}
      </div>
    </section>
  );
}
