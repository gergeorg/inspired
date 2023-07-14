import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'

import { MainPage } from './components/MainPage/MainPage'
import { Root } from './routes/Root'
import { ErrorPage } from './ErrorPage/ErrorPage'

import { fetchNavigation } from './features/navigationSlice'
import { fetchColors } from './features/colorSlice'
import { ProductPage } from './components/ProductPage/ProductPage'
import { CartPage } from './components/CartPage/CartPage'
import { FavoritePage } from './components/FavoritePage/FavoritePage'

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route element={<Root />} path='/'>
			<Route index element={<MainPage />} />
			<Route element={<MainPage />} path='/catalog/:gender/:category?' />
			<Route element={<ProductPage />} path='/product/:id' />
			<Route element={<CartPage />} path='/cart' />
			<Route element={<FavoritePage />} path='/favorite' />
			<Route element={<ErrorPage />} path='*' />
		</Route>,
	),
)

export const App = () => {
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(fetchNavigation())
		dispatch(fetchColors())
	}, [dispatch])

	return <RouterProvider router={router} />
}
