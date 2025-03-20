import Link from 'next/link'

const Header = () => {
  return (
    <header className="fixed w-full bg-white/90 dark:bg-black/90 backdrop-blur-md z-50 border-b border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold bg-gradient-to-r from-orange-500 to-blue-600 bg-clip-text text-transparent">
              AI Toolkit Hub
            </span>
          </Link>
          
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              href="/" 
              className="text-gray-700 dark:text-gray-200 hover:text-orange-500 dark:hover:text-orange-400 transition-colors duration-200 font-medium"
            >
              Home
            </Link>
            <Link 
              href="/explore" 
              className="text-gray-700 dark:text-gray-200 hover:text-orange-500 dark:hover:text-orange-400 transition-colors duration-200 font-medium"
            >
              Explore Apps
            </Link>
            <Link 
              href="/documentation" 
              className="text-gray-700 dark:text-gray-200 hover:text-orange-500 dark:hover:text-orange-400 transition-colors duration-200 font-medium"
            >
              Documentation
            </Link>
            <Link 
              href="/benchmarks" 
              className="text-gray-700 dark:text-gray-200 hover:text-orange-500 dark:hover:text-orange-400 transition-colors duration-200 font-medium"
            >
              Benchmarks
            </Link>
            <Link 
              href="/blog" 
              className="text-gray-700 dark:text-gray-200 hover:text-orange-500 dark:hover:text-orange-400 transition-colors duration-200 font-medium"
            >
              Blog
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button className="md:hidden text-gray-700 dark:text-gray-200 hover:text-orange-500 dark:hover:text-orange-400">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header 