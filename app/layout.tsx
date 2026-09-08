import type { Metadata } from 'next'
import { Geist, Fraunces } from 'next/font/google'
import './globals.css'

const geist = Geist({
  subsets: ['latin'],
  variable: '--font-geist',
  display: 'swap',
})

const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-fraunces',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'StratoEdge Capital | Disciplined, Long-Term Investment Management',
  description:
    'StratoEdge Capital is an investment management firm focused on diversified, risk-managed portfolios. Capital is at risk. Returns are targets, not guarantees.',
  generator: 'v0.app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={`${geist.variable} ${fraunces.variable} bg-background`}
    >
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
