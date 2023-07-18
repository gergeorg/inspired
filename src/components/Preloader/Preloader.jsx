import { Puff } from 'react-loader-spinner'

import style from './Preloader.module.scss'

export const Preloader = () => (
	<div className={style.preloader}>
		<Puff ariaLabel='puff-loading' color='#8a8a8a' height={140} width={140} />
	</div>
)
