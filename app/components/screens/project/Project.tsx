import Layout from '@/layout/Layout'

import AnimatedText from '@/ui/animated-text/AnimatedText'

import { ProjectData } from './project.dats'
import SecondProject from './second-project/SecondProject'
import SingleProject from './single-project/SingleProject'

const Project = () => {
	return (
		<Layout title='Projects'>
			<div>
				<div className='mt-10'>
					<AnimatedText
						text='Imagination Trumps Knowledge!'
						className='!leading-[115px] text-8xl font-bold'
					/>
					<div className='grid grid-cols-12 gap-24'>
						{ProjectData.map((project, key) => {
							if ((key + 1) % 3 === 1) {
								return (
									<div className='col-span-12'>
										<SingleProject {...project} />
									</div>
								)
							} else {
								return (
									<div className='col-span-6'>
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
