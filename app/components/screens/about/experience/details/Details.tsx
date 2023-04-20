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
			<ul className='w-[60%] mx-auto'>
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
							<li ref={ref} className='mb-6 last:mb-0'>
								<LiIcon reference={ref} />
								<motion.div
									initial={{ y: 50 }}
									whileInView={{ y: 0 }}
									transition={{
										duration: 0.5,
										type: 'spring'
									}}
								>
									<h2>
										<span className='text-2xl font-bold'>
											{position}&nbsp;
										</span>
										<Link
											className='text-2xl font-bold text-primary'
											href={companyLink}
										>
											@{company}
										</Link>
									</h2>
									<h4 className='text-dark/75'>
										{time} | {address}
									</h4>
									<p className='leading-[25px]'>{work}</p>
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
