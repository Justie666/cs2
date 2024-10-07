/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				bgColor: '#2C2C2C',
				primary: '#C9A86B'
			},
			container: {
				center: true
			},
			boxShadow: {
				'inset-custom': '3px 3px 27.6px 0px #000000CC inset',
				'custom-large': '73px 49px 25px 0px #00000000'
			},
			rounded: {
				xl: 50
			},
			backdropBlur: {
				'20': '20px'
			},
			backgroundImage: {
				'custom-radial': 'radial-gradient(50% 50% at 50% 50%, #FFFFFF 0%, #C9A86B 100%)',
			},
		}
	},
	plugins: []
}
