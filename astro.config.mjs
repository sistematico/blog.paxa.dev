import { defineConfig } from 'astro/config'
import mdx from '@astrojs/mdx'
import sitemap from '@astrojs/sitemap'
import astroExpressiveCode from 'astro-expressive-code'
import { pluginLineNumbers } from '@expressive-code/plugin-line-numbers'
import { pluginCollapsibleSections } from '@expressive-code/plugin-collapsible-sections'

const options = {
  plugins: [pluginCollapsibleSections(), pluginLineNumbers()],
  themes: ['rose-pine-moon', 'github-light'],
  styleOverrides: {
    // borderWidth: '0px',
    // borderRadius: '0.5rem',
    frames: {
      shadowColor: '#124'
    }
  }
}

// https://astro.build/config
export default defineConfig({
  site: 'https://blog.paxa.dev',
  outDir: 'public',
  publicDir: 'static',
  integrations: [astroExpressiveCode(options), mdx(), sitemap()]
})



