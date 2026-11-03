import type { ReactNode } from "react";

/**
 * O layout de verdade (com <html>, idioma e metadados) fica em app/[locale].
 * Este só repassa o conteúdo: o Next exige um layout na raiz para o
 * app/not-found.tsx, usado em URLs que nem chegam a um idioma.
 */
export default function RootLayout({ children }: { children: ReactNode }) {
  return children;
}
