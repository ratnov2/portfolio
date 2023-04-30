import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

import { GithubIcon } from '@/ui/icons/Icons'

import { IProject } from '../project.interface'

import style from './SecondProject.module.scss'

const SecondProject: FC<IProject> = ({
	imgSrc,
	typeProject,
	name,
	linkProject,
	linkGit
}) => {
	return (
		<div
			className={`${style.single} relative w-full rounded-[2rem] border-2 border-dark bg-light p-5 dark:bg-dark dark:border-light dark:text-light`}
		>
			<div className='absolute left-0 -top-[1px] -right-3 -z-10 h-[103%] w-[101%] rounded-[2.5rem] bg-dark dark:bg-light' />
			<div className={style.img}>
				<Image
					src={imgSrc}
					alt='project'
					width={580}
					height={580}
					priority
					sizes='(max-width:768px) 100vw,
				(max-width:1200px) 50vw,
				50vw'
				/>
			</div>

			<div className={style.content}>
				<h4 className='text-xl font-medium text-primary dark:text-primaryDark'>
					{typeProject}
				</h4>
				<h3>{name}</h3>
				<Link href={linkGit} className={style.links}>
					<button className='text-dark underline dark:text-light '>
						Visit
					</button>
					<GithubIcon />
				</Link>
			</div>
		</div>
	)
}
export default SecondProject
