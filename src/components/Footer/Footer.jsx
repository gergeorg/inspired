import { Container } from '../Layout/Container/Container'

import { Category } from './Category/Category'
import { Social } from './Social/Social'
import { Contacts } from './Contacts/Contacts'
import { Copyright } from './Copyright/Copyright'
import { Development } from './Development/Development'

import style from './Footer.module.scss'

export const Footer = () => (
	<footer>
		<Container>
			<div className={style.container}>
				<Category />
				<Social />
				<Contacts />
				<Copyright />
				<Development />
			</div>
		</Container>
	</footer>
)
