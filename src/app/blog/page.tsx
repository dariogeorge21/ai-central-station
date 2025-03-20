'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Search } from 'lucide-react';
import { useTypewriter, Cursor } from 'react-simple-typewriter';

// Blog categories
const blogCategories = [
  'Generative AI',
  'Global',
  'Hardware & Architecture',
  'Health & Bioscience',
  'Human-Computer Interaction and Visualization',
  'Machine Intelligence',
  'Machine Perception',
  'Machine Translation',
  'Mobile Systems',
  'Natural Language Processing',
  'Networking',
  'Open Source Models & Datasets',
  'Photography',
  'Product',
  'Programs',
  'Quantum',
  'RAI-HCT Highlights',
  'Responsible AI',
  'Robotics'
];

export default function BlogPage() {
  const [text] = useTypewriter({
    words: [
      'Latest AI Breakthroughs',
      'Industry Insights',
      'Tech Innovations',
      'Expert Opinions'
    ],
    loop: true,
    delaySpeed: 2000,
  });

  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const filteredCategories = searchQuery 
    ? blogCategories.filter(cat => cat.toLowerCase().includes(searchQuery.toLowerCase()))
    : blogCategories;

  const scrollToContent = () => {
    const contentSection = document.getElementById('blog-content');
    if (contentSection) {
      const headerOffset = 80; // Account for fixed header
      const elementPosition = contentSection.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-grid-small-black/[0.05] -z-10" />
        
        {/* Gradient Backgrounds */}
        <div className="absolute inset-0 flex items-center justify-center -z-10">
          <div className="relative w-full h-full">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.2 }}
              transition={{ duration: 1 }}
              className="absolute top-1/4 -left-1/4 w-96 h-96 bg-purple-500 rounded-full filter blur-[200px]"
            />
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.2 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="absolute bottom-1/4 -right-1/4 w-96 h-96 bg-blue-500 rounded-full filter blur-[200px]"
            />
          </div>
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 sm:px-6 max-w-screen-xl">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 font-jetbrains bg-gradient-to-r from-orange-500 via-pink-500 to-blue-600 bg-clip-text text-transparent">
                AI News and Blogs
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-xl sm:text-2xl md:text-3xl text-muted-foreground mb-8 font-jetbrains"
            >
              <span>{text}</span>
              <Cursor cursorStyle="_" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <button
                onClick={scrollToContent}
                className="bg-gradient-to-r from-orange-500 via-pink-500 to-blue-600 text-white px-6 py-3 rounded-full font-medium hover:shadow-lg transition-all duration-300 flex items-center group"
              >
                Explore Articles
                <ChevronDown className="ml-2 h-4 w-4 transition-transform group-hover:translate-y-1" />
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Blog Content Section with Sidebar */}
      <section id="blog-content" className="py-20">
        <div className="container mx-auto px-4 sm:px-6 max-w-screen-xl">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Sidebar */}
            <div className="md:w-1/4 lg:w-1/5">
              <div className="sticky top-20 pt-2 bg-gray-800/20 backdrop-blur-sm rounded-xl border border-gray-700/30 p-4">
                <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-pink-500 to-blue-600 mb-4">
                  Categories
                </h3>
                
                {/* Search Bar */}
                <div className="relative mb-6">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Search className="h-4 w-4 text-gray-400" />
                  </div>
                  <input
                    type="text"
                    className="block w-full pl-10 pr-3 py-2 rounded-lg bg-gray-700/30 border border-gray-600/50 text-gray-300 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                    placeholder="Search categories..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
                
                {/* Category List */}
                <div className="space-y-1 max-h-[60vh] overflow-y-auto pr-2 custom-scrollbar">
                  {filteredCategories.map((category) => (
                    <button
                      key={category}
                      onClick={() => setActiveCategory(activeCategory === category ? null : category)}
                      className={`block w-full text-left px-3 py-2 rounded-lg text-sm transition-colors duration-200 ${
                        activeCategory === category
                          ? 'bg-blue-500/20 text-blue-400 font-medium'
                          : 'text-gray-300 hover:bg-gray-700/30 hover:text-white'
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Main Content Area */}
            <div className="md:w-3/4 lg:w-4/5">
              <div className="bg-gray-800/20 backdrop-blur-sm rounded-xl border border-gray-700/30 p-6">
                <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-pink-500 to-blue-600 mb-6">
                  {activeCategory || 'Latest Articles'}
                </h2>
                
                <div className="text-gray-400 text-center py-12">
                  <p className="text-lg">Blog content will be displayed here</p>
                  <p className="text-sm mt-2">Select a category from the sidebar to filter articles</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
