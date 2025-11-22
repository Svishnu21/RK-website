import type { ReactNode } from 'react'
import BlogPostTemplate, { type BlogSection } from '../../components/blog/BlogPostTemplate'
import { blogPostsMeta } from '../../data/blogPosts'

const meta = blogPostsMeta.find((post) => post.slug === 'faq-buying-in-bulk-from-rk-enterprises')!

const intro: ReactNode = (
	<p>
		<strong>RK Enterprises</strong> is Salem&apos;s most trusted wholesale partner because we answer every bulk buying question with clarity,
		transparency, and actionable guidance.
	</p>
)

const sections: BlogSection[] = [
	{
		title: 'What Minimum Order Quantity Do You Require?',
		paragraphs: [
			`For core stationery like notebooks, printer paper, and pens, our minimum order quantity is intentionally low so new clients can pilot our service without heavy commitments. We start at a few master cartons and scale as your comfort grows. Custom-branded products require higher volumes to justify setup, yet we advise on exactly how to reach the most economical batch size using insights from the <a href="/products" class="text-primary underline font-semibold">RK Enterprises wholesale catalog</a>.`,
		],
	},
	{
		title: 'How Quickly Can You Deliver?',
		paragraphs: [
			`Within Salem city limits we offer same-day or next-day delivery. Orders placed by noon usually leave the warehouse that afternoon. For the rest of Tamil Nadu, timelines range from 24 to 72 hours depending on distance. We confirm delivery slots before dispatch so your team is prepared to receive the shipment.`,
		],
	},
	{
		title: 'Do You Offer Credit Terms?',
		paragraphs: [
			`Yes. After the first two prepaid orders we can extend credit, subject to standard documentation. Schools and colleges often prefer 30-day terms aligned with fee collection cycles, while corporates request 45 days during financial quarters. We customise within reasonable limits, ensuring cash flow stays healthy on both sides.`,
		],
	},
	{
		title: 'Can You Handle Custom Branding?',
		paragraphs: [
			`Absolutely. Our in-house design and production teams craft notebooks, folders, pens, and welcome kits featuring your logos and colours. Lead times vary based on complexity—simple screen-printed notebooks may take 10 days, whereas embossed executive diaries might need three weeks.`,
		],
	},
	{
		title: 'What About Quality Complaints?',
		paragraphs: [
			`If something is not up to standard, we replace it. Clients simply WhatsApp photos or share batch numbers, and our quality desk coordinates a pick-up. Replacement stock leaves our facility immediately. Feedback is then logged in our quality system so recurring issues are eliminated at source.`,
		],
	},
	{
		title: 'How Do You Price Bulk Orders?',
		paragraphs: [
			`We analyse order volume, frequency, and product mix. Higher commitments unlock better slab pricing. RK Enterprises also watches raw material indices closely, advising clients when to place large orders before industry-wide revisions hit. Our goal is to keep your cost-per-unit predictable for the entire contract period.`,
		],
	},
	{
		title: 'Do You Support Sustainable Procurement?',
		paragraphs: [
			`Yes, and the demand keeps growing. We supply recycled paper, refillable markers, plastic-free packing materials, and biodegradable pencils. Sustainability reports include tonnage saved and carbon reduction estimates so CSR teams can quantify impact, with product specs published in the <a href="/products" class="text-primary underline font-semibold">eco-friendly range</a> for easy comparison.`,
		],
	},
	{
		title: 'What Service Support Do You Provide After Delivery?',
		paragraphs: [
			`Your dedicated relationship manager remains available for reorder planning, emergency drops, and product recommendations. We schedule quarterly review calls to evaluate performance and introduce innovations that could benefit your teams.`,
		],
	},
]

const conclusion =
	'Still have questions? RK Enterprises thrives on conversations that make bulk buying easier, so reach out via the <a href="/contact" class="text-primary underline font-semibold">Contact RK Enterprises</a> desk and we will tailor a stationery strategy that fits your organisation perfectly.'

export default function BulkBuyingFAQs() {
	return <BlogPostTemplate meta={meta} intro={intro} sections={sections} conclusion={conclusion} />
}
