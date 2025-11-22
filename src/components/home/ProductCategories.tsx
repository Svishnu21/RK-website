import NoSSRMotion from '../ui/NoSSRMotion'

// Local product images (placed in src/assets/products)
import imgStationery from '../../assets/products/School & office Stationery.jpg'
import imgPaper from '../../assets/products/Paper & Paper Products.jpg'
import imgFiles from '../../assets/products/Files & Folders.jpg'
import imgNotebooks from '../../assets/products/Notebook Manufacturing.jpg'
import imgSports from '../../assets/products/sports and goods.jpg'
import imgChalk from '../../assets/products/chalk production.jpg'

const cats = [
	{ img: imgStationery, title: 'School & Office Stationery', desc: 'Complete range of writing instruments, art supplies, and office essentials' },
	{ img: imgPaper, title: 'Paper & Paper Products', desc: 'Premium quality papers from leading brands like JK, HP, and TNPL' },
	{ img: imgFiles, title: 'Files & Folders', desc: 'Comprehensive collection from top brands - AJS, NJS, and Tria' },
	{ img: imgNotebooks, title: 'Notebook Manufacturing', desc: 'Tamilan & Wings brands with concept-based cultural covers' },
	{ img: imgSports, title: 'Sports Goods', desc: 'Indoor & outdoor sports equipment for schools and institutions' },
	{ img: imgChalk, title: 'Chalk Production', desc: 'Highest quality, non-toxic, silky smooth writing chalk' },
]

export default function ProductCategories() {
	return (
		<section className="py-12 md:py-16 bg-white">
			<div className="container mx-auto px-4 sm:px-6 lg:px-8">
				<NoSSRMotion
					data-aos="fade-up"
					className="text-center mb-8"
				>
					<h2 className="text-2xl md:text-3xl font-heading font-bold text-[#222222]">Product Categories</h2>
					<p className="mt-2 text-sm md:text-base text-[#222222]/70 max-w-2xl mx-auto text-center">A clean grid of categories with high-quality offerings</p>
				</NoSSRMotion>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
					{cats.map((c, i) => (
						<NoSSRMotion
							key={c.title}
							data-aos="fade-up"
							data-aos-delay={i * 100}
							className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow duration-300"
						>
							{/* Image at top with rounded top corners */}
							<div className="w-full h-56 md:h-64 lg:h-56 overflow-hidden">
								{c.title === 'Files & Folders' ? (
									<div className="w-full h-full flex items-center justify-center p-4">
										<img src={c.img} alt={c.title} loading="lazy" decoding="async" className="max-w-[100%] sm:max-w-[98%] md:max-w-[95%] max-h-[100%] sm:max-h-[98%] md:max-h-[95%] object-contain" />
									</div>
								) : c.title === 'Sports Goods' ? (
									<div className="w-full h-full flex items-center justify-center p-4">
										<img src={c.img} alt={c.title} loading="lazy" decoding="async" className="max-w-[95%] sm:max-w-[92%] md:max-w-[90%] max-h-[98%] sm:max-h-[96%] md:max-h-[94%] object-contain" />
									</div>
								) : (
									<img src={c.img} alt={c.title} loading="lazy" decoding="async" className="w-full h-full object-cover rounded-t-xl" />
								)}
							</div>

							{/* Text area */}
							<div className="p-5">
								<h3 className="font-heading font-bold text-lg text-[#222222]">{c.title}</h3>
								<p className="mt-2 text-sm text-[#222222]/70">{c.desc}</p>
							</div>
						</NoSSRMotion>
					))}
				</div>
			</div>
		</section>
	)
}

