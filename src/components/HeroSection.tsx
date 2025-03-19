"use client"

import Link from 'next/link'
import Image from 'next/image'
import { TypeAnimation } from 'react-type-animation'

const HeroSection = () => {
  return (
    <div className="relative h-screen flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/ai-processor-bg.jpg"
          alt="AI Processor"
          fill
          className="object-cover"
          priority
        />
        {/* Overlay with blue gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-white max-w-4xl mx-auto px-8 md:px-16 lg:px-24">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-blue-600 font-jetbrains">
          Welcome to<br />AI Toolkit Hub
        </h1>
        <div className="text-xl md:text-2xl mb-8 text-gray-200 font-jetbrains h-20">
          <TypeAnimation
            sequence={[
              'Explore, experiment, and elevate your AI projects with our dynamic AI Toolkit Hub.',
              1000,
            ]}
            wrapper="span"
            speed={50}
            repeat={0}
            cursor={true}
            className="font-jetbrains"
          />
        </div>
        <Link 
          href="/explore"
          className="bg-gradient-to-r from-orange-500 to-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:from-orange-600 hover:to-blue-700 transition-all duration-300 shadow-lg inline-block"
        >
          Explore Now
        </Link>
      </div>
    </div>
  )
}

export default HeroSection 