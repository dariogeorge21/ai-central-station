'use client';

import React, { useState, useEffect, useMemo, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ArrowUpDown } from 'lucide-react';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import { ToolCategory, AITool } from '@/data/aiTools';
import { expandedAiTools } from '@/data/expandedAiTools';
import { additionalAiTools } from '@/data/additionalAiTools';

// Import components
import CategoryFilter from '@/components/explore/CategoryFilter';
import AIToolsGrid from '@/components/explore/AIToolsGrid';
import AIToolDetail from '@/components/explore/AIToolDetail';

// Sort options type
type SortOption = 'nameAsc' | 'nameDesc' | 'popularity' | 'satisfaction';

export default function ExplorePage() {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [isSortOpen, setIsSortOpen] = useState(false);
  const [selectedCategories, setSelectedCategories] = useState<ToolCategory[]>([]);
  const [selectedTool, setSelectedTool] = useState<AITool | null>(null);
  const [sortOption, setSortOption] = useState<SortOption>('nameAsc');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;

  // Combine all AI tools with error handling
  const allTools = useMemo(() => {
    try {
      return [...expandedAiTools, ...additionalAiTools];
    } catch (err) {
      setError('Failed to load AI tools');
      return [];
    }
  }, []);

  // Initialize filtered tools with loading state
  const [filteredTools, setFilteredTools] = useState<AITool[]>([]);

  // Effect for initial load
  useEffect(() => {
    const initializeTools = async () => {
      try {
        setIsLoading(true);
        // Simulate network delay for demo
        await new Promise(resolve => setTimeout(resolve, 500));
        setFilteredTools(allTools);
      } catch (err) {
        setError('Failed to initialize tools');
      } finally {
        setIsLoading(false);
      }
    };

    initializeTools();
  }, [allTools]);

  // Improved scroll behavior using ref
  const exploreRef = useRef<HTMLElement>(null);
  const scrollToContent = () => {
    exploreRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  // Pagination logic
  const paginatedTools = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    return filteredTools.slice(startIndex, startIndex + itemsPerPage);
  }, [filteredTools, currentPage]);

  const totalPages = Math.ceil(filteredTools.length / itemsPerPage);

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

  // Sort tools based on selected option
  const sortTools = (tools: AITool[], option: SortOption): AITool[] => {
    switch (option) {
      case 'nameAsc':
        return [...tools].sort((a, b) => a.name.localeCompare(b.name));
      case 'nameDesc':
        return [...tools].sort((a, b) => b.name.localeCompare(a.name));
      case 'popularity':
        // Sort by popularity (using the number of categories as a proxy for popularity)
        return [...tools].sort((a, b) => (b.categories.length - a.categories.length));
      case 'satisfaction':
        // Sort by customer satisfaction (using rating)
        return [...tools].sort((a, b) => (b.rating || 0) - (a.rating || 0));
      default:
        return tools;
    }
  };

  // Filter and sort tools when categories or sort option changes
  useEffect(() => {
    let result;
    if (selectedCategories.length === 0) {
      result = allTools;
    } else {
      result = allTools.filter(tool =>
        selectedCategories.some(category => tool.categories.includes(category))
      );
    }
    // Apply sorting
    result = sortTools(result, sortOption);
    setFilteredTools(result);
  }, [selectedCategories, sortOption, allTools]);

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

          {/* Loading State */}
          {isLoading ? (
            <div className="flex items-center justify-center min-h-[400px]">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-emerald-500"></div>
            </div>
          ) : (
            <>
              {/* Filter and Sort Controls */}
              <div className="flex flex-col md:flex-row gap-4 mb-12">
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
                              sortOption === 'popularity' ? 'Popularity' :
                              'Customer Satisfaction'}
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
                              onClick={() => {
                                setSortOption('nameAsc');
                                setIsSortOpen(false);
                              }}
                              className={`w-full text-left px-4 py-2 hover:bg-gray-700 ${sortOption === 'nameAsc' ? 'text-emerald-400' : 'text-gray-200'}`}
                            >
                              Name (A-Z)
                            </button>
                            <button
                              onClick={() => {
                                setSortOption('nameDesc');
                                setIsSortOpen(false);
                              }}
                              className={`w-full text-left px-4 py-2 hover:bg-gray-700 ${sortOption === 'nameDesc' ? 'text-emerald-400' : 'text-gray-200'}`}
                            >
                              Name (Z-A)
                            </button>
                            <button
                              onClick={() => {
                                setSortOption('popularity');
                                setIsSortOpen(false);
                              }}
                              className={`w-full text-left px-4 py-2 hover:bg-gray-700 ${sortOption === 'popularity' ? 'text-emerald-400' : 'text-gray-200'}`}
                            >
                              Popularity
                            </button>
                            <button
                              onClick={() => {
                                setSortOption('satisfaction');
                                setIsSortOpen(false);
                              }}
                              className={`w-full text-left px-4 py-2 hover:bg-gray-700 ${sortOption === 'satisfaction' ? 'text-emerald-400' : 'text-gray-200'}`}
                            >
                              Customer Satisfaction
                            </button>
                          </div>
                        </motion.div>
                      </>
                    )}
                  </AnimatePresence>
                </div>
              </div>

              {/* AI Tools Grid Component */}
              <AIToolsGrid
                tools={paginatedTools}
                onSelectTool={setSelectedTool}
                onClearFilters={() => {
                  setSelectedCategories([]);
                  setCurrentPage(1);
                }}
              />

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="flex justify-center mt-8 gap-2">
                  <button
                    onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
                    disabled={currentPage === 1}
                    className="px-4 py-2 rounded-lg bg-gray-800 text-gray-200 disabled:opacity-50 disabled:cursor-not-allowed"
                    aria-label="Previous page"
                  >
                    Previous
                  </button>
                  <span className="px-4 py-2 text-gray-200">
                    Page {currentPage} of {totalPages}
                  </span>
                  <button
                    onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
                    disabled={currentPage === totalPages}
                    className="px-4 py-2 rounded-lg bg-gray-800 text-gray-200 disabled:opacity-50 disabled:cursor-not-allowed"
                    aria-label="Next page"
                  >
                    Next
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      </section>

      {/* Tool Detail Popup with improved accessibility */}
      <AnimatePresence>
        {selectedTool && (
          <AIToolDetail
            tool={selectedTool}
            onClose={() => setSelectedTool(null)}
          />
        )}
      </AnimatePresence>
    </main>
  );
}

