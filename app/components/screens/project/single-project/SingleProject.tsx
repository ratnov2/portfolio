import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

import { GithubIcon } from '@/ui/icons/Icons'
import { ImgWithLoader } from '@/ui/img-with-loader/ImgWithLoader'

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
			className={`${style.single} relative flex w-full rounded-[2rem] border-2 border-dark p-10 bg-light dark:border-light dark:bg-dark dark-text-light lg:flex-col  lg:p-8 xs:rounded-2xl  xs:rounded-br-3xl xs:p-4`}
		>
			<div className='absolute left-0 -top-[1px] -right-3 -z-10 h-[103%] w-[101%] rounded-[2.5rem] bg-dark dark:bg-light xs:-right-2 xs:h-[102%] xs:w-[100%] xs:rounded-[1.5rem]' />
			<Link href={linkProject} className={style.img} >
				<ImgWithLoader img={imgSrc}  className='aspect-video'/>
			</Link>

			<div className={style.content}>
				<h4 className='text-xl font-medium text-primary dark:text-primaryDark xs:text-base '>
					{typeProject}
				</h4>
				<Link
					href={linkProject}
					className='my-1 text-4xl font-bold hover:underline dark:text-light lg:text-3xl xs:text-2xl'
				>
					{name}
				</Link>
				<p className='text-dark/75 dark:text-light sm:text-sm'>
					{text}
				</p>
				<Link href={linkProject} className={style.links}>
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
