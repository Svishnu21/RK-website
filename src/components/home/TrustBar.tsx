import NoSSRMotion from '../ui/NoSSRMotion'
import { Award, Building2, Users } from 'lucide-react'

const trustItems = [
	{ icon: Award, text: '15+ Years Experience' },
	{ icon: Building2, text: '20,000 Sq.ft Infrastructure' },
	{ icon: Users, text: '1000+ Happy Clients' },
]

export default function TrustBar() {
	return (
		<section className="w-full bg-gray-50 border-y border-gray-200">
			<NoSSRMotion data-aos="fade-up" data-aos-duration="700" className="w-full">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
					<div className="flex flex-col sm:flex-row items-center justify-around gap-6">
						{trustItems.map((item) => {
							const Icon = item.icon
							return (
								<div key={item.text} className="flex items-center gap-4">
									<Icon className="h-10 w-10 text-primary" />
									<p className="text-lg md:text-xl font-heading font-semibold text-[#222222]">
										{item.text}
									</p>
								</div>
							)
						})}
					</div>
				</div>
			</NoSSRMotion>
		</section>
	)
}

