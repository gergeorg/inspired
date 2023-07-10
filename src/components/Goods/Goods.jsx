import { useSelector } from 'react-redux'

import { Container } from '../Layout/Container/Container'
import { Product } from '../Product/Product'

import style from './Goods.module.scss'

export const Goods = ({ categoryData }) => {
	const { goodsList } = useSelector((state) => state.goods)
	// const { activeGender, categories } = useSelector((state) => state.navigation)

	const title = categoryData?.title ?? 'Новинки'

	return (
		<section className={style.goods}>
			<Container>
				<h2 className={style.title}>{title}</h2>
				<ul className={style.list}>
					{goodsList.map((item) => (
						<li key={item.id}>
							<Product {...item} />
						</li>
					))}
				</ul>
			</Container>
		</section>
	)
}
