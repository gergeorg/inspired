import { createSlice } from '@reduxjs/toolkit'

const initialState = localStorage.getItem('favorite') ? JSON.parse(localStorage.getItem('favorite')) : []

const favoritesSlice = createSlice({
	name: 'favorites',
	initialState,
	reducers: {
		addToTavorite(state, action) {
			const id = action.payload.id
			if (!state.includes.id) {
				state.push(id)
			}
			localStorage.setItem('favorite', JSON.stringify(state))
		},

		removeToTavorite(state, action) {
			const id = action.payload.id
			const index = state.indexOf(id)
			if (index !== -1) {
				state.splice(index, 1)
			}
			localStorage.setItem('favorite', JSON.stringify(state))
		},
	},
})

export const { addToTavorite, removeToTavorite } = favoritesSlice.actions
export default favoritesSlice.reducer
