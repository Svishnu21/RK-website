import imgStationery from '../assets/products/School & office Stationery.jpg'
import imgDelivery from '../assets/products/delivery.jpg'
import imgNotebooks from '../assets/products/Notebook Manufacturing.jpg'
import imgPaper from '../assets/products/Paper & Paper Products.jpg'
import imgFiles from '../assets/products/Files & Folders.jpg'
import imgChalk from '../assets/products/chalk production.jpg'
import imgSports from '../assets/products/sports and goods.jpg'
import imgSpiral from '../assets/products/spiral binding.jpg'

// Blog hero images (updated)
import blog1 from '../assets/blog/blog1.JPG'
import blog2 from '../assets/blog/blog2.JPG'
import blog3 from '../assets/blog/blog3.jpeg'
import blog4 from '../assets/blog/blog4.jpg'
import blog5 from '../assets/blog/blog5.jpeg'
import blog6 from '../assets/blog/blog6.jpg'
import blog7 from '../assets/blog/blog7.JPG'
import blog8 from '../assets/blog/blog8.JPG'
import blog9 from '../assets/blog/blog9.jpg'
import blog10 from '../assets/blog/blog10.jpg'

export type BlogPostMeta = {
	slug: string
	title: string
	excerpt: string
	metaDescription: string
	keywords: string
	heroImage: string
	heroAlt: string
	readTime: string
	publishedOn: string
}

export const blogPostsMeta: BlogPostMeta[] = [
	{
		slug: 'why-schools-in-salem-trust-rk-enterprises',
		title: 'Why Schools in Salem Trust RK Enterprises for Their Stationery Needs',
		excerpt: 'Discover how RK Enterprises partners with Salem schools to deliver reliable stationery supply chains, transparent pricing, and responsive service teams.',
		metaDescription: 'RK Enterprises helps schools in Salem with trusted stationery supply programs, reliable delivery schedules, and academic procurement expertise.',
		keywords: 'Salem school stationery wholesale, academic supply partner, RK Enterprises',
		heroImage: blog1,
		heroAlt: 'RK Enterprises school stationery supply in Salem',
		readTime: '7 min read',
		publishedOn: 'January 8, 2025',
	},
	{
		slug: 'how-rk-enterprises-delivers-affordable-bulk-office-supplies',
		title: 'How RK Enterprises Delivers Affordable Bulk Office Supplies Across Tamil Nadu',
		excerpt: 'Learn the logistics strategy and negotiated vendor network that keeps RK Enterprises office supply costs predictable for Tamil Nadu businesses.',
		metaDescription: 'RK Enterprises delivers affordable bulk office supplies across Tamil Nadu with optimized logistics and negotiated pricing for corporate buyers.',
		keywords: 'Tamil Nadu office supplies wholesale, bulk stationery logistics, RK Enterprises pricing',
		heroImage: blog2,
		heroAlt: 'RK Enterprises bulk office supply delivery in Tamil Nadu',
		readTime: '6 min read',
		publishedOn: 'January 12, 2025',
	},
	{
		slug: 'top-10-stationery-items-every-school-in-salem-buys',
		title: 'Top 10 Stationery Items Every School in Salem Buys from RK Enterprises',
		excerpt: 'A ranked list of the most requested classroom supplies, from notebooks to art materials, sourced from RK Enterprises by Salem institutions.',
		metaDescription: 'RK Enterprises lists the top 10 stationery items Salem schools buy, covering notebooks, art kits, classroom supplies, and annual planning essentials.',
		keywords: 'top stationery items Salem schools, classroom supply checklist, RK Enterprises must-haves',
		heroImage: blog3,
		heroAlt: 'RK Enterprises Salem school stationery essentials display',
		readTime: '5 min read',
		publishedOn: 'January 15, 2025',
	},
	{
		slug: 'why-choosing-a-local-wholesaler-like-rk-enterprises',
		title: 'Why Choosing a Local Wholesaler Like RK Enterprises Can Save You Thousands',
		excerpt: 'Explore the cost efficiencies, service speed, and partnership benefits businesses unlock by choosing RK Enterprises as their local wholesaler.',
		metaDescription: 'Choosing local wholesaler RK Enterprises helps Tamil Nadu institutions save thousands through tailored pricing, faster delivery, and collaborative planning.',
		keywords: 'local wholesaler advantages, RK Enterprises savings, Tamil Nadu stationery costs',
		heroImage: blog4,
		heroAlt: 'RK Enterprises local wholesale partnership meeting in Salem',
		readTime: '6 min read',
		publishedOn: 'January 18, 2025',
	},
	{
		slug: 'ultimate-guide-to-bulk-stationery-procurement',
		title: 'The Ultimate Guide to Bulk Stationery Procurement with RK Enterprises Salem',
		excerpt: 'Step-by-step procurement strategies for institutions partnering with RK Enterprises, covering budgeting, vendor audits, and delivery governance.',
		metaDescription: 'RK Enterprises Salem shares a bulk stationery procurement guide covering budgeting, vendor evaluation, fulfillment governance, and annual negotiations.',
		keywords: 'bulk stationery procurement guide, RK Enterprises Salem, institutional purchasing tips',
		heroImage: blog5,
		heroAlt: 'RK Enterprises procurement planning documents in Salem',
		readTime: '8 min read',
		publishedOn: 'January 22, 2025',
	},
	{
		slug: 'how-rk-enterprises-creates-custom-branded-stationery',
		title: 'How RK Enterprises Creates Custom-Branded Stationery for Schools & Businesses',
		excerpt: 'See how RK Enterprises manages design proofs, material selection, and production workflows for premium custom-branded stationery lines.',
		metaDescription: 'RK Enterprises designs and produces custom-branded stationery for schools and businesses with coordinated design, material selection, and quality checks.',
		keywords: 'custom branded stationery Salem, RK Enterprises design workflow, corporate stationery branding',
		heroImage: blog6,
		heroAlt: 'RK Enterprises custom-branded stationery manufacturing in Salem',
		readTime: '7 min read',
		publishedOn: 'January 25, 2025',
	},
	{
		slug: 'fastest-stationery-wholesaler-in-salem',
		title: 'Fastest Stationery Wholesaler in Salem – How RK Enterprises Ensures Same-Day Delivery',
		excerpt: 'A behind-the-scenes look at RK Enterprises fleet planning, warehouse orchestration, and rapid order turnarounds for Salem clients.',
		metaDescription: 'RK Enterprises is Salem’s fastest stationery wholesaler, synchronizing fleets, warehouses, and digital ordering to achieve same-day delivery.',
		keywords: 'same-day stationery delivery Salem, RK Enterprises logistics, fast wholesale supplies',
		heroImage: blog7,
		heroAlt: 'RK Enterprises same-day stationery delivery trucks in Salem',
		readTime: '6 min read',
		publishedOn: 'January 28, 2025',
	},
	{
		slug: 'faq-buying-in-bulk-from-rk-enterprises',
		title: 'Frequently Asked Questions About Buying in Bulk from RK Enterprises Salem',
		excerpt: 'Answers to the most common procurement, payment, and delivery questions institutions ask before partnering with RK Enterprises.',
		metaDescription: 'RK Enterprises Salem answers bulk purchasing FAQs covering pricing, delivery routes, payment terms, customization, and after-sales support.',
		keywords: 'RK Enterprises bulk buying FAQs, Salem stationery supplier questions, wholesale support',
		heroImage: blog8,
		heroAlt: 'RK Enterprises bulk stationery FAQ session in Salem',
		readTime: '5 min read',
		publishedOn: 'February 1, 2025',
	},
	{
		slug: 'how-rk-enterprises-helps-businesses-build-brand',
		title: 'How RK Enterprises Helps Businesses Build a Professional Brand with Premium Stationery',
		excerpt: 'Discover how premium stationery from RK Enterprises elevates corporate identity, onboarding experiences, and customer gifting strategies.',
		metaDescription: 'RK Enterprises helps businesses build professional brands with premium stationery kits, onboarding sets, and customer gifting collateral.',
		keywords: 'premium corporate stationery, RK Enterprises branding support, business identity kits',
		heroImage: blog9,
		heroAlt: 'RK Enterprises professional business stationery kits in Salem',
		readTime: '7 min read',
		publishedOn: 'February 5, 2025',
	},
	{
		slug: 'annual-stationery-planning-made-easy',
		title: 'Annual Stationery Planning Made Easy for Schools – Partner with RK Enterprises Salem',
		excerpt: 'A practical framework for academic planners designing 12-month stationery calendars with RK Enterprises as a collaborative supplier.',
		metaDescription: 'RK Enterprises Salem simplifies annual stationery planning for schools with forecasting tools, budget alignment, and proactive delivery schedules.',
		keywords: 'annual stationery planning schools, RK Enterprises Salem partnership, academic procurement calendar',
		heroImage: blog10,
		heroAlt: 'RK Enterprises annual stationery planning session with Salem school team',
		readTime: '6 min read',
		publishedOn: 'February 9, 2025',
	},
]
