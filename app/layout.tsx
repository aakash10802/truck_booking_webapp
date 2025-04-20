import type { Metadata } from 'next'
import {
  ClerkProvider  
} from '@clerk/nextjs'
import { Poppins  } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'

const poppins = Poppins({
  variable: '--font-poppins',
  subsets: ['latin'],
  weight:['100']
})



export const metadata: Metadata = {
  title: 'Truck.in',
  description: 'Truck.in is a web application that allows you to track your trucks location and status in real-time.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${poppins.variable} antialiased`}>
          <Header />
          {children}
        </body>
      </html>
    </ClerkProvider>
  )
}