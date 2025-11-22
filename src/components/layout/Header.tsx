import { Link, NavLink } from 'react-router-dom'
import { useState, useEffect, useRef } from 'react'
import logo from '../../assets/logo.png'

export default function Header() {
	const [open, setOpen] = useState(false)
	const menuRef = useRef<HTMLDivElement | null>(null)
	const buttonRef = useRef<HTMLButtonElement | null>(null)

	function openMenu() {
		setOpen(true)
	}

	function closeMenu() {
		// move focus back to the toggle button before hiding the menu
		try {
			buttonRef.current?.focus()
		} catch (e) {
			// ignore
		}
		setOpen(false)
	}

	function toggleMenu() {
		if (open) closeMenu()
		else openMenu()
	}

	useEffect(() => {
		function onKey(e: KeyboardEvent) {
			if (e.key === 'Escape') setOpen(false)
		}
		function onClick(e: MouseEvent) {
			const target = e.target as Node
			// if click is inside the menu or on the toggle button, ignore
			if (menuRef.current && menuRef.current.contains(target)) return
			if (buttonRef.current && buttonRef.current.contains(target)) return
			setOpen(false)
		}
		document.addEventListener('keydown', onKey)
		document.addEventListener('click', onClick)

		return () => {
			document.removeEventListener('keydown', onKey)
			document.removeEventListener('click', onClick)
		}
	}, [])


	return (
		<header className="sticky top-0 z-50 bg-white backdrop-blur-sm border-b border-gray-200 shadow-sm">
			<div className="container mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
				<Link to="/" className="flex items-center gap-3">
					<img
						src={logo}
						alt="R K Enterprises Logo"
						decoding="async"
						fetchPriority="high"
						className="h-12 w-auto"
						onError={(e) => {
							// Fallback if logo doesn't exist or fails to load
							const target = e.target as HTMLImageElement
							if (target.nextElementSibling) return
							const fallback = document.createElement('div')
							fallback.className = 'h-12 w-32 bg-primary rounded flex items-center justify-center'
							fallback.innerHTML = '<span class="text-white font-heading font-bold text-lg">RK</span>'
							target.parentElement?.insertBefore(fallback, target)
							target.style.display = 'none'
						}}
					/>
					<span className="font-heading font-bold text-xl text-[#222222] hidden sm:inline">R K Enterprises</span>
				</Link>

				{/* Desktop nav */}
				<nav className="hidden md:flex items-center gap-3">
					<Nav to="/" label="Home" />
					<Nav to="/about" label="About Us" />
					<Nav to="/products" label="Products & Services" />
					<Nav to="/blog" label="Blog" />
					<Nav to="/contact" label="Contact Us" />
				</nav>

				{/* Mobile actions: only hamburger and logo (no top Contact text) */}
				<div className="flex items-center gap-3 md:hidden">
					<button
						ref={buttonRef}
						onClick={toggleMenu}
						aria-expanded={open}
						aria-label={open ? 'Close menu' : 'Open menu'}
						className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-primary"
					>
						<svg className={`h-6 w-6 transition-transform ${open ? 'transform rotate-90' : ''}`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
							{open ? (
								<path strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
							) : (
								<path strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
							)}
						</svg>
					</button>
				</div>
			</div>

			{/* Mobile menu - backdrop + off-canvas drawer (left) */}
			{/* Backdrop */}
			<div
				className={`fixed inset-0 z-50 md:hidden pointer-events-none transition-opacity duration-300 ${open ? 'opacity-100 pointer-events-auto' : 'opacity-0'}`}
				aria-hidden={!open}
			>
				<div className="absolute inset-0 bg-black/50" />
			</div>

			{/* Off-canvas drawer (right) */}
			<div
				ref={menuRef}
				role="dialog"
				aria-modal={open}
				className={`fixed inset-y-0 right-0 z-[100] md:hidden w-80 max-w-full transform transition-transform duration-300 ${open ? 'translate-x-0' : 'translate-x-full'}`}
				aria-hidden={!open}
			>
				<div className="h-full bg-white opacity-100 border-l border-gray-200 shadow-lg">
					<div className="h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col">
						{/* Close button top-right inside drawer */}
						<div className="relative">
							<button
								onClick={closeMenu}
								aria-label="Close menu"
								className="absolute right-0 -mr-2 -mt-2 p-2 rounded-md text-gray-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-primary"
							>
								<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
									<path strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
								</svg>
							</button>
						</div>

						<nav className="flex flex-col gap-4 mt-6">
							<NavLinkMobile to="/" onClick={closeMenu}>Home</NavLinkMobile>
							<NavLinkMobile to="/about" onClick={closeMenu}>About Us</NavLinkMobile>
							<NavLinkMobile to="/products" onClick={closeMenu}>Products & Services</NavLinkMobile>
							<NavLinkMobile to="/blog" onClick={closeMenu}>Blog</NavLinkMobile>
							<NavLinkMobile to="/contact" onClick={closeMenu}>Contact Us</NavLinkMobile>
						</nav>

						<div className="mt-auto pt-6">
							<div className="flex flex-col gap-3">
								<Link to="/products" onClick={closeMenu} className="block w-full text-center bg-primary text-white px-6 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors">
									Browse Products
								</Link>
								<Link to="/contact" onClick={closeMenu} className="block w-full text-center bg-primary text-white px-6 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors">
									Get a Quote
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</header>
	)
}

function Nav({ to, label }: { to: string; label: string }) {
	return (
		<NavLink
			to={to}
			className={({ isActive }) =>
				`inline-flex items-center justify-center rounded-full px-4 py-2 font-medium text-sm transition-colors duration-300 ease-soft ${
					isActive
						? 'bg-accent text-accent-foreground'
						: 'bg-primary text-white hover:bg-accent hover:text-accent-foreground'
				}`
			}
			aria-label={label}
		>
			{label}
		</NavLink>
	)
}

function NavLinkMobile({ to, children, onClick }: { to: string; children: React.ReactNode; onClick?: () => void }) {
	return (
		<NavLink
			to={to}
			onClick={onClick}
			className={({ isActive }) =>
				`block w-full text-left px-6 py-4 rounded text-lg font-semibold transition-colors duration-200 ${
					isActive ? 'bg-primary text-white' : 'text-[#222222] hover:bg-gray-100'
				}`
			}
		>
			{children}
		</NavLink>
	)
}

