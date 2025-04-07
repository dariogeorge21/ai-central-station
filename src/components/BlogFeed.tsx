'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Clock, Share2 } from 'lucide-react';
import SharePopup from './SharePopup';

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

export default function BlogFeed({ forceRefresh }: BlogFeedProps) {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [sharePopup, setSharePopup] = useState<{
    isOpen: boolean;
    title: string;
    url: string;
  }>({
    isOpen: false,
    title: '',
    url: ''
  });

  useEffect(() => {
    const fetchBlogPosts = async () => {
      try {
        setLoading(true);
        
        // Add a cache-busting parameter when forceRefresh is true
        const url = `/api/rss-feeds?t=${Date.now()}`; // Always add timestamp to ensure fresh content
          
        const response = await fetch(url);
        
        if (!response.ok) {
          throw new Error(`Failed to fetch blog posts: ${response.statusText}`);
        }
        
        const data = await response.json();
        setPosts(data.articles || []);
        setError(null);
      } catch (err) {
        console.error('Error fetching blog posts:', err);
        setError('Failed to load blog posts. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchBlogPosts();
  }, [forceRefresh]);

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
        <div className="animate-spin rounded-full h-10 w-10 sm:h-12 sm:w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-12 sm:py-16 md:py-20 px-4">
        <h3 className="text-lg sm:text-xl text-red-400 mb-4">Oops! Something went wrong</h3>
        <p className="text-gray-400 text-sm sm:text-base">{error}</p>
      </div>
    );
  }

  if (posts.length === 0) {
    return (
      <div className="text-center py-12 sm:py-16 md:py-20 px-4">
        <h3 className="text-lg sm:text-xl text-gray-300 mb-4">No blog posts found</h3>
        <p className="text-gray-400 text-sm sm:text-base">Check back later for new content</p>
      </div>
    );
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
      <div className="text-gray-400 text-xs sm:text-sm mb-4 px-1">
        Showing {posts.length} blog posts from various AI research sources
      </div>
      <motion.div 
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {posts.map((post, index) => {
          const gradientClass = generateGradient(post.source);
          
          return (
            <motion.div
              key={`${post.link}-${index}`}
              className="bg-gray-800/30 rounded-xl overflow-hidden border border-gray-700/50 hover:border-blue-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10 flex flex-col h-full"
              variants={itemVariants}
            >
              <div className="px-3 sm:px-4 pt-3 sm:pt-4 flex justify-between items-start">
                <div className={`text-xs font-medium bg-gradient-to-r ${gradientClass} bg-clip-text text-transparent px-2 py-1 rounded-sm flex items-center truncate max-w-[70%]`}>
                  {post.source}
                </div>
                <div className="flex items-center text-gray-400 text-xs">
                  <Clock className="w-3 h-3 mr-1 flex-shrink-0" />
                  <span className="truncate">{post.pubDate}</span>
                </div>
              </div>
              
              <div className="p-3 sm:p-4 flex flex-col flex-grow">
                <h3 className="text-base sm:text-lg font-bold text-gray-100 mb-2 sm:mb-3 line-clamp-2 hover:text-blue-400 transition-colors group">
                  <a href={post.link} target="_blank" rel="noopener noreferrer" className="block">
                    {post.title}
                    <span className="block h-0.5 w-0 group-hover:w-full bg-blue-400 transition-all duration-300"></span>
                  </a>
                </h3>
                
                <p className="text-gray-400 text-xs sm:text-sm mb-4 line-clamp-3 flex-grow">
                  {post.description}
                </p>
                
                <div className="flex items-center justify-between mt-auto pt-2">
                  <a 
                    href={post.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center bg-blue-600/20 hover:bg-blue-600/40 text-blue-400 hover:text-blue-300 py-1.5 sm:py-2 px-3 sm:px-4 rounded transition-colors font-medium text-xs sm:text-sm"
                  >
                    Read <span className="hidden sm:inline ml-1">More</span> <ExternalLink className="ml-1 sm:ml-2 w-3 h-3 sm:w-4 sm:h-4" />
                  </a>
                  
                  <button 
                    className="p-1.5 sm:p-2 rounded hover:bg-gray-700/50 text-gray-400 hover:text-blue-400 transition-colors"
                    title="Share article"
                    onClick={() => handleShare(post.title, post.link)}
                    aria-label="Share article"
                  >
                    <Share2 className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          );
        })}
      </motion.div>

      <SharePopup
        isOpen={sharePopup.isOpen}
        onClose={closeSharePopup}
        title={sharePopup.title}
        url={sharePopup.url}
      />
    </>
  );
} 