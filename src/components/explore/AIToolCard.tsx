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
      className="glassmorphic-tool-card border border-gray-800/50 rounded-xl overflow-hidden hover:border-blue-500/30 transition-all duration-300 flex flex-col h-full"
    >
      {/* Category Label */}
      <div className="absolute top-3 right-3 z-10">
        <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-gray-800/70 backdrop-blur-sm text-blue-400 border border-gray-700/50">
          {tool.categories.length > 0 && categoryLabels[tool.categories[0]]}
        </span>
      </div>

      {/* Tool Info */}
      <div className="p-5 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-gray-100 mb-2 tech-title">{tool.name}</h3>
        <p className="text-gray-400 text-sm mb-4 line-clamp-3 flex-grow tech-text">{tool.description}</p>

        <button
          onClick={() => onClick(tool)}
          className="mt-auto w-full inline-flex justify-center items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors text-sm"
        >
          Learn More
        </button>
      </div>
    </motion.div>
  );
};

export default AIToolCard;
