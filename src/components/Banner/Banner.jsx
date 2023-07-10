import { NavLink } from 'react-router-dom'
import { Container } from '../Layout/Container/Container'

import style from './Banner.module.scss'
import { API_URL } from '../../const'
import { useEffect } from 'react'
import { useMedia } from 'react-use'

export const Banner = ({ data }) => {
	const isMobile = useMedia('(max-width: 540px)')
	const isTablet = useMedia('(max-width: 768px)')
	const isLaptop = useMedia('(max-width: 1024px)')

	const backgroundImage = isMobile ? data?.bg.mobile : isTablet ? data?.bg.tablet : isLaptop ? data?.bg.laptop : data?.bg.desktop

	// useEffect(() => {
	// 	if (isMobile) {
	// 		backgroundImage = data?.bg.mobile
	// 	} else if (isTablet) {
	// 		backgroundImage = data?.bg.tablet
	// 	} else if (isLaptop) {
	// 		backgroundImage = data?.bg.laptop
	// 	} else {
	// 		backgroundImage = data?.bg.desktop
	// 	}
	// }, [isMobile, isTablet, isLaptop])

	return (
		data && (
			<section className={style.banner} style={{ backgroundImage: `url(${API_URL}/${backgroundImage})` }}>
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
