import defaultTheme from 'tailwindcss/defaultTheme'
/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		colors: {
			'azul': '#014979',
			'azul6': '#D6EDFF',
			'blanco': '#F6F4F3',
		},
		extend: {
			fontFamily: {
        sans: ['"Inter Variable"', ...defaultTheme.fontFamily.sans],
				serif: ['inika',...defaultTheme.fontFamily.serif],
				formula: ['Formula']
      },
			colors: {
				'azul': '#014979',
				'azul6': '#D6EDFF',
				'blanco': '#F6F4F3',
			},
		},
	},
	plugins: [],
}
