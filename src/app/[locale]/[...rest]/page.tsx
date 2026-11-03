import { notFound } from "next/navigation";

/**
 * Qualquer caminho sem rota cai aqui, dentro do layout do idioma, para que o
 * 404 (app/[locale]/not-found.tsx) saia traduzido e com navbar/rodapé.
 */
export default function CatchAll() {
  notFound();
}
