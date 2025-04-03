'use client';

import React from 'react';
import { AITool } from '@/data/aiTools';
import AIToolCard from './AIToolCard';

interface AIToolsGridProps {
  tools: AITool[];
  onSelectTool: (tool: AITool) => void;
  onClearFilters: () => void;
}

const AIToolsGrid: React.FC<AIToolsGridProps> = ({
  tools,
  onSelectTool,
  onClearFilters
}) => {
  const [isLoading, setIsLoading] = React.useState(true);

  // Simulate loading state
  React.useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {isLoading ? (
        // Loading skeleton
        Array.from({ length: 8 }).map((_, index) => (
          <div key={index} className="bg-gray-800/50 rounded-xl overflow-hidden animate-pulse h-[360px]">
            <div className="h-48 bg-gray-700/50"></div>
            <div className="p-5">
              <div className="h-6 bg-gray-700/50 rounded w-3/4 mb-4"></div>
              <div className="h-16 bg-gray-700/50 rounded mb-4"></div>
              <div className="h-10 bg-gray-700/50 rounded mt-auto"></div>
            </div>
          </div>
        ))
      ) : (
        // Actual tools
        tools.map((tool) => (
          <AIToolCard
            key={tool.id}
            tool={tool}
            onClick={onSelectTool}
          />
        ))
      )}

      {!isLoading && tools.length === 0 && (
        <div className="col-span-full py-16 text-center">
          <p className="text-gray-400 text-lg">No tools found matching the selected categories</p>
          <button
            onClick={onClearFilters}
            className="mt-4 text-emerald-400 hover:text-emerald-300"
          >
            Clear filters
          </button>
        </div>
      )}
    </div>
  );
};

export default AIToolsGrid;
