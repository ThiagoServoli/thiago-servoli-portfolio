import { NextResponse, type NextRequest } from "next/server";

/**
 * Português é servido na raiz sem prefixo: "/" e "/projects/x" são reescritos
 * internamente para o segmento [locale] = "pt". "/en" e "/es" seguem direto.
 * "/pt/..." redireciona para a versão sem prefixo (evita conteúdo duplicado).
 */
export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (pathname === "/pt" || pathname.startsWith("/pt/")) {
    const url = request.nextUrl.clone();
    url.pathname = pathname.slice(3) || "/";
    return NextResponse.redirect(url, 308);
  }

  if (/^\/(en|es)(\/|$)/.test(pathname)) return NextResponse.next();

  const url = request.nextUrl.clone();
  url.pathname = `/pt${pathname === "/" ? "" : pathname}`;
  return NextResponse.rewrite(url);
}

export const config = {
  // Fora: API, arquivos internos do Next e qualquer caminho com extensão (imagens, PDFs, ícones...)
  matcher: ["/((?!api|_next|.*\\..*).*)"],
};
