import Image from 'next/image'

import AnimatedText from '@/ui/animated-text/AnimatedText'
import { LinkArrow } from '@/ui/icons/Icons'

import devImg from '@/assets/images/developer-pic-1.png'

import style from './HomeDeveloper.module.scss'
import HireMe from '@/ui/hire-me/HireMe'

const HomeDeveloper = () => {
	return (
		<div className={style.HomeDeveloper}>
			<div className={style.img}>
				<Image alt='developer' src={devImg} />
			</div>
			<div className={style.info}>
				<div>
					<AnimatedText text='Turning Vision Into Reality With Code And Design.' />{' '}
				</div>
				<p>
					As a skilled full-stack developer, I am dedicated to turning
					ideas into innovative web applications. Explore my latest
					projects and articles, showcasing my expertise in React.js
					and web development.
				</p>
				<div className={style.contacts}>
					<button>
						<span>Resume</span> <LinkArrow />
					</button>
					<a href='/' className='underline'>Contact</a>
				</div>
			</div>
			<HireMe />
		</div>
	)
}
export default HomeDeveloper
