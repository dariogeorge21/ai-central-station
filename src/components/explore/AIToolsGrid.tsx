'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { AITool, categoryLabels } from '@/data/aiTools';
import { ChevronLeft, ChevronRight, Star, X } from 'lucide-react';

interface AIToolsGridProps {
  tools: AITool[];
  isLoading: boolean;
  onSelectTool?: (tool: AITool) => void;
  onClearFilters?: () => void;
}

// Items per page for pagination
const ITEMS_PER_PAGE = 12;

// Tool Card - Compact version for grid view
const AIToolCard: React.FC<{ tool: AITool }> = ({ tool }) => {
  return (
    <div className="glassmorphic-tool-card p-4 rounded-xl border border-gray-800/50 hover:border-blue-500/30 transition-all duration-300 h-full flex flex-col">
      <div className="flex items-start mb-3 gap-3">
        {/* Logo Image */}
        <div className="w-12 h-12 rounded-lg overflow-hidden flex-shrink-0 bg-gray-800 relative">
          {tool.logoUrl ? (
            <Image
              src={tool.logoUrl}
              alt={`${tool.name} logo`}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 48px, 48px"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-blue-900/30 text-blue-400 text-xs">
              {tool.name.substring(0, 2).toUpperCase()}
            </div>
          )}
        </div>
        
        <div>
          <h3 className="text-base font-semibold text-gray-100 mb-0.5 line-clamp-1 tech-title">
            {tool.name}
          </h3>
          <div className="flex flex-wrap gap-1">
            {tool.categories.slice(0, 2).map((category) => (
              <span
                key={category}
                className="inline-block text-xs px-1.5 py-0.5 bg-blue-900/30 text-blue-400 rounded"
              >
                {categoryLabels[category]}
              </span>
            ))}
            {tool.categories.length > 2 && (
              <span className="inline-block text-xs px-1.5 py-0.5 bg-gray-800 text-gray-400 rounded">
                +{tool.categories.length - 2}
              </span>
            )}
          </div>
        </div>
      </div>
      
      <p className="text-gray-400 text-sm mb-3 line-clamp-2 flex-grow tech-text">
        {tool.description}
      </p>
      
      {tool.rating && (
        <div className="flex items-center gap-1 mb-2">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={12}
                className={`${
                  i < Math.floor(tool.rating || 0)
                    ? "text-blue-400 fill-blue-400"
                    : i < (tool.rating || 0)
                    ? "text-blue-400 fill-blue-400/50"
                    : "text-gray-600"
                }`}
              />
            ))}
          </div>
          <span className="text-xs text-gray-400">{tool.rating.toFixed(1)}</span>
        </div>
      )}
      
      <a
        href={tool.websiteUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-2 text-sm bg-blue-600 hover:bg-blue-700 text-white py-1.5 px-3 rounded-lg transition-colors w-full text-center"
      >
        Visit Website
      </a>
    </div>
  );
};

// Loading placeholder component
const LoadingSkeleton: React.FC = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {[...Array(8)].map((_, i) => (
        <div
          key={i}
          className="glassmorphic-card-content animate-pulse p-4 rounded-xl border border-gray-800/50 h-64"
        >
          <div className="flex items-start mb-3 gap-3">
            <div className="w-12 h-12 rounded-lg bg-gray-700/50"></div>
            <div className="flex-1">
              <div className="h-5 bg-gray-700/50 rounded w-3/4 mb-1.5"></div>
              <div className="flex gap-1">
                <div className="h-3 bg-gray-700/50 rounded w-12"></div>
                <div className="h-3 bg-gray-700/50 rounded w-12"></div>
              </div>
            </div>
          </div>
          <div className="space-y-2">
            <div className="h-3 bg-gray-700/50 rounded"></div>
            <div className="h-3 bg-gray-700/50 rounded"></div>
            <div className="h-3 bg-gray-700/50 rounded w-3/4"></div>
          </div>
          <div className="mt-auto pt-4">
            <div className="h-8 bg-gray-700/50 rounded mt-auto"></div>
          </div>
        </div>
      ))}
    </div>
  );
};

// Main component with pagination
const AIToolsGrid: React.FC<AIToolsGridProps> = ({
  tools,
  isLoading,
  onSelectTool,
  onClearFilters
}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedTool, setSelectedTool] = useState<AITool | null>(null);
  
  // Reset to first page when tools list changes
  useEffect(() => {
    setCurrentPage(1);
  }, [tools.length]);
  
  // Calculate pagination
  const totalPages = Math.ceil(tools.length / ITEMS_PER_PAGE);
  const currentItems = tools.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );
  
  // Handle page change
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    // Scroll to top of grid with smooth behavior
    window.scrollTo({ top: window.scrollY - 200, behavior: 'smooth' });
  };
  
  if (isLoading) {
    return <LoadingSkeleton />;
  }
  
  if (tools.length === 0) {
    return (
      <div className="glassmorphic-card-content p-8 rounded-xl text-center">
        <h3 className="text-xl font-semibold text-gray-100 mb-4 tech-title">No AI tools found</h3>
        <p className="text-gray-400 mb-6 tech-text">
          Try adjusting your filters or search query to see more results.
        </p>
        {onClearFilters && (
          <button
            onClick={onClearFilters}
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors"
          >
            <X size={16} />
            Clear Filters
          </button>
        )}
      </div>
    );
  }
  
  return (
    <div>
      {/* Grid layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {currentItems.map((tool) => (
          <motion.div
            key={tool.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <AIToolCard tool={tool} />
          </motion.div>
        ))}
      </div>
      
      {/* Pagination controls */}
      {totalPages > 1 && (
        <div className="flex items-center justify-between mt-8 flex-wrap gap-4">
          <div className="text-sm text-gray-400 tech-text">
            Showing {(currentPage - 1) * ITEMS_PER_PAGE + 1} to{' '}
            {Math.min(currentPage * ITEMS_PER_PAGE, tools.length)} of {tools.length} tools
          </div>
          
          <div className="flex items-center gap-1 flex-wrap">
            <button
              onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
              disabled={currentPage === 1}
              className={`p-2 rounded-lg ${
                currentPage === 1
                  ? 'text-gray-600 cursor-not-allowed'
                  : 'text-gray-400 hover:text-white hover:bg-gray-800/50'
              }`}
            >
              <ChevronLeft size={20} />
            </button>
            
            {[...Array(totalPages)].map((_, i) => {
              const pageNum = i + 1;
              // Show limited number of pages with ellipsis for better UX
              if (
                pageNum === 1 ||
                pageNum === totalPages ||
                (pageNum >= currentPage - 1 && pageNum <= currentPage + 1)
              ) {
                return (
                  <button
                    key={pageNum}
                    onClick={() => handlePageChange(pageNum)}
                    className={`w-8 h-8 rounded-lg flex items-center justify-center text-sm ${
                      currentPage === pageNum
                        ? 'bg-blue-600 text-white'
                        : 'text-gray-400 hover:bg-gray-800/50 hover:text-white'
                    }`}
                  >
                    {pageNum}
                  </button>
                );
              } else if (
                (pageNum === currentPage - 2 && pageNum > 1) ||
                (pageNum === currentPage + 2 && pageNum < totalPages)
              ) {
                return (
                  <span key={pageNum} className="text-gray-600 px-1">
                    ...
                  </span>
                );
              }
              return null;
            })}
            
            <button
              onClick={() => handlePageChange(Math.min(totalPages, currentPage + 1))}
              disabled={currentPage === totalPages}
              className={`p-2 rounded-lg ${
                currentPage === totalPages
                  ? 'text-gray-600 cursor-not-allowed'
                  : 'text-gray-400 hover:text-white hover:bg-gray-800/50'
              }`}
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AIToolsGrid;
