'use client'

import { useLanguage } from '@/contexts/LanguageContext'
import Navbar from '@/components/olabtech/Navbar'
import Footer from '@/components/olabtech/Footer'

export default function TrainerLogbookPage() {
  const { currentLanguage } = useLanguage()

  const content = {
    zh: {
      title: 'Trainer Logbook',
      subtitle: '专为教练打造的专业日志管理系统',
      description: '高效管理客户、配套与课程，助力教练提升服务质量与业务增长',
      features: [
        {
          icon: '👥',
          title: '客户管理',
          description: '全面管理客户信息，建立完整客户档案',
          list: ['客户信息录入与管理', '健身目标设定与跟踪', '课程记录与进度管理', '客户搜索与筛选']
        },
        {
          icon: '🎯',
          title: '潜在客户管理',
          description: '系统化管理潜在客户，提高转化率',
          list: ['潜在客户信息录入', '转化状态跟踪', '联系记录管理', '转化率统计']
        },
        {
          icon: '📅',
          title: '课程排期',
          description: '智能排课系统，避免时间冲突',
          list: ['可视化课程日历', '时间冲突检测', '课程提醒功能', '灵活调整排期']
        },
        {
          icon: '📦',
          title: '配套管理',
          description: '灵活管理健身配套，支持多种计费',
          list: ['多种配套类型', '灵活定价策略', '使用次数跟踪', '到期提醒功能']
        },
        {
          icon: '📝',
          title: '课程记录',
          description: '详细记录课程内容，跟踪训练进度',
          list: ['训练项目记录', '客户反馈收集', '进度评估记录', '历史记录查询']
        },
        {
          icon: '📊',
          title: '数据统计',
          description: '全面数据分析，制定发展策略',
          list: ['月度活跃客户统计', '收入数据分析', '课程完成率统计', '客户增长趋势']
        }
      ],
      cta: {
        title: '准备好提升您的教练业务了吗？',
        description: '立即体验我们的系统，开始高效管理您的客户和课程',
        button: '立即体验系统'
      }
    },
    en: {
      title: 'Trainer Logbook',
      subtitle: 'Professional log management system designed for trainers',
      description: 'Efficiently manage clients, packages, and courses to enhance service quality and business growth',
      features: [
        {
          icon: '👥',
          title: 'Client Management',
          description: 'Comprehensive client information management',
          list: ['Client information entry & management', 'Fitness goal setting & tracking', 'Course records & progress management', 'Client search & filtering']
        },
        {
          icon: '🎯',
          title: 'Prospect Management',
          description: 'Systematic prospect management',
          list: ['Prospect information entry', 'Conversion status tracking', 'Contact record management', 'Conversion rate statistics']
        },
        {
          icon: '📅',
          title: 'Course Scheduling',
          description: 'Smart scheduling system',
          list: ['Visual course calendar', 'Time conflict detection', 'Course reminder function', 'Flexible schedule adjustment']
        },
        {
          icon: '📦',
          title: 'Package Management',
          description: 'Flexible fitness package management',
          list: ['Multiple package types', 'Flexible pricing strategies', 'Usage tracking', 'Expiry reminders']
        },
        {
          icon: '📝',
          title: 'Course Records',
          description: 'Detailed course content recording',
          list: ['Training program records', 'Client feedback collection', 'Progress assessment records', 'Historical record queries']
        },
        {
          icon: '📊',
          title: 'Data Analytics',
          description: 'Comprehensive data analysis',
          list: ['Monthly active client statistics', 'Revenue data analysis', 'Course completion rate statistics', 'Client growth trends']
        }
      ],
      cta: {
        title: 'Ready to enhance your training business?',
        description: 'Experience our system now and start managing your clients and courses efficiently',
        button: 'Try System Now'
      }
    },
    ms: {
      title: 'Trainer Logbook',
      subtitle: 'Sistem pengurusan log profesional untuk jurulatih',
      description: 'Menguruskan pelanggan, pakej, dan kursus dengan cekap untuk meningkatkan kualiti perkhidmatan dan pertumbuhan perniagaan',
      features: [
        {
          icon: '👥',
          title: 'Pengurusan Pelanggan',
          description: 'Pengurusan maklumat pelanggan yang komprehensif',
          list: ['Kemasukan & pengurusan maklumat pelanggan', 'Penetapan & penjejakan matlamat kecergasan', 'Rekod kursus & pengurusan kemajuan', 'Carian & penapis pelanggan']
        },
        {
          icon: '🎯',
          title: 'Pengurusan Prospek',
          description: 'Pengurusan prospek yang sistematik',
          list: ['Kemasukan maklumat prospek', 'Penjejakan status penukaran', 'Pengurusan rekod hubungan', 'Statistik kadar penukaran']
        },
        {
          icon: '📅',
          title: 'Jadual Kursus',
          description: 'Sistem jadual pintar',
          list: ['Kalendar kursus visual', 'Pengesanan konflik masa', 'Fungsi peringatan kursus', 'Pelarasan jadual yang fleksibel']
        },
        {
          icon: '📦',
          title: 'Pengurusan Pakej',
          description: 'Pengurusan pakej kecergasan yang fleksibel',
          list: ['Pelbagai jenis pakej', 'Strategi harga yang fleksibel', 'Penjejakan penggunaan', 'Peringatan tamat tempoh']
        },
        {
          icon: '📝',
          title: 'Rekod Kursus',
          description: 'Rekod kandungan kursus yang terperinci',
          list: ['Rekod program latihan', 'Pengumpulan maklum balas pelanggan', 'Rekod penilaian kemajuan', 'Pertanyaan rekod sejarah']
        },
        {
          icon: '📊',
          title: 'Analisis Data',
          description: 'Analisis data yang komprehensif',
          list: ['Statistik pelanggan aktif bulanan', 'Analisis data pendapatan', 'Statistik kadar penyelesaian kursus', 'Trend pertumbuhan pelanggan']
        }
      ],
      cta: {
        title: 'Sedia untuk meningkatkan perniagaan jurulatih anda?',
        description: 'Cuba sistem kami sekarang dan mula menguruskan pelanggan dan kursus anda dengan cekap',
        button: 'Cuba Sistem Sekarang'
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
          <div className="text-2xl text-gray-400 mb-5 max-w-2xl mx-auto">
            {currentContent.subtitle}
          </div>
          <div className="text-lg text-white max-w-xl mx-auto leading-relaxed">
            {currentContent.description}
          </div>
        </div>

        {/* Features Section */}
        <div className="py-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              {currentLanguage === 'zh' ? '强大功能，专为教练设计' : 
               currentLanguage === 'en' ? 'Powerful Features, Designed for Trainers' : 
               'Ciri Berkuasa, Direka untuk Jurulatih'}
            </h2>
            <div className="text-xl text-gray-400 max-w-2xl mx-auto">
              {currentLanguage === 'zh' ? '全面的客户管理解决方案，让您的教练事业更上一层楼' :
               currentLanguage === 'en' ? 'Comprehensive client management solution to elevate your training business' :
               'Penyelesaian pengurusan pelanggan yang komprehensif untuk meningkatkan perniagaan jurulatih anda'}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {currentContent.features.map((feature, index) => (
              <div key={index} className="bg-gray-800 rounded-2xl p-6 border border-gray-700 hover:transform hover:-translate-y-1 transition-all duration-300 hover:shadow-2xl">
                <div className="text-4xl mb-4 text-center">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-3 text-center">{feature.title}</h3>
                <p className="text-gray-400 mb-4 text-center leading-relaxed">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.list.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start text-sm">
                      <span className="text-blue-400 mr-2 mt-1">✓</span>
                      <span className="text-gray-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Screenshots Section */}
        <div className="py-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              {currentLanguage === 'zh' ? '精美界面，直观体验' :
               currentLanguage === 'en' ? 'Beautiful Interface, Intuitive Experience' :
               'Antara Muka Cantik, Pengalaman Intuitif'}
            </h2>
            <div className="text-xl text-gray-400 max-w-2xl mx-auto">
              {currentLanguage === 'zh' ? '现代化的设计语言，让每一次操作都变得简单高效' :
               currentLanguage === 'en' ? 'Modern design language makes every operation simple and efficient' :
               'Bahasa reka bentuk moden menjadikan setiap operasi mudah dan cekap'}
            </div>
          </div>

          <div className="bg-gray-800 rounded-2xl p-8 border border-gray-700">
            <h3 className="text-2xl font-bold mb-8 text-center">📱 {currentLanguage === 'zh' ? '应用界面展示' : currentLanguage === 'en' ? 'Application Interface Display' : 'Paparan Antara Muka Aplikasi'}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: currentLanguage === 'zh' ? '首页仪表板' : currentLanguage === 'en' ? 'Homepage Dashboard' : 'Papan Pemuka Utama', 
                  desc: currentLanguage === 'zh' ? '数据概览与快速操作' : currentLanguage === 'en' ? 'Data overview & quick operations' : 'Gambaran data & operasi pantas' },
                { title: currentLanguage === 'zh' ? '客户管理' : currentLanguage === 'en' ? 'Client Management' : 'Pengurusan Pelanggan', 
                  desc: currentLanguage === 'zh' ? '客户列表与详细信息' : currentLanguage === 'en' ? 'Client list & detailed information' : 'Senarai pelanggan & maklumat terperinci' },
                { title: currentLanguage === 'zh' ? '课程排期' : currentLanguage === 'en' ? 'Course Schedule' : 'Jadual Kursus', 
                  desc: currentLanguage === 'zh' ? '可视化课程日历' : currentLanguage === 'en' ? 'Visualized course calendar' : 'Kalendar kursus yang divisualkan' },
                { title: currentLanguage === 'zh' ? '潜在客户' : currentLanguage === 'en' ? 'Potential Clients' : 'Pelanggan Berpotensi', 
                  desc: currentLanguage === 'zh' ? '潜在客户管理' : currentLanguage === 'en' ? 'Prospect management' : 'Pengurusan prospek' }
              ].map((item, index) => (
                <div key={index} className="text-center p-6 bg-gray-900 rounded-xl border border-gray-700 hover:transform hover:scale-105 transition-all duration-300">
                  <div className="w-full h-32 bg-gray-800 rounded-lg mb-4 border border-gray-600 flex items-center justify-center">
                    <div className="text-3xl text-blue-400">📱</div>
                  </div>
                  <h4 className="text-lg font-semibold mb-2">{item.title}</h4>
                  <p className="text-gray-400 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="py-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              {currentLanguage === 'zh' ? '系统优势' : currentLanguage === 'en' ? 'System Advantages' : 'Kelebihan Sistem'}
            </h2>
            <div className="text-xl text-gray-400 max-w-2xl mx-auto">
              {currentLanguage === 'zh' ? '专为现代教练打造的核心优势' :
               currentLanguage === 'en' ? 'Core advantages designed for modern trainers' :
               'Kelebihan teras direka untuk jurulatih moden'}
            </div>
          </div>

          <div className="bg-gray-800 rounded-2xl p-8 border border-gray-700">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { icon: '⚡', label: currentLanguage === 'zh' ? '高效管理' : currentLanguage === 'en' ? 'Efficient Management' : 'Pengurusan Cekap' },
                { icon: '📱', label: currentLanguage === 'zh' ? '移动优化' : currentLanguage === 'en' ? 'Mobile Optimized' : 'Dioptimumkan Mobile' },
                { icon: '🔒', label: currentLanguage === 'zh' ? '安全可靠' : currentLanguage === 'en' ? 'Secure & Reliable' : 'Selamat & Boleh Dipercayai' },
                { icon: '🌐', label: currentLanguage === 'zh' ? '云端同步' : currentLanguage === 'en' ? 'Cloud Sync' : 'Sinkronisasi Awan' }
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl mb-3">{stat.icon}</div>
                  <div className="text-gray-300 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Tech Section */}
        <div className="py-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              {currentLanguage === 'zh' ? '技术特色' : currentLanguage === 'en' ? 'Technical Features' : 'Ciri Teknikal'}
            </h2>
          </div>
          <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {['React 19', 'TypeScript', 'Tailwind CSS', 'Firebase'].map((tech, index) => (
                <div key={index} className="bg-gray-900 rounded-lg p-4 text-center border border-gray-700 hover:transform hover:-translate-y-1 transition-all duration-200">
                  <div className="text-white font-medium">{tech}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="py-20">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-center">
            <h2 className="text-4xl font-bold mb-4">{currentContent.cta.title}</h2>
            <p className="text-xl mb-8 opacity-90">{currentContent.cta.description}</p>
            <a
              href="http://localhost:3001"
              className="inline-block bg-white text-blue-600 px-8 py-4 rounded-full font-semibold text-lg hover:transform hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              {currentContent.cta.button}
            </a>
          </div>
        </div>

        {/* Footer */}
        <div className="py-12 text-center border-t border-gray-700">
          <p className="text-gray-400">
            &copy; 2024 {currentLanguage === 'zh' ? 'Trainer Logbook' : 
                        currentLanguage === 'en' ? 'Trainer Logbook' : 
                        'Trainer Logbook'}. 
            {currentLanguage === 'zh' ? '专为教练打造的专业管理平台' :
             currentLanguage === 'en' ? 'Professional management platform for trainers' :
             'Platform pengurusan profesional untuk jurulatih'}
          </p>
        </div>
      </div>
    </div>
  )
}
