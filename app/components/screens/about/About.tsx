import { useInView, useMotionValue, useSpring } from 'framer-motion'
import Image from 'next/image'
import { HTMLAttributes, LegacyRef, useEffect, useRef } from 'react'

import Layout from '@/layout/Layout'

import AnimatedText from '@/ui/animated-text/AnimatedText'

import profileImg from '@/assets/images/developer-pic-1.png'

import style from './About.module.scss'
import Skills from './skills/Skills'
import Experience from './experience/Experience'
import Education from './education/Education'

type spanRef = HTMLSpanElement & Element
type spanValue = {
	value: number
}
const AnimatedNumber = ({ value }: spanValue) => {
	const ref = useRef<spanRef | null>(null)

	const motionValue = useMotionValue(0)
	const springValue = useSpring(motionValue, { duration: 3000 })
	const isInView = useInView(ref)
	useEffect(() => {
		if (isInView) {
			motionValue.set(value)
		}
	}, [isInView, value, motionValue])
	useEffect(() => {
		springValue.on('change', latest => {
			if (ref.current && latest.toFixed(0) <= value && ref) {
				ref.current.textContent = latest.toFixed(0)
			}
		})
	}, [springValue, value])
	return <span ref={ref}></span>
}

const About = () => {
	return (
		<Layout title='about'>
			<div className={style.about}>
				<h1>
					<AnimatedText text='Passion Fuels Purpose!' />
				</h1>
				<div className={style.content}>
					<div className={style.info}>
						<h2>Biography</h2>
						<p>
							Hi, I'm <b>CodeBucks</b>, a web developer and UI/UX
							designer with a passion for creating beautiful,
							functional, and user-centered digital experiences.
							With 4 years of experience in the field. I am always
							looking for new and innovative ways to bring my
							clients' visions to life.
						</p>
						<p>
							I believe that design is about more than just making
							things look pretty – it's about solving problems and
							creating intuitive, enjoyable experiences for users.
						</p>
						<p>
							Whether I'm working on a website, mobile app, or
							other digital product, I bring my commitment to
							design excellence and user-centered thinking to
							every project I work on. I look forward to the
							opportunity to bring my skills and passion to your
							next project.
						</p>
					</div>
					<div className={style.profile}>
						<div className={style.share} />
						<Image src={profileImg} alt='profile' />
					</div>
					<ul>
						<li>
							<span>
								<AnimatedNumber value={40} />+
							</span>
							<h2>Satisfied Clients</h2>
						</li>
						<li>
							<span>
								<AnimatedNumber value={50} />+
							</span>
							<h2>Projects Completed</h2>
						</li>
						<li>
							<span>
								<AnimatedNumber value={4} />+
							</span>
							<h2>Years Of Experience</h2>
						</li>
					</ul>
				</div>
        <Skills />
        <Experience />
        <Education />
			</div>
		</Layout>
	)
}
export default About
