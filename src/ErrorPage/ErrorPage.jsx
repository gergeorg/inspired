import { useRouteError } from 'react-router-dom'

import { Container } from '../components/Layout/Container/Container'

import style from './ErrorPage.module.scss'

export const ErrorPage = () => {
	const error = useRouteError()

	return (
		<Container className={style.error}>
			<h2>Ошибка 404</h2>
			<p>{error?.message ?? 'Неизвестная ошибка '}</p>
		</Container>
	)
}
