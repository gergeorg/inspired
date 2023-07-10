import { NavLink } from 'react-router-dom'

import { API_URL } from '../../const'

import style from './Product.module.scss'

import { ReactComponent as Like } from '../../assets/like.svg'
import { ColorList } from '../ColorList/ColorList'

export const Product = ({ id, pic, title, price, colors }) => {
	return (
		<article className={style.product}>
			<NavLink className={style.link} to={`/product/${id}`}>
				<img className={style.image} src={`${API_URL}/${pic}`} alt={title} />
				<h3 className={style.title}>{title}</h3>
			</NavLink>

			<div className={style.row}>
				<p className={style.price}>руб {price}</p>
				<button className={style.favorite}>
					<Like />
				</button>
			</div>

			<ColorList colors={colors} />
		</article>
	)
}
