import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

import { fetchProduct } from '../../features/productSlice'
import { fetchCategory, fetchGender } from '../../features/goodsSlice'
import { API_URL } from '../../const'

import { Container } from '../Layout/Container/Container'
import { ColorList } from '../ColorList/ColorList'
import { ProductSize } from './ProductSize/ProductSize'
import { Count } from '../Count/Count'
import { Goods } from '../Goods/Goods'
import { ReactComponent as Like } from '../../assets/like.svg'

import cn from 'classnames'
import style from './ProductPage.module.scss'

export const ProductPage = () => {
	const dispatch = useDispatch()
	const { id } = useParams()
	const { product } = useSelector((state) => state.product)

	const { gender, category } = product

	const [selectedColor, setSelectedColor] = useState('')
	const [selectedSize, setSelectedSize] = useState('')
	const [count, setCount] = useState(1)

	const handleColorChange = (e) => {
		setSelectedColor(e.target.value)
	}

	const handleSizeChange = (e) => {
		setSelectedSize(e.target.value)
	}

	const handleIncrement = () => {
		setCount((prevCount) => prevCount + 1)
	}

	const handleDecrement = () => {
		if (count > 1) setCount((prevCount) => prevCount - 1)
	}

	useEffect(() => {
		dispatch(fetchProduct(id))
	}, [id, dispatch])

	useEffect(() => {
		dispatch(fetchCategory({ gender, category, count: 4, top: true, exclude: id }))
	}, [gender, category, id, dispatch])

	return (
		<>
			<section className={style.card}>
				<Container className={style.container}>
					<img className={style.image} src={`${API_URL}/${product.pic}`} alt={`${product.title} ${product.description}`} />
					<form className={style.content}>
						<h2 className={style.title}>{product.title}</h2>
						<p className={style.price}>руб {product.price}</p>
						<div className={style.vendorCode}>
							<span className={style.subtitle}>Артикул</span>
							<span className={style.id}>{product.id}</span>
						</div>

						<div className={style.color}>
							<span className={cn(style.subtitle, style.colorTitle)}>Цвет</span>
							<ColorList colors={product.colors} selectedColor={selectedColor} handleColorChange={handleColorChange} />
						</div>

						<ProductSize size={product.size} selectedSize={selectedSize} handleSizeChange={handleSizeChange} />

						<div className={style.description}>
							<p className={cn(style.subtitle, style.descriptionTitle)}>Описание</p>
							<p className={style.descriptionText}>{product.description}</p>
						</div>

						<div className={style.control}>
							<Count className={style.count} count={count} handleIncrement={handleIncrement} handleDecrement={handleDecrement} />
							<button className={style.addCart} type='submit'>
								В корзину
							</button>

							<button className={style.favorite} aria-label='Добавить товар в избранное' type='button'>
								<Like />
							</button>
						</div>
					</form>
				</Container>
			</section>

			<Goods title='Вам также может понравиться' />
		</>
	)
}
