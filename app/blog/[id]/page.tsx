// Remove the "use client" directive since this page doesn't actually need client-side interactivity
// The "use client" was only needed for the useEffect hook, but we can handle scrolling differently

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowLeft, ArrowRight, Clock, Calendar, User } from "lucide-react"
import { 
  DoodleElements, MarkerHighlight, NotebookLines, PushPin, HandDrawnCheck 
} from "@/components/ui/hand-drawn"
import blogPostsData from "@/data/blog-posts.json"
import type { Metadata } from "next"
import { BlogPostingStructuredData } from "@/components/structured-data"

type BlogPostData = {
  title: string
  category: string
  readTime: string
  date: string
  author: string
  color: string
  content: string[]
  keyTakeaways: string[]
}

// Export generateMetadata function for dynamic metadata
export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id: postId } = await params
  const post = (blogPostsData as Record<string, BlogPostData>)[postId]

  if (!post) {
    return {
      title: "Post Not Found",
      description: "The requested blog post could not be found.",
    }
  }

  const title = `${post.title} | SQRT Labs Blog`
  const description = post.content.slice(0, 2).join(" ") + "..."

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
      tags: [post.category, "Web3", "Blockchain"],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      creator: "@sqrtlabs",
    },
  }
}

export default async function BlogPostPage({ params }: { params: Promise<{ id: string }> }) {
  const { id: postId } = await params
  const post = (blogPostsData as Record<string, BlogPostData>)[postId]

  if (!post) {
    return (
      <div className="flex min-h-screen flex-col bg-background">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Post not found</h1>
            <Button asChild>
              <Link href="/blog">Back to Blog</Link>
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    )
  }

  const postIds = Object.keys(blogPostsData)
  const currentIndex = postIds.indexOf(postId)
  const prevPost = currentIndex > 0 ? postIds[currentIndex - 1] : null
  const nextPost = currentIndex < postIds.length - 1 ? postIds[currentIndex + 1] : null

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      {/* Structured Data */}
      <BlogPostingStructuredData 
        title={post.title}
        description={post.content.slice(0, 2).join(" ") + "..."}
        date={post.date}
        author={post.author}
      />
      <main className="flex-1">
        {/* Hero Section */}
        <section className={`relative py-16 md:py-24 overflow-hidden ${post.color}`}>
          <NotebookLines className="opacity-20" />
          <DoodleElements />

          <div className="container mx-auto max-w-3xl px-4 relative z-10">
            {/* Back button */}
            <div className="mb-8">
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-foreground hover:text-foreground/80 transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                <span className="text-sm font-medium">Back to Blog</span>
              </Link>
            </div>

            <div>
              <Badge variant="secondary" className="bg-white/80 mb-4">
                {post.category}
              </Badge>

              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold font-display mb-6 leading-tight">
                {post.title}
              </h1>

              <div className="flex flex-wrap items-center gap-4 text-sm text-foreground">
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4" />
                  <span>{post.author}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>{post.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>{post.readTime}</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="py-16 md:py-24 relative">
          <div className="container mx-auto max-w-3xl px-4">
            <div className="prose prose-lg max-w-none">
              {post.content.map((paragraph, i) => (
                <p
                  key={i}
                  className="text-foreground leading-relaxed mb-6"
                >
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Key Takeaways */}
            <div className="mt-12">
              <div className="relative">
                <PushPin className="absolute -top-4 left-4 w-6 h-6 z-10" color="text-green-500" />
                <div className="bg-green-50 p-6 shadow-lg">
                  <h2 className="text-xl font-bold mb-4 font-display">
                    <MarkerHighlight color="bg-green-200/40">Key Takeaways</MarkerHighlight>
                  </h2>
                  <ul className="space-y-3">
                    {post.keyTakeaways.map((takeaway, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <HandDrawnCheck className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                        <span className="text-foreground leading-relaxed">{takeaway}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Navigation */}
        <section className="py-12 border-t border-border">
          <div className="container mx-auto max-w-3xl px-4">
            <div className="flex justify-between items-center">
              {prevPost ? (
                <Link
                  href={`/blog/${prevPost}`}
                  className="group flex items-center gap-2 text-foreground hover:text-foreground/80 transition-colors"
                >
                  <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                  <span className="text-sm font-medium">Previous Post</span>
                </Link>
              ) : (
                <div />
              )}

              {nextPost ? (
                <Link
                  href={`/blog/${nextPost}`}
                  className="group flex items-center gap-2 text-foreground hover:text-foreground/80 transition-colors"
                >
                  <span className="text-sm font-medium">Next Post</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              ) : (
                <div />
              )}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 relative bg-muted/30">
          <NotebookLines className="opacity-15" />
          <div className="container mx-auto max-w-3xl px-4 text-center">
            <h2 className="text-2xl font-bold mb-4">Want to work with us?</h2>
            <p className="text-foreground mb-8">We help teams build secure, scalable blockchain products.</p>
            <Button
              size="lg"
              asChild
              className="rounded-xl px-8 bg-foreground text-background hover:bg-foreground/90 border-2 border-foreground shadow-[4px_4px_0px_0px] shadow-primary/40 hover:shadow-[2px_2px_0px_0px] transition-all"
            >
              <Link href="mailto:hello@sqrtlabs.xyz">
                Get in touch
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}