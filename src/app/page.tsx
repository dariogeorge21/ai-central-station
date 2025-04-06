import HeroSection from '@/components/HeroSection'
import { FiGrid, FiBook, FiBarChart2, FiRss, FiEdit3, FiInfo, FiArrowRight, FiBarChart, FiPieChart, FiDatabase, FiCode, FiCheck, FiBox } from 'react-icons/fi'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSection />
      
      {/* Section Divider */}
      <div className="relative">
        <div className="absolute inset-x-0 -top-10 h-10 bg-gradient-to-b from-transparent to-black z-10"></div>
      </div>
      
      {/* Explore AI Tools Section */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900 relative">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-70"></div>
        <div className="absolute top-10 right-10 w-20 h-20 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-32 h-32 bg-indigo-500/10 rounded-full blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center p-2 bg-blue-900/30 rounded-xl mb-4 border border-blue-500/20">
              <FiGrid className="text-blue-500 h-10 w-10" />
            </div>
            <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-600 mb-4 tech-title">
              Explore AI Tools
            </h2>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto">
              Discover and compare the latest AI tools for productivity, creativity, development, and more.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Tool Category Cards - Simplified Prototype */}
            {[
              {
                name: 'Productivity',
                desc: 'Enhance your workflow with cutting-edge AI solutions.',
                icon: <FiCheck className="w-6 h-6 text-blue-400 mb-3" />
              },
              {
                name: 'Creativity',
                desc: 'Unlock new creative possibilities with AI-powered tools.',
                icon: <FiCode className="w-6 h-6 text-purple-400 mb-3" />
              },
              {
                name: 'Development',
                desc: 'Build faster and smarter with AI development tools.',
                icon: <FiBox className="w-6 h-6 text-cyan-400 mb-3" />
              }
            ].map((category) => (
              <Link href="/explore" key={category.name} className="glassmorphic-card-content p-6 rounded-xl hover:shadow-lg hover:shadow-blue-900/20 transition-all duration-300 group">
                <div className="flex flex-col items-center md:items-start text-center md:text-left">
                  {category.icon}
                  <h3 className="text-xl font-semibold text-white mb-3 tech-title">{category.name} Tools</h3>
                  <p className="text-gray-400 mb-4">{category.desc}</p>
                  <div className="mt-auto flex justify-center md:justify-end w-full">
                    <span className="inline-flex items-center text-blue-400 text-sm group-hover:text-blue-300 transition-colors">
                      Browse Tools <FiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/explore" className="inline-flex items-center justify-center gap-2 text-blue-400 hover:text-blue-300 border border-blue-500 hover:border-blue-400 px-6 py-3 rounded-lg transition-all hover:bg-blue-900/20 tech-text">
              View All Categories <FiArrowRight className="ml-1 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
      
      {/* Section Divider */}
      <div className="relative h-24 bg-gradient-to-b from-gray-900 to-gray-900">
        <div className="absolute inset-0 bg-[url('/images/circuit-pattern.png')] bg-repeat opacity-10"></div>
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-px bg-gradient-to-r from-transparent via-gray-500 to-transparent"></div>
      </div>
      
      {/* Documentation Section */}
      <section className="py-20 bg-gray-900 relative">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-orange-500 to-transparent opacity-70"></div>
        <div className="absolute top-20 left-10 w-24 h-24 bg-orange-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-pink-500/10 rounded-full blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center p-2 bg-orange-900/30 rounded-xl mb-4 border border-orange-500/20">
              <FiBook className="text-orange-500 h-10 w-10" />
            </div>
            <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-pink-600 mb-4 tech-title">
              Documentation
            </h2>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto">
              Comprehensive guides and resources to help you master AI tools and technologies.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="glassmorphic-card-content p-6 rounded-xl hover:shadow-lg hover:shadow-orange-900/20 transition-all duration-300 group">
              <h3 className="text-xl font-semibold text-white mb-3 tech-title">Getting Started</h3>
              <p className="text-gray-400 mb-4">Introduction to AI concepts and quick start guides for beginners.</p>
              <div className="flex justify-end">
                <Link href="/documentation" className="inline-flex items-center text-orange-400 text-sm group-hover:text-orange-300 transition-colors">
                  Read Guide <FiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
            <div className="glassmorphic-card-content p-6 rounded-xl hover:shadow-lg hover:shadow-orange-900/20 transition-all duration-300 group">
              <h3 className="text-xl font-semibold text-white mb-3 tech-title">Advanced Techniques</h3>
              <p className="text-gray-400 mb-4">Detailed tutorials and technical documentation for experts.</p>
              <div className="flex justify-end">
                <Link href="/documentation" className="inline-flex items-center text-orange-400 text-sm group-hover:text-orange-300 transition-colors">
                  Explore Techniques <FiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
          <div className="text-center mt-12">
            <Link href="/documentation" className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-orange-500 to-pink-500 text-white px-6 py-3 rounded-lg hover:from-orange-600 hover:to-pink-600 transition-all tech-text">
              Browse All Documentation <FiBook className="ml-1" />
            </Link>
          </div>
        </div>
      </section>
      
      {/* Section Divider */}
      <div className="relative h-24 bg-gradient-to-b from-gray-900 to-gray-800">
        <div className="absolute inset-0 bg-[url('/images/circuit-pattern.png')] bg-repeat opacity-10"></div>
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-px bg-gradient-to-r from-transparent via-gray-500 to-transparent"></div>
      </div>
      
      {/* Benchmarks Section */}
      <section className="py-20 bg-gradient-to-b from-gray-800 to-gray-800 relative">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-green-500 to-transparent opacity-70"></div>
        <div className="absolute top-20 right-20 w-28 h-28 bg-green-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-20 w-36 h-36 bg-teal-500/10 rounded-full blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center p-2 bg-green-900/30 rounded-xl mb-4 border border-green-500/20">
              <FiBarChart2 className="text-green-500 h-10 w-10" />
            </div>
            <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-teal-600 mb-4 tech-title">
              Benchmarks
            </h2>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto">
              Compare performance metrics and results from popular AI tools and models.
            </p>
          </div>
          <div className="glassmorphic-card-content p-6 rounded-xl hover:shadow-lg hover:shadow-green-900/20 transition-all duration-300">
            <div className="overflow-x-auto">
              <table className="w-full text-gray-300">
                <thead>
                  <tr className="border-b border-gray-700">
                    <th className="p-4 text-left text-green-400">Model</th>
                    <th className="p-4 text-left text-green-400">Speed</th>
                    <th className="p-4 text-left text-green-400">Accuracy</th>
                    <th className="p-4 text-left text-green-400">Rating</th>
                  </tr>
                </thead>
                <tbody>
                  {['GPT-4', 'Claude 3', 'Gemini Pro'].map((model, index) => (
                    <tr key={model} className="border-b border-gray-700/50 hover:bg-gray-800/40 transition-colors">
                      <td className="p-4">{model}</td>
                      <td className="p-4">{90 - index * 10}ms</td>
                      <td className="p-4">{98 - index * 3}%</td>
                      <td className="p-4">★★★★★</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            
            {/* Added Benchmark CTAs */}
            <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
              <Link href="/benchmarks" className="inline-flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-lg transition-colors text-sm">
                <FiBarChart className="w-4 h-4" /> Explore Benchmarks
              </Link>
              <Link href="/benchmarks/compare" className="inline-flex items-center justify-center gap-2 bg-teal-600 hover:bg-teal-700 text-white px-5 py-2 rounded-lg transition-colors text-sm">
                <FiPieChart className="w-4 h-4" /> Compare Models
              </Link>
              <Link href="/benchmarks/data" className="inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-5 py-2 rounded-lg transition-colors text-sm">
                <FiDatabase className="w-4 h-4" /> View Raw Data
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Section Divider */}
      <div className="relative h-24 bg-gradient-to-b from-gray-800 to-gray-800">
        <div className="absolute inset-0 bg-[url('/images/circuit-pattern.png')] bg-repeat opacity-10"></div>
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-px bg-gradient-to-r from-transparent via-gray-500 to-transparent"></div>
      </div>
      
      {/* AI News Section */}
      <section className="py-20 bg-gray-800 relative">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-70"></div>
        <div className="absolute top-10 left-20 w-32 h-32 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center p-2 bg-purple-900/30 rounded-xl mb-4 border border-purple-500/20">
              <FiRss className="text-purple-500 h-10 w-10" />
            </div>
            <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-600 mb-4 tech-title">
              AI News
            </h2>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto">
              Stay updated with the latest developments, breakthroughs, and releases in AI.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              'GPT-5 Rumors: What We Know So Far',
              'The Rise of Multimodal AI Systems',
              'AI Ethics: Current Challenges and Solutions'
            ].map((title, index) => (
              <div key={index} className="glassmorphic-card-content rounded-xl overflow-hidden hover:shadow-lg hover:shadow-purple-900/20 transition-all duration-300 group">
                <div className="h-40 bg-gradient-to-r from-purple-900/50 to-blue-900/50 relative overflow-hidden">
                  <div className="absolute top-3 right-3 bg-purple-700/70 text-white text-xs px-2 py-1 rounded-full">
                    New
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-white mb-3 tech-title group-hover:text-purple-300 transition-colors">{title}</h3>
                  <p className="text-gray-400 text-sm mb-4">
                    Latest insights and analysis from industry experts and researchers.
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-gray-500">June 2023</span>
                    <Link href="/ai-news" className="inline-flex items-center text-purple-400 text-sm hover:text-purple-300 transition-colors">
                      Read Article <FiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/ai-news" className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white px-6 py-3 rounded-lg hover:from-purple-600 hover:to-blue-600 transition-all tech-text">
              Browse All AI News <FiRss className="ml-1" />
            </Link>
          </div>
        </div>
      </section>
      
      {/* Section Divider */}
      <div className="relative h-24 bg-gradient-to-b from-gray-800 to-gray-900">
        <div className="absolute inset-0 bg-[url('/images/circuit-pattern.png')] bg-repeat opacity-10"></div>
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-px bg-gradient-to-r from-transparent via-gray-500 to-transparent"></div>
      </div>
      
      {/* Blog Section */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-gray-900 relative">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-pink-500 to-transparent opacity-70"></div>
        <div className="absolute top-20 right-10 w-28 h-28 bg-pink-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-32 h-32 bg-red-500/10 rounded-full blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center p-2 bg-pink-900/30 rounded-xl mb-4 border border-pink-500/20">
              <FiEdit3 className="text-pink-500 h-10 w-10" />
            </div>
            <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-red-600 mb-4 tech-title">
              Blog
            </h2>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto">
              Insights, tutorials, and perspectives on AI technology and applications.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              'How to Optimize Prompts for Better AI Results',
              'Building Your First AI-Powered Web Application'
            ].map((title, index) => (
              <div key={index} className="flex glassmorphic-card-content p-6 rounded-xl hover:shadow-lg hover:shadow-pink-900/20 transition-all duration-300 group">
                <div className="w-16 h-16 bg-gradient-to-r from-pink-600/30 to-red-600/30 rounded-lg flex items-center justify-center mr-4 flex-shrink-0 group-hover:from-pink-600/50 group-hover:to-red-600/50 transition-all">
                  <span className="text-2xl text-pink-400 group-hover:text-pink-300">#{index + 1}</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2 tech-title group-hover:text-pink-200 transition-colors">{title}</h3>
                  <p className="text-gray-400 text-sm mb-3 group-hover:text-gray-300 transition-colors">
                    Practical tips and in-depth analysis for AI practitioners and enthusiasts.
                  </p>
                  <Link href="/blog" className="inline-flex items-center text-pink-400 text-sm hover:text-pink-300 transition-colors">
                    Read Full Article <FiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/blog" className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-pink-500 to-red-500 text-white px-6 py-3 rounded-lg hover:from-pink-600 hover:to-red-600 transition-all tech-text">
              View All Blog Posts <FiEdit3 className="ml-1" />
            </Link>
          </div>
        </div>
      </section>
      
      {/* Section Divider */}
      <div className="relative h-24 bg-gradient-to-b from-gray-900 to-gray-900">
        <div className="absolute inset-0 bg-[url('/images/circuit-pattern.png')] bg-repeat opacity-10"></div>
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-px bg-gradient-to-r from-transparent via-gray-500 to-transparent"></div>
      </div>
      
      {/* About Section */}
      <section className="py-20 bg-gray-900 relative">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-yellow-500 to-transparent opacity-70"></div>
        <div className="absolute top-10 right-10 w-32 h-32 bg-yellow-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-40 h-40 bg-amber-500/10 rounded-full blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center p-2 bg-yellow-900/30 rounded-xl mb-4 border border-yellow-500/20">
              <FiInfo className="text-yellow-500 h-10 w-10" />
            </div>
            <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-amber-600 mb-4 tech-title">
              About This Project
            </h2>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto">
              A comprehensive resource centre for AI enthusiasts and professionals, built by a solo developer.
            </p>
          </div>
          <div className="glassmorphic-card-content p-8 rounded-xl hover:shadow-lg hover:shadow-yellow-900/20 transition-all duration-300">
            <div className="max-w-3xl mx-auto">
              <p className="text-gray-300 mb-6">
                AI Toolkit Centre is a passion project dedicated to helping developers, researchers, and businesses navigate the rapidly evolving landscape of artificial intelligence. I've curated and reviewed the best AI tools, provided educational resources, and created this platform to make AI toolsmore accessible to everyone.
              </p>
              <p className="text-gray-300 mb-6">
                This project combines my technical expertise with a vision to create an authoritative and accessible resource for anyone interested in exploring the world of AI tools and technologies.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                <Link href="/about" className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-yellow-500 to-amber-500 text-white px-6 py-3 rounded-lg hover:from-yellow-600 hover:to-amber-600 transition-all tech-text">
                  Learn About My Mission
                </Link>
                <Link href="/contact" className="inline-flex items-center justify-center gap-2 text-yellow-400 hover:text-yellow-300 border border-yellow-500 hover:border-yellow-400 px-6 py-3 rounded-lg transition-all hover:bg-yellow-900/20 tech-text">
                  Contact Me
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
