'use client';

import React, { useState, useEffect } from 'react';
import { AITool, categoryLabels } from '@/data/aiTools';
import Pagination from './Pagination';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { X, Star, ExternalLink, Info } from 'lucide-react';

interface AIToolsGridProps {
  tools: AITool[];
  isLoading: boolean;
  onSelectTool?: (tool: AITool) => void;
  onClearFilters?: () => void;
}

const ITEMS_PER_PAGE = 32; // Show 32 items per page

const AIToolCard: React.FC<{ tool: AITool }> = ({ tool }) => {
  const [showPopup, setShowPopup] = useState(false);

  // Determine if the tool is free
  const isFree = tool.pricing.toLowerCase().includes('free');

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="bg-white/5 backdrop-blur-sm border border-gray-800 rounded-xl overflow-hidden hover:border-emerald-500/30 transition-all duration-300 flex flex-col h-full cursor-pointer"
        onClick={() => setShowPopup(true)}
      >
        {/* Category Label */}
        <div className="absolute top-3 right-3 z-10">
          <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-gray-800/70 backdrop-blur-sm text-emerald-400 border border-gray-700/50">
            {tool.categories.length > 0 && categoryLabels[tool.categories[0]]}
          </span>
        </div>

        {/* Free Label */}
        {isFree && (
          <div className="absolute top-3 left-3 z-10">
            <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-emerald-900/70 backdrop-blur-sm text-emerald-300 border border-emerald-700/50">
              Free
            </span>
          </div>
        )}

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
          
          <div className="flex items-center justify-between">
            {/* Rating stars if available */}
            {tool.rating && (
              <div className="flex items-center">
                <Star className="w-4 h-4 text-yellow-400 fill-yellow-400 mr-1" />
                <span className="text-gray-400 text-xs">{tool.rating}</span>
              </div>
            )}
            
            {/* Info button */}
            <button 
              onClick={(e) => {
                e.stopPropagation();
                setShowPopup(true);
              }}
              className="text-emerald-400 hover:text-emerald-300 transition-colors"
              aria-label="View details"
            >
              <Info className="w-5 h-5" />
            </button>
          </div>
        </div>
      </motion.div>

      {/* Tool Popup */}
      <AnimatePresence>
        {showPopup && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
              onClick={() => setShowPopup(false)}
            />

            {/* Popup */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gray-900 border border-gray-800 rounded-xl shadow-xl z-50 w-[90%] max-w-md max-h-[90vh] overflow-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header with logo */}
              <div className="relative h-24 bg-gradient-to-r from-gray-800 to-gray-900 flex items-center justify-center">
                {tool.logoUrl ? (
                  <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-gray-700">
                    <Image 
                      src={tool.logoUrl} 
                      alt={`${tool.name} logo`} 
                      fill
                      className="object-cover"
                    />
                  </div>
                ) : (
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-emerald-800 to-emerald-600 flex items-center justify-center">
                    <span className="text-2xl font-bold text-white">{tool.name.charAt(0)}</span>
                  </div>
                )}
                
                {/* Price Badge */}
                <div className="absolute top-4 right-4">
                  <span className={`text-xs font-medium px-2.5 py-1 rounded-full ${
                    isFree 
                      ? "bg-emerald-900/70 text-emerald-300 border border-emerald-700/50" 
                      : "bg-blue-900/70 text-blue-300 border border-blue-700/50"
                  }`}>
                    {isFree ? 'Free' : 'Paid'}
                  </span>
                </div>
                
                {/* Close Button */}
                <button
                  onClick={() => setShowPopup(false)}
                  className="absolute top-4 left-4 text-gray-400 hover:text-white transition-colors"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Tool Name */}
                <h2 className="text-2xl font-bold text-gray-100 mb-4">{tool.name}</h2>
                
                {/* Main Use */}
                <div className="mb-4">
                  <h3 className="text-sm font-semibold text-emerald-400 mb-1">Main Use</h3>
                  <p className="text-gray-300">{tool.mainUse}</p>
                </div>

                {/* Pricing */}
                <div className="mb-4">
                  <h3 className="text-sm font-semibold text-emerald-400 mb-1">Pricing</h3>
                  <p className="text-gray-300">{tool.pricing}</p>
                </div>

                {/* User Experience (if available) */}
                {tool.userExperience && (
                  <div className="mb-4">
                    <h3 className="text-sm font-semibold text-emerald-400 mb-1">User Experience</h3>
                    <p className="text-gray-300">{tool.userExperience}</p>
                  </div>
                )}

                {/* Rating */}
                {tool.rating && (
                  <div className="mb-6">
                    <h3 className="text-sm font-semibold text-emerald-400 mb-1">Rating</h3>
                    <div className="flex items-center">
                      {/* Convert 5-star rating to 10-star rating */}
                      <div className="flex items-center">
                        {[...Array(10)].map((_, index) => {
                          // Calculate the rating out of 10 (original rating is out of 5)
                          const ratingOutOf10 = tool.rating ? tool.rating * 2 : 0;
                          return (
                            <Star
                              key={index}
                              size={14}
                              className={`${
                                index < Math.round(ratingOutOf10)
                                  ? 'text-yellow-400 fill-yellow-400'
                                  : 'text-gray-600'
                              } mr-0.5`}
                            />
                          );
                        })}
                      </div>
                      <span className="ml-2 text-gray-300">{(tool.rating * 2).toFixed(1)}/10</span>
                    </div>
                  </div>
                )}

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 mt-6">
                  {/* Visit Website Button */}
                  <a
                    href={tool.websiteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-medium py-2 px-4 rounded-lg transition-colors"
                  >
                    Visit Website
                    <ExternalLink size={16} />
                  </a>

                  {/* Learn More Button */}
                  <Link 
                    href={`/tools/${tool.id}`}
                    className="flex-1 inline-flex items-center justify-center gap-2 bg-gray-700 hover:bg-gray-600 text-gray-200 font-medium py-2 px-4 rounded-lg transition-colors"
                  >
                    Learn More
                    <Info size={16} />
                  </Link>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

const LoadingSkeleton: React.FC = () => {
  const skeletonCards = Array(12).fill(null);
  
  return (
    <>
      {skeletonCards.map((_, index) => (
        <div 
          key={`skeleton-${index}`}
          className="bg-white/5 backdrop-blur-sm border border-gray-800 rounded-xl overflow-hidden h-[320px] animate-pulse"
        >
          <div className="h-40 bg-gray-800"></div>
          <div className="p-5">
            <div className="h-6 bg-gray-700 rounded mb-4 w-3/4"></div>
            <div className="h-4 bg-gray-700 rounded mb-2 w-full"></div>
            <div className="h-4 bg-gray-700 rounded mb-2 w-5/6"></div>
            <div className="h-4 bg-gray-700 rounded mb-2 w-4/6"></div>
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
