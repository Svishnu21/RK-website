import Hero from '../components/home/Hero'
import TrustBar from '../components/home/TrustBar'
import WhyChooseUs from '../components/home/WhyChooseUs'
import ProductCategories from '../components/home/ProductCategories'
import ManufacturingSpotlight from '../components/home/ManufacturingSpotlight'
import CTASection from '../components/home/CTASection'
import SEO from '../components/seo/SEO'

export default function Home() {
	return (
		<>
			<SEO title="R K Enterprises | Premier Stationery Solutions" description="Trusted B2B wholesaler and manufacturer in Salem, Tamil Nadu. 15+ years serving 500+ institutions with quality stationery." />
			<Hero />
			<TrustBar />
			<ProductCategories />
			<WhyChooseUs />
			<ManufacturingSpotlight />
			<CTASection />
		</>
	)
}

