    "use client"

import { useState } from 'react'
import Header from '@/components/Header'
import ProductCard from '@/components/documentation/ProductCard'
import ProductOverview from '@/components/documentation/ProductOverview'
import { aiTools } from '@/data/ai-tools'

export default function Documentation() {
  const [selectedTool, setSelectedTool] = useState<string | null>(null);

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 to-black">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-blue-600 font-jetbrains text-center mb-4">
            Documentation
          </h1>
          <p className="text-gray-300 text-center text-lg md:text-xl max-w-2xl mx-auto font-jetbrains">
            Explore comprehensive guides and documentation for popular AI tools
          </p>
        </div>
      </section>

      {/* Tools Grid */}
      <section className="px-4 md:px-8 lg:px-16 pb-16">
        <div className="max-w-7xl mx-auto">
          {selectedTool ? (
            <div className="mb-8">
              <button
                onClick={() => setSelectedTool(null)}
                className="text-blue-400 hover:text-blue-300 transition-colors flex items-center gap-2 mb-8"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
                Back to Tools
              </button>
              <ProductOverview toolId={selectedTool} />
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {aiTools.map((tool) => (
                <ProductCard
                  key={tool.id}
                  tool={tool}
                  onSelect={() => setSelectedTool(tool.id)}
                />
              ))}
            </div>
          )}
        </div>
      </section>
    </main>
  )
}