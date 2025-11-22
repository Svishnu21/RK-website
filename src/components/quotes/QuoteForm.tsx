import { useState } from 'react'

export default function QuoteForm() {
	const [form, setForm] = useState({ name: '', email: '', phone: '', company: '', items: '' })
	const [submitted, setSubmitted] = useState(false)
	function onChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
		setForm({ ...form, [e.target.name]: e.target.value })
	}
	function onSubmit(e: React.FormEvent) {
		e.preventDefault()
		setSubmitted(true)
	}
	return (
		<section className="section-padding">
			<div className="container-custom">
				<h2 className="text-2xl font-heading font-bold">Request a Quote</h2>
				<form onSubmit={onSubmit} className="mt-6 bg-card border rounded-xl p-6 grid gap-4">
					<div className="grid sm:grid-cols-2 gap-4">
						<input name="name" placeholder="Name*" value={form.name} onChange={onChange} className="rounded-lg border px-3 py-2 bg-background" aria-required />
						<input name="company" placeholder="Company / Institution" value={form.company} onChange={onChange} className="rounded-lg border px-3 py-2 bg-background" />
					</div>
					<div className="grid sm:grid-cols-2 gap-4">
						<input type="email" name="email" placeholder="Email*" value={form.email} onChange={onChange} className="rounded-lg border px-3 py-2 bg-background" aria-required />
						<input name="phone" placeholder="Phone*" value={form.phone} onChange={onChange} className="rounded-lg border px-3 py-2 bg-background" aria-required />
					</div>
					<textarea name="items" placeholder="List products and quantities*" value={form.items} onChange={onChange} className="rounded-lg border px-3 py-2 min-h-28 bg-background" aria-required />
					<button className="inline-flex w-full sm:w-auto rounded-lg bg-primary text-primary-foreground px-6 py-3 font-medium">Get Quote</button>
					{submitted && <p className="text-sm text-green-600">Thanks! We will email you a quote shortly.</p>}
				</form>
			</div>
		</section>
	)
}

