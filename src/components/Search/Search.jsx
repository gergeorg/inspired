import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { ErrorMessage, Field, Form, Formik } from 'formik'
import * as Yup from 'yup'

import { toggleSearch } from '../../features/searchSlice'

import { Container } from '../Layout/Container/Container'

import style from './Search.module.scss'

export const Search = () => {
	const dispatch = useDispatch()
	const { openSearch } = useSelector((state) => state.search)
	const initialValues = {
		search: '',
	}

	const validationSchema = Yup.object({
		search: Yup.string().required('Поле обязательно для заполения'),
	})

	const navigate = useNavigate()

	const handleSubmit = ({ search }, { resetForm }) => {
		if (search.trim()) {
			navigate(`/search?q=${search}`)
			resetForm()
			dispatch(toggleSearch(false))
		}
	}

	return (
		openSearch && (
			<div className={style.search}>
				<Container>
					<Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
						<Form className={style.form}>
							<Field className={style.input} name='search' placeholder='Найти...' type='search' />
							<ErrorMessage className={style.error} component={'span'} name='search' />
							<button className={style.btn} type='submit'>
								Искать
							</button>
						</Form>
					</Formik>
				</Container>
			</div>
		)
	)
}
