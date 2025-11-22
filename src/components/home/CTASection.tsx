import NoSSRMotion from '../ui/NoSSRMotion'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

export default function CTASection() {
	return (
		<section className="w-full bg-primary py-12 md:py-16">
			<div className="container mx-auto px-4 sm:px-6 lg:px-8">
				<NoSSRMotion 
					data-aos="zoom-in"
					className="max-w-4xl mx-auto text-center"
				>
					<h3 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
						Looking for a Reliable B2B Partner?
					</h3>
					<p className="text-base md:text-lg text-white/90 mb-8 leading-relaxed">
						Partner with Salem's most trusted stationery wholesaler. Get competitive pricing, quality products, and exceptional service for your institution or business.
					</p>
					<div className="flex flex-col sm:flex-row justify-center items-center gap-4">
						<Link 
							to="/contact" 
							className="bg-accent text-[#222222] px-8 py-3 rounded-lg font-semibold text-sm hover:bg-accent/90 transition-all duration-300 flex items-center gap-2 shadow-lg"
						>
							Contact Us Today
							<ArrowRight className="h-4 w-4" />
						</Link>
						<Link 
							to="/products" 
							className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold text-sm hover:bg-white/10 transition-all duration-300"
						>
							View All Products
						</Link>
					</div>
				</NoSSRMotion>
			</div>
		</section>
	)
}

