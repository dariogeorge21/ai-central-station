'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { AITool, categoryLabels } from '@/data/aiTools';

interface AIToolCardProps {
  tool: AITool;
  onClick: (tool: AITool) => void;
}

const AIToolCard: React.FC<AIToolCardProps> = ({ tool, onClick }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="bg-white/5 backdrop-blur-sm border border-gray-800 rounded-xl overflow-hidden hover:border-emerald-500/30 transition-all duration-300 flex flex-col h-full"
    >
      {/* Category Label */}
      <div className="absolute top-3 right-3 z-10">
        <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-gray-800/70 backdrop-blur-sm text-emerald-400 border border-gray-700/50">
          {tool.categories.length > 0 && categoryLabels[tool.categories[0]]}
        </span>
      </div>

      {/* Tool Logo */}
      <div className="h-48 relative bg-gradient-to-br from-gray-900 to-gray-800 flex items-center justify-center p-6">
        <img
          src={tool.logoUrl}
          alt={tool.name}
          className="max-h-full max-w-full object-contain h-24 w-auto"
          loading="lazy"
        />
      </div>

      {/* Tool Info */}
      <div className="p-5 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-gray-100 mb-2 h-8">{tool.name}</h3>
        <p className="text-gray-400 text-sm mb-4 line-clamp-3 flex-grow h-16">{tool.description}</p>

        <button
          onClick={() => onClick(tool)}
          className="mt-auto w-full inline-flex justify-center items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-medium py-2 px-4 rounded-lg transition-colors text-sm"
        >
          Learn More
        </button>
      </div>
    </motion.div>
  );
};

export default AIToolCard;
