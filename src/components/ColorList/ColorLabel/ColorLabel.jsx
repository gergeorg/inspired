import { useEffect, useRef } from 'react'

import style from './ColorLabel.module.scss'

export const ColorLabel = ({ color, check, selectedColor, handleColorChange }) => {
	const colorRef = useRef(null)

	useEffect(() => {
		colorRef.current.style.setProperty('--data-color', color?.code)
	}, [color])

	return (
		<label ref={colorRef} className={style.color}>
			<input
				checked={selectedColor ? selectedColor === color?.title : check}
				className={style.input}
				name='color'
				type='radio'
				value={color?.title}
				onChange={handleColorChange}
			/>
			<span className={style.colorCheck} />
		</label>
	)
}
