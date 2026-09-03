"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, Github } from "lucide-react";
import type { Project } from "@/data/projects";
import { useLanguage } from "@/context/LanguageContext";

export default function ProjectDetailContent({ project }: { project: Project }) {
  const { t } = useLanguage();
  const copy = t.projects.items[project.slug];

  return (
    <main className="px-6 pb-28 pt-40 lg:px-10">
      <div className="mx-auto max-w-3xl">
        <Link
          href="/#projetos"
          className="inline-flex items-center gap-1.5 text-base text-fg3 transition-colors hover:text-fg"
        >
          <ArrowLeft size={16} />
          {t.projectPage.back}
        </Link>

        <p
          className="mt-8 font-mono text-sm font-bold uppercase tracking-[0.3em]"
          style={{ color: project.accentColor }}
        >
          {project.code}
        </p>

        <div className="mt-5 h-16 w-auto max-w-[320px]">
          <Image
            src={project.logo}
            alt={t.projectPage.logoAlt.replace("{name}", project.name)}
            width={640}
            height={160}
            className="h-full w-auto object-contain object-left"
          />
        </div>

        <p className="mt-6 max-w-xl text-xl leading-relaxed text-fg2">{copy.description}</p>

        <div
          className="relative mt-10 aspect-video w-full overflow-hidden rounded-3xl border border-line/10 bg-ink-900"
          style={{ boxShadow: `0 0 60px -15px ${project.accentColor}66` }}
        >
          <Image
            src={project.image}
            alt={t.projectPage.screenshotAlt.replace("{name}", project.name)}
            fill
            sizes="(min-width: 1024px) 768px, 100vw"
            className="object-cover"
          />
        </div>

        <div className="mt-10 flex flex-wrap items-center gap-6">
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 rounded-full bg-neon-green px-7 py-3.5 text-base font-bold text-ink-950 shadow-[0_0_25px_rgba(57,255,136,0.45)] transition-shadow hover:shadow-[0_0_45px_rgba(57,255,136,0.85)]"
          >
            {t.projectPage.visit}
            <ArrowUpRight
              size={17}
              className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </a>
          {project.repoUrl && (
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border-2 border-line/20 px-7 py-3.5 text-base font-semibold text-fg transition-colors hover:border-line/40"
            >
              <Github size={17} />
              {t.projectPage.viewCode}
            </a>
          )}
        </div>

        <dl className="mt-16 grid gap-10 border-t border-line/10 pt-10 sm:grid-cols-2">
          <div>
            <dt className="font-mono text-sm font-bold uppercase tracking-wider text-fg4">
              {t.projectPage.problemLabel}
            </dt>
            <dd className="mt-2 text-lg text-fg2">{copy.problem}</dd>
          </div>
          <div>
            <dt className="font-mono text-sm font-bold uppercase tracking-wider text-fg4">
              {t.projectPage.contributionLabel}
            </dt>
            <dd className="mt-2 text-lg text-fg2">{copy.contribution}</dd>
          </div>
          <div className="sm:col-span-2">
            <dt className="font-mono text-sm font-bold uppercase tracking-wider text-fg4">
              {t.projectPage.technologiesLabel}
            </dt>
            <dd className="mt-3 flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border px-3.5 py-1.5 font-mono text-sm font-semibold"
                  style={{ borderColor: `${project.accentColor}66`, color: project.accentColor }}
                >
                  {tech}
                </span>
              ))}
            </dd>
          </div>
        </dl>
      </div>
    </main>
  );
}
