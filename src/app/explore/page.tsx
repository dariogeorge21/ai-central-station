'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Menu, X, Search, Filter } from 'lucide-react';
import { useTypewriter, Cursor } from 'react-simple-typewriter';

// Tool categories
const categories = [
  { id: 'all', name: 'All Tools', count: 150 },
  { id: 'text', name: 'Text Generation', count: 45 },
  { id: 'image', name: 'Image Generation', count: 35 },
  { id: 'code', name: 'Code Assistant', count: 25 },
  { id: 'audio', name: 'Audio & Voice', count: 20 },
  { id: 'video', name: 'Video Creation', count: 15 },
  { id: 'research', name: 'Research & Analysis', count: 10 },
];

// Mock tool data
const tools = [
  {
    id: 1,
    name: 'GPT-4 Assistant',
    description: 'Advanced language model for text generation and analysis',
    category: 'text',
    rating: 4.8,
    users: '1.2M',
  },
  {
    id: 2,
    name: 'DALL-E 3',
    description: 'State-of-the-art image generation from text descriptions',
    category: 'image',
    rating: 4.9,
    users: '800K',
  },
  // Add more mock tools as needed
];

export default function ExplorePage() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const [text] = useTypewriter({
    words: [
      'Text Generation',
      'Image Creation',
      'Code Assistance',
      'Audio Processing',
      'Video Editing',
      'Research Analysis',
      'Data Visualization',
      'Language Translation',
      'Content Creation',
      'AI Development'
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
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/50 to-teal-900/50" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-emerald-500/10 via-transparent to-transparent animate-pulse" />
        </div>
        
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-teal-600"
          >
            Discover AI Tools
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl mb-8 text-gray-300"
          >
            Explore powerful tools for{' '}
            <span className="text-emerald-400">
              {text}
              <Cursor cursorColor="#34D399" />
            </span>
          </motion.p>
          
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            onClick={scrollToContent}
            className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 flex items-center mx-auto gap-2 group"
          >
            Start Exploring
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
            <h2 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-teal-600">
              Explore AI Tools
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Discover and compare the best AI tools for your specific needs. Filter by category, read reviews, and find the perfect solution.
            </p>
          </motion.div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="lg:hidden fixed bottom-6 right-6 bg-emerald-600 text-white p-3 rounded-full shadow-lg z-50 hover:bg-emerald-700 transition-colors"
          >
            {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Main Content Grid */}
          <div className="flex gap-6">
            {/* Sidebar */}
            <motion.div
              initial={{ x: -300, opacity: 0 }}
              animate={{ x: isSidebarOpen ? 0 : -300, opacity: isSidebarOpen ? 1 : 0 }}
              transition={{ duration: 0.3 }}
              className={`fixed lg:static inset-y-0 left-0 w-64 bg-gray-800/50 backdrop-blur-sm border-r border-gray-700/50 p-4 z-40 lg:z-0`}
            >
              <div className="space-y-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <input
                    type="text"
                    placeholder="Search tools..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full bg-gray-700/50 border border-gray-600 rounded-lg pl-10 pr-4 py-2 text-gray-200 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  />
                </div>

                <div className="flex items-center justify-between text-sm text-gray-400">
                  <span>Categories</span>
                  <Filter className="w-4 h-4" />
                </div>

                <div className="space-y-2">
                  {categories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => setSelectedCategory(category.id)}
                      className={`w-full flex items-center justify-between px-3 py-2 rounded-lg transition-colors ${
                        selectedCategory === category.id
                          ? 'bg-emerald-600/20 text-emerald-400'
                          : 'text-gray-400 hover:bg-gray-700/50'
                      }`}
                    >
                      <span>{category.name}</span>
                      <span className="text-xs bg-gray-700/50 px-2 py-1 rounded-full">
                        {category.count}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Tools Grid */}
            <div className="flex-1">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {tools.map((tool) => (
                  <motion.div
                    key={tool.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:border-emerald-500/30 transition-all duration-300"
                  >
                    <h3 className="text-xl font-bold text-gray-100 mb-2">{tool.name}</h3>
                    <p className="text-gray-400 text-sm mb-4">{tool.description}</p>
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center gap-2 text-emerald-400">
                        <span>★</span>
                        <span>{tool.rating}</span>
                      </div>
                      <span className="text-gray-500">{tool.users} users</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
