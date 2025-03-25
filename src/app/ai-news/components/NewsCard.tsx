import Image from 'next/image';
import { motion } from 'framer-motion';
import { format } from 'date-fns';

interface NewsCardProps {
  title: string;
  description: string;
  source: string;
  imageUrl: string;
  timestamp: string;
  url: string;
  category: string;
}

export default function NewsCard({
  title,
  description,
  source,
  imageUrl,
  timestamp,
  url,
  category,
}: NewsCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.02 }}
      className="bg-gray-800 rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300"
    >
      <a href={url} target="_blank" rel="noopener noreferrer" className="block">
        <div className="relative h-48 w-full">
          <Image
            src={imageUrl}
            alt={title}
            fill
            className="object-cover"
          />
          <div className="absolute top-2 right-2">
            <span className="bg-blue-600 text-white text-xs font-semibold px-2 py-1 rounded-full">
              {category}
            </span>
          </div>
        </div>
        <div className="p-6">
          <h3 className="text-xl font-bold mb-2 text-white line-clamp-2">
            {title}
          </h3>
          <p className="text-gray-300 mb-4 line-clamp-3">
            {description}
          </p>
          <div className="flex justify-between items-center text-sm text-gray-400">
            <span>{source}</span>
            <time dateTime={timestamp}>
              {format(new Date(timestamp), 'MMM d, yyyy')}
            </time>
          </div>
        </div>
      </a>
    </motion.article>
  );
} 