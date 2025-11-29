import { promises as fs } from 'fs'
import path from 'path'

// Define the shape of our routes
interface Route {
  url: string
  lastModified: string
  changeFrequency: 'yearly' | 'monthly' | 'weekly' | 'daily' | 'hourly' | 'always' | 'never'
  priority: number
}

// Static routes that we know about
const staticRoutes: Route[] = [
  {
    url: '/',
    lastModified: new Date().toISOString(),
    changeFrequency: 'weekly',
    priority: 1.0
  },
  {
    url: '/about',
    lastModified: new Date().toISOString(),
    changeFrequency: 'monthly',
    priority: 0.8
  },
  {
    url: '/projects',
    lastModified: new Date().toISOString(),
    changeFrequency: 'weekly',
    priority: 0.9
  },
  {
    url: '/blog',
    lastModified: new Date().toISOString(),
    changeFrequency: 'weekly',
    priority: 0.8
  }
]

// Function to get blog post routes dynamically
async function getBlogPostRoutes(): Promise<Route[]> {
  try {
    // Import the blog posts data
    const blogPosts = await import('@/data/blog-posts.json')
    
    return Object.keys(blogPosts.default).map(id => ({
      url: `/blog/${id}`,
      lastModified: new Date().toISOString(),
      changeFrequency: 'monthly',
      priority: 0.7
    }))
  } catch (error) {
    console.error('Error reading blog posts for sitemap:', error)
    return []
  }
}

// Function to get project routes dynamically
async function getProjectRoutes(): Promise<Route[]> {
  try {
    // Import the projects data
    const projects = await import('@/data/projects.json')
    
    return Object.keys(projects.default).map(id => ({
      url: `/projects/${id}`,
      lastModified: new Date().toISOString(),
      changeFrequency: 'monthly',
      priority: 0.7
    }))
  } catch (error) {
    console.error('Error reading projects for sitemap:', error)
    return []
  }
}

// Main function to generate the sitemap
export async function generateSitemap(): Promise<string> {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://sqrtlabs.com'
  
  // Get all routes
  const blogRoutes = await getBlogPostRoutes()
  const projectRoutes = await getProjectRoutes()
  const allRoutes = [...staticRoutes, ...blogRoutes, ...projectRoutes]
  
  // Generate the sitemap XML
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allRoutes.map(route => `  <url>
    <loc>${baseUrl}${route.url}</loc>
    <lastmod>${route.lastModified}</lastmod>
    <changefreq>${route.changeFrequency}</changefreq>
    <priority>${route.priority}</priority>
  </url>`).join('\n')}
</urlset>`
  
  return sitemap
}