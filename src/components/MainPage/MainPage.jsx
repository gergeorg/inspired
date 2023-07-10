import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import { fetchCategory, fetchGender } from '../../features/goodsSlice'
import { setActiveGender } from '../../features/navigationSlice'

import { Goods } from '../Goods/Goods'
import { Banner } from '../Banner/Banner'

export const MainPage = () => {
	const dispatch = useDispatch()
	const { gender, category } = useParams()

	const { activeGender, categories } = useSelector((state) => state.navigation)
	const genderData = categories[activeGender]

	useEffect(() => {
		dispatch(setActiveGender(gender))
	}, [gender, dispatch])

	useEffect(() => {
		if (gender && category) {
			dispatch(fetchCategory({ gender, category }))
			return
		}

		if (gender) {
			dispatch(fetchGender(gender))
			return
		}
	}, [gender, category, dispatch])

	return !category ? (
		<>
			<Banner data={genderData?.banner} />
			<Goods categoryData={genderData?.list.find((item) => item.slug === category)} />
		</>
	) : (
		<Goods categoryData={genderData?.list.find((item) => item.slug === category)} />
	)
}
