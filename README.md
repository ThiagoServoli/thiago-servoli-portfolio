# Portfólio — Thiago Servoli da Silva (v2 — Neon Edition)

Portfólio pessoal com identidade visual neon (verde + roxo), fortemente animada,
construído com Next.js 14 (App Router), TypeScript, Tailwind CSS, GSAP e react-icons.

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

## O que mudou na v2

- **Identidade visual completamente nova**: fundo quase preto com "orbs" neon
  (verde, roxo, ciano) que flutuam continuamente e reagem ao scroll (parallax).
- **Barra de progresso neon** fixa no topo — feedback visual imediato de que a
  rolagem está sendo respondida.
- **Animações de entrada confiáveis**: todo o conteúdo usa o componente
  `src/components/Reveal.tsx`, baseado em `IntersectionObserver` puro (sem
  depender de configuração fina de scroll-trigger), garantindo que os elementos
  sempre apareçam de forma visível ao rolar a página.
- **Logos reais das tecnologias** (React, Next.js, TypeScript, Node.js, Python,
  PostgreSQL, Docker, Git etc.) via `react-icons/si`, com efeito de inclinação 3D
  ao passar o mouse.
- **Identidade visual real dos dois projetos** (PugliSystems e Cogni) aplicada
  nos cards e nas páginas de case study — logos em `public/images/brands/`.
- **Tipografia maior e com mais contraste**: fonte base de 18px, textos em
  branco/quase-branco em vez de cinzas apagados.
- **Cursor customizado neon** (núcleo verde + anel roxo com glow).

## Estrutura

```
src/
  app/            # Rotas (App Router), layout, metadata, sitemap, robots
  components/     # Reveal, AnimatedBackground, ScrollProgressBar, Navbar, Footer, cursor...
  sections/       # Seções da home (Hero, Stack, Projetos, Trajetória...)
  data/           # Fonte única de verdade: perfil, tecnologias, projetos, formação
  hooks/          # Hooks customizados (prefers-reduced-motion)
  lib/            # GSAP setup, utilitários
public/
  images/
    profile.jpg            # Sua foto (já aplicada)
    brands/                 # Logos reais do PugliSystems e do Cogni (fornecidos por você)
    projects/                # Screenshots dos projetos (placeholders — substitua)
```

## Próximos passos / pendências

1. **Conteúdo dos projetos**: `src/data/projects.ts` tem placeholders (`[DESCRIÇÃO...]`) para
   descrição, problema, contribuição e tecnologias do PugliSystems e do Cogni — os links e
   os logos já estão corretos, mas os detalhes textuais precisam ser preenchidos por você.
2. **Screenshots reais**: substitua `public/images/projects/project-01.webp` e `project-02.webp`
   pelas capturas de tela reais dos projetos.
3. **Domínio**: defina `NEXT_PUBLIC_SITE_URL` no `.env` (copie de `.env.example`) com o
   domínio final antes de gerar o sitemap/OG de produção.
4. **Deploy**: pronto para Vercel, Netlify ou qualquer host Node.js — ver seção "Deploy" abaixo.

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
