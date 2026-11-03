# Portfólio — Thiago Servoli da Silva (v5)

Portfólio pessoal com identidade sóbria e profissional: fundo branco, azul
institucional `#111184` e tema escuro opcional em azul-marinho. Construído com
Next.js 14 (App Router), TypeScript e Tailwind CSS.

## Como rodar localmente

```bash
npm install
npm run dev
```

Abra http://localhost:3000

## Build de produção

```bash
npm run build
npm run start
```

## O que mudou na v5

- **Idiomas com URL própria**: português na raiz (`/`, `/projects/x`), inglês em `/en` e espanhol
  em `/es`, cada versão gerada de forma estática e com `hreflang`, canonical e sitemap por idioma.
  As rotas ficam em `src/app/[locale]`; o `src/middleware.ts` reescreve a raiz para `pt` e
  redireciona `/pt/...` para a versão sem prefixo. Utilitários em `src/i18n/routing.ts`.
- **Estudos de caso**: cada projeto tem contexto, desafio, solução, resultado e galeria com
  capturas reais (`public/images/projects/gallery`). O próprio portfólio entrou como projeto
  full stack. Textos em `translations.ts` (`projects.items`), dados em `src/data/projects.ts`.
- **Conteúdo**: Sobre, Hero e Trajetória reescritos a partir do currículo (inclui Araujo Abreu e
  as duas funções no Grupo In Press); números e stack atualizados (FastAPI, GitHub, Docker como
  "em estudo").
- **Formulário de contato** com back-end próprio (`src/app/api/contact/route.ts`): assunto,
  faixa de investimento (quando faz sentido), preferência de retorno, limites por campo,
  contador na mensagem, reCAPTCHA v3, honeypot e limite por IP. Regras compartilhadas entre
  navegador e servidor em `src/lib/contact.ts`. A mensagem chega no WhatsApp pessoal (CallMeBot)
  e, opcionalmente, por e-mail (Resend). Configure as variáveis abaixo.
- **Projetos**: a Click. (site feito do zero, sozinho) abre a lista, com estudo de caso e galeria.
- **Currículo em PDF** para baixar no Hero e no Contato (`public/cv`): português na versão `pt`,
  inglês nas versões `en` e `es`.
- **Página 404** traduzida (`src/app/[locale]/not-found.tsx`).
- **Imagens de compartilhamento** novas: uma por idioma e uma por projeto (`public/images/og`).
- **Fontes via `next/font/local`** (`src/lib/fonts.ts`): Manrope pré-carregada, fontes da Click.
  sob demanda. Contraste dos textos de apoio ajustado para o padrão AA.
- **Lighthouse** (build de produção local): acessibilidade, boas práticas e SEO em 100 em todas
  as páginas testadas; performance 99 no desktop e 85–87 no mobile (medido com throttling real).

## Formulário de contato

Defina na Vercel (Settings → Environment Variables) ou no `.env.local` (modelo em `.env.example`):

1. **reCAPTCHA v3**: em https://www.google.com/recaptcha/admin crie um site do tipo **v3** com os
   domínios `thiagoservoli.vercel.app` e `localhost`, e preencha `NEXT_PUBLIC_RECAPTCHA_SITE_KEY`
   e `RECAPTCHA_SECRET_KEY`. O script só carrega quando o formulário se aproxima da tela; o
   servidor confere ação e pontuação (mínimo 0,5).
2. **WhatsApp pessoal** (CallMeBot, gratuito): siga
   https://www.callmebot.com/blog/free-api-whatsapp-messages/ — adicione o número do bot aos
   contatos, envie "I allow callmebot to send me messages" e preencha `CALLMEBOT_APIKEY` com a
   chave recebida. O número que recebe vem de `WHATSAPP_PHONE` (padrão: `profile.whatsapp`).
3. **E-mail (opcional)**: `RESEND_API_KEY` e `CONTACT_TO` (e `CONTACT_FROM`, se tiver domínio
   verificado no Resend).

Sem nenhum canal configurado, o formulário avisa o visitante e oferece um botão que abre o
WhatsApp com a mensagem já preenchida.

## O que mudou na v4

- **Conceito editorial**: o portfólio é lido como um relatório executivo. Capítulos numerados
  (`src/data/chapters.ts` é a fonte da numeração), aberturas com fio que se desenha ao entrar na
  tela (`.rule-draw`), nome no hero revelado linha a linha (`.line-mask` + `animate-line-up`),
  sumário clicável no hero, legendas de figura nos projetos e um cabeço corrido com o capítulo
  atual (`ChapterIndicator`, telas ≥ 1440px). Substitui a linguagem de régua/cotas/coordenadas.
- **Click.** (`src/sections/ClickVenture.tsx`): seção da consultoria da qual sou Fundador e CEO,
  seguindo o manual de identidade v1.0 — carvão/creme/areia/laranja (`click.*` no Tailwind),
  Unbounded nos títulos, Geist no texto, ponto final laranja e a onda do clique (anéis em CSS,
  pausados fora da tela). O logo é a arte oficial convertida em máscara alfa
  (`public/images/brands/click-wordmark.png`, classe `.click-wordmark`): um arquivo para todas
  as versões de cor. Links e dados em `src/data/click.ts`.
- **Removidos**: foto, avatar ilustrado/flutuante, foto 3D, régua lateral e primitivas de
  desenho técnico.
- **Favicon**: monograma TS sem a cota (`icon.svg`, `favicon.ico`, `apple-icon.png`).
- **Performance**: animações só com `transform`/`opacity`, sem bibliotecas de animação. As fontes
  da Click. são self-hosted (`@fontsource`), compatíveis com o CSP.

## Estrutura

```
src/
  app/            # [locale]/ (páginas por idioma), api/contact, sitemap, robots, ícones
  middleware.ts   # Português na raiz, /en e /es com prefixo
  components/     # ChapterIndicator, SectionHeading, Reveal, TechMarquee...
  sections/       # Seções da home (Hero, Sobre, Click., Stack, Projetos, Trajetória...)
  data/           # Fonte única de verdade: perfil, capítulos, Click., tecnologias, projetos
  i18n/           # translations.ts (textos nos 3 idiomas) e routing.ts (URLs por idioma)
  hooks/          # useActiveSection, useReducedMotion
  lib/            # Utilitários e chave do tema
public/
  images/
    brands/       # Logos do PugliSystems, Cogni, Click. e Grupo In Press
    projects/     # Screenshots e galerias dos projetos
    og/           # Imagens de compartilhamento (por idioma e por projeto)
  cv/             # Currículo em PDF (pt e en)
```

## Próximos passos / pendências

1. **Formulário**: configurar reCAPTCHA e CallMeBot (ver acima).
2. **Recomendações**: falta o texto de 2–3 recomendações (LinkedIn) para criar a seção.
3. **Números do Sobre**: `profile.stats` em `src/data/profile.ts` é fixo; atualize "anos em
   tecnologia" (desde jul/2019) e "anos no Grupo In Press" (desde ago/2021) a cada aniversário.
4. **Domínio**: o padrão é `https://thiagoservoli.vercel.app`; se mudar, defina
   `NEXT_PUBLIC_SITE_URL`.

## Deploy rápido na Vercel

1. Crie um repositório no GitHub com esta pasta.
2. Crie uma conta em vercel.com e clique em "Add New Project".
3. Conecte o repositório — a Vercel detecta o Next.js automaticamente.
4. Clique em "Deploy". Em 1-2 minutos você tem uma URL pública com HTTPS.

## Notas de segurança

- Headers de segurança (CSP, X-Frame-Options, HSTS, Referrer-Policy, Permissions-Policy)
  configurados em `next.config.mjs`.
- Nenhuma credencial/segredo no código — `.env.example` documenta a única variável usada.
- `npm audit`: sem vulnerabilidades exploráveis em produção; o único alerta remanescente
  vem de uma dependência interna do próprio Next.js 14 (postcss embutido no bundler),
  que não afeta o runtime de um site estático como este.

## Correção importante (v2.1)

Foi identificado e corrigido um bug crítico: o header de segurança
Content-Security-Policy bloqueava `eval()`, mas o modo de desenvolvimento do
Next.js (`npm run dev`) depende de `eval()` para o Fast Refresh / HMR. Isso
fazia com que **todo o JavaScript do site falhasse silenciosamente no navegador**,
deixando qualquer conteúdo com animação de entrada permanentemente invisível.

A correção:
- O CSP agora libera `'unsafe-eval'` apenas quando `NODE_ENV !== 'production'`.
  Em produção (`npm run build && npm run start`, e no deploy da Vercel), o CSP
  continua estrito, sem `unsafe-eval`.
- Como camada extra de segurança, o componente `Reveal` agora começa **visível
  por padrão** e só assume o estado oculto/animado se a classe `js` for
  adicionada ao `<html>` (via um pequeno script síncrono no `<head>`, que não
  usa `eval`). Ou seja: mesmo que o JavaScript falhe por qualquer outro motivo
  no futuro, o conteúdo nunca mais fica invisível.
- Também havia um aviso do GSAP (`Invalid property scrollTrigger`) porque o
  plugin `ScrollTrigger` nunca era registrado — corrigido em `src/lib/gsap.ts`.

Também removida a cor roxa de toda a interface: a paleta agora é
grafite escuro + verde neon puro (mantendo apenas as cores oficiais reais
das marcas de tecnologia nos ícones da seção Stack).
