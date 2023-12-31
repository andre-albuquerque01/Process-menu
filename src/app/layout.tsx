"use client";
import React, { Suspense } from "react";
// import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Index } from './components/Nav/Index'
import { Footer } from './components/Footer/Footer'
import { CarProvider } from './context/CarContext'
import { CookiesProvider } from 'react-cookie';

const inter = Inter({ subsets: ['latin'] })

// export const metadata: Metadata = {
//   title: 'Take the Phone',
//   description: 'Generated by create next app',
// }

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>
        <CookiesProvider defaultSetOptions={{ path: '/' }}>
          <CarProvider>
            <Index />
            <Suspense fallback={<p className="loading">Loading...</p>}>
              {children}
            </Suspense>
            <Footer />
          </CarProvider>
        </CookiesProvider>
      </body>
    </html>
  )
}
