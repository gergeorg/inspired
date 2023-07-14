import { useDispatch, useSelector } from 'react-redux'

import { useEffect } from 'react'

import { Goods } from '../Goods/Goods'
import { fetchCategory } from '../../features/goodsSlice'

export const FavoritePage = () => {
	const dispatch = useDispatch()
	const favorites = useSelector((state) => state.favorites)

	useEffect(() => {
		dispatch(fetchCategory({ list: favorites }))
	}, [favorites, dispatch])

	return <Goods title='Избранное' />
}
