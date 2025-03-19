'use client';

import { useState } from 'react';
import { aiTools } from '@/data/ai-tools';
import { ToolsNavigation } from '@/components/ToolsNavigation';
import { CategorizedTools } from '@/components/CategorizedTools';

export default function ToolsPage() {
  const [activeCategory, setActiveCategory] = useState('development');

  return (
    <div className="flex flex-col min-h-screen">
      <div className="border-b bg-white">
        <div className="container mx-auto py-6">
          <h1 className="text-3xl font-bold mb-2">AI Tools Directory</h1>
          <p className="text-muted-foreground mb-6">
            Discover and explore our comprehensive collection of AI tools
          </p>
          <ToolsNavigation
            activeCategory={activeCategory}
            onCategoryChange={setActiveCategory}
          />
        </div>
      </div>
      <main className="flex-1 bg-gray-50">
        <CategorizedTools
          tools={aiTools}
          category={activeCategory}
        />
      </main>
    </div>
  );
} 