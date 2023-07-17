import { useLocation, useNavigate, useRouteError } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useRef } from 'react'

import { fetchColors } from '../features/colorSlice'
import { fetchNavigation } from '../features/navigationSlice'

import { Container } from '../components/Layout/Container/Container'

import style from './ErrorPage.module.scss'

export const ErrorPage = () => {
	const routeError = useRouteError()
	const { status } = useSelector((state) => state.statusServer)

	const location = useLocation()
	const navigate = useNavigate()
	const dispatch = useDispatch()

	const timerIdRef = useRef(null)

	useEffect(() => {
		if (status && location.pathname === '/404') {
			navigate('/')
		}
	}, [status, location, navigate])

	useEffect(() => {
		if (!status && location.pathname === '/404') {
			clearInterval(timerIdRef.current)

			timerIdRef.current = setInterval(() => {
				dispatch(fetchColors())
				dispatch(fetchNavigation())
			}, 5000)
		}

		return () => {
			clearInterval(timerIdRef.current)
		}
	}, [dispatch, status, location])

	return (
		<Container className={style.error}>
			<h2 className={style.title}>Произошла ошибка, попробуйте позже</h2>
			<p className={style.message}>{routeError?.message ?? 'Неизвестная ошибка '}</p>
		</Container>
	)
}
