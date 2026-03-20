import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'My Project',
  description: 'Next.js 16 with React 19 and Tailwind CSS 4.2',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>
        {children}
      </body>
    </html>
  )
}
