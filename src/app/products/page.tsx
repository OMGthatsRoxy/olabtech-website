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
        },
        {
          name: 'OLAB Coach',
          description: '智能学习助手，整合AI技术，帮助您制定个性化学习计划，提升学习效率。',
          icon: Brain,
          category: 'AI工具',
          link: 'https://olabapp.com/coach',
          features: ['个性化学习', 'AI驱动', '智能推荐', '进度跟踪']
        },
        {
          name: 'PDF转Word工具',
          description: '快速将PDF文档转换为可编辑的Word格式，保持原有格式，简单易用。',
          icon: FileText,
          category: '文档工具',
          link: 'https://olabapp.com/pdf2word',
          features: ['格式保持', '快速转换', '批量处理', '在线使用']
        },
        {
          name: '视频文字提取',
          description: '从视频中自动提取文字内容，支持多种语言识别，AI驱动的高精度转换。',
          icon: Video,
          category: '视频工具',
          link: 'https://olabapp.com/extract-video-text',
          features: ['多语言支持', 'AI识别', '高精度', '批量处理']
        },
        {
          name: '图像处理工具',
          description: '智能图像编辑和处理，包括压缩、格式转换等功能，轻量高效。',
          icon: Image,
          category: '图像工具',
          link: 'https://olabapp.com/image-tools',
          features: ['智能压缩', '格式转换', '批量处理', '在线编辑']
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
        },
        {
          name: 'OLAB Coach',
          description: 'Intelligent learning assistant, integrating AI technology to help you create personalized learning plans and improve learning efficiency.',
          icon: Brain,
          category: 'AI Tools',
          link: 'https://olabapp.com/coach',
          features: ['Personalized Learning', 'AI-Powered', 'Smart Recommendations', 'Progress Tracking']
        },
        {
          name: 'PDF to Word Tool',
          description: 'Quickly convert PDF documents to editable Word format while maintaining the original format, simple and easy to use.',
          icon: FileText,
          category: 'Document Tools',
          link: 'https://olabapp.com/pdf2word',
          features: ['Format Preservation', 'Fast Conversion', 'Batch Processing', 'Online Use']
        },
        {
          name: 'Video Text Extraction',
          description: 'Automatically extract text content from videos with support for multiple language recognition, AI-driven high-precision conversion.',
          icon: Video,
          category: 'Video Tools',
          link: 'https://olabapp.com/extract-video-text',
          features: ['Multi-language Support', 'AI Recognition', 'High Precision', 'Batch Processing']
        },
        {
          name: 'Image Processing Tools',
          description: 'Intelligent image editing and processing, including compression, format conversion, and more, lightweight and efficient.',
          icon: Image,
          category: 'Image Tools',
          link: 'https://olabapp.com/image-tools',
          features: ['Smart Compression', 'Format Conversion', 'Batch Processing', 'Online Editing']
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
        },
        {
          name: 'OLAB Coach',
          description: 'Pembantu pembelajaran pintar, mengintegrasikan teknologi AI untuk membantu anda membuat pelan pembelajaran peribadi dan meningkatkan kecekapan pembelajaran.',
          icon: Brain,
          category: 'Alat AI',
          link: 'https://olabapp.com/coach',
          features: ['Pembelajaran Peribadi', 'Berkuasa AI', 'Cadangan Pintar', 'Penjejakan Kemajuan']
        },
        {
          name: 'Alat PDF ke Word',
          description: 'Tukar dokumen PDF kepada format Word yang boleh diedit dengan cepat sambil mengekalkan format asal, mudah dan senang digunakan.',
          icon: FileText,
          category: 'Alat Dokumen',
          link: 'https://olabapp.com/pdf2word',
          features: ['Pemeliharaan Format', 'Penukaran Pantas', 'Pemprosesan Batch', 'Penggunaan Dalam Talian']
        },
        {
          name: 'Pengekstrakan Teks Video',
          description: 'Ekstrak kandungan teks dari video secara automatik dengan sokongan untuk pengiktirafan pelbagai bahasa, penukaran berketepatan tinggi berkuasa AI.',
          icon: Video,
          category: 'Alat Video',
          link: 'https://olabapp.com/extract-video-text',
          features: ['Sokongan Pelbagai Bahasa', 'Pengiktirafan AI', 'Ketepatan Tinggi', 'Pemprosesan Batch']
        },
        {
          name: 'Alat Pemprosesan Imej',
          description: 'Penyuntingan dan pemprosesan imej pintar, termasuk mampatan, penukaran format, dan banyak lagi, ringan dan cekap.',
          icon: Image,
          category: 'Alat Imej',
          link: 'https://olabapp.com/image-tools',
          features: ['Mampatan Pintar', 'Penukaran Format', 'Pemprosesan Batch', 'Penyuntingan Dalam Talian']
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

        {/* CTA Section */}
        <div className="py-20">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-center">
            <h2 className="text-4xl font-bold mb-4">{currentContent.cta.title}</h2>
            <p className="text-xl mb-8 opacity-90">{currentContent.cta.subtitle}</p>
            <Link href="https://olabapp.com" className="bg-white text-blue-600 hover:bg-gray-100 font-medium py-3 px-8 rounded-lg text-lg transition-all duration-200 inline-flex items-center hover:transform hover:-translate-y-1 shadow-lg hover:shadow-xl">
              {currentContent.cta.button}
              <ExternalLink className="ml-2" size={20} />
            </Link>
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
