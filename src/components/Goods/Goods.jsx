import { useSelector } from 'react-redux'

import { Container } from '../Layout/Container/Container'
import { Product } from '../Product/Product'
import { Pagination } from '../Pagination/Pagination'
import { Skeleton } from '../Skeleton/Skeleton'
import { Preloader } from '../Preloader/Preloader'

import style from './Goods.module.scss'

export const Goods = ({ title }) => {
	const { goodsList, totalCount, status } = useSelector((state) => state.goods)

	return (
		<section className={style.goods}>
			<Container>
				<h2 className={style.title}>
					{title ?? 'Новинки'}
					{totalCount && totalCount > 0 ? <sup>&nbsp;({totalCount})</sup> : ''}
				</h2>

				<ul className={style.list}>
					{goodsList.map((item) => (
						<li key={item.id}>{status === 'loading' ? <Skeleton /> : <Product {...item} />}</li>
					))}
				</ul>

				<Pagination />
			</Container>
		</section>
	)
}
