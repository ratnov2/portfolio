import { Montserrat } from '@next/font/google'
import type { AppProps } from 'next/app'

import '@/assets/styles/globals.scss'

import Footer from '@/screens/footer/Footer'

const montserrat = {
	subsets: ['latin'],
	variable: ['--font-mont']
}

export default function App({ Component, pageProps }: AppProps) {
	return (
		<div className={`${montserrat.variable} font-mont`}>
			<Component {...pageProps} className='' />
			<Footer />
		</div>
	)
}
