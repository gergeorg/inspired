import { ErrorMessage, Field, Form, Formik } from 'formik'
import { PatternFormat } from 'react-number-format'
import * as Yup from 'yup'
import { useDispatch } from 'react-redux'

import { sendOrder } from '../../../features/cartSlice.js'

import { Container } from '../../Layout/Container/Container.jsx'

import style from './Order.module.scss'

export const Order = ({ cartItems }) => {
	const dispatch = useDispatch()
	const handleSubmitOrder = (values) => {
		dispatch(sendOrder({ order: cartItems, values }))
	}
	const validationSchema = Yup.object({
		fio: Yup.string().required('Заполните ФИО'),
		address: Yup.string().test('deliveryTest', 'Введите адрес доставки', function (value) {
			return this.parent.delivery === 'delivery' ? !!value : true
		}),
		phone: Yup.string()
			.required('Заполните номер телефона')
			.matches(/^\+\d{1}\(\d{3}\)\d{3}-\d{2}-\d{2}$/, 'Некорректный номер телефона'),
		email: Yup.string().email('Некорректный формат email').required('Заполните email'),
		delivery: Yup.string().required('Выберите способ доставки'),
	})

	return (
		<section>
			<Container>
				<h2 className={style.title}>Оформление заказа</h2>

				<Formik
					initialValues={{
						fio: '',
						address: '',
						phone: '',
						email: '',
						delivery: '',
					}}
					onSubmit={handleSubmitOrder}
					validationSchema={validationSchema}
				>
					<Form className={style.form}>
						<fieldset className={style.personal}>
							<label className={style.label}>
								<Field className={style.input} name='fio' placeholder='ФИО*' type='text' />
								<ErrorMessage className={style.error} component={'span'} name='fio' />
							</label>

							<label className={style.label}>
								<Field className={style.input} name='address' placeholder='Адрес доставки' type='text' />
								<ErrorMessage className={style.error} component={'span'} name='address' />
							</label>

							<label className={style.label}>
								<Field
									as={PatternFormat}
									className={style.input}
									format='+7(###)###-##-##'
									mask='_'
									name='phone'
									placeholder='Телефон *'
								/>
								<ErrorMessage className={style.error} component={'span'} name='phone' />
							</label>

							<label className={style.label}>
								<Field className={style.input} name='email' placeholder='Email*' type='email' />
								<ErrorMessage className={style.error} component={'span'} name='email' />
							</label>
						</fieldset>

						<fieldset className={style.radioList}>
							<label className={style.radoi}>
								<Field className={style.radioInput} name='delivery' type='radio' value='delivery' />
								<span>Доставка</span>
							</label>
							<label className={style.radoi}>
								<Field className={style.radioInput} name='delivery' type='radio' value='self' />
								<span>Самовывоз</span>
							</label>
							<ErrorMessage className={style.error} component={'span'} name='delivery' />
						</fieldset>

						<button className={style.submit} type='submit'>
							Оформить
						</button>
					</Form>
				</Formik>
			</Container>
		</section>
	)
}
