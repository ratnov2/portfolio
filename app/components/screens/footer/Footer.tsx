import Link from 'next/link'

import style from './Footer.module.scss'

const Footer = () => {
	return (
		<div className={style.footer}>
      <div className={style.content}>
			<span>{new Date().getFullYear()} &copy; All Rights Reserved.</span>
			<div>
				Build with <span className='text-primary font-bold text-xl'>&#9825; </span>
				<Link href={''}>CodeBucks</Link>
			</div>
			<Link href={''}>Say Hello</Link>
      </div>
		</div>
	)
}
export default Footer
