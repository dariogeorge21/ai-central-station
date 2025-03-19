"use client"

import { useState } from 'react'
import Image from 'next/image'
import { aiTools, type AITool } from '@/data/ai-tools'

interface ProductOverviewProps {
  toolId: string;
}

const ProductOverview = ({ toolId }: ProductOverviewProps) => {
  const tool = aiTools.find(t => t.id === toolId) as AITool
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const nextImage = () => {
    setCurrentImageIndex((prev) => 
      prev === tool.images.length - 1 ? 0 : prev + 1
    )
  }

  const previousImage = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? tool.images.length - 1 : prev - 1
    )
  }

  if (!tool) return null

  return (
    <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700/50 overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-6 md:p-8">
        {/* Image Carousel */}
        <div className="relative">
          <div className="relative aspect-video rounded-lg overflow-hidden">
            <Image
              src={tool.images[currentImageIndex]}
              alt={`${tool.name} screenshot ${currentImageIndex + 1}`}
              fill
              className="object-cover"
            />
          </div>
          
          {/* Navigation Arrows */}
          <button
            onClick={previousImage}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={nextImage}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Image Indicators */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {tool.images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentImageIndex ? 'bg-white' : 'bg-white/50'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="flex flex-col">
          <div className="mb-6">
            <div className="flex justify-between items-start mb-4">
              <h2 className="text-3xl font-bold text-white">{tool.name}</h2>
              <span className="px-3 py-1 bg-blue-600/20 text-blue-400 rounded-full text-sm">
                {tool.category}
              </span>
            </div>
            <div className="flex items-center gap-2 mb-4">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className={`w-5 h-5 ${
                      i < Math.floor(tool.rating)
                        ? 'text-yellow-400'
                        : 'text-gray-600'
                    }`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="text-gray-400">
                ({tool.reviewCount.toLocaleString()} reviews)
              </span>
            </div>
            <p className="text-gray-300 text-lg">{tool.description}</p>
          </div>

          {/* Pricing */}
          <div className="mb-6">
            <h3 className="text-xl font-semibold text-white mb-3">Pricing</h3>
            <div className="bg-gray-900/50 rounded-lg p-4">
              <div className="text-blue-400 font-medium mb-2">{tool.pricing.type}</div>
              <ul className="space-y-2">
                {tool.pricing.details.map((detail, index) => (
                  <li key={index} className="text-gray-300 flex items-center gap-2">
                    <svg className="w-4 h-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Features */}
          <div className="mb-6">
            <h3 className="text-xl font-semibold text-white mb-3">Key Features</h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {tool.features.map((feature, index) => (
                <li key={index} className="text-gray-300 flex items-center gap-2">
                  <svg className="w-4 h-4 text-blue-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          {/* Use Cases */}
          <div className="mb-6">
            <h3 className="text-xl font-semibold text-white mb-3">Common Use Cases</h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {tool.useCases.map((useCase, index) => (
                <li key={index} className="text-gray-300 flex items-center gap-2">
                  <svg className="w-4 h-4 text-orange-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  {useCase}
                </li>
              ))}
            </ul>
          </div>

          {/* User Experience */}
          <div className="mb-6">
            <h3 className="text-xl font-semibold text-white mb-3">User Experience</h3>
            <p className="text-gray-300">{tool.userExperience}</p>
          </div>

          {/* Documentation Link */}
          <a
            href={tool.documentationUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-orange-500 to-blue-600 text-white rounded-lg font-semibold hover:from-orange-600 hover:to-blue-700 transition-all duration-300 shadow-lg mt-auto group"
          >
            View Full Documentation
            <svg
              className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  )
}

export default ProductOverview 