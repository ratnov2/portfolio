import Layout from '@/layout/Layout'

import AnimatedText from '@/ui/animated-text/AnimatedText'

const Articles = () => {
	return (
		<Layout title='articles' description='soon articles' >
			<div className='h-screen'>
			<AnimatedText
				text='There will be articles here soon'
				className='text-8xl font-bold leading-[140px] my-20'
			/>
			</div>
		</Layout>
	)
}
export default Articles
