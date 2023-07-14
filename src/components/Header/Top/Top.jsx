/* eslint-disable react/jsx-max-props-per-line */
/* eslint-disable max-len */
import cn from 'classnames'

import { NavLink } from 'react-router-dom'

import { Container } from '../../Layout/Container/Container'

import { ReactComponent as Favorite } from '../../../assets/favorite.svg'
import { ReactComponent as Cart } from '../../../assets/cart.svg'
import { ReactComponent as Search } from '../../../assets/search.svg'

import logo from './logo.svg'

import style from './Top.module.scss'

export const Top = () => (
	<div className={style.top}>
		<Container className={style.topContainer}>
			<a className={cn(style.topLink, style.topPhone)} href='tel:+79304902620'>
				8 930 490 26 20
			</a>

			<NavLink className={style.topLogo} href='/'>
				<img alt='Логотип Inspired' src={logo} />
			</NavLink>

			<div className={style.topNavigation}>
				<ul className={style.topNavList}>
					<li className={style.topNavItem}>
						<button className={style.topLink} type='button'>
							<Search />
						</button>
					</li>

					<li className={style.topNavItem}>
						<NavLink className={style.topLink} to='/cart'>
							<Cart />
						</NavLink>
					</li>

					<li className={style.topNavItem}>
						<NavLink className={style.topLink} to='/favorite'>
							<Favorite className={style.favorite} />
						</NavLink>
					</li>
				</ul>
			</div>
		</Container>
	</div>
)
