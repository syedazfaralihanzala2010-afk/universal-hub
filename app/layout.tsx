import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Universal Hub | The Global Super App',
  description: 'The ultimate platform for Video Conferencing, Real-time Collaboration, and Global Finance.',
  viewport: 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0', // Crucial for mobile app feel
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
