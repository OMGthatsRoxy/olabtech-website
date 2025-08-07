'use client'

import Navbar from '@/components/olabtech/Navbar'
import { useLanguage } from '@/contexts/LanguageContext'
import { useState } from 'react'
import { Send, Brain, Target, BookOpen, TrendingUp, Users } from 'lucide-react'

export default function CoachPage() {
  const { currentLanguage } = useLanguage()
  const [message, setMessage] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [conversation, setConversation] = useState<Array<{type: 'user' | 'assistant', content: string}>>([])



  const content = {
    zh: {
      title: 'OLAB Coach',
      subtitle: '您的智能学习助手，帮助您制定个性化学习计划，提升学习效率。',
      chatTitle: '与 OLAB Coach 对话',
      placeholder: '开始与 OLAB Coach 对话，获取个性化学习建议',
      inputPlaceholder: '输入您的问题或学习需求...',
      features: [
        {
          icon: Target,
          title: '个性化学习',
          description: '根据您的学习目标和进度制定专属计划'
        },
        {
          icon: BookOpen,
          title: '智能指导',
          description: '提供专业的学习建议和资源推荐'
        },
        {
          icon: TrendingUp,
          title: '进度跟踪',
          description: '实时监控学习进度，及时调整策略'
        },
        {
          icon: Users,
          title: '社区支持',
          description: '连接其他学习者，分享经验和心得'
        }
      ]
    },
    en: {
      title: 'OLAB Coach',
      subtitle: 'Your intelligent learning assistant, helping you create personalized learning plans and improve learning efficiency.',
      chatTitle: 'Chat with OLAB Coach',
      placeholder: 'Start chatting with OLAB Coach to get personalized learning advice',
      inputPlaceholder: 'Enter your question or learning needs...',
      features: [
        {
          icon: Target,
          title: 'Personalized Learning',
          description: 'Create exclusive plans based on your learning goals and progress'
        },
        {
          icon: BookOpen,
          title: 'Smart Guidance',
          description: 'Provide professional learning advice and resource recommendations'
        },
        {
          icon: TrendingUp,
          title: 'Progress Tracking',
          description: 'Monitor learning progress in real-time and adjust strategies promptly'
        },
        {
          icon: Users,
          title: 'Community Support',
          description: 'Connect with other learners to share experiences and insights'
        }
      ]
    },
    ms: {
      title: 'OLAB Coach',
      subtitle: 'Pembantu pembelajaran pintar anda, membantu anda mencipta pelan pembelajaran peribadi dan meningkatkan kecekapan pembelajaran.',
      chatTitle: 'Bercakap dengan OLAB Coach',
      placeholder: 'Mula bercakap dengan OLAB Coach untuk mendapatkan nasihat pembelajaran peribadi',
      inputPlaceholder: 'Masukkan soalan atau keperluan pembelajaran anda...',
      features: [
        {
          icon: Target,
          title: 'Pembelajaran Peribadi',
          description: 'Cipta pelan eksklusif berdasarkan matlamat dan kemajuan pembelajaran anda'
        },
        {
          icon: BookOpen,
          title: 'Panduan Pintar',
          description: 'Sediakan nasihat pembelajaran profesional dan cadangan sumber'
        },
        {
          icon: TrendingUp,
          title: 'Penjejakan Kemajuan',
          description: 'Pantau kemajuan pembelajaran secara masa nyata dan laraskan strategi dengan segera'
        },
        {
          icon: Users,
          title: 'Sokongan Komuniti',
          description: 'Hubungkan dengan pelajar lain untuk berkongsi pengalaman dan pandangan'
        }
      ]
    }
  }

  const currentContent = content[currentLanguage as keyof typeof content]

  const handleSendMessage = async () => {
    if (!message.trim() || isLoading) return

    const userMessage = message.trim()
    setMessage('')
    setIsLoading(true)

    // 添加用户消息到对话
    setConversation(prev => [...prev, { type: 'user', content: userMessage }])

    // 模拟AI回复
    setTimeout(() => {
      const aiResponse = generateAIResponse(userMessage)
      setConversation(prev => [...prev, { type: 'assistant', content: aiResponse }])
      setIsLoading(false)
    }, 2000)
  }

  const generateAIResponse = (userMessage: string) => {
    const responses = {
      zh: [
        "我理解您的需求。让我为您制定一个个性化的学习计划。首先，我们需要明确您的学习目标和时间安排。",
        "这是一个很好的问题！基于您的情况，我建议采用分阶段的学习方法，这样可以确保学习效果的最大化。",
        "根据您的描述，我认为您可以从以下几个方面入手：1. 基础知识巩固 2. 实践练习 3. 定期复习。",
        "我注意到您在学习过程中遇到了一些挑战。这是很正常的，让我为您提供一些具体的解决方案。",
        "您的学习进度很不错！继续保持这种学习节奏，同时我建议增加一些实践环节来加深理解。"
      ],
      en: [
        "I understand your needs. Let me create a personalized learning plan for you. First, we need to clarify your learning goals and schedule.",
        "This is a great question! Based on your situation, I recommend a phased learning approach to ensure maximum learning effectiveness.",
        "Based on your description, I think you can start from the following aspects: 1. Basic knowledge consolidation 2. Practice exercises 3. Regular review.",
        "I notice you've encountered some challenges in your learning process. This is very normal, let me provide you with some specific solutions.",
        "Your learning progress is great! Keep up this learning pace, and I suggest adding some practical sessions to deepen understanding."
      ],
      ms: [
        "Saya faham keperluan anda. Biar saya cipta pelan pembelajaran peribadi untuk anda. Pertama, kita perlu menjelaskan matlamat dan jadual pembelajaran anda.",
        "Ini adalah soalan yang bagus! Berdasarkan situasi anda, saya cadangkan pendekatan pembelajaran berperingkat untuk memastikan keberkesanan pembelajaran maksimum.",
        "Berdasarkan penerangan anda, saya fikir anda boleh bermula dari aspek berikut: 1. Pengukuhan pengetahuan asas 2. Latihan praktikal 3. Semakan berkala.",
        "Saya perhatikan anda menghadapi beberapa cabaran dalam proses pembelajaran. Ini sangat normal, biar saya sediakan beberapa penyelesaian khusus untuk anda.",
        "Kemajuan pembelajaran anda hebat! Teruskan dengan kadar pembelajaran ini, dan saya cadangkan menambah beberapa sesi praktikal untuk mendalami pemahaman."
      ]
    }
    const currentResponses = responses[currentLanguage as keyof typeof responses]
    return currentResponses[Math.floor(Math.random() * currentResponses.length)]
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

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

        {/* Main Interface */}
        <div className="py-20">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Chat Interface */}
            <div className="lg:col-span-2">
              <div className="bg-gray-800 rounded-2xl border border-gray-700 h-[600px] flex flex-col">
                {/* Chat Header */}
                <div className="p-4 border-b border-gray-700 bg-gray-700 rounded-t-2xl">
                  <div className="flex items-center">
                    <Brain className="text-blue-400 mr-2" size={24} />
                    <h2 className="text-lg font-semibold text-white">
                      {currentContent.chatTitle}
                    </h2>
                  </div>
                </div>

                {/* Chat Messages */}
                <div className="flex-1 p-4 overflow-y-auto space-y-4">
                  {conversation.length === 0 && (
                    <div className="text-center text-gray-400 py-8">
                      <Brain className="mx-auto h-12 w-12 text-gray-500 mb-4" />
                      <p>{currentContent.placeholder}</p>
                    </div>
                  )}
                  
                  {conversation.map((msg, index) => (
                    <div key={index} className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                      <div className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                        msg.type === 'user' 
                          ? 'bg-blue-600 text-white' 
                          : 'bg-gray-700 text-gray-300'
                      }`}>
                        {msg.content}
                      </div>
                    </div>
                  ))}
                  
                  {isLoading && (
                    <div className="flex justify-start">
                      <div className="bg-gray-700 text-gray-300 px-4 py-2 rounded-lg">
                        <div className="flex items-center space-x-2">
                          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-blue-400"></div>
                          <span>正在思考...</span>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Chat Input */}
                <div className="p-4 border-t border-gray-700">
                  <div className="flex space-x-2">
                    <textarea
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      onKeyPress={handleKeyPress}
                      placeholder={currentContent.inputPlaceholder}
                      className="flex-1 bg-gray-700 border border-gray-600 rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none"
                      rows={2}
                    />
                    <button
                      onClick={handleSendMessage}
                      disabled={isLoading || !message.trim()}
                      className="bg-blue-600 hover:bg-blue-700 disabled:bg-gray-600 text-white px-4 py-2 rounded-lg transition-colors duration-200 flex items-center justify-center"
                    >
                      <Send size={20} />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Features Sidebar */}
            <div className="space-y-6">
              {currentContent.features.map((feature, index) => {
                const IconComponent = feature.icon
                return (
                  <div key={index} className="bg-gray-800 rounded-2xl p-6 border border-gray-700 hover:transform hover:-translate-y-1 transition-all duration-300 hover:shadow-2xl">
                    <div className="bg-gray-700 w-12 h-12 rounded-lg flex items-center justify-center mb-4 border border-gray-600">
                      <IconComponent className="text-blue-400" size={24} />
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                )
              })}
            </div>
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
