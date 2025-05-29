'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiHelpCircle, FiPlus, FiMinus, FiSearch, FiCode, FiTool, FiGlobe, FiMail, FiDatabase, FiLayers, FiGithub } from 'react-icons/fi';
import Link from 'next/link';

export default function FAQPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');
  const [openItems, setOpenItems] = useState<string[]>([]);

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

  // FAQ categories
  const categories = [
    { id: 'all', name: 'All Questions', icon: <FiHelpCircle /> },
    { id: 'general', name: 'General', icon: <FiGlobe /> },
    { id: 'tools', name: 'AI Tools', icon: <FiTool /> },
    { id: 'technical', name: 'Technical', icon: <FiCode /> },
    { id: 'contribute', name: 'Contributing', icon: <FiGithub /> },
  ];

  // FAQ items
  const faqItems = [
    {
      id: 'what-is',
      category: 'general',
      question: 'What is AI Central Station?',
      answer: 'AI Central Station is a comprehensive resource hub for artificial intelligence tools, applications, and resources. It serves as a central repository of information about various AI tools, their capabilities, use cases, and comparisons to help users find the right AI solutions for their needs.'
    },
    {
      id: 'why-created',
      category: 'general',
      question: 'Why was AI Central Station created?',
      answer: 'AI Central Station was created to help navigate the rapidly evolving landscape of AI tools. With new AI applications emerging daily, it can be overwhelming to find the right tools. This platform aims to simplify that process by providing organized, curated information about the most powerful and useful AI tools available today.'
    },
    {
      id: 'cost',
      category: 'general',
      question: 'Is AI Central Station free to use?',
      answer: 'Yes, AI Central Station is completely free to use. It\'s an open-source project dedicated to making information about AI tools accessible to everyone. There are no paywalls or premium features.'
    },
    {
      id: 'tools-listed',
      category: 'tools',
      question: 'How many AI tools are listed on the platform?',
      answer: 'AI Central Station currently catalogs over 500 AI tools across various categories including chatbots, code assistants, design tools, productivity enhancers, writing assistants, search engines, and more. The collection is continuously growing as new tools are added.'
    },
    {
      id: 'tool-categories',
      category: 'tools',
      question: 'What categories of AI tools are covered?',
      answer: 'The platform covers a wide range of AI tool categories including but not limited to: chatbots, code assistants, design tools, productivity tools, writing assistants, search engines, music generation, image generation, video creation, data analysis, research tools, and specialized industry solutions.'
    },
    {
      id: 'suggest-tool',
      category: 'tools',
      question: 'Can I suggest a new AI tool to be added?',
      answer: 'Absolutely! We welcome suggestions for new tools to add to our directory. You can submit tool suggestions through our GitHub repository or by contacting us directly through the Contact section on the About page.'
    },
    {
      id: 'tech-stack',
      category: 'technical',
      question: 'What technologies power AI Central Station?',
      answer: 'AI Central Station is built using modern web technologies including Next.js 15, React 18, TypeScript, and Tailwind CSS. The site uses server-side rendering for performance and SEO benefits, and implements responsive design principles for optimal viewing across all devices.'
    },
    {
      id: 'api-access',
      category: 'technical',
      question: 'Is there an API to access the AI tools data?',
      answer: 'Currently, we don\'t offer a public API for the tools data. However, since this is an open-source project, you can access the structured data directly from our GitHub repository. We may consider adding API access in the future based on community interest.'
    },
    {
      id: 'contribute',
      category: 'contribute',
      question: 'How can I contribute to AI Central Station?',
      answer: 'There are several ways to contribute: you can submit new AI tools, help improve existing tool information, contribute code improvements through pull requests on our GitHub repository, report bugs, or suggest new features. Check our GitHub repository for contribution guidelines.'
    },
    {
      id: 'open-source',
      category: 'contribute',
      question: 'Is AI Central Station open-source?',
      answer: 'Yes, AI Central Station is an open-source project. The entire codebase and data are available on GitHub. We welcome contributions from the community to help improve and expand the platform.'
    },
  ];

  // Toggle FAQ item
  const toggleItem = (id: string) => {
    setOpenItems(prev =>
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  // Filter FAQ items based on search and category
  const filteredFAQs = faqItems.filter(item => {
    const matchesSearch = item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         item.answer.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <main className="min-h-screen circuit-bg pt-24">
      {/* Hero Section */}
      <section className="relative">
        {/* Decorative elements */}
        <div className="absolute top-10 right-10 w-40 h-40 bg-teal-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-60 h-60 bg-emerald-500/10 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 relative z-10">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center justify-center p-2 bg-teal-900/30 rounded-xl mb-4 border border-teal-500/20">
              <FiHelpCircle className="text-teal-500 h-10 w-10" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-emerald-600 mb-6 tech-title">
              Frequently Asked Questions
            </h1>
            <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto mb-8">
              Find answers to common questions about AI Central Station
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-8 md:py-12 bg-gray-900/50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glassmorphic-card-content p-6 md:p-8 rounded-xl">
            {/* Search */}
            <div className="relative mb-8">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FiSearch className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                className="block w-full pl-10 pr-3 py-3 border border-gray-700 rounded-lg bg-gray-800/50 text-gray-300 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-300"
                placeholder="Search questions..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            {/* Category Filters */}
            <div className="flex flex-wrap gap-3 justify-center">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`flex items-center px-4 py-2 rounded-full transition-all duration-300 ${activeCategory === category.id ? 'bg-teal-600 text-white' : 'bg-gray-800/70 text-gray-300 hover:bg-gray-700/70'}`}
                >
                  <span className="mr-2">{category.icon}</span>
                  <span>{category.name}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-12 md:py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-6"
          >
            {filteredFAQs.length > 0 ? (
              filteredFAQs.map((faq) => (
                <motion.div
                  key={faq.id}
                  variants={itemVariants}
                  className="glassmorphic-card-content rounded-xl overflow-hidden"
                >
                  <button
                    onClick={() => toggleItem(faq.id)}
                    className="w-full flex justify-between items-center p-6 text-left focus:outline-none transition-all duration-300 hover:bg-gray-800/30"
                  >
                    <h3 className="text-lg md:text-xl font-medium text-teal-400 tech-title pr-8">{faq.question}</h3>
                    <div className="flex-shrink-0">
                      {openItems.includes(faq.id) ? (
                        <FiMinus className="h-5 w-5 text-teal-400" />
                      ) : (
                        <FiPlus className="h-5 w-5 text-teal-400" />
                      )}
                    </div>
                  </button>

                  {openItems.includes(faq.id) && (
                    <div className="px-6 pb-6 text-gray-300 tech-text">
                      <div className="pt-2 border-t border-gray-700/50"></div>
                      <p className="mt-4">{faq.answer}</p>
                    </div>
                  )}
                </motion.div>
              ))
            ) : (
              <div className="glassmorphic-card-content p-8 rounded-xl text-center">
                <FiHelpCircle className="h-12 w-12 text-gray-500 mx-auto mb-4" />
                <h3 className="text-xl font-medium text-gray-400 mb-2">No matching questions found</h3>
                <p className="text-gray-500">Try adjusting your search or category filter</p>
              </div>
            )}
          </motion.div>
        </div>
      </section>

      {/* Still Have Questions Section */}
      <section className="py-12 md:py-16 bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glassmorphic-card-content p-6 md:p-8 rounded-xl text-center">
            <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-emerald-600 mb-6 tech-title">
              Still Have Questions?
            </h2>
            <p className="text-gray-300 max-w-3xl mx-auto mb-8 tech-text">
              If you couldn&apos;t find the answer you were looking for, feel free to reach out to us directly.
            </p>
            <Link
              href="/about#connect"
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-teal-500 to-emerald-600 hover:from-teal-600 hover:to-emerald-700 text-white font-medium py-3 px-6 rounded-lg transition-all duration-300 text-center shadow-lg shadow-teal-500/20"
            >
              Contact Us <FiMail className="ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-emerald-600 mb-8 tech-title text-center">
            Helpful Resources
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="glassmorphic-card-content p-6 rounded-xl hover:shadow-lg hover:shadow-teal-900/20 transition-all duration-300 group">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-teal-900/30 rounded-full flex items-center justify-center mr-4">
                  <FiDatabase className="text-teal-400 group-hover:text-teal-300 transition-colors" />
                </div>
                <h3 className="text-lg font-medium text-teal-400 group-hover:text-teal-300 transition-colors tech-title">AI Tools Directory</h3>
              </div>
              <p className="text-gray-400 text-sm mb-4">Browse our comprehensive collection of AI tools categorized by functionality and use case.</p>
              <Link href="/explore" className="text-teal-400 hover:text-teal-300 text-sm flex items-center">
                Explore Tools <FiPlus className="ml-2" />
              </Link>
            </div>

            <div className="glassmorphic-card-content p-6 rounded-xl hover:shadow-lg hover:shadow-teal-900/20 transition-all duration-300 group">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-teal-900/30 rounded-full flex items-center justify-center mr-4">
                  <FiLayers className="text-teal-400 group-hover:text-teal-300 transition-colors" />
                </div>
                <h3 className="text-lg font-medium text-teal-400 group-hover:text-teal-300 transition-colors tech-title">Documentation</h3>
              </div>
              <p className="text-gray-400 text-sm mb-4">Access detailed documentation about AI concepts, tool usage guides, and best practices.</p>
              <Link href="/documentation" className="text-teal-400 hover:text-teal-300 text-sm flex items-center">
                View Documentation <FiPlus className="ml-2" />
              </Link>
            </div>

            <div className="glassmorphic-card-content p-6 rounded-xl hover:shadow-lg hover:shadow-teal-900/20 transition-all duration-300 group">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-teal-900/30 rounded-full flex items-center justify-center mr-4">
                  <FiGithub className="text-teal-400 group-hover:text-teal-300 transition-colors" />
                </div>
                <h3 className="text-lg font-medium text-teal-400 group-hover:text-teal-300 transition-colors tech-title">Contribute</h3>
              </div>
              <p className="text-gray-400 text-sm mb-4">Learn how you can contribute to this open-source project and help improve AI Central Station.</p>
              <a href="https://github.com/dariogeorge21" target="_blank" rel="noopener noreferrer" className="text-teal-400 hover:text-teal-300 text-sm flex items-center">
                GitHub Repository <FiPlus className="ml-2" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
