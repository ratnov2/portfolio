import { FC, PropsWithChildren } from 'react'

import styles from './Layout.module.scss'
import Meta from './meta/Meta'
import { ISeo } from './meta/meta.interface'
import Sidebar from './sidebar/Sidebar'
import TransitionEffect from '@/hooks/transitionEffect'

interface ILayout extends ISeo {}

const Layout: FC<PropsWithChildren<ILayout>> = ({ children, ...rest }) => {
	return (
		<>
			<Meta {...rest} />
			<TransitionEffect />
			<div className={`${styles.layout} `} >
				<Sidebar />
				<main>
					<section className={`${styles.content}`}>{children}</section>
				</main>
			</div>
		</>
	)
}

export default Layout
