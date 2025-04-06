'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, ChevronRight } from 'lucide-react';

export default function WelcomeMessage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 1 }}
      className="fixed bottom-24 right-6 z-40 max-w-xs bg-gray-900/95 backdrop-blur-sm text-white p-4 rounded-xl shadow-lg border border-gray-800"
    >
      <button 
        className="absolute -top-2 -right-2 bg-gray-800 rounded-full p-1 text-gray-400 hover:text-white"
        onClick={() => {
          const element = document.getElementById('welcome-message');
          if (element) {
            element.style.display = 'none';
          }
        }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="18" y1="6" x2="6" y2="18"></line>
          <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>
      </button>
      
      <div className="flex items-center text-blue-400 mb-2">
        <MessageSquare className="w-5 h-5 mr-2" />
        <h3 className="font-medium">AI Assistant Available</h3>
      </div>
      
      <p className="text-sm text-gray-300 mb-3">
        Ask our AI assistant about tools, features, or get help navigating the site.
      </p>
      
      <div className="text-xs text-gray-400">
        <div className="flex items-center mb-1">
          <ChevronRight className="w-3 h-3 mr-1 flex-shrink-0" />
          <span>Find AI tools for specific tasks</span>
        </div>
        <div className="flex items-center mb-1">
          <ChevronRight className="w-3 h-3 mr-1 flex-shrink-0" />
          <span>Learn about AI concepts</span>
        </div>
        <div className="flex items-center">
          <ChevronRight className="w-3 h-3 mr-1 flex-shrink-0" />
          <span>Get help with website navigation</span>
        </div>
      </div>
    </motion.div>
  );
} 