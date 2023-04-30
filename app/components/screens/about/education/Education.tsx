import { useScroll } from 'framer-motion'
import { motion } from 'framer-motion'
import { useRef } from 'react'
import Details from '../experience/details/Details'



const Education = () => {
	const ref = useRef(null)
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ['start end', 'center start']
	})

	return (
		<div className='mt-64 mb-52'>
			<h1 className='text-center dark:text-light'>Education</h1>
			<div ref={ref} className='w-[75%] relative mx-auto mt-24'>
				<motion.div
					className='absolute left-9 top-1 w-[4px] h-full bg-dark origin-top dark:bg-light'
					style={{ scaleY: scrollYProgress }}
				/>
				<div className='ml-4'>
					<Details />
				</div>
			</div>
		</div>
	)
}
export default Education
