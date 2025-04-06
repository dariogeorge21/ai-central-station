"use client"

import { useState, useMemo } from 'react'
import ProductCard from '@/components/documentation/ProductCard'
import ProductOverview from '@/components/documentation/ProductOverview'
import CategoryList from '@/components/documentation/CategoryList'
import { aiTools, ToolCategory } from '@/data/aiTools'
import { FiSearch, FiCode, FiGrid, FiFilter } from 'react-icons/fi'
import CategoryFilter from '@/components/documentation/CategoryFilter'

export default function Documentation() {
  const [selectedTool, setSelectedTool] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [selectedCategories, setSelectedCategories] = useState<ToolCategory[]>([]);

  // Filter tools based on search query and selected categories
  const filteredTools = useMemo(() => {
    if (!searchQuery.trim() && selectedCategories.length === 0) return aiTools;
    
    const query = searchQuery.toLowerCase().trim();
    return aiTools.filter(tool => {
      // Filter by search query
      const matchesSearch = !query || 
        tool.name.toLowerCase().includes(query) ||
        tool.description.toLowerCase().includes(query);
      
      // Filter by selected categories
      const matchesCategories = selectedCategories.length === 0 || 
        tool.categories.some(category => selectedCategories.includes(category));
      
      return matchesSearch && matchesCategories;
    });
  }, [searchQuery, selectedCategories]);

  return (
    <main className="min-h-screen circuit-bg">
      {/* Hero Section */}
      <section className="pt-24 pb-12 px-4 md:px-8 lg:px-16 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/20 to-transparent z-0"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex items-center justify-center mb-4">
            <FiCode className="text-blue-400 w-8 h-8 mr-3" />
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-blue-600 tech-title mb-0">
              AI Tools Explorer
            </h1>
            <FiGrid className="text-orange-400 w-8 h-8 ml-3" />
          </div>
          
          <p className="text-gray-300 text-center text-lg md:text-xl max-w-2xl mx-auto tech-text mb-8">
            Discover and explore hundreds of AI tools for everyday tasks and specialized needs
          </p>
          
          {/* Search Bar */}
          <div className="max-w-3xl mx-auto relative mb-6 fade-in">
            <div className="relative">
              <FiSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search AI Tools..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full glassmorphic-card-content py-4 pl-12 pr-6 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
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
          
          {/* Filter Button */}
          <div className="max-w-3xl mx-auto relative mb-12 fade-in">
            <CategoryFilter
              isOpen={isFilterOpen}
              setIsOpen={setIsFilterOpen}
              selectedCategories={selectedCategories}
              setSelectedCategories={setSelectedCategories}
            />
          </div>
        </div>
      </section>

      {/* Content Area */}
      <section className="px-4 md:px-8 lg:px-16 pb-16">
        <div className="max-w-7xl mx-auto">
          {selectedTool ? (
            <div className="mb-8 fade-in">
              <button
                onClick={() => setSelectedTool(null)}
                className="text-blue-400 hover:text-blue-300 transition-colors flex items-center gap-2 mb-8 tech-text"
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
              
              {/* Product Detail View */}
              <div className="product-detail-container glassmorphic-card-content p-6">
                <ProductOverview toolId={selectedTool} />
              </div>
            </div>
          ) : (
            <div className="content-container">
              {/* Categorized AI Tools List */}
              <CategoryList 
                searchQuery={searchQuery} 
                selectedCategories={selectedCategories}
              />
            </div>
          )}
        </div>
      </section>
    </main>
  )
}