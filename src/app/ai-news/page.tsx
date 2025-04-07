'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FiChevronDown } from 'react-icons/fi';
import NewsFilters from './components/NewsFilters';
import NewsGrid from './components/NewsGrid';

// Types for our news data
interface NewsItem {
  title: string;
  description: string;
  author: string;
  source: {
    id: string;
    name: string;
  };
  urlToImage: string;
  publishedAt: string;
  url: string;
}

export default function AINewsPage() {
  const [newsItems, setNewsItems] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [error, setError] = useState<string | null>(null);

  const fetchNews = useCallback(async (pageNum: number) => {
    try {
      if (pageNum === 1) {
        setLoading(true);
      }
      setError(null);
      const response = await fetch(`/api/news?page=${pageNum}&category=${selectedCategory}`);
      if (!response.ok) {
        throw new Error('Failed to fetch news');
      }
      const data = await response.json();
      
      if (pageNum === 1) {
        setNewsItems(data.news);
      } else {
        setNewsItems((prev) => [...prev, ...data.news]);
      }
      
      setHasMore(data.hasMore);
    } catch (error) {
      console.error('Error fetching news:', error);
      setError('Failed to load news. Please try again later.');
    } finally {
      setLoading(false);
    }
  }, [selectedCategory]);

  useEffect(() => {
    setPage(1);
    fetchNews(1);
  }, [selectedCategory, fetchNews]);

  const loadMore = () => {
    if (!hasMore) {
      setError('No more news available.');
      return;
    }
    const nextPage = page + 1;
    setPage(nextPage);
    fetchNews(nextPage);
  };

  const scrollToNews = () => {
    document.getElementById('latest-news')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <main className="min-h-screen circuit-bg text-white">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src="/ai-news-hero.jpg"
            alt="AI News Hero Background"
            fill
            className="object-cover opacity-40"
            priority
          />
          {/* Overlay for better readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-blue-900/20 to-transparent" />
        </div>
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-600 tech-title"
          >
            AI News: Breaking the Boundaries of Innovation
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl mb-8 text-gray-300 tech-text"
          >
            Stay updated with the latest advancements, breakthroughs, and trends in AI from around the globe.
          </motion.p>
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            onClick={scrollToNews}
            className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-lg transition-all duration-300 flex items-center mx-auto gap-2"
          >
            Explore Latest Updates
            <FiChevronDown className="animate-bounce" />
          </motion.button>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="glassmorphic-card-content p-8 rounded-xl">
            <p className="text-lg text-gray-300 leading-relaxed tech-text">
              Welcome to your definitive source for daily AI news and insights. Our platform aggregates and curates the most 
              significant developments in artificial intelligence from trusted sources worldwide. Through rigorous verification 
              and expert curation, we ensure you receive only the highest quality, most relevant updates in the rapidly evolving 
              landscape of AI technology.
            </p>
          </div>
        </div>
      </section>

      {/* Latest News Section */}
      <section id="latest-news" className="py-16 px-4 max-w-7xl mx-auto">
        <NewsFilters
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
        />
        
        {error && (
          <div className="text-red-500 text-center mb-8 glassmorphic-card-content p-4 rounded-xl">
            {error}
          </div>
        )}

        <NewsGrid 
          news={newsItems} 
          loading={loading}
          page={page}
        />

        {hasMore && (
          <div className="mt-12 text-center">
            <button
              onClick={loadMore}
              disabled={loading}
              className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2 mx-auto"
            >
              {loading ? (
                <>
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  Loading...
                </>
              ) : (
                'View More News'
              )}
            </button>
          </div>
        )}

        {!hasMore && newsItems.length > 0 && (
          <div className="mt-12 text-center glassmorphic-card-content p-6 rounded-xl">
            <p className="text-gray-300 tech-text">
              You've reached the end of available news. Check back later for more updates!
            </p>
          </div>
        )}
      </section>
    </main>
  );
}

