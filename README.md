# Velasco — Sites sob medida (versão React)

Migração do site (antes HTML/CSS/JS puro) pra **React + Vite + Tailwind CSS + Framer Motion**.

## Rodando localmente

Precisa ter [Node.js](https://nodejs.org) instalado (versão 18+).

```bash
npm install
npm run dev
```

Abre em `http://localhost:5173`.

## Build de produção

```bash
npm run build
```

Gera a pasta `dist/` — é isso que vai pro ar.

## Deploy no Vercel

1. Suba **todo o conteúdo desta pasta** pro repositório `Daviisk/Velascosites` no GitHub (substitui o `index.html` antigo e os arquivos que já tinha).
2. No painel do Vercel, o `vercel.json` já está configurado com `framework: vite`, então o próprio Vercel roda `npm install` e `npm run build` sozinho.
3. Confirma nas configurações do projeto no Vercel que o **Framework Preset** está em "Vite" (geralmente detecta automático).

## O que mudou em relação à versão anterior

- Todas as animações que eram feitas com **GSAP** agora usam **Framer Motion** (padrão React).
- O fundo animado do hero (rede de pontos dourada) continua sendo **VANTA.NET + three.js**, agora importado via npm em vez de CDN.
- **Modo claro/escuro** — botão no canto superior direito, com a preferência salva no navegador (localStorage).
- **Seção de estatísticas** nova, com números reais sobre o negócio (sem inventar dados).
- **Formulário de contato** funcional — valida os campos e abre o WhatsApp com a mensagem já pronta pra enviar.
- Todo o SEO que já estava configurado (Open Graph, dados estruturados, `robots.txt`, `sitemap.xml`, `google-site-verification`) foi mantido, agora dentro do `index.html` da raiz do projeto Vite.

## Pendências que são só suas

- **Depoimentos** (seção "Código bem escrito. Site que funciona.") ainda são ilustrativos — tem um comentário no código (`src/data/content.js`) marcando isso. Troque pelos relatos reais dos seus 3 clientes antes de divulgar o site pra valer.
- Se o domínio mudar de `velascosites.vercel.app`, atualiza as URLs em `index.html` (Open Graph, canonical, JSON-LD) e em `public/sitemap.xml`.

