import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import AOS from 'aos'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import ScrollToTop from './components/layout/ScrollToTop'
import BackButton from './components/ui/BackButton'

function App() {
	const location = useLocation()

	useEffect(() => {
		AOS.init({
			duration: 700,
			easing: 'ease-out-cubic',
			offset: 50,
			once: true,
		})
	}, [])

	useEffect(() => {
		AOS.refresh()
	}, [location.pathname])

	return (
		<div className="min-h-screen flex flex-col bg-white">
			<Header />
			<ScrollToTop />
			<main className="flex-1 bg-white" tabIndex={-1}>
				<ScrollToTop />
				<BackButton />
				<Outlet />
			</main>
			<Footer />
		</div>
	)
}

export default App
