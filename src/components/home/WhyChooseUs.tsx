import { Award, Building2, Factory, Settings, Tag, Truck } from 'lucide-react'
import NoSSRMotion from '../ui/NoSSRMotion'

const items = [
	{
		icon: Award,
		title: '15+ Years of Experience',
		desc: "Supplying stationery to leading stores and dealers with utmost competence for over 15 years.",
	},
	{
		icon: Building2,
		title: '20,000 Sq.ft Infrastructure',
		desc: 'A massive work floor and 10,000 sq.ft of storage for raw materials and finished goods.',
	},
	{
		icon: Factory,
		title: 'In-House Manufacturing',
		desc: "We create our own 'Tamilan & Wings' notebooks and produce high-quality, non-toxic chalk in-house.",
	},
	{
		icon: Settings,
		title: 'High-End Machinery',
		desc: 'We utilize advanced machinery, including folding, pinning, and fully automatic exercise book machines.',
	},
	{
		icon: Tag,
		title: 'Competitive Wholesale Pricing',
		desc: 'By sourcing directly, we supply products to dealers at highly competitive prices compared to retail.',
	},
	{
		icon: Truck,
		title: 'State-Wide Delivery',
		desc: 'We offer free local delivery (up to 200km) and cover all over Tamil Nadu with our own vehicles.',
	},
]

export default function WhyChooseUs() {
	return (
		<section className="py-12 md:py-16 bg-white">
			<div className="container mx-auto px-4 sm:px-6 lg:px-8">
				<NoSSRMotion data-aos="fade-up" className="text-center mb-8">
					<h2 className="text-2xl md:text-3xl font-heading font-bold text-[#222222]">Why Choose Us</h2>
					<p className="mt-2 text-sm md:text-base text-[#222222]/70 text-center max-w-2xl mx-auto">Your Trusted Partner for Quality, Scale, and Reliability.</p>
				</NoSSRMotion>

				<div className="grid gap-6 md:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
					{items.map((it, i) => {
						const Icon = it.icon
						return (
							<NoSSRMotion
								key={it.title}
								data-aos="fade-up"
								data-aos-delay={i * 120}
								className="bg-white border border-gray-100 rounded-xl p-6 hover:-translate-y-1 hover:shadow-lg transition-all duration-300 text-center"
							>
								<div className="flex justify-center mb-3">
									<Icon className="h-10 w-10 md:h-12 md:w-12 text-primary" aria-hidden />
								</div>
								<h3 className="font-heading font-semibold text-lg md:text-xl text-[#222222]">{it.title}</h3>
								<p className="mt-3 text-sm md:text-base text-[#222222]/70">{it.desc}</p>
							</NoSSRMotion>
						)
					})}
				</div>
			</div>
		</section>
	)
}

