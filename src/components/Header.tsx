'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  // Close mobile menu when screen size changes to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMobileMenuOpen(false)
      }
    }

    // Track scroll position to add background opacity
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener('resize', handleResize)
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('resize', handleResize)
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  // Handle keyboard events for accessibility
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Close mobile menu when Escape key is pressed
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false)
      }
    }

    window.addEventListener('keydown', handleKeyDown)

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [mobileMenuOpen])

  // Prevent body scrolling when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }

    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileMenuOpen])

  // Menu items array for DRY code
  const menuItems = [
    { href: '/', label: 'Home' },
    { href: '/explore', label: 'Explore Apps' },
    { href: '/documentation', label: 'Documentation' },
    { href: '/benchmarks', label: 'Benchmarks' },
    { href: '/ai-news', label: 'AI News' },
    { href: '/blog', label: 'Blog' },
    { href: '/about', label: 'About' }
  ]

  return (
    <header className={`fixed w-full backdrop-blur-md z-50 border-b transition-all duration-300 ${
      scrolled
        ? 'bg-gray-900/90 border-gray-800'
        : 'bg-gray-900/70 border-gray-800/50'
    }`}>
      <div className="container mx-auto px-4 py-3 md:py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center space-x-2 z-10">
            <span className="text-xl md:text-2xl font-bold bg-gradient-to-r from-blue-400 to-indigo-600 bg-clip-text text-transparent tech-title">
              AI Central Station
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-2 lg:space-x-8">
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="px-3 py-2 text-sm lg:text-base text-gray-300 hover:text-blue-400 transition-colors duration-200 font-medium rounded-md hover:bg-gray-800/50 tech-text"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Mobile menu button */}
          <button
            className={`md:hidden p-2 rounded-md z-10 transition-all duration-300 ${mobileMenuOpen ? 'bg-blue-600 text-white' : 'text-gray-300 hover:text-blue-400 hover:bg-gray-800/50'}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Menu"
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-menu"
          >
            <motion.div
              animate={mobileMenuOpen ? "open" : "closed"}
              variants={{
                open: { rotate: 90 },
                closed: { rotate: 0 }
              }}
              transition={{ duration: 0.2 }}
            >
              {mobileMenuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </motion.div>
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {/* Backdrop overlay */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden"
            onClick={() => setMobileMenuOpen(false)} // Close when clicking outside
            aria-hidden="true"
          />
        )}

        {/* Menu panel */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: -300 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -300 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            id="mobile-menu"
            className="fixed left-0 top-[57px] h-[calc(100vh-57px)] w-4/5 max-w-sm bg-gray-900/95 border-r border-gray-800 z-50 md:hidden overflow-hidden"
          >
            <div className="flex flex-col h-full overflow-y-auto">
              <nav className="flex flex-col p-4 space-y-2">
                {menuItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="py-4 px-4 text-gray-300 font-medium border-b border-gray-800/50 hover:bg-gray-800/70 hover:text-blue-400 rounded-md transition-all tech-text flex items-center"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>

              {/* Additional mobile menu content */}
              <div className="mt-auto p-6 border-t border-gray-800/50">
                <div className="text-sm text-gray-500 tech-text">
                  <p>AI Central Station</p>
                  <p className="mt-1">Your hub for AI tools and resources</p>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

export default Header