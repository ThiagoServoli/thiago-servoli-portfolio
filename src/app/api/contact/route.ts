import { NextResponse } from "next/server";
import { profile } from "@/data/profile";
import { dictionaries } from "@/i18n/translations";
import { formatContactMessage, RECAPTCHA_ACTION, RECAPTCHA_MIN_SCORE, validateContact } from "@/lib/contact";

/*
 * Formulário de contato. Variáveis de ambiente (ver .env.example):
 *
 *   RECAPTCHA_SECRET_KEY            chave secreta do reCAPTCHA v3 (com ela, o token passa a ser obrigatório)
 *   NEXT_PUBLIC_RECAPTCHA_SITE_KEY  chave do site (usada no navegador)
 *
 *   Entrega (pelo menos uma):
 *   CALLMEBOT_APIKEY  WhatsApp pessoal via CallMeBot (https://www.callmebot.com/blog/free-api-whatsapp-messages/)
 *   WHATSAPP_PHONE    número que recebe (padrão: profile.whatsapp)
 *   RESEND_API_KEY + CONTACT_TO (+ CONTACT_FROM)  cópia por e-mail via Resend
 *
 * Sem nenhum canal configurado, responde 503 e o site oferece o envio pelo WhatsApp.
 */

export const runtime = "nodejs";

// Limite simples por IP (melhor esforço: a memória é por instância do servidor)
const WINDOW_MS = 10 * 60 * 1000;
const MAX_PER_WINDOW = 5;
const hits = new Map<string, number[]>();

function rateLimited(ip: string) {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((time) => now - time < WINDOW_MS);
  recent.push(now);
  hits.set(ip, recent);
  return recent.length > MAX_PER_WINDOW;
}

async function verifyRecaptcha(token: unknown, ip: string) {
  const secret = process.env.RECAPTCHA_SECRET_KEY;
  if (!secret) return true; // reCAPTCHA não configurado (ex.: desenvolvimento local)
  if (typeof token !== "string" || !token) return false;

  const body = new URLSearchParams({ secret, response: token });
  if (ip !== "local") body.set("remoteip", ip);
  const response = await fetch("https://www.google.com/recaptcha/api/siteverify", { method: "POST", body }).catch(
    () => null
  );
  if (!response?.ok) return false;
  const result = (await response.json()) as { success?: boolean; score?: number; action?: string };
  return result.success === true && result.action === RECAPTCHA_ACTION && (result.score ?? 0) >= RECAPTCHA_MIN_SCORE;
}

async function sendWhatsApp(text: string) {
  const apikey = process.env.CALLMEBOT_APIKEY;
  if (!apikey) return null;
  const phone = process.env.WHATSAPP_PHONE || profile.whatsapp;
  const url = `https://api.callmebot.com/whatsapp.php?${new URLSearchParams({ phone, text, apikey })}`;
  const response = await fetch(url).catch(() => null);
  return !!response?.ok;
}

async function sendEmail(text: string, replyTo: string, name: string) {
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO;
  if (!apiKey || !to) return null;
  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from: process.env.CONTACT_FROM || "Portfólio <onboarding@resend.dev>",
      to: [to],
      reply_to: replyTo,
      subject: `Portfólio — mensagem de ${name}`,
      text,
    }),
  }).catch(() => null);
  return !!response?.ok;
}

export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "invalid" }, { status: 400 });
  }

  // Honeypot: campo invisível que só robôs preenchem — finge sucesso
  if (typeof body.website === "string" && body.website.trim()) return NextResponse.json({ ok: true });

  const { data, fields } = validateContact(body);
  if (!data) return NextResponse.json({ error: "invalid", fields }, { status: 400 });

  const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "local";
  if (rateLimited(ip)) return NextResponse.json({ error: "rate_limited" }, { status: 429 });
  if (!(await verifyRecaptcha(body.token, ip))) return NextResponse.json({ error: "captcha" }, { status: 403 });

  // A mensagem chega para o Thiago sempre em português
  const text = formatContactMessage(data, dictionaries.pt.contact.form, "Nova mensagem pelo portfólio");
  const results = await Promise.all([sendWhatsApp(text), sendEmail(text, data.email, data.name)]);
  const configured = results.filter((sent) => sent !== null);

  if (configured.length === 0) return NextResponse.json({ error: "unavailable" }, { status: 503 });
  if (!configured.some(Boolean)) return NextResponse.json({ error: "send_failed" }, { status: 502 });
  return NextResponse.json({ ok: true });
}
