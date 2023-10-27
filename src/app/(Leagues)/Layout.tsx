import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Sidebar from '@/components/Sidebar'
import News from '@/components/News'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'league',
  description: 'Check football matches update',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <main className="pr-6 pl-20 lg:pl-[5rem] lg:px-[24rem] md:pl-24 py-4 md:w-[600px] flex-1">
        <h1 className='h-96 w-full'>hello</h1>
        {children}
    </main>
  )
}
