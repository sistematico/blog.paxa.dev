import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';
import expressiveCode from 'astro-expressive-code';
import remarkDirective from 'remark-directive';

const site = import.meta.env.PROD ? 'https://blog.paxa.dev' : 'http://localhost:4321';

export default defineConfig({
  site,
  integrations: [
    tailwind({ applyBaseStyles: false }), 
    expressiveCode(), 
    mdx()
  ],
  markdown: {
    remarkPlugins: [remarkDirective]
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          api: 'modern-compiler'
        }
      }
    }
  }
});