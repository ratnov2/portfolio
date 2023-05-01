import { useInView, useMotionValue, useSpring } from 'framer-motion'
import Image from 'next/image'
import { useEffect, useRef } from 'react'

import Layout from '@/layout/Layout'

import AnimatedText from '@/ui/animated-text/AnimatedText'

import profileImg from '@/assets/images/author_2.png'

import style from './About.module.scss'
import Education from './education/Education'
import Experience from './experience/Experience'
import Skills from './skills/Skills'

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
			<div className={`${style.about} dark:text-light`}>
				<h1>
					<AnimatedText text='Passion Fuels Purpose!'  className='text-8xl leading-[90px] font-bold text-dark mb-8 pt-10 text-center lg:!text-7xl lg:pt-5 sm:!mt-0 sm:leading-[70px] sm:!text-6xl xs:!text-4xl xs:leading-[40px] sm:mb-8 xl:text-6xl'/>
				</h1>
				<div className={style.content}>
					<div className={style.info}>
						<h2 className='uppercase font-medium text-lg mb-6 text-dark/75 dark:text-light/75'>
							Biography
						</h2>
						<p className='dark:text-light'>
							Hi, I'm <b>CodeBucks</b>, a web developer and UI/UX
							designer with a passion for creating beautiful,
							functional, and user-centered digital experiences.
							With 4 years of experience in the field. I am always
							looking for new and innovative ways to bring my
							clients' visions to life.
						</p>
						<p className='dark:text-light'>
							I believe that design is about more than just making
							things look pretty – it's about solving problems and
							creating intuitive, enjoyable experiences for users.
						</p>
						<p className='dark:text-light'>
							Whether I'm working on a website, mobile app, or
							other digital product, I bring my commitment to
							design excellence and user-centered thinking to
							every project I work on. I look forward to the
							opportunity to bring my skills and passion to your
							next project.
						</p>
					</div>
					<div
						className={`${style.profile} bg-light col-span-3 dark:bg-dark dark:border-light xl:col-span-4 md:col-span-8 md:order-1`}
					>
						<div className='bg-dark  absolute top-0 -right-3 w-[102%] h-[103%] rounded-2xl dark:bg-light -z-10' />
						<Image
							src={profileImg}
							alt='profile'
							priority
							sizes='(max-width:768px) 100vw,
						(max-width:1200px) 50vw,
						33vw'
						/>
					</div>
					<ul>
						<li>
							<span >
								<AnimatedNumber value={40} />+
							</span>
							<h2 className='mb-4 text-xl font-medium capitalize text-dark/75 dark:text-light/75  xl:text-center md:text-lg sm:text-base xs:text-sm'>Satisfied Clients</h2>
						</li>
						<li>
							<span >
								<AnimatedNumber value={50} />+
							</span>
							<h2 className='mb-4 text-xl font-medium capitalize text-dark/75 dark:text-light/75  xl:text-center md:text-lg sm:text-base xs:text-sm'>Projects Completed</h2>
						</li>
						<li>
							<span >
								<AnimatedNumber value={4} />+
							</span>
							<h2 className='mb-4 text-xl font-medium capitalize text-dark/75 dark:text-light/75  xl:text-center md:text-lg sm:text-base xs:text-sm'>Years Of Experience</h2>
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
