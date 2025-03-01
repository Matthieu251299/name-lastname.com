import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Matthieu Rouxel',
  description: 'Personal Website of Matthieu Rouxel',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <meta property="og:title" content="Personal Website of Matthieu Rouxel" />
      <body className={inter.className} suppressHydrationWarning={true}>{children}</body>
    </html>
  )
}
