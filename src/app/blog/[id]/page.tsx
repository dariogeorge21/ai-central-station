'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Twitter, Linkedin, Github, Share2, MessageCircle, ThumbsUp } from 'lucide-react';

// Reuse types from the main blog page
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

interface Comment {
  id: string;
  author: {
    name: string;
    avatar: string;
  };
  content: string;
  date: string;
  likes: number;
}

// Sample blog post data
const post: BlogPost = {
  id: '1',
  title: 'Gemma 3: Breaking New Ground in AI Language Models',
  description: 'Exploring the capabilities and improvements of Gemma 3, including its enhanced resilience and performance in various tasks.',
  content: `
    <h2>Introduction</h2>
    <p>The field of artificial intelligence continues to evolve at a rapid pace, and with the release of Gemma 3, we're witnessing another significant leap forward in language model capabilities...</p>

    <h2>Key Improvements</h2>
    <p>Gemma 3 introduces several groundbreaking features that set it apart from its predecessors:</p>
    <ul>
      <li>Enhanced context understanding</li>
      <li>Improved factual accuracy</li>
      <li>Better handling of complex queries</li>
      <li>Reduced hallucination rates</li>
    </ul>

    <h2>Technical Architecture</h2>
    <p>At its core, Gemma 3 utilizes a novel architecture that combines...</p>
  `,
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
};

// Sample comments
const comments: Comment[] = [
  {
    id: '1',
    author: {
      name: 'John Doe',
      avatar: '/images/authors/john-doe.webp'
    },
    content: 'Great article! The comparison between different attention mechanisms was particularly insightful.',
    date: 'March 19, 2024',
    likes: 5
  },
  {
    id: '2',
    author: {
      name: 'Jane Smith',
      avatar: '/images/authors/jane-smith.webp'
    },
    content: 'Would love to see a follow-up article on how these improvements affect real-world applications.',
    date: 'March 19, 2024',
    likes: 3
  }
];

// Sample related posts
const relatedPosts: BlogPost[] = [
  {
    id: '2',
    title: '15 Types of Attention Mechanisms in Modern AI',
    description: 'A comprehensive guide to different attention mechanisms used in AI models.',
    content: '...',
    image: '/images/blog/attention-mechanisms.webp',
    date: 'March 17, 2024',
    readTime: '8 min read',
    author: {
      name: 'AI Researcher',
      avatar: '/images/authors/ai-researcher.webp',
      bio: 'PhD in Computer Science',
      social: {}
    },
    tags: ['Deep Learning', 'Neural Networks', 'Attention'],
    category: 'Technical'
  }
];

export default function BlogPost() {
  const [comment, setComment] = useState('');
  const [email, setEmail] = useState('');

  return (
    <div className="min-h-screen py-16">
      <article className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="max-w-4xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{post.title}</h1>
            <div className="flex items-center gap-4 mb-8">
              <Image
                src={post.author.avatar}
                alt={post.author.name}
                width={48}
                height={48}
                className="rounded-full"
              />
              <div>
                <h3 className="font-medium">{post.author.name}</h3>
                <div className="text-sm text-muted-foreground">
                  {post.date} • {post.readTime}
                </div>
              </div>
            </div>
            <div className="relative h-[400px] rounded-xl overflow-hidden mb-8">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover"
              />
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            className="prose prose-lg max-w-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* Tags */}
          <div className="flex flex-wrap gap-2 my-8">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Author Box */}
          <div className="border rounded-lg p-6 my-8">
            <div className="flex items-start gap-4">
              <Image
                src={post.author.avatar}
                alt={post.author.name}
                width={64}
                height={64}
                className="rounded-full"
              />
              <div>
                <h3 className="font-semibold text-lg mb-2">{post.author.name}</h3>
                <p className="text-muted-foreground mb-4">{post.author.bio}</p>
                <div className="flex gap-4">
                  {post.author.social.twitter && (
                    <a
                      href={post.author.social.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      <Twitter size={20} />
                    </a>
                  )}
                  {post.author.social.linkedin && (
                    <a
                      href={post.author.social.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      <Linkedin size={20} />
                    </a>
                  )}
                  {post.author.social.github && (
                    <a
                      href={post.author.social.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      <Github size={20} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Comments Section */}
          <div className="my-8">
            <h3 className="text-2xl font-semibold mb-6">Comments</h3>
            <div className="space-y-6 mb-8">
              {comments.map((comment) => (
                <div key={comment.id} className="flex gap-4">
                  <Image
                    src={comment.author.avatar}
                    alt={comment.author.name}
                    width={40}
                    height={40}
                    className="rounded-full"
                  />
                  <div className="flex-1">
                    <div className="bg-muted p-4 rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-medium">{comment.author.name}</h4>
                        <span className="text-sm text-muted-foreground">{comment.date}</span>
                      </div>
                      <p className="text-muted-foreground">{comment.content}</p>
                    </div>
                    <div className="flex items-center gap-4 mt-2">
                      <button className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-1">
                        <ThumbsUp size={16} />
                        {comment.likes}
                      </button>
                      <button className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-1">
                        <MessageCircle size={16} />
                        Reply
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Comment Form */}
            <div className="bg-muted p-6 rounded-lg">
              <h4 className="font-medium mb-4">Leave a comment</h4>
              <textarea
                className="w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-primary resize-none mb-4"
                rows={4}
                placeholder="Share your thoughts..."
                value={comment}
                onChange={(e) => setComment(e.target.value)}
              />
              <button className="bg-primary text-primary-foreground px-6 py-2 rounded-lg hover:bg-primary/90 transition-colors">
                Post Comment
              </button>
            </div>
          </div>
        </div>

        {/* Related Posts */}
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-semibold mb-6">Related Posts</h2>
          <div className="grid gap-8 md:grid-cols-2">
            {relatedPosts.map((post) => (
              <motion.article
                key={post.id}
                className="group relative bg-card rounded-lg overflow-hidden border hover:shadow-lg transition-shadow"
                whileHover={{ y: -5 }}
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
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {post.description}
                  </p>
                </div>
                <a href={`/blog/${post.id}`} className="absolute inset-0">
                  <span className="sr-only">Read more about {post.title}</span>
                </a>
              </motion.article>
            ))}
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="max-w-4xl mx-auto mt-16 bg-muted rounded-lg p-8">
          <div className="text-center">
            <h2 className="text-2xl font-semibold mb-4">Subscribe to Our Newsletter</h2>
            <p className="text-muted-foreground mb-6">
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
      </article>
    </div>
  );
} 