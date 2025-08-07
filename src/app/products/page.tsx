'use client'

import Navbar from '@/components/olabtech/Navbar'
import { useLanguage } from '@/contexts/LanguageContext'
import Link from 'next/link'
import { ExternalLink, FileText, Video, Image, Brain, Users, Zap, Code } from 'lucide-react'

export default function ProductsPage() {
  const { currentLanguage } = useLanguage()

  const content = {
    zh: {
      title: '我们的产品',
      subtitle: '专注于垂直领域，为个体用户提供高效、灵活、可落地的数字解决方案。',
      products: [
        {
          name: 'Trainer Logbook',
          description: '专为健身教练打造的专业客户管理系统，高效管理客户、配套与课程，助力教练提升服务质量与业务增长。',
          icon: Users,
          category: '客户管理系统',
          link: '/products/trainer-logbook',
          features: ['客户信息管理', '课程排期', '配套管理', '数据统计']
        }
      ],
      cta: {
        title: '发现更多工具',
        subtitle: '访问我们的工具平台，体验完整的轻量级应用和AI工具生态系统。',
        button: '访问工具平台'
      }
    },
    en: {
      title: 'Our Products',
      subtitle: 'Specializing in vertical solutions, providing efficient, flexible, and practical digital solutions for individual users.',
      products: [
        {
          name: 'Trainer Logbook',
          description: 'Professional client management system designed for fitness coaches, efficiently managing clients, packages, and courses to enhance service quality and business growth.',
          icon: Users,
          category: 'Client Management',
          link: '/products/trainer-logbook',
          features: ['Client Management', 'Course Scheduling', 'Package Management', 'Data Analytics']
        }
      ],
      cta: {
        title: 'Discover More Tools',
        subtitle: 'Visit our tool platform to experience the complete ecosystem of lightweight apps and AI-powered tools.',
        button: 'Visit Tool Platform'
      }
    },
    ms: {
      title: 'Produk Kami',
      subtitle: 'Mengkhususkan dalam penyelesaian menegak, menyediakan penyelesaian digital yang cekap, fleksibel, dan praktikal untuk pengguna individu.',
      products: [
        {
          name: 'Trainer Logbook',
          description: 'Sistem pengurusan pelanggan profesional yang direka untuk jurulatih kecergasan, menguruskan pelanggan, pakej, dan kursus dengan cekap untuk meningkatkan kualiti perkhidmatan dan pertumbuhan perniagaan.',
          icon: Users,
          category: 'Pengurusan Pelanggan',
          link: '/products/trainer-logbook',
          features: ['Pengurusan Pelanggan', 'Penjadualan Kursus', 'Pengurusan Pakej', 'Analisis Data']
        }
      ],
      cta: {
        title: 'Temui Lebih Banyak Alat',
        subtitle: 'Lawati platform alat kami untuk mengalami ekosistem lengkap aplikasi ringan dan alat berkuasa AI.',
        button: 'Lawati Platform Alat'
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

        {/* Products Grid */}
        <div className="py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {currentContent.products.map((product, index) => {
              const IconComponent = product.icon
              return (
                <div key={index} className="bg-gray-800 rounded-2xl p-6 border border-gray-700 hover:transform hover:-translate-y-1 transition-all duration-300 hover:shadow-2xl">
                  <div className="flex items-start justify-between mb-4">
                    <div className="bg-gray-700 w-12 h-12 rounded-lg flex items-center justify-center border border-gray-600">
                      <IconComponent className="text-blue-400" size={24} />
                    </div>
                    <span className="text-sm font-medium text-blue-400 bg-blue-400/10 px-2 py-1 rounded">
                      {product.category}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {product.name}
                  </h3>
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {product.description}
                  </p>
                  
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2">
                      {product.features.map((feature, featureIndex) => (
                        <span key={featureIndex} className="text-xs text-gray-400 bg-gray-700 px-2 py-1 rounded">
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <Link
                    href={product.link}
                    className="inline-flex items-center text-blue-400 hover:text-blue-300 font-medium transition-colors duration-200"
                  >
                    {currentLanguage === 'zh' ? '立即使用' : 
                     currentLanguage === 'en' ? 'Use Now' : 
                     'Gunakan Sekarang'}
                    <ExternalLink className="ml-1" size={16} />
                  </Link>
                </div>
              )
            })}
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
