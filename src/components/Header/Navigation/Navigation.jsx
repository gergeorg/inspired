import { Category } from './Category/Category'
import { Gender } from './Gender/Gender'
import { Container } from '../../Layout/Container/Container'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { setActiveGender } from '../../../features/navigationSlice'

import style from './Navigation.module.scss'

export const Navigation = () => {
	const dispatch = useDispatch()
	const location = useLocation()
	const gender = location.pathname.split('/')[1] || 'women'

	useEffect(() => {
		dispatch(setActiveGender(gender))
	}, [gender, dispatch])

	return (
		<nav className={style.navigation}>
			<Container>
				<Gender />
				<Category />
			</Container>
		</nav>
	)
}
