import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, Github } from "lucide-react";
import { getProjectBySlug, projects } from "@/data/projects";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimatedBackground from "@/components/AnimatedBackground";
import ScrollProgressBar from "@/components/ScrollProgressBar";

interface ProjectPageProps {
  params: { slug: string };
}

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export function generateMetadata({ params }: ProjectPageProps): Metadata {
  const project = getProjectBySlug(params.slug);
  if (!project) return {};

  return {
    title: project.name,
    description: project.description,
    alternates: { canonical: `/projects/${project.slug}` },
    openGraph: {
      title: project.name,
      description: project.description,
      images: [{ url: project.image }],
    },
  };
}

/**
 * Estrutura preparada para case studies completos (contexto, problema,
 * solução, arquitetura, desafios, resultados). Os campos de conteúdo
 * detalhado usam placeholders até que as informações reais de cada
 * projeto sejam fornecidas — ver src/data/projects.ts.
 */
export default function ProjectPage({ params }: ProjectPageProps) {
  const project = getProjectBySlug(params.slug);
  if (!project) notFound();

  return (
    <>
      <AnimatedBackground />
      <ScrollProgressBar />
      <Navbar />
      <main className="px-6 pb-28 pt-40 lg:px-10">
        <div className="mx-auto max-w-3xl">
          <Link
            href="/#projetos"
            className="inline-flex items-center gap-1.5 text-base text-bone-500 transition-colors hover:text-white"
          >
            <ArrowLeft size={16} />
            Voltar aos projetos
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
              alt={`Logo ${project.name}`}
              width={640}
              height={160}
              className="h-full w-auto object-contain object-left"
            />
          </div>

          <p className="mt-6 max-w-xl text-xl leading-relaxed text-bone-300">
            {project.description}
          </p>

          <div
            className="relative mt-10 aspect-video w-full overflow-hidden rounded-3xl border border-white/10 bg-ink-900"
            style={{ boxShadow: `0 0 60px -15px ${project.accentColor}66` }}
          >
            <Image
              src={project.image}
              alt={`Screenshot do projeto ${project.name}`}
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
              Visitar projeto
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
                className="inline-flex items-center gap-2 rounded-full border-2 border-white/20 px-7 py-3.5 text-base font-semibold text-white transition-colors hover:border-white/40"
              >
                <Github size={17} />
                Ver código
              </a>
            )}
          </div>

          <dl className="mt-16 grid gap-10 border-t border-white/10 pt-10 sm:grid-cols-2">
            <div>
              <dt className="font-mono text-sm font-bold uppercase tracking-wider text-bone-700">
                Problema
              </dt>
              <dd className="mt-2 text-lg text-bone-300">{project.problem}</dd>
            </div>
            <div>
              <dt className="font-mono text-sm font-bold uppercase tracking-wider text-bone-700">
                Contribuição
              </dt>
              <dd className="mt-2 text-lg text-bone-300">{project.contribution}</dd>
            </div>
            <div className="sm:col-span-2">
              <dt className="font-mono text-sm font-bold uppercase tracking-wider text-bone-700">
                Tecnologias
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
      <Footer />
    </>
  );
}
