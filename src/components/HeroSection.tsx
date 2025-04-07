"use client"

import Image from 'next/image'
import { TypeAnimation } from 'react-type-animation'
import Link from 'next/link'

const HeroSection = () => {
  return (
    <div className="relative min-h-[90vh] lg:h-screen flex items-center w-full max-w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/ai-processor.jpg"
          alt="AI Processor"
          fill
          className="object-cover"
          priority
          sizes="100vw"
          quality={90}
        />
        {/* Overlay with improved contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/80" />
        {/* Additional overlay for better text readability */}
        <div className="absolute inset-0 bg-black/30 backdrop-blur-[2px]" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-white w-full max-w-screen-xl mx-auto px-5 sm:px-6 md:px-8 lg:px-12 py-16 sm:py-20 md:py-24">
        <div className="max-w-3xl mx-auto text-center sm:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-600 tech-title leading-tight">
            Welcome to<br className="hidden sm:block" /> AI Central Station
          </h1>
          <div className="text-base sm:text-lg md:text-xl lg:text-2xl mb-6 sm:mb-8 text-gray-100 tech-text min-h-[5rem] sm:min-h-[6rem]">
            <TypeAnimation
              sequence={[
                'Explore, experiment, and elevate your AI projects with our dynamic AI Central Station.',
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={0}
              cursor={true}
              className="tech-text"
            />
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-6 sm:mt-8 justify-center sm:justify-start">
            <Link 
              href="/explore" 
              className="bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white font-medium py-3 px-6 rounded-lg transition-all duration-300 text-center shadow-lg shadow-blue-500/20"
            >
              Explore AI Tools
            </Link>
            <Link 
              href="/documentation" 
              className="bg-gray-800/70 hover:bg-gray-700/70 text-white font-medium py-3 px-6 rounded-lg transition-all duration-300 text-center shadow-lg border border-gray-700/50"
            >
              Browse Documentation
            </Link>
          </div>
          
          {/* Quick Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-12 sm:mt-16 text-center">
            <div className="glassmorphic-card-content p-4">
              <div className="text-2xl sm:text-3xl font-bold text-blue-400">500+</div>
              <div className="text-xs sm:text-sm text-gray-300">AI Tools</div>
            </div>
            <div className="glassmorphic-card-content p-4">
              <div className="text-2xl sm:text-3xl font-bold text-indigo-400">30+</div>
              <div className="text-xs sm:text-sm text-gray-300">Categories</div>
            </div>
            <div className="glassmorphic-card-content p-4">
              <div className="text-2xl sm:text-3xl font-bold text-blue-400">Weekly</div>
              <div className="text-xs sm:text-sm text-gray-300">Updates</div>
            </div>
            <div className="glassmorphic-card-content p-4">
              <div className="text-2xl sm:text-3xl font-bold text-indigo-400">Free</div>
              <div className="text-xs sm:text-sm text-gray-300">Resources</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 hidden md:block animate-bounce">
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </div>
  )
}

export default HeroSection 