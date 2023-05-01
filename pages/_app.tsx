import { Montserrat } from '@next/font/google'
import { AnimatePresence } from 'framer-motion'
import type { AppProps } from 'next/app'

import '@/assets/styles/globals.scss'

import Footer from '@/screens/footer/Footer'
import { useRouter } from 'next/router'
import TransitionEffect from '@/hooks/transitionEffect'

const montserrat = {
	subsets: ['latin'],
	variable: ['--font-mont']
}

export default function App({ Component, pageProps }: AppProps) {
	const router = useRouter()
	return (
		<div
			className={`${montserrat.variable} font-mont dark:bg-dark z-0 relative`}
		>
			<AnimatePresence mode='popLayout'>
			
				<Component key={router.asPath} {...pageProps} className='' />

			</AnimatePresence>
			<Footer />
		</div>
	)
}
