'use client';

import React, { useState, useEffect } from 'react';
import { AITool, categoryLabels } from '@/data/aiTools';
import Pagination from './Pagination';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

interface AIToolsGridProps {
  tools: AITool[];
  isLoading: boolean;
  onSelectTool?: (tool: AITool) => void;
  onClearFilters?: () => void;
}

const ITEMS_PER_PAGE = 32; // Show 32 items per page

const AIToolCard: React.FC<{ tool: AITool }> = ({ tool }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="bg-white/5 backdrop-blur-sm border border-gray-800 rounded-xl overflow-hidden hover:border-emerald-500/30 transition-all duration-300 flex flex-col h-full"
    >
      {/* Category Label */}
      <div className="absolute top-3 right-3 z-10">
        <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-gray-800/70 backdrop-blur-sm text-emerald-400 border border-gray-700/50">
          {tool.categories.length > 0 && categoryLabels[tool.categories[0]]}
        </span>
      </div>

      {/* Logo Image */}
      <div className="relative h-40 overflow-hidden">
        {tool.logoUrl ? (
          <Image 
            src={tool.logoUrl} 
            alt={`${tool.name} logo`} 
            fill
            className="object-cover transition-transform duration-300 hover:scale-105"
          />
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
            <span className="text-2xl font-bold text-emerald-400">{tool.name.charAt(0)}</span>
          </div>
        )}
      </div>

      {/* Tool Info */}
      <div className="p-5 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-gray-100 mb-2">{tool.name}</h3>
        <p className="text-gray-400 text-sm mb-4 line-clamp-3 flex-grow">{tool.description}</p>

        <Link 
          href={`/tools/${tool.id}`} 
          className="mt-auto w-full inline-flex justify-center items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-medium py-2 px-4 rounded-lg transition-colors text-sm"
        >
          Learn More
        </Link>
      </div>
    </motion.div>
  );
};

const LoadingSkeleton: React.FC = () => {
  const skeletonCards = Array(12).fill(null);
  
  return (
    <>
      {skeletonCards.map((_, index) => (
        <div 
          key={`skeleton-${index}`}
          className="bg-white/5 backdrop-blur-sm border border-gray-800 rounded-xl overflow-hidden h-[380px] animate-pulse"
        >
          <div className="h-40 bg-gray-800"></div>
          <div className="p-5">
            <div className="h-6 bg-gray-700 rounded mb-4 w-3/4"></div>
            <div className="h-4 bg-gray-700 rounded mb-2 w-full"></div>
            <div className="h-4 bg-gray-700 rounded mb-2 w-5/6"></div>
            <div className="h-4 bg-gray-700 rounded mb-6 w-4/6"></div>
            <div className="h-10 bg-gray-700 rounded mt-auto"></div>
          </div>
        </div>
      ))}
    </>
  );
};

const AIToolsGrid: React.FC<AIToolsGridProps> = ({
  tools,
  isLoading,
  onSelectTool,
  onClearFilters
}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [paginatedTools, setPaginatedTools] = useState<AITool[]>([]);

  // Calculate total pages
  const totalPages = Math.ceil(tools.length / ITEMS_PER_PAGE);

  // Update current page when tools change
  useEffect(() => {
    // Reset to page 1 when filters change
    setCurrentPage(1);
  }, [tools.length]);

  // Update paginated tools when page or tools change
  useEffect(() => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    setPaginatedTools(tools.slice(startIndex, endIndex));
  }, [currentPage, tools]);

  // Handle page change
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    // Scroll to top of list
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  
  if (isLoading) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        <LoadingSkeleton />
      </div>
    );
  }

  if (tools.length === 0) {
    return (
      <div className="flex items-center justify-center py-20">
        <p className="text-lg text-gray-400">No tools found. Try adjusting your filters.</p>
      </div>
    );
  }

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {paginatedTools.map((tool) => (
          <AIToolCard key={tool.id} tool={tool} />
        ))}
      </div>

      {/* Results count and pagination */}
      {!isLoading && tools.length > 0 && (
        <div className="mt-8 text-center">
          <p className="text-gray-400 text-sm mb-4">
            Showing {Math.min((currentPage - 1) * ITEMS_PER_PAGE + 1, tools.length)} - {Math.min(currentPage * ITEMS_PER_PAGE, tools.length)} of {tools.length} results
          </p>

          {totalPages > 1 && (
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
            />
          )}
        </div>
      )}
    </>
  );
};

export default AIToolsGrid;
