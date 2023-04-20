import { FC } from 'react'

import Layout from '@/layout/Layout'
import HomeDeveloper from './HomeDeveloper/HomeDeveloper'
import Footer from '../footer/Footer'

const HomePage: FC = () => {
	return (
		<Layout title='Home'>
			<HomeDeveloper />
		</Layout>

	)
}

export default HomePage
