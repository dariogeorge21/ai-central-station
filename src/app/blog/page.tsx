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
    <main className="min-h-screen circuit-bg text-white">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-b from-pink-900/20 to-transparent">
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-600 tech-title"
          >
            AI Research Blog
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl mb-8 text-gray-300 tech-text"
          >
            Exploring the frontiers of{' '}
            <span className="text-pink-400">
              {text}
              <Cursor cursorColor="#EC4899" />
            </span>
          </motion.p>

          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            onClick={scrollToContent}
            className="bg-pink-600 hover:bg-pink-700 text-white font-medium py-3 px-8 rounded-lg transition-all duration-300 flex items-center mx-auto gap-2 tech-text"
          >
            Explore Articles
            <ChevronDown className="animate-bounce" />
          </motion.button>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="glassmorphic-card-content p-8 rounded-xl">
            <p className="text-lg text-gray-300 leading-relaxed tech-text">
              Welcome to our AI Research Blog, where we explore cutting-edge developments in artificial intelligence.
              Our articles provide in-depth analysis, practical tutorials, and thought-provoking perspectives from
              leading researchers and practitioners in the field of AI and machine learning.
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section id="content" className="py-16 px-4 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-600 tech-title">
            Latest Research Articles
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto tech-text">
            Discover in-depth articles, tutorials, and insights from leading AI researchers and practitioners around the world.
          </p>
        </motion.div>

        <BlogFeed forceRefresh={false} />
      </section>
    </main>
  );
}
