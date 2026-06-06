import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'

const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'] })
const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

// Separating viewport config is required in Next.js 14+
export const viewport: Viewport = {
  themeColor: '#7C6CF2', // Matches your primary muted purple color
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
}

export const metadata: Metadata = {
  metadataBase: new URL('http://arc.acem.edu.np'), 
  
  title: {
    default: 'Advanced Robotics Club | ACEM',
    template: '%s | ARC ACEM',
  },
  description: 'An educational organization within Advanced College of Engineering and Management (ACEM) providing a platform for STEM innovators, robotics enthusiasts, and future engineers since 2012.',
  keywords: [
    'Robotics Club', 
    'ACEM', 
    'Nepal Engineering', 
    'STEM', 
    'Technorion Nepal', 
    'Arduino', 
    'PCB Design', 
    'AI', 
    'Embedded Systems'
  ],
  authors: [{ name: 'Advanced Robotics Club' }],
  creator: 'Advanced Robotics Club',
  
  // OpenGraph (Facebook, LinkedIn, Discord, etc.)
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'http://arc.acem.edu.np',
    title: 'Advanced Robotics Club | ACEM',
    description: 'Building Intelligent Machines for Tomorrow. Explore our hands-on robotics, AI, and embedded systems projects.',
    siteName: 'Advanced Robotics Club',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Advanced Robotics Club ACEM',
      },
    ],
  },
  
  // Twitter / X
  twitter: {
    card: 'summary_large_image',
    title: 'Advanced Robotics Club | ACEM',
    description: 'Building Intelligent Machines for Tomorrow. Explore our hands-on robotics, AI, and embedded systems projects.',
    images: ['/og-image.jpg'], 
  },
  
  // Icons (Favicon & Apple Touch)
  icons: {
    icon: '/arc.png',
    shortcut: '/arc.png',
    apple: '/arc.png',
  },
  
  // SEO Indexing Rules
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} bg-background scroll-smooth`}>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}