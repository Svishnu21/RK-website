import NoSSRMotion from '../ui/NoSSRMotion'
import imgSpotlight from '../../assets/products/spotlight.jpg'

export default function ManufacturingSpotlight() {
	return (
		<section className="py-12 md:py-16 bg-gray-50">
			<div className="container mx-auto px-4 sm:px-6 lg:px-8">
				<NoSSRMotion
					data-aos="fade-up"
					className="text-center mb-8"
				>
					<h2 className="text-2xl md:text-3xl font-heading font-bold text-[#222222]">Manufacturing Spotlight</h2>
					<p className="mt-2 text-sm md:text-base text-[#222222]/70 max-w-2xl mx-auto">Highlighting our Tamilan & Wings notebook brands</p>
				</NoSSRMotion>

				<div className="grid gap-8 lg:grid-cols-2 items-center">
					<NoSSRMotion
						data-aos="fade-right"
						className="rounded-lg overflow-hidden bg-white shadow-md"
					>
						<div className="w-full aspect-video flex items-center justify-center bg-white">
							<div className="w-full h-full flex items-center justify-center p-3">
								<img
									src={imgSpotlight}
									alt="Manufacturing spotlight"
									loading="lazy"
									decoding="async"
									className="max-w-[100%] sm:max-w-[98%] md:max-w-[96%] max-h-[100%] sm:max-h-[99%] md:max-h-[98%] object-contain"
								/>
							</div>
						</div>
					</NoSSRMotion>

					<NoSSRMotion
						data-aos="fade-left"
						data-aos-delay="150"
						className="space-y-4"
					>
						<div>
							<h3 className="text-xl font-heading font-bold text-[#222222] mb-3">Tamilan & Wings Notebooks</h3>
							<p className="text-sm text-[#222222]/70 leading-relaxed">
								We manufacture notebooks under our brands <strong className="text-primary">Tamilan</strong> & <strong className="text-accent">Wings</strong>.
								Our Tamilan notebooks feature concept-driven covers that celebrate Tamil culture — bravery, sports, food, achievers and tourist attractions —
								to inspire students and promote cultural awareness.
							</p>
						</div>
						<div className="grid sm:grid-cols-2 gap-3">
							{[
								'Concept-based cultural covers',
								'High-quality paper',
								'Excellent covers',
								'Different sizes available',
							].map((t) => (
								<div key={t} className="flex items-start gap-3">
									<div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
										<svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-primary" viewBox="0 0 20 20" fill="currentColor">
											<path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-7.07 7.07a1 1 0 01-1.414 0l-3.536-3.536a1 1 0 011.414-1.414L9 11.586l6.363-6.363a1 1 0 011.344-.93z" clipRule="evenodd" />
										</svg>
									</div>
									<span className="text-xs text-[#222222]/70">{t}</span>
								</div>
							))}
						</div>
					</NoSSRMotion>
				</div>
			</div>
		</section>
	)
}

