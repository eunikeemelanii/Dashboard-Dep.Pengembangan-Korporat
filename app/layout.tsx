import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Dashboard Pengembangan Korporat",
  description: "Dashboard untuk pengembangan korporat berbasis data",
  icons: {
    icon: [
      {
        url: "https://storage.googleapis.com/pkg-portal-bucket/images/news/2013-07/saat-ini-pt-petrokimia-gresik-belum-membuka-recruitment-baru/logo_pkg.jpg",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "https://storage.googleapis.com/pkg-portal-bucket/images/news/2013-07/saat-ini-pt-petrokimia-gresik-belum-membuka-recruitment-baru/logo_pkg.jpg",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "https://storage.googleapis.com/pkg-portal-bucket/images/news/2013-07/saat-ini-pt-petrokimia-gresik-belum-membuka-recruitment-baru/logo_pkg.jpg",
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
