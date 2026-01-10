import { useState } from 'react'

const AnnouncementBar = () => {
  const [isVisible, setIsVisible] = useState(true)

  if (!isVisible) return null

  return (
    <div className="bg-green-700 text-white text-center py-2 px-4 relative" role="banner" aria-label="Announcement">
      <div className="container mx-auto">
        <p className="text-sm md:text-base">
          🌸 Free shipping on orders over $75! Use code: BLOOM2024
        </p>
      </div>
      <button
        onClick={() => setIsVisible(false)}
        className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-200 transition-colors"
        aria-label="Close announcement"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>
  )
}

export default AnnouncementBar

