import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Badge } from "@/components/ui/badge"
import { Code2, Lightbulb, MessageSquare, LineChart, ArrowRight } from "lucide-react"
import Link from "next/link"
import {
  DoodleElements,
  HandDrawnUnderline,
  HandDrawnCircle,
  StickyNote,
  Annotation,
  MarkerHighlight,
  ScribbleDecoration,
  NumberedCallout,
  ThoughtBubble,
  NotebookLines,
  SketchyCard,
  PushPin,
  HandDrawnCheck,
} from "@/components/ui/hand-drawn"
import { Pagination } from "@/components/pagination"
import blogPostsData from "@/data/blog-posts.json"
import { blogMetadata } from "./page.metadata"

export const metadata = blogMetadata

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

const categories = [
  {
    icon: Code2,
    title: "Engineering Notes",
    description: "Deep dives, smart contract patterns, infra guides, debugging stories.",
    color: "bg-blue-50",
    annotation: "tech stuff",
  },
  {
    icon: Lightbulb,
    title: "Product Thinking in Web3",
    description: "How to build apps people actually use. Real examples. No buzzwords.",
    color: "bg-yellow-50",
    annotation: "ideas",
  },
  {
    icon: MessageSquare,
    title: "Farcaster & Miniapps",
    description: "Experiments, ideas, and lessons from building x402-first apps.",
    color: "bg-purple-50",
    annotation: "social",
  },
  {
    icon: LineChart,
    title: "DeFi & Protocol Design",
    description: "Tokenomics, risk logic, simulations, and design principles.",
    color: "bg-green-50",
    annotation: "defi",
  },
]

const blogPosts = Object.entries(blogPostsData as Record<string, BlogPostData>).map(([id, data]) => ({
  id,
  title: data.title,
  category: data.category,
  readTime: data.readTime,
  color: data.color,
  date: data.date,
}))

const POSTS_PER_PAGE = 6

export default function BlogPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-24 md:py-32 overflow-hidden">
          <NotebookLines className="opacity-20" />
          <DoodleElements />

          {/* Floating sticky note */}
          <div className="absolute top-20 right-12 hidden lg:block z-20">
            <StickyNote color="bg-orange-100" rotation={5}>
              <span className="text-xs font-mono">real notes</span>
              <br />
              <span className="text-xs">no SEO fluff</span>
            </StickyNote>
          </div>

          {/* Thought bubble */}
          <div className="absolute top-1/4 left-8 hidden xl:block w-32">
            <ThoughtBubble className="text-muted-foreground/50">
              <span className="text-xs font-mono">ideas</span>
            </ThoughtBubble>
          </div>

          <div className="container mx-auto max-w-6xl px-4 relative z-10">
            <div className="mx-auto max-w-3xl text-center">
              <div className="flex items-center justify-center gap-3 mb-4">
                <NumberedCallout number={1} />
                <span className="font-mono text-xs text-foreground">{"// blog"}</span>
              </div>

              <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl font-display relative inline-block">
                <span className="relative">
                  Blog
                  <HandDrawnCircle className="absolute -inset-4 w-[calc(100%+2rem)] h-[calc(100%+2rem)] text-primary/30" />
                </span>
                <ScribbleDecoration variant={2} className="absolute -right-8 top-0 w-6 h-6 text-secondary/40" />
              </h1>

              <p className="text-lg text-foreground md:text-xl">
                We write when we learn something worth sharing. Expect{" "}
                <MarkerHighlight color="bg-green-200/40">real engineering notes</MarkerHighlight>, not SEO fluff.
              </p>
              
              {/* RSS Feed Link */}
              <div className="mt-6">
                <Link 
                  href="/blog/rss" 
                  className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                    <circle cx="6" cy="18" r="3" />
                    <circle cx="18" cy="18" r="3" />
                    <path d="M6 3v12m0 3c3.314 0 6-2.686 6-6 0-3.314-2.686-6-6-6Zm12 0c-3.314 0-6 2.686-6 6 0 3.314 2.686 6 6 6Z" />
                  </svg>
                  Subscribe via RSS
                </Link>
              </div>
            </div>
          </div>

          {/* Bottom wavy line */}
          <div className="absolute bottom-0 left-0 right-0">
            <svg className="w-full h-6" viewBox="0 0 1200 24" fill="none" preserveAspectRatio="none">
              <path
                d="M0 12C200 20 400 4 600 12C800 20 1000 4 1200 12"
                stroke="currentColor"
                strokeWidth="1.5"
                className="text-border"
                fill="none"
              />
            </svg>
          </div>
        </section>

        {/* Categories Section */}
        <section className="relative pb-24 overflow-hidden">
          <DoodleElements />

          <div className="absolute top-4 left-8 hidden lg:block">
            <Annotation arrowDirection="right" className="text-foreground/60">
              pick a topic
            </Annotation>
          </div>

          <div className="container mx-auto max-w-6xl px-4 relative z-10">
            <div className="flex items-center gap-3 mb-8">
              <NumberedCallout number={2} />
              <h2 className="text-2xl font-bold tracking-tight font-display">Categories</h2>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {categories.map((category, index) => (
                <div
                  key={category.title}
                  className="relative cursor-pointer"
                >
                  <PushPin
                    className="absolute -top-3 left-1/2 -translate-x-1/2 w-6 h-6 z-20"
                    color={index % 2 === 0 ? "text-red-500" : "text-blue-500"}
                  />

                  <div className={`${category.color} p-6 shadow-md relative h-full`}>
                    <svg
                      className="absolute inset-0 w-full h-full pointer-events-none"
                      viewBox="0 0 200 180"
                      fill="none"
                      preserveAspectRatio="none"
                    >
                      <path
                        d="M5 10C40 5 160 8 195 6C198 40 196 140 195 175C160 178 40 176 5 174C2 140 4 40 5 10"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        fill="none"
                        className="text-gray-400/40"
                      />
                    </svg>

                    <div className="absolute -top-3 -right-2 z-20">
                      <span className="bg-white px-2 py-1 text-xs font-mono rotate-3 inline-block border border-gray-300 shadow-sm">
                        {category.annotation}
                      </span>
                    </div>

                    <div className="relative z-10">
                      <div className="mb-4 relative inline-block">
                        <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-white/80">
                          <category.icon className="h-6 w-6 text-foreground" />
                        </div>
                        <HandDrawnCircle
                          className="absolute -inset-2 w-16 h-16 text-gray-400/30"
                        />
                      </div>
                      <h3 className="mb-2 font-semibold text-foreground relative inline-block">
                        {category.title}
                        <HandDrawnUnderline className="absolute -bottom-1 left-0 w-full h-2 text-gray-400/40" />
                      </h3>
                      <p className="text-sm text-foreground leading-relaxed">{category.description}</p>
                    </div>

                    <ScribbleDecoration
                      variant={((index % 4) + 1) as 1 | 2 | 3 | 4}
                      className="absolute bottom-2 right-2 w-5 h-5 text-gray-400/30"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Blog Posts Section */}
        <section className="relative py-24 overflow-hidden">
          <NotebookLines className="opacity-15" />

          <div className="absolute top-16 right-16 hidden lg:block">
            <StickyNote color="bg-blue-100" rotation={-3}>
              <span className="text-xs">latest</span>
              <br />
              <span className="text-xs font-bold">posts</span>
            </StickyNote>
          </div>

          <div className="container mx-auto max-w-6xl px-4 relative z-10">
            <div className="flex items-center gap-3 mb-8">
              <NumberedCallout number={3} />
              <h2 className="text-2xl font-bold tracking-tight font-display">Latest Posts</h2>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {blogPosts.slice(0, 6).map((post, index) => (
                <div
                  key={post.title}
                  className="relative group cursor-pointer"
                >
                  <Link href={`/blog/${post.id}`}>
                    <SketchyCard className={`h-full ${post.color}`}>
                      <div className="space-y-4">
                        <div className="flex items-center gap-2">
                          <Badge variant="outline" className="text-xs bg-white/60">
                            {post.category}
                          </Badge>
                        </div>
                        <h3 className="text-lg font-semibold leading-snug group-hover:text-primary transition-colors relative text-foreground">
                          {post.title}
                        </h3>
                        <div className="flex items-center justify-between pt-2">
                          <div className="flex items-center gap-3">
                            <span className="text-sm text-foreground font-mono">{post.readTime}</span>
                            <span className="text-sm text-foreground">{post.date}</span>
                          </div>
                          <div className="text-foreground group-hover:text-primary transition-colors">
                            <ArrowRight className="h-4 w-4" />
                          </div>
                        </div>
                      </div>

                      <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        <HandDrawnCheck className="w-5 h-5 text-green-500" />
                      </div>
                    </SketchyCard>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter CTA */}
        <section className="relative py-24 overflow-hidden">
          <DoodleElements />

          <div className="container mx-auto max-w-6xl px-4 relative z-10">
            <div className="relative mx-auto max-w-2xl">
              <div className="relative p-8 md:p-12 text-center">
                <svg
                  className="absolute inset-0 w-full h-full pointer-events-none"
                  viewBox="0 0 600 350"
                  fill="none"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M15 25C100 15 500 20 585 18C590 70 588 280 585 330C500 338 100 335 15 332C10 280 12 70 15 25"
                    stroke="currentColor"
                    strokeWidth="3"
                    fill="none"
                    className="text-secondary/40"
                  />
                </svg>

                <PushPin className="absolute top-1 left-6 w-5 h-5" color="text-yellow-500" />
                <PushPin className="absolute top-1 right-6 w-5 h-5" color="text-green-500" />

                <div className="relative z-10">
                  <div className="flex items-center justify-center gap-2 mb-4">
                    <span className="font-mono text-xs text-foreground">{"// subscribe"}</span>
                  </div>

                  <h2 className="mb-4 text-2xl font-bold tracking-tight md:text-3xl font-display">
                    Stay in the{" "}
                    <span className="relative inline-block">
                      <MarkerHighlight color="bg-yellow-200/50">loop</MarkerHighlight>
                      <HandDrawnCircle className="absolute -inset-2 w-[calc(100%+1rem)] h-[calc(100%+1rem)] text-primary/30" />
                    </span>
                  </h2>
                  <p className="mb-8 text-foreground">
                    Get notified when we publish new engineering notes and insights.
                  </p>

                  <div className="mx-auto flex max-w-md flex-col gap-3 sm:flex-row">
                    <div className="relative flex-1">
                      <input
                        type="email"
                        placeholder="Enter your email"
                        className="w-full rounded-lg border-2 border-dashed border-border bg-background px-4 py-3 text-sm placeholder:text-foreground/50 focus:outline-none focus:border-primary transition-colors"
                      />
                      <Annotation className="absolute -top-6 left-2 text-foreground/50 text-xs" arrowDirection="down">
                        your email
                      </Annotation>
                    </div>
                    <button className="inline-flex items-center justify-center rounded-lg bg-foreground px-6 py-3 text-sm font-medium text-background transition-colors hover:bg-foreground/90 relative">
                      Subscribe
                      <HandDrawnCheck className="absolute -top-2 -right-2 w-4 h-4 text-green-400" />
                    </button>
                  </div>

                  <div className="mt-6 flex items-center justify-center gap-2">
                    <span className="font-mono text-xs text-foreground">{"/* no spam, promise */"}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}