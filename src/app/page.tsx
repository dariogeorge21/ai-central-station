import Link from 'next/link'
import HeroSection from '@/components/HeroSection'
import ToolsSection from '@/components/ToolsSection'
import FeaturedTools from '@/components/FeaturedTools'
import { FiInfo, FiBook } from 'react-icons/fi'

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      
      {/* New Feature Announcement */}
      <div className="max-w-7xl mx-auto px-4 py-4 mb-8">
        <div className="bg-blue-900/30 border border-blue-500/30 rounded-lg p-4 flex items-start">
          <FiInfo className="text-blue-400 w-6 h-6 mr-3 mt-0.5 flex-shrink-0" />
          <div>
            <h3 className="text-blue-300 font-semibold mb-1 tech-title">New Feature: Detailed AI Tool Summaries</h3>
            <p className="text-gray-300 text-sm mb-2">
              We've added comprehensive summaries for all AI tools. Each summary includes detailed information about features, pricing, use cases, and technical insights.
            </p>
            <Link 
              href="/demo-tools" 
              className="text-blue-400 hover:text-blue-300 text-sm flex items-center transition-colors"
            >
              <FiBook className="mr-1 w-4 h-4" /> Check out the demo
            </Link>
          </div>
        </div>
      </div>
      
      <FeaturedTools />
      <ToolsSection />
    </div>
  )
}
