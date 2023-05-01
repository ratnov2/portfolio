import { FC, PropsWithChildren } from 'react'

import TransitionEffect from '@/hooks/transitionEffect'

import styles from './Layout.module.scss'
import Meta from './meta/Meta'
import { ISeo } from './meta/meta.interface'
import Sidebar from './sidebar/Sidebar'

interface ILayout extends ISeo {}

const Layout: FC<PropsWithChildren<ILayout>> = ({ children, ...rest }) => {
	return (
		<>
			<TransitionEffect />
			<Meta {...rest} />

			<div className={`${styles.layout} `}>
				<Sidebar />
				<main>
					<section className={`${styles.content}`}>
						{children}
					</section>
				</main>
			</div>
		</>
	)
}

export default Layout
