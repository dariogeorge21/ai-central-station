"use client";

import React from 'react';
import Link from 'next/link';
import { FiArrowRight } from 'react-icons/fi';
import { aiTools } from '@/data/aiTools';

const featuredTools = [
  'chatgpt',
  'midjourney',
  'claude',
  'stable-diffusion',
  'perplexity',
  'notion-ai',
  'github-copilot',
  'cursor'
];

const DemoToolList = () => {
  // Get featured tools from aiTools data
  const tools = aiTools.filter(tool => featuredTools.includes(tool.id));
  
  if (tools.length === 0) {
    // Fallback to showing the first 8 tools if none of the featured ones exist
    tools.push(...aiTools.slice(0, 8));
  }

  return (
    <div className="mt-8">
      <h2 className="text-xl tech-title text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-400 mb-6">
        Try Viewing These Popular AI Tools
      </h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {tools.map(tool => (
          <Link
            key={tool.id}
            href={`/tools/${tool.id}`}
            className="glassmorphic-card-content p-4 rounded-lg hover:bg-gray-800/60 transition-all duration-300 group border border-transparent hover:border-blue-500/30"
          >
            <h3 className="text-lg text-blue-400 mb-2 group-hover:text-blue-300 tech-title">
              {tool.name}
            </h3>
            <p className="text-gray-400 text-sm mb-3 line-clamp-2 group-hover:text-gray-300">
              {tool.description}
            </p>
            <div className="flex justify-end">
              <span className="flex items-center text-xs text-blue-400 group-hover:text-blue-300">
                View Details <FiArrowRight className="ml-1 w-3 h-3" />
              </span>
            </div>
          </Link>
        ))}
      </div>
      
      <div className="text-center mt-8">
        <Link 
          href="/documentation"
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors text-sm"
        >
          Explore All AI Tools
        </Link>
      </div>
    </div>
  );
};

export default DemoToolList; 