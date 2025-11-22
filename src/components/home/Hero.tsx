import NoSSRMotion from '../ui/NoSSRMotion'
import { Link } from 'react-router-dom'
import imgBanner from '../../assets/products/home banner.jpg'

export default function Hero() {
	return (
		<>
			<section className="relative flex items-center bg-white py-12 md:py-16">
				<div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
					<div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
						{/* Left Column - Left Aligned */}
						<NoSSRMotion
							data-aos="fade-right"
							data-aos-duration="800"
							className="text-left"
						>
							<h1 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-[#222222] leading-tight">
								All Your <span className="text-primary">STATIONERY</span> Needs
							</h1>
							<p className="mt-4 text-base md:text-lg text-[#222222]/70 leading-relaxed">
								Salem's leading B2B wholesaler for schools, colleges, and corporate clients for over 15 years
							</p>
							<div className="mt-6 flex flex-col sm:flex-row items-start gap-3">
								<Link 
									to="/products" 
									className="bg-primary text-white px-6 py-2.5 rounded-lg font-medium text-sm shadow-sm hover:bg-primary/90 transition-all duration-300"
								>
									Browse Products
								</Link>
								<Link 
									to="/contact" 
									className="hidden md:inline-flex bg-white border-2 border-primary text-primary px-6 py-2.5 rounded-lg font-medium text-sm hover:bg-primary/5 transition-all duration-300"
								>
									Get a Quote
								</Link>
							</div>
						</NoSSRMotion>

						{/* Right Column - Single image inside rounded, clipped container */}
						<NoSSRMotion
							data-aos="fade-left"
							data-aos-duration="800"
							data-aos-delay="150"
							className="relative flex justify-center lg:justify-end"
						>
							<div className="w-full max-w-sm md:max-w-md lg:max-w-lg mx-auto lg:mx-0 rounded-3xl overflow-hidden shadow-lg aspect-[4/3]">
								<div className="w-full h-full flex items-center justify-center p-2 sm:p-3">
									<img
										src={imgBanner}
										alt="Stationery banner"
										decoding="async"
										fetchPriority="high"
										className="max-w-[100%] max-h-[100%] object-cover object-center"
									/>
								</div>
							</div>
						</NoSSRMotion>
					</div>
				</div>
			</section>

			{/* Trust Bar removed — existing trust UI used elsewhere */}
		</>
	)
}

