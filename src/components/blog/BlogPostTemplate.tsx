import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import type { ReactNode } from 'react'
import NoSSRMotion from '../ui/NoSSRMotion'
import SEO from '../seo/SEO'
import type { BlogPostMeta } from '../../data/blogPosts'

export type BlogSection = {
	title?: string
	paragraphs: string[]
	listItems?: string[]
}

type BlogPostTemplateProps = {
	meta: BlogPostMeta
	intro: ReactNode
	sections: BlogSection[]
	conclusion?: string
}

export default function BlogPostTemplate({ meta, intro, sections, conclusion }: BlogPostTemplateProps) {
	const description = `${meta.metaDescription} ${meta.keywords}`

	return (
		<div className="bg-white">
			<SEO title={meta.title} description={description} />
			<article className="pt-32 pb-16">
				<div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
					{/* Back navigation: aligned to the left edge of the content */}
					<div className="mb-6 w-full">
						<Link
							to="/blog"
							aria-label="Back to Blog"
							className="inline-flex items-center gap-2 text-gray-600 hover:text-pink-600 transition-colors transition-transform duration-200 hover:-translate-x-1 font-medium py-2 px-2"
						>
							<ArrowLeft className="h-4 w-4" />
							<span>Back to Blog</span>
						</Link>
					</div>
					<NoSSRMotion data-aos="fade-up" className="mb-10 text-center">
						<p className="text-xs uppercase tracking-[0.3em] text-primary/80">Insights</p>
						<h1 className="mt-4 text-3xl md:text-4xl font-heading font-bold text-[#222222]">
							{meta.title}
						</h1>
						<div className="mt-4 text-sm text-[#222222]/60">{meta.readTime}</div>
					</NoSSRMotion>

					<NoSSRMotion data-aos="fade-up" data-aos-delay="150" className="overflow-hidden rounded-2xl shadow-lg mb-12 aspect-video">
						<img src={meta.heroImage} alt={meta.heroAlt} loading="lazy" decoding="async" className="w-full h-full object-cover" />
					</NoSSRMotion>

					<section className="prose prose-lg max-w-none text-[#222222] prose-headings:font-heading prose-headings:text-[#222222] prose-p:text-[#222222]/80">
						{intro}
						{sections.map((section, idx) => (
							<NoSSRMotion
								key={section.title ?? idx}
								data-aos="fade-up"
								data-aos-delay={200 + idx * 100}
								className="not-prose"
							>
								<div className="prose prose-lg max-w-none text-[#222222] prose-headings:font-heading prose-headings:text-[#222222] prose-p:text-[#222222]/80">
									{section.title && <h2>{section.title}</h2>}
									{section.paragraphs.map((paragraph, pIdx) => (
										<p key={pIdx} dangerouslySetInnerHTML={{ __html: paragraph }} />
									))}
									{section.listItems && (
										<ul>
											{section.listItems.map((item, itemIdx) => (
												<li key={`${section.title ?? idx}-${itemIdx}`} dangerouslySetInnerHTML={{ __html: item }} />
											))}
										</ul>
									)}
								</div>
							</NoSSRMotion>
						))}
						{conclusion && (
							<NoSSRMotion data-aos="fade-up" data-aos-delay={200 + sections.length * 120} className="not-prose">
								<div className="prose prose-lg max-w-none text-[#222222] prose-p:text-[#222222]/80">
									<p>{conclusion}</p>
								</div>
							</NoSSRMotion>
						)}
					</section>

					<NoSSRMotion data-aos="zoom-in" data-aos-delay="200" className="mt-14">
						<div className="bg-primary/10 border border-primary/20 rounded-2xl p-8 md:p-10 text-center shadow-soft">
							<h2 className="text-2xl font-heading font-bold text-[#222222]">
								Looking for a reliable stationery supplier?
							</h2>
							<Link
								to="/contact"
								className="inline-flex mt-5 items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3 text-white text-sm font-semibold shadow-soft hover:bg-primary/90 transition-all duration-300"
							>
								<span role="img" aria-hidden>
									👉
								</span>
								Contact RK Enterprises today for bulk stationery supplies in Salem!
							</Link>
						</div>
					</NoSSRMotion>
				</div>
			</article>
		</div>
	)
}
