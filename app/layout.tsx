import type React from "react"
import type { Metadata } from "next"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

import { Raleway, Syne, Geist as V0_Font_Geist, Geist_Mono as V0_Font_Geist_Mono, Source_Serif_4 as V0_Font_Source_Serif_4 } from 'next/font/google'
import { OrganizationStructuredData, WebSiteStructuredData } from "@/components/structured-data"

// Initialize fonts
const _geist = V0_Font_Geist({ subsets: ['latin'], weight: ["100","200","300","400","500","600","700","800","900"] })
const _geistMono = V0_Font_Geist_Mono({ subsets: ['latin'], weight: ["100","200","300","400","500","600","700","800","900"] })
const _sourceSerif_4 = V0_Font_Source_Serif_4({ subsets: ['latin'], weight: ["200","300","400","500","600","700","800","900"] })

const raleway = Raleway({ subsets: ["latin"], variable: "--font-raleway" })
const syne = Syne({ subsets: ["latin"], variable: "--font-display" })

export const metadata: Metadata = {
  title: {
    default: "SQRT Labs | Web3 Development Studio",
    template: "%s | SQRT Labs",
  },
  description: "We design and develop blockchain products that actually make sense in the real world. Smart contracts, dApps, protocol engineering, and miniapps.",
  keywords: ["Web3", "Blockchain", "Smart Contracts", "dApps", "Ethereum", "Solidity", "DeFi", "Protocol Engineering"],
  authors: [{ name: "SQRT Labs" }],
  creator: "SQRT Labs",
  publisher: "SQRT Labs",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "SQRT Labs | Web3 Development Studio",
    description: "We design and develop blockchain products that actually make sense in the real world. Smart contracts, dApps, protocol engineering, and miniapps.",
    url: process.env.NEXT_PUBLIC_SITE_URL || "https://sqrtlabs.com",
    siteName: "SQRT Labs",
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_SITE_URL || "https://sqrtlabs.com"}/opengraph-image`,
        width: 1200,
        height: 630,
        alt: "SQRT Labs - Web3 Development Studio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SQRT Labs | Web3 Development Studio",
    description: "We design and develop blockchain products that actually make sense in the real world. Smart contracts, dApps, protocol engineering, and miniapps.",
    creator: "@sqrtlabs",
    images: [`${process.env.NEXT_PUBLIC_SITE_URL || "https://sqrtlabs.com"}/twitter-image`],
  },
  alternates: {
    canonical: process.env.NEXT_PUBLIC_SITE_URL || "https://sqrtlabs.com",
    types: {
      "application/rss+xml": `${process.env.NEXT_PUBLIC_SITE_URL || "https://sqrtlabs.com"}/blog/rss`,
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${raleway.variable} ${syne.variable}`}>
      <body className={`${_geist.className} min-h-screen bg-background antialiased`}>
        <OrganizationStructuredData />
        <WebSiteStructuredData />
        {children}
        <Analytics />
      </body>
    </html>
  )
}