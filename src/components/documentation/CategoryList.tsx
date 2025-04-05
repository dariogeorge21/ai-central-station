"use client"

import React, { useState, useEffect } from 'react'
import { categoryLabels, type ToolCategory, getToolsByCategory } from '@/data/aiTools'
import { FiArrowRight, FiLink, FiStar } from 'react-icons/fi'

interface CategoryListProps {
  onSelectTool: (toolId: string) => void;
  searchQuery: string;
}

const CategoryList: React.FC<CategoryListProps> = ({ onSelectTool, searchQuery }) => {
  const [visibleCategories, setVisibleCategories] = useState<boolean>(false);
  
  // Animation effect when component mounts
  useEffect(() => {
    const timer = setTimeout(() => {
      setVisibleCategories(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);
  
  // Get all available category keys from categoryLabels
  const categoryKeys = Object.keys(categoryLabels) as ToolCategory[];
  
  // Filter categories that have at least one tool
  const categoriesWithTools = categoryKeys.filter(category => {
    const tools = getToolsByCategory(category);
    if (searchQuery.trim() === '') {
      return tools.length > 0;
    } else {
      const query = searchQuery.toLowerCase().trim();
      return tools.some(tool => 
        tool.name.toLowerCase().includes(query) ||
        tool.description.toLowerCase().includes(query)
      );
    }
  });

  if (categoriesWithTools.length === 0) {
    return (
      <div className="text-center py-8 fade-in">
        <p className="text-gray-300 text-lg">
          No tools found matching your search criteria.
        </p>
      </div>
    );
  }

  return (
    <div className={`categories-container space-y-12 ${visibleCategories ? 'opacity-100' : 'opacity-0'} transition-opacity duration-500`}>
      {categoriesWithTools.map((category, categoryIndex) => {
        const tools = getToolsByCategory(category);
        
        // Filter tools based on search query if there is one
        const filteredTools = searchQuery.trim() === '' 
          ? tools 
          : tools.filter(tool => {
              const query = searchQuery.toLowerCase().trim();
              return (
                tool.name.toLowerCase().includes(query) ||
                tool.description.toLowerCase().includes(query)
              );
            });
            
        if (filteredTools.length === 0) return null;
        
        return (
          <div 
            key={category} 
            className={`category-section fade-in delay-${Math.min(categoryIndex * 100, 500)}`}
          >
            <h3 className="text-2xl font-semibold mb-6 pb-2 inline-block text-white tech-title">
              {categoryLabels[category]}
            </h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
              {filteredTools.map((tool, toolIndex) => (
                <div
                  key={tool.id}
                  onClick={() => onSelectTool(tool.id)}
                  className={`glassmorphic-tool-card group cursor-pointer fade-in delay-${Math.min((categoryIndex + toolIndex) * 50, 500)}`}
                >
                  <div className="glassmorphic-card-content hover:bg-gray-800/60 hover:shadow-lg hover:shadow-blue-900/20 transition-all duration-300 h-full flex flex-col justify-between p-4 neon-glow">
                    <div className="tool-info">
                      <h4 className="text-lg tech-title text-blue-400 mb-2 group-hover:text-blue-300">
                        {tool.name}
                      </h4>
                      <p className="text-sm text-gray-400 line-clamp-3 group-hover:text-gray-300">
                        {tool.description}
                      </p>
                    </div>
                    <div className="flex justify-between items-center mt-3">
                      <div className="flex items-center space-x-1 text-gray-500">
                        <FiStar className="w-4 h-4 text-yellow-500" />
                        <span className="text-xs">{tool.rating || 4}</span>
                      </div>
                      <div className="flex items-center text-gray-500 group-hover:text-blue-400 transition-colors">
                        <FiArrowRight className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CategoryList; 