import Link from 'next/link'

import { CircularText } from '../icons/Icons'

import style from './HireMe.module.scss'

const HireMe = () => {
	return (
		<div className='fixed left-3 bottom-3'>
			<div className='w-48 relative'>
				<CircularText className='fill-dark animate-spin-slow' />
				<Link
					href={''}
					className='flex items-center justify-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-dark border-2 w-20 h-20 rounded-full text-light font-medium hover:bg-light hover:text-dark'
				>
					Hire me
				</Link>
			</div>
		</div>
	)
}
export default HireMe
