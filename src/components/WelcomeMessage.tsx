'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, ChevronRight, X } from 'lucide-react';

export default function WelcomeMessage() {
  const [isVisible, setIsVisible] = useState(true);
  const [hasMounted, setHasMounted] = useState(false);

  // Wait for client-side rendering before showing
  useEffect(() => {
    setHasMounted(true);
    
    // Check if welcome message has been dismissed before
    const hasBeenDismissed = localStorage.getItem('welcomeDismissed') === 'true';
    if (hasBeenDismissed) {
      setIsVisible(false);
    }
  }, []);

  const handleDismiss = () => {
    setIsVisible(false);
    localStorage.setItem('welcomeDismissed', 'true');
  };

  if (!hasMounted || !isVisible) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.5, delay: 1 }}
      className="fixed bottom-16 sm:bottom-24 right-4 sm:right-6 z-40 w-[85vw] sm:w-auto sm:max-w-xs glassmorphic-card-content text-white p-3 sm:p-4 rounded-xl shadow-lg border border-gray-700/50"
    >
      <button 
        className="absolute -top-2 -right-2 bg-gray-800 rounded-full p-1 text-gray-400 hover:text-white transition-colors"
        onClick={handleDismiss}
        aria-label="Close message"
      >
        <X className="w-4 h-4" />
      </button>
      
      <div className="flex items-center text-blue-400 mb-2">
        <MessageSquare className="w-4 h-4 sm:w-5 sm:h-5 mr-2 flex-shrink-0" />
        <h3 className="font-medium text-sm sm:text-base tech-title">AI Assistant Available</h3>
      </div>
      
      <p className="text-xs sm:text-sm text-gray-300 mb-3 tech-text">
        Ask our AI assistant about tools, features, or get help navigating the site.
      </p>
      
      <div className="text-xs text-gray-400 tech-text">
        <div className="flex items-start mb-1">
          <ChevronRight className="w-3 h-3 mr-1 flex-shrink-0 mt-0.5" />
          <span>Find AI tools for specific tasks</span>
        </div>
        <div className="flex items-start mb-1">
          <ChevronRight className="w-3 h-3 mr-1 flex-shrink-0 mt-0.5" />
          <span>Learn about AI concepts</span>
        </div>
        <div className="flex items-start">
          <ChevronRight className="w-3 h-3 mr-1 flex-shrink-0 mt-0.5" />
          <span>Get help with website navigation</span>
        </div>
      </div>
    </motion.div>
  );
} 