import Layout from '@/layout/Layout'

import AnimatedText from '@/ui/animated-text/AnimatedText'

import { allArticles, featuredArticles } from './article.data'
import Article from './article/Article'
import FeaturedArticle from './featured-article/FeaturedArticle'

const Articles = () => {
	return (
		<Layout title='articles'>
			<AnimatedText
				text='Words Can Change The World!'
				className='text-8xl font-bold leading-[100px] my-20'
			/>
			<div className='grid grid-cols-12 gap-24'>
				{featuredArticles.map((article, key) => (
					<div className='col-span-6' key={key}>
						<FeaturedArticle {...article} />
					</div>
				))}
			</div>
			<h1 className='text-4xl font-bold text-center my-32'>
				All Articles
			</h1>
			<div>
				{allArticles.map((article, key) => (
					<Article {...article} key={key}/>
				))}
			</div>
		</Layout>
	)
}
export default Articles
