'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Github, 
  Twitter, 
  Linkedin, 
  Mail, 
  Globe, 
  Heart, 
  ArrowUpRight, 
  Code,
  BookOpen,
  MessageSquare,
  Cpu
} from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  const mainLinks = [
    { href: '/', label: 'Home' },
    { href: '/explore', label: 'Explore Apps' },
    { href: '/documentation', label: 'Documentation' },
    { href: '/benchmarks', label: 'Benchmarks' },
    { href: '/ai-news', label: 'AI News' },
    { href: '/blog', label: 'Blog' },
    { href: '/about', label: 'About' }
  ];
  
  const resourceLinks = [
    { href: '/privacy', label: 'Privacy Policy' },
    { href: '/terms', label: 'Terms of Service' },
    { href: '/faq', label: 'FAQ' },
    { href: '/contact', label: 'Contact Us' },
    { href: '/sitemap', label: 'Sitemap' }
  ];
  
  const socialLinks = [
    { href: 'https://github.com/dariogeorge21', icon: <Github className="w-5 h-5" />, label: 'GitHub' },
    { href: 'https://twitter.com/dariogeorge21', icon: <Twitter className="w-5 h-5" />, label: 'Twitter' },
    { href: 'https://linkedin.com/in/dariogeorge21', icon: <Linkedin className="w-5 h-5" />, label: 'LinkedIn' },
    { href: 'mailto:edu.dariogeorge21@gmail.com', icon: <Mail className="w-5 h-5" />, label: 'Email' }
  ];
  
  return (
    <footer className="relative mt-16 border-t border-gray-800">
      {/* Blue glow effect */}
      <div className="absolute top-0 left-1/4 w-1/2 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>
      <div className="absolute -top-20 right-10 sm:right-20 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl"></div>
      <div className="absolute -top-20 left-10 sm:left-20 w-40 h-40 bg-indigo-500/10 rounded-full blur-3xl"></div>
      
      {/* Main footer content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12">
          {/* Company / Brand section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-indigo-600 bg-clip-text text-transparent tech-title">
              AI Central Station
            </h3>
            <p className="text-gray-300 text-sm tech-text">
              A comprehensive resource for exploring, comparing, and leveraging AI tools in your workflow.
            </p>
            
            <div className="flex space-x-3 pt-4">
              {socialLinks.map((link) => (
                <a 
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-800/50 hover:bg-gray-700/70 p-2 rounded-full text-gray-400 hover:text-white transition-colors"
                  aria-label={link.label}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
          
          {/* Mobile layout: 2 columns side by side for navigation and resources */}
          <div className="sm:col-span-2 lg:col-span-1">
            <h4 className="text-white font-medium mb-4 tech-title">Navigation</h4>
            <ul className="space-y-2">
              {mainLinks.map((link) => (
                <li key={link.label}>
                  <Link 
                    href={link.href}
                    className="text-gray-400 hover:text-blue-400 transition-colors tech-text text-sm flex items-center"
                  >
                    <ArrowUpRight className="w-3 h-3 mr-2 flex-shrink-0" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Resources */}
          <div className="sm:col-span-2 lg:col-span-1">
            <h4 className="text-white font-medium mb-4 tech-title">Resources</h4>
            <ul className="space-y-2">
              {resourceLinks.map((link) => (
                <li key={link.label}>
                  <Link 
                    href={link.href}
                    className="text-gray-400 hover:text-blue-400 transition-colors tech-text text-sm flex items-center"
                  >
                    <ArrowUpRight className="w-3 h-3 mr-2 flex-shrink-0" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Newsletter / Contact */}
          <div className="space-y-4 sm:col-span-2 lg:col-span-1">
            <h4 className="text-white font-medium mb-4 tech-title">Stay Updated</h4>
            <p className="text-gray-400 text-sm tech-text">
              Subscribe to receive the latest AI tool updates and resources directly to your inbox.
            </p>
            <div className="relative mt-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full bg-gray-800/60 border border-gray-700/50 rounded-lg py-2 pl-3 pr-10 text-sm text-gray-100 focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
              <button
                className="absolute inset-y-0 right-0 flex items-center px-3 rounded-r-lg bg-blue-600 hover:bg-blue-700 transition-colors text-white text-sm"
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>
        
        {/* Features Section */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 mt-10 mb-10 sm:mt-12 sm:mb-12">
          <div className="glassmorphic-card-content p-3 sm:p-4 rounded-xl text-center">
            <Cpu className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400 mx-auto mb-2" />
            <div className="text-xs sm:text-sm text-gray-300 tech-text">AI Tools Directory</div>
          </div>
          <div className="glassmorphic-card-content p-3 sm:p-4 rounded-xl text-center">
            <BookOpen className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400 mx-auto mb-2" />
            <div className="text-xs sm:text-sm text-gray-300 tech-text">Documentation</div>
          </div>
          <div className="glassmorphic-card-content p-3 sm:p-4 rounded-xl text-center">
            <MessageSquare className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400 mx-auto mb-2" />
            <div className="text-xs sm:text-sm text-gray-300 tech-text">AI Assistance</div>
          </div>
          <div className="glassmorphic-card-content p-3 sm:p-4 rounded-xl text-center">
            <Code className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400 mx-auto mb-2" />
            <div className="text-xs sm:text-sm text-gray-300 tech-text">Technical Resources</div>
          </div>
        </div>
        
        {/* Bottom section */}
        <div className="pt-6 sm:pt-8 border-t border-gray-800/50 flex flex-col sm:flex-row justify-between items-center">
          <div className="text-gray-400 text-xs sm:text-sm tech-text text-center sm:text-left">
            &copy; {currentYear} AI Central Station by <span className="text-blue-400">Dario George</span>. All rights reserved.
          </div>
          <div className="flex items-center text-gray-400 text-xs sm:text-sm mt-3 sm:mt-0 tech-text">
            <span>Made with</span>
            <Heart className="w-3 h-3 sm:w-4 sm:h-4 text-red-500 mx-1" />
            <span>and</span>
            <Globe className="w-3 h-3 sm:w-4 sm:h-4 text-blue-400 mx-1" />
          </div>
        </div>
      </div>
    </footer>
  );
} 