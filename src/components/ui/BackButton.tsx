import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'

export default function BackButton() {
  const location = useLocation()
  const navigate = useNavigate()

  // Do not render on the home page
  if (location.pathname === '/') return null

  function handleBack() {
    // If we're on any blog-related route (listing or a post), go to Home instead
    if (location.pathname.startsWith('/blog')) {
      navigate('/')
      return
    }

    // Otherwise fall back to history back
    navigate(-1)
  }

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 mb-4">
      <button
        type="button"
        onClick={handleBack}
        aria-label="Back"
        className="inline-flex items-center gap-2 text-gray-500 hover:text-pink-600 transition-colors transition-transform duration-200 hover:-translate-x-1 font-medium py-2 px-3 touch-manipulation"
      >
        <ArrowLeft className="h-4 w-4" />
        <span>Back</span>
      </button>
    </div>
  )
}
