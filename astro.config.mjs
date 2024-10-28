// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';
import expressiveCode from 'astro-expressive-code';

const isProd = import.meta.env.PROD;

// https://astro.build/config
export default defineConfig({
  site: isProd ? 'https://blog.paxa.dev' : 'http://localhost:4321',
  integrations: [tailwind({
    applyBaseStyles: false
  }), expressiveCode(), mdx()],
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