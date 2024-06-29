import { motion } from 'framer-motion'

import { SkillsData } from './skills.data'

type SkillsMotion = {
	title: string
	className: string
}

const SkillsMotion = () => {
	return (
		<>
			{SkillsData.map(({ title, className, x, y }) => (
				<motion.div
					className={`flex items-center justify-center rounded-3xl bg-dark py-3 px-5 text-light cursor-pointer absolute  ${className}
				dark:bg-light dark:text-dark 
			  lg:py-2 lg:px-4 md:text-sm md:py-1.5 md:px-3  xs:bg-transparent xs:dark:bg-transparent xs:text-dark xs:dark:text-light xs:font-bold
				`}
					whileHover={{ scale: 1.06 }}
					initial={{ x: 0, y: 0 }}
					whileInView={{ x, y }}
					transition={{ x: { duration: 1 }, y: { duration: 1 } }}
					viewport={{ once: true }}
				>
					{title}
				</motion.div>
			))}
		</>
	)
}
export default SkillsMotion
