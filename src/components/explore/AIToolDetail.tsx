'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { X, Star, ExternalLink } from 'lucide-react';
import { AITool } from '@/data/aiTools';

interface AIToolDetailProps {
  tool: AITool;
  onClose: () => void;
}

const AIToolDetail: React.FC<AIToolDetailProps> = ({ tool, onClose }) => {
  return (
    <>
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
        onClick={onClose}
      />

      {/* Popup */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.3 }}
        className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gray-900 border border-gray-800 rounded-xl p-6 shadow-xl z-50 w-[90%] max-w-md max-h-[90vh] overflow-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white"
        >
          <X size={24} />
        </button>

        <div className="pt-2">
          {/* Tool Name */}
          <h2 className="text-2xl font-bold text-gray-100 mb-4">{tool.name}</h2>

          {/* Pricing */}
          <div className="mb-4">
            <h3 className="text-sm font-semibold text-gray-400 mb-1">Pricing</h3>
            <p className="text-gray-300">{tool.pricing}</p>
          </div>

          {/* Main Use */}
          <div className="mb-4">
            <h3 className="text-sm font-semibold text-gray-400 mb-1">Main Use</h3>
            <p className="text-gray-300">{tool.mainUse}</p>
          </div>

          {/* Other Uses (if available) */}
          {tool.otherUses && (
            <div className="mb-4">
              <h3 className="text-sm font-semibold text-gray-400 mb-1">Other Uses</h3>
              <p className="text-gray-300">{tool.otherUses}</p>
            </div>
          )}

          {/* User Experience (if available) */}
          {tool.userExperience && (
            <div className="mb-4">
              <h3 className="text-sm font-semibold text-gray-400 mb-1">User Experience</h3>
              <p className="text-gray-300">{tool.userExperience}</p>
            </div>
          )}

          {/* Rating (if available) */}
          {tool.rating && (
            <div className="mb-6">
              <h3 className="text-sm font-semibold text-gray-400 mb-1">Rating</h3>
              <div className="flex items-center">
                {[...Array(5)].map((_, index) => (
                  <Star
                    key={index}
                    size={16}
                    className={`${
                      index < (tool.rating || 0)
                        ? 'text-yellow-400 fill-yellow-400'
                        : 'text-gray-600'
                    }`}
                  />
                ))}
              </div>
            </div>
          )}

          {/* Visit Website Button */}
          <a
            href={tool.websiteUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-medium py-2 px-4 rounded-lg transition-colors"
          >
            Visit Website
            <ExternalLink size={16} />
          </a>
        </div>
      </motion.div>
    </>
  );
};

export default AIToolDetail;
