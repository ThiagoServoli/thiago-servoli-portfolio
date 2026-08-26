import type { Metadata, Viewport } from "next";
import "@fontsource/space-grotesk/500.css";
import "@fontsource/space-grotesk/600.css";
import "@fontsource/space-grotesk/700.css";
import "@fontsource/manrope/400.css";
import "@fontsource/manrope/500.css";
import "@fontsource/manrope/700.css";
import "@fontsource/manrope/800.css";
import "@fontsource/jetbrains-mono/400.css";
import "@fontsource/jetbrains-mono/500.css";
import "./globals.css";
import { profile } from "@/data/profile";
import CustomCursor from "@/components/CustomCursor";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://thiagoservoli.dev";

export const viewport: Viewport = {
  themeColor: "#0a0a0b",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${profile.displayName} — ${profile.role}`,
    template: `%s — ${profile.displayName}`,
  },
  description:
    "Portfólio de Thiago Servoli, Desenvolvedor Full Stack em São Paulo especializado em React, Next.js, TypeScript, Node.js e Python. Aplicações web modernas, performáticas e escaláveis.",
  keywords: [
    "Thiago Servoli",
    "Desenvolvedor Full Stack",
    "Full Stack Developer São Paulo",
    "JavaScript Developer",
    "React Developer",
    "Next.js Developer",
  ],
  authors: [{ name: profile.name, url: profile.socials.github }],
  creator: profile.name,
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: siteUrl,
    title: `${profile.displayName} — ${profile.role}`,
    description:
      "Desenvolvedor Full Stack especializado em criar aplicações web modernas, performáticas e escaláveis.",
    siteName: `${profile.displayName} — Portfólio`,
    images: [
      {
        url: "/images/og-cover.png",
        width: 1200,
        height: 630,
        alt: profile.displayName,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${profile.displayName} — ${profile.role}`,
    description:
      "Desenvolvedor Full Stack especializado em criar aplicações web modernas, performáticas e escaláveis.",
    images: ["/images/og-cover.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

function PersonJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.name,
    jobTitle: profile.role,
    email: profile.email,
    address: {
      "@type": "PostalAddress",
      addressLocality: "São Paulo",
      addressRegion: "SP",
      addressCountry: "BR",
    },
    url: siteUrl,
    sameAs: [profile.socials.github].filter(Boolean),
    knowsAbout: [
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "Node.js",
      "Python",
      "SQL",
    ],
  };

  const websiteData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: `${profile.displayName} — Portfólio`,
    url: siteUrl,
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className="dark">
      <head>
        <PersonJsonLd />
        {/* Marca o <html> assim que possível, antes de qualquer hidratação.
            Se o JS falhar depois disso por qualquer motivo, o conteúdo
            permanece visível (ver regra ".js .reveal" em globals.css). */}
        <script
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{
            __html: "document.documentElement.classList.add('js');",
          }}
        />
      </head>
      <body className="font-body antialiased selection:bg-neon-green selection:text-ink-950">
        <a
          href="#conteudo-principal"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:rounded focus:bg-neon-green focus:px-4 focus:py-2 focus:text-ink-950 focus:font-bold"
        >
          Pular para o conteúdo
        </a>
        <div className="noise-overlay" aria-hidden="true" />
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
