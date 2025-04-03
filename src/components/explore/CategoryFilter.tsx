'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Filter, X } from 'lucide-react';
import { categoryLabels, ToolCategory } from '@/data/aiTools';
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
        className="flex items-center justify-center gap-2 bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-medium py-3 px-6 rounded-lg w-full hover:from-emerald-700 hover:to-teal-700 transition-all duration-300"
      >
        <Filter size={18} />
        Select Filter
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
              className="fixed z-20 p-6 bg-gray-800 border border-gray-700 rounded-lg shadow-xl w-[90%] max-w-3xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            >
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold text-gray-200">Filter by Category</h3>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-gray-400 hover:text-white"
                >
                  <X size={20} />
                </button>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
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
                        ? "bg-emerald-600/20 text-emerald-400 border border-emerald-600/30"
                        : "bg-gray-700/50 text-gray-300 border border-gray-700 hover:bg-gray-700"
                    )}
                  >
                    {label}
                  </button>
                ))}
              </div>

              {selectedCategories.length > 0 && (
                <div className="mt-4 flex justify-between items-center">
                  <span className="text-sm text-gray-400">
                    {selectedCategories.length} {selectedCategories.length === 1 ? 'category' : 'categories'} selected
                  </span>
                  <button
                    onClick={() => setSelectedCategories([])}
                    className="text-sm text-emerald-400 hover:text-emerald-300"
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

