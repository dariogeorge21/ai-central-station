'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import BlogFeed from '@/components/BlogFeed';

export default function BlogPage() {
  const [text] = useTypewriter({
    words: [
      'Artificial Intelligence',
      'Machine Learning',
      'Deep Learning',
      'Neural Networks',
      'Computer Vision',
      'Natural Language Processing',
      'Robotics',
      'AI Ethics',
      'Research Insights',
      'Tech Innovation'
    ],
    loop: true,
    delaySpeed: 2000,
  });

  const scrollToContent = () => {
    document.getElementById('content')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 to-black">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/50 to-purple-900/50" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-purple-500/10 via-transparent to-transparent animate-pulse" />
        </div>

        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-600"
          >
            AI Research Blog
          </motion.h1>
          
          <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl mb-8 text-gray-300"
          >
            Exploring the frontiers of{' '}
            <span className="text-indigo-400">
              {text}
              <Cursor cursorColor="#818CF8" />
            </span>
          </motion.p>
          
          <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
                onClick={scrollToContent}
            className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 flex items-center mx-auto gap-2 group"
              >
                Explore Articles
            <ChevronDown className="animate-bounce group-hover:translate-y-1 transition-transform" />
              </motion.button>
        </div>
      </section>

      {/* Content Section */}
      <section id="content" className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-600">
              Latest Research Articles
                </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Discover in-depth articles, tutorials, and insights from leading AI researchers and practitioners around the world.
            </p>
          </motion.div>

          <div className="bg-gray-800/20 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-gray-700/50">
            <BlogFeed forceRefresh={false} />
          </div>
        </div>
      </section>
    </main>
  );
}
