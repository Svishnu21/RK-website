import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import 'aos/dist/aos.css'
import App from './App.tsx'

const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		children: [
			{ path: '/', async lazy() { const m = await import('./pages/Home.tsx'); return { Component: m.default } }, hydrateFallbackElement: <div /> },
			{ path: '/products', async lazy() { const m = await import('./pages/Products.tsx'); return { Component: m.default } }, hydrateFallbackElement: <div /> },
			{ path: '/about', async lazy() { const m = await import('./pages/About.tsx'); return { Component: m.default } }, hydrateFallbackElement: <div /> },
			{ path: '/blog', async lazy() { const m = await import('./pages/Blog.tsx'); return { Component: m.default } }, hydrateFallbackElement: <div /> },
			{ path: '/blog/why-schools-in-salem-trust-rk-enterprises', async lazy() { const m = await import('./pages/blog/WhySchoolsTrust.tsx'); return { Component: m.default } }, hydrateFallbackElement: <div /> },
			{ path: '/blog/how-rk-enterprises-delivers-affordable-bulk-office-supplies', async lazy() { const m = await import('./pages/blog/AffordableBulkOfficeSupplies.tsx'); return { Component: m.default } }, hydrateFallbackElement: <div /> },
			{ path: '/blog/top-10-stationery-items-every-school-in-salem-buys', async lazy() { const m = await import('./pages/blog/Top10StationeryItems.tsx'); return { Component: m.default } }, hydrateFallbackElement: <div /> },
			{ path: '/blog/why-choosing-a-local-wholesaler-like-rk-enterprises', async lazy() { const m = await import('./pages/blog/LocalWholesalerSavings.tsx'); return { Component: m.default } }, hydrateFallbackElement: <div /> },
			{ path: '/blog/ultimate-guide-to-bulk-stationery-procurement', async lazy() { const m = await import('./pages/blog/BulkProcurementGuide.tsx'); return { Component: m.default } }, hydrateFallbackElement: <div /> },
			{ path: '/blog/how-rk-enterprises-creates-custom-branded-stationery', async lazy() { const m = await import('./pages/blog/CustomBrandedStationery.tsx'); return { Component: m.default } }, hydrateFallbackElement: <div /> },
			{ path: '/blog/fastest-stationery-wholesaler-in-salem', async lazy() { const m = await import('./pages/blog/FastestWholesalerSalem.tsx'); return { Component: m.default } }, hydrateFallbackElement: <div /> },
			{ path: '/blog/faq-buying-in-bulk-from-rk-enterprises', async lazy() { const m = await import('./pages/blog/BulkBuyingFAQs.tsx'); return { Component: m.default } }, hydrateFallbackElement: <div /> },
			{ path: '/blog/how-rk-enterprises-helps-businesses-build-brand', async lazy() { const m = await import('./pages/blog/BusinessBrandingStationery.tsx'); return { Component: m.default } }, hydrateFallbackElement: <div /> },
			{ path: '/blog/annual-stationery-planning-made-easy', async lazy() { const m = await import('./pages/blog/AnnualPlanningSchools.tsx'); return { Component: m.default } }, hydrateFallbackElement: <div /> },
			{ path: '/contact', async lazy() { const m = await import('./pages/Contact.tsx'); return { Component: m.default } }, hydrateFallbackElement: <div /> },
			{ path: '*', async lazy() { const m = await import('./pages/NotFound.tsx'); return { Component: m.default } }, hydrateFallbackElement: <div /> },
		],
	},
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
