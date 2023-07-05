import cn from 'classnames'
import style from './Category.module.scss'
import { NavLink } from 'react-router-dom'

const list = [
	{ link: 'bras', title: 'Бюстгальтеры' },
	{ link: 'underpants', title: 'Трусы' },
	{ link: 'socks', title: 'Носки' },
	{ link: 'bathrobes', title: 'Халаты' },
	{ link: 'thermal', title: 'Термобелье' },
	{ link: 'pajamas', title: 'Пижамы' },
]

export const Category = () => {
	return (
		<ul className={style.category}>
			{list.map((item) => (
				<li key={item.link} className={style.category}>
					<NavLink className={({ isActive }) => cn(style.link, isActive && style.linkActive)} to={item.link}>
						{item.title}
					</NavLink>
				</li>
			))}
		</ul>
	)
}
