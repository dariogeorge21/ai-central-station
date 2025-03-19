"use client"

import Image from 'next/image'
import { AITool } from '@/data/ai-tools'

interface ProductCardProps {
  tool: AITool;
  onSelect: () => void;
}

const ProductCard = ({ tool, onSelect }: ProductCardProps) => {
  return (
    <div 
      className="group bg-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-700/50 hover:border-gray-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/10 cursor-pointer"
      onClick={onSelect}
    >
      <div className="relative h-48">
        <Image
          src={tool.images[0]}
          alt={tool.name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors">
            {tool.name}
          </h3>
          <span className="px-2 py-1 bg-gray-700 text-xs text-gray-300 rounded">
            {tool.category}
          </span>
        </div>
        <p className="text-gray-300 text-sm mb-4">
          {tool.shortDescription}
        </p>
        <div className="flex items-center gap-2 mb-4">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                className={`w-4 h-4 ${
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
          <span className="text-gray-400 text-sm">
            ({tool.reviewCount.toLocaleString()})
          </span>
        </div>
        <button className="w-full py-2 bg-blue-600/20 text-blue-400 rounded-lg hover:bg-blue-600/30 transition-colors text-sm">
          More Info
        </button>
      </div>
    </div>
  )
}

export default ProductCard 