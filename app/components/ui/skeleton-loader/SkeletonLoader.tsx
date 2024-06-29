import React, { FC } from 'react'
import Skeleton, { SkeletonProps } from 'react-loading-skeleton'

const SkeletonLoader: FC<SkeletonProps> = ({ className, ...rest }) => {
	return (
		<Skeleton
			{...rest}
			baseColor={'#77787a'}
			highlightColor='#292A2E'
			className={`rounded-lg ${className}`}
		/>
	)
}

export default SkeletonLoader
