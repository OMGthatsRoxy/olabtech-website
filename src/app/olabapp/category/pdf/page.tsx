'use client'

import Navbar from '@/components/olabtech/Navbar'
import { useLanguage } from '@/contexts/LanguageContext'
import Link from 'next/link'
import { FileText, ArrowRight, CheckCircle } from 'lucide-react'

export default function PDFToolsPage() {
  const { currentLanguage } = useLanguage()

  const content = {
    zh: {
      title: 'PDF工具',
      subtitle: '专业的PDF处理工具集合，满足您的各种PDF编辑和转换需求。',
      tools: [
        {
          name: 'PDF转Word',
          description: '将PDF文档转换为可编辑的Word格式，保持原有格式和布局。',
          features: ['保持格式', '支持表格', '快速转换', '批量处理'],
          href: '/olabapp/pdf2word',
          popular: true
        },
        {
          name: 'PDF合并',
          description: '将多个PDF文件合并为一个文档，支持自定义页面顺序。',
          features: ['多文件合并', '页面排序', '快速处理', '保持质量'],
          href: '/olabapp/pdf-merge',
          popular: false
        },
        {
          name: 'PDF压缩',
          description: '压缩PDF文件大小，减少存储空间，保持文档质量。',
          features: ['智能压缩', '质量保持', '批量处理', '快速压缩'],
          href: '/olabapp/pdf-compress',
          popular: false
        },
        {
          name: 'PDF转图片',
          description: '将PDF页面转换为高质量图片格式，支持多种图片格式。',
          features: ['多种格式', '高质量输出', '批量转换', '自定义设置'],
          href: '/olabapp/pdf-to-image',
          popular: false
        },
        {
          name: 'PDF分割',
          description: '将大型PDF文件分割成多个小文件，便于管理和分享。',
          features: ['按页分割', '按大小分割', '自定义范围', '快速处理'],
          href: '/olabapp/pdf-split',
          popular: false
        },
        {
          name: 'PDF加密',
          description: '为PDF文件添加密码保护，确保文档安全性。',
          features: ['密码保护', '权限控制', '安全加密', '批量处理'],
          href: '/olabapp/pdf-encrypt',
          popular: false
        }
      ]
    },
    en: {
      title: 'PDF Tools',
      subtitle: 'Professional PDF processing tool collection to meet your various PDF editing and conversion needs.',
      tools: [
        {
          name: 'PDF to Word',
          description: 'Convert PDF documents to editable Word format while maintaining original format and layout.',
          features: ['Format Preservation', 'Table Support', 'Fast Conversion', 'Batch Processing'],
          href: '/olabapp/pdf2word',
          popular: true
        },
        {
          name: 'PDF Merge',
          description: 'Merge multiple PDF files into one document with custom page ordering.',
          features: ['Multi-file Merge', 'Page Sorting', 'Fast Processing', 'Quality Preservation'],
          href: '/olabapp/pdf-merge',
          popular: false
        },
        {
          name: 'PDF Compress',
          description: 'Compress PDF file size to reduce storage space while maintaining document quality.',
          features: ['Smart Compression', 'Quality Preservation', 'Batch Processing', 'Fast Compression'],
          href: '/olabapp/pdf-compress',
          popular: false
        },
        {
          name: 'PDF to Image',
          description: 'Convert PDF pages to high-quality image formats with support for multiple formats.',
          features: ['Multiple Formats', 'High Quality Output', 'Batch Conversion', 'Custom Settings'],
          href: '/olabapp/pdf-to-image',
          popular: false
        },
        {
          name: 'PDF Split',
          description: 'Split large PDF files into multiple smaller files for easy management and sharing.',
          features: ['Page-based Split', 'Size-based Split', 'Custom Range', 'Fast Processing'],
          href: '/olabapp/pdf-split',
          popular: false
        },
        {
          name: 'PDF Encrypt',
          description: 'Add password protection to PDF files to ensure document security.',
          features: ['Password Protection', 'Permission Control', 'Secure Encryption', 'Batch Processing'],
          href: '/olabapp/pdf-encrypt',
          popular: false
        }
      ]
    },
    ms: {
      title: 'Alat PDF',
      subtitle: 'Koleksi alat pemprosesan PDF profesional untuk memenuhi pelbagai keperluan penyuntingan dan penukaran PDF anda.',
      tools: [
        {
          name: 'PDF ke Word',
          description: 'Tukar dokumen PDF kepada format Word yang boleh diedit sambil mengekalkan format dan susun atur asal.',
          features: ['Pemeliharaan Format', 'Sokongan Jadual', 'Penukaran Pantas', 'Pemprosesan Batch'],
          href: '/olabapp/pdf2word',
          popular: true
        },
        {
          name: 'Gabungan PDF',
          description: 'Gabungkan pelbagai fail PDF menjadi satu dokumen dengan susunan halaman tersuai.',
          features: ['Gabungan Multi-fail', 'Penyusunan Halaman', 'Pemprosesan Pantas', 'Pemeliharaan Kualiti'],
          href: '/olabapp/pdf-merge',
          popular: false
        },
        {
          name: 'Mampatan PDF',
          description: 'Mampatkan saiz fail PDF untuk mengurangkan ruang simpanan sambil mengekalkan kualiti dokumen.',
          features: ['Mampatan Pintar', 'Pemeliharaan Kualiti', 'Pemprosesan Batch', 'Mampatan Pantas'],
          href: '/olabapp/pdf-compress',
          popular: false
        },
        {
          name: 'PDF ke Imej',
          description: 'Tukar halaman PDF kepada format imej berkualiti tinggi dengan sokongan untuk pelbagai format.',
          features: ['Pelbagai Format', 'Output Berkualiti Tinggi', 'Penukaran Batch', 'Tetapan Tersuai'],
          href: '/olabapp/pdf-to-image',
          popular: false
        },
        {
          name: 'Pemisahan PDF',
          description: 'Pisahkan fail PDF besar kepada pelbagai fail kecil untuk pengurusan dan perkongsian yang mudah.',
          features: ['Pemisahan Berasaskan Halaman', 'Pemisahan Berasaskan Saiz', 'Julat Tersuai', 'Pemprosesan Pantas'],
          href: '/olabapp/pdf-split',
          popular: false
        },
        {
          name: 'Penyulitan PDF',
          description: 'Tambah perlindungan kata laluan kepada fail PDF untuk memastikan keselamatan dokumen.',
          features: ['Perlindungan Kata Laluan', 'Kawalan Kebenaran', 'Penyulitan Selamat', 'Pemprosesan Batch'],
          href: '/olabapp/pdf-encrypt',
          popular: false
        }
      ]
    }
  }

  const currentContent = content[currentLanguage as keyof typeof content]

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navbar />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center py-20">
          <div className="bg-gray-700 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 border border-gray-600">
            <FileText className="text-blue-400" size={40} />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            {currentContent.title}
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            {currentContent.subtitle}
          </p>
        </div>

        {/* Tools Grid */}
        <div className="py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {currentContent.tools.map((tool, index) => (
              <Link
                key={index}
                href={tool.href}
                className="bg-gray-800 rounded-2xl p-6 border border-gray-700 hover:transform hover:-translate-y-1 transition-all duration-300 hover:shadow-2xl group"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="bg-gray-700 w-12 h-12 rounded-lg flex items-center justify-center border border-gray-600">
                    <FileText className="text-blue-400" size={24} />
                  </div>
                  {tool.popular && (
                    <span className="text-xs font-medium text-blue-400 bg-blue-400/10 px-2 py-1 rounded">
                      {currentLanguage === 'zh' ? '热门' : 
                       currentLanguage === 'en' ? 'Popular' : 
                       'Popular'}
                    </span>
                  )}
                </div>
                
                <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors">
                  {tool.name}
                </h3>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  {tool.description}
                </p>
                
                <div className="space-y-2 mb-4">
                  {tool.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-sm">
                      <CheckCircle className="text-blue-400 mr-2" size={16} />
                      <span className="text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <div className="inline-flex items-center text-blue-400 group-hover:text-blue-300 font-medium transition-colors duration-200">
                  {currentLanguage === 'zh' ? '立即使用' : 
                   currentLanguage === 'en' ? 'Use Now' : 
                   'Gunakan Sekarang'}
                  <ArrowRight className="ml-1" size={16} />
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="py-20">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-center">
            <h2 className="text-4xl font-bold mb-4">
              {currentLanguage === 'zh' ? '需要更多PDF工具？' :
               currentLanguage === 'en' ? 'Need More PDF Tools?' :
               'Perlu Lebih Banyak Alat PDF?'}
            </h2>
            <p className="text-xl mb-8 opacity-90">
              {currentLanguage === 'zh' ? '探索我们完整的PDF处理工具集合' :
               currentLanguage === 'en' ? 'Explore our complete PDF processing tool collection' :
               'Terokai koleksi alat pemprosesan PDF lengkap kami'}
            </p>
            <Link href="/olabapp" className="bg-white text-blue-600 hover:bg-gray-100 font-medium py-3 px-8 rounded-lg text-lg transition-all duration-200 inline-flex items-center hover:transform hover:-translate-y-1 shadow-lg hover:shadow-xl">
              {currentLanguage === 'zh' ? '查看所有工具' :
               currentLanguage === 'en' ? 'View All Tools' :
               'Lihat Semua Alat'}
              <ArrowRight className="ml-2" size={20} />
            </Link>
          </div>
        </div>

        {/* Footer */}
        <div className="py-12 text-center border-t border-gray-700">
          <p className="text-gray-400">
            &copy; 2024 OLAB Tech. 
            {currentLanguage === 'zh' ? ' 专为效率而生的技术平台' :
             currentLanguage === 'en' ? ' Technology platform born for efficiency' :
             'Platform teknologi yang dilahirkan untuk kecekapan'}
          </p>
        </div>
      </div>
    </div>
  )
}
