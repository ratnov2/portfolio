import { motion } from 'framer-motion'

import style from './Skills.module.scss'
import SkillsMotion from './SkillsMotion'

const Skills = () => {
	return (
		<>
			<h2 className='mt-52 text-center font-bold mt-64 text-8xl '>Skills</h2>
			<div className='w-full h-screen bg-circularLight  rounded-full flex items-center justify-center dark:bg-circularDark md:mb-32 rounded-full lg:bg-circularLightLg lg:dark:bg-circularDarkLg md:bg-circularLightMd md:dark:bg-circularDarkMd  sm:bg-circularLightSm sm:dark:bg-circularDarkSm lg:h-[80vh] sm:h-[60vh] xs:h-[50vh]'>
				<SkillsMotion />
			</div>
		</>
	)
}
export default Skills
