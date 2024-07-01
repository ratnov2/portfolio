import Image, { StaticImageData } from 'next/image'
import { FC, useEffect, useState } from 'react'

import SkeletonLoader from '../skeleton-loader/SkeletonLoader'

import style from './style.module.scss'

interface IImgWithLoader {
	img?: string | StaticImageData
	className?: string
	type?: 'preview' | 'avatar'
}

export const ImgWithLoader: FC<IImgWithLoader> = ({
	img,
	className = '',
	type = 'ordinary'
}) => {
	const [isLoading, setIsLoading] = useState(true)
	return (
		<div className={`${className} `}>
			{img && (
				<div
					className={`${style.imageWrapper} ${
						!isLoading && style.loaded
					} ${style[type]}`}
				>
					<Image
						src={img}
						width={499}
						height={499}
						onLoadingComplete={() => setIsLoading(false)}
						style={
							isLoading
								? { visibility: 'hidden', height: 0, width: 0 }
								: {
										height: '100%',
										width: '100%'
								  }
						}
						alt=''
					/>
				</div>
			)}

			{isLoading && <SkeletonLoader className='h-full w-full' />}
		</div>
	)
}
