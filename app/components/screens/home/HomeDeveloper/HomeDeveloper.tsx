import Image from 'next/image'

import AnimatedText from '@/ui/animated-text/AnimatedText'
import HireMe from '@/ui/hire-me/HireMe'
import { LinkArrow } from '@/ui/icons/Icons'

import devImg from '@/assets/images/developer-pic-1.png'
import lampImg from '@/assets/images/lamp.svg'
import style from './HomeDeveloper.module.scss'

const HomeDeveloper = () => {
	return (
		<div className={style.HomeDeveloper}>
			<div
				className={`${style.img} flex flex-col justify-center w-1/2 lg:hidden md:inline-block md:w-full`}
			>
				<Image
					alt='developer'
					src={devImg}
					priority
					sizes='(max-width:768px) 100vw,
				(max-width:1200px) 50vw,
				50vw
				'
				/>
			</div>
			<div
				className={`${style.info} flex w-1/2 flex-col justify-center lg:w-full lg:text-center`}
			>
				<div>
					<AnimatedText
						text='Turning Vision Into Reality With Code And Design.'
						className='text-6xl !text-left font-bold lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-3xl sm:leading-[40px] xl:text-6xl'
					/>
				</div>
				<p className='my-4 text-base font-medium dark:text-light md:text-sm  sm:!text-xs'>
					As a skilled full-stack developer, I am dedicated to turning
					ideas into innovative web applications. Explore my latest
					projects and articles, showcasing my expertise in React.js
					and web development.
				</p>
				<div className={style.contacts}>
					<button
						className='border-[1px] text-light bg-dark border-dark  hover:bg-light hover:text-dark
						dark:bg-light dark:text-dark
					hover:dark:bg-dark hover:dark:text-light hover:dark:border-light'
					>
						<span>Resume</span> <LinkArrow />
					</button>
					<a href='/' className='underline dark:text-light'>
						Contact
					</a>
				</div>
			</div>
			<HireMe />
			<Image src={lampImg} alt='lamp' className='absolute right-0 bottom-[10vh] w-24 md:hidden'/>
		</div>
	)
}
export default HomeDeveloper
