/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: 'class',
	theme: {
		extend: {
			backgroundColor: {
				'aguara-50': '#fff7ed',
				'aguara-100': '#ffedd4',
				'aguara-200': '#ffd8a9',
				'aguara-300': '#ffbb72',
				'aguara-400': '#fe9237',
				'aguara-500': '#fd7412',
				'aguara-600': '#ed5909',
				'aguara-700': '#c54109',
				'aguara-800': '#9c3410',
				'aguara-900': '#7e2d10',
				'aguara-950': '#441306',
			}
		},
	},
	plugins: [],
}
