import NoSSRMotion from '../ui/NoSSRMotion'

export default function Testimonials() {
	return (
		<section className="section-padding bg-muted/30">
			<div className="container-custom">
				<NoSSRMotion data-aos="fade-up" className="text-center">
					<h2 className="text-2xl font-heading font-bold">What Our Customers Say</h2>
				</NoSSRMotion>
				<div className="mt-8 grid md:grid-cols-3 gap-6">
					{[
						['Principal, Salem School', 'Reliable delivery and complete range for all our academic needs.'],
						['Procurement Head, College', 'Excellent quality notebooks and binding services. Highly recommend.'],
						['Admin, Corporate Office', 'Professional service with on-time delivery across Tamil Nadu.'],
					].map(([author, quote], index) => (
						<NoSSRMotion
							key={author}
							data-aos="fade-up"
							data-aos-delay={index * 120}
							className="bg-card border rounded-xl p-6"
						>
							<p className="italic">“{quote}”</p>
							<p className="mt-3 text-sm text-muted-foreground">— {author}</p>
						</NoSSRMotion>
					))}
				</div>
			</div>
		</section>
	)
}

