import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'

import { MainPage } from './components/MainPage/MainPage'
import { Root } from './routes/Root'
import { ErrorPage } from './ErrorPage/ErrorPage'

import { fetchNavigation } from './features/navigationSlice'
import { fetchColors } from './features/colorSlice'

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path='/' element={<Root />}>
			<Route index element={<MainPage />} />
			<Route path='catalog/:gender/:category?' element={<MainPage />} />
			<Route path='*' element={<ErrorPage />} />
		</Route>
	)
)

export const App = () => {
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(fetchNavigation())
		dispatch(fetchColors())
	}, [dispatch])

	return <RouterProvider router={router}></RouterProvider>
}
