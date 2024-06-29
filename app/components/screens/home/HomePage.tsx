import { FC } from 'react'

import Layout from '@/layout/Layout'
import HomeDeveloper from './HomeDeveloper/HomeDeveloper'

const HomePage: FC = () => {
	return (
		<Layout title='Home'>
			<HomeDeveloper />
		</Layout>

	)
}

export default HomePage
