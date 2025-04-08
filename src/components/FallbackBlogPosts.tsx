'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { mockBlogPosts } from '@/app/api/rss-feeds/mockData';

interface FallbackBlogPostsProps {
  errorMessage: string;
}

export default function FallbackBlogPosts({ errorMessage }: FallbackBlogPostsProps) {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
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
        damping: 15
      }
    }
  };

  return (
    <div className="space-y-8">
      <div className="glassmorphic-card-content p-8 rounded-xl text-center">
        <h3 className="text-lg sm:text-xl text-red-400 mb-4 tech-title">Oops! Something went wrong</h3>
        <p className="text-gray-300 text-sm sm:text-base tech-text mb-4">{errorMessage}</p>
        <p className="text-gray-300 text-sm sm:text-base tech-text">
          We're showing some sample blog posts below while we fix the issue.
        </p>
      </div>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {mockBlogPosts.articles.slice(0, 9).map((post, index) => (
          <motion.div
            key={`${post.link}-${index}`}
            className="glassmorphic-card-content rounded-xl overflow-hidden hover:shadow-lg hover:shadow-pink-900/20 transition-all duration-300 hover:border-pink-500/30 flex flex-col h-full"
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
          >
            <div className="px-4 pt-4 flex justify-between items-start">
              <div className="text-xs font-medium bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent px-2 py-1 rounded-sm flex items-center truncate max-w-[70%] tech-title">
                {post.source}
              </div>
              <div className="text-gray-400 text-xs tech-text">
                {post.pubDate}
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
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <div className="text-center">
        <p className="text-gray-400 text-sm tech-text">
          These are sample articles. Check back later for real content.
        </p>
      </div>
    </div>
  );
}
