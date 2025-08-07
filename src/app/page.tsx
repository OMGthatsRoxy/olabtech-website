'use client'

import Navbar from '@/components/olabtech/Navbar'
import Link from 'next/link'
import { ArrowRight, Sparkles, Users, Target, Zap, Code } from 'lucide-react'
import { useLanguage } from '@/contexts/LanguageContext'

export default function HomePage() {
  const { currentLanguage } = useLanguage()

  const content = {
    zh: {
      title: '欢迎来到',
      brand: 'OLAB Tech',
      subtitle: '快速上线，灵活定制。为个人打造的科技工具箱，专注于开发轻量小应用、整合AI工具，帮助个人用户快速建立网站与实现自动化。',
      cta1: '体验 Trainer Logbook',
      cta2: '使用工具平台',
      cta3: '了解我们的产品',
      featuresTitle: '为什么选择 OLAB Tech？',
      featuresSubtitle: '我们相信好工具不必复杂。一个人，一个愿景，多种强大解决方案。',
      features: [
        {
          icon: Zap,
          title: '快速上线',
          description: '专注于垂直领域解决方案，快速构建，保持简单，专为个人使用而设计。'
        },
        {
          icon: Code,
          title: '轻量应用',
          description: '开发轻量小应用，整合AI工具，帮助个人用户快速建立网站与实现自动化。'
        },
        {
          icon: Target,
          title: '灵活定制',
          description: '为个体用户提供高效、灵活、可落地的数字解决方案，满足个性化需求。'
        }
      ],
      ctaSection: {
        title: '准备好提升您的工作效率了吗？',
        description: '体验我们的健身教练客户管理系统和智能在线工具平台，开启高效工作模式。',
        button1: '体验 Trainer Logbook',
        button2: '使用工具平台'
      },
      slogan: '快速上线，灵活定制',
      tagline: '为个人打造的科技工具箱'
    },
    en: {
      title: 'Welcome to',
      brand: 'OLAB Tech',
      subtitle: 'Built Fast. Tailored Smart. The Tech Toolbox for Individuals. We focus on building lightweight apps and AI-powered tools to help individuals create websites and streamline their work.',
      cta1: 'Try Trainer Logbook',
      cta2: 'Use Tool Platform',
      cta3: 'Learn About Our Products',
      featuresTitle: 'Why Choose OLAB Tech?',
      featuresSubtitle: 'We believe that good tools don\'t have to be big. One person, one vision, many powerful solutions.',
      features: [
        {
          icon: Zap,
          title: 'Built Fast',
          description: 'Specializing in vertical solutions — built fast, kept simple, and tailored for personal use.'
        },
        {
          icon: Code,
          title: 'Lightweight Apps',
          description: 'Building lightweight apps and AI-powered tools to help individuals create websites and streamline their work.'
        },
        {
          icon: Target,
          title: 'Tailored Smart',
          description: 'Providing efficient, flexible, and practical digital solutions for individual users with personalized needs.'
        }
      ],
      ctaSection: {
        title: 'Ready to boost your work efficiency?',
        description: 'Experience our client management system for fitness coaches and smart online utilities platform to start efficient work mode.',
        button1: 'Try Trainer Logbook',
        button2: 'Use Tool Platform'
      },
      slogan: 'Built Fast. Tailored Smart.',
      tagline: 'The Tech Toolbox for Individuals'
    },
    ms: {
      title: 'Selamat Datang ke',
      brand: 'OLAB Tech',
      subtitle: 'Dibina Pantas. Disesuaikan Bijak. Kotak Alat Teknologi untuk Individu. Kami fokus pada membina aplikasi ringan dan alat berkuasa AI untuk membantu individu mencipta laman web dan memudahkan kerja mereka.',
      cta1: 'Cuba Trainer Logbook',
      cta2: 'Gunakan Platform Alat',
      cta3: 'Ketahui Tentang Produk Kami',
      featuresTitle: 'Mengapa Pilih OLAB Tech?',
      featuresSubtitle: 'Kami percaya bahawa alat yang baik tidak perlu besar. Satu orang, satu visi, banyak penyelesaian berkuasa.',
      features: [
        {
          icon: Zap,
          title: 'Dibina Pantas',
          description: 'Mengkhususkan dalam penyelesaian menegak — dibina pantas, disimpan mudah, dan disesuaikan untuk kegunaan peribadi.'
        },
        {
          icon: Code,
          title: 'Aplikasi Ringan',
          description: 'Membina aplikasi ringan dan alat berkuasa AI untuk membantu individu mencipta laman web dan memudahkan kerja mereka.'
        },
        {
          icon: Target,
          title: 'Disesuaikan Bijak',
          description: 'Menyediakan penyelesaian digital yang cekap, fleksibel, dan praktikal untuk pengguna individu dengan keperluan peribadi.'
        }
      ],
      ctaSection: {
        title: 'Sedia untuk meningkatkan kecekapan kerja anda?',
        description: 'Cuba sistem pengurusan pelanggan untuk jurulatih kecergasan dan platform utiliti dalam talian pintar kami untuk memulakan mod kerja yang cekap.',
        button1: 'Cuba Trainer Logbook',
        button2: 'Gunakan Platform Alat'
      },
      slogan: 'Dibina Pantas. Disesuaikan Bijak.',
      tagline: 'Kotak Alat Teknologi untuk Individu'
    }
  }

  const currentContent = content[currentLanguage as keyof typeof content]

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navbar />
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center py-20">
          <div className="mb-6">
            <span className="text-lg text-blue-400 font-medium">{currentContent.slogan}</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            {currentContent.title}
            <span className="text-blue-400"> {currentContent.brand}</span>
          </h1>
          <p className="text-xl text-gray-300 mb-4 max-w-4xl mx-auto leading-relaxed">
            {currentContent.subtitle}
          </p>
          <p className="text-lg text-blue-400 font-medium mb-8">
            {currentContent.tagline}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/products/trainer-logbook" className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-lg text-lg transition-all duration-200 inline-flex items-center hover:transform hover:-translate-y-1">
              {currentContent.cta1}
              <ArrowRight className="ml-2" size={20} />
            </Link>
            <Link href="https://olabapp.com" className="bg-gray-700 hover:bg-gray-600 text-white font-medium py-3 px-8 rounded-lg text-lg transition-all duration-200 inline-flex items-center hover:transform hover:-translate-y-1">
              {currentContent.cta2}
              <ArrowRight className="ml-2" size={20} />
            </Link>
            <Link href="/products" className="bg-gray-700 hover:bg-gray-600 text-white font-medium py-3 px-8 rounded-lg text-lg transition-all duration-200 hover:transform hover:-translate-y-1">
              {currentContent.cta3}
            </Link>
          </div>
        </div>

        {/* Features Section */}
        <div className="py-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              {currentContent.featuresTitle}
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              {currentContent.featuresSubtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {currentContent.features.map((feature, index) => {
              const IconComponent = feature.icon
              return (
                <div key={index} className="bg-gray-800 rounded-2xl p-6 border border-gray-700 hover:transform hover:-translate-y-1 transition-all duration-300 hover:shadow-2xl text-center">
                  <div className="bg-gray-700 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 border border-gray-600">
                    <IconComponent className="text-blue-400" size={32} />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                  <p className="text-gray-300 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>

        {/* CTA Section */}
        <div className="py-20">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-center">
            <h2 className="text-4xl font-bold mb-4">{currentContent.ctaSection.title}</h2>
            <p className="text-xl mb-8 opacity-90">{currentContent.ctaSection.description}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/products/trainer-logbook" className="bg-white text-blue-600 hover:bg-gray-100 font-medium py-3 px-8 rounded-lg text-lg transition-all duration-200 inline-flex items-center hover:transform hover:-translate-y-1 shadow-lg hover:shadow-xl">
                {currentContent.ctaSection.button1}
                <ArrowRight className="ml-2" size={20} />
              </Link>
              <Link href="https://olabapp.com" className="bg-white text-blue-600 hover:bg-gray-100 font-medium py-3 px-8 rounded-lg text-lg transition-all duration-200 inline-flex items-center hover:transform hover:-translate-y-1 shadow-lg hover:shadow-xl">
                {currentContent.ctaSection.button2}
                <ArrowRight className="ml-2" size={20} />
              </Link>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="py-12 text-center border-t border-gray-700">
          <p className="text-gray-400">
            &copy; 2024 OLAB Tech. 
            {currentLanguage === 'zh' ? ' 为个人打造的科技工具箱' :
             currentLanguage === 'en' ? ' The Tech Toolbox for Individuals' :
             'Kotak Alat Teknologi untuk Individu'}
          </p>
        </div>
      </div>
    </div>
  )
}
