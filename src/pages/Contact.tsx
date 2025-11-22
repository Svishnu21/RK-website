import { useState, useEffect, useRef } from 'react'
import SEO from '../components/seo/SEO'
import NoSSRMotion from '../components/ui/NoSSRMotion'
import MapEmbed from '../components/layout/MapEmbed'
import { MapPin, Phone, Mail, Globe } from 'lucide-react'

export default function Contact() {
	const [form, setForm] = useState({ name: '', email: '', phone: '', company: '', message: '' })
	const [errors, setErrors] = useState<Record<string, string>>({})
	type Status = 'idle' | 'loading' | 'success' | 'error'
	const [status, setStatus] = useState<Status>('idle')
	const [statusMessage, setStatusMessage] = useState<string | null>(null)
	const timeoutRef = useRef<number | null>(null)
    
	function onChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
		setForm({ ...form, [e.target.name]: e.target.value })
		if (errors[e.target.name]) {
			setErrors({ ...errors, [e.target.name]: '' })
		}
	}

	async function onSubmit(e: React.FormEvent) {
		e.preventDefault()
		// clear any previous status messages
		setStatusMessage(null)
		if (timeoutRef.current) {
			clearTimeout(timeoutRef.current)
			timeoutRef.current = null
		}

		const next: Record<string, string> = {}
		if (!form.name.trim()) next.name = 'Name is required'
		if (!form.email.trim()) next.email = 'Email is required'
		if (!form.message.trim()) next.message = 'Message is required'
		setErrors(next)
		if (Object.keys(next).length > 0) return

		try {
			setStatus('loading')
			// Vite: use VITE_API_URL if set, otherwise assume same origin
			const base = (import.meta.env as any).VITE_API_URL || ''
			const res = await fetch(`${base}/api/contact`, {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(form),
			})
			const data = await res.json()
			if (res.ok && data.ok) {
				setStatus('success')
				setStatusMessage('Message Sent Successfully!')
				setForm({ name: '', email: '', phone: '', company: '', message: '' })

				// auto-reset after 5s
				timeoutRef.current = window.setTimeout(() => {
					setStatus('idle')
					setStatusMessage(null)
					timeoutRef.current = null
				}, 5000)
			} else {
				setStatus('error')
				setStatusMessage(data.error || 'Failed to send message')

				timeoutRef.current = window.setTimeout(() => {
					setStatus('idle')
					setStatusMessage(null)
					timeoutRef.current = null
				}, 5000)
			}
		} catch (err) {
			console.error(err)
			setStatus('error')
			setStatusMessage('Failed to send message')

			timeoutRef.current = window.setTimeout(() => {
				setStatus('idle')
				setStatusMessage(null)
				timeoutRef.current = null
			}, 5000)
		}
	}

	useEffect(() => {
		return () => {
			if (timeoutRef.current) {
				clearTimeout(timeoutRef.current)
				timeoutRef.current = null
			}
		}
	}, [])

	return (
		<div className="bg-white">
			<SEO title="Contact Us | R K Enterprises" description="Contact R K Enterprises for quotes, product inquiries, and delivery details across Tamil Nadu." />
			
			<section className="pt-32 pb-10 bg-white">
				<div className="container mx-auto px-4 sm:px-6 lg:px-8">
					<NoSSRMotion
						data-aos="fade-up"
						data-aos-duration="700"
					>
						<h1 className="text-4xl md:text-5xl font-heading font-bold text-[#222222]">Contact Us</h1>
						<p className="mt-4 text-lg text-[#222222]/70">We're here to help with your stationery needs</p>
					</NoSSRMotion>
				</div>
			</section>

			<section className="section-padding bg-white">
				<div className="container mx-auto px-4 sm:px-6 lg:px-8">
					<div className="grid gap-10 lg:grid-cols-2">
						{/* Left Column: Contact Form */}
						<NoSSRMotion
							data-aos="fade-right"
						>
							<form onSubmit={onSubmit} className="bg-white border border-gray-200 rounded-xl p-6 md:p-8">
								<h2 className="text-2xl font-heading font-bold text-[#222222] mb-6">Send Inquiry</h2>
								<div className="space-y-4">
									<div>
										<label className="text-sm font-medium text-[#222222] mb-1 block">Name *</label>
										<input 
											name="name" 
											value={form.name} 
											onChange={onChange} 
											aria-required 
											className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-2.5 bg-white text-[#222222] focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all" 
										/>
										{errors.name && <p className="text-xs text-red-600 mt-1" role="alert">{errors.name}</p>}
									</div>
									<div className="grid sm:grid-cols-2 gap-4">
										<div>
											<label className="text-sm font-medium text-[#222222] mb-1 block">Email *</label>
											<input 
												type="email" 
												name="email" 
												value={form.email} 
												onChange={onChange} 
												aria-required 
												className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-2.5 bg-white text-[#222222] focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all" 
											/>
											{errors.email && <p className="text-xs text-red-600 mt-1" role="alert">{errors.email}</p>}
										</div>
										<div>
											<label className="text-sm font-medium text-[#222222] mb-1 block">Phone *</label>
											<input 
												name="phone" 
												value={form.phone} 
												onChange={onChange} 
												aria-required 
												className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-2.5 bg-white text-[#222222] focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all" 
											/>
											{errors.phone && <p className="text-xs text-red-600 mt-1" role="alert">{errors.phone}</p>}
										</div>
									</div>
									<div>
										<label className="text-sm font-medium text-[#222222] mb-1 block">Company / School Name</label>
										<input 
											name="company" 
											value={form.company} 
											onChange={onChange} 
											className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-2.5 bg-white text-[#222222] focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all" 
										/>
									</div>
									<div>
										<label className="text-sm font-medium text-[#222222] mb-1 block">Message *</label>
										<textarea 
											name="message" 
											value={form.message} 
											onChange={onChange} 
											aria-required 
											rows={5}
											className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-2.5 bg-white text-[#222222] focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none" 
										/>
										{errors.message && <p className="text-xs text-red-600 mt-1" role="alert">{errors.message}</p>}
									</div>
									<div className="flex flex-col sm:flex-row sm:items-center sm:gap-4">
										<button 
											type="submit"
											className="btn-primary w-full sm:w-auto"
											disabled={status === 'loading'}
										>
											{status === 'loading' ? 'Sending...' : 'Send Inquiry'}
										</button>
										{statusMessage && (
											<p className={`text-sm mt-3 sm:mt-0 ${status === 'success' ? 'text-green-600' : 'text-red-600'}`}>
												{statusMessage}
											</p>
										)}
									</div>
								</div>
							</form>
						</NoSSRMotion>

						{/* Right Column: Locations & Map */}
						<NoSSRMotion
							data-aos="fade-left"
							data-aos-delay="150"
							className="space-y-6"
						>
							<div className="bg-white border border-gray-200 rounded-xl p-6 md:p-8 no-justify">
								<h3 className="text-2xl font-heading font-bold text-[#222222] mb-6">Our Locations</h3>
								
								{/* Head Office */}
								<div className="mb-6 pb-6 border-b border-gray-200">
									<div className="flex items-start gap-3 mb-3">
										<MapPin className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
										<div>
											<h4 className="font-heading font-semibold text-lg text-[#222222] mb-2">HEAD OFFICE :(SALEM)</h4>
											<p className="text-sm text-[#222222]/70 leading-relaxed">
												N0 - 69-1, Palaniappa Nagar,<br />
												Near KPN Bunk,<br />
												SALEM - 636 005
											</p>
											<div className="mt-2 flex flex-col gap-1 text-sm text-[#222222]/70">
												<div className="flex items-center gap-2"><Phone className="h-4 w-4" /><span>Ph: +91 427 2445299,</span></div>
												<div className="flex items-center gap-2"><Phone className="h-4 w-4" /><span>+91 97871 90999 , 97876 07888</span></div>
											</div>
										</div>
									</div>
								</div>

								{/* Branch Office - Tirunelveli */}
								<div className="mb-6 pb-6 border-b border-gray-200">
									<div className="flex items-start gap-3 mb-3">
										<MapPin className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
										<div>
											<h4 className="font-heading font-semibold text-lg text-[#222222] mb-2">Branch Office (Tirunelveli)</h4>
											<p className="text-sm text-[#222222]/70 leading-relaxed">
												No - 48, SMA Nagar, Gandhi Nagar<br />
												TIRUNELVELI - 627 008
											</p>
											<div className="mt-2 flex items-center gap-2 text-sm text-[#222222]/70">
												<Phone className="h-4 w-4" />
												<span>+91 97871 20999</span>
											</div>
										</div>
									</div>
								</div>

								{/* Branch Office - Bengaluru */}
								<div className="mb-6">
									<div className="flex items-start gap-3 mb-3">
										<MapPin className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
										<div>
											<h4 className="font-heading font-semibold text-lg text-[#222222] mb-2">Branch Office (Bengaluru)</h4>
											<p className="text-sm text-[#222222]/70 leading-relaxed">
												No - 31, 1st Main, 1st Cross, Mysore Road<br />
												Deepanjali Nagar, BENGALURU - 560 026
											</p>
										</div>
									</div>
								</div>

								{/* Email & Web */}
								<div className="pt-4 border-t border-gray-200 space-y-2">
									<div className="flex items-center gap-2 text-sm text-[#222222]/70">
										<Mail className="h-4 w-4" />
										<span>rkenterprisessalem@gmail.com</span>
									</div>
								</div>
							</div>

							{/* Google Map */}
							<div className="bg-white border border-gray-200 rounded-xl overflow-hidden">
																<MapEmbed
																	src={
																		"https://www.google.com/maps?q=69%2C%20Palaniappa%20Nagar%2C%20Thiruvakavundanur%2C%20Salem%2C%20Tamil%20Nadu%20636005%2C%20India&output=embed"
																	}
																	height={400}
																	title="R K Enterprises Head Office Location"
																/>
								<div className="p-4 bg-gray-50 text-center">
									<p className="text-xs text-[#222222]/60">
										Map showing R K Enterprises Head Office location in Salem
									</p>
								</div>
							</div>
						</NoSSRMotion>
					</div>
				</div>
			</section>
		</div>
	)
}
