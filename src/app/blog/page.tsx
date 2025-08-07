'use client'

import Navbar from '@/components/olabtech/Navbar'
import { useLanguage } from '@/contexts/LanguageContext'
import Link from 'next/link'
import { Calendar, Clock, ArrowRight } from 'lucide-react'

export default function BlogPage() {
  const { currentLanguage } = useLanguage()

  const content = {
    zh: {
      title: 'OLAB Tech 博客',
      subtitle: '分享我们的产品进展、技术见解和行业思考。',
      blogPosts: [
        {
          id: 1,
          title: 'OLAB Coach 正式发布：智能学习助手',
          excerpt: '我们很高兴地宣布 OLAB Coach 正式发布。这款智能学习助手将帮助用户制定个性化的学习计划，提升学习效率。',
          date: '2024-01-15',
          readTime: '5分钟',
          category: '产品发布',
          slug: 'olab-coach-launch'
        },
        {
          id: 2,
          title: 'PDF转Word工具的技术实现',
          excerpt: '深入探讨我们如何实现高质量的PDF到Word转换功能，包括格式保持和文字识别的技术细节。',
          date: '2024-01-10',
          readTime: '8分钟',
          category: '技术分享',
          slug: 'pdf-to-word-implementation'
        },
        {
          id: 3,
          title: '视频文字提取技术的发展趋势',
          excerpt: '探讨视频文字提取技术的最新发展，以及我们如何利用AI技术提升识别准确率。',
          date: '2024-01-05',
          readTime: '6分钟',
          category: '技术趋势',
          slug: 'video-text-extraction-trends'
        },
        {
          id: 4,
          title: '用户体验设计的重要性',
          excerpt: '分享我们在产品设计过程中对用户体验的思考，以及如何让工具更加易用和高效。',
          date: '2023-12-28',
          readTime: '7分钟',
          category: '设计思考',
          slug: 'ux-design-importance'
        }
      ],
      newsletter: {
        title: '订阅我们的博客',
        subtitle: '获取最新的产品更新、技术分享和行业见解。',
        placeholder: '输入您的邮箱地址',
        button: '订阅'
      }
    },
    en: {
      title: 'OLAB Tech Blog',
      subtitle: 'Sharing our product progress, technical insights, and industry thoughts.',
      blogPosts: [
        {
          id: 1,
          title: 'OLAB Coach Official Launch: Intelligent Learning Assistant',
          excerpt: 'We are excited to announce the official launch of OLAB Coach. This intelligent learning assistant will help users create personalized learning plans and improve learning efficiency.',
          date: '2024-01-15',
          readTime: '5 min',
          category: 'Product Launch',
          slug: 'olab-coach-launch'
        },
        {
          id: 2,
          title: 'Technical Implementation of PDF to Word Tool',
          excerpt: 'Deep dive into how we achieve high-quality PDF to Word conversion, including format preservation and text recognition technical details.',
          date: '2024-01-10',
          readTime: '8 min',
          category: 'Technical Share',
          slug: 'pdf-to-word-implementation'
        },
        {
          id: 3,
          title: 'Development Trends in Video Text Extraction Technology',
          excerpt: 'Exploring the latest developments in video text extraction technology and how we leverage AI to improve recognition accuracy.',
          date: '2024-01-05',
          readTime: '6 min',
          category: 'Tech Trends',
          slug: 'video-text-extraction-trends'
        },
        {
          id: 4,
          title: 'The Importance of User Experience Design',
          excerpt: 'Sharing our thoughts on user experience during product design and how to make tools more user-friendly and efficient.',
          date: '2023-12-28',
          readTime: '7 min',
          category: 'Design Thinking',
          slug: 'ux-design-importance'
        }
      ],
      newsletter: {
        title: 'Subscribe to Our Blog',
        subtitle: 'Get the latest product updates, technical shares, and industry insights.',
        placeholder: 'Enter your email address',
        button: 'Subscribe'
      }
    },
    ms: {
      title: 'Blog OLAB Tech',
      subtitle: 'Berkongsi kemajuan produk, pandangan teknikal, dan pemikiran industri kami.',
      blogPosts: [
        {
          id: 1,
          title: 'Pelancaran Rasmi OLAB Coach: Pembantu Pembelajaran Pintar',
          excerpt: 'Kami gembira mengumumkan pelancaran rasmi OLAB Coach. Pembantu pembelajaran pintar ini akan membantu pengguna mencipta pelan pembelajaran peribadi dan meningkatkan kecekapan pembelajaran.',
          date: '2024-01-15',
          readTime: '5 min',
          category: 'Pelancaran Produk',
          slug: 'olab-coach-launch'
        },
        {
          id: 2,
          title: 'Pelaksanaan Teknikal Alat PDF ke Word',
          excerpt: 'Mendalami bagaimana kami mencapai penukaran PDF ke Word berkualiti tinggi, termasuk pemeliharaan format dan butiran teknikal pengiktirafan teks.',
          date: '2024-01-10',
          readTime: '8 min',
          category: 'Perkongsian Teknikal',
          slug: 'pdf-to-word-implementation'
        },
        {
          id: 3,
          title: 'Trend Pembangunan dalam Teknologi Pengekstrakan Teks Video',
          excerpt: 'Meneroka perkembangan terkini dalam teknologi pengekstrakan teks video dan bagaimana kami memanfaatkan AI untuk meningkatkan ketepatan pengiktirafan.',
          date: '2024-01-05',
          readTime: '6 min',
          category: 'Trend Teknologi',
          slug: 'video-text-extraction-trends'
        },
        {
          id: 4,
          title: 'Kepentingan Reka Bentuk Pengalaman Pengguna',
          excerpt: 'Berkongsi pemikiran kami tentang pengalaman pengguna semasa reka bentuk produk dan bagaimana menjadikan alat lebih mesra pengguna dan cekap.',
          date: '2023-12-28',
          readTime: '7 min',
          category: 'Pemikiran Reka Bentuk',
          slug: 'ux-design-importance'
        }
      ],
      newsletter: {
        title: 'Langgan Blog Kami',
        subtitle: 'Dapatkan kemas kini produk terkini, perkongsian teknikal, dan pandangan industri.',
        placeholder: 'Masukkan alamat e-mel anda',
        button: 'Langgan'
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
          <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            {currentContent.subtitle}
          </p>
        </div>

        {/* Blog Posts */}
        <div className="py-20">
          <div className="space-y-12">
            {currentContent.blogPosts.map((post) => (
              <article key={post.id} className="bg-gray-800 rounded-2xl p-8 border border-gray-700 hover:transform hover:-translate-y-1 transition-all duration-300 hover:shadow-2xl">
                <div className="mb-4">
                  <span className="text-sm font-medium text-blue-400 bg-blue-400/10 px-3 py-1 rounded-full">
                    {post.category}
                  </span>
                </div>
                
                <h2 className="text-2xl font-bold text-white mb-4">
                  {post.title}
                </h2>
                
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4 text-sm text-gray-400">
                    <div className="flex items-center">
                      <Calendar size={16} className="mr-1" />
                      {post.date}
                    </div>
                    <div className="flex items-center">
                      <Clock size={16} className="mr-1" />
                      {post.readTime}
                    </div>
                  </div>
                  
                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center text-blue-400 hover:text-blue-300 font-medium transition-colors duration-200"
                  >
                    {currentLanguage === 'zh' ? '阅读全文' : 
                     currentLanguage === 'en' ? 'Read More' : 
                     'Baca Lagi'}
                    <ArrowRight className="ml-1" size={16} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="py-20">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-center">
            <h2 className="text-4xl font-bold mb-4">{currentContent.newsletter.title}</h2>
            <p className="text-xl mb-8 opacity-90">{currentContent.newsletter.subtitle}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder={currentContent.newsletter.placeholder}
                className="flex-1 px-4 py-3 rounded-lg border-0 focus:ring-2 focus:ring-white focus:ring-opacity-50 text-gray-900"
              />
              <button className="bg-white text-blue-600 hover:bg-gray-100 font-medium py-3 px-6 rounded-lg transition-all duration-200 hover:transform hover:-translate-y-1 shadow-lg hover:shadow-xl">
                {currentContent.newsletter.button}
              </button>
            </div>
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
