import { NavLink } from 'react-router-dom'
import { Container } from '../Layout/Container/Container'

import style from './Banner.module.scss'
import { API_URL } from '../../const'
import { useEffect, useState } from 'react'
import { useMedia } from 'react-use'

export const Banner = ({ data }) => {
	const isMobile = useMedia('(max-width: 540px)')
	const isTablet = useMedia('(max-width: 768px)')
	const isLaptop = useMedia('(max-width: 1024px)')

	const [bg, setBg] = useState('')

	useEffect(() => {
		if (isMobile) {
			setBg(`${API_URL}/${data?.bg.mobile}`)
		} else if (isTablet) {
			setBg(`${API_URL}/${data?.bg.tablet}`)
		} else if (isLaptop) {
			setBg(`${API_URL}/${data?.bg.laptop}`)
		} else {
			setBg(`${API_URL}/${data?.bg.desktop}`)
		}
	}, [isMobile, isTablet, isLaptop, data])

	return (
		data && (
			<section className={style.banner} style={{ backgroundImage: `url(${bg})` }}>
				<Container>
					<div className={style.content}>
						<h2 className={style.title}>{data.description}</h2>
						<NavLink className={style.link} to={`/product/${data.id}`}>
							Перейти
						</NavLink>
					</div>
				</Container>
			</section>
		)
	)
}
