'use client'

import Navbar from '@/components/olabtech/Navbar'
import { useLanguage } from '@/contexts/LanguageContext'
import Link from 'next/link'
import { FileText, Video, Image, Brain, ArrowRight, Zap, Shield, Clock } from 'lucide-react'

export default function OLABAppHomePage() {
  const { currentLanguage } = useLanguage()

  const content = {
    zh: {
      title: '专业的在线',
      brand: '工具平台',
      subtitle: '提供PDF处理、视频编辑、图像处理和AI工具等多种实用功能，让您的工作更高效。',
      cta1: '开始使用',
      cta2: '了解更多',
      categories: [
        {
          name: 'PDF工具',
          description: 'PDF转换、编辑、压缩等实用功能',
          icon: FileText,
          href: '/category/pdf',
          tools: ['PDF转Word', 'PDF合并', 'PDF压缩', 'PDF转图片']
        },
        {
          name: '视频工具',
          description: '视频处理、格式转换、文字提取',
          icon: Video,
          href: '/category/video',
          tools: ['视频文字提取', '视频格式转换', '视频压缩', '视频剪辑']
        },
        {
          name: '图像工具',
          description: '图像编辑、格式转换、智能处理',
          icon: Image,
          href: '/category/image',
          tools: ['图像压缩', '格式转换', '背景移除', '图像增强']
        },
        {
          name: 'AI工具',
          description: '智能助手、内容生成、数据分析',
          icon: Brain,
          href: '/category/ai',
          tools: ['OLAB Coach', '智能写作', '数据分析', '内容优化']
        }
      ],
      features: [
        {
          icon: Zap,
          title: '快速处理',
          description: '所有工具都经过优化，确保快速响应和处理'
        },
        {
          icon: Shield,
          title: '安全可靠',
          description: '您的文件安全是我们的首要考虑，所有数据都会自动清理'
        },
        {
          icon: Clock,
          title: '24/7可用',
          description: '随时随地使用我们的工具，无需下载安装'
        }
      ]
    },
    en: {
      title: 'Professional Online',
      brand: 'Tool Platform',
      subtitle: 'Providing PDF processing, video editing, image processing, and AI tools to make your work more efficient.',
      cta1: 'Get Started',
      cta2: 'Learn More',
      categories: [
        {
          name: 'PDF Tools',
          description: 'PDF conversion, editing, compression and other practical functions',
          icon: FileText,
          href: '/category/pdf',
          tools: ['PDF to Word', 'PDF Merge', 'PDF Compress', 'PDF to Image']
        },
        {
          name: 'Video Tools',
          description: 'Video processing, format conversion, text extraction',
          icon: Video,
          href: '/category/video',
          tools: ['Video Text Extraction', 'Video Format Conversion', 'Video Compression', 'Video Editing']
        },
        {
          name: 'Image Tools',
          description: 'Image editing, format conversion, intelligent processing',
          icon: Image,
          href: '/category/image',
          tools: ['Image Compression', 'Format Conversion', 'Background Removal', 'Image Enhancement']
        },
        {
          name: 'AI Tools',
          description: 'Intelligent assistants, content generation, data analysis',
          icon: Brain,
          href: '/category/ai',
          tools: ['OLAB Coach', 'Smart Writing', 'Data Analysis', 'Content Optimization']
        }
      ],
      features: [
        {
          icon: Zap,
          title: 'Fast Processing',
          description: 'All tools are optimized to ensure fast response and processing'
        },
        {
          icon: Shield,
          title: 'Secure & Reliable',
          description: 'Your file security is our top priority, all data is automatically cleaned'
        },
        {
          icon: Clock,
          title: '24/7 Available',
          description: 'Use our tools anytime, anywhere, no download required'
        }
      ]
    },
    ms: {
      title: 'Platform Alat Dalam Talian',
      brand: 'Profesional',
      subtitle: 'Menyediakan pemprosesan PDF, penyuntingan video, pemprosesan imej, dan alat AI untuk menjadikan kerja anda lebih cekap.',
      cta1: 'Mula Sekarang',
      cta2: 'Ketahui Lagi',
      categories: [
        {
          name: 'Alat PDF',
          description: 'Penukaran PDF, penyuntingan, mampatan dan fungsi praktikal lain',
          icon: FileText,
          href: '/category/pdf',
          tools: ['PDF ke Word', 'Gabungan PDF', 'Mampatan PDF', 'PDF ke Imej']
        },
        {
          name: 'Alat Video',
          description: 'Pemprosesan video, penukaran format, pengekstrakan teks',
          icon: Video,
          href: '/category/video',
          tools: ['Pengekstrakan Teks Video', 'Penukaran Format Video', 'Mampatan Video', 'Penyuntingan Video']
        },
        {
          name: 'Alat Imej',
          description: 'Penyuntingan imej, penukaran format, pemprosesan pintar',
          icon: Image,
          href: '/category/image',
          tools: ['Mampatan Imej', 'Penukaran Format', 'Pembuangan Latar Belakang', 'Peningkatan Imej']
        },
        {
          name: 'Alat AI',
          description: 'Pembantu pintar, penjanaan kandungan, analisis data',
          icon: Brain,
          href: '/category/ai',
          tools: ['OLAB Coach', 'Penulisan Pintar', 'Analisis Data', 'Pengoptimuman Kandungan']
        }
      ],
      features: [
        {
          icon: Zap,
          title: 'Pemprosesan Pantas',
          description: 'Semua alat dioptimumkan untuk memastikan respons dan pemprosesan pantas'
        },
        {
          icon: Shield,
          title: 'Selamat & Boleh Dipercayai',
          description: 'Keselamatan fail anda adalah keutamaan kami, semua data dibersihkan secara automatik'
        },
        {
          icon: Clock,
          title: 'Tersedia 24/7',
          description: 'Gunakan alat kami pada bila-bila masa, di mana sahaja, tiada muat turun diperlukan'
        }
      ]
    }
  }

  const currentContent = content[currentLanguage as keyof typeof content]

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navbar />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center py-20">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            {currentContent.title}
            <span className="text-blue-400"> {currentContent.brand}</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            {currentContent.subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="#tools" className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-lg text-lg transition-all duration-200 inline-flex items-center hover:transform hover:-translate-y-1">
              {currentContent.cta1}
              <ArrowRight className="ml-2" size={20} />
            </Link>
            <Link href="https://olabtech.com" className="bg-gray-700 hover:bg-gray-600 text-white font-medium py-3 px-8 rounded-lg text-lg transition-all duration-200 hover:transform hover:-translate-y-1">
              {currentContent.cta2}
            </Link>
          </div>
        </div>

        {/* Features Section */}
        <div className="py-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {currentContent.features.map((feature, index) => {
              const IconComponent = feature.icon
              return (
                <div key={index} className="bg-gray-800 rounded-2xl p-6 border border-gray-700 hover:transform hover:-translate-y-1 transition-all duration-300 hover:shadow-2xl text-center">
                  <div className="bg-gray-700 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 border border-gray-600">
                    <IconComponent className="text-blue-400" size={32} />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>

        {/* Tools Categories */}
        <div id="tools" className="py-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              {currentLanguage === 'zh' ? '工具分类' : 
               currentLanguage === 'en' ? 'Tool Categories' : 
               'Kategori Alat'}
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              {currentLanguage === 'zh' ? '按功能分类的实用工具集合' :
               currentLanguage === 'en' ? 'Collection of practical tools categorized by function' :
               'Koleksi alat praktikal yang dikategorikan mengikut fungsi'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {currentContent.categories.map((category, index) => {
              const IconComponent = category.icon
              return (
                <div key={index} className="bg-gray-800 rounded-2xl p-6 border border-gray-700 hover:transform hover:-translate-y-1 transition-all duration-300 hover:shadow-2xl">
                  <div className="flex items-start justify-between mb-4">
                    <div className="bg-gray-700 w-12 h-12 rounded-lg flex items-center justify-center border border-gray-600">
                      <IconComponent className="text-blue-400" size={24} />
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {category.name}
                  </h3>
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {category.description}
                  </p>
                  
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2">
                      {category.tools.map((tool, toolIndex) => (
                        <span key={toolIndex} className="text-sm text-blue-400 bg-blue-400/10 px-2 py-1 rounded">
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <Link
                    href={category.href}
                    className="inline-flex items-center text-blue-400 hover:text-blue-300 font-medium transition-colors duration-200"
                  >
                    {currentLanguage === 'zh' ? '查看工具' : 
                     currentLanguage === 'en' ? 'View Tools' : 
                     'Lihat Alat'}
                    <ArrowRight className="ml-1" size={16} />
                  </Link>
                </div>
              )
            })}
          </div>
        </div>

        {/* CTA Section */}
        <div className="py-20">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-center">
            <h2 className="text-4xl font-bold mb-4">
              {currentLanguage === 'zh' ? '准备好提升您的工作效率了吗？' :
               currentLanguage === 'en' ? 'Ready to boost your work efficiency?' :
               'Sedia untuk meningkatkan kecekapan kerja anda?'}
            </h2>
            <p className="text-xl mb-8 opacity-90">
              {currentLanguage === 'zh' ? '立即开始使用我们的专业工具平台' :
               currentLanguage === 'en' ? 'Start using our professional tool platform now' :
               'Mula menggunakan platform alat profesional kami sekarang'}
            </p>
            <Link href="#tools" className="bg-white text-blue-600 hover:bg-gray-100 font-medium py-3 px-8 rounded-lg text-lg transition-all duration-200 inline-flex items-center hover:transform hover:-translate-y-1 shadow-lg hover:shadow-xl">
              {currentLanguage === 'zh' ? '开始使用' :
               currentLanguage === 'en' ? 'Get Started' :
               'Mula Sekarang'}
              <ArrowRight className="ml-2" size={20} />
            </Link>
          </div>
        </div>

        {/* Footer */}
        <div className="py-12 text-center border-t border-gray-700">
          <p className="text-gray-400">
            &copy; 2025 OLAB Tech. 
            {currentLanguage === 'zh' ? ' 专为效率而生的技术平台' :
             currentLanguage === 'en' ? ' Technology platform born for efficiency' :
             'Platform teknologi yang dilahirkan untuk kecekapan'}
          </p>
        </div>
      </div>
    </div>
  )
}
