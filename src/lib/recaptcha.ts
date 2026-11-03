/**
 * reCAPTCHA v3 (invisível). Em vez do botão com data-callback (que envia o
 * formulário recarregando a página), usamos a execução programática:
 * grecaptcha.execute(siteKey, { action }) gera o token na hora do envio, e ele
 * segue junto no JSON para /api/contact, que o valida no Google.
 *
 * O script só é carregado quando o formulário se aproxima da tela.
 */

interface Grecaptcha {
  ready: (callback: () => void) => void;
  execute: (siteKey: string, options: { action: string }) => Promise<string>;
}

declare global {
  interface Window {
    grecaptcha?: Grecaptcha;
  }
}

const SITE_KEY = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY ?? "";

export const recaptchaEnabled = SITE_KEY.length > 0;

let loading: Promise<void> | null = null;

export function loadRecaptcha(): Promise<void> {
  if (!recaptchaEnabled) return Promise.resolve();
  if (loading) return loading;
  loading = new Promise<void>((resolve, reject) => {
    const script = document.createElement("script");
    script.src = `https://www.google.com/recaptcha/api.js?render=${encodeURIComponent(SITE_KEY)}`;
    script.async = true;
    script.onload = () => resolve();
    script.onerror = () => {
      loading = null;
      reject(new Error("recaptcha_load_failed"));
    };
    document.head.appendChild(script);
  });
  return loading;
}

/** Token para a ação informada; string vazia quando o reCAPTCHA não está configurado */
export async function getRecaptchaToken(action: string): Promise<string> {
  if (!recaptchaEnabled) return "";
  await loadRecaptcha();
  const grecaptcha = window.grecaptcha;
  if (!grecaptcha) throw new Error("recaptcha_unavailable");
  return new Promise<string>((resolve, reject) => {
    grecaptcha.ready(() => {
      grecaptcha.execute(SITE_KEY, { action }).then(resolve, reject);
    });
  });
}
