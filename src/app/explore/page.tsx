'use client';

import React, { useState, useEffect, useMemo, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ArrowUpDown, Search } from 'lucide-react';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import uniqueTools, { ToolCategory, AITool } from '@/data/exploreIndex';
import { useDebounce } from 'use-debounce';

// Import components
import CategoryFilter from '@/components/explore/CategoryFilter';
import AIToolsGrid from '@/components/explore/AIToolsGrid';

// Sort options type
type SortOption = 'nameAsc' | 'nameDesc' | 'mostlyUsed';

const SORT_OPTIONS = {
  NAME_ASC: 'nameAsc',
  NAME_DESC: 'nameDesc',
  MOSTLY_USED: 'mostlyUsed',
};

export default function ExplorePage() {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [isSortOpen, setIsSortOpen] = useState(false);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [sortOption, setSortOption] = useState<SortOption>('mostlyUsed');
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearching, setIsSearching] = useState(false);

  // Debounce search query
  const searchTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const [debouncedSearchQuery] = useDebounce(searchQuery, 300);
  useEffect(() => {
    setIsSearching(debouncedSearchQuery.trim() !== '');
  }, [debouncedSearchQuery]);

  // Combine all AI tools with error handling
  const allTools = useMemo(() => uniqueTools, []);

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
        const sortedTools = sortToolsByOption(uniqueTools, 'mostlyUsed');
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
  const filteredAndSortedTools = useMemo(() => {
    let result = allTools;

    if (selectedCategories.length > 0) {
      result = result.filter((tool) =>
        selectedCategories.some((category) => tool.categories.includes(category))
      );
    }

    if (isSearching && searchQuery.trim() !== '') {
      const query = searchQuery.toLowerCase().trim();
      result = result.filter((tool) =>
        tool.name.toLowerCase().includes(query) ||
        tool.description.toLowerCase().includes(query)
      );
    }

    return sortToolsByOption(result, sortOption);
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
      <div className="min-h-screen circuit-bg flex items-center justify-center">
        <div className="text-center glassmorphic-card-content p-8 rounded-xl">
          <h2 className="text-2xl font-bold text-red-500 mb-4 tech-title">Oops! Something went wrong</h2>
          <p className="text-gray-300 mb-4 tech-text">{error}</p>
          <button
            onClick={() => window.location.reload()}
            className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen circuit-bg">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-blue-900/20 to-transparent" />
        </div>

        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-bold mb-6 tech-title text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-600"
          >
            Discover AI Tools
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl mb-8 text-gray-300 tech-text"
          >
            Explore powerful tools for{' '}
            <span className="text-blue-400">
              {text}
              <Cursor cursorColor="#60A5FA" />
            </span>
          </motion.p>

          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            onClick={scrollToContent}
            className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-lg transition-all duration-300 flex items-center mx-auto gap-2 group"
          >
            Explore Tools
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4 tech-title text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-600">
              Explore AI Tools
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto tech-text">
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

            {/* Sort Dropdown */}
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
                className="flex items-center justify-center gap-2 glassmorphic-card-content text-gray-200 font-medium py-3 px-6 rounded-lg w-full md:w-auto hover:bg-gray-800/60 transition-all duration-300"
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
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute right-0 mt-2 w-56 glassmorphic-card-content rounded-lg shadow-xl z-20"
                  >
                    <div className="py-2">
                      <button
                        onClick={() => handleSortChange('mostlyUsed')}
                        className={`w-full text-left px-4 py-2 hover:bg-gray-700/50 ${sortOption === 'mostlyUsed' ? 'text-blue-400' : 'text-gray-200'}`}
                      >
                        Mostly Used
                      </button>
                      <button
                        onClick={() => handleSortChange('nameAsc')}
                        className={`w-full text-left px-4 py-2 hover:bg-gray-700/50 ${sortOption === 'nameAsc' ? 'text-blue-400' : 'text-gray-200'}`}
                      >
                        Name (A-Z)
                      </button>
                      <button
                        onClick={() => handleSortChange('nameDesc')}
                        className={`w-full text-left px-4 py-2 hover:bg-gray-700/50 ${sortOption === 'nameDesc' ? 'text-blue-400' : 'text-gray-200'}`}
                      >
                        Name (Z-A)
                      </button>
                    </div>
                  </motion.div>
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
                className="w-full glassmorphic-card-content text-gray-200 pl-12 pr-12 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
              />
              {searchQuery && (
                <button
                  onClick={clearSearch}
                  className="absolute right-4 text-gray-400 hover:text-gray-200"
                  aria-label="Clear search input"
                >
                  ✕
                </button>
              )}
            </div>
            {isSearching && (
              <div className="mt-2 text-sm text-gray-400">
                Found {filteredAndSortedTools.length} result{filteredAndSortedTools.length !== 1 ? 's' : ''}
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
              <h3 className="text-xl font-semibold text-gray-200 tech-text">
                {selectedCategories.length > 0 || isSearching
                  ? `Showing ${filteredAndSortedTools.length} of ${uniqueTools.length} AI Tools`
                  : `Showing ${uniqueTools.length} AI Tools`}
              </h3>
              {selectedCategories.length > 0 && (
                <button
                  onClick={() => setSelectedCategories([])}
                  className="text-sm text-blue-400 hover:text-blue-300 transition-colors"
                >
                  Clear filters
                </button>
              )}
            </div>

            <AIToolsGrid tools={filteredAndSortedTools} isLoading={isLoading} sectionRef={exploreRef} />
            {!isLoading && filteredAndSortedTools.length === 0 && (
              <p className="text-gray-400 text-center">No tools found. Try adjusting your filters or search query.</p>
            )}
          </motion.div>
        </div>
      </section>
    </main>
  );
}

