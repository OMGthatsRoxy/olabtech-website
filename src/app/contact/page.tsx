'use client'

import Navbar from '@/components/olabtech/Navbar'
import { useLanguage } from '@/contexts/LanguageContext'
import { useState } from 'react'
import { Mail, Phone, MapPin, Send } from 'lucide-react'

export default function ContactPage() {
  const { currentLanguage } = useLanguage()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // 这里可以添加表单提交逻辑
    console.log('Form submitted:', formData)
    alert(currentLanguage === 'zh' ? '感谢您的留言！我们会尽快回复您。' : 
          currentLanguage === 'en' ? 'Thank you for your message! We will reply to you as soon as possible.' :
          'Terima kasih atas mesej anda! Kami akan membalas anda secepat mungkin.')
    setFormData({ name: '', email: '', subject: '', message: '' })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const content = {
    zh: {
      title: '联系我们',
      subtitle: '我们很乐意听取您的想法和建议。请随时与我们联系。',
      form: {
        title: '发送消息',
        name: '姓名 *',
        email: '邮箱 *',
        subject: '主题 *',
        subjectPlaceholder: '请选择主题',
        subjects: [
          { value: 'general', label: '一般咨询' },
          { value: 'product', label: '产品相关' },
          { value: 'technical', label: '技术支持' },
          { value: 'partnership', label: '合作机会' },
          { value: 'feedback', label: '意见反馈' }
        ],
        message: '消息内容 *',
        messagePlaceholder: '请详细描述您的问题或建议...',
        submit: '发送消息'
      },
      info: {
        title: '联系信息',
        email: {
          title: '邮箱'
        },
        phone: {
          title: '电话'
        },
        address: {
          title: '地址'
        }
      },
      faq: {
        title: '常见问题',
        items: [
          {
            question: '如何开始使用你们的工具？',
            answer: '访问我们的工具平台 olabapp.com，选择您需要的工具即可开始使用。'
          },
          {
            question: '是否提供技术支持？',
            answer: '是的，我们提供全面的技术支持服务，您可以通过邮箱或电话联系我们。'
          }
        ]
      }
    },
    en: {
      title: 'Contact Us',
      subtitle: 'We would love to hear your thoughts and suggestions. Please feel free to contact us.',
      form: {
        title: 'Send Message',
        name: 'Name *',
        email: 'Email *',
        subject: 'Subject *',
        subjectPlaceholder: 'Please select a subject',
        subjects: [
          { value: 'general', label: 'General Inquiry' },
          { value: 'product', label: 'Product Related' },
          { value: 'technical', label: 'Technical Support' },
          { value: 'partnership', label: 'Partnership Opportunity' },
          { value: 'feedback', label: 'Feedback' }
        ],
        message: 'Message Content *',
        messagePlaceholder: 'Please describe your question or suggestion in detail...',
        submit: 'Send Message'
      },
      info: {
        title: 'Contact Information',
        email: {
          title: 'Email'
        },
        phone: {
          title: 'Phone'
        },
        address: {
          title: 'Address'
        }
      },
      faq: {
        title: 'Frequently Asked Questions',
        items: [
          {
            question: 'How do I start using your tools?',
            answer: 'Visit our tool platform at olabapp.com and select the tools you need to get started.'
          },
          {
            question: 'Do you provide technical support?',
            answer: 'Yes, we provide comprehensive technical support services. You can contact us via email or phone.'
          }
        ]
      }
    },
    ms: {
      title: 'Hubungi Kami',
      subtitle: 'Kami ingin mendengar pemikiran dan cadangan anda. Sila hubungi kami.',
      form: {
        title: 'Hantar Mesej',
        name: 'Nama *',
        email: 'E-mel *',
        subject: 'Subjek *',
        subjectPlaceholder: 'Sila pilih subjek',
        subjects: [
          { value: 'general', label: 'Pertanyaan Umum' },
          { value: 'product', label: 'Berkaitan Produk' },
          { value: 'technical', label: 'Sokongan Teknikal' },
          { value: 'partnership', label: 'Peluang Perkongsian' },
          { value: 'feedback', label: 'Maklum Balas' }
        ],
        message: 'Kandungan Mesej *',
        messagePlaceholder: 'Sila terangkan soalan atau cadangan anda secara terperinci...',
        submit: 'Hantar Mesej'
      },
      info: {
        title: 'Maklumat Hubungan',
        email: {
          title: 'E-mel'
        },
        phone: {
          title: 'Telefon'
        },
        address: {
          title: 'Alamat'
        }
      },
      faq: {
        title: 'Soalan Lazim',
        items: [
          {
            question: 'Bagaimana saya mula menggunakan alat anda?',
            answer: 'Lawati platform alat kami di olabapp.com dan pilih alat yang anda perlukan untuk bermula.'
          },
          {
            question: 'Adakah anda menyediakan sokongan teknikal?',
            answer: 'Ya, kami menyediakan perkhidmatan sokongan teknikal yang komprehensif. Anda boleh menghubungi kami melalui e-mel atau telefon.'
          }
        ]
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

        {/* Contact Form and Info */}
        <div className="py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-gray-800 rounded-2xl p-8 border border-gray-700">
              <h2 className="text-2xl font-bold mb-6">
                {currentContent.form.title}
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                      {currentContent.form.name}
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-white placeholder-gray-400"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                      {currentContent.form.email}
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-white placeholder-gray-400"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                    {currentContent.form.subject}
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-white"
                  >
                    <option value="">{currentContent.form.subjectPlaceholder}</option>
                    {currentContent.form.subjects.map((subject) => (
                      <option key={subject.value} value={subject.value}>{subject.label}</option>
                    ))}
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    {currentContent.form.message}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-white placeholder-gray-400"
                    placeholder={currentContent.form.messagePlaceholder}
                  />
                </div>
                
                <button
                  type="submit"
                  className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-all duration-200 inline-flex items-center hover:transform hover:-translate-y-1"
                >
                  {currentContent.form.submit}
                  <Send className="ml-2" size={16} />
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div className="bg-gray-800 rounded-2xl p-8 border border-gray-700">
                <h2 className="text-2xl font-bold mb-6">
                  {currentContent.info.title}
                </h2>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-gray-700 w-12 h-12 rounded-lg flex items-center justify-center mr-4 border border-gray-600">
                      <Mail className="text-blue-400" size={24} />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-1">
                        {currentContent.info.email.title}
                      </h3>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-gray-700 w-12 h-12 rounded-lg flex items-center justify-center mr-4 border border-gray-600">
                      <Phone className="text-blue-400" size={24} />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-1">
                        {currentContent.info.phone.title}
                      </h3>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-gray-700 w-12 h-12 rounded-lg flex items-center justify-center mr-4 border border-gray-600">
                      <MapPin className="text-blue-400" size={24} />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-1">
                        {currentContent.info.address.title}
                      </h3>
                    </div>
                  </div>
                </div>
              </div>

              {/* FAQ Section */}
              <div className="bg-gray-800 rounded-2xl p-8 border border-gray-700">
                <h3 className="text-xl font-semibold text-white mb-4">
                  {currentContent.faq.title}
                </h3>
                <div className="space-y-4">
                  {currentContent.faq.items.map((item, index) => (
                    <div key={index} className="bg-gray-700 rounded-lg p-4 border border-gray-600">
                      <h4 className="font-medium text-white mb-2">
                        {item.question}
                      </h4>
                      <p className="text-gray-300 text-sm leading-relaxed">
                        {item.answer}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
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
