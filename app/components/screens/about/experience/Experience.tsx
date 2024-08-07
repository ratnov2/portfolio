import { useScroll } from 'framer-motion'
import { motion } from 'framer-motion'
import { useRef } from 'react'

import Details from './details/Details'
import { DetailsData } from './details/details.data'

const Experience = () => {
	const ref = useRef(null)
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ['start end', 'center start']
	})

	return (
		<div className='mt-64'>
			<h1 className='text-center dark:text-light font-bold text-8xl mb-32 w-full md:text-6xl xs:text-4xl md:mb-16'>
				Experience
			</h1>
			<div ref={ref} className='relative mx-auto mt-24'>
				<motion.div
					className='absolute left-9 top-1 w-[4px]  md:w-[2px] md:left-[30px] xs:left-[20px] h-full bg-dark  origin-top  dark:bg-primaryDark dark:shadow-3xl'
					style={{ scaleY: scrollYProgress }}
				/>
				<div className='ml-4'>
					<Details DetailsData={DetailsData} />
				</div>
			</div>
		</div>
	)
}
export default Experience
