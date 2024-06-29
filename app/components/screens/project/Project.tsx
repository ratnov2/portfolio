import Layout from '@/layout/Layout'

import AnimatedText from '@/ui/animated-text/AnimatedText'

import { ProjectData } from './project.dats'
import SecondProject from './second-project/SecondProject'
import SingleProject from './single-project/SingleProject'

const Project = () => {
	return (
		<Layout title='Projects' description='my projects'>
			<div>
				<div className='mt-10 mb-20'>
					<AnimatedText
						text='Imagination Trumps Knowledge!'
						className='!leading-[125px] text-8xl font-bold text-center mb-10 md:text-6xl xs:text-4xl'
					/>
					<div className='grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0'>
						{ProjectData.map((project, key) => {
							if ((key + 1) % 3 === 1) {
								return (
									<div className='col-span-12'>
										<SingleProject {...project} />
									</div>
								)
							} else {
								return (
									<div className='col-span-6 sm:col-span-12'>
										<SecondProject {...project} />
									</div>
								)
							}
						})}
					</div>
				</div>
			</div>
		</Layout>
	)
}
export default Project
