import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { format } from 'date-fns';
import { useState } from 'react';

interface NewsCardProps {
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

export default function NewsCard({
  title,
  description,
  author,
  source,
  urlToImage,
  publishedAt,
  url,
}: NewsCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [imageError, setImageError] = useState(false);

  const fallbackImage = 'https://source.unsplash.com/random/800x600?ai,technology';

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.02 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="glassmorphic-card-content rounded-xl overflow-hidden shadow-xl hover:shadow-blue-900/20 transition-all duration-300 cursor-pointer hover:border-blue-500/30"
    >
      <div className="relative h-48 w-full">
        <Image
          src={!imageError && urlToImage ? urlToImage : fallbackImage}
          alt={title}
          fill
          className="object-cover transition-transform duration-300"
          onError={() => setImageError(true)}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          unoptimized={true}
        />
        <motion.div 
          className="absolute inset-0 bg-black"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 0.3 : 0 }}
          transition={{ duration: 0.3 }}
        />
        <div className="absolute top-2 right-2">
          <span className="bg-blue-600 text-white text-xs font-medium px-2 py-1 rounded-lg">
            {source.name}
          </span>
        </div>
      </div>
      <div className="p-6">
        <motion.h3 
          className="text-xl font-bold mb-2 text-white transition-all duration-300 tech-title"
          animate={{ 
            lineClamp: isHovered ? 'unset' : 2,
            WebkitLineClamp: isHovered ? 'unset' : 2,
            display: '-webkit-box',
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden'
          }}
        >
          {title}
        </motion.h3>
        {author && (
          <p className="text-sm text-gray-400 mb-2 tech-text">
            By {author}
          </p>
        )}
        <AnimatePresence>
          {isHovered && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <p className="text-gray-300 mb-4 tech-text">
                {description}
              </p>
              <motion.a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-blue-600 text-white px-4 py-2 rounded-lg transition-colors hover:bg-blue-700"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Read Full Article
              </motion.a>
            </motion.div>
          )}
        </AnimatePresence>
        <div className="flex justify-between items-center text-sm text-gray-400 mt-4 tech-text">
          <motion.time 
            dateTime={publishedAt}
            animate={{ opacity: isHovered ? 0.7 : 1 }}
          >
            {format(new Date(publishedAt), 'MMM d, yyyy')}
          </motion.time>
        </div>
      </div>
    </motion.article>
  );
} 