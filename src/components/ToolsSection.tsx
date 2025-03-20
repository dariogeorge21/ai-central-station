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
    <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="w-full">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-pink-500 to-blue-600 font-jetbrains mb-4">
            Explore Our AI Tools
          </h2>
          <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto font-jetbrains">
            Discover powerful AI and design tools to enhance your creative workflow
          </p>
        </div>

        {/* Tools Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {tools.map((tool, index) => (
            <Link 
              href={tool.link} 
              key={tool.title}
              className="tool-card opacity-0 transform translate-y-8 transition-all duration-700 ease-out"
            >
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:border-gray-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/10 group">
                <div className="relative w-12 h-12 mb-4">
                  <Image
                    src={tool.icon}
                    alt={tool.title}
                    fill
                    className="object-contain"
                  />
                </div>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                  {tool.title}
                </h3>
                <p className="text-gray-400 group-hover:text-gray-300 transition-colors">
                  {tool.description}
                </p>
                <div className="mt-4">
                  <span className={`inline-block px-3 py-1 rounded-full text-sm ${
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
      </div>
    </section>
  )
}

export default ToolsSection 