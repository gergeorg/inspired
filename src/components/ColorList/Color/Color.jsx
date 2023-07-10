import { useEffect, useRef } from 'react'

import cn from 'classnames'
import style from './Color.module.scss'

export const Color = ({ color, check }) => {
	const colorRef = useRef(null)

	useEffect(() => {
		colorRef.current.style.setProperty('--data-color', color)
	}, [color])

	return <li className={cn(style.color, check ? style.colorCheck : '')} ref={colorRef} />
}
