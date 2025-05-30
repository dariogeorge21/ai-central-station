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
  const [isClicked, setIsClicked] = useState(false);
  const [imageError, setImageError] = useState(false);

  const fallbackImage =
    'https://coingeek.com/wp-content/uploads/2023/07/Artificial-Intelligence-2-jpg.webp';

  const handleCardClick = () => {
    setIsClicked(!isClicked);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-card-background rounded-xl overflow-hidden shadow-lg transition-all duration-300 cursor-pointer w-full"
      onClick={handleCardClick}
    >
      <div className="relative h-48 w-full">
        <Image
          src={!imageError && urlToImage ? urlToImage : fallbackImage}
          alt={title || "News image"} // Provide a more descriptive alt text if possible, or remove the alt attribute if the image is decorative.
          fill
          className="object-cover"
          onError={() => setImageError(true)}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          unoptimized={true}
        />
        <div className="absolute top-2 left-2 bg-blue-600/80 backdrop-blur-md px-2 py-1 rounded-lg">
          <span className="text-white text-xs font-medium">
            {source.name}
          </span>
        </div>
      </div>
      <div className="p-5">
        <h3 className="text-xl font-bold mb-3 text-white line-clamp-2">
          {title}
        </h3>


        {author && (
          <p className="text-sm text-gray-400 mb-2">
            By {author}
          </p>
        )}
        {isClicked && (
          <div className="overflow-hidden mt-2">
            <p className="text-gray-300 mb-2">
              {description}
            </p>
          </div>
        )}
        <div className="flex justify-between items-center text-sm text-white mt-3">
          <time dateTime={publishedAt}>
            {format(new Date(publishedAt), 'MMM d, yyyy')}
          </time>
        </div>
        <div className="flex justify-between items-center text-sm text-white mt-2">
          <a
          
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-blue-600 text-white px-4 py-2 rounded-lg transition-colors hover:bg-blue-700"
          aria-label="Read full article (opens in a new tab)"
          >
          Read Full Article
          </a>
        </div>
      </div>
    </motion.div>
  );
}
