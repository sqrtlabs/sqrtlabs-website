import type { Metadata } from "next"

export const projectsMetadata: Metadata = {
  title: "Projects | SQRT Labs",
  description: "Explore our portfolio of blockchain projects including DeFi protocols, dApps, and Web3 infrastructure.",
  openGraph: {
    title: "Projects | SQRT Labs",
    description: "Explore our portfolio of blockchain projects including DeFi protocols, dApps, and Web3 infrastructure.",
    url: `${process.env.NEXT_PUBLIC_SITE_URL || "https://sqrtlabs.com"}/projects`,
    siteName: "SQRT Labs",
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_SITE_URL || "https://sqrtlabs.com"}/opengraph-image`,
        width: 1200,
        height: 630,
        alt: "SQRT Labs Projects Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Projects | SQRT Labs",
    description: "Explore our portfolio of blockchain projects including DeFi protocols, dApps, and Web3 infrastructure.",
    creator: "@sqrtlabs",
    images: [`${process.env.NEXT_PUBLIC_SITE_URL || "https://sqrtlabs.com"}/twitter-image`],
  },
}