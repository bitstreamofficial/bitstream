import { Inter } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: {
    default: 'BitStream - Building scalable mobile & web solutions',
    template: '%s | BitStream'
  },
  description: 'BitStream specializes in building scalable mobile and web solutions. We create innovative digital experiences that drive business growth.',
  keywords: ['web development', 'mobile development', 'scalable solutions', 'BitStream'],
  authors: [{ name: 'BitStream Team' }],
  creator: 'BitStream',
  icons: {
    icon: [
      { url: '/images/url_logo.png', type: 'image/png' },
      { url: '/icons/favicon.ico', sizes: 'any' }
    ],
    apple: '/icons/icon-192x192.png',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://bitstream.com',
    title: 'BitStream - Building scalable mobile & web solutions',
    description: 'BitStream specializes in building scalable mobile and web solutions.',
    siteName: 'BitStream',
    images: [
      {
        url: '/images/logo.png',
        width: 1200,
        height: 630,
        alt: 'BitStream Logo',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BitStream - Building scalable mobile & web solutions',
    description: 'BitStream specializes in building scalable mobile and web solutions.',
    creator: '@bitstream',
    images: ['/images/logo.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="light" suppressHydrationWarning>
      <body className={inter.className}>
        <div className="min-h-screen flex flex-col bg-white">
          <Header />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
