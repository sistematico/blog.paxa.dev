# 🐪 Paxá Blog

[![Deploy](https://github.com/sistematico/blog.paxa.dev/actions/workflows/deploy.yml/badge.svg)](https://github.com/sistematico/blog.paxa.dev/actions/workflows/deploy.yml)

Meu blog, ~baseado no tema [Astro Yi](https://github.com/cirry/astro-yi) usando o [Astro](https://astro.build)~, feito usando o [Astro](https://astro.build) e [Tailwind CSS](https://tailwindcss.com).

### 🌎 Demo

- [Blog](https://blog.paxa.dev)

#### 🚀 Instalação e desenvolvimento usando o Bun

Para a instalação é recomendado o uso do `bun >= 1.1.27` ou `nodejs >= 18`，`pnpm >= 8`.

```bash
git clone https://github.com/sistematico/blog.paxa.dev.git
cd blog.paxa.dev
bun install  # instala as dependências
bun run dev # inicia uma cópia de desenvolvimento em localhost:4321
```

```bash
bun run build # constrói um build de produção em ./dist
```
After the packaging is completed, Upload the `dist` folder to the web server directory.

## 🔥 Configuração

No arquivo `src/const.ts`, você pode modificar o site de acordo com suas necessidades.

```ts
export const site = {
  title: 'Paxá Blog',
  description: 'Meu blog pessoal',
}
```

## 📰 Referências

- [https://bun.sh/guides/install/workspaces](https://bun.sh/guides/install/workspaces)
- [https://bun.sh/docs/cli/install#workspaces](https://bun.sh/docs/cli/install#workspaces)
- [https://bun.sh/docs/install/workspaces](https://bun.sh/docs/install/workspaces)
- [https://github.com/colinhacks/bun-workspaces](https://github.com/colinhacks/bun-workspaces)
- [https://docs.npmjs.com/cli/v10/using-npm/workspaces](https://docs.npmjs.com/cli/v10/using-npm/workspaces)

## 🕐 Alterações

- `2024/10/28` - Re-escrita completa do Blog, Astro `v4.16.7`, tema próprio(usando a paleta de cores "Sonokai").

## ⭐ Créditos

Este projeto foi criado usando o `bun init` no bun `v1.1.33`.
[Bun](https://bun.sh) é um runtime JavaScript "tudo-em-um" extremamente rápido.

Sem a ajuda destas linguagens/ferramentas/frameworks/pessoas nada disso seria possível:

- [Astro](https://astro.build)
- [TypeScript](https://typescriptlang.org)
- [Bun](https://bun.sh)

### 👏 Ajude

Se o meu trabalho foi útil de qualquer maneira, considere doar qualquer valor através do das seguintes plataformas:

[![LiberaPay](https://img.shields.io/badge/LiberaPay-gray?logo=liberapay&logoColor=white&style=flat-square)](https://liberapay.com/sistematico/donate) [![PagSeguro](https://img.shields.io/badge/PagSeguro-gray?logo=pagseguro&logoColor=white&style=flat-square)](https://pag.ae/bfxkQW) [![ko-fi](https://img.shields.io/badge/ko--fi-gray?logo=ko-fi&logoColor=white&style=flat-square)](https://ko-fi.com/K3K32RES9)
[![Buy Me a Coffee](https://img.shields.io/badge/Buy_Me_a_Coffee-gray?logo=buy-me-a-coffee&logoColor=white&style=flat-square)](https://www.buymeacoffee.com/sistematico) [![Open Collective](https://img.shields.io/badge/Open_Collective-gray?logo=opencollective&logoColor=white&style=flat-square)](https://opencollective.com/sistematico)
[![Patreon](https://img.shields.io/badge/Patreon-gray?logo=patreon&logoColor=white&style=flat-square)](https://patreon.com/sistematico)

[![GitHub Sponsors](https://img.shields.io/github/sponsors/sistematico?label=Github%20Sponsors)](https://github.com/sponsors/sistematico)