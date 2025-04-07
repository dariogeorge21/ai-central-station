"use client"

import { useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'

interface Tool {
  title: string;
  description: string;
  icon: string;
  link: string;
  category: 'ai' | 'design';
}

const tools: Tool[] = [
  {
    title: 'AI Text Generator',
    description: 'Create compelling content with advanced language models',
    icon: '/icons/text-ai.svg',
    link: '/tools/text-generator',
    category: 'ai'
  },
  {
    title: 'Image Generator',
    description: 'Transform ideas into stunning visuals using AI',
    icon: '/icons/image-ai.svg',
    link: '/tools/image-generator',
    category: 'ai'
  },
  {
    title: 'UI/UX Designer',
    description: 'Design beautiful interfaces with AI assistance',
    icon: '/icons/design.svg',
    link: '/tools/ui-designer',
    category: 'design'
  },
  {
    title: 'Code Assistant',
    description: 'Get intelligent code suggestions and improvements',
    icon: '/icons/code.svg',
    link: '/tools/code-assistant',
    category: 'ai'
  },
  {
    title: 'Design System Generator',
    description: 'Create consistent design systems automatically',
    icon: '/icons/design-system.svg',
    link: '/tools/design-system',
    category: 'design'
  },
  {
    title: 'Component Builder',
    description: 'Build reusable components with AI guidance',
    icon: '/icons/components.svg',
    link: '/tools/component-builder',
    category: 'design'
  }
]

const ToolsSection = () => {
  useEffect(() => {
    if (typeof window === 'undefined') return;
    
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in-up')
          observer.unobserve(entry.target)
        }
      })
    }, observerOptions)

    document.querySelectorAll('.tool-card').forEach((card) => {
      observer.observe(card)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-gray-900 to-black px-4 sm:px-6 md:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-pink-500 to-blue-600 font-jetbrains mb-4">
            Explore Our AI Tools
          </h2>
          <p className="text-gray-300 text-base sm:text-lg md:text-xl max-w-2xl mx-auto font-jetbrains">
            Discover powerful AI and design tools to enhance your creative workflow
          </p>
        </div>

        {/* Tools Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {tools.map((tool, index) => (
            <Link 
              href={tool.link} 
              key={tool.title}
              className={`tool-card opacity-0 transform translate-y-8 transition-all duration-700 ease-out delay-${index * 100}`}
            >
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-5 sm:p-6 border border-gray-700/50 hover:border-gray-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/10 group h-full">
                <div className="relative w-10 h-10 sm:w-12 sm:h-12 mb-4">
                  <Image
                    src={tool.icon}
                    alt={tool.title}
                    fill
                    className="object-contain"
                  />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                  {tool.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-400 group-hover:text-gray-300 transition-colors mb-4">
                  {tool.description}
                </p>
                <div className="mt-auto">
                  <span className={`inline-block px-3 py-1 rounded-full text-xs ${
                    tool.category === 'ai' 
                      ? 'bg-blue-500/20 text-blue-400' 
                      : 'bg-orange-500/20 text-orange-400'
                  }`}>
                    {tool.category === 'ai' ? 'AI Tool' : 'Design Tool'}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
        
        {/* CTA Button */}
        <div className="text-center mt-10 sm:mt-12">
          <Link 
            href="/explore" 
            className="inline-block px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-medium rounded-lg shadow-lg shadow-blue-600/20 transition-all duration-300"
          >
            Browse All AI Tools
          </Link>
        </div>
      </div>
    </section>
  )
}

export default ToolsSection 