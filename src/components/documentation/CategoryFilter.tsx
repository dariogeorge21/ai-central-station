'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiFilter, FiX, FiChevronDown } from 'react-icons/fi';
import { categoryLabels, ToolCategory } from '@/data/exploreIndex';
import { cn } from '@/lib/utils';

interface CategoryFilterProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  selectedCategories: ToolCategory[];
  setSelectedCategories: React.Dispatch<React.SetStateAction<ToolCategory[]>>;
}

const CategoryFilter: React.FC<CategoryFilterProps> = ({
  isOpen,
  setIsOpen,
  selectedCategories,
  setSelectedCategories,
}) => {
  return (
    <div className="relative w-full">
      <motion.button
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium py-3 px-6 rounded-lg w-full hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 glassmorphic-card-content"
      >
        <FiFilter size={18} />
        Select Categories
        <FiChevronDown className={cn(
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
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
              onClick={() => setIsOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="fixed z-50 p-6 bg-gray-900 border border-gray-700 rounded-lg shadow-xl w-[90%] max-w-3xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            >
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-semibold text-white tech-title">Filter by Category</h3>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <FiX size={20} />
                </button>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 max-h-[60vh] overflow-y-auto py-2">
                {Object.entries(categoryLabels).map(([id, label]) => (
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
                      "px-4 py-2 rounded-md text-sm font-medium transition-colors",
                      selectedCategories.includes(id as ToolCategory)
                        ? "bg-blue-600 text-white border border-blue-600"
                        : "bg-gray-800 text-gray-300 border border-gray-700 hover:bg-gray-700"
                    )}
                  >
                    {label}
                  </button>
                ))}
              </div>

              {selectedCategories.length > 0 && (
                <div className="mt-6 flex justify-between items-center">
                  <span className="text-sm text-gray-300">
                    {selectedCategories.length} {selectedCategories.length === 1 ? 'category' : 'categories'} selected
                  </span>
                  <button
                    onClick={() => setSelectedCategories([])}
                    className="text-sm text-blue-400 hover:text-blue-300 transition-colors"
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