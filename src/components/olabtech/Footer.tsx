import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="text-2xl font-bold text-primary-400 mb-4">
              OLAB Tech
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              致力于提供创新的科技解决方案，让技术更好地服务于人类生活。
            </p>
            <Link
              href="https://olabapp.com"
              className="btn-primary"
            >
              体验我们的工具
            </Link>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">快速链接</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-white transition-colors">
                  首页
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-gray-300 hover:text-white transition-colors">
                  产品
                </Link>
              </li>
              <li>
                <Link href="/products/trainer-logbook" className="text-gray-300 hover:text-white transition-colors">
                  Trainer Logbook
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-white transition-colors">
                  关于我们
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-300 hover:text-white transition-colors">
                  博客
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">联系我们</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-white transition-colors">
                  联系表单
                </Link>
              </li>
              <li className="text-gray-300">
                contact@olabtech.com
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 OLAB Tech. 保留所有权利。
          </p>
        </div>
      </div>
    </footer>
  )
}
