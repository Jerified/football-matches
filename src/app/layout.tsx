import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Sidebar from '@/components/Sidebar'
import News from '@/components/News'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Football Update',
  description: 'Check football matches update',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className='h-screen bg-[#F2F2F2] overflow-x-hidden'>
          <Navbar />
          <section className='flex space-x-4 '>
            <Sidebar />
            {children}
            <News />
          </section>
        </main>
        </body>
    </html>
  )
}
