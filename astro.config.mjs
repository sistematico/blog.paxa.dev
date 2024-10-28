// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

import mdx from '@astrojs/mdx';

import expressiveCode from 'astro-expressive-code';

// https://astro.build/config
export default defineConfig({
  site: import.meta.env.PROD ? 'https://blog.paxa.dev' : 'http://localhost:4321',
  integrations: [tailwind({
    applyBaseStyles: false
  }), mdx(), expressiveCode()],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          api: 'modern-compiler' // or "modern", "legacy"
        }
      }
    }
  }
});