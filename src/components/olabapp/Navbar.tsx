'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export default function OLABAppNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toolCategories = [
    { name: 'PDF工具', href: '/category/pdf' },
    { name: '视频工具', href: '/category/video' },
    { name: '图像工具', href: '/category/image' },
    { name: 'AI工具', href: '/category/ai' },
  ]

  return (
    <nav className="bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0">
              <div className="text-2xl font-bold text-primary-600">
                OLAB App
              </div>
            </Link>
          </div>
          
          {/* Desktop navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {toolCategories.map((category) => (
              <Link
                key={category.name}
                href={category.href}
                className="text-gray-700 hover:text-primary-600 px-3 py-2 text-sm font-medium transition-colors duration-200"
              >
                {category.name}
              </Link>
            ))}
            <Link
              href="https://olabtech.com"
              className="text-gray-700 hover:text-primary-600 px-3 py-2 text-sm font-medium transition-colors duration-200"
            >
              关于我们
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-primary-600"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-200">
            {toolCategories.map((category) => (
              <Link
                key={category.name}
                href={category.href}
                className="text-gray-700 hover:text-primary-600 block px-3 py-2 text-base font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                {category.name}
              </Link>
            ))}
            <Link
              href="https://olabtech.com"
              className="text-gray-700 hover:text-primary-600 block px-3 py-2 text-base font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              关于我们
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}
