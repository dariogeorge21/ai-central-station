import HeroSection from '@/components/HeroSection'
import { FiGrid, FiBook, FiBarChart2, FiRss, FiEdit3, FiInfo } from 'react-icons/fi'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSection />
      
      {/* Explore AI Tools Section */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <FiGrid className="inline-block text-blue-500 mb-4 h-10 w-10" />
            <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-600 mb-4 tech-title">
              Explore AI Tools
            </h2>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto">
              Discover and compare the latest AI tools for productivity, creativity, development, and more.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Tool Category Cards - Simplified Prototype */}
            {['Productivity', 'Creativity', 'Development'].map((category) => (
              <Link href="/documentation" key={category} className="glassmorphic-card-content p-6 rounded-xl hover:shadow-lg hover:shadow-blue-900/20 transition-all duration-300">
                <h3 className="text-xl font-semibold text-white mb-3 tech-title">{category} Tools</h3>
                <p className="text-gray-400 mb-4">Enhance your workflow with cutting-edge AI solutions.</p>
                <div className="flex justify-end">
                  <span className="text-blue-400 text-sm hover:text-blue-300 transition-colors">View Tools &rarr;</span>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/documentation" className="inline-block text-blue-400 hover:text-blue-300 border border-blue-500 px-6 py-3 rounded-lg transition-colors tech-text">
              View All Categories
            </Link>
          </div>
        </div>
      </section>
      
      {/* Documentation Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <FiBook className="inline-block text-orange-500 mb-4 h-10 w-10" />
            <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-pink-600 mb-4 tech-title">
              Documentation
            </h2>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto">
              Comprehensive guides and resources to help you master AI tools and technologies.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="glassmorphic-card-content p-6 rounded-xl hover:shadow-lg hover:shadow-orange-900/20 transition-all duration-300">
              <h3 className="text-xl font-semibold text-white mb-3 tech-title">Getting Started</h3>
              <p className="text-gray-400 mb-4">Introduction to AI concepts and quick start guides for beginners.</p>
              <div className="flex justify-end">
                <Link href="/documentation" className="text-orange-400 text-sm hover:text-orange-300 transition-colors">Read More &rarr;</Link>
              </div>
            </div>
            <div className="glassmorphic-card-content p-6 rounded-xl hover:shadow-lg hover:shadow-orange-900/20 transition-all duration-300">
              <h3 className="text-xl font-semibold text-white mb-3 tech-title">Advanced Techniques</h3>
              <p className="text-gray-400 mb-4">Detailed tutorials and technical documentation for experts.</p>
              <div className="flex justify-end">
                <Link href="/documentation" className="text-orange-400 text-sm hover:text-orange-300 transition-colors">Read More &rarr;</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Benchmarks Section */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <FiBarChart2 className="inline-block text-green-500 mb-4 h-10 w-10" />
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
                    <tr key={model} className="border-b border-gray-700/50">
                      <td className="p-4">{model}</td>
                      <td className="p-4">{90 - index * 10}ms</td>
                      <td className="p-4">{98 - index * 3}%</td>
                      <td className="p-4">★★★★★</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
      
      {/* AI News Section */}
      <section className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <FiRss className="inline-block text-purple-500 mb-4 h-10 w-10" />
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
              <div key={index} className="glassmorphic-card-content rounded-xl overflow-hidden hover:shadow-lg hover:shadow-purple-900/20 transition-all duration-300">
                <div className="h-40 bg-gradient-to-r from-purple-900/50 to-blue-900/50"></div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-white mb-3 tech-title">{title}</h3>
                  <p className="text-gray-400 text-sm mb-4">
                    Latest insights and analysis from industry experts and researchers.
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-gray-500">June 2023</span>
                    <Link href="/ai-news" className="text-purple-400 text-sm hover:text-purple-300 transition-colors">Read &rarr;</Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Blog Section */}
      <section className="py-20 bg-gradient-to-b from-gray-800 to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <FiEdit3 className="inline-block text-pink-500 mb-4 h-10 w-10" />
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
              <div key={index} className="flex glassmorphic-card-content p-6 rounded-xl hover:shadow-lg hover:shadow-pink-900/20 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-r from-pink-600/30 to-red-600/30 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <span className="text-2xl text-pink-400">#{index + 1}</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2 tech-title">{title}</h3>
                  <p className="text-gray-400 text-sm mb-3">
                    Practical tips and in-depth analysis for AI practitioners and enthusiasts.
                  </p>
                  <Link href="/blog" className="text-pink-400 text-sm hover:text-pink-300 transition-colors">Continue Reading &rarr;</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* About Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <FiInfo className="inline-block text-yellow-500 mb-4 h-10 w-10" />
            <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-amber-600 mb-4 tech-title">
              About Us
            </h2>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto">
              Our mission is to provide comprehensive resources for AI enthusiasts and professionals.
            </p>
          </div>
          <div className="glassmorphic-card-content p-8 rounded-xl hover:shadow-lg hover:shadow-yellow-900/20 transition-all duration-300">
            <div className="max-w-3xl mx-auto">
              <p className="text-gray-300 mb-6">
                AI Toolkit Hub is a community-driven platform dedicated to helping developers, researchers, and businesses navigate the rapidly evolving landscape of artificial intelligence. We curate and review the best AI tools, provide educational resources, and foster a collaborative environment for sharing knowledge and expertise.
              </p>
              <p className="text-gray-300 mb-6">
                Founded in 2023 by a group of AI researchers and enthusiasts, our team combines academic expertise with practical industry experience to deliver authoritative and accessible content.
              </p>
              <div className="flex justify-center mt-8">
                <Link href="/about" className="inline-block text-yellow-400 hover:text-yellow-300 border border-yellow-500 px-6 py-3 rounded-lg transition-colors tech-text">
                  Learn More About Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      </div>
  )
}
