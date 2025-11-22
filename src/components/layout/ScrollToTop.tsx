import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export default function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    // instant jump to top on navigation; can change to smooth if preferred
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
    // also reset focus to main for accessibility
    const main = document.querySelector('main') as HTMLElement | null
    if (main) main.focus({ preventScroll: true })
  }, [pathname])

  return null
}
