'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Clock, Share2, ChevronLeft, ChevronRight } from 'lucide-react';
import SharePopup from './SharePopup';
import FallbackBlogPosts from './FallbackBlogPosts';

type BlogPost = {
  title: string;
  link: string;
  pubDate: string;
  description: string;
  source: string;
};

interface BlogFeedProps {
  forceRefresh?: boolean;
}

// Default number of rows per page
const DEFAULT_ROWS_PER_PAGE = 4; // We'll show 4 rows by default

export default function BlogFeed({ forceRefresh }: BlogFeedProps) {
  const [allPosts, setAllPosts] = useState<BlogPost[]>([]);
  const [currentPosts, setCurrentPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isMockData, setIsMockData] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [columns, setColumns] = useState(3); // Default to 3 columns (desktop)
  const [dynamicPostsPerPage, setDynamicPostsPerPage] = useState(DEFAULT_ROWS_PER_PAGE * columns);
  const [sharePopup, setSharePopup] = useState<{
    isOpen: boolean;
    title: string;
    url: string;
  }>({
    isOpen: false,
    title: '',
    url: ''
  });

  // Update columns and posts per page based on screen size
  useEffect(() => {
    const updateGridLayout = () => {
      let newColumns = 3; // Default (large screens)
      let rowsPerPage = DEFAULT_ROWS_PER_PAGE; // Default number of rows

      // Determine number of columns based on screen width
      if (window.innerWidth < 640) {
        newColumns = 1; // Mobile
        rowsPerPage = 6; // More rows for mobile to compensate for fewer columns
      } else if (window.innerWidth < 1024) {
        newColumns = 2; // Tablets
        rowsPerPage = 5; // More rows for tablets
      } else {
        // Large screens
        newColumns = 3; // Desktop
        rowsPerPage = 4; // Standard number of rows
      }

      setColumns(newColumns);
      // Calculate posts per page as rows * columns
      setDynamicPostsPerPage(rowsPerPage * newColumns);
    };

    // Initial calculation
    updateGridLayout();

    // Update on resize
    window.addEventListener('resize', updateGridLayout);
    return () => window.removeEventListener('resize', updateGridLayout);
  }, []);

  // Fetch blog posts
  useEffect(() => {
    const fetchBlogPosts = async () => {
      try {
        setLoading(true);

        // Add a cache-busting parameter when forceRefresh is true
        const url = `/api/rss-feeds?t=${Date.now()}`; // Always add timestamp to ensure fresh content
        console.log('Fetching blog posts from:', url);

        const response = await fetch(url, {
          // Add these options to prevent caching issues
          cache: 'no-store',
          headers: {
            'Cache-Control': 'no-cache',
            'Pragma': 'no-cache'
          }
        });

        if (!response.ok) {
          throw new Error(`Failed to fetch blog posts: ${response.status} ${response.statusText}`);
        }

        const data = await response.json();
        console.log('Received blog data:', data);

        const fetchedPosts = data.articles || [];
        if (fetchedPosts.length === 0) {
          console.warn('Received empty articles array');
        }

        setAllPosts(fetchedPosts);
        setTotalPages(Math.ceil(fetchedPosts.length / dynamicPostsPerPage));
        setIsMockData(data.isMockData || false);
        setError(null);
      } catch (err) {
        // Specify error type as unknown, then use type guard
        const error = err as unknown;
        if (error instanceof Error) {
          console.error('Error fetching blog posts:', error);
          setError(`Failed to load blog posts. ${error.message}`);
        } else {
          console.error('Error fetching blog posts:', error);
          setError('Failed to load blog posts. Please try again later.');
        }
      } finally {
        setLoading(false);
      }
    };

    fetchBlogPosts();
  }, [forceRefresh, dynamicPostsPerPage]);

  // Update current posts when page changes or all posts are updated
  useEffect(() => {
    const indexOfLastPost = currentPage * dynamicPostsPerPage;
    const indexOfFirstPost = indexOfLastPost - dynamicPostsPerPage;
    setCurrentPosts(allPosts.slice(indexOfFirstPost, indexOfLastPost));
  }, [currentPage, allPosts, dynamicPostsPerPage]);

  // Update total pages when posts per page changes
  useEffect(() => {
    if (allPosts.length > 0) {
      setTotalPages(Math.ceil(allPosts.length / dynamicPostsPerPage));
      // Reset to first page when posts per page changes
      setCurrentPage(1);
    }
  }, [dynamicPostsPerPage, allPosts.length]);

  const handleShare = (title: string, url: string) => {
    setSharePopup({
      isOpen: true,
      title,
      url
    });
  };

  const closeSharePopup = () => {
    setSharePopup({
      isOpen: false,
      title: '',
      url: ''
    });
  };

  // Pagination controls
  const goToPage = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    // Scroll to top of the blog section
    document.getElementById('content')?.scrollIntoView({ behavior: 'smooth' });
  };

  const goToPreviousPage = () => {
    if (currentPage > 1) {
      goToPage(currentPage - 1);
    }
  };

  const goToNextPage = () => {
    if (currentPage < totalPages) {
      goToPage(currentPage + 1);
    }
  };

  // Animation variants for staggered children
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05 // Reduced from 0.1 to handle more items
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 12
      }
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center py-12 sm:py-16 md:py-20">
        <div className="animate-spin rounded-full h-10 w-10 sm:h-12 sm:w-12 border-t-2 border-b-2 border-pink-500"></div>
      </div>
    );
  }

  if (error) {
    return <FallbackBlogPosts errorMessage={error} />;
  }

  if (allPosts.length === 0) {
    return <FallbackBlogPosts errorMessage="No blog posts found. Check back later for new content." />;
  }

  // Function to generate a random gradient for blog cards
  const generateGradient = (seed: string) => {
    const gradients = [
      'from-blue-600 to-violet-600',
      'from-cyan-500 to-blue-600',
      'from-indigo-500 to-purple-500',
      'from-purple-500 to-pink-500',
      'from-pink-500 to-orange-400',
      'from-emerald-500 to-teal-400',
      'from-blue-500 to-indigo-500',
      'from-green-500 to-teal-500',
      'from-red-500 to-pink-500',
      'from-yellow-500 to-orange-500'
    ];

    // Use the seed to deterministically pick a gradient
    const seedSum = seed.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
    const gradientIndex = seedSum % gradients.length;

    return gradients[gradientIndex];
  };

  return (
    <>
      <div className="text-gray-400 text-xs sm:text-sm mb-4 px-1 flex justify-between items-center">
        <span>
          Showing {(currentPage - 1) * dynamicPostsPerPage + 1} to {Math.min(currentPage * dynamicPostsPerPage, allPosts.length)} of {allPosts.length} blog posts
          (Page {currentPage} of {totalPages})
        </span>
        {isMockData && (
          <span className="text-pink-400 text-xs bg-pink-900/30 px-2 py-1 rounded-full">
            Demo Mode
          </span>
        )}
      </div>
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        key={`page-${currentPage}`} // Key to force re-render animation when page changes
      >
        {currentPosts.map((post, index) => {
          const gradientClass = generateGradient(post.source);

          return (
            <motion.div
              key={`${post.link}-${index}`}
              className="glassmorphic-card-content rounded-xl overflow-hidden hover:shadow-lg hover:shadow-pink-900/20 transition-all duration-300 hover:border-pink-500/30 flex flex-col h-full"
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
            >
              <div className="px-4 pt-4 flex justify-between items-start">
                <div className={`text-xs font-medium bg-gradient-to-r ${gradientClass} bg-clip-text text-transparent px-2 py-1 rounded-sm flex items-center truncate max-w-[70%] tech-title`}>
                  {post.source}
                </div>
                <div className="flex items-center text-gray-400 text-xs tech-text">
                  <Clock className="w-3 h-3 mr-1 flex-shrink-0" />
                  <span className="truncate">{post.pubDate}</span>
                </div>
              </div>

              <div className="p-4 flex flex-col flex-grow">
                <h3 className="text-base sm:text-lg font-bold text-gray-100 mb-3 line-clamp-2 hover:text-pink-400 transition-colors tech-title">
                  <a href={post.link} target="_blank" rel="noopener noreferrer" className="block">
                    {post.title}
                  </a>
                </h3>

                <p className="text-gray-300 text-sm mb-4 line-clamp-3 flex-grow tech-text">
                  {post.description}
                </p>

                <div className="flex items-center justify-between mt-auto pt-2">
                  <a
                    href={post.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center bg-pink-600 hover:bg-pink-700 text-white py-2 px-4 rounded-lg transition-colors font-medium text-sm tech-text"
                  >
                    Read Article <ExternalLink className="ml-2 w-4 h-4" />
                  </a>

                  <button
                    className="p-2 rounded-full hover:bg-gray-700/50 text-gray-400 hover:text-pink-400 transition-colors"
                    title="Share article"
                    onClick={() => handleShare(post.title, post.link)}
                    aria-label="Share article"
                  >
                    <Share2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          );
        })}
      </motion.div>

      {/* Pagination Controls */}
      {totalPages > 1 && (
        <div className="mt-12 flex flex-col items-center">
          <div className="glassmorphic-card-content p-4 rounded-xl">
            <div className="flex items-center justify-center space-x-2">
              {/* Previous Page Button */}
              <button
                onClick={goToPreviousPage}
                disabled={currentPage === 1}
                className={`flex items-center justify-center w-10 h-10 rounded-lg transition-colors ${currentPage === 1 ? 'text-gray-500 cursor-not-allowed' : 'text-pink-400 hover:bg-pink-900/20'}`}
                aria-label="Previous page"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              {/* Page Numbers */}
              <div className="flex items-center space-x-1">
                {/* Generate page number buttons */}
                {Array.from({ length: totalPages }, (_, i) => i + 1).map(pageNumber => {
                  // Show current page, first page, last page, and pages around current page
                  const shouldShow =
                    pageNumber === 1 ||
                    pageNumber === totalPages ||
                    (pageNumber >= currentPage - 1 && pageNumber <= currentPage + 1);

                  // Show ellipsis for gaps
                  if (!shouldShow) {
                    // Show ellipsis only once between gaps
                    if (pageNumber === 2 || pageNumber === totalPages - 1) {
                      return (
                        <span key={`ellipsis-${pageNumber}`} className="text-gray-500 px-2">
                          ...
                        </span>
                      );
                    }
                    return null;
                  }

                  return (
                    <button
                      key={pageNumber}
                      onClick={() => goToPage(pageNumber)}
                      className={`w-10 h-10 rounded-lg transition-colors tech-text ${pageNumber === currentPage ? 'bg-pink-600 text-white' : 'text-gray-300 hover:bg-pink-900/20'}`}
                      aria-label={`Page ${pageNumber}`}
                      aria-current={pageNumber === currentPage ? 'page' : undefined}
                    >
                      {pageNumber}
                    </button>
                  );
                })}
              </div>

              {/* Next Page Button */}
              <button
                onClick={goToNextPage}
                disabled={currentPage === totalPages}
                className={`flex items-center justify-center w-10 h-10 rounded-lg transition-colors ${currentPage === totalPages ? 'text-gray-500 cursor-not-allowed' : 'text-pink-400 hover:bg-pink-900/20'}`}
                aria-label="Next page"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      )}

      <SharePopup
        isOpen={sharePopup.isOpen}
        onClose={closeSharePopup}
        title={sharePopup.title}
        url={sharePopup.url}
      />
    </>
  );
}