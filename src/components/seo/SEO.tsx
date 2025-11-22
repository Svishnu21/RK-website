import { useEffect } from 'react'

type Props = {
	title?: string
	description?: string
}

export default function SEO({ title, description }: Props) {
	useEffect(() => {
		if (title) document.title = title
		if (description) {
			let el = document.querySelector('meta[name="description"]')
			if (!el) {
				el = document.createElement('meta')
				el.setAttribute('name', 'description')
				document.head.appendChild(el)
			}
			el.setAttribute('content', description)
		}
	}, [title, description])
	return null
}

