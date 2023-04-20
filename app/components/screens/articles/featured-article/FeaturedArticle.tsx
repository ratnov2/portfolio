import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

import { IFeaturedArticle } from '../article.interface'

import style from './FeaturedArticle.module.scss'

const FeaturedArticle: FC<IFeaturedArticle> = ({
	img,
	name,
	text,
	timeRead,
	link
}) => {
	return (
		<>
			<div className={style.single}>
				<div className={style.share} />
				<div className={style.img}>
					<Image src={img} alt='project' width={580} height={580} />
				</div>
				<div className={style.content}>
					<h3>{name}</h3>
					<p>{text}</p>
					<span>{timeRead}</span>
				</div>
			</div>
		</>
	)
}
export default FeaturedArticle
