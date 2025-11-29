import blogPostsData from '@/data/blog-posts.json'

export async function GET() {
  const posts = Object.entries(blogPostsData).map(([id, post]) => ({
    id,
    ...post
  }))

  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://sqrtlabs.com'

  const feed = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>SQRT Labs Blog</title>
    <description>Engineering notes, product insights, and Web3 development guides from SQRT Labs team.</description>
    <link>${baseUrl}/blog</link>
    <language>en</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${baseUrl}/blog/rss" rel="self" type="application/rss+xml"/>
    ${posts.map(post => `
    <item>
      <title><![CDATA[${post.title}]]></title>
      <description><![CDATA[${post.content.slice(0, 2).join(" ")}...]]></description>
      <link>${baseUrl}/blog/${post.id}</link>
      <guid>${baseUrl}/blog/${post.id}</guid>
      <pubDate>${new Date(post.date).toUTCString()}</pubDate>
      <author>${post.author}</author>
      <category>${post.category}</category>
    </item>
    `).join('')}
  </channel>
</rss>`

  return new Response(feed, {
    headers: {
      'Content-Type': 'application/xml',
    },
  })
}