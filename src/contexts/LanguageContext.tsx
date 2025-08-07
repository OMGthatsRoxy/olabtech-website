'use client'

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react'

type Language = 'en' | 'zh' | 'ms'

interface LanguageContextType {
  currentLanguage: Language
  setLanguage: (lang: Language) => void
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [currentLanguage, setCurrentLanguage] = useState<Language>('en')

  // 从localStorage读取保存的语言设置
  useEffect(() => {
    const savedLanguage = localStorage.getItem('olab-language') as Language
    if (savedLanguage && ['en', 'zh', 'ms'].includes(savedLanguage)) {
      setCurrentLanguage(savedLanguage)
    }
  }, [])

  // 设置语言并保存到localStorage
  const setLanguage = (lang: Language) => {
    setCurrentLanguage(lang)
    localStorage.setItem('olab-language', lang)
  }

  return (
    <LanguageContext.Provider value={{ currentLanguage, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}
