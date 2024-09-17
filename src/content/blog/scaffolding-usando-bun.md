---
title: "Scaffolding de um projeto usando o Bun"
description: "Como criar, configurar e rodar um projeto com o Vue.js, Vite e TypeScript usando o Bun no Linux"
date: 2024-09-17
category: "bun"
tags: ["bun", "vue", "vite", "typescript"]
draft: false
---

## Especificações

| Sistema Operacional | [Arch Linux](https://archlinux.org) |
| :--- | ---: |
| Gerenciador de Janelas | [dwm](https://dwm.suckless.org) |
| JavaScript Runtime | [Bun](https://bun.sh) |
| Framework | [Astro](https://astro.build) |
| Linguagem de Programação | [TypeScript](https://www.typescriptlang.org) |

## Criando o projeto

```bash
cd ~ # ou cd
mkdir projetos
cd projetos
bun create vite meu-app-vue --template vue-ts
cd meu-app-vue
```

> Você precisa ter o [Bun](https://bun.sh) instalado.

## Configuração do projeto

```json title="package.json" del={2} ins={3} {7}
"scripts": {
  "dev": "vite",
  "dev": "bunx --bun vite",
  "build": "vite build",
  "serve": "vite preview"
},
// ...
```

## Servidor de desenvolvimento

```bash
bun run dev # ou bun dev
```

## Referências
- https://bun.sh/guides/ecosystem/vite
- https://vitejs.dev/guide/#scaffolding-your-first-vite-project

## Dúvidas e sugestões

Se tiver alguma dúvida ou sugestão, sinta-se livre para comentar o post ou <a href="mailto:paxa@paxa.dev">entrar em contato</a>.
