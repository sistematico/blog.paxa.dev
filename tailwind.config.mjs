/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
        nunito: '"Nunito", system-ui, sans-serif'
      },
			colors: {
				monokai: {
					dark: '#272822',
					foreground: '#f8f8f2',
					background: '#49483e',
					comment: '#75715e',
					yellow: '#e6db74',
					orange: '#fd971f',
					red: '#f92672',
					magenta: '#ae81ff',
					blue: '#66d9ef',
					cyan: '#a1efe4',
					green: '#a6e22e'
				}
			}
		}
	},
	plugins: [],
}