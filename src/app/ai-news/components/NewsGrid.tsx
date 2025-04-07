import { motion } from 'framer-motion';
import NewsCard from './NewsCard';

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

interface NewsGridProps {
  news: NewsItem[];
  loading: boolean;
  page: number;
}

const SkeletonCard = () => (
  <div className="glassmorphic-card-content rounded-xl overflow-hidden shadow-xl animate-pulse">
    <div className="h-48 bg-gray-700/50" />
    <div className="p-6">
      <div className="h-6 bg-gray-700/50 rounded mb-4" />
      <div className="h-4 bg-gray-700/50 rounded mb-2" />
      <div className="h-4 bg-gray-700/50 rounded mb-2" />
      <div className="h-4 bg-gray-700/50 rounded w-2/3" />
    </div>
  </div>
);

export default function NewsGrid({ news, loading, page }: NewsGridProps) {
  // Calculate the number of skeleton cards to show based on the page
  const skeletonCount = page === 1 ? 18 : 9; // 18 skeletons for first page, 9 for subsequent pages
  const existingNewsCount = news.length;
  const shouldShowSkeletons = loading && page > 1;

  return (
    <motion.div
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Render existing news items */}
      {news.map((item, index) => (
        <NewsCard key={`${item.url}-${index}`} {...item} />
      ))}

      {/* Show skeletons only when loading more items */}
      {shouldShowSkeletons && (
        <>
          {[...Array(skeletonCount)].map((_, index) => (
            <SkeletonCard key={`skeleton-${existingNewsCount + index}`} />
          ))}
        </>
      )}

      {/* Show initial loading state */}
      {loading && page === 1 && (
        <>
          {[...Array(skeletonCount)].map((_, index) => (
            <SkeletonCard key={`initial-skeleton-${index}`} />
          ))}
        </>
      )}
    </motion.div>
  );
} 