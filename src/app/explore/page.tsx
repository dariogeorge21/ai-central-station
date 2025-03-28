'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Menu, X, Search, Filter, Star, Users, ExternalLink } from 'lucide-react';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import { aiTools, categoryLabels, AITool, ToolCategory } from '@/data/aiTools';

export default function ExplorePage() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState<ToolCategory | 'all'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTool, setSelectedTool] = useState<AITool | null>(null);
  const [filteredTools, setFilteredTools] = useState(aiTools);

  // Filter tools when category or search query changes
  useEffect(() => {
    let filtered = aiTools;
    
    // Filter by category
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(tool => 
        tool.categories.includes(selectedCategory)
      );
    }
    
    // Filter by search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(tool =>
        tool.name.toLowerCase().includes(query) ||
        tool.description.toLowerCase().includes(query)
      );
    }
    
    setFilteredTools(filtered);
  }, [selectedCategory, searchQuery]);

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

  // Get categories with counts
  const categoriesWithCounts = Object.entries(categoryLabels).map(([id, name]) => {
    const count = aiTools.filter(tool => tool.categories.includes(id as ToolCategory)).length;
    return { id: id as ToolCategory, name, count };
  });

  // Category counts including 'all'
  const allCategories = [
    { id: 'all' as ToolCategory, name: 'All Tools', count: aiTools.length },
    ...categoriesWithCounts
  ];

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
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Sidebar */}
            <motion.div
              initial={{ x: -300, opacity: 0 }}
              animate={{ 
                x: isSidebarOpen ? 0 : -300, 
                opacity: isSidebarOpen ? 1 : 0,
                width: isSidebarOpen ? 'auto' : 0
              }}
              transition={{ duration: 0.3 }}
              className={`fixed lg:static inset-y-0 left-0 w-64 lg:w-64 bg-gray-800/50 backdrop-blur-sm border-r border-gray-700/50 p-4 z-40 lg:z-0 overflow-auto max-h-screen lg:max-h-[calc(100vh-100px)] ${isSidebarOpen ? 'block' : 'hidden lg:block'}`}
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

                <div className="flex items-center justify-between text-sm text-gray-400 pt-2">
                  <span>Categories</span>
                  <Filter className="w-4 h-4" />
                </div>

                <div className="space-y-2">
                  {allCategories.map((category) => (
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
            <div className="flex-1 lg:ml-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredTools.map((tool) => (
                  <motion.div
                    key={tool.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="bg-gray-800/30 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-700/50 hover:border-emerald-500/30 transition-all duration-300 cursor-pointer group"
                    onClick={() => setSelectedTool(tool)}
                  >
                    {/* Category Label */}
                    <div className="flex justify-end p-2">
                      <span className="text-xs font-medium px-2 py-1 rounded-full bg-gray-700/50 backdrop-blur-sm text-emerald-400">
                        {tool.categories.length > 0 && categoryLabels[tool.categories[0]]}
                      </span>
                    </div>
                    
                    {/* Tool Logo */}
                    <div className="px-6 pt-2 pb-4 flex justify-center items-center">
                      <div className="w-16 h-16 rounded-xl overflow-hidden bg-gradient-to-br from-gray-700 to-gray-800 flex items-center justify-center">
                        <div className="w-full h-full overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900">
                          <img 
                            src={tool.logoUrl} 
                            alt={tool.name} 
                            className="w-full h-full object-cover transition-transform group-hover:scale-110"
                            loading="lazy"
                          />
                        </div>
                      </div>
                    </div>
                    
                    {/* Tool Info */}
                    <div className="p-6 pt-0">
                      <h3 className="text-xl font-bold text-gray-100 mb-2 group-hover:text-emerald-400 transition-colors">{tool.name}</h3>
                      <p className="text-gray-400 text-sm mb-4 line-clamp-2">{tool.description}</p>
                      
                      {/* Footer */}
                      <div className="flex items-center justify-between text-sm mt-auto">
                        <div className="flex items-center gap-1 text-yellow-400">
                          <Star size={14} className="fill-yellow-400" />
                          <span>Top Rated</span>
                        </div>
                        <span className="text-gray-500 flex items-center gap-1">
                          <Users size={14} />
                          <span>Popular</span>
                        </span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
              
              {/* Empty State */}
              {filteredTools.length === 0 && (
                <div className="text-center py-16">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-gray-400"
                  >
                    <h3 className="text-xl font-semibold mb-2">No tools found</h3>
                    <p>Try adjusting your search or category filter</p>
                    <button 
                      onClick={() => {
                        setSelectedCategory('all');
                        setSearchQuery('');
                      }}
                      className="mt-4 text-emerald-400 hover:text-emerald-300"
                    >
                      Reset filters
                    </button>
                  </motion.div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Tool Detail Popup */}
      <AnimatePresence>
        {selectedTool && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
              onClick={() => setSelectedTool(null)}
            />
            
            {/* Popup */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gray-800 rounded-xl p-6 shadow-xl border border-gray-700 z-50 w-[90%] max-w-2xl max-h-[90vh] overflow-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedTool(null)}
                className="absolute top-4 right-4 text-gray-400 hover:text-white"
              >
                <X size={24} />
              </button>
              
              {/* Tool Content */}
              <div className="flex flex-col md:flex-row gap-6">
                {/* Logo */}
                <div className="flex-shrink-0">
                  <div className="w-24 h-24 rounded-xl overflow-hidden bg-gradient-to-br from-gray-700 to-gray-800">
                    <img 
                      src={selectedTool.logoUrl} 
                      alt={selectedTool.name} 
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                </div>
                
                {/* Details */}
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-gray-100 mb-2">{selectedTool.name}</h2>
                  <p className="text-gray-300 mb-4">{selectedTool.description}</p>
                  
                  {/* Metadata Sections */}
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-sm font-semibold text-gray-400 mb-1">Pricing</h3>
                      <p className="text-gray-200">{selectedTool.pricing}</p>
                    </div>
                    
                    <div>
                      <h3 className="text-sm font-semibold text-gray-400 mb-1">Main Use</h3>
                      <p className="text-gray-200">{selectedTool.mainUse}</p>
                    </div>
                    
                    {selectedTool.otherUses && (
                      <div>
                        <h3 className="text-sm font-semibold text-gray-400 mb-1">Other Uses</h3>
                        <p className="text-gray-200">{selectedTool.otherUses}</p>
                      </div>
                    )}
                    
                    {selectedTool.userExperience && (
                      <div>
                        <h3 className="text-sm font-semibold text-gray-400 mb-1">User Experience</h3>
                        <p className="text-gray-200">{selectedTool.userExperience}</p>
                      </div>
                    )}
                    
                    <div>
                      <h3 className="text-sm font-semibold text-gray-400 mb-1">Categories</h3>
                      <div className="flex flex-wrap gap-2">
                        {selectedTool.categories.map((category) => (
                          <span 
                            key={category} 
                            className="text-xs px-2 py-1 rounded-full bg-emerald-900/30 text-emerald-400 border border-emerald-800/50"
                          >
                            {categoryLabels[category]}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  {/* Visit Website Button */}
                  <a
                    href={selectedTool.websiteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-medium py-2 px-4 rounded-lg transition-colors"
                  >
                    Visit Website
                    <ExternalLink size={16} />
                  </a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </main>
  );
}
