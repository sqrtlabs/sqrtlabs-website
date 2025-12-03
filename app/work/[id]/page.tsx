// Remove the "use client" directive since this page doesn't actually need client-side interactivity
// The "use client" was only needed for the useEffect hook, but we can handle scrolling differently

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowLeft, ArrowRight, Check, Github, Globe, Youtube, Heart, MapPin, Calendar, ShieldCheck, ExternalLink } from "lucide-react"
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
import Image from "next/image"

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
  subtitle?: string
  date?: string
  likes?: number
  location?: string
  github?: string
  demo?: string
  projectLink?: string
  youtubeId?: string
  category?: string
  verified?: boolean
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
              <Link href="/work">Back to Work</Link>
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
        date="2024-03-20T00:00:00.000Z"
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
                href="/work"
                className="inline-flex items-center gap-2 text-foreground hover:text-foreground/80 transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                <span className="text-sm font-medium">Back to Work</span>
              </Link>
            </div>

            <div>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <Badge key={tag} variant="secondary" className="bg-white/80 text-black">
                    {tag}
                  </Badge>
                ))}
              </div>

              <div className="flex items-center gap-3 mb-2">
                 <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold font-display relative inline-block">
                  {project.title}
                  <HandDrawnUnderline className="absolute -bottom-2 left-0 w-full h-3 text-primary/50" />
                </h1>
                {project.verified && (
                  <div className="bg-blue-500/10 p-1 rounded-full text-blue-600" title="Verified Project">
                    <ShieldCheck className="w-6 h-6 md:w-8 md:h-8" />
                  </div>
                )}
              </div>
              
              {project.subtitle && (
                <p className="text-lg md:text-xl font-medium text-muted-foreground mt-4 mb-6">{project.subtitle}</p>
              )}

              {/* YouTube Video or Main Image */}
              {project.youtubeId ? (
                <div className="my-8 rounded-xl overflow-hidden shadow-lg border-2 border-white/50 bg-black aspect-video relative group">
                  <iframe 
                    width="100%" 
                    height="100%" 
                    src={`https://www.youtube.com/embed/${project.youtubeId}`} 
                    title={project.title} 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen 
                    className="absolute inset-0 w-full h-full"
                  ></iframe>
                </div>
              ) : null}

              <div className="flex flex-wrap gap-4 md:gap-8 my-6 text-sm md:text-base text-muted-foreground">
                 {project.date && (
                   <div className="flex items-center gap-2">
                     <Calendar className="w-4 h-4" />
                     <span>{project.date}</span>
                   </div>
                 )}
                 {project.likes && (
                   <div className="flex items-center gap-2">
                     <Heart className="w-4 h-4" />
                     <span>{project.likes} Likes</span>
                   </div>
                 )}
                 {project.location && (
                   <div className="flex items-center gap-2">
                     <MapPin className="w-4 h-4" />
                     <span>{project.location}</span>
                   </div>
                 )}
              </div>

              {/* Links */}
              <div className="flex flex-wrap gap-4 mb-8">
                {project.demo && (
                  <Button asChild size="lg" className="rounded-xl gap-2">
                    <Link href={project.demo} target="_blank">
                      <Globe className="w-4 h-4" />
                      Live Demo
                    </Link>
                  </Button>
                )}
                {project.github && (
                  <Button asChild variant="outline" size="lg" className="rounded-xl gap-2 bg-white/50 hover:bg-white/80">
                     <Link href={project.github} target="_blank">
                       <Github className="w-4 h-4" />
                       GitHub
                     </Link>
                  </Button>
                )}
                {project.projectLink && !project.demo && (
                   <Button asChild variant="outline" size="lg" className="rounded-xl gap-2 bg-white/50 hover:bg-white/80">
                     <Link href={project.projectLink} target="_blank">
                       <ExternalLink className="w-4 h-4" />
                       View Project
                     </Link>
                   </Button>
                )}
              </div>

              <div className="prose prose-lg dark:prose-invert max-w-none">
                 <p className="text-lg md:text-xl text-foreground leading-relaxed">{project.longDescription}</p>
              </div>

              {/* Tech Stack */}
              <div className="mt-12 pt-8 border-t border-black/10">
                <h2 className="text-xl font-bold font-display mb-4">Tech Stack & Skills</h2>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-white/60 rounded-md text-sm font-medium text-foreground border border-black/5"
                    >
                      {tech}
                    </span>
                  ))}
                  {/* Also show skills if different from tech stack, or merge them? Logic can be refined */}
                </div>
              </div>
              
              <div className="flex flex-wrap gap-6 mt-8 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <span className="font-semibold text-foreground">Timeline:</span>
                  <span>{project.timeline}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-semibold text-foreground">Team:</span>
                  <span>{project.team}</span>
                </div>
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
                  href={`/work/${prevProject}`}
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
                  href={`/work/${nextProject}`}
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