import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getProjectBySlug, projects } from "@/data/projects";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";
import ProjectDetailContent from "@/components/ProjectDetailContent";
import { dictionaries } from "@/i18n/translations";
import { alternatesFor, isLocale, ogLocale } from "@/i18n/routing";

interface ProjectPageProps {
  params: { locale: string; slug: string };
}

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export function generateMetadata({ params }: ProjectPageProps): Metadata {
  const project = getProjectBySlug(params.slug);
  if (!project || !isLocale(params.locale)) return {};
  const copy = dictionaries[params.locale].projects.items[project.slug];
  const image = `/images/og/project-${project.slug}.png`;

  return {
    title: project.name,
    description: copy.summary,
    alternates: alternatesFor(params.locale, `/projects/${project.slug}`),
    openGraph: {
      title: project.name,
      description: copy.summary,
      locale: ogLocale[params.locale],
      images: [{ url: image, width: 1200, height: 630, alt: project.name }],
    },
    twitter: { card: "summary_large_image", title: project.name, description: copy.summary, images: [image] },
  };
}

/** Estudo de caso de cada projeto: contexto, desafio, solução, resultado e galeria */
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
