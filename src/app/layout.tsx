import '@/app/globals.css'
import '@/styles/glassmorphic.css'
import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { JetBrains_Mono } from 'next/font/google'
import Header from '@/components/Header'
import ChatBot from '@/components/ChatBot'
import WelcomeMessage from '@/components/WelcomeMessage'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

// Configure JetBrains Mono for tech typography
const jetbrainsMono = JetBrains_Mono({
  variable: '--font-jetbrains',
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'AI Tools Hub - Explore AI Applications for Every Need',
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
      <body className={`${geistSans.variable} ${geistMono.variable} ${jetbrainsMono.variable} antialiased`}>
        <Header />
        <main className="min-h-screen w-full max-w-full overflow-hidden pt-14">
          {children}
        </main>
        <ChatBot />
        <WelcomeMessage />
      </body>
    </html>
  )
}
