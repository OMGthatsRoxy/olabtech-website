'use client'

import OLABAppNavbar from '@/components/olabapp/Navbar'
import OLABAppFooter from '@/components/olabapp/Footer'
import { useState } from 'react'
import { Upload, Download, Video, CheckCircle, AlertCircle, Languages } from 'lucide-react'

export default function ExtractVideoTextPage() {
  const [file, setFile] = useState<File | null>(null)
  const [isProcessing, setIsProcessing] = useState(false)
  const [isCompleted, setIsCompleted] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [extractedText, setExtractedText] = useState('')
  const [selectedLanguage, setSelectedLanguage] = useState('auto')

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0]
    if (selectedFile) {
      if (selectedFile.type.startsWith('video/')) {
        setFile(selectedFile)
        setError(null)
      } else {
        setError('请选择视频文件')
        setFile(null)
      }
    }
  }

  const handleExtract = async () => {
    if (!file) return

    setIsProcessing(true)
    setError(null)

    // 模拟提取过程
    setTimeout(() => {
      setIsProcessing(false)
      setIsCompleted(true)
      setExtractedText(`这是从视频 "${file.name}" 中提取的文字内容示例。

视频文字提取功能可以识别视频中的语音内容，并将其转换为可编辑的文本格式。支持多种语言识别，包括中文、英文等。

提取的文字内容可以用于：
• 制作字幕文件
• 生成会议记录
• 内容分析和总结
• 文档整理和归档

我们的AI技术确保高精度的语音识别，让您的工作更加高效。`)
    }, 4000)
  }

  const handleDownload = () => {
    // 模拟下载
    const blob = new Blob([extractedText], { type: 'text/plain' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = 'extracted_text.txt'
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
  }

  const handleCopy = () => {
    navigator.clipboard.writeText(extractedText)
    alert('文字内容已复制到剪贴板')
  }

  return (
    <div className="min-h-screen flex flex-col">
      <OLABAppNavbar />
      
      {/* Header */}
      <section className="bg-gray-50 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              视频文字提取工具
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              从视频中自动提取文字内容，支持多种语言识别，快速生成可编辑的文本。
            </p>
          </div>
        </div>
      </section>

      {/* Tool Interface */}
      <section className="py-12 flex-1">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-md border border-gray-200 p-8">
            {/* File Upload */}
            <div className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                上传视频文件
              </h2>
              
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-primary-400 transition-colors">
                <input
                  type="file"
                  accept="video/*"
                  onChange={handleFileChange}
                  className="hidden"
                  id="file-upload"
                  disabled={isProcessing}
                />
                <label htmlFor="file-upload" className="cursor-pointer">
                  <Upload className="mx-auto h-12 w-12 text-gray-400 mb-4" />
                  <p className="text-lg text-gray-600 mb-2">
                    点击选择视频文件或拖拽到此处
                  </p>
                  <p className="text-sm text-gray-500">
                    支持MP4、AVI、MOV等格式，最大文件大小100MB
                  </p>
                </label>
              </div>

              {file && (
                <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded-lg">
                  <div className="flex items-center">
                    <Video className="text-green-600 mr-2" size={20} />
                    <span className="text-green-800 font-medium">
                      已选择文件: {file.name}
                    </span>
                  </div>
                </div>
              )}

              {error && (
                <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-lg">
                  <div className="flex items-center">
                    <AlertCircle className="text-red-600 mr-2" size={20} />
                    <span className="text-red-800">{error}</span>
                  </div>
                </div>
              )}
            </div>

            {/* Language Selection */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                语言设置
              </h3>
              <div className="flex items-center space-x-4">
                <Languages className="text-gray-500" size={20} />
                <select
                  value={selectedLanguage}
                  onChange={(e) => setSelectedLanguage(e.target.value)}
                  className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  disabled={isProcessing}
                >
                  <option value="auto">自动检测语言</option>
                  <option value="zh">中文</option>
                  <option value="en">英文</option>
                  <option value="ja">日文</option>
                  <option value="ko">韩文</option>
                </select>
              </div>
            </div>

            {/* Extract Button */}
            <div className="mb-8">
              <button
                onClick={handleExtract}
                disabled={!file || isProcessing}
                className="w-full btn-primary py-4 text-lg disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isProcessing ? '提取中...' : '开始提取文字'}
              </button>
            </div>

            {/* Processing Status */}
            {isProcessing && (
              <div className="mb-8 p-6 bg-blue-50 border border-blue-200 rounded-lg">
                <div className="flex items-center justify-center">
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary-600 mr-3"></div>
                  <span className="text-blue-800">正在提取视频中的文字内容，请稍候...</span>
                </div>
              </div>
            )}

            {/* Result */}
            {isCompleted && (
              <div className="mb-8">
                <div className="p-6 bg-green-50 border border-green-200 rounded-lg mb-4">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      <CheckCircle className="text-green-600 mr-2" size={24} />
                      <span className="text-green-800 font-medium">
                        文字提取完成！
                      </span>
                    </div>
                    <div className="flex space-x-2">
                      <button
                        onClick={handleCopy}
                        className="btn-secondary inline-flex items-center"
                      >
                        复制文字
                      </button>
                      <button
                        onClick={handleDownload}
                        className="btn-primary inline-flex items-center"
                      >
                        <Download className="mr-2" size={16} />
                        下载文本
                      </button>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">
                    提取的文字内容
                  </h3>
                  <div className="bg-white border border-gray-200 rounded-lg p-4 max-h-96 overflow-y-auto">
                    <pre className="whitespace-pre-wrap text-gray-700 font-sans">
                      {extractedText}
                    </pre>
                  </div>
                </div>
              </div>
            )}

            {/* Features */}
            <div className="border-t border-gray-200 pt-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                功能特点
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-start">
                  <CheckCircle className="text-green-600 mr-2 mt-1" size={16} />
                  <span className="text-gray-700">支持多种视频格式</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="text-green-600 mr-2 mt-1" size={16} />
                  <span className="text-gray-700">多语言自动识别</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="text-green-600 mr-2 mt-1" size={16} />
                  <span className="text-gray-700">高精度语音识别</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="text-green-600 mr-2 mt-1" size={16} />
                  <span className="text-gray-700">支持字幕时间轴</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <OLABAppFooter />
    </div>
  )
}
