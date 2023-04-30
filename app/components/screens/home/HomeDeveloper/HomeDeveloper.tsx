import Image from 'next/image'

import AnimatedText from '@/ui/animated-text/AnimatedText'
import HireMe from '@/ui/hire-me/HireMe'
import { LinkArrow } from '@/ui/icons/Icons'

import devImg from '@/assets/images/developer-pic-1.png'

import style from './HomeDeveloper.module.scss'

const HomeDeveloper = () => {
	return (
		<div className={style.HomeDeveloper}>
			<div className={style.img}>
				<Image alt='developer' src={devImg} 
				priority
				sizes='(max-width:768px) 100vw,
				(max-width:1200px) 50vw,
				50vw
				'
				/>
			</div>
			<div className={style.info}>
				<div>
					<AnimatedText text='Turning Vision Into Reality With Code And Design.' />{' '}
				</div>
				<p className='dark:text-light'>
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
						<span>Resume</span>{' '}
						<LinkArrow />
					</button>
					<a href='/' className='underline dark:text-light'>
						Contact
					</a>
				</div>
			</div>
			<HireMe />
		</div>
	)
}
export default HomeDeveloper
