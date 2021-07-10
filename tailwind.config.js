const colors = require('tailwindcss/colors');

module.exports = {
	mode: 'jit',
	purge: [
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
	],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			outline: {
				one: ['2px solid #4caf50', '0px'],
			},
			backgroundImage: (theme) => ({
				find: 'url("/images/bg-find.png")',
			}),
			textColor: {
				success: '#43a047',
			},
		},
		screens: {
			xs: '0px',
			sm: '640px',
			md: '768px',
			lg: '1024px',
			xl: '1280px',
			'2xl': '1536px',
		},
		backgroundColor: (theme) => ({
			warn: colors.red[600],
			primary: '#ff581a',
			light: '#484848',
			second: '#66bb6a',
			slite: '#98ee99',
			bar: '#212121',
			blite: '#262626',
			foot: '#484848',
			paper: '#f2f1e8',
			white: '#ffffff',
			black: '#000',
			success: '#43a047',
			back: colors.gray[300],
		}),
	},
	plugins: [
		require('@tailwindcss/typography'),
		require('@tailwindcss/forms'),
	],
};
