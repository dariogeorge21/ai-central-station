'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Share2, MessageCircle, Bookmark } from 'lucide-react';
import Image from 'next/image';

// Blog data structure
interface Author {
  name: string;
  avatar: string;
  bio: string;
  social: {
    twitter?: string;
    linkedin?: string;
    github?: string;
  };
}

interface BlogPost {
  id: string;
  title: string;
  description: string;
  content: string;
  image: string;
  date: string;
  readTime: string;
  author: Author;
  tags: string[];
  category: string;
}

// Sample blog posts data
const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Gemma 3: Breaking New Ground in AI Language Models',
    description: 'Exploring the capabilities and improvements of Gemma 3, including its enhanced resilience and performance in various tasks.',
    content: '...',
    image: '/images/blog/gemma-3.webp',
    date: 'March 18, 2024',
    readTime: '5 min read',
    author: {
      name: 'ML Expert',
      avatar: '/images/authors/ml-expert.webp',
      bio: 'AI researcher specializing in language models',
      social: {
        twitter: 'https://twitter.com/mlexpert',
        github: 'https://github.com/mlexpert'
      }
    },
    tags: ['AI', 'Language Models', 'Machine Learning'],
    category: 'AI Research'
  },
  {
    id: '2',
    title: '15 Types of Attention Mechanisms in Modern AI',
    description: 'A comprehensive guide to different attention mechanisms used in AI models, from basic to advanced implementations.',
    content: '...',
    image: '/images/blog/attention-mechanisms.webp',
    date: 'March 17, 2024',
    readTime: '8 min read',
    author: {
      name: 'AI Researcher',
      avatar: '/images/authors/ai-researcher.webp',
      bio: 'PhD in Computer Science, focusing on attention mechanisms',
      social: {
        twitter: 'https://twitter.com/airesearcher',
        linkedin: 'https://linkedin.com/in/airesearcher'
      }
    },
    tags: ['Deep Learning', 'Neural Networks', 'Attention'],
    category: 'Technical'
  }
];

export default function BlogPage() {
  const [email, setEmail] = useState('');

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary/10 via-primary/5 to-background py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h1 
              className="text-4xl md:text-5xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Exploring the Future of AI
            </motion.h1>
            <motion.p 
              className="text-xl text-muted-foreground mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Dive deep into the latest AI trends, tools, and technologies shaping our digital future
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <input
                type="email"
                placeholder="Enter your email for weekly insights"
                className="w-full md:w-96 px-4 py-2 rounded-l-lg border focus:outline-none focus:ring-2 focus:ring-primary"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button className="bg-primary text-primary-foreground px-6 py-2 rounded-r-lg hover:bg-primary/90 transition-colors">
                Subscribe
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post) => (
              <motion.article
                key={post.id}
                className="group relative bg-card rounded-lg overflow-hidden border hover:shadow-lg transition-shadow"
                whileHover={{ y: -5 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <div className="relative h-48">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-sm text-muted-foreground">{post.date}</span>
                    <span className="text-sm text-muted-foreground">•</span>
                    <span className="text-sm text-muted-foreground">{post.readTime}</span>
                  </div>
                  <h2 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-muted-foreground mb-4">
                    {post.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Image
                        src={post.author.avatar}
                        alt={post.author.name}
                        width={32}
                        height={32}
                        className="rounded-full"
                      />
                      <span className="text-sm font-medium">{post.author.name}</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <button className="text-muted-foreground hover:text-primary transition-colors">
                        <Share2 size={18} />
                      </button>
                      <button className="text-muted-foreground hover:text-primary transition-colors">
                        <MessageCircle size={18} />
                      </button>
                      <button className="text-muted-foreground hover:text-primary transition-colors">
                        <Bookmark size={18} />
                      </button>
                    </div>
                  </div>
                </div>
                <a href={`/blog/${post.id}`} className="absolute inset-0">
                  <span className="sr-only">Read more about {post.title}</span>
                </a>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="bg-muted py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
            <p className="text-muted-foreground mb-8">
              Get the latest insights about AI tools and technologies delivered straight to your inbox.
            </p>
            <div className="flex gap-2 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-primary"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button className="bg-primary text-primary-foreground px-6 py-2 rounded-lg hover:bg-primary/90 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
