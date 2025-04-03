'use client';

import React, { useState, useEffect } from 'react';
import { AITool } from '@/data/aiTools';
import AIToolCard from './AIToolCard';
import Pagination from './Pagination';

interface AIToolsGridProps {
  tools: AITool[];
  onSelectTool: (tool: AITool) => void;
  onClearFilters: () => void;
}

const ITEMS_PER_PAGE = 32; // Show 32 cards per page

const AIToolsGrid: React.FC<AIToolsGridProps> = ({
  tools,
  onSelectTool,
  onClearFilters
}) => {
  const [isLoading, setIsLoading] = useState(true);
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

  // Simulate loading state
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  // Handle page change
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    // Scroll to top of grid
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {isLoading ? (
          // Loading skeleton - show 8 cards on mobile, 12 on larger screens
          Array.from({ length: Math.min(12, ITEMS_PER_PAGE) }).map((_, index) => (
            <div key={index} className="bg-gray-800/50 rounded-xl overflow-hidden animate-pulse h-[360px]">
              <div className="h-48 bg-gray-700/50"></div>
              <div className="p-5">
                <div className="h-6 bg-gray-700/50 rounded w-3/4 mb-4"></div>
                <div className="h-16 bg-gray-700/50 rounded mb-4"></div>
                <div className="h-10 bg-gray-700/50 rounded mt-auto"></div>
              </div>
            </div>
          ))
        ) : (
          // Actual tools (paginated)
          paginatedTools.map((tool) => (
            <AIToolCard
              key={tool.id}
              tool={tool}
              onClick={onSelectTool}
            />
          ))
        )}

        {!isLoading && tools.length === 0 && (
          <div className="col-span-full py-16 text-center">
            <p className="text-gray-400 text-lg">No tools found matching the selected categories</p>
            <button
              onClick={onClearFilters}
              className="mt-4 text-emerald-400 hover:text-emerald-300"
            >
              Clear filters
            </button>
          </div>
        )}
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
