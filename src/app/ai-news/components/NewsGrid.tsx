import { motion } from 'framer-motion';
import NewsCard from './NewsCard';

interface NewsItem {
  id: string;
  title: string;
  description: string;
  source: string;
  imageUrl: string;
  timestamp: string;
  url: string;
  category: string;
  region: string;
}

interface NewsGridProps {
  news: NewsItem[];
  loading: boolean;
}

export default function NewsGrid({ news, loading }: NewsGridProps) {
  if (loading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="bg-gray-800 rounded-xl overflow-hidden shadow-xl animate-pulse"
          >
            <div className="h-48 bg-gray-700" />
            <div className="p-6">
              <div className="h-6 bg-gray-700 rounded mb-4" />
              <div className="h-4 bg-gray-700 rounded mb-2" />
              <div className="h-4 bg-gray-700 rounded mb-2" />
              <div className="h-4 bg-gray-700 rounded w-2/3" />
            </div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <motion.div
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {news.map((item) => (
        <NewsCard key={item.id} {...item} />
      ))}
    </motion.div>
  );
} 