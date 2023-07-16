import { useDispatch, useSelector } from 'react-redux'

import cn from 'classnames'

import { API_URL } from '../../../../const'

import { Count } from '../../../Count/Count'
import { addToCart, removeFromCart } from '../../../../features/cartSlice'

import style from './CartItem.module.scss'

export const CartItem = ({ id, color, size, count, goodsList }) => {
	const dispatch = useDispatch()
	const { colorList } = useSelector((state) => state.color)
	const item = goodsList.find((item) => item.id === id)

	const handleCountChange = (count) => {
		dispatch(addToCart({ id, color, size, count }))
	}

	const handleremoveItem = () => {
		dispatch(removeFromCart({ id, color, size }))
	}

	return (
		<article className={style.item}>
			<img alt={item?.title} className={style.image} src={`${API_URL}/${item?.pic}`} />

			<div className={style.content}>
				<h3 className={style.title}>{item?.title}</h3>
				<p className={style.price}>руб {item?.price}</p>
				<div className={style.vendorCode}>
					<span className={style.subtitle}>Артикул</span>
					<span>{id}</span>
				</div>
			</div>

			<div className={style.prop}>
				<div className={style.color}>
					<p className={cn(style.subtitle, style.colorTitle)}>Цвет</p>
					<div
						className={style.colorItem}
						style={{ '--data-color': colorList?.find((item) => item?.title === color)?.code }}
					/>
				</div>

				<div className={style.size}>
					<p className={cn(style.subtitle, style.sizeTitle)}>Размер</p>
					<div className={style.sizeItem}>{size}</div>
				</div>
			</div>

			<button
				aria-label={`Удалить из корзины ${item?.title} цвета ${color} размера ${size}`}
				className={style.del}
				type='button'
				onClick={handleremoveItem}
			/>

			<Count
				className={style.count}
				count={count}
				handleDecrement={() => {
					handleCountChange(count - 1)
				}}
				handleIncrement={() => {
					handleCountChange(count + 1)
				}}
			/>
		</article>
	)
}
