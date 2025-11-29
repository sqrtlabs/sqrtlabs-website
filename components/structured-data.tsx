import Script from 'next/script'

// Organization Schema
export function OrganizationStructuredData() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "SQRT Labs",
    "url": process.env.NEXT_PUBLIC_SITE_URL || "https://sqrtlabs.com",
    "logo": `${process.env.NEXT_PUBLIC_SITE_URL || "https://sqrtlabs.com"}/opengraph-image`,
    "sameAs": [
      "https://twitter.com/sqrtlabs",
      "https://github.com/sqrtlabs",
      // Add other social profiles here
    ],
    "description": "Web3 development studio specializing in blockchain products that make sense in the real world."
  }

  return (
    <Script
      id="organization-structured-data"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}

// WebSite Schema
export function WebSiteStructuredData() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "SQRT Labs",
    "url": process.env.NEXT_PUBLIC_SITE_URL || "https://sqrtlabs.com",
    "description": "Web3 development studio specializing in blockchain products that make sense in the real world.",
    "publisher": {
      "@type": "Organization",
      "name": "SQRT Labs",
      "logo": {
        "@type": "ImageObject",
        "url": `${process.env.NEXT_PUBLIC_SITE_URL || "https://sqrtlabs.com"}/opengraph-image`
      }
    }
  }

  return (
    <Script
      id="website-structured-data"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}

// BlogPosting Schema
export function BlogPostingStructuredData({ 
  title, 
  description, 
  date, 
  author,
  image
}: { 
  title: string; 
  description: string; 
  date: string; 
  author: string;
  image?: string;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": title,
    "description": description,
    "datePublished": date,
    "dateModified": date,
    "author": {
      "@type": "Person",
      "name": author
    },
    "publisher": {
      "@type": "Organization",
      "name": "SQRT Labs",
      "logo": {
        "@type": "ImageObject",
        "url": `${process.env.NEXT_PUBLIC_SITE_URL || "https://sqrtlabs.com"}/opengraph-image`
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `${process.env.NEXT_PUBLIC_SITE_URL || "https://sqrtlabs.com"}/blog`
    },
    ...(image && {
      "image": {
        "@type": "ImageObject",
        "url": image
      }
    })
  }

  return (
    <Script
      id="blog-posting-structured-data"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}

// Article Schema
export function ArticleStructuredData({ 
  title, 
  description, 
  date, 
  author,
  image
}: { 
  title: string; 
  description: string; 
  date: string; 
  author: string;
  image?: string;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": title,
    "description": description,
    "datePublished": date,
    "dateModified": date,
    "author": {
      "@type": "Person",
      "name": author
    },
    "publisher": {
      "@type": "Organization",
      "name": "SQRT Labs",
      "logo": {
        "@type": "ImageObject",
        "url": `${process.env.NEXT_PUBLIC_SITE_URL || "https://sqrtlabs.com"}/opengraph-image`
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": process.env.NEXT_PUBLIC_SITE_URL || "https://sqrtlabs.com"
    },
    ...(image && {
      "image": {
        "@type": "ImageObject",
        "url": image
      }
    })
  }

  return (
    <Script
      id="article-structured-data"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}