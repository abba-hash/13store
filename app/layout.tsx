import type { Metadata } from 'next'
import {  Inter } from 'next/font/google'
import './globals.css'
import Footer from '@/components/footer'

const Interfont = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: '13 Store',
  description: '13 Store',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={Interfont.className}>
        {children}
        <Footer/>
      </body>
    </html>
  )
}
