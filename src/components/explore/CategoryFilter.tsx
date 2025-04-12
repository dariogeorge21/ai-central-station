'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Filter, X, ChevronDown } from 'lucide-react';
import { ToolCategory, categoryLabels } from '@/data/exploreIndex';

interface CategoryFilterProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  selectedCategories: string[];
  setSelectedCategories: React.Dispatch<React.SetStateAction<string[]>>;
}

const CategoryFilter: React.FC<CategoryFilterProps> = ({
  isOpen,
  setIsOpen,
  selectedCategories,
  setSelectedCategories,
}) => {
  return (
    <div className="relative w-full filter-dropdown">
      <motion.button
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-center gap-2 glassmorphic-card-content text-gray-200 font-medium py-3 px-6 rounded-lg w-full hover:bg-gray-800/60 transition-all duration-300"
      >
        <Filter size={18} />
        Filter by Category
        <span className="ml-1.5 px-2 py-0.5 bg-blue-500/20 text-blue-400 text-xs rounded-full">
          {selectedCategories.length || 'All'}
        </span>
        <ChevronDown
          className={`ml-2 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
        />
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
              onClick={() => setIsOpen(false)}
            />

            {/* Filter Modal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              transition={{ duration: 0.2 }}
              className="fixed z-50 glassmorphic-card-content p-6 rounded-xl shadow-xl w-[90%] max-w-3xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            >
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-semibold text-gray-100 tech-title">Filter by Category</h3>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-gray-400 hover:text-white transition-colors p-1 rounded-full hover:bg-gray-700/50"
                >
                  <X size={20} />
                </button>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 max-h-[60vh] overflow-y-auto p-1">
                {Object.entries(categoryLabels).map(([id, label]) => (
                  <button
                    key={id}
                    onClick={() => {
                      setSelectedCategories((prev) =>
                        prev.includes(id)
                          ? prev.filter((c) => c !== id)
                          : [...prev, id]
                      );
                    }}
                    className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 hover:shadow-md ${
                      selectedCategories.includes(id)
                        ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30'
                        : 'bg-gray-800/50 text-gray-300 border border-gray-700/50 hover:bg-gray-700/50'
                    }`}
                  >
                    {label}
                  </button>
                ))}
              </div>

              {selectedCategories.length > 0 && (
                <div className="mt-6 flex justify-between items-center">
                  <span className="text-sm text-gray-300 tech-text">
                    {selectedCategories.length} {selectedCategories.length === 1 ? 'category' : 'categories'} selected
                  </span>
                  <button
                    onClick={() => setSelectedCategories([])}
                    className="text-sm text-blue-400 hover:text-blue-300 transition-colors px-3 py-1.5 rounded-lg hover:bg-blue-900/20"
                  >
                    Clear all
                  </button>
                </div>
              )}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default CategoryFilter;

