type ProductItem = {
	category: string
	name: string
	brand?: string
}

const catalog: ProductItem[] = [
	{ category: 'Stationery', name: 'Ball Pens' },
	{ category: 'Stationery', name: 'Gel Pens' },
	{ category: 'Stationery', name: 'Pencils' },
	{ category: 'Paper', name: 'A4 Xerox Paper', brand: 'JK/HP/TNPL' },
	{ category: 'Paper', name: 'A3 Xerox Paper', brand: 'JK/HP/TNPL' },
	{ category: 'Files & Folders', name: 'Box Files', brand: 'AJS/NJS/Tria' },
	{ category: 'Files & Folders', name: 'L-Folders' },
	{ category: 'Notebooks', name: 'Tamilan Notebooks' },
	{ category: 'Notebooks', name: 'Wings Notebooks' },
	{ category: 'Sports Goods', name: 'Cricket Kits' },
	{ category: 'Sports Goods', name: 'Football & Accessories' },
	{ category: 'Binding', name: 'Spiral Binding' },
	{ category: 'Binding', name: 'Wire-O Binding' },
	{ category: 'Chalk', name: 'Dust-free White Chalk' },
]

// Local images for catalog categories
import imgStationery from '../../assets/products/School & office Stationery.jpg'
import imgPaper from '../../assets/products/Paper & Paper Products.jpg'
import imgFiles from '../../assets/products/Files & Folders.jpg'
import imgNotebooks from '../../assets/products/Notebook Manufacturing.jpg'
import imgSports from '../../assets/products/sports and goods.jpg'
import imgChalk from '../../assets/products/chalk production.jpg'

export default function ProductCatalog() {
	const grouped = catalog.reduce<Record<string, ProductItem[]>>((acc, item) => {
		(acc[item.category] ||= []).push(item)
		return acc
	}, {})
	return (
		<section className="section-padding">
			<div className="container-custom">
				<h2 className="text-2xl font-heading font-bold">Product Catalog (Sample)</h2>
				<div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
					{Object.entries(grouped).map(([cat, items]) => {
						const map: Record<string, string | undefined> = {
							'Stationery': imgStationery,
							'Paper': imgPaper,
							'Files & Folders': imgFiles,
							'Notebooks': imgNotebooks,
							'Sports Goods': imgSports,
							'Chalk': imgChalk,
						}
						const imgSrc = map[cat]

						return (
							<div key={cat} className="bg-card border rounded-xl p-4">
								<div className="h-40 w-full overflow-hidden rounded-md">
									{imgSrc ? (
										<img src={imgSrc} alt={cat} loading="lazy" decoding="async" className="w-full h-full object-cover" />
									) : (
										<div className="w-full h-full bg-gray-100 flex items-center justify-center">{cat}</div>
									)}
								</div>
								<h3 className="font-semibold mt-3">{cat}</h3>
								<ul className="mt-3 space-y-2 text-sm">
									{items.map((it, i) => (
										<li key={i} className="flex justify-between">
											<span>{it.name}</span>
											{it.brand && <span className="text-muted-foreground">{it.brand}</span>}
										</li>
									))}
								</ul>
							</div>
						)
					})}
				</div>
			</div>
		</section>
	)
}

