import type { Metadata } from 'next'
import './globals.css'
import { Providers } from '@/components/Providers'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import FloatingCTA from '@/components/FloatingCTA'

export const metadata: Metadata = {
  title: {
    default: 'Al-Hamd Rheumatology & Polyclinic | Bahadurabad, Karachi',
    template: '%s | Al-Hamd Polyclinic',
  },
  description:
    'Expert rheumatology and specialist healthcare in Bahadurabad, Karachi. Specialists in Rheumatology, Neurology, Endocrinology, Dermatology, Pediatrics, Physiotherapy & more.',
  keywords: ['rheumatology', 'polyclinic', 'Karachi', 'Bahadurabad', 'doctors', 'specialist'],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
          crossOrigin="anonymous"
        />
      </head>
      <body>
        <Providers>
          <Navbar />
          {children}
          <Footer />
          <FloatingCTA />
        </Providers>
      </body>
    </html>
  )
}
