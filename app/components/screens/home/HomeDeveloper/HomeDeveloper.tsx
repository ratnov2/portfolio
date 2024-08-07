import Image from 'next/image'
import Link from 'next/link'

import AnimatedText from '@/ui/animated-text/AnimatedText'
import HireMe from '@/ui/hire-me/HireMe'
import { LinkArrow } from '@/ui/icons/Icons'
import { ImgWithLoader } from '@/ui/img-with-loader/ImgWithLoader'

import devImg from '@/assets/images/developer-pic-1.png'
import lampImg from '@/assets/images/lamp.svg'

import style from './HomeDeveloper.module.scss'

const HomeDeveloper = () => {
	return (
		<div className={style.HomeDeveloper}>
			<div
				className={`${style.img} flex flex-col justify-center w-1/2 lg:hidden md:inline-block md:w-full`}
			>
				<ImgWithLoader
					img={devImg}
					className='aspect-[1/1]'
					type='preview'
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
					I am an experienced frontend programmer in web application
					development. My professional stack includes knowledge of
					HTML, CSS, JavaScript and frameworks such as React and Next
					js. I strive to create modern web applications that work
					fast, have a simple interface and easy navigation. I am also
					an enthusiast of new technologies and am always ready to
					learn new development tools and methods.
				</p>
				<div className={style.contacts}>
					<Link
						href={
							'https://hh.ru/resume/a453d217ff0d4b42f50039ed1f48795a304638'
						}
					>
						<button
							className='border-[1px] text-light bg-dark border-dark  hover:bg-light hover:text-dark
						dark:bg-light dark:text-dark
					hover:dark:bg-dark hover:dark:text-light hover:dark:border-light'
						>
							<span>Resume</span> <LinkArrow />
						</button>
					</Link>
					<a
						href='https://vk.com/id307263098'
						className='underline dark:text-light'
					>
						Contact
					</a>
				</div>
			</div>
			<HireMe />
			<Image
				src={lampImg}
				alt='lamp'
				className='absolute right-0 bottom-[10vh] w-24 md:hidden'
			/>
		</div>
	)
}
export default HomeDeveloper
