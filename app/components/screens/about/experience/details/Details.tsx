import { motion } from 'framer-motion'
import Link from 'next/link'
import { FC, useRef } from 'react'

import LiIcon from '../li-icon/LiIcon'

import { DetailsData } from './details.data'

interface Details {
	position: string
	company: string
	companyLink: string
	time: string
	address: string
	work: string
}

const Details: FC = () => {
	return (
		<>
			<ul className='w-[60%] xs:ml-2 !mx-auto md:w-[80%]'>
				{DetailsData.map(
					({
						position,
						company,
						companyLink,
						time,
						address,
						work
					}) => {
						const ref = useRef(null)
						return (
							<li ref={ref} className='mb-6 last:mb-0 '>
								<LiIcon reference={ref} />
								<motion.div
									initial={{ y: 50 }}
									whileInView={{ y: 0 }}
									transition={{
										duration: 1,
										type: 'spring'
									}}
								>
									<h2>
										<span className='text-2xl font-bold sm:text-xl xs:text-lg'>
											{position}&nbsp;
										</span>
										<Link
											className='text-2xl font-bold text-primary dark:text-primaryDark sm:text-xl xs:text-lg'
											href={companyLink}
										>
											@{company}
										</Link>
									</h2>
									<h4 className='text-dark/75 dark:text-light/50 xs:text-sm'>
										{time} | {address}
									</h4>
									<p className='leading-[25px] md:text-sm md:leading-[18px]'>{work}</p>
								</motion.div>
							</li>
						)
					}
				)}
			</ul>
		</>
	)
}
export default Details
