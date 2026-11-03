import localFont from "next/font/local";

/*
 * Fontes self-hosted via next/font: arquivos dos pacotes @fontsource, com
 * fallback ajustado (menos salto de layout ao carregar). Só a Manrope, usada
 * acima da dobra, é pré-carregada; as fontes da Click. carregam sob demanda.
 */
export const manrope = localFont({
  src: [
    { path: "../../node_modules/@fontsource/manrope/files/manrope-latin-400-normal.woff2", weight: "400" },
    { path: "../../node_modules/@fontsource/manrope/files/manrope-latin-500-normal.woff2", weight: "500" },
    { path: "../../node_modules/@fontsource/manrope/files/manrope-latin-600-normal.woff2", weight: "600" },
    { path: "../../node_modules/@fontsource/manrope/files/manrope-latin-700-normal.woff2", weight: "700" },
  ],
  variable: "--font-manrope",
  display: "swap",
  fallback: ["system-ui", "-apple-system", "Segoe UI", "sans-serif"],
});

// Tipografia oficial da Click. (manual de identidade): Unbounded nos títulos, Geist no texto
export const unbounded = localFont({
  src: [{ path: "../../node_modules/@fontsource/unbounded/files/unbounded-latin-600-normal.woff2", weight: "600" }],
  variable: "--font-unbounded",
  display: "swap",
  preload: false,
  fallback: ["system-ui", "sans-serif"],
});

export const geist = localFont({
  src: [
    { path: "../../node_modules/@fontsource/geist-sans/files/geist-sans-latin-400-normal.woff2", weight: "400" },
    { path: "../../node_modules/@fontsource/geist-sans/files/geist-sans-latin-500-normal.woff2", weight: "500" },
    { path: "../../node_modules/@fontsource/geist-sans/files/geist-sans-latin-600-normal.woff2", weight: "600" },
  ],
  variable: "--font-geist",
  display: "swap",
  preload: false,
  fallback: ["system-ui", "sans-serif"],
});
