import { motion } from 'framer-motion'
import Link from 'next/link'
import { FC } from 'react'

const MotionLink = motion(Link)

const Logo: FC = () => {
	return (
		<div className=''>
			<MotionLink
				href={'/'}
				className='w-16 h-16 text-2xl bg-dark text-light flex justify-center items-center rounded-full font-bold border border-solid border-transparent dark:border-light'
				whileHover={{
					backgroundColor: [
						'#121212',
						'rgba(131,58,180,1)',
						'rgba(253,29,29,1)',
						'rgba(252,176,69,1)',
						'rgba(131,58,180,1)',
						'#121212'
					],
					transition: { duration: 1, repeat: Infinity }
				}}
			>
				CB
			</MotionLink>
		</div>
	)
}

export default Logo
