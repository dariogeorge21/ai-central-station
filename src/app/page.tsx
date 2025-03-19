import Link from 'next/link'
import Header from '@/components/Header'
import HeroSection from '@/components/HeroSection'
import ToolsSection from '@/components/ToolsSection'
import FeaturedTools from '@/components/FeaturedTools'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <FeaturedTools />
      <ToolsSection />
    </main>
  )
}
