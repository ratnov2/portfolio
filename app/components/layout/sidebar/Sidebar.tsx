import { motion } from 'framer-motion'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { FC, useState } from 'react'

import {
	DribbbleIcon,
	GithubIcon,
	LinkedInIcon,
	MoonIcon,
	PinterestIcon,
	SunIcon,
	TwitterIcon
} from '@/ui/icons/Icons'
import Logo from '@/ui/logo/Logo'

import useThemeSwitcher from '@/hooks/useThemeSwitcher'

import styles from './Sidebar.module.scss'
import { SidebarDataLink } from './sidebar.data'

const CustomLink = ({ title, link, className, active }: any) => {
	return (
		<Link href={link} className={`${className} relative group`}>
			{title}
			<span
				className={`w-0 h-[1px] bg-dark inline-block absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] easy duration-300 dark:bg-light ${
					active && 'w-full'
				}`}
			></span>
		</Link>
	)
}

export const CustomMobileLink = ({ title, link, className, active }: any) => {
	return (
		<Link href={link} className={`${className} relative group`}>
			{title}
			<span
				className={`w-0 h-[1px] bg-light inline-block absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] easy duration-300 dark:bg-dark ${
					active && 'w-full'
				}`}
			></span>
		</Link>
	)
}

const Sidebar: FC = () => {
	const router = useRouter()
	const { mode, setMode } = useThemeSwitcher()
	const [isOpen, setIsOpen] = useState(false)

	return (
		<aside className={styles.sidebar}>
			<button
				className='flex-col justify-center hidden lg:flex items-center py-2'
				onClick={() => setIsOpen(!isOpen)}
			>
				<span
					className={`bg-dark dark:bg-light translation-all duration-300 ease-in-out block h-0.5 w-6 rounded-sm -translate-0.5 ${
						isOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'
					}`}
				></span>
				<span
					className={`bg-dark dark:bg-light translation-all duration-300 ease-in-out block h-0.5 w-6 rounded-sm my-0.5 ${
						isOpen ? 'opacity-0' : 'opacity-100'
					}`}
				></span>
				<span
					className={`bg-dark dark:bg-light translation-all duration-300 ease-in-out block h-0.5 w-6 rounded-sm translate-0.5 ${
						isOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'
					}`}
				></span>
			</button>
			<div className='lg:hidden flex justify-between w-full items-center'>
				<ul>
					{SidebarDataLink.map(({ link, title, key }: any) => (
						<li className='dark:text-light'>
							<CustomLink
								title={title}
								link={link}
								className={key === 0 ? 'mr-5' : 'mx-5'}
								active={router.pathname === link}
							/>
						</li>
					))}
				</ul>
				<ul>
					<motion.a
						href={'/'}
						whileHover={{ y: -2 }}
						className='w-6 mr-3'
					>
						<TwitterIcon />
					</motion.a>
					<motion.a
						href={'https://github.com/ratnov2'}
						whileHover={{ y: -2 }}
						className='w-6 mx-3 dark:text-light'
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
					<button
						onClick={() =>
							setMode(mode === 'light' ? 'dark' : 'light')
						}
						className={`ml-3 flex items-center justify-center rounded-full p-1 w-10 ${
							mode === 'light'
								? 'bg-dark text-light'
								: 'bg-light text-dark'
						}`}
					>
						{mode === 'dark' ? (
							<SunIcon className='fill-dark' />
						) : (
							<MoonIcon className='fill-dark' />
						)}
					</button>
				</ul>
			</div>
			{isOpen && (
				<motion.div
					className='min-w-[70vw] flex flex-col justify between z-30 items-center fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
			bg-dark/90 dark:bg-light/75 rounded-lg backdrop-blur-md py-32
			'
			initial={{scale:0,opacity:0,x:'-50%',y:'-50%'}}
			animate={{scale:1,opacity:1}}
				>
					<ul className='flex items-center flex-col justify-center mb-10'>
						{SidebarDataLink.map(({ link, title, key }: any) => (
							<li className='text-light mb-3 dark:text-dark'>
								<CustomMobileLink
									title={title}
									link={link}
									className={`${key === 0 ? 'mr-5' : 'mx-5'}`}
									active={router.pathname === link}
									onClick={() => setIsOpen(isOpen)}
								/>
							</li>
						))}
					</ul>
					<ul className='mx-10 flex-wrap justify-center'>
						<motion.a
							href={'/'}
							whileHover={{ y: -2 }}
							className='w-6 mr-3 sm:mx-1'
						>
							<TwitterIcon />
						</motion.a>
						<motion.a
							href={'/'}
							whileHover={{ y: -2 }}
							className='w-6 mx-3 text-light dark:text-dark sm:mx-1'
						>
							<GithubIcon />
						</motion.a>
						<motion.a
							href={'/'}
							whileHover={{ y: -2 }}
							className='w-6 mx-3 sm:mx-1'
						>
							<LinkedInIcon />
						</motion.a>
						<motion.a
							href={'/'}
							whileHover={{ y: -2 }}
							className='w-6 mx-3 sm:mx-1'
						>
							<PinterestIcon />
						</motion.a>
						<motion.a
							href={'/'}
							whileHover={{ y: -2 }}
							className='w-6 ml-3 sm:mx-1'
						>
							<DribbbleIcon />
						</motion.a>
						<button
							onClick={() =>
								setMode(mode === 'light' ? 'dark' : 'light')
							}
							className={`ml-3 flex items-center justify-center rounded-full p-1 w-10 sm:mx-1 ${
								mode === 'light'
									? 'bg-dark text-light'
									: 'bg-light text-dark'
							}`}
						>
							{mode === 'dark' ? (
								<SunIcon className='fill-dark  w-[40px] h-[30px]' />
							) : (
								<MoonIcon className='fill-dark sm:mx-1 w-[40px] h-[30px]' />
							)}
						</button>
					</ul>
				</motion.div>
			)}
			<div className='absolute left-1/2 -translate-x-1/2'>
				<Logo />
			</div>
		</aside>
	)
}

export default Sidebar
