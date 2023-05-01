import { motion } from 'framer-motion'
import { FC } from 'react'

const quote = {
	initial: {
		opacity: 0
	},
	animate: {
		opacity: 1,
		transition: {
			delay: 0.5,
			staggerChildren: 0.08
		}
	}
}
const singleWord = {
	initial: {
		opacity: 0,
		y: 50
	},
	animate: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 1
		}
	}
}
interface IAnimatedText {
	text: string
	className?: string
}

const AnimatedText: FC<IAnimatedText> = ({ text, className }) => {
	return (
		<div className='w-full flex text-left capitalize overflow-hidden mx-auto pb-4 justify-center'>
			<motion.h1
				className={`inline-block w-full leading-[65px] dark:text-light ${className}`}
				variants={quote}
				initial='initial'
				animate='animate'
			>
				{text.split(' ').map((world: string, key) => (
					<motion.span
						className='inline-block'
						key={key}
						variants={singleWord}
					>
						{world}&nbsp;
					</motion.span>
				))}
			</motion.h1>
		</div>
	)
}
export default AnimatedText
