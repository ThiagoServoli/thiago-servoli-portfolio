import type { Locale } from "@/i18n/translations";

/**
 * Rotas por idioma: português na raiz ("/", "/projects/x"), inglês e espanhol
 * com prefixo ("/en", "/es/projects/x"). O middleware reescreve a raiz para
 * o segmento [locale] = "pt" sem mudar a URL.
 */
export const locales: Locale[] = ["pt", "en", "es"];
export const defaultLocale: Locale = "pt";

export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://thiagoservoli.vercel.app";

/** Código usado no atributo hreflang / alternates */
export const hreflang: Record<Locale, string> = { pt: "pt-BR", en: "en", es: "es" };

/** Locale do Open Graph */
export const ogLocale: Record<Locale, string> = { pt: "pt_BR", en: "en_US", es: "es_ES" };

export function isLocale(value: string | undefined | null): value is Locale {
  return !!value && (locales as string[]).includes(value);
}

/**
 * Monta o caminho de um idioma. `path` começa com "/" e pode ser só uma
 * âncora da home ("/#sobre").
 */
export function localePath(locale: Locale, path = "/"): string {
  if (locale === defaultLocale) return path;
  if (path === "/") return `/${locale}`;
  if (path.startsWith("/#")) return `/${locale}${path.slice(1)}`;
  return `/${locale}${path}`;
}

/** Remove o prefixo de idioma de um pathname ("/en/projects/x" → "/projects/x") */
export function stripLocale(pathname: string): string {
  const match = pathname.match(/^\/(pt|en|es)(?=\/|$)/);
  if (!match) return pathname || "/";
  return pathname.slice(match[0].length) || "/";
}

/** canonical + hreflang de uma página, para o `alternates` do Metadata */
export function alternatesFor(locale: Locale, path = "/") {
  return {
    canonical: localePath(locale, path),
    languages: {
      ...Object.fromEntries(locales.map((l) => [hreflang[l], localePath(l, path)])),
      "x-default": localePath(defaultLocale, path),
    },
  };
}
