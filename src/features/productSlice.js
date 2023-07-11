import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { GOODS_URL } from '../const'

export const fetchProduct = createAsyncThunk('product/fetchProduct', async (id) => {
	const res = await fetch(`${GOODS_URL}/${id}`)
	return await res.json()
})

const productSlice = createSlice({
	name: 'product',
	initialState: {
		status: 'idle',
		error: null,
		product: {},
	},
	extraReducers: (builder) => {
		builder
			.addCase(fetchProduct.pending, (state) => {
				state.status = 'loading'
			})

			.addCase(fetchProduct.fulfilled, (state, action) => {
				state.status = 'success'
				state.product = action.payload
				// state.genderList = Object.keys(action.payload)
			})

			.addCase(fetchProduct.rejected, (state, action) => {
				state.status = 'failed'
				state.error = action.error.message
			})
	},
})

// export const { setActiveGender } = navigationSlice.actions

export default productSlice.reducer
