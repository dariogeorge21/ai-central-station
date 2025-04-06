'use client';

import React, { useState, useEffect, useMemo, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ArrowUpDown, Search } from 'lucide-react';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import { ToolCategory, AITool, aiTools } from '@/data/aiTools';

// Import components
import CategoryFilter from '@/components/explore/CategoryFilter';
import AIToolsGrid from '@/components/explore/AIToolsGrid';

// Sort options type
type SortOption = 'nameAsc' | 'nameDesc' | 'mostlyUsed';

export default function ExplorePage() {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [isSortOpen, setIsSortOpen] = useState(false);
  const [selectedCategories, setSelectedCategories] = useState<ToolCategory[]>([]);
  const [sortOption, setSortOption] = useState<SortOption>('mostlyUsed');
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearching, setIsSearching] = useState(false);

  // Debounce search query
  const searchTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Combine all AI tools with error handling
  const allTools = useMemo(() => aiTools, []);

  // Initialize filtered tools with loading state
  const [filteredTools, setFilteredTools] = useState<AITool[]>([]);

  // Effect for initial load
  useEffect(() => {
    const initializeTools = async () => {
      try {
        setIsLoading(true);
        // Simulate network delay for demo
        await new Promise(resolve => setTimeout(resolve, 500));
        // Sort tools by mostly used by default
        const sortedTools = sortToolsByOption(aiTools, 'mostlyUsed');
        setFilteredTools(sortedTools);
      } catch (err) {
        setError('Failed to initialize tools');
      } finally {
        setIsLoading(false);
      }
    };

    initializeTools();
  }, []);

  // Improved scroll behavior using ref
  const exploreRef = useRef<HTMLElement>(null);
  const scrollToContent = () => {
    exploreRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isSortOpen && !(event.target as Element).closest('.sort-dropdown')) {
        setIsSortOpen(false);
      }
      if (isFilterOpen && !(event.target as Element).closest('.filter-dropdown')) {
        setIsFilterOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isSortOpen, isFilterOpen]);

  // New utility function for sorting tools
  const sortToolsByOption = (tools: AITool[], option: SortOption): AITool[] => {
    const toolsCopy = [...tools]; // Create a shallow copy to avoid mutating the original

    switch (option) {
      case 'nameAsc':
        return toolsCopy.sort((a, b) => 
          a.name.toLowerCase().localeCompare(b.name.toLowerCase())
        );
      case 'nameDesc':
        return toolsCopy.sort((a, b) => 
          b.name.toLowerCase().localeCompare(a.name.toLowerCase())
        );
      case 'mostlyUsed':
        // Sort by rating and then by categories length as secondary factor
        return toolsCopy.sort((a, b) => {
          // Primary sort by rating (higher rating = more used)
          const ratingDiff = (b.rating || 0) - (a.rating || 0);
          if (ratingDiff !== 0) return ratingDiff;
          
          // Secondary sort by categories length (more categories = more versatile)
          return b.categories.length - a.categories.length;
        });
      default:
        return toolsCopy;
    }
  };

  // Filter and sort tools when categories, search, or sort option changes
  useEffect(() => {
    let result: AITool[] = allTools;
    
    // First apply category filtering
    if (selectedCategories.length > 0) {
      result = result.filter((tool) =>
        selectedCategories.some(category => tool.categories.includes(category))
      );
    }
    
    // Then apply search filtering if search is active
    if (isSearching && searchQuery.trim() !== '') {
      const query = searchQuery.toLowerCase().trim();
      result = result.filter((tool) => 
        tool.name.toLowerCase().includes(query) || 
        tool.description.toLowerCase().includes(query)
      );
    }
    
    // Apply sorting
    result = sortToolsByOption(result, sortOption);
    
    // Update filtered tools
    setFilteredTools(result);
  }, [selectedCategories, sortOption, allTools, searchQuery, isSearching]);

  // Handle search input with debounce
  const handleSearchInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchQuery(value);
    
    // Clear any existing timeout
    if (searchTimeoutRef.current) {
      clearTimeout(searchTimeoutRef.current);
    }
    
    // Set a new timeout for debouncing
    searchTimeoutRef.current = setTimeout(() => {
      setIsSearching(value.trim() !== '');
    }, 300);
  };

  // Clear search
  const clearSearch = () => {
    setSearchQuery('');
    setIsSearching(false);
  };

  const [text] = useTypewriter({
    words: [
      'Text Generation',
      'Image Creation',
      'Code Assistance',
      'Audio Processing',
      'Video Editing',
      'Research Analysis',
      'Data Visualization',
      'Language Translation',
      'Content Creation',
      'AI Development'
    ],
    loop: true,
    delaySpeed: 2000,
  });

  // Handle sort option change
  const handleSortChange = (option: SortOption) => {
    setSortOption(option);
    setIsSortOpen(false);
  };

  // Error component
  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-900 to-black">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-red-500 mb-4">Oops! Something went wrong</h2>
          <p className="text-gray-400 mb-4">{error}</p>
          <button
            onClick={() => window.location.reload()}
            className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-2 px-4 rounded-full"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 to-black">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/50 to-teal-900/50" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-emerald-500/10 via-transparent to-transparent animate-pulse" />
        </div>

        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-teal-600"
          >
            Discover AI Tools
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl mb-8 text-gray-300"
          >
            Explore powerful tools for{' '}
            <span className="text-emerald-400">
              {text}
              <Cursor cursorColor="#34D399" />
            </span>
          </motion.p>

          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            onClick={scrollToContent}
            className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 flex items-center mx-auto gap-2 group"
          >
            Learn More
            <ChevronDown className="animate-bounce group-hover:translate-y-1 transition-transform" />
          </motion.button>
        </div>
      </section>

      {/* Explore AI Tools Section */}
      <section ref={exploreRef} className="py-16 px-4" role="main" aria-label="AI Tools Explorer">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-teal-600">
              Explore AI Tools
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Discover the perfect AI tools to enhance your workflow and boost productivity
            </p>
          </motion.div>

          {/* Filter and Sort Controls */}
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="flex-1 filter-dropdown">
              <CategoryFilter
                isOpen={isFilterOpen}
                setIsOpen={setIsFilterOpen}
                selectedCategories={selectedCategories}
                setSelectedCategories={setSelectedCategories}
              />
            </div>

            {/* Sort Dropdown with improved accessibility */}
            <div className="relative sort-dropdown">
              <motion.button
                aria-haspopup="true"
                aria-expanded={isSortOpen}
                aria-label="Sort options"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                onClick={() => setIsSortOpen(!isSortOpen)}
                className="flex items-center justify-center gap-2 bg-gray-800 border border-gray-700 text-gray-200 font-medium py-3 px-6 rounded-lg w-full md:w-auto hover:bg-gray-700 transition-all duration-300"
              >
                <ArrowUpDown size={18} aria-hidden="true" />
                Sort By: {sortOption === 'nameAsc' ? 'Name (A-Z)' :
                          sortOption === 'nameDesc' ? 'Name (Z-A)' :
                          'Mostly Used'}
                <ChevronDown 
                  className={`ml-2 transition-transform duration-300 ${isSortOpen ? "rotate-180" : ""}`}
                  aria-hidden="true"
                />
              </motion.button>

              <AnimatePresence>
                {isSortOpen && (
                  <>
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="fixed inset-0 z-10"
                      onClick={() => setIsSortOpen(false)}
                    />
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute right-0 mt-2 w-56 bg-gray-800 border border-gray-700 rounded-lg shadow-xl z-20"
                    >
                      <div className="py-2">
                        <button
                          onClick={() => handleSortChange('mostlyUsed')}
                          className={`w-full text-left px-4 py-2 hover:bg-gray-700 ${sortOption === 'mostlyUsed' ? 'text-emerald-400' : 'text-gray-200'}`}
                        >
                          Mostly Used
                        </button>
                        <button
                          onClick={() => handleSortChange('nameAsc')}
                          className={`w-full text-left px-4 py-2 hover:bg-gray-700 ${sortOption === 'nameAsc' ? 'text-emerald-400' : 'text-gray-200'}`}
                        >
                          Name (A-Z)
                        </button>
                        <button
                          onClick={() => handleSortChange('nameDesc')}
                          className={`w-full text-left px-4 py-2 hover:bg-gray-700 ${sortOption === 'nameDesc' ? 'text-emerald-400' : 'text-gray-200'}`}
                        >
                          Name (Z-A)
                        </button>
                      </div>
                    </motion.div>
                  </>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Search Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="relative mb-8"
          >
            <div className="relative flex items-center">
              <Search className="absolute left-4 text-gray-400" size={20} aria-hidden="true" />
              <input
                type="text"
                aria-label="Search for AI tools"
                placeholder="Search tools by name or description..."
                value={searchQuery}
                onChange={handleSearchInput}
                className="w-full bg-gray-800 border border-gray-700 text-gray-200 pl-12 pr-12 py-3 rounded-full focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-300"
              />
              {searchQuery && (
                <button
                  onClick={clearSearch}
                  className="absolute right-4 text-gray-400 hover:text-gray-200"
                  aria-label="Clear search"
                >
                  ✕
                </button>
              )}
            </div>
            {isSearching && (
              <div className="mt-2 text-sm text-gray-400">
                Found {filteredTools.length} result{filteredTools.length !== 1 ? 's' : ''}
              </div>
            )}
          </motion.div>

          {/* AI Tools Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-semibold text-gray-200">
                Showing {filteredTools.length} of {aiTools.length} AI Tools
              </h3>
              {selectedCategories.length > 0 && (
                <button
                  onClick={() => setSelectedCategories([])}
                  className="text-sm text-emerald-400 hover:text-emerald-300 transition-colors"
                >
                  Clear filters
                </button>
              )}
            </div>
            
            <AIToolsGrid tools={filteredTools} isLoading={isLoading} />
          </motion.div>
        </div>
      </section>
    </main>
  );
}

