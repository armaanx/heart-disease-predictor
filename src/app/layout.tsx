import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { cn } from '@/lib/utils'
import { ThemeProvider } from '@/components/Providers'
import NavBar from '@/components/NavBar'

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
        <ThemeProvider attribute="class" defaultTheme='system' enableSystem disableTransitionOnChange>
          <NavBar />
        {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
