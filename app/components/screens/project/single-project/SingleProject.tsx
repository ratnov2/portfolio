import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

import { GithubIcon } from '@/ui/icons/Icons'

import { IProject } from '../project.interface'

import style from './SingleProject.module.scss'

const SingleProject: FC<IProject> = ({
	imgSrc,
	typeProject,
	name,
	linkProject,
	text,
	linkGit
}) => {
	return (
		<div
			className={`${style.single} relative flex w-full rounded-[2rem] border-2 border-dark p-10 bg-light dark:border-light dark:bg-dark dark-text-light`}
		>
			<div className='absolute left-0 -top-[1px] -right-3 -z-10 h-[103%] w-[101%] rounded-[2.5rem] bg-dark dark:bg-light' />
			<Link href={linkProject} className={style.img}>
				<Image src={imgSrc} alt='project' width={580} height={580} 
				priority
				sizes='(max-width:768px) 100vw,
				(max-width:1200px) 50vw,
				50vw'
				/>
			</Link>

			<div className={style.content}>
				<h4 className='text-xl font-medium text-primary dark:text-primaryDark'>
					{typeProject}
				</h4>
				<h3 className='my-1 text-4xl font-bold hover:underline dark:text-light'>
					{name}
				</h3>
				<p className='text-dark/75 dark:text-light'>{text}</p>
				<Link href={linkGit} className={style.links}>
					<GithubIcon className='rounded-full dark:text-light' />
					<button className='ml-5 rounded-md bg-dark px-6 py-2 text-light dark:bg-light dark:text-dark'>
						Visit Project
					</button>
				</Link>
			</div>
		</div>
	)
}
export default SingleProject
