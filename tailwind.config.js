/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
const { fontFamily } = require('tailwindcss/defaultTheme')

const constants = {
	dark: '#1b1b1b',
	light: '#f5f5f5',
	primary: '#B63E96', // 240,86,199
	primaryDark: '#58E6D9' // 80,230,217
}

module.exports = {
	content: ['./pages/**/*.{js,ts,jsx,tsx}', './app/**/*.{js,ts,jsx,tsx}'],
	darkMode: 'class',
	theme: {
		colors: {
			transparent: colors.transparent,
			...constants
		},
		extend: {
			aspectRatio: {
				'16/9': '16 / 9',
				'1:1': '1 / 1'
			},
			fontSize: {
				xs: '0.82rem',
				sm: '0.98rem',
				base: '1.15rem',
				lg: '1.22rem',
				xl: '1.36rem',
				'1.5xl': '1.5rem',
				'2xl': '1.725rem',
				'3xl': '2.155rem',
				'4xl': '2.58rem',
				'5xl': '3.45rem',
				'6xl': '4.3rem',
				'7xl': '5.17rem',
				'8xl': '6.9rem',
				'9xl': '9.2rem'
			},
			fontFamily: {
				mont: ['var(--font-mont)', ...fontFamily.sans]
			},
			animation: {
				'spin-slow': 'spin 8s linear infinite'
			},
			backgroundImage: {
				circularLight:
					'repeating-radial-gradient(rgba(0,0,0,0.4) 2px, #f5f5f5 5px, #f5f5f5 100px)',
				circularDark:
					'repeating-radial-gradient(rgba(255,255,255,0.4) 2px, #1b1b1b 5px, #1b1b1b 100px)',
				circularLightLg:
					'repeating-radial-gradient(rgba(0,0,0,0.4) 2px,#f5f5f5 5px,#f5f5f5 80px)',

				circularDarkLg:
					'repeating-radial-gradient(rgba(255,255,255,0.5) 2px,#1b1b1b 8px,#1b1b1b 80px)',

				circularLightMd:
					'repeating-radial-gradient(rgba(0,0,0,0.4) 2px,#f5f5f5 5px,#f5f5f5 60px)',

				circularDarkMd:
					'repeating-radial-gradient(rgba(255,255,255,0.5) 2px,#1b1b1b 8px,#1b1b1b 60px)',

				circularLightSm:
					'repeating-radial-gradient(rgba(0,0,0,0.4) 2px,#f5f5f5 5px,#f5f5f5 40px)',

				circularDarkSm:
					'repeating-radial-gradient(rgba(255,255,255,0.5) 2px,#1b1b1b 8px,#1b1b1b 40px)'
			}
		},
		screens: {
			'2xl': { max: '1535px' },
			// => @media (max-width: 1535px) { ... }

			xl: { max: '1279px' },
			// => @media (max-width: 1279px) { ... }

			lg: { max: '1023px' },
			// => @media (max-width: 1023px) { ... }

			md: { max: '767px' },
			// => @media (max-width: 767px) { ... }

			sm: { max: '639px' },
			// => @media (max-width: 639px) { ... }

			xs: { max: '479px' }
			// => @media (max-width: 479px) { ... }
		}
	},
	plugins: []
}
