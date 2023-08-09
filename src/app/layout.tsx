"use client"

import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Web Page Template',
  description: 'Criado por Daniel Santana',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html className="scroll-smooth" lang="en">
      <body className={`bg-zinc-800 ${inter.className}`}>{children}</body>
    </html>
  )
}
