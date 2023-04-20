import Image from 'next/image'
import { FC } from 'react'

import { GithubIcon } from '@/ui/icons/Icons'

import img from '@/assets/images/developer-pic-1.png'

import { IProject } from '../project.interface'

import style from './SecondProject.module.scss'
import Link from 'next/link'

const SecondProject: FC<IProject> = ({
	imgSrc,
	typeProject,
	name,
	linkProject,
	linkGit
}) => {
	return (
		<div className={style.single}>
			<div className={style.share}/>
			<div className={style.img}>
				<Image src={img} alt='project' width={580} height={580} />
			</div>
			
			<div className={style.content}>
				<h4>{typeProject}</h4>
				<h3>{name}</h3>
				<div className={style.links}>
					<Link href={linkGit}>Visit</Link>
					<GithubIcon />
				</div>
			</div>
		</div>
	)
}
export default SecondProject
