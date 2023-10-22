import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { cn } from '@/lib/utils'
import { Providers } from '@/components/Providers'
import NavBar from '@/components/NavBar'
import { Toaster } from '@/components/ui/toaster'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Heart Disease Predictor',
  description: '',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn('min-h-screen antialiased bg-background  bg-grainy dark:bg-none', inter.className)}>
        <Providers attribute="class" defaultTheme='system' enableSystem disableTransitionOnChange>
          <NavBar />
          {children}
          <Toaster />
        </Providers>
      </body>
    </html>
  )
}
