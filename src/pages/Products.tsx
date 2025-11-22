import * as Tabs from '@radix-ui/react-tabs'
import { CheckCircle2 } from 'lucide-react'
import NoSSRMotion from '../components/ui/NoSSRMotion'
import SEO from '../components/seo/SEO'

// Local product images
// banner images removed - keeping content only
// Gallery images for product categories
import imgStationeryA from '../assets/products/School & office Stationery.jpg'
import imgStationeryB from '../assets/stationary2.png'
import imgPaperA from '../assets/products/paper1.png'
import imgPaperB from '../assets/products/paper2.png'
import imgFilesA from '../assets/products/Files & Folders.jpg'
import imgFilesB from '../assets/file2.jpeg'
import imgNotebooksA from '../assets/products/Notebook Manufacturing.jpg'
import imgNotebooksB from '../assets/products/spotlight.jpg'
import imgSportsA from '../assets/products/sports and goods.jpg'
import imgSportsB from '../assets/sports2.png'
import imgChalkA from '../assets/products/chalk production.jpg'
import imgChalkB from '../assets/chalk2.png'
import imgBindingA from '../assets/products/spiral binding.jpg'
import imgBindingB from '../assets/binding2.png'
import imgDeliveryA from '../assets/products/delivery.jpg'
import imgDeliveryB from '../assets/corousal4.png'

function GalleryPair({ images, caption }: { images: string[]; caption?: string }) {
	return (
		<NoSSRMotion data-aos="fade-up" className="mt-6">
			<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
					{images.map((src, i) => (
						<figure key={i} className="overflow-hidden rounded-xl bg-gray-50 shadow-sm hover:shadow-lg transition-shadow duration-200 h-72 md:h-96 flex items-center justify-center w-full">
							<div className="w-full h-full flex items-center justify-center">
								<img src={src} alt={caption ? `${caption} ${i + 1}` : `Gallery ${i + 1}`} className="max-h-56 md:max-h-80 w-auto object-contain" loading="lazy" decoding="async" />
							</div>
						</figure>
					))}
			</div>
		</NoSSRMotion>
	)
}

const TabPanel = ({ children }: { children: React.ReactNode }) => (
	<NoSSRMotion
		data-aos="fade-up"
		className="bg-white border border-gray-200 rounded-xl overflow-hidden"
	>
		{children}
	</NoSSRMotion>
)

const stationeryItems = [
	'Pencils', 'Pens', 'Ball Pens', 'Gel Pens', 'Fountain Pens', 'Erasers', 'Sharpeners', 'Rulers',
	'Geometry Sets', 'Compass', 'Protractor', 'Set Squares', 'Notebooks', 'Registers', 'Drawing Books',
	'Art & Craft Supplies', 'Crayons', 'Color Pencils', 'Water Colors', 'Poster Colors', 'Paint Brushes',
	'Glue', 'Fevi Stick', 'Adhesives', 'Staplers', 'Stapler Pins', 'Punching Machines', 'Paper Clips',
	'Jump Clips', 'Binder Clips', 'Magic Clips', 'Pins', 'Markers', 'Permanent Markers', 'White Board Markers',
	'Highlighters', 'Correction Fluids', 'Correction Pens', 'Drawing Sheets', 'Chart Papers', 'Graph Papers',
	'White Boards', 'Display Boards', 'Diaries', 'Cello Tape', 'Brown Tape', 'Double Side Tape', 'Tissue Stand',
	'Scissors', 'Paper Cutters', 'Folders', 'File Covers', 'Plastic Covers', 'Lamination Sheets'
]

export default function Products() {
	return (
		<div className="bg-white">
			<SEO title="Products & Services | R K Enterprises" description="Comprehensive stationery solutions: stationery, paper, files, notebooks, binding, chalk, sports goods, delivery." />
			
			<section className="pt-32 pb-16 bg-white">
				<div className="container mx-auto px-4 sm:px-6 lg:px-8">
					<NoSSRMotion
						data-aos="fade-up"
						data-aos-duration="700"
					>
						<h1 className="text-4xl md:text-5xl font-heading font-bold text-[#222222]">
							Products <span className="text-primary">&amp; Services</span>
						</h1>
						<p className="mt-4 text-lg text-[#222222]/70">Comprehensive stationery solutions for schools, colleges, and businesses</p>
					</NoSSRMotion>
				</div>
			</section>

			<section className="container mx-auto px-4 sm:px-6 lg:px-8 pb-24">
				<Tabs.Root defaultValue="stationery" className="w-full">
					<Tabs.List className="flex flex-wrap gap-2 mb-6 border-b border-gray-200">
						{[
							['stationery', 'Stationery Wholesale'],
							['paper', 'Paper & Paper Products'],
							['files', 'Files & Folders'],
							['notebooks', 'Notebook Manufacturing'],
							['binding', 'Binding Services'],
							['chalk', 'Chalk Production'],
							['sports', 'Sports Goods'],
							['delivery', 'Delivery'],
						].map(([v, l]) => (
							<Tabs.Trigger 
								key={v} 
								value={v} 
								className="px-4 py-2 text-sm font-medium border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:text-primary text-[#222222]/70 hover:text-primary transition-colors"
							>
								{l}
							</Tabs.Trigger>
						))}
					</Tabs.List>

					{/* Tab 1: Stationery Wholesale */}
					<Tabs.Content value="stationery">
						<TabPanel>
							<div className="p-6 md:p-8">
								<h2 className="text-2xl font-heading font-bold text-[#222222] mb-4">School, Office &amp; Industrial Stationery</h2>
								<p className="text-[#222222]/70 mb-4">We cover all kinds of School, Office, and Industrial Stationery</p>
									<div className="mb-6 rounded-lg overflow-hidden">
									{/* banner removed - content only */}
								<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
									{stationeryItems.map((item) => (
										<div key={item} className="flex items-center gap-2 text-sm text-[#222222]/70">
											<CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0" />
											<span>{item}</span>
										</div>
									))}
								</div>
							</div>
							</div>
								<GalleryPair images={[imgStationeryA, imgStationeryB]} caption="Stationery" />
							</TabPanel>
						</Tabs.Content>

					{/* Tab 2: Paper & Paper Products */}
					<Tabs.Content value="paper">
						<TabPanel>
							<div className="p-6 md:p-8 space-y-8">
								<div>
									<h3 className="font-heading font-semibold text-lg text-[#222222] mb-4">Premium Brands</h3>
									{/* banner removed - content only */}
									<div className="grid sm:grid-cols-3 lg:grid-cols-5 gap-3">
										{['JK Papers', 'HP Papers', 'TNPL', 'Copier Bond', 'Executive Bond'].map((brand) => (
											<div key={brand} className="rounded-lg bg-gray-50 border border-gray-200 p-4 text-sm text-center font-medium text-[#222222]">
												{brand}
											</div>
										))}
									</div>
								</div>
								<div>
									<h3 className="font-heading font-semibold text-lg text-[#222222] mb-4">Product Types</h3>
									<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
										{['Xerox Paper (A4, A3, Legal)', 'Cover Papers', 'Envelopes (All Sizes)', 'Color Laser Paper', 'Photo Glossy Paper', 'Certificate Paper'].map((type) => (
											<div key={type} className="flex items-center gap-2 text-sm text-[#222222]/70">
												<CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0" />
												<span>{type}</span>
											</div>
										))}
									</div>
								</div>
							</div>
								<GalleryPair images={[imgPaperA, imgPaperB]} caption="Paper & Paper Products" />
							</TabPanel>
						</Tabs.Content>

					{/* Tab 3: Files & Folders */}
					<Tabs.Content value="files">
						<TabPanel>
							<div className="p-6 md:p-8 space-y-8">
								<div>
									<h3 className="font-heading font-semibold text-lg text-[#222222] mb-4">Trusted Brands</h3>
									{/* banner removed - content only */}
									<div className="grid sm:grid-cols-3 gap-3">
										{['AJS Files', 'NJS Files', 'Tria Files'].map((brand) => (
											<div key={brand} className="rounded-lg bg-gray-50 border border-gray-200 p-4 text-sm text-center font-medium text-[#222222]">
												{brand}
											</div>
										))}
									</div>
								</div>
								<div>
									<h3 className="font-heading font-semibold text-lg text-[#222222] mb-4">Product Range</h3>
									<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
										{['Box File', 'Spring File', 'L-Folder', 'U-Folder', 'Display Books', 'Lever Arch Files', 'Tag File', 'Velcro Folder', 'Button Folder', 'Certificate File', 'Transparent Folder'].map((type) => (
											<div key={type} className="flex items-center gap-2 text-sm text-[#222222]/70">
												<CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0" />
												<span>{type}</span>
											</div>
										))}
									</div>
								</div>
							</div>
								<GalleryPair images={[imgFilesA, imgFilesB]} caption="Files & Folders" />
							</TabPanel>
						</Tabs.Content>

					{/* Tab 4: Notebook Manufacturing */}
					<Tabs.Content value="notebooks">
						<TabPanel>
							<div className="p-6 md:p-8 space-y-6">
								<h2 className="text-2xl font-heading font-bold text-[#222222]">Our Notebook Brands - Tamilan &amp; Wings</h2>
								{/* banner removed - content only */}
								<div className="grid sm:grid-cols-2 gap-6">
									<div className="border-l-4 border-primary rounded-lg p-6 bg-gray-50">
										<h4 className="text-primary font-heading font-semibold text-lg mb-2">Tamilan Notebooks</h4>
										<p className="text-sm text-[#222222]/70 leading-relaxed">
											Celebrating Tamil culture through quality stationery with concept-based cultural covers featuring bravery, 
											sports, food, achievers and tourist attractions.
										</p>
									</div>
									<div className="border-l-4 border-accent rounded-lg p-6 bg-gray-50">
										<h4 className="text-accent font-heading font-semibold text-lg mb-2">Wings Notebooks</h4>
										<p className="text-sm text-[#222222]/70 leading-relaxed">
											Empowering education with premium quality notebooks and excellent covers designed for students.
										</p>
									</div>
								</div>
								<div>
									<h3 className="font-heading font-semibold text-lg text-[#222222] mb-4">Features</h3>
									<div className="grid sm:grid-cols-3 gap-4">
										{['Premium Quality Paper', 'Excellent Covers', 'Concept Based Cultural Covers', 'Different Sizes (Small, King, Long)', 'Custom Sizes Available'].map((feature) => (
											<div key={feature} className="flex items-start gap-2 text-sm text-[#222222]/70">
												<CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
												<span>{feature}</span>
											</div>
										))}
									</div>
								</div>
							</div>
								<GalleryPair images={[imgNotebooksA, imgNotebooksB]} caption="Notebooks" />
							</TabPanel>
						</Tabs.Content>

					{/* Tab 5: Binding Services */}
					<Tabs.Content value="binding">
						<TabPanel>
							<div className="p-6 md:p-8">
								<h2 className="text-2xl font-heading font-bold text-[#222222] mb-4">Professional Binding Services</h2>
								<p className="text-[#222222]/70 mb-6">High-quality binding solutions for all your documentation needs</p>
								{/* banner removed - content only */}
								<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
									{[
										'Back Pressed Center Stapled',
										'Sewn & Perfect Bound',
										'Spiral Binding',
										'Wire-O Binding',
										'Thermal Binding',
										'Hard Cover Binding',
										'Center Stitched & Spine Taped',
										'Section Sewn & Spine Taped',
										'Case Bound'
									].map((type) => (
										<div key={type} className="flex items-center gap-2 text-sm text-[#222222]/70">
											<CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0" />
											<span>{type}</span>
										</div>
									))}
								</div>
							</div>
								<GalleryPair images={[imgBindingA, imgBindingB]} caption="Binding Services" />
							</TabPanel>
						</Tabs.Content>

					{/* Tab 6: Chalk Production */}
					<Tabs.Content value="chalk">
						<TabPanel>
							<div className="p-6 md:p-8">
								<h2 className="text-2xl font-heading font-bold text-[#222222] mb-4">Chalk Production</h2>
								<p className="text-[#222222]/70 mb-4">
									Extensively used in schools across Tamil Nadu - Highest Quality Manufacturing
								</p>
								{/* banner removed - content only */}
								<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
									{[
										'Extensively used in schools',
										'Highest Quality',
										'Non Toxic',
										'Silky Smooth',
										'Extra Bright',
										'Long Lasting',
										'Vibrant Colours',
										'Bold Impression',
										'Dust-Free Formula'
									].map((feature) => (
										<div key={feature} className="flex items-center gap-2 text-sm text-[#222222]/70">
											<CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0" />
											<span>{feature}</span>
										</div>
									))}
								</div>
								<div className="bg-primary/5 border border-primary/20 rounded-lg p-6">
									<p className="text-sm text-[#222222]/80 leading-relaxed">
										<strong className="text-primary">Safe for Students:</strong> Our chalk is non-toxic with no harmful chemicals, 
										making it safe for use in schools, colleges, and coaching institutes.
									</p>
								</div>
							</div>
								<GalleryPair images={[imgChalkA, imgChalkB]} caption="Chalk Production" />
							</TabPanel>
						</Tabs.Content>

					{/* Tab 7: Sports Goods */}
					<Tabs.Content value="sports">
						<TabPanel>
							<div className="p-6 md:p-8">
								<h2 className="text-2xl font-heading font-bold text-[#222222] mb-4">Indoor &amp; Outdoor Sports Goods</h2>
								<p className="text-[#222222]/70 mb-4">Quality sports equipment for schools and institutions</p>
								{/* banner removed - content only */}
								<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
									{[
										'Cricket Kits',
										'Football',
										'Football Accessories',
										'Badminton Rackets',
										'Badminton Sets',
										'Tennis Equipment',
										'Tennis Balls',
										'Chess Sets',
										'Carrom Boards',
										'Yoga Mat',
										'Basketballs',
										'Hockey Sticks',
										'Golf Kits',
										'Athletic Equipment'
									].map((item) => (
										<div key={item} className="flex items-center gap-2 text-sm text-[#222222]/70">
											<CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0" />
											<span>{item}</span>
										</div>
									))}
								</div>
							</div>
								<GalleryPair images={[imgSportsA, imgSportsB]} caption="Sports Goods" />
							</TabPanel>
						</Tabs.Content>

					{/* Tab 8: Delivery */}
					<Tabs.Content value="delivery">
						<TabPanel>
							<div className="p-6 md:p-8">
								<h2 className="text-2xl font-heading font-bold text-[#222222] mb-6">Delivery Facility</h2>
								{/* banner removed - content only */}
								<div className="grid sm:grid-cols-2 gap-6">
									<div className="rounded-xl bg-primary/10 border border-primary/20 p-6">
										<h3 className="text-primary font-heading font-semibold text-lg mb-3">Free Delivery (Up to 200km)</h3>
										<p className="text-sm text-[#222222]/70 mb-2">
											Salem to 200km free delivery using our own vehicles.
										</p>
										<p className="text-xs text-[#222222]/60">
											Ideal for local institutions and businesses in and around Salem.
										</p>
									</div>
									<div className="rounded-xl bg-accent/10 border border-accent/20 p-6">
										<h3 className="text-accent font-heading font-semibold text-lg mb-3">All Over Tamil Nadu</h3>
										<p className="text-sm text-[#222222]/70 mb-2">
											Complete coverage across Tamil Nadu through our own vehicles.
										</p>
										<p className="text-xs text-[#222222]/60">
											Reliable and timely delivery to any location in the state.
										</p>
									</div>
								</div>
							</div>
								<GalleryPair images={[imgDeliveryA, imgDeliveryB]} caption="Delivery" />
							</TabPanel>
						</Tabs.Content>

				</Tabs.Root>
			</section>
		</div>
	)
}

