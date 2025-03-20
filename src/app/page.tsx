import Link from 'next/link'
import Header from '@/components/Header'
import HeroSection from '@/components/HeroSection'
import ToolsSection from '@/components/ToolsSection'
import FeaturedTools from '@/components/FeaturedTools'

export default function Home() {
  return (
    <main className="min-h-screen w-full max-w-full overflow-hidden">
      <Header />
      <HeroSection />
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6">
        <FeaturedTools />
        <ToolsSection />
      </div>
    </main>
  )
}
