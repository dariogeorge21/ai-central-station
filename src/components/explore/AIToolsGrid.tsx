'use client';

import React, { useState, useEffect } from 'react';
import { AITool } from '@/data/aiTools';
import Pagination from './Pagination';

interface AIToolsGridProps {
  tools: AITool[];
  onSelectTool: (tool: AITool) => void;
  onClearFilters: () => void;
}

const ITEMS_PER_PAGE = 32; // Show 32 items per page

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
    // Scroll to top of list
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  
  return (
    <>
      <div className="w-full">
        {isLoading ? (
          // Loading skeleton
          <div className="space-y-4">
            {Array.from({ length: 10 }).map((_, index) => (
              <div key={index} className="w-full bg-gray-800/50 rounded-lg p-4 animate-pulse">
                <div className="h-6 bg-gray-700/50 rounded w-1/4 mb-2"></div>
                <div className="h-4 bg-gray-700/50 rounded w-3/4"></div>
              </div>
            ))}
          </div>
        ) : (
          // Tool list without cards
          <div className="space-y-4">
            {paginatedTools.length > 0 ? (
              paginatedTools.map((tool) => (
                <div 
                  key={tool.id} 
                  className="w-full bg-gray-800/20 hover:bg-gray-800/30 border border-gray-800 hover:border-emerald-500/30 rounded-lg p-4 transition-all duration-300 cursor-pointer"
                  onClick={() => onSelectTool(tool)}
                >
                  <h3 className="text-xl font-semibold text-gray-100 mb-2">{tool.name}</h3>
                  <p className="text-gray-400 text-sm">{tool.description}</p>
                </div>
              ))
            ) : (
              <div className="py-16 text-center">
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
