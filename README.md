# Portfólio — Thiago Servoli da Silva (v3)

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

## O que mudou na v3

- **Identidade visual**: fundo branco-azulado com azul institucional `#111184`, tipografia
  Manrope e tema escuro opcional em azul-marinho. Todas as cores vêm de variáveis CSS em
  `src/app/globals.css`, então os dois temas ficam consistentes (preferência salva em `theme-v2`).
- **Avatar 3D** (`src/components/Avatar3D.tsx`): a foto em camadas com profundidade real
  (`preserve-3d`) que gira e se afasta conforme a rolagem e inclina seguindo o mouse; um
  mini-avatar aparece na navbar quando o hero sai da tela.
- **Navegação e rolagem**: barra de progresso, link ativo na navbar, navegação lateral por
  seções (desktop), botão de voltar ao topo, faixa animada de tecnologias, contadores,
  timeline que se preenche com a rolagem e reveals direcionais.
- **Stack** com os logos nas cores oficiais (`src/components/TechIcon.tsx`) e **bandeiras**
  reais no seletor de idioma (PNGs de 1–3 KB em `public/images/flags/`).
- **Projetos** em moldura de navegador na proporção real da captura (sem recorte/ampliação).
- **Performance**: todas as animações usam só `transform`/`opacity`; os loops de animação
  rodam apenas enquanto há movimento, e os fundos decorativos são estáticos. Sem GSAP,
  sem blur animado, sem overlay de ruído, sem cursor customizado.

## Estrutura

```
src/
  app/            # Rotas (App Router), layout, metadata, sitemap, robots
  components/     # Avatar3D, Reveal, ScrollProgress, SectionNav, TechMarquee, Navbar...
  sections/       # Seções da home (Hero, Stack, Projetos, Trajetória...)
  data/           # Fonte única de verdade: perfil, tecnologias, projetos, formação
  hooks/          # useActiveSection, useReducedMotion
  lib/            # Utilitários e chave do tema
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
