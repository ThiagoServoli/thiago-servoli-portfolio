"use client";

import { useRef, type MouseEvent } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Github } from "lucide-react";
import { projects } from "@/data/projects";
import Reveal from "@/components/Reveal";

function ProjectCard({
  project,
  reversed,
}: {
  project: (typeof projects)[number];
  reversed: boolean;
}) {
  const imgRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (event: MouseEvent<HTMLDivElement>) => {
    const el = imgRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const rotateX = ((y - rect.height / 2) / rect.height) * -8;
    const rotateY = ((x - rect.width / 2) / rect.width) * 8;
    el.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
  };

  const handleMouseLeave = () => {
    if (imgRef.current)
      imgRef.current.style.transform = "perspective(1000px) rotateX(0) rotateY(0) scale(1)";
  };

  return (
    <article className="grid items-center gap-12 border-t border-white/10 py-20 lg:grid-cols-2 lg:gap-16 lg:py-28">
      <Reveal direction={reversed ? "right" : "left"} className={reversed ? "lg:order-2" : ""}>
        <div
          ref={imgRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className="card-neon-border relative aspect-[16/11] w-full overflow-hidden rounded-3xl border border-white/10 bg-ink-900 transition-transform duration-200 ease-out"
          style={{ boxShadow: `0 0 60px -15px ${project.accentColor}66` }}
        >
          <Image
            src={project.image}
            alt={`Prévia do projeto ${project.name}`}
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
          />
        </div>
      </Reveal>

      <Reveal direction={reversed ? "left" : "right"} className={reversed ? "lg:order-1" : ""}>
        <p
          className="font-mono text-sm font-bold uppercase tracking-[0.3em]"
          style={{ color: project.accentColor }}
        >
          {project.code}
        </p>

        <div className="mt-5 h-14 w-auto max-w-[280px]">
          <Image
            src={project.logo}
            alt={`Logo ${project.name}`}
            width={560}
            height={140}
            className="h-full w-auto object-contain object-left"
          />
        </div>

        <p className="mt-6 max-w-md text-lg leading-relaxed text-bone-300">
          {project.description}
        </p>

        <dl className="mt-7 grid grid-cols-2 gap-5 text-base">
          <div>
            <dt className="font-mono text-xs font-bold uppercase tracking-wider text-bone-700">
              Problema
            </dt>
            <dd className="mt-1.5 text-bone-300">{project.problem}</dd>
          </div>
          <div>
            <dt className="font-mono text-xs font-bold uppercase tracking-wider text-bone-700">
              Contribuição
            </dt>
            <dd className="mt-1.5 text-bone-300">{project.contribution}</dd>
          </div>
        </dl>

        <div className="mt-7 flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-full border px-3.5 py-1.5 font-mono text-sm font-semibold"
              style={{ borderColor: `${project.accentColor}66`, color: project.accentColor }}
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-9 flex flex-wrap items-center gap-6">
          <Link
            href={`/projects/${project.slug}`}
            data-cursor-hover
            className="group inline-flex items-center gap-2 text-lg font-bold text-white transition-colors"
            style={{ textShadow: `0 0 20px ${project.accentColor}55` }}
          >
            Ver projeto
            <ArrowUpRight
              size={19}
              className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </Link>
          {project.repoUrl && (
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor-hover
              className="inline-flex items-center gap-2 text-base text-bone-500 transition-colors hover:text-white"
            >
              <Github size={17} />
              Ver código
            </a>
          )}
        </div>
      </Reveal>
    </article>
  );
}

export default function Projects() {
  return (
    <section id="projetos" className="px-6 py-4 lg:px-10">
      <div className="mx-auto max-w-content">
        <Reveal className="max-w-2xl border-t border-white/10 pt-28">
          <p className="font-mono text-sm font-bold uppercase tracking-[0.3em] text-neon-green">
            Projetos
          </p>
          <h2 className="mt-4 font-display text-4xl font-bold leading-tight text-white sm:text-5xl">
            Produtos reais, do problema à solução
          </h2>
        </Reveal>

        {projects.map((project, index) => (
          <ProjectCard key={project.slug} project={project} reversed={index % 2 === 1} />
        ))}
      </div>
    </section>
  );
}
