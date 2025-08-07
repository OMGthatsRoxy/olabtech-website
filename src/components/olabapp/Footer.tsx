import Link from 'next/link'

export default function OLABAppFooter() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* App Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="text-2xl font-bold text-primary-400 mb-4">
              OLAB App
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              专业的在线工具平台，提供PDF处理、视频编辑、图像处理和AI工具等多种实用功能。
            </p>
            <Link
              href="https://olabtech.com"
              className="btn-primary"
            >
              了解更多
            </Link>
          </div>

          {/* Tool Categories */}
          <div>
            <h3 className="text-lg font-semibold mb-4">工具分类</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/category/pdf" className="text-gray-300 hover:text-white transition-colors">
                  PDF工具
                </Link>
              </li>
              <li>
                <Link href="/category/video" className="text-gray-300 hover:text-white transition-colors">
                  视频工具
                </Link>
              </li>
              <li>
                <Link href="/category/image" className="text-gray-300 hover:text-white transition-colors">
                  图像工具
                </Link>
              </li>
              <li>
                <Link href="/category/ai" className="text-gray-300 hover:text-white transition-colors">
                  AI工具
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-4">公司信息</h3>
            <ul className="space-y-2">
              <li>
                <Link href="https://olabtech.com" className="text-gray-300 hover:text-white transition-colors">
                  关于 OLAB Tech
                </Link>
              </li>
              <li>
                <Link href="https://olabtech.com/contact" className="text-gray-300 hover:text-white transition-colors">
                  联系我们
                </Link>
              </li>
              <li className="text-gray-300">
                support@olabapp.com
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2025 OLAB Tech. 保留所有权利。
          </p>
        </div>
      </div>
    </footer>
  )
}
