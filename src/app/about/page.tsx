'use client'

import Navbar from '@/components/olabtech/Navbar'
import { useLanguage } from '@/contexts/LanguageContext'
import { Users, Target, Lightbulb, Heart, Zap, Code, Rocket } from 'lucide-react'

export default function AboutPage() {
  const { currentLanguage } = useLanguage()

  const content = {
    zh: {
      title: '关于 OLAB Tech',
      subtitle: '一家由个人创办的技术公司，专注于开发轻量小应用、整合AI工具，帮助个人用户快速建立网站与实现自动化。',
      vision: {
        title: '我们的愿景',
        description1: 'OLAB Tech 是一家由个人创办的微型技术工作室，专注于构建轻量级应用和AI驱动的工具，帮助个人创建网站并简化工作流程。',
        description2: '我们相信好工具不必复杂。一个人，一个愿景，多种强大解决方案。我们专注于垂直领域解决方案，快速构建，保持简单，专为个人使用而设计。',
        coreTitle: '核心理念',
        corePoints: [
          '快速上线，灵活定制',
          '为个人打造的科技工具箱',
          '轻量应用，AI驱动',
          '垂直领域，深度专注'
        ]
      },
      values: {
        title: '我们的价值观',
        subtitle: '这些价值观指导着我们的每一个决策和产品开发。',
        items: [
          {
            icon: Zap,
            title: '快速构建',
            description: '专注于快速开发和部署，让用户能够迅速获得解决方案。'
          },
          {
            icon: Code,
            title: '轻量设计',
            description: '开发轻量小应用，避免过度复杂化，保持简单高效。'
          },
          {
            icon: Target,
            title: '垂直专注',
            description: '专注于特定垂直领域，提供深度定制的解决方案。'
          },
          {
            icon: Heart,
            title: '个人导向',
            description: '为个体用户设计，满足个人化需求和使用场景。'
          }
        ]
      },
      team: {
        title: '创始人',
        subtitle: '一个人，一个愿景，多种强大解决方案。',
        founderTitle: 'OLAB Tech 创始人',
        description1: 'OLAB Tech 是一家由个人创办的微型技术工作室。我们专注于构建轻量级应用和AI驱动的工具，帮助个人创建网站并简化工作流程。',
        description2: '我们目前的核心产品包括健身教练客户管理系统、在线实用工具平台，聚焦于垂直领域，为个体用户提供高效、灵活、可落地的数字解决方案。',
        description3: '如果您对我们的产品有任何问题或建议，欢迎随时联系我们。'
      }
    },
    en: {
      title: 'About OLAB Tech',
      subtitle: 'A solo-founded micro tech studio focused on building lightweight apps and AI-powered tools to help individuals create websites and streamline their work.',
      vision: {
        title: 'Our Vision',
        description1: 'OLAB Tech is a solo-founded micro tech studio focused on building lightweight apps and AI-powered tools to help individuals create websites and streamline their work.',
        description2: 'We believe that good tools don\'t have to be big. One person, one vision, many powerful solutions. We specialize in vertical solutions — built fast, kept simple, and tailored for personal use.',
        coreTitle: 'Core Philosophy',
        corePoints: [
          'Built Fast. Tailored Smart.',
          'The Tech Toolbox for Individuals',
          'Lightweight Apps, AI-Powered',
          'Vertical Focus, Deep Expertise'
        ]
      },
      values: {
        title: 'Our Values',
        subtitle: 'These values guide every decision and product development we make.',
        items: [
          {
            icon: Zap,
            title: 'Built Fast',
            description: 'Focus on rapid development and deployment, enabling users to get solutions quickly.'
          },
          {
            icon: Code,
            title: 'Lightweight Design',
            description: 'Develop lightweight apps, avoid over-complexity, keep things simple and efficient.'
          },
          {
            icon: Target,
            title: 'Vertical Focus',
            description: 'Focus on specific vertical domains, providing deeply customized solutions.'
          },
          {
            icon: Heart,
            title: 'Individual-Oriented',
            description: 'Designed for individual users, meeting personalized needs and use cases.'
          }
        ]
      },
      team: {
        title: 'Founder',
        subtitle: 'One person, one vision, many powerful solutions.',
        founderTitle: 'OLAB Tech Founder',
        description1: 'OLAB Tech is a solo-founded micro tech studio. We focus on building lightweight apps and AI-powered tools to help individuals create websites and streamline their work.',
        description2: 'Our core products include a client management system for fitness coaches and a growing toolbox of smart online utilities. We specialize in vertical solutions — built fast, kept simple, and tailored for personal use.',
        description3: 'If you have any questions or suggestions about our products, please feel free to contact us.'
      }
    },
    ms: {
      title: 'Tentang OLAB Tech',
      subtitle: 'Studio teknologi mikro yang diasaskan secara solo, fokus pada membina aplikasi ringan dan alat berkuasa AI untuk membantu individu mencipta laman web dan memudahkan kerja mereka.',
      vision: {
        title: 'Visi Kami',
        description1: 'OLAB Tech adalah studio teknologi mikro yang diasaskan secara solo, fokus pada membina aplikasi ringan dan alat berkuasa AI untuk membantu individu mencipta laman web dan memudahkan kerja mereka.',
        description2: 'Kami percaya bahawa alat yang baik tidak perlu besar. Satu orang, satu visi, banyak penyelesaian berkuasa. Kami mengkhususkan dalam penyelesaian menegak — dibina pantas, disimpan mudah, dan disesuaikan untuk kegunaan peribadi.',
        coreTitle: 'Falsafah Teras',
        corePoints: [
          'Dibina Pantas. Disesuaikan Bijak.',
          'Kotak Alat Teknologi untuk Individu',
          'Aplikasi Ringan, Berkuasa AI',
          'Fokus Menegak, Kepakaran Mendalam'
        ]
      },
      values: {
        title: 'Nilai Kami',
        subtitle: 'Nilai-nilai ini memandu setiap keputusan dan pembangunan produk yang kami buat.',
        items: [
          {
            icon: Zap,
            title: 'Dibina Pantas',
            description: 'Fokus pada pembangunan dan penyebaran pantas, membolehkan pengguna mendapatkan penyelesaian dengan cepat.'
          },
          {
            icon: Code,
            title: 'Reka Bentuk Ringan',
            description: 'Membina aplikasi ringan, mengelakkan kerumitan berlebihan, mengekalkan kesederhanaan dan kecekapan.'
          },
          {
            icon: Target,
            title: 'Fokus Menegak',
            description: 'Fokus pada domain menegak tertentu, menyediakan penyelesaian yang disesuaikan secara mendalam.'
          },
          {
            icon: Heart,
            title: 'Berorientasikan Individu',
            description: 'Direka untuk pengguna individu, memenuhi keperluan peribadi dan kes penggunaan.'
          }
        ]
      },
      team: {
        title: 'Pengasas',
        subtitle: 'Satu orang, satu visi, banyak penyelesaian berkuasa.',
        founderTitle: 'Pengasas OLAB Tech',
        description1: 'OLAB Tech adalah studio teknologi mikro yang diasaskan secara solo. Kami fokus pada membina aplikasi ringan dan alat berkuasa AI untuk membantu individu mencipta laman web dan memudahkan kerja mereka.',
        description2: 'Produk teras kami termasuk sistem pengurusan pelanggan untuk jurulatih kecergasan dan kotak alat utiliti dalam talian pintar yang berkembang. Kami mengkhususkan dalam penyelesaian menegak — dibina pantas, disimpan mudah, dan disesuaikan untuk kegunaan peribadi.',
        description3: 'Jika anda mempunyai sebarang soalan atau cadangan tentang produk kami, sila hubungi kami.'
      }
    }
  }

  const currentContent = content[currentLanguage as keyof typeof content]

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navbar />
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center py-20">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            {currentContent.title}
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            {currentContent.subtitle}
          </p>
        </div>

        {/* Vision Section */}
        <div className="py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">
                {currentContent.vision.title}
              </h2>
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                {currentContent.vision.description1}
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                {currentContent.vision.description2}
              </p>
            </div>
            <div className="bg-gray-800 rounded-2xl p-8 border border-gray-700">
              <h3 className="text-2xl font-semibold mb-4">
                {currentContent.vision.coreTitle}
              </h3>
              <ul className="space-y-3">
                {currentContent.vision.corePoints.map((point, index) => (
                  <li key={index} className="flex items-start">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-300">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="py-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              {currentContent.values.title}
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              {currentContent.values.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {currentContent.values.items.map((value, index) => {
              const IconComponent = value.icon
              return (
                <div key={index} className="bg-gray-800 rounded-2xl p-6 border border-gray-700 hover:transform hover:-translate-y-1 transition-all duration-300 hover:shadow-2xl text-center">
                  <div className="bg-gray-700 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 border border-gray-600">
                    <IconComponent className="text-blue-400" size={32} />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{value.title}</h3>
                  <p className="text-gray-300 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>

        {/* Team Section */}
        <div className="py-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              {currentContent.team.title}
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              {currentContent.team.subtitle}
            </p>
          </div>

          <div className="bg-gray-800 rounded-2xl p-12 border border-gray-700 text-center">
            <div className="bg-gray-700 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 border border-gray-600">
              <Rocket className="text-blue-400" size={40} />
            </div>
            <h3 className="text-3xl font-bold mb-6">
              {currentContent.team.founderTitle}
            </h3>
            <p className="text-lg text-gray-300 mb-6 leading-relaxed max-w-4xl mx-auto">
              {currentContent.team.description1}
            </p>
            <p className="text-lg text-gray-300 mb-6 leading-relaxed max-w-4xl mx-auto">
              {currentContent.team.description2}
            </p>
            <p className="text-lg text-gray-300 leading-relaxed max-w-4xl mx-auto">
              {currentContent.team.description3}
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="py-12 text-center border-t border-gray-700">
          <p className="text-gray-400">
            &copy; 2025 OLAB Tech. 
            {currentLanguage === 'zh' ? ' 为个人打造的科技工具箱' :
             currentLanguage === 'en' ? ' The Tech Toolbox for Individuals' :
             'Kotak Alat Teknologi untuk Individu'}
          </p>
        </div>
      </div>
    </div>
  )
}
