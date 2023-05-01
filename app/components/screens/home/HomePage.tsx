import { FC } from 'react'

import Layout from '@/layout/Layout'
import HomeDeveloper from './HomeDeveloper/HomeDeveloper'
import TransitionEffect from '@/hooks/transitionEffect'

const HomePage: FC = () => {
	return (
		<Layout title='Home'>
			<HomeDeveloper />
		</Layout>

	)
}

export default HomePage
