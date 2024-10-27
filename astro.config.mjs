// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: import.meta.env.PROD ? 'https://blog.paxa.dev' : 'http://localhost:4321',
  integrations: [
    tailwind({
      applyBaseStyles: false
    })
  ],
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