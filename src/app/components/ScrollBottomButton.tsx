'use client'

import { useEffect, useState } from 'react'
import { ArrowDown, ArrowUp } from 'lucide-react'

export default function ScrollButtons() {
  const [isAtBottom, setIsAtBottom] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const nearBottom =
        window.innerHeight + window.scrollY >= document.body.offsetHeight - 50
      setIsAtBottom(nearBottom)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToBottom = () => {
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50">
      {!isAtBottom ? (
        <button
          onClick={scrollToBottom}
          className="bg-gray-100 dark:bg-gray-700 text-black dark:text-white px-4 py-2 rounded-full shadow-lg hover:bg-gray-200 transition cursor-pointer"
        >
          <ArrowDown className="w-5 h-5" />
        </button>
      ) : (
        <button
          onClick={scrollToTop}
          className="bg-gray-100 dark:bg-gray-700 text-black dark:text-white px-4 py-2 rounded-full shadow-lg hover:bg-gray-200 transition cursor-pointer"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}
    </div>
  )
}
