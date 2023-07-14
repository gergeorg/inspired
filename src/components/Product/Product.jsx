import { NavLink } from 'react-router-dom'

import { API_URL } from '../../const'

import { ReactComponent as Like } from '../../assets/like.svg'
import { ColorList } from '../ColorList/ColorList'

import style from './Product.module.scss'

export const Product = ({ id, pic, title, price, colors }) => (
	<article className={style.product}>
		<NavLink className={style.link} to={`/product/${id}`}>
			<img alt={title} className={style.image} src={`${API_URL}/${pic}`} />
			<h3 className={style.title}>{title}</h3>
		</NavLink>

		<div className={style.row}>
			<p className={style.price}>руб {price}</p>
			<button className={style.favorite} type='button'>
				<Like />
			</button>
		</div>

		<ColorList colors={colors} />
	</article>
)
