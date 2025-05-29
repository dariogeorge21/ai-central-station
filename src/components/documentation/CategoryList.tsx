"use client"

import React, { useState, useEffect } from 'react'
import { categoryLabels, type ToolCategory, getToolsByCategory } from '@/data/exploreIndex'
import { FiArrowRight, FiStar, FiHeart, FiDollarSign, FiGlobe, FiHome, FiMusic, FiVideo, FiTrendingUp } from 'react-icons/fi'
import Pagination from './Pagination' // Adjust the import path as necessary

interface CategoryListProps {
  searchQuery: string;
  selectedCategories: ToolCategory[];
  categoryPageState?: Record<string, number>;
  onCategoryPageChange?: (category: string, page: number) => void;
  onToolClick?: (toolId: string) => void;
}

// List of new tools to show badges for
const newTools = [
  'taskade', 'otter-ai', 'otter-ai-specialized', 'reclaim-ai', 'quillbot', 'cleo', 'scholar-ai', 'ada-health', 
  'artbreeder', 'duolingo-max', 'hopper', 'notion-ai', 'replika'
];

// List of trending tools
const trendingTools = [
  'midjourney', 'claude', 'perplexity', 'anthropic-claude', 'synthesia', 'stable-diffusion',
  'notion-ai', 'grammarly', 'eleven-labs', 'quillbot', 'runway'
];

const CategoryList: React.FC<CategoryListProps> = ({ searchQuery, selectedCategories, categoryPageState, onCategoryPageChange, onToolClick }) => {
  const [visibleCategories, setVisibleCategories] = useState<boolean>(false);
  
  // Animation effect when component mounts
  useEffect(() => {
    const timer = setTimeout(() => {
      setVisibleCategories(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);
  
  // Function to get the appropriate icon for each category
  const getCategoryIcon = (category: ToolCategory) => {
    switch (category) {
      case 'finance':
        return <FiDollarSign className="w-5 h-5 mr-2 text-green-400" />;
      case 'health':
        return <FiHeart className="w-5 h-5 mr-2 text-red-400" />;
      case 'language-learning':
        return <FiGlobe className="w-5 h-5 mr-2 text-blue-400" />;
      case 'travel':
        return <FiGlobe className="w-5 h-5 mr-2 text-purple-400" />;
      case 'home':
        return <FiHome className="w-5 h-5 mr-2 text-yellow-400" />;
      case 'music':
        return <FiMusic className="w-5 h-5 mr-2 text-pink-400" />;
      case 'video':
        return <FiVideo className="w-5 h-5 mr-2 text-indigo-400" />;
      default:
        return null;
    }
  };
  
  // Get all available category keys from categoryLabels
  const categoryKeys = Object.keys(categoryLabels) as ToolCategory[];
  
  // Define the order of categories to display (most useful first)
  const orderedCategories: ToolCategory[] = [
    'productivity',
    'chatbots',
    'writing',
    'code',
    'design',
    'content-creation',
    'search-engines',
    'finance',
    'health',
    'language-learning',
    'travel',
    'music',
    'video',
    'meeting',
    'email',
    'browser-extensions',
    'models',
    'developer',
    'academics',
    'translation',
    'virtual-assistants',
    'home',
    'voice',
    'website-builders',
    'chatgpt-extensions',
    'text-generators',
    'local-search',
    'social-media',
    'sales',
    'recruitment',
    'customer-support'
  ];
  
  // Sort categories based on the defined order
  const sortedCategoryKeys = [...categoryKeys].sort((a, b) => {
    const indexA = orderedCategories.indexOf(a);
    const indexB = orderedCategories.indexOf(b);
    return (indexA === -1 ? 999 : indexA) - (indexB === -1 ? 999 : indexB);
  });
  
  // Filter categories based on selected categories and search query
  const categoriesToShow = selectedCategories.length > 0 
    ? sortedCategoryKeys.filter(category => selectedCategories.includes(category))
    : sortedCategoryKeys;
  
  // Filter categories that have at least one tool
  const categoriesWithTools = categoriesToShow.filter(category => {
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

  // Responsive tools per page
  const [toolsPerPage, setToolsPerPage] = useState(5);
  useEffect(() => {
    const updateToolsPerPage = () => {
      if (window.innerWidth < 640) {
        setToolsPerPage(1); // Mobile: 1 tool per page
      } else {
        setToolsPerPage(5); // Laptop/large: 5 tools per page
      }
    };
    updateToolsPerPage();
    window.addEventListener('resize', updateToolsPerPage);
    return () => window.removeEventListener('resize', updateToolsPerPage);
  }, []);
  
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

        // Pagination logic
        const currentPage = categoryPageState?.[category] || 1;
        const totalPages = Math.ceil(filteredTools.length / toolsPerPage);
        const paginatedTools = filteredTools.slice((currentPage - 1) * toolsPerPage, currentPage * toolsPerPage);
        
        // Determine if this is a specialized category
        const isSpecializedCategory = [
          'finance', 'health', 'language-learning', 'travel', 'home', 'music', 'video'
        ].includes(category);
        
        return (
          <div 
            key={category} 
            className={`category-section fade-in delay-${Math.min(categoryIndex * 100, 500)}`}
          >
            <h3 className={`text-2xl font-semibold mb-6 pb-2 inline-block text-white tech-title flex items-center
              ${isSpecializedCategory ? 'specialized-category' : ''}`}>
              {getCategoryIcon(category)}
              {categoryLabels[category]}
              {isSpecializedCategory && 
                <span className="ml-2 text-xs uppercase px-2 py-0.5 bg-blue-900/50 rounded-full text-blue-300 border border-blue-500/50">
                  New
                </span>
              }
            </h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
              {paginatedTools.map((tool, toolIndex) => (
                <div
                  key={tool.id}
                  className={`glassmorphic-tool-card group cursor-pointer fade-in delay-${Math.min((categoryIndex + toolIndex) * 50, 500)}`}
                  onClick={() => onToolClick ? onToolClick(tool.id) : window.location.assign(`/documentation/${tool.id}`)}
                  role="button"
                  tabIndex={0}
                  onKeyPress={e => { if (e.key === 'Enter') onToolClick ? onToolClick(tool.id) : window.location.assign(`/documentation/${tool.id}`); }}
                  data-testid={`tool-card-${tool.id}`}
                >
                  <div className="glassmorphic-card-content hover:bg-gray-800/60 hover:shadow-lg hover:shadow-blue-900/20 transition-all duration-300 h-full flex flex-col justify-between p-4 neon-glow relative">
                    {/* New badge */}
                    {newTools.includes(tool.id) && (
                      <div className="absolute -top-2 -right-2 bg-blue-600 text-white text-xs px-2 py-1 rounded-full z-10 shadow-lg new-badge">
                        New
                      </div>
                    )}
                    
                    {/* Trending badge */}
                    {trendingTools.includes(tool.id) && (
                      <div className="absolute -top-2 -left-2 bg-gradient-to-r from-orange-500 to-pink-500 text-white text-xs px-2 py-1 rounded-full z-10 shadow-lg flex items-center trending-badge">
                        <FiTrendingUp className="mr-1" /> Trending
                      </div>
                    )}
                    
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
            {/* Pagination for this category */}
            {totalPages > 1 && (
              <div className="mt-6">
                <Pagination
                  currentPage={currentPage}
                  totalPages={totalPages}
                  onPageChange={(page) => onCategoryPageChange && onCategoryPageChange(category, page)}
                />
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default CategoryList;