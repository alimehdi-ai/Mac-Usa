import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
})

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-poppins',
})

export const metadata: Metadata = {
  title: 'Mac USA Rags | Premium Thrift Clothing Exports to Africa',
  description: 'Mac USA Rags is a US-based thrift clothing export company specializing in quality secondhand clothing exports to Africa. Premium, Grade 1, and Mixed Rags available.',
  keywords: 'thrift clothing, secondhand clothes, clothing export, Africa export, wholesale clothing, used clothes wholesale, Mac USA Rags, Houston clothing exporter',
  authors: [{ name: 'Mac USA Rags' }],
  openGraph: {
    title: 'Mac USA Rags | Premium Thrift Clothing Exports',
    description: 'Quality secondhand clothing exports to Africa. Premium, Grade 1, and Mixed Rags available.',
    type: 'website',
    locale: 'en_US',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${poppins.variable} font-sans`}>
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  )
}
