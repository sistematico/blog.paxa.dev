// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';
import m2dx from 'astro-m2dx';
import expressiveCode from 'astro-expressive-code';
import remarkDirective from 'remark-directive';

const site = import.meta.env.PROD ? 'https://blog.paxa.dev' : 'http://localhost:4321';

/** @type {import('astro-m2dx').Options} */
const m2dxOptions = {
  relativeImages: true,
  styleDirectives: true
};

// https://astro.build/config
export default defineConfig({
  site,
  integrations: [
    tailwind({ applyBaseStyles: false }), 
    expressiveCode(), 
    mdx()
  ],
  markdown: {
    remarkPlugins: [
      remarkDirective,
      [m2dx, m2dxOptions]
    ],
    extendDefaultPlugins: true
  },
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