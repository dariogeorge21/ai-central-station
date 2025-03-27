'use client';

import React, { useState } from 'react';
import PageTitle from '@/components/PageTitle';
import BlogFeed from '@/components/BlogFeed';
import { RefreshCw } from 'lucide-react';

export default function BlogPage() {
  const [refreshKey, setRefreshKey] = useState(0);
  const [isRefreshing, setIsRefreshing] = useState(false);

  const handleRefresh = () => {
    setIsRefreshing(true);
    setRefreshKey(prev => prev + 1); // Increment the key to force a re-render
    setTimeout(() => setIsRefreshing(false), 2000); // Reset after 2 seconds
  };

  return (
    <main className="bg-gradient-to-b from-gray-900 to-gray-950 min-h-screen">
      <div className="container mx-auto px-4 py-12">
        <div className="flex justify-between items-center mb-8">
          <PageTitle
            title="AI Blog Portal"
            subtitle="Explore articles, tutorials, and insights from the AI research community"
          />
          <button
            onClick={handleRefresh}
            className={`flex items-center space-x-2 px-4 py-2 rounded-lg bg-blue-600/20 text-blue-400 hover:bg-blue-600/30 transition-all ${isRefreshing ? 'opacity-75' : ''}`}
            disabled={isRefreshing}
          >
            <RefreshCw className={`h-4 w-4 ${isRefreshing ? 'animate-spin' : ''}`} />
            <span>{isRefreshing ? 'Refreshing...' : 'Refresh'}</span>
          </button>
        </div>
        
        <div className="bg-gray-800/20 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-gray-700/50">
          {/* <div className="text-gray-300 mb-4 text-sm">
            
          </div> */}
          <BlogFeed forceRefresh={refreshKey > 0} />
        </div>
                  </div>
    </main>
  );
}
