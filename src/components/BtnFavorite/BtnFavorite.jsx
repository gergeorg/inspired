import { useDispatch, useSelector } from 'react-redux'

import cn from 'classnames'

import { addToTavorite, removeToTavorite } from '../../features/favoritesSlice'

import { ReactComponent as Favorite } from '../../assets/favorite.svg'

import style from './BtnFavorite.module.scss'

export const BtnFavorite = ({ id }) => {
	const dispatch = useDispatch()

	const isFavorite = useSelector((state) => state.favorites.includes(id))

	const handleToggleFavorite = () => {
		if (isFavorite) {
			dispatch(removeToTavorite({ id }))
		} else {
			dispatch(addToTavorite({ id }))
		}
	}

	return (
		<button
			aria-label='Добавить в избранное'
			className={isFavorite ? cn(style.favorite, style.active) : style.favorite}
			type='button'
			onClick={handleToggleFavorite}
		>
			<Favorite />
		</button>
	)
}
