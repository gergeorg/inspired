import { Outlet } from 'react-router-dom'

import { Header } from '../components/Header/Header'
import { Footer } from '../components/Footer/Footer'
import { Main } from '../components/Layout/Main/Main'

export const Root = () => (
	<>
		<Header />
		<Main>
			<Outlet />
		</Main>
		<Footer />
	</>
)
