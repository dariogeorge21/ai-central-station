import Link from 'next/link'
import HeroSection from '@/components/HeroSection'
import ToolsSection from '@/components/ToolsSection'
import FeaturedTools from '@/components/FeaturedTools'

export default function Home() {
  return (
    <>
      <HeroSection />
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6">
        <FeaturedTools />
        <ToolsSection />
      </div>
    </>
  )
}
