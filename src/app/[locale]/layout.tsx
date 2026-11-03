import type { Metadata, Viewport } from "next";
import { notFound } from "next/navigation";
import "../globals.css";
import { profile } from "@/data/profile";
import { click } from "@/data/click";
import SkipLink from "@/components/SkipLink";
import Providers from "@/context/Providers";
import { THEME_STORAGE_KEY } from "@/lib/theme";
import { geist, manrope, unbounded } from "@/lib/fonts";
import { dictionaries, type Locale } from "@/i18n/translations";
import { alternatesFor, isLocale, localePath, locales, ogLocale, siteUrl } from "@/i18n/routing";

interface LocaleLayoutProps {
  children: React.ReactNode;
  params: { locale: string };
}

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#090b1e" },
  ],
  width: "device-width",
  initialScale: 1,
};

export function generateMetadata({ params }: LocaleLayoutProps): Metadata {
  if (!isLocale(params.locale)) return {};
  const locale = params.locale;
  const t = dictionaries[locale];
  const title = `${profile.displayName} — ${t.common.role}`;
  const ogImage = `/images/og/og-${locale}.png`;

  return {
    metadataBase: new URL(siteUrl),
    title: { default: title, template: `%s — ${profile.displayName}` },
    description: t.meta.description,
    keywords: [
      "Thiago Servoli",
      t.common.role,
      "React",
      "Next.js",
      "TypeScript",
      "Grupo In Press",
      click.name,
    ],
    authors: [{ name: profile.name, url: profile.socials.github }],
    creator: profile.name,
    alternates: alternatesFor(locale, "/"),
    openGraph: {
      type: "website",
      locale: ogLocale[locale],
      alternateLocale: locales.filter((l) => l !== locale).map((l) => ogLocale[l]),
      url: localePath(locale, "/"),
      title,
      description: t.meta.description,
      siteName: `${profile.displayName} — ${t.meta.siteName}`,
      images: [{ url: ogImage, width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: t.meta.description,
      images: [ogImage],
    },
    robots: { index: true, follow: true },
  };
}

function PersonJsonLd({ locale }: { locale: Locale }) {
  const t = dictionaries[locale];
  const data = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.name,
    jobTitle: t.common.role,
    worksFor: [
      { "@type": "Organization", name: click.name, url: click.url },
      { "@type": "Organization", name: "Grupo In Press" },
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: "São Paulo",
      addressRegion: "SP",
      addressCountry: "BR",
    },
    url: `${siteUrl}${localePath(locale, "/")}`,
    sameAs: [profile.socials.github, profile.socials.linkedin].filter(Boolean),
    knowsLanguage: ["pt-BR", "en"],
    knowsAbout: ["JavaScript", "TypeScript", "React", "Next.js", "Node.js", "Python", "FastAPI", "SQL"],
  };

  const websiteData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: `${profile.displayName} — ${t.meta.siteName}`,
    url: siteUrl,
    inLanguage: t.meta.htmlLang,
  };

  return (
    <>
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
      />
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteData) }}
      />
    </>
  );
}

export default function LocaleLayout({ children, params }: LocaleLayoutProps) {
  if (!isLocale(params.locale)) notFound();
  const locale = params.locale;

  return (
    <html
      lang={dictionaries[locale].meta.htmlLang}
      className={`${manrope.variable} ${unbounded.variable} ${geist.variable}`}
      suppressHydrationWarning
    >
      <head>
        <PersonJsonLd locale={locale} />
        {/* Marca o <html> assim que possível, antes de qualquer hidratação.
            Se o JS falhar depois disso por qualquer motivo, o conteúdo
            permanece visível (ver regra ".js .reveal" em globals.css).
            Também aplica o tema escuro salvo antes da primeira pintura,
            evitando flash de conteúdo com o tema errado. */}
        <script
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{
            __html:
              "document.documentElement.classList.add('js');" +
              `try{if(localStorage.getItem('${THEME_STORAGE_KEY}')==='dark'){document.documentElement.classList.add('dark');}}catch(e){}`,
          }}
        />
      </head>
      <body className="font-body antialiased">
        <Providers locale={locale}>
          <SkipLink />
          {children}
        </Providers>
      </body>
    </html>
  );
}
