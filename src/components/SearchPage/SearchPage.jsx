import { useDispatch, useSelector } from 'react-redux'
import { useSearchParams } from 'react-router-dom'
import { useEffect } from 'react'

import { fetchAll } from '../../features/goodsSlice'

import { Goods } from '../Goods/Goods'
import { Container } from '../Layout/Container/Container'

import style from './SearchPage.module.scss'

export const SearchPage = () => {
	const dispatch = useDispatch()
	const { goodsList } = useSelector((state) => state.goods)

	let [searchParams] = useSearchParams()

	useEffect(() => {
		const search = searchParams.get('q')
		const params = { search }

		dispatch(fetchAll(params))
	}, [searchParams, dispatch])

	return goodsList.length ? (
		<Goods title={searchParams.get('q')} />
	) : (
		<Container>
			<h3 className={style.empty}>По вашему запросу ничего не найдено</h3>
		</Container>
	)
}
