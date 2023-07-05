import { Outlet } from 'react-router-dom'
import { Header } from '../components/Header/Header'
import { Footer } from '../components/Footer/Footer'
import { Main } from '../components/Layout/Main/Main'

const list = [
	{
		link: 'women',
		title: 'Женщины',
		categories: [
			{ link: 'bras', title: 'Бюстгальтеры' },
			{ link: 'underpants', title: 'Трусы' },
			{ link: 'socks', title: 'Носки' },
			{ link: 'bathrobes', title: 'Халаты' },
			{ link: 'thermal', title: 'Термобелье' },
			{ link: 'pajamas', title: 'Пижамы' },
		],
	},
	{
		link: 'men',
		title: 'Мужчины',
		categories: [
			{ link: 'underpants', title: 'Трусы' },
			{ link: 'socks', title: 'Носки' },
			{ link: 'bathrobes', title: 'Халаты' },
			{ link: 'thermal', title: 'Термобелье' },
		],
	},
]

export const Root = () => {
	return (
		<>
			<Header list={list} />
			<Main>
				<Outlet />
			</Main>
			<Footer list={list} />
		</>
	)
}
