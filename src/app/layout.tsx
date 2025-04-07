import '@/app/globals.css'
import '@/styles/glassmorphic.css'
import type { Metadata } from 'next'
import { Space_Grotesk } from 'next/font/google'
import { JetBrains_Mono } from 'next/font/google'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ChatBot from '@/components/ChatBot'
import WelcomeMessage from '@/components/WelcomeMessage'

const spaceGrotesk = Space_Grotesk({
  variable: '--font-space-grotesk',
  subsets: ['latin'],
  display: 'swap',
})

// Configure JetBrains Mono for tech typography
const jetbrainsMono = JetBrains_Mono({
  variable: '--font-jetbrains',
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'AI Central Station - Explore AI Applications for Every Need',
  description: 'Discover a wide range of AI tools for productivity, creativity, coding, and more. Find the perfect AI assistant for your workflow.',
  icons: {
    icon: [
      { url: '/icon.svg' }
    ]
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${spaceGrotesk.variable} ${jetbrainsMono.variable} font-sans antialiased`}>
        <Header />
        <main className="min-h-screen w-full max-w-full overflow-hidden pt-14">
          {children}
        </main>
        <Footer />
        <ChatBot />
        <WelcomeMessage />
      </body>
    </html>
  )
}
