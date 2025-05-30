import React from 'react';

export default function ToolLoading() {
  return (
    <div className="min-h-screen circuit-bg py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="h-8 w-32 bg-gray-800 animate-pulse rounded mb-8"></div>
        
        <div className="glassmorphic-card-content p-6 md:p-8 rounded-xl animate-pulse">
          <div className="mb-8 pb-6 border-b border-gray-700/50">
            <div className="h-10 w-3/4 bg-gray-800 rounded mb-4"></div>
            
            <div className="flex flex-wrap gap-3 mb-4">
              {[1, 2, 3].map(i => (
                <div key={i} className="h-6 w-20 bg-gray-800 rounded-full"></div>
              ))}
            </div>
            
            <div className="h-6 bg-gray-800 rounded mb-2"></div>
            <div className="h-6 w-3/4 bg-gray-800 rounded mb-4"></div>
            
            <div className="mt-4">
              <div className="h-10 w-32 bg-gray-800 rounded"></div>
            </div>
          </div>
          
          {/* Section skeletons */}
          {[1, 2, 3, 4, 5, 6, 7, 8].map(section => (
            <div key={section} className="mb-8">
              <div className="h-8 w-64 bg-gray-800 rounded mb-4"></div>
              <div className="space-y-2">
                <div className="h-4 bg-gray-800 rounded"></div>
                <div className="h-4 bg-gray-800 rounded"></div>
                <div className="h-4 w-3/4 bg-gray-800 rounded"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 