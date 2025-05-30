"use client"

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

interface FeaturedTool {
  title: string;
  shortDesc: string;
  longDesc: string;
  uses: string[];
  image: string;
  link: string;
}

const featuredTools: FeaturedTool[] = [
  {
    title: 'ChatGPT',
    shortDesc: 'Advanced language model for conversation and content creation',
    longDesc: 'ChatGPT is an AI-powered chatbot that uses natural language processing to create human-like text responses. It can help with writing, analysis, coding, and more.',
    uses: [
      'Content writing and editing',
      'Programming assistance',
      'Language translation',
      'Educational tutoring',
      'Creative writing'
    ],
    image: '/images/chatgpt.jpg',
    link: 'https://chat.openai.com'
  },
  {
    title: 'Midjourney',
    shortDesc: 'AI art generator creating stunning visual content',
    longDesc: 'Midjourney is an AI-powered tool that generates images from textual descriptions. It excels in creating artistic, creative, and realistic images.',
    uses: [
      'Digital art creation',
      'Concept visualization',
      'Marketing materials',
      'Game asset design',
      'Interior design concepts'
    ],
    image: '/images/midjourney.jpg',
    link: 'https://www.midjourney.com'
  },
  {
    title: 'GitHub Copilot',
    shortDesc: 'AI-powered coding assistant for developers',
    longDesc: 'GitHub Copilot is an AI pair programmer that helps you write better code faster. It suggests code completions based on context and patterns.',
    uses: [
      'Code completion',
      'Function generation',
      'Documentation writing',
      'Test creation',
      'Bug fixing'
    ],
    image: '/images/github-copilot.jpg',
    link: 'https://github.com/features/copilot'
  },
  {
    title: 'DALL·E',
    shortDesc: 'Create realistic images and art from descriptions',
    longDesc: 'DALL·E is an AI system that can create realistic images and art from natural language descriptions. It understands a wide range of concepts and styles.',
    uses: [
      'Product visualization',
      'Brand asset creation',
      'Illustration design',
      'Content creation',
      'Artistic exploration'
    ],
    image: '/images/dalle.jpg',
    link: 'https://openai.com/dall-e-3'
  }
]

const FeaturedTools = () => {
  const [expandedTool, setExpandedTool] = useState<string | null>(null);

  return (
    <section className="py-16">
      <div className="w-full">
        <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-pink-500 to-blue-600 font-jetbrains mb-8 text-center">
          Popular AI Tools
        </h2>
        
        {/* Featured Tools Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {featuredTools.map((tool) => (
            <div
              key={tool.title}
              className="flex flex-col bg-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-700/50 hover:border-gray-500/50 transition-all duration-300"
            >
              <div className="relative h-40">
                <Image
                  src={tool.image}
                  alt={tool.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4 flex-1 flex flex-col">
                <h3 className="text-lg font-bold text-white mb-2">{tool.title}</h3>
                <p className="text-gray-300 text-sm mb-4 flex-1">{tool.shortDesc}</p>
                
                {expandedTool === tool.title ? (
                  <div className="animate-fade-in">
                    <p className="text-gray-300 text-sm mb-4">{tool.longDesc}</p>
                    <div className="mb-4">
                      <h4 className="text-white font-semibold mb-2 text-sm">Common Uses:</h4>
                      <ul className="list-disc list-inside text-gray-300 space-y-1 text-sm">
                        {tool.uses.map((use, index) => (
                          <li key={index}>{use}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="flex gap-2">
                      <a
                        href={tool.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-3 py-1.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm"
                      >
                        Try Now
                      </a>
                      <button
                        onClick={() => setExpandedTool(null)}
                        className="inline-flex items-center px-3 py-1.5 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition-colors text-sm"
                      >
                        Show Less
                      </button>
                    </div>
                  </div>
                ) : (
                  <button
                    onClick={() => setExpandedTool(tool.title)}
                    className="text-blue-400 hover:text-blue-300 transition-colors text-sm mt-auto"
                  >
                    Learn More →
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Explore More Button */}
        <div className="text-center mt-12">
          <Link
            href="/tools"
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-orange-500 via-pink-500 to-blue-600 text-white rounded-full font-semibold hover:from-orange-600 hover:to-blue-700 transition-all duration-300 shadow-lg group"
          >
            Explore More Tools
            <svg
              className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default FeaturedTools 