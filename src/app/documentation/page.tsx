"use client"

import { useState, useMemo } from 'react'
import ProductCard from '@/components/documentation/ProductCard'
import ProductOverview from '@/components/documentation/ProductOverview'
import { aiTools } from '@/data/ai-tools'
import { FiSearch } from 'react-icons/fi'

export default function Documentation() {
  const [selectedTool, setSelectedTool] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  // Filter tools based on search query
  const filteredTools = useMemo(() => {
    if (!searchQuery.trim()) return aiTools;
    
    const query = searchQuery.toLowerCase().trim();
    return aiTools.filter(tool => 
      tool.name.toLowerCase().includes(query) ||
      tool.description.toLowerCase().includes(query)
    );
  }, [searchQuery]);

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 to-black">
      {/* Hero Section */}
      <section className="pt-24 pb-12 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-blue-600 font-jetbrains text-center mb-4">
            Documentation
          </h1>
          <p className="text-gray-300 text-center text-lg md:text-xl max-w-2xl mx-auto font-jetbrains mb-8">
            Explore comprehensive guides and documentation for popular AI tools
          </p>
          
          {/* Search Bar */}
          <div className="max-w-3xl mx-auto relative">
            <div className="relative">
              <FiSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search AI Tools..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-gray-800/50 border border-gray-700 rounded-full py-4 pl-12 pr-6 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 backdrop-blur-sm"
              />
            </div>
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-300 transition-colors"
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
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            )}
          </div>
        </div>
      </section>

      {/* Content Area - Placeholder for new card design */}
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
              
              {/* Product Detail Placeholder */}
              <div className="product-detail-container">
                <ProductOverview toolId={selectedTool} />
              </div>
            </div>
          ) : (
            <div className="content-container">
              {filteredTools.length > 0 ? (
                <div className="grid-container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {/* Card placeholders for new design */}
                  {filteredTools.map((tool) => (
                    <div key={tool.id} onClick={() => setSelectedTool(tool.id)}>
                      <ProductCard tool={tool} onSelect={() => setSelectedTool(tool.id)} />
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <p className="text-gray-400 text-lg">
                    No tools found matching your search. Try adjusting your search terms.
                  </p>
                </div>
              )}
            </div>
          )}
        </div>
      </section>
    </main>
  )
}