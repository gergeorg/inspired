import cn from 'classnames'

import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'

import { Container } from '../../Layout/Container/Container'

import { ReactComponent as Favorite } from '../../../assets/favorite.svg'
import { ReactComponent as Cart } from '../../../assets/cart.svg'
import { ReactComponent as Search } from '../../../assets/search.svg'

import logo from './logo.svg'

import style from './Top.module.scss'

export const Top = () => {
	const { countItems } = useSelector((state) => state.cart)

	return (
		<div className={style.top}>
			<Container className={style.container}>
				<a className={cn(style.link, style.phone)} href='tel:+79304902620'>
					8 930 490 26 20
				</a>

				<NavLink className={style.logo} href='/'>
					<img alt='Логотип Inspired' src={logo} />
				</NavLink>

				<div className={style.navigation}>
					<ul className={style.navList}>
						<li className={style.navItem}>
							<button className={style.link} type='button'>
								<Search />
							</button>
						</li>

						<li className={style.navItem}>
							<NavLink className={style.link} to='/cart'>
								<Cart />
								<span className={style.linkCount}>{countItems}</span>
							</NavLink>
						</li>

						<li className={style.navItem}>
							<NavLink className={style.link} to='/favorite'>
								<Favorite className={style.favorite} />
							</NavLink>
						</li>
					</ul>
				</div>
			</Container>
		</div>
	)
}
