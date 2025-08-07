'use client'

import OLABAppNavbar from '@/components/olabapp/Navbar'
import OLABAppFooter from '@/components/olabapp/Footer'
import { useState } from 'react'
import { Upload, Download, FileText, CheckCircle, AlertCircle } from 'lucide-react'

export default function PDFToWordPage() {
  const [file, setFile] = useState<File | null>(null)
  const [isProcessing, setIsProcessing] = useState(false)
  const [isCompleted, setIsCompleted] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0]
    if (selectedFile) {
      if (selectedFile.type === 'application/pdf') {
        setFile(selectedFile)
        setError(null)
      } else {
        setError('请选择PDF文件')
        setFile(null)
      }
    }
  }

  const handleConvert = async () => {
    if (!file) return

    setIsProcessing(true)
    setError(null)

    // 模拟转换过程
    setTimeout(() => {
      setIsProcessing(false)
      setIsCompleted(true)
    }, 3000)
  }

  const handleDownload = () => {
    // 模拟下载
    alert('开始下载转换后的Word文档')
  }

  return (
    <div className="min-h-screen flex flex-col">
      <OLABAppNavbar />
      
      {/* Header */}
      <section className="bg-gray-50 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              PDF转Word工具
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              快速将PDF文档转换为可编辑的Word格式，保持原有格式和布局。
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
                上传PDF文件
              </h2>
              
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-primary-400 transition-colors">
                <input
                  type="file"
                  accept=".pdf"
                  onChange={handleFileChange}
                  className="hidden"
                  id="file-upload"
                  disabled={isProcessing}
                />
                <label htmlFor="file-upload" className="cursor-pointer">
                  <Upload className="mx-auto h-12 w-12 text-gray-400 mb-4" />
                  <p className="text-lg text-gray-600 mb-2">
                    点击选择文件或拖拽到此处
                  </p>
                  <p className="text-sm text-gray-500">
                    支持PDF格式，最大文件大小50MB
                  </p>
                </label>
              </div>

              {file && (
                <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded-lg">
                  <div className="flex items-center">
                    <FileText className="text-green-600 mr-2" size={20} />
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

            {/* Convert Button */}
            <div className="mb-8">
              <button
                onClick={handleConvert}
                disabled={!file || isProcessing}
                className="w-full btn-primary py-4 text-lg disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isProcessing ? '转换中...' : '开始转换'}
              </button>
            </div>

            {/* Processing Status */}
            {isProcessing && (
              <div className="mb-8 p-6 bg-blue-50 border border-blue-200 rounded-lg">
                <div className="flex items-center justify-center">
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary-600 mr-3"></div>
                  <span className="text-blue-800">正在转换PDF文件，请稍候...</span>
                </div>
              </div>
            )}

            {/* Result */}
            {isCompleted && (
              <div className="mb-8 p-6 bg-green-50 border border-green-200 rounded-lg">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <CheckCircle className="text-green-600 mr-2" size={24} />
                    <span className="text-green-800 font-medium">
                      转换完成！
                    </span>
                  </div>
                  <button
                    onClick={handleDownload}
                    className="btn-primary inline-flex items-center"
                  >
                    <Download className="mr-2" size={16} />
                    下载Word文档
                  </button>
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
                  <span className="text-gray-700">保持原有格式和布局</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="text-green-600 mr-2 mt-1" size={16} />
                  <span className="text-gray-700">支持表格和图片转换</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="text-green-600 mr-2 mt-1" size={16} />
                  <span className="text-gray-700">快速处理，无需等待</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="text-green-600 mr-2 mt-1" size={16} />
                  <span className="text-gray-700">安全可靠，自动清理</span>
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
