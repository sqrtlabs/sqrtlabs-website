import type { Metadata } from "next"

export const blogMetadata: Metadata = {
  title: "Blog | SQRT Labs",
  description: "Engineering notes, product insights, and Web3 development guides from SQRT Labs team.",
  openGraph: {
    title: "Blog | SQRT Labs",
    description: "Engineering notes, product insights, and Web3 development guides from SQRT Labs team.",
    url: `${process.env.NEXT_PUBLIC_SITE_URL || "https://sqrtlabs.com"}/blog`,
    siteName: "SQRT Labs",
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_SITE_URL || "https://sqrtlabs.com"}/opengraph-image`,
        width: 1200,
        height: 630,
        alt: "SQRT Labs Blog",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog | SQRT Labs",
    description: "Engineering notes, product insights, and Web3 development guides from SQRT Labs team.",
    creator: "@sqrtlabs",
    images: [`${process.env.NEXT_PUBLIC_SITE_URL || "https://sqrtlabs.com"}/twitter-image`],
  },
}