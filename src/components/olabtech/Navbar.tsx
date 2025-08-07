'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X, ChevronDown, Globe } from 'lucide-react'
import { useLanguage } from '@/contexts/LanguageContext'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false)
  const { currentLanguage, setLanguage } = useLanguage()

  const languages = [
    { code: 'en', name: 'English', native: 'English' },
    { code: 'zh', name: '中文', native: '中文' },
    { code: 'ms', name: 'Bahasa Melayu', native: 'Bahasa Melayu' }
  ]

  const navigation = {
    en: [
      { name: 'Home', href: '/' },
      { name: 'Products', href: '/products' },
      { name: 'About', href: '/about' },
      { name: 'Blog', href: '/blog' },
      { name: 'Contact', href: '/contact' },
    ],
    zh: [
      { name: '首页', href: '/' },
      { name: '产品', href: '/products' },
      { name: '关于我们', href: '/about' },
      { name: '博客', href: '/blog' },
      { name: '联系我们', href: '/contact' },
    ],
    ms: [
      { name: 'Utama', href: '/' },
      { name: 'Produk', href: '/products' },
      { name: 'Tentang Kami', href: '/about' },
      { name: 'Blog', href: '/blog' },
      { name: 'Hubungi Kami', href: '/contact' },
    ]
  }

  const currentNav = navigation[currentLanguage as keyof typeof navigation] || navigation.en
  const currentLang = languages.find(lang => lang.code === currentLanguage) || languages[0]

  const handleLanguageChange = (langCode: string) => {
    setIsLanguageDropdownOpen(false)
    setLanguage(langCode as 'en' | 'zh' | 'ms')
  }

  return (
    <nav className="bg-gray-800 shadow-lg border-b border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center space-x-6">
            <Link href="/" className="flex-shrink-0">
              <div className="text-2xl font-bold text-primary-400">
                OLAB Tech
              </div>
            </Link>
            
            {/* Language Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsLanguageDropdownOpen(!isLanguageDropdownOpen)}
                className="flex items-center space-x-2 text-gray-300 hover:text-primary-400 px-3 py-2 text-sm font-medium transition-colors duration-200 rounded-lg hover:bg-gray-700"
              >
                <Globe size={16} />
                <span>{currentLang.native}</span>
                <ChevronDown size={14} className={`transition-transform duration-200 ${isLanguageDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {isLanguageDropdownOpen && (
                <div className="absolute top-full left-0 mt-1 w-48 bg-gray-700 rounded-lg shadow-lg border border-gray-600 z-50">
                  <div className="py-1">
                    {languages.map((language) => (
                      <button
                        key={language.code}
                        onClick={() => handleLanguageChange(language.code)}
                        className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-600 transition-colors duration-200 ${
                          currentLanguage === language.code 
                            ? 'text-primary-400 bg-gray-600' 
                            : 'text-gray-300'
                        }`}
                      >
                        {language.native}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
          
          {/* Desktop navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {currentNav.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-300 hover:text-primary-400 px-3 py-2 text-sm font-medium transition-colors duration-200"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-300 hover:text-primary-400"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-800 border-t border-gray-700">
            {currentNav.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-300 hover:text-primary-400 block px-3 py-2 text-base font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}
