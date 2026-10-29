import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getProjectBySlug, projects } from "@/data/projects";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";
import ProjectDetailContent from "@/components/ProjectDetailContent";

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
      <ScrollProgress />
      <Navbar />
      <ProjectDetailContent project={project} />
      <Footer />
    </>
  );
}
