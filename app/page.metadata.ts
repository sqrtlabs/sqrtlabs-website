import type { Metadata } from "next"

export const homepageMetadata: Metadata = {
  title: "Home",
  description: "SQRT Labs is a Web3 development studio specializing in blockchain products that make sense in the real world. We build smart contracts, dApps, protocols, and miniapps.",
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
}