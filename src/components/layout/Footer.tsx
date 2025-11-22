import { Link } from 'react-router-dom'
import logo from '../../assets/logo.png'

export default function Footer() {
	return (
		<footer className="bg-gray-100 no-justify">
			<div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
				{/* Column 1: Logo and About */}
				<div>
					<img 
						src={logo} 
						alt="R K Enterprises Logo" 
						loading="lazy"
						decoding="async"
						className="h-10 w-auto mb-3"
						onError={(e) => {
						const target = e.target as HTMLImageElement;
						if (target.nextElementSibling) return;
						const fallback = document.createElement('div');
						fallback.className = 'h-10 w-28 bg-primary rounded flex items-center justify-center mb-3';
						fallback.innerHTML = '<span class="text-white font-heading font-bold text-sm">RK</span>';
						target.parentElement?.insertBefore(fallback, target);
						target.style.display = 'none';
					}}
					/>
					<p className="text-xs text-[#222222]/70 leading-relaxed">
						Salem's leading B2B stationery wholesaler for schools, colleges, and corporate clients for over 15 years.
					</p>
				</div>

				{/* Column 2: Quick Links */}
				<div>
					<h3 className="font-heading font-semibold text-base mb-3 text-[#222222]">Quick Links</h3>
					<ul className="space-y-1.5 text-xs">
						<li><Link to="/" className="text-[#222222]/70 hover:text-primary transition-colors">Home</Link></li>
						<li><Link to="/about" className="text-[#222222]/70 hover:text-primary transition-colors">About Us</Link></li>
						<li><Link to="/products" className="text-[#222222]/70 hover:text-primary transition-colors">Products & Services</Link></li>
						<li><Link to="/blog" className="text-[#222222]/70 hover:text-primary transition-colors">Blog</Link></li>
						<li><Link to="/contact" className="text-[#222222]/70 hover:text-primary transition-colors">Contact Us</Link></li>
					</ul>
				</div>

				{/* Column 3: Our Group of Companies */}
				<div>
					<h3 className="font-heading font-semibold text-base mb-3 text-[#222222]">Our Group of Companies</h3>
					<ul className="space-y-1.5 text-xs text-[#222222]/70">
						<li>RK ENTERPRISES</li>
						<li>RK WINGS ENTERPRISES</li>
						<li>TAMILAN NOTE BOOKS</li>
						<li>ARAM CHIT FUND PVT.LTD</li>
						<li>CORE FITNESS</li>
					</ul>
				</div>

				{/* Column 4: Contact Info */}
				<div>
					<h3 className="font-heading font-semibold text-base mb-3 text-[#222222]">Contact Info</h3>
					<div className="space-y-2 text-xs text-[#222222]/70">
						<div>
							<p className="font-semibold text-[#222222] mb-0.5">HEAD OFFICE :(SALEM)</p>
							<p className="leading-tight">N0 - 69-1, Palaniappa Nagar,</p>
							<p className="leading-tight">Near KPN Bunk,</p>
							<p className="leading-tight">SALEM - 636 005</p>
							<p className="leading-tight">Ph: +91 427 2445299,</p>
							<p className="leading-tight">+91 97871 90999 , 97876 07888</p>
						</div>
						<div className="pt-1.5">
							<p className="font-semibold text-[#222222] mb-0.5">Branch Office (Tirunelveli)</p>
							<p className="leading-tight">No - 48, SMA Nagar, Gandhi Nagar</p>
							<p className="leading-tight">TIRUNELVELI - 627 008</p>
							<p className="leading-tight">Ph: +91 97871 20999</p>
						</div>
						<div className="pt-1.5">
							<p className="font-semibold text-[#222222] mb-0.5">Branch Office (Bengaluru)</p>
							<p className="leading-tight">No - 31, 1st Main, 1st Cross, Mysore Road</p>
							<p className="leading-tight">Deepanjali Nagar, BENGALURU - 560 026</p>
						</div>
						<div className="pt-1.5">
							<p className="leading-tight">Email: rkenterprisessalem@gmail.com</p>
						</div>
					</div>
				</div>
			</div>
			{/* Sub-Footer */}
			<div className="border-t border-gray-300 bg-gray-100">
				<div className="container mx-auto px-4 sm:px-6 lg:px-8 py-3">
					<p className="text-xs text-[#222222]/60 text-center">
						© 2025 R K Enterprises. All rights reserved.
					</p>
				</div>
			</div>
		</footer>
	)
}

