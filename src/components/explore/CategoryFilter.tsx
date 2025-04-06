'use client';

import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Filter, X, Search } from 'lucide-react';
import { categoryLabels, ToolCategory } from '@/data/aiTools';
import { cn } from '@/lib/utils';

interface CategoryFilterProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  selectedCategories: ToolCategory[];
  setSelectedCategories: React.Dispatch<React.SetStateAction<ToolCategory[]>>;
}

// Group categories for better organization
const categoryGroups = {
  'AI Foundations': ['models', 'chatbots'],
  'Content & Creativity': ['writing', 'content-creation', 'text-generators', 'design', 'music', 'video'],
  'Developer Tools': ['code', 'developer', 'website-builders'],
  'Search & Discovery': ['search-engines', 'local-search', 'browser-extensions'],
  'Productivity': ['productivity', 'virtual-assistants', 'meeting', 'email'],
  'Business': ['sales', 'recruitment', 'customer-support'],
  'Communication': ['translation', 'voice-cloning', 'social-media'],
  'Specialized': ['finance', 'health', 'academia', 'language-learning', 'travel', 'home', 'chatgpt-extensions']
};

const CategoryFilter: React.FC<CategoryFilterProps> = ({
  isOpen,
  setIsOpen,
  selectedCategories,
  setSelectedCategories,
}) => {
  const [searchQuery, setSearchQuery] = useState('');

  // Create a lookup map for category groups
  const categoryGroupMap = useMemo(() => {
    const map: Record<string, string> = {};
    Object.entries(categoryGroups).forEach(([group, categories]) => {
      categories.forEach(category => {
        map[category] = group;
      });
    });
    return map;
  }, []);

  // Filter categories based on search query
  const filteredCategories = useMemo(() => {
    if (!searchQuery.trim()) {
      return Object.entries(categoryLabels);
    }
    
    const query = searchQuery.toLowerCase().trim();
    return Object.entries(categoryLabels).filter(([id, label]) => 
      label.toLowerCase().includes(query) || id.toLowerCase().includes(query)
    );
  }, [searchQuery]);

  // Group filtered categories
  const groupedCategories = useMemo(() => {
    const grouped: Record<string, [string, string][]> = {};
    
    // Initialize groups
    Object.keys(categoryGroups).forEach(group => {
      grouped[group] = [];
    });
    
    // Add "Other" group for any categories not in predefined groups
    grouped['Other'] = [];
    
    // Populate groups
    filteredCategories.forEach(category => {
      const [id, label] = category;
      const group = categoryGroupMap[id] || 'Other';
      grouped[group].push(category);
    });
    
    // Filter out empty groups
    return Object.entries(grouped).filter(([_, categories]) => categories.length > 0);
  }, [filteredCategories, categoryGroupMap]);

  return (
    <div className="relative w-full">
      <motion.button
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-center gap-2 bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-medium py-3 px-6 rounded-lg w-full hover:from-emerald-700 hover:to-teal-700 transition-all duration-300"
      >
        <Filter size={18} />
        {selectedCategories.length > 0 ? `${selectedCategories.length} Filters Selected` : 'Select Categories'}
        <ChevronDown className={cn(
          "ml-2 transition-transform duration-300",
          isOpen ? "rotate-180" : ""
        )} />
      </motion.button>

      {/* Filter Popup */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-10"
              onClick={() => setIsOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="fixed z-20 p-6 bg-gray-800 border border-gray-700 rounded-lg shadow-xl w-[95%] max-w-4xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 max-h-[90vh] overflow-hidden flex flex-col"
            >
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-semibold text-gray-200">Filter by Category</h3>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Search input */}
              <div className="relative mb-4">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
                <input
                  type="text"
                  placeholder="Search categories..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-gray-700 border border-gray-600 rounded-lg py-2 pl-10 pr-4 text-gray-200 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white"
                  >
                    <X size={16} />
                  </button>
                )}
              </div>

              {/* Categories list with groups */}
              <div className="overflow-y-auto flex-grow pr-2 space-y-4">
                {groupedCategories.map(([groupName, categories]) => (
                  <div key={groupName}>
                    <h4 className="text-sm font-medium text-emerald-400 mb-2 border-b border-gray-700 pb-1">{groupName}</h4>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
                      {categories.map(([id, label]) => (
                        <button
                          key={id}
                          onClick={() => {
                            const category = id as ToolCategory;
                            setSelectedCategories((prev: ToolCategory[]) =>
                              prev.includes(category)
                                ? prev.filter(c => c !== category)
                                : [...prev, category]
                            );
                          }}
                          className={cn(
                            "px-3 py-2 rounded-md text-sm font-medium transition-colors text-left truncate",
                            selectedCategories.includes(id as ToolCategory)
                              ? "bg-emerald-600/20 text-emerald-400 border border-emerald-600/30"
                              : "bg-gray-700/50 text-gray-300 border border-gray-700 hover:bg-gray-700"
                          )}
                        >
                          {label}
                        </button>
                      ))}
                    </div>
                  </div>
                ))}

                {filteredCategories.length === 0 && (
                  <div className="text-center py-8 text-gray-400">
                    No categories match your search
                  </div>
                )}
              </div>

              {/* Bottom actions */}
              <div className="mt-4 pt-3 border-t border-gray-700 flex justify-between items-center">
                <div className="text-sm text-gray-400">
                  {selectedCategories.length > 0 ? (
                    <span>{selectedCategories.length} {selectedCategories.length === 1 ? 'category' : 'categories'} selected</span>
                  ) : (
                    <span>All categories will be shown</span>
                  )}
                </div>
                <div className="flex gap-3">
                  {selectedCategories.length > 0 && (
                    <button
                      onClick={() => setSelectedCategories([])}
                      className="px-3 py-1 text-sm text-emerald-400 hover:text-emerald-300 border border-emerald-500/30 rounded-md hover:bg-emerald-900/20"
                    >
                      Clear all
                    </button>
                  )}
                  <button
                    onClick={() => setIsOpen(false)}
                    className="px-3 py-1 text-sm bg-emerald-600 hover:bg-emerald-700 text-white rounded-md"
                  >
                    Apply Filters
                  </button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default CategoryFilter;

