import Image from 'next/image';
import { motion } from 'framer-motion';
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
  const [isExpanded, setIsExpanded] = useState(false);
  const [imageError, setImageError] = useState(false);

  const fallbackImage = 'https://source.unsplash.com/random/800x600?ai,technology';

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.02 }}
      className="bg-gray-800 rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300"
    >
      <div className="relative h-48 w-full">
        <Image
          src={!imageError && urlToImage ? urlToImage : fallbackImage}
          alt={title}
          fill
          className="object-cover"
          onError={() => setImageError(true)}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          unoptimized={true}
        />
        <div className="absolute top-2 right-2">
          <span className="bg-blue-600 text-white text-xs font-semibold px-2 py-1 rounded-full">
            {source.name}
          </span>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 text-white line-clamp-2 hover:line-clamp-none cursor-pointer"
            onClick={() => setIsExpanded(!isExpanded)}>
          {title}
        </h3>
        {author && (
          <p className="text-sm text-gray-400 mb-2">
            By {author}
          </p>
        )}
        <div className={`transition-all duration-300 overflow-hidden ${isExpanded ? 'max-h-96' : 'max-h-0'}`}>
          <p className="text-gray-300 mb-4">
            {description}
          </p>
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-blue-600 text-white px-4 py-2 rounded transition-colors hover:bg-blue-700"
          >
            Read Full Article
          </a>
        </div>
        <div className="flex justify-between items-center text-sm text-gray-400 mt-4">
          <time dateTime={publishedAt}>
            {format(new Date(publishedAt), 'MMM d, yyyy')}
          </time>
        </div>
      </div>
    </motion.article>
  );
} 