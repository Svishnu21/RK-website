import { useEffect, useRef, useState } from 'react'
import SEO from '../components/seo/SEO'
import NoSSRMotion from '../components/ui/NoSSRMotion'
import { Building2, Warehouse, Package } from 'lucide-react'
import logoOne from '../assets/logo1.png'
import logoTwo from '../assets/logo2.png'
import logoThree from '../assets/logo3.png'
import logoFour from '../assets/logo4.jpg'
import logoFive from '../assets/logo5.jpg'
// Director images (use existing assets as placeholders)
import directorA from '../assets/director1.png'
import directorB from '../assets/director2.png'
// Infrastructure gallery images (replaced with new carousel assets)
import corousal1 from '../assets/corousal1.png'
import corousal2 from '../assets/corousal2.png'
import corousal3 from '../assets/corousal3.png'
import corousal4 from '../assets/corousal4.png'

function Carousel({ images, interval = 3000 }: { images: string[]; interval?: number }) {
	const [idx, setIdx] = useState(0)
	const len = images.length
	const timerRef = useRef<number | null>(null)
	const containerRef = useRef<HTMLDivElement | null>(null)

	useEffect(() => {
		start()
		return stop
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [idx])

	function start() {
		stop()
		timerRef.current = window.setTimeout(() => {
			setIdx((i) => (i + 1) % len)
		}, interval)
	}

	function stop() {
		if (timerRef.current) {
			clearTimeout(timerRef.current)
			timerRef.current = null
		}
	}

	return (
		<div className="mt-6">
			<div
				className="relative w-full overflow-hidden rounded-xl"
				onMouseEnter={stop}
				onMouseLeave={start}
				ref={containerRef}
			>
				<div
					className="flex transition-transform duration-700 ease-in-out"
					style={{ width: `${len * 100}%`, transform: `translateX(-${(idx * 100) / len}%)` }}
				>
						{images.map((src, i) => (
							<div key={i} style={{ width: `${100 / len}%` }} className="flex-shrink-0">
								<div className="w-full h-80 md:h-[36rem] flex items-center justify-center bg-gray-100">
									<img src={src} alt={`Infrastructure ${i + 1}`} className="max-h-64 md:max-h-[34rem] max-w-full object-contain" loading="lazy" decoding="async" />
								</div>
							</div>
						))}
				</div>

				{/* indicators */}
				<div className="absolute left-1/2 -translate-x-1/2 bottom-3 flex gap-2">
					{images.map((_, i) => (
						<button
							key={i}
							aria-label={`Go to slide ${i + 1}`}
							className={`h-2 w-8 rounded-full ${i === idx ? 'bg-primary' : 'bg-white/60'}`}
							onClick={() => setIdx(i)}
						/>
					))}
				</div>
			</div>
		</div>
	)
}

export default function About() {
	const machinery = [
		'Folding Machine',
		'Pinning Machine',
		'Guillotine Machine',
		'Spine Squaring Machine',
		'Section Sewing Machine',
		'Center Sewing Machine',
		'Spine Tape Machine',
		'Automatic Punching Machine',
		'Spiral Binding Line',
		'Wire-O Binding Line',
		'Laminator',
		'Shrink Packing Machine',
	]

	const groupCompanies = [
		{ name: 'RKRD WINGS INDIA PVT LTD', logo: logoOne },
		{ name: 'RK ENTERPRISES', logo: logoTwo },
		{ name: 'RK WINGS ENTERPRISES', logo: logoThree },
		{ name: 'GROUP LOGO 4', logo: logoFour },
		{ name: 'GROUP LOGO 5', logo: logoFive },
	]

	return (
		<div className="bg-white">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
			<SEO title="About Us | R K Enterprises" description="15+ years of excellence in stationery wholesale and manufacturing headquartered in Salem, Tamil Nadu." />

			{/* Hero / Intro with Directors */}
			<section className="pt-20 pb-8 bg-white">
				<div>
					<NoSSRMotion data-aos="fade-up" className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
						{/* Left Column: About & Our Story */}
						<div>
							<h1 className="text-4xl md:text-5xl font-heading font-bold text-[#222222]">About Us</h1>
							<p className="mt-4 text-lg text-[#222222]/70 max-w-xl">
								With over 15 years of excellence, R K Enterprises is Salem's leading B2B wholesaler and manufacturer. We specialize in supplying high-quality stationery to schools, colleges, and corporate clients across Tamil Nadu, building strong bonds through competence and trust.
							</p>
							<div className="mt-6">
								<h2 className="text-2xl font-heading font-semibold text-[#222222] mb-3">Our Story</h2>
								<p className="text-[#222222]/70 leading-relaxed">
									Our journey began with a vision to provide comprehensive stationery solutions under one roof. Starting as a wholesale supplier, we have expanded into manufacturing with our own brands, 'Tamilan' and 'Wings'. We operate from a massive 20,000 sq.ft infrastructure, utilizing high-end machinery to create top-class products. Today, we are proud to serve over 1,000 happy clients and are constantly innovating to meet the evolving needs of the education and business sectors.
								</p>
							</div>
						</div>

						{/* Right Column: Directors */}
						<div className="w-full">
							<h3 className="text-2xl font-heading font-semibold text-[#222222] mb-4 text-center">Meet Our Directors</h3>
							<div className="grid grid-cols-2 gap-4">
								<figure className="text-center">
									<img src={directorA} alt="K . ESHAQ" className="w-40 h-52 object-cover rounded-lg shadow-md mx-auto border-2 border-white" />
									<figcaption className="mt-3 font-bold text-sm text-center text-[#222222]">K . ESHAQ</figcaption>
								</figure>
								<figure className="text-center">
									<img src={directorB} alt="G . G . SENTHIL KUMAR" className="w-40 h-52 object-cover rounded-lg shadow-md mx-auto border-2 border-white" />
									<figcaption className="mt-3 font-bold text-sm text-center text-[#222222]">G . G . SENTHIL KUMAR</figcaption>
								</figure>
							</div>
						</div>
					</NoSSRMotion>
				</div>
			</section>
			</div>

			{/* Our Infrastructure Section (full-width background) */}
			<section className="w-full bg-gray-50 py-20">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<NoSSRMotion data-aos="fade-up" as="div" className="max-w-6xl mx-auto">
						<h2 className="text-3xl md:text-4xl font-heading font-bold text-[#222222] mb-8 text-center">Our Infrastructure</h2>
						<p className="text-lg text-[#222222]/70 text-center max-w-3xl mx-auto mb-12 leading-relaxed">
							We operate from a <strong className="text-primary">20,000 Sq.ft</strong> work floor, a <strong className="text-primary">5,000 Sq.ft</strong> wholesale shop, 
							and <strong className="text-primary">10,000 Sq.ft</strong> storage. Our plant is equipped with advanced machines capable of producing up to 500 MT per month.
						</p>

						{/* Infrastructure Stats */}
						<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
							<NoSSRMotion
								data-aos="fade-up"
								data-aos-delay="100"
								className="bg-white border border-gray-200 rounded-xl p-6 text-center"
							>
								<Building2 className="h-12 w-12 text-primary mx-auto mb-4" />
								<div className="text-3xl font-heading font-bold text-[#222222] mb-2">20,000</div>
								<div className="text-sm text-[#222222]/70">Sq.ft Work Floor</div>
							</NoSSRMotion>
							<NoSSRMotion
								data-aos="fade-up"
								data-aos-delay="200"
								className="bg-white border border-gray-200 rounded-xl p-6 text-center"
							>
								<Warehouse className="h-12 w-12 text-primary mx-auto mb-4" />
								<div className="text-3xl font-heading font-bold text-[#222222] mb-2">5,000</div>
								<div className="text-sm text-[#222222]/70">Sq.ft Wholesale Shop</div>
							</NoSSRMotion>
							<NoSSRMotion
								data-aos="fade-up"
								data-aos-delay="300"
								className="bg-white border border-gray-200 rounded-xl p-6 text-center"
							>
								<Package className="h-12 w-12 text-primary mx-auto mb-4" />
								<div className="text-3xl font-heading font-bold text-[#222222] mb-2">10,000</div>
								<div className="text-sm text-[#222222]/70">Sq.ft Storage</div>
							</NoSSRMotion>
						</div>

						{/* Infrastructure Gallery */}
						<NoSSRMotion data-aos="fade-up" className="mb-8">
							<Carousel images={[corousal1, corousal2, corousal3, corousal4]} />
						</NoSSRMotion>

						{/* Our Machinery */}
						<div>
							<h3 className="text-2xl font-heading font-bold text-[#222222] mb-6 text-center">Our Machinery</h3>
							<p className="text-center text-[#222222]/70 mb-8 max-w-2xl mx-auto">
								A grid showcasing our high-end machinery. This builds serious credibility for B2B clients.
							</p>
							<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
								{machinery.map((machine, i) => (
									<NoSSRMotion
										key={machine}
										data-aos="fade-up"
										data-aos-delay={i * 60}
										className="bg-white border border-gray-200 rounded-lg p-4 text-center hover:shadow-md transition-shadow"
									>
										<p className="text-sm font-medium text-[#222222]">{machine}</p>
									</NoSSRMotion>
								))}
							</div>
						</div>
							</NoSSRMotion>
						</div>
					</section>

					<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

			{/* Our Group Section */}
			<section className="section-padding bg-white">
				<div className="max-w-4xl mx-auto">
					<NoSSRMotion
						data-aos="fade-up"
					>
						<h2 className="text-3xl md:text-4xl font-heading font-bold text-[#222222] mb-8 text-center">Our Group of Companies</h2>
						{/* Top row: show first three companies in a 3-column grid */}
						<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
							{groupCompanies.slice(0, 3).map(({ name, logo }, i) => (
								<NoSSRMotion
									key={name}
									data-aos="fade-up"
									data-aos-delay={i * 120}
									className="bg-gray-50 border border-gray-200 rounded-2xl p-6 flex items-center justify-center shadow-soft hover:shadow-medium transition-shadow ease-soft"
								>
									<div className="flex flex-col items-center gap-3">
										<img
											src={logo}
											alt={name}
											loading="lazy"
											decoding="async"
											className="h-24 w-auto object-contain drop-shadow"
										/>
										<span className="sr-only">{name}</span>
									</div>
								</NoSSRMotion>
							))}
						</div>

						{/* Bottom row: center remaining companies */}
						{groupCompanies.length > 3 && (
							<div className="mt-6 flex justify-center gap-6">
								{groupCompanies.slice(3).map(({ name, logo }, j) => (
									<NoSSRMotion
										key={name}
										data-aos="fade-up"
										data-aos-delay={(3 + j) * 120}
										className="bg-gray-50 border border-gray-200 rounded-2xl p-6 flex items-center justify-center shadow-soft hover:shadow-medium transition-shadow ease-soft"
									>
										<div className="flex flex-col items-center gap-3">
											<img
												src={logo}
												alt={name}
												loading="lazy"
												decoding="async"
												className="h-24 w-auto object-contain drop-shadow"
											/>
											<span className="sr-only">{name}</span>
										</div>
									</NoSSRMotion>
								))}
							</div>
						)}
					</NoSSRMotion>
				</div>
			</section>
		</div>
	</div>
	)
}
