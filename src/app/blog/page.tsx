'use client';

import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import { Button } from '@/components/ui/button';

export default function BlogPage() {
  const [text] = useTypewriter({
    words: [
      'Latest AI Breakthroughs',
      'Industry Insights',
      'Tech Innovations',
      'Expert Opinions'
    ],
    loop: true,
    delaySpeed: 2000,
  });

  const scrollToContent = () => {
    const contentSection = document.getElementById('blog-content');
    if (contentSection) {
      contentSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-grid-small-black/[0.05] -z-10" />
        
        {/* Gradient Backgrounds */}
        <div className="absolute inset-0 flex items-center justify-center -z-10">
          <div className="relative w-full h-full">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.2 }}
              transition={{ duration: 1 }}
              className="absolute top-1/4 -left-1/4 w-96 h-96 bg-purple-500 rounded-full filter blur-[200px]"
            />
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.2 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="absolute bottom-1/4 -right-1/4 w-96 h-96 bg-blue-500 rounded-full filter blur-[200px]"
            />
          </div>
        </div>

        {/* Content */}
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-5xl md:text-6xl font-bold mb-4 font-jetbrains">
                AI News and Blogs
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-2xl md:text-3xl text-muted-foreground mb-8 font-jetbrains"
            >
              <span>{text}</span>
              <Cursor cursorStyle="_" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Button
                onClick={scrollToContent}
                variant="outline"
                size="lg"
                className="group"
              >
                Explore Articles
                <ChevronDown className="ml-2 h-4 w-4 transition-transform group-hover:translate-y-1" />
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Blog Content Section */}
      <section id="blog-content" className="py-20">
        {/* Blog content will be added here */}
      </section>
    </div>
  );
}
