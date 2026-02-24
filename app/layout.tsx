import type { Metadata } from 'next'
import './globals.css'
import CosmicBadge from '@/components/CosmicBadge'

export const metadata: Metadata = {
  title: 'Company Pro — Digital Experiences That Matter',
  description:
    'We build digital experiences that matter. Web development, brand design, and digital marketing services to help your business grow.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const bucketSlug = process.env.COSMIC_BUCKET_SLUG as string

  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <script src="/dashboard-console-capture.js" />
      </head>
      <body className="min-h-screen bg-white font-sans">
        {children}
        <CosmicBadge bucketSlug={bucketSlug} />
      </body>
    </html>
  )
}