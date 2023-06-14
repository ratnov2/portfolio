import Link from 'next/link'

import { CircularText } from '../icons/Icons'

const HireMe = () => {
	return (
		<div className='fixed left-3 bottom-3'>
			<div className='w-48 relative'>
				<CircularText className='fill-dark animate-spin-slow dark:fill-light' />
				<Link
					href={'https://hh.ru/resume/36b585bbff0b90fc600039ed1f414870415961'}
					className='flex items-center border-solid border-dark shadow-md justify-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-dark border-2 w-20 h-20 rounded-full text-light font-medium hover:bg-light hover:text-dark
					dark:bg-light dark:text-dark hover:dark:bg-dark dark:border-transparent hover:dark:border-light hover:dark:text-light dark:shadow-light/25
					'
				>
					Hire me
				</Link>
			</div>
		</div>
	)
}
export default HireMe
