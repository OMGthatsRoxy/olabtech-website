import type { Metadata } from 'next'
import './globals.css'
import { LanguageProvider } from '@/contexts/LanguageContext'

export const metadata: Metadata = {
  title: 'OLAB Tech - Built Fast. Tailored Smart.',
  description: 'The Tech Toolbox for Individuals. A solo-founded micro tech studio focused on building lightweight apps and AI-powered tools to help individuals create websites and streamline their work.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gray-900 text-white">
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  )
}
