import type { MetadataRoute } from "next";
import { projects } from "@/data/projects";
import { hreflang, localePath, locales, siteUrl } from "@/i18n/routing";

/** Uma entrada por página e idioma, cada uma apontando as versões nos outros idiomas */
export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    { path: "/", priority: 1 },
    ...projects.map((project) => ({ path: `/projects/${project.slug}`, priority: 0.7 })),
  ];

  return paths.flatMap(({ path, priority }) =>
    locales.map((locale) => ({
      url: `${siteUrl}${localePath(locale, path)}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority,
      alternates: {
        languages: Object.fromEntries(locales.map((l) => [hreflang[l], `${siteUrl}${localePath(l, path)}`])),
      },
    }))
  );
}
