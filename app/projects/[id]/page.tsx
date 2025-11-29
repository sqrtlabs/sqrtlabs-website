// Remove the "use client" directive since this page doesn't actually need client-side interactivity
// The "use client" was only needed for the useEffect hook, but we can handle scrolling differently

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowLeft, ArrowRight, Check } from "lucide-react"
import { 
  DoodleElements,
  HandDrawnUnderline,
  HandDrawnCircle,
  MarkerHighlight,
  NotebookLines,
  PushPin,
  HandDrawnCheck,
  SketchyCard,
} from "@/components/ui/hand-drawn"
import projectsData from "@/data/projects.json"
import type { Metadata } from "next"
import { ArticleStructuredData } from "@/components/structured-data"

type ProjectData = {
  title: string
  description: string
  longDescription: string
  tags: string[]
  color: string
  annotation: string
  featured: boolean
  challenges: string[]
  solutions: string[]
  results: string[]
  techStack: string[]
  timeline: string
  team: string
}

// Export generateMetadata function for dynamic metadata
export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id: projectId } = await params
  const project = (projectsData as Record<string, ProjectData>)[projectId]

  if (!project) {
    return {
      title: "Project Not Found",
      description: "The requested project could not be found.",
    }
  }

  const title = `${project.title} | SQRT Labs Projects`
  const description = project.longDescription.substring(0, 160) + "..."

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "article",
      tags: project.tags,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      creator: "@sqrtlabs",
    },
  }
}

export default async function ProjectDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id: projectId } = await params
  const project = (projectsData as Record<string, ProjectData>)[projectId]

  if (!project) {
    return (
      <div className="flex min-h-screen flex-col bg-background">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Project not found</h1>
            <Button asChild>
              <Link href="/projects">Back to Projects</Link>
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    )
  }

  const projectIds = Object.keys(projectsData)
  const currentIndex = projectIds.indexOf(projectId)
  const prevProject = currentIndex > 0 ? projectIds[currentIndex - 1] : null
  const nextProject = currentIndex < projectIds.length - 1 ? projectIds[currentIndex + 1] : null

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      {/* Structured Data */}
      <ArticleStructuredData 
        title={`${project.title} | SQRT Labs Projects`}
        description={project.longDescription.substring(0, 160) + "..."}
        date={new Date().toISOString()}
        author="SQRT Labs Team"
      />
      <main className="flex-1">
        {/* Hero Section */}
        <section className={`relative py-16 md:py-24 overflow-hidden ${project.color}`}>
          <NotebookLines className="opacity-20" />
          <DoodleElements />

          <div className="container mx-auto max-w-4xl px-4 relative z-10">
            {/* Back button */}
            <div className="mb-8">
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 text-foreground hover:text-foreground/80 transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                <span className="text-sm font-medium">Back to Projects</span>
              </Link>
            </div>

            <div>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <Badge key={tag} variant="secondary" className="bg-white/80">
                    {tag}
                  </Badge>
                ))}
              </div>

              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold font-display mb-6 relative inline-block">
                {project.title}
                <HandDrawnUnderline className="absolute -bottom-2 left-0 w-full h-3 text-primary/50" />
              </h1>

              <p className="text-lg md:text-xl text-foreground leading-relaxed max-w-3xl">{project.longDescription}</p>

              <div className="flex flex-wrap gap-6 mt-8">
                <div className="flex items-center gap-2">
                  <span className="text-sm text-foreground">Timeline:</span>
                  <span className="text-sm font-medium">{project.timeline}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-foreground">Team:</span>
                  <span className="text-sm font-medium">{project.team}</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Challenges & Solutions */}
        <section className="py-16 md:py-24 relative">
          <div className="container mx-auto max-w-4xl px-4">
            <div className="grid md:grid-cols-2 gap-8 md:gap-12">
              {/* Challenges */}
              <div>
                <div className="relative">
                  <PushPin className="absolute -top-4 left-4 w-6 h-6 z-10" color="text-red-500" />
                  <div className="bg-red-50 p-6 shadow-lg">
                    <h2 className="text-xl font-bold mb-4 font-display">
                      <MarkerHighlight color="bg-red-200/40">Challenges</MarkerHighlight>
                    </h2>
                    <ul className="space-y-3">
                      {project.challenges.map((challenge, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <span className="text-red-500 font-mono text-sm mt-0.5">!</span>
                          <span className="text-foreground text-sm leading-relaxed">{challenge}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Solutions */}
              <div>
                <div className="relative">
                  <PushPin className="absolute -top-4 left-4 w-6 h-6 z-10" color="text-green-500" />
                  <div className="bg-green-50 p-6 shadow-lg">
                    <h2 className="text-xl font-bold mb-4 font-display">
                      <MarkerHighlight color="bg-green-200/40">Solutions</MarkerHighlight>
                    </h2>
                    <ul className="space-y-3">
                      {project.solutions.map((solution, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <HandDrawnCheck className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                          <span className="text-foreground text-sm leading-relaxed">{solution}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Results */}
        <section className="py-16 md:py-24 bg-muted/30 relative">
          <NotebookLines className="opacity-15" />
          <div className="container mx-auto max-w-4xl px-4">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold font-display relative inline-block">
                Results
                <HandDrawnCircle className="absolute -inset-4 w-[calc(100%+2rem)] h-[calc(100%+2rem)] text-primary/30" />
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {project.results.map((result, i) => (
                <div key={i}>
                  <SketchyCard className="h-full bg-card" delay={0.1 * i}>
                    <div className="flex items-start gap-4 p-4">
                      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                        <Check className="w-4 h-4 text-primary" />
                      </div>
                      <p className="text-foreground font-medium">{result}</p>
                    </div>
                  </SketchyCard>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Tech Stack */}
        <section className="py-16 md:py-24 relative">
          <div className="container mx-auto max-w-4xl px-4">
            <div className="text-center mb-8">
              <h2 className="text-xl font-bold font-display mb-6">Tech Stack</h2>
              <div className="flex flex-wrap justify-center gap-3">
                {project.techStack.map((tech, i) => (
                  <span
                    key={tech}
                    className="px-4 py-2 bg-muted rounded-lg text-sm font-mono text-foreground border border-border"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Navigation */}
        <section className="py-12 border-t border-border">
          <div className="container mx-auto max-w-4xl px-4">
            <div className="flex justify-between items-center">
              {prevProject ? (
                <Link
                  href={`/projects/${prevProject}`}
                  className="group flex items-center gap-2 text-foreground hover:text-foreground/80 transition-colors"
                >
                  <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                  <span className="text-sm font-medium">Previous Project</span>
                </Link>
              ) : (
                <div />
              )}

              {nextProject ? (
                <Link
                  href={`/projects/${nextProject}`}
                  className="group flex items-center gap-2 text-foreground hover:text-foreground/80 transition-colors"
                >
                  <span className="text-sm font-medium">Next Project</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              ) : (
                <div />
              )}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 relative">
          <div className="container mx-auto max-w-4xl px-4 text-center">
            <h2 className="text-2xl font-bold mb-4">Interested in similar work?</h2>
            <p className="text-foreground mb-8">Let's discuss how we can help with your project.</p>
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