import { NavLink } from 'react-router-dom'

import style from './Category.module.scss'

export const Category = ({ list }) => {
	return (
		<div className={style.category}>
			<h2 className={style.categoryTitle}>Каталог</h2>
			<ul className={style.categoryList}>
				{list.map((item) => (
					<li key={item.link} className={style.categoryItem}>
						<h3 className={style.categorySubtitle}>
							<NavLink className={style.link} to={item.link}>
								{item.title}
							</NavLink>
						</h3>

						<ul className={style.categorySublist}>
							{item.categories.map((category) => (
								<li key={category.link}>
									<NavLink className={style.link} to={`${item.link}/${category.link}`}>
										{category.title}
									</NavLink>
								</li>
							))}
						</ul>
					</li>
				))}
			</ul>
		</div>
	)
}
