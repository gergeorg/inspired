import { useSelector } from 'react-redux'

import style from './ColorList.module.scss'

import { Color } from './Color/Color'
import { ColorLabel } from './ColorLabel/ColorLabel'

export const ColorList = ({ colors, selectedColor, handleColorChange }) => {
	const { colorList } = useSelector((state) => state.color)

	return handleColorChange ? (
		<div className={style.colorList}>
			{colors?.map((id, i) => {
				const color = colorList.find((color) => color.id === id)
				return (
					<ColorLabel
						key={id}
						check={!i}
						color={color}
						handleColorChange={handleColorChange}
						selectedColor={selectedColor}
					/>
				)
			})}
		</div>
	) : (
		<ul className={style.colorList}>
			{colors.map((id, i) => {
				const color = colorList.find((color) => color.id === id)
				return <Color key={id} check={!i} color={color?.code} />
			})}
		</ul>
	)
}
