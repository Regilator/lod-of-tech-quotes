import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/react'
import './globals.css'

export const metadata: Metadata = {
  title: { default: 'Lod of Tech Quotes', template: '%s | Lod of Tech Quotes' },
  description: 'A considered collection of words by Lod of Tech, property of Regilator Tech Industries.',
  metadataBase: new URL('https://quotes.lodoftech.com'),
  openGraph: { title: 'Lod of Tech Quotes', description: 'Words for the moments that matter.', type: 'website' },
  twitter: { card: 'summary_large_image', title: 'Lod of Tech Quotes', description: 'Words for the moments that matter.' },
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" className="bg-paper"><body className="font-sans antialiased"><Analytics />{children}</body></html>
}

