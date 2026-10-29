"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, Github } from "lucide-react";
import type { Project } from "@/data/projects";
import ButtonLink from "@/components/ButtonLink";
import { useLanguage } from "@/context/LanguageContext";

export default function ProjectDetailContent({ project }: { project: Project }) {
  const { t } = useLanguage();
  const copy = t.projects.items[project.slug];

  return (
    <main id="conteudo-principal" className="px-6 pb-24 pt-32 lg:px-10">
      <div className="mx-auto max-w-3xl">
        <Link
          href="/#projetos"
          className="inline-flex items-center gap-1.5 text-[15px] text-fg3 transition-colors hover:text-accent"
        >
          <ArrowLeft size={16} />
          {t.projectPage.back}
        </Link>

        <div className="mt-10 flex items-center gap-4">
          <Image
            src={project.icon}
            alt={t.projectPage.logoAlt.replace("{name}", project.name)}
            width={56}
            height={56}
            className="h-14 w-14 rounded-xl"
          />
          <h1 className="text-4xl font-bold tracking-tight text-fg sm:text-5xl">{project.name}</h1>
        </div>

        <p className="mt-6 text-lg leading-relaxed text-fg2">{copy.description}</p>

        <div className="mt-8 flex flex-wrap gap-3">
          <ButtonLink href={project.liveUrl} external>
            {t.projectPage.visit}
            <ArrowUpRight size={17} />
          </ButtonLink>
          {project.repoUrl && (
            <ButtonLink href={project.repoUrl} variant="secondary" external>
              <Github size={17} />
              {t.projectPage.viewCode}
            </ButtonLink>
          )}
        </div>

        <div className="mt-12 overflow-hidden rounded-xl border border-line/10 bg-card shadow-[0_30px_60px_-25px_rgba(17,17,132,0.35)] animate-enter">
          <Image
            src={project.image}
            alt={t.projectPage.screenshotAlt.replace("{name}", project.name)}
            width={project.imageWidth}
            height={project.imageHeight}
            quality={90}
            priority
            sizes="(min-width: 800px) 768px, 100vw"
            className="block h-auto w-full"
          />
        </div>

        <dl className="mt-12 grid gap-8 border-t border-line/10 pt-10 sm:grid-cols-2">
          <div>
            <dt className="font-semibold text-fg">{t.projectPage.problemLabel}</dt>
            <dd className="mt-2 text-fg2">{copy.problem}</dd>
          </div>
          <div>
            <dt className="font-semibold text-fg">{t.projectPage.contributionLabel}</dt>
            <dd className="mt-2 text-fg2">{copy.contribution}</dd>
          </div>
          <div className="sm:col-span-2">
            <dt className="font-semibold text-fg">{t.projectPage.technologiesLabel}</dt>
            <dd className="mt-3 flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="rounded-md bg-accent/[0.08] px-2.5 py-1 text-sm font-medium text-accent"
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
