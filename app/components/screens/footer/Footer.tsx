import Link from 'next/link'

import style from './Footer.module.scss'

const Footer = () => {
	return (
		<div className={`${style.footer} dark:bg-dark dark:border-t-light dark:text-light`}>
      <div className={`${style.content} px-32 l:p-24 lg:p-16 
      md:p-12 sm:p-8 py-8 flex items-center justify-between lg:flex-col lg:py-6`}>
			<span>{new Date().getFullYear()} &copy; All Rights Reserved.</span>
			<div>
				Build with <span className='text-primary font-bold text-xl dark:text-primaryDark'>&#9825;</span>
				<Link href={''}> by Anton Ratnov</Link>
			</div>
			<Link href={''}>Say Hello</Link>
      </div>
		</div>
	)
}
export default Footer
