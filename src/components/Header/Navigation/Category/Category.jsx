import cn from 'classnames'

import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'

import style from './Category.module.scss'

export const Category = () => {
	const { activeGender, categories } = useSelector((state) => state.navigation)

	return (
		<ul className={style.category}>
			{categories[activeGender]?.list?.map((item) => (
				<li key={item.slug} className={style.category}>
					<NavLink
						className={({ isActive }) => cn(style.link, isActive && style.linkActive)}
						to={`/catalog/${activeGender}/${item.slug}`}
					>
						{item.title}
					</NavLink>
				</li>
			))}
		</ul>
	)
}
