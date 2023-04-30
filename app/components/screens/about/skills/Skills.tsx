import { motion } from 'framer-motion'

import style from './Skills.module.scss'
import SkillsMotion from './SkillsMotion'

const Skills = () => {
	return (
		<>
			<h2 className='text-center font-bold mt-64 text-8xl'>Skills</h2>
			<div className='w-full h-screen bg-circularLight  rounded-full flex items-center justify-center dark:bg-circularDark'>
				<SkillsMotion />
			</div>
		</>
	)
}
export default Skills
