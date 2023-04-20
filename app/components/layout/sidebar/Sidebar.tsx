import { motion } from 'framer-motion'
import Link from 'next/link'
import { FC } from 'react'

import {
	DribbbleIcon,
	GithubIcon,
	LinkedInIcon,
	PinterestIcon,
	TwitterIcon
} from '@/ui/icons/Icons'
import Logo from '@/ui/logo/Logo'

import styles from './Sidebar.module.scss'
import { SidebarDataLink } from './sidebar.data'

const CustomLink = ({ title, link, className }: any) => {
	return (
		<Link href={link} className={`${className} relative group`}>
			{title}
			<span className='w-0 h-[1px] bg-dark inline-block absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] easy duration-300'></span>
		</Link>
	)
}

const Sidebar: FC = () => {
	return (
		<aside className={styles.sidebar}>
			<ul>
				{SidebarDataLink.map(({ link, title, key }: any) => (
					<li>
						<CustomLink
							title={title}
							link={link}
							className={key === 0 ? 'mr-5' : 'mx-5'}
						/>
					</li>
				))}
			</ul>
			<div className='absolute left-1/2 -translate-x-1/2'>
				<Logo />
			</div>
			<ul>
				<motion.a
					href={'/'}
					whileHover={{ y: -2 }}
					className='w-6 mr-3'
				>
					<TwitterIcon />
				</motion.a>
				<motion.a
					href={'/'}
					whileHover={{ y: -2 }}
					className='w-6 mx-3'
				>
					<GithubIcon />
				</motion.a>
				<motion.a
					href={'/'}
					whileHover={{ y: -2 }}
					className='w-6 mx-3'
				>
					<LinkedInIcon />
				</motion.a>
				<motion.a
					href={'/'}
					whileHover={{ y: -2 }}
					className='w-6 mx-3'
				>
					<PinterestIcon />
				</motion.a>
				<motion.a
					href={'/'}
					whileHover={{ y: -2 }}
					className='w-6 ml-3'
				>
					<DribbbleIcon />
				</motion.a>
			</ul>
		</aside>
	)
}

export default Sidebar
