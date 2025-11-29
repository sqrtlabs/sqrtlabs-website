import Head from 'next/head'

interface SEOProps {
  title?: string
  description?: string
  image?: string
  url?: string
  type?: string
  author?: string
  publishedTime?: string
  tags?: string[]
}

export function SEO({
  title = "SQRT Labs | Web3 Development Studio",
  description = "We design and develop blockchain products that actually make sense in the real world. Smart contracts, dApps, protocol engineering, and miniapps.",
  image,
  url = process.env.NEXT_PUBLIC_SITE_URL || "https://sqrtlabs.com",
  type = "website",
  author,
  publishedTime,
  tags = []
}: SEOProps) {
  const fullTitle = title.includes("SQRT Labs") ? title : `${title} | SQRT Labs`
  const imageUrl = image || `${url}/opengraph-image`
  
  return (
    <Head>
      {/* Primary meta tags */}
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={description} />
      <meta name="keywords" content={["Web3", "Blockchain", "Smart Contracts", "dApps", "Ethereum", "Solidity", "DeFi", "Protocol Engineering", ...tags].join(", ")} />
      <meta name="author" content={author || "SQRT Labs"} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:site_name" content="SQRT Labs" />
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={fullTitle} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={imageUrl} />
      <meta property="twitter:site" content="@sqrtlabs" />
      
      {/* Article specific tags */}
      {type === "article" && (
        <>
          {author && <meta property="article:author" content={author} />}
          {publishedTime && <meta property="article:published_time" content={publishedTime} />}
          {tags.map((tag, index) => (
            <meta key={index} property="article:tag" content={tag} />
          ))}
        </>
      )}
      
      {/* Viewport and other technical tags */}
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="canonical" href={url} />
    </Head>
  )
}