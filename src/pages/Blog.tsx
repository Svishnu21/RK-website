import SEO from '../components/seo/SEO'
import NoSSRMotion from '../components/ui/NoSSRMotion'
import { Link } from 'react-router-dom'
import { blogPostsMeta } from '../data/blogPosts'

export default function Blog() {
	return (
		<div className="bg-white">
			<SEO title="Blog | R K Enterprises" description="Latest updates, product insights, and company news from R K Enterprises - Your trusted stationery wholesaler in Salem." />
			
			<section className="pt-32 pb-16 bg-white">
				<div className="container mx-auto px-4 sm:px-6 lg:px-8">
					<NoSSRMotion
						data-aos="fade-up"
						data-aos-duration="700"
					>
						<h1 className="text-4xl md:text-5xl font-heading font-bold text-[#222222]">Blog</h1>
						<p className="mt-4 text-lg text-[#222222]/70">Latest insights and updates from R K Enterprises</p>
					</NoSSRMotion>
				</div>
			</section>

			<section className="section-padding bg-white">
				<div className="container mx-auto px-4 sm:px-6 lg:px-8">
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
						{blogPostsMeta.map((post, index) => (
							<NoSSRMotion
								as="article"
								key={post.slug}
								data-aos="fade-up"
								data-aos-delay={index * 120}
								className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow"
							>
								<div className="aspect-video bg-gray-200 overflow-hidden">
									<img 
										src={post.heroImage}
										alt={post.heroAlt}
										loading="lazy"
										decoding="async"
										className="w-full h-full object-cover"
									/>
								</div>
								<div className="p-6">
									<span className="inline-block text-xs px-3 py-1 rounded-full bg-primary/10 text-primary font-medium mb-3">
										READ ARTICLE
									</span>
									<h3 className="text-xl font-heading font-semibold text-[#222222] mb-3 leading-tight">
										{post.title}
									</h3>
									<p className="text-sm text-[#222222]/70 mb-4 leading-relaxed">
										{post.excerpt}
									</p>
									<div className="flex items-center justify-between">
										<span className="text-xs text-[#222222]/60">{post.publishedOn}</span>
										<Link 
											to={`/blog/${post.slug}`}
											className="text-sm text-primary hover:text-primary/80 font-medium transition-colors"
										>
											Read more →
										</Link>
									</div>
								</div>
							</NoSSRMotion>
						))}
					</div>
				</div>
			</section>
		</div>
	)
}
