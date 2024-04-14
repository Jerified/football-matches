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
      <body className={`${inter.className} min-h-screen bg-[#165D31] overflow-x-hidde px-4`}>
        <main className='max-w-7xl mx-auto'>
          <Navbar />
          <section className=' lg:flex'>
            {/* <Sidebar /> */}
            {children}
            <News />
          </section>
        </main>
        </body>
    </html>
  )
}
