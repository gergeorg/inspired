import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'

import { Goods } from '../Goods/Goods'
import { fetchData } from '../../features/goodsSlice'
import { usePageFromSearchParams } from '../../hooks/usePageFromSearchParams'

export const FavoritePage = () => {
	const dispatch = useDispatch()
	const favorites = useSelector((state) => state.favorites)
	const page = usePageFromSearchParams(dispatch)

	useEffect(() => {
		if (favorites) {
			const param = { list: favorites }

			if (page) {
				param.page = page
			}

			dispatch(fetchData(param))
		}
	}, [favorites, page, dispatch])

	return <Goods title='Избранное' />
}
