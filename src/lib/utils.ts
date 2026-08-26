export function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

/**
 * Formata um número de mailto com assunto pré-preenchido, sem expor
 * nenhuma lógica sensível no cliente — é apenas uma string estática.
 */
export function buildMailto(email: string, subject?: string) {
  const params = subject ? `?subject=${encodeURIComponent(subject)}` : "";
  return `mailto:${email}${params}`;
}
