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
  const [isMockData, setIsMockData] = useState(false);
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
        setIsMockData(data.isMockData || false);
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
        <div className="animate-spin rounded-full h-10 w-10 sm:h-12 sm:w-12 border-t-2 border-b-2 border-pink-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="glassmorphic-card-content p-8 rounded-xl text-center py-12 sm:py-16 md:py-20 px-4">
        <h3 className="text-lg sm:text-xl text-red-400 mb-4 tech-title">Oops! Something went wrong</h3>
        <p className="text-gray-300 text-sm sm:text-base tech-text">{error}</p>
      </div>
    );
  }

  if (posts.length === 0) {
    return (
      <div className="glassmorphic-card-content p-8 rounded-xl text-center py-12 sm:py-16 md:py-20 px-4">
        <h3 className="text-lg sm:text-xl text-gray-300 mb-4 tech-title">No blog posts found</h3>
        <p className="text-gray-300 text-sm sm:text-base tech-text">Check back later for new content</p>
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
      <div className="text-gray-400 text-xs sm:text-sm mb-4 px-1 flex justify-between items-center">
        <span>Showing {posts.length} blog posts from various AI research sources</span>
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
      >
        {posts.map((post, index) => {
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

      <SharePopup
        isOpen={sharePopup.isOpen}
        onClose={closeSharePopup}
        title={sharePopup.title}
        url={sharePopup.url}
      />
    </>
  );
}