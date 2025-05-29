"use client"

import React from 'react'
import { motion } from 'framer-motion'
import {
  FiInfo,
  FiGrid,
  FiLayers,
  FiArrowRight,
  FiGithub,
  FiTwitter,
  FiLinkedin,
  FiMail,
  FiCode,
  FiGlobe,
  FiCpu,
  FiHeart,
  FiDatabase,
  FiServer,
  FiMonitor,
  FiRefreshCw,
  FiZap,
  FiUser,
  FiSmartphone,
  FiHome,
  FiSearch,
  FiBookOpen,
  FiFileText,
  FiClock
} from 'react-icons/fi'
import Link from 'next/link'
import { categoryLabels, ToolCategory } from '@/data/exploreIndex'
import Image from 'next/image'

export default function AboutPage() {
  // Stats for the project
  const stats = [
    { label: 'AI Tools', value: '100+', icon: <FiGrid /> },
    { label: 'Categories', value: '30+', icon: <FiLayers /> },
    { label: 'Resources', value: '50+', icon: <FiGlobe /> },
    { label: 'Updates', value: 'Weekly', icon: <FiCpu /> }
  ]

  // Featured tool categories
  const featuredCategories: ToolCategory[] = [
    'chatbots',
    'code',
    'design',
    'productivity',
    'writing',
    'search-engines',
    'models',
    'music'
  ]

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 15
      }
    }
  }

  return (
    <main className="min-h-screen circuit-bg pt-24">
      {/* Hero Section */}
      <section className="relative">
        {/* Decorative elements */}
        <div className="absolute top-10 right-10 w-40 h-40 bg-yellow-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-60 h-60 bg-amber-500/10 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 relative z-10">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center justify-center p-2 bg-yellow-900/30 rounded-xl mb-4 border border-yellow-500/20">
              <FiInfo className="text-yellow-500 h-10 w-10" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-amber-600 mb-6 tech-title">
              About AI Central Station
            </h1>
            <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto mb-8">
              An independent project dedicated to making AI tools accessible, understandable, and useful for everyone.
            </p>

            {/* Stats */}
            <motion.div
              className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mt-12"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="glassmorphic-card-content p-4 rounded-xl"
                  variants={itemVariants}
                >
                  <div className="text-yellow-400 mb-2 flex justify-center">
                    {stat.icon}
                  </div>
                  <div className="text-2xl md:text-3xl font-bold text-white mb-1 tech-title">{stat.value}</div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="relative py-16 md:py-24">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-yellow-500 to-transparent opacity-70"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            className="glassmorphic-card-content p-8 md:p-12 rounded-xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-amber-600 mb-6 tech-title">
                My Mission
              </h2>

              <div className="space-y-6 text-gray-300">
                <p>
                  AI Central Station was created to serve as a comprehensive resource center for AI enthusiasts, developers, researchers, and businesses navigating the rapidly evolving landscape of artificial intelligence tools.
                </p>

                <p>
                  In a world where new AI tools emerge daily, finding the right solution for your specific needs can be overwhelming. This project aims to simplify that process by providing clear, organized information about the most powerful AI tools available today.
                </p>

                <p>
                  Whether you're looking for productivity enhancements, creative tools, developer resources, or specialized AI applications, this hub offers curated selections with practical insights to help you make informed decisions.
                </p>

                <div className="flex items-center p-4 bg-yellow-500/10 border border-yellow-500/20 rounded-lg">
                  <FiHeart className="text-yellow-500 w-6 h-6 mr-4 flex-shrink-0" />
                  <p className="text-yellow-200 italic">
                    "My goal is to democratize access to AI by making these powerful technologies understandable and accessible to everyone, regardless of technical background."
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Tools Coverage Section */}
      <section className="relative py-16 md:py-24 bg-gray-900/50">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-70"></div>
        <div className="absolute top-20 right-20 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-40 h-40 bg-indigo-500/10 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center justify-center p-2 bg-blue-900/30 rounded-xl mb-4 border border-blue-500/20">
              <FiGrid className="text-blue-500 h-10 w-10" />
            </div>
            <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-600 mb-4 tech-title">
              Exploring AI Categories
            </h2>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto">
              The hub covers a wide range of AI tools across various categories to support different needs and use cases.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-4"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {featuredCategories.map((category) => (
              <motion.div
                key={category}
                className="glassmorphic-card-content p-4 rounded-xl group hover:bg-blue-900/20 transition-all duration-300 cursor-pointer"
                variants={itemVariants}
              >
                <Link href={`/explore?category=${category}`} className="block h-full">
                  <h3 className="text-lg font-semibold text-blue-400 mb-2 group-hover:text-blue-300 tech-title">
                    {categoryLabels[category]}
                  </h3>
                  <div className="flex justify-end mt-auto">
                    <FiArrowRight className="text-blue-500 opacity-0 group-hover:opacity-100 transform translate-x-0 group-hover:translate-x-1 transition-all" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>

          <div className="text-center mt-10">
            <Link href="/explore" className="inline-flex items-center justify-center gap-2 text-blue-400 hover:text-blue-300 border border-blue-500 hover:border-blue-400 px-6 py-3 rounded-lg transition-all hover:bg-blue-900/20 tech-text">
              View All Categories <FiArrowRight className="ml-1 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="relative py-16 md:py-24">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-70"></div>
        <div className="absolute top-20 left-20 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row gap-8">
            <motion.div
              className="lg:w-1/2"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="inline-flex items-center justify-center p-2 bg-purple-900/30 rounded-xl mb-4 border border-purple-500/20">
                <FiCpu className="text-purple-500 h-8 w-8" />
              </div>
              <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-600 mb-6 tech-title">
                Future Vision
              </h2>
              <div className="space-y-4 text-gray-300">
                <p>
                  The AI landscape is evolving at an unprecedented pace, and AI Central Station will continue to grow alongside it. My vision for the future includes:
                </p>

                <ul className="space-y-3">
                  <li className="flex items-start">
                    <FiArrowRight className="text-purple-400 mt-1 mr-3 flex-shrink-0" />
                    <span>Expanding tool coverage to include emerging AI technologies</span>
                  </li>
                  <li className="flex items-start">
                    <FiArrowRight className="text-purple-400 mt-1 mr-3 flex-shrink-0" />
                    <span>Adding more detailed benchmarks and comparison features</span>
                  </li>
                  <li className="flex items-start">
                    <FiArrowRight className="text-purple-400 mt-1 mr-3 flex-shrink-0" />
                    <span>Creating in-depth tutorials for maximizing AI tool potential</span>
                  </li>
                  <li className="flex items-start">
                    <FiArrowRight className="text-purple-400 mt-1 mr-3 flex-shrink-0" />
                    <span>Building a community of AI enthusiasts and practitioners</span>
                  </li>
                  <li className="flex items-start">
                    <FiArrowRight className="text-purple-400 mt-1 mr-3 flex-shrink-0" />
                    <span>Developing interactive elements to help users find the perfect tools</span>
                  </li>
                </ul>
              </div>
            </motion.div>

            <motion.div
              className="lg:w-1/2"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <div className="inline-flex items-center justify-center p-2 bg-blue-900/30 rounded-xl mb-4 border border-blue-500/20">
                <FiCode className="text-blue-500 h-8 w-8" />
              </div>
              <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600 mb-6 tech-title">
                Development Approach
              </h2>
              <div className="space-y-4 text-gray-300">
                <p>
                  This project is built with a focus on:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="glassmorphic-card-content p-4 rounded-xl border border-blue-500/20">
                    <h3 className="text-blue-400 font-medium mb-2 tech-title">User-Centric Design</h3>
                    <p className="text-sm">
                      Creating an intuitive interface that makes exploring AI tools simple and enjoyable.
                    </p>
                  </div>

                  <div className="glassmorphic-card-content p-4 rounded-xl border border-purple-500/20">
                    <h3 className="text-purple-400 font-medium mb-2 tech-title">Comprehensive Reviews</h3>
                    <p className="text-sm">
                      Providing detailed, unbiased information about each tool's capabilities and limitations.
                    </p>
                  </div>

                  <div className="glassmorphic-card-content p-4 rounded-xl border border-indigo-500/20">
                    <h3 className="text-indigo-400 font-medium mb-2 tech-title">Modern Technology</h3>
                    <p className="text-sm">
                      Built using cutting-edge web technologies for performance and responsiveness.
                    </p>
                  </div>

                  <div className="glassmorphic-card-content p-4 rounded-xl border border-blue-500/20">
                    <h3 className="text-blue-400 font-medium mb-2 tech-title">Continuous Updates</h3>
                    <p className="text-sm">
                      Regular additions and refinements to keep pace with the evolving AI landscape.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Technology Stack Section - NEW */}
      <section className="relative py-16 md:py-24 bg-gray-900/50">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-70"></div>
        <div className="absolute top-20 right-20 w-40 h-40 bg-cyan-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-40 h-40 bg-sky-500/10 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center justify-center p-2 bg-cyan-900/30 rounded-xl mb-4 border border-cyan-500/20">
              <FiServer className="text-cyan-500 h-10 w-10" />
            </div>
            <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-sky-600 mb-4 tech-title">
              Technology Stack
            </h2>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto">
              The technical architecture and components that power the AI Central Station platform.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Core Technologies */}
            <motion.div
              className="glassmorphic-card-content p-6 rounded-xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <h3 className="text-xl font-semibold text-cyan-400 mb-4 tech-title flex items-center">
                <FiCode className="mr-3 h-5 w-5" /> Core Technologies
              </h3>
              <div className="space-y-4 text-gray-300">
                <div className="flex items-start">
                  <div className="bg-cyan-900/30 p-2 rounded-lg mr-4">
                    <FiZap className="text-cyan-400 h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-1">Next.js 15</h4>
                    <p className="text-sm text-gray-400">React framework enabling server-side rendering, static site generation, and API routes in a single project.</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-cyan-900/30 p-2 rounded-lg mr-4">
                    <FiMonitor className="text-cyan-400 h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-1">React 18</h4>
                    <p className="text-sm text-gray-400">Frontend library for building dynamic and responsive user interfaces with component-based architecture.</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-cyan-900/30 p-2 rounded-lg mr-4">
                    <FiRefreshCw className="text-cyan-400 h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-1">TypeScript</h4>
                    <p className="text-sm text-gray-400">Strongly typed programming language that enhances code quality and developer experience.</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-cyan-900/30 p-2 rounded-lg mr-4">
                    <FiSmartphone className="text-cyan-400 h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-1">Tailwind CSS</h4>
                    <p className="text-sm text-gray-400">Utility-first CSS framework for rapid UI development with responsive and modern design.</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-cyan-900/30 p-2 rounded-lg mr-4">
                    <FiDatabase className="text-cyan-400 h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-1">Data Management</h4>
                    <p className="text-sm text-gray-400">Structured JSON data files for AI tools, categories, and benchmarks with efficient query capabilities.</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Key Features & Pages */}
            <motion.div
              className="glassmorphic-card-content p-6 rounded-xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <h3 className="text-xl font-semibold text-sky-400 mb-4 tech-title flex items-center">
                <FiGlobe className="mr-3 h-5 w-5" /> Key Pages & Features
              </h3>
              <div className="space-y-4 text-gray-300">
                <div className="flex items-start">
                  <div className="bg-sky-900/30 p-2 rounded-lg mr-4">
                    <FiHome className="text-sky-400 h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-1">Homepage</h4>
                    <p className="text-sm text-gray-400">Dynamic hero section with animated elements and content sections showcasing key platform features.</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-sky-900/30 p-2 rounded-lg mr-4">
                    <FiSearch className="text-sky-400 h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-1">Explore Page</h4>
                    <p className="text-sm text-gray-400">Interactive tool discovery with filtering, search, and sorting capabilities, using client-side data processing.</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-sky-900/30 p-2 rounded-lg mr-4">
                    <FiBookOpen className="text-sky-400 h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-1">Documentation</h4>
                    <p className="text-sm text-gray-400">MDX-powered documentation with AI generated summary, syntax highlighting, interactive examples, and responsive layouts.</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-sky-900/30 p-2 rounded-lg mr-4">
                    <FiFileText className="text-sky-400 h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-1">Blog & News</h4>
                    <p className="text-sm text-gray-400">Static content generation for blog posts with rich media support and SEO optimization.</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-sky-900/30 p-2 rounded-lg mr-4">
                    <FiClock className="text-sky-400 h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-1">Real-time Updates</h4>
                    <p className="text-sm text-gray-400">RSS feed and API integration for AI blogs and AI news with scheduled content updates and notifications system.</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Additional Tech Details */}
          <motion.div
            className="glassmorphic-card-content p-6 rounded-xl mt-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <h3 className="text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-sky-600 mb-4 tech-title">
              Performance & Infrastructure
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-gray-300">
              <div className="p-4 border border-cyan-500/20 rounded-lg">
                <h4 className="text-cyan-400 font-medium mb-2 flex items-center">
                  <FiZap className="mr-2 h-4 w-4" /> Performance
                </h4>
                <p className="text-sm">
                  Optimized with code splitting, image optimization, and lazy loading for fast loading times. Uses Next.js Edge functions for API routes.
                </p>
              </div>

              <div className="p-4 border border-sky-500/20 rounded-lg">
                <h4 className="text-sky-400 font-medium mb-2 flex items-center">
                  <FiServer className="mr-2 h-4 w-4" /> Deployment
                </h4>
                <p className="text-sm">
                  Hosted on Vercel with continuous integration/deployment pipeline from GitHub repository. Automatic previews for pull requests.
                </p>
              </div>

              <div className="p-4 border border-blue-500/20 rounded-lg">
                <h4 className="text-blue-400 font-medium mb-2 flex items-center">
                  <FiDatabase className="mr-2 h-4 w-4" /> Data Management
                </h4>
                <p className="text-sm">
                  Structured data in JSON format with automatic type generation. Content updates via GitHub webhooks and scheduled builds.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Connect Section */}
      <section id="connect" className="relative py-16 md:py-24 bg-gray-900/50">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-green-500 to-transparent opacity-70"></div>
        <div className="absolute top-20 right-20 w-40 h-40 bg-green-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-40 h-40 bg-teal-500/10 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-teal-600 mb-4 tech-title">
              Connect With Me
            </h2>

          </motion.div>

          <motion.div
            className="flex flex-col md:flex-row justify-center gap-6 max-w-4xl mx-auto"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.a
              href="mailto:edu.dariogeorge2@gmail.com"
              className="flex items-center justify-center gap-3 bg-gradient-to-r from-green-600 to-teal-600 text-white px-6 py-4 rounded-lg hover:from-green-700 hover:to-teal-700 transition-all tech-text"
              variants={itemVariants}
            >
              <FiMail className="w-5 h-5" />
              Contact Me
            </motion.a>

            <motion.a
              href="https://github.com/dariogeorge21"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 text-gray-300 hover:text-white border border-gray-700 hover:border-gray-500 px-6 py-4 rounded-lg transition-all tech-text hover:bg-gray-800/50"
              variants={itemVariants}
            >
              <FiGithub className="w-5 h-5" />
              GitHub
            </motion.a>

            <motion.a
              href="https://twitter.com/dariogeorge21"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 text-gray-300 hover:text-white border border-gray-700 hover:border-gray-500 px-6 py-4 rounded-lg transition-all tech-text hover:bg-gray-800/50"
              variants={itemVariants}
            >
              <FiTwitter className="w-5 h-5" />
              Twitter
            </motion.a>

            <motion.a
              href="https://linkedin.com/in/dariogeorge21"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 text-gray-300 hover:text-white border border-gray-700 hover:border-gray-500 px-6 py-4 rounded-lg transition-all tech-text hover:bg-gray-800/50"
              variants={itemVariants}
            >
              <FiLinkedin className="w-5 h-5" />
              LinkedIn
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* About Me Section - NEW */}
      <section className="relative py-16 md:py-24">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-pink-500 to-transparent opacity-70"></div>
        <div className="absolute top-20 right-20 w-40 h-40 bg-pink-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-40 h-40 bg-red-500/10 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center justify-center p-2 bg-pink-900/30 rounded-xl mb-4 border border-pink-500/20">
              <FiUser className="text-pink-500 h-10 w-10" />
            </div>
            <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-red-600 mb-4 tech-title">
              About Me
            </h2>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto">
              The creator and developer behind AI Central Station.
            </p>
          </motion.div>

          <motion.div
            className="glassmorphic-card-content p-8 rounded-xl overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="flex flex-col lg:flex-row gap-8 items-center lg:items-start">
              {/* Photo Section - Right on desktop, top on mobile */}
              <div className="lg:order-2 lg:w-1/3 flex justify-center">
                <Link href="https://github.com/dariogeorge21" target="_blank" rel="noopener noreferrer" className="block">
                  <div className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-pink-500/30 shadow-lg shadow-pink-500/20 transition-all duration-300 hover:shadow-xl hover:shadow-pink-500/30 hover:scale-105 cursor-pointer">
                    <Image
                      src="/images/about/profile-photo.jpg.jpg"
                      alt="Dario George - Profile Photo"
                      fill
                      className="object-cover"
                      priority
                    />
                    <div className="absolute inset-0 rounded-full border border-pink-500/10 bg-gradient-to-br from-pink-500/10 to-red-500/10 hover:from-pink-500/0 hover:to-red-500/0 transition-all duration-300"></div>
                  </div>

                </Link>
              </div>

              {/* Resume Section - Left on desktop, bottom on mobile */}
              <div className="lg:order-1 lg:w-2/3 space-y-6 text-gray-300">
                <h3 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-red-600 mb-2 tech-title">
                  Dario George
                </h3>
                <p className="text-lg text-pink-200">
                  Full Stack Developer & AI Enthusiast
                </p>

                <div className="space-y-4">
                  <p>
                    I'm a passionate developer building web applications and digital products. My journey with AI began in 2024, and I've been fascinated by its potential to transform how we work.
                  </p>

                  <div className="pt-2">
                    <h4 className="text-pink-400 font-medium mb-2">Core Skills:</h4>
                    <div className="flex flex-wrap gap-2">
                      {['React', 'TypeScript', 'Next.js', 'AI Integration', 'UX Design', 'Full Stack Development','Data Structures'].map((skill) => (
                        <span key={skill} className="bg-pink-900/30 px-3 py-1 rounded-full text-sm border border-pink-500/20">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* <div className="pt-2">
                    <h4 className="text-pink-400 font-medium mb-2">Professional Experience:</h4>
                    <div className="space-y-3">
                      <div>
                        <div className="font-medium">Senior Developer at [Company]</div>
                        <div className="text-sm text-gray-400">2020 - Present</div>
                        <div className="text-sm mt-1">Led development of AI-powered products and solutions.</div>
                      </div>
                      <div>
                        <div className="font-medium">Full Stack Developer at [Company]</div>
                        <div className="text-sm text-gray-400">2017 - 2020</div>
                        <div className="text-sm mt-1">Built scalable web applications and services.</div>
                      </div>
                    </div>
                  </div> */}

                  <div className="pt-2">
                    <h4 className="text-pink-400 font-medium mb-2">Why I Built AI Central Station:</h4>
                    <p>
                      I created this platform to help others navigate the rapidly evolving AI landscape. My goal is to make AI tools familiar and accessible to everyone, whether you're a developer, student, researcher, or business professional.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            className="glassmorphic-card-content p-8 md:p-12 rounded-xl text-center border border-yellow-500/20"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-amber-600 mb-6 tech-title">
              Start Exploring AI Tools Today
            </h2>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto mb-8">
              Discover the perfect AI tools to enhance your workflow, boost creativity, or solve complex problems.
            </p>
            <Link
              href="/explore"
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-yellow-500 to-amber-500 text-white px-8 py-4 rounded-lg hover:from-yellow-600 hover:to-amber-600 transition-all tech-text text-lg"
            >
              Explore AI Tools <FiArrowRight className="ml-1" />
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
