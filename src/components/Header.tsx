import Link from 'next/link'

const Header = () => {
  return (
    <header className="fixed w-full bg-white/80 dark:bg-black/80 backdrop-blur-sm z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold">
          AI Toolkit Hub
        </Link>
        
        <nav className="hidden md:flex gap-6">
          <Link href="/explore" className="hover:text-gray-600 dark:hover:text-gray-300">
            Explore Apps
          </Link>
          <Link href="/docs" className="hover:text-gray-600 dark:hover:text-gray-300">
            Documentation
          </Link>
          <Link href="/benchmarks" className="hover:text-gray-600 dark:hover:text-gray-300">
            Benchmarks
          </Link>
          <Link href="/blog" className="hover:text-gray-600 dark:hover:text-gray-300">
            Blog
          </Link>
        </nav>
      </div>
    </header>
  )
}

export default Header 