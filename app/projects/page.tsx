import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, FileText, Lightbulb, Code2, Rocket } from "lucide-react"
import {
  DoodleElements,
  HandDrawnUnderline,
  HandDrawnCircle,
  HandDrawnArrow,
  StickyNote,
  MarkerHighlight,
  ScribbleDecoration,
  NumberedCallout,
  ThoughtBubble,
  NotebookLines,
  PushPin,
  HandDrawnCheck,
  Annotation,
} from "@/components/ui/hand-drawn"
import projectsData from "@/data/projects.json"
import { ArticleStructuredData } from "@/components/structured-data"
import { projectsMetadata } from "./page.metadata"

export const metadata = projectsMetadata

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

const projects = Object.entries(projectsData as Record<string, ProjectData>).map(([id, data]) => ({
  id,
  ...data,
}))

const processSteps = [
  {
    icon: FileText,
    step: "01",
    title: "Discover",
    description: "We start with a clear technical breakdown of your requirements.",
    doodle: "?",
  },
  {
    icon: Lightbulb,
    step: "02",
    title: "Design",
    description: "Then design flows and architecture that make sense.",
    doodle: "◇",
  },
  {
    icon: Code2,
    step: "03",
    title: "Build",
    description: "Then build and test in fast cycles with continuous feedback.",
    doodle: "⚙",
  },
  {
    icon: Rocket,
    step: "04",
    title: "Launch",
    description: "Then deploy and support post-launch to ensure success.",
    doodle: "→",
  },
]

export default function ProjectsPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      {/* Structured Data */}
      <ArticleStructuredData 
        title="Projects | SQRT Labs"
        description="Explore our portfolio of blockchain projects including DeFi protocols, dApps, and Web3 infrastructure."
        date={new Date().toISOString()}
        author="SQRT Labs Team"
      />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-24 md:py-32 overflow-hidden">
          <NotebookLines className="opacity-20" />
          <DoodleElements />

          {/* Floating sticky note */}
          <div className="absolute top-20 right-12 hidden lg:block z-20">
            <StickyNote color="bg-green-100" rotation={4}>
              <span className="text-xs font-mono">real work</span>
              <br />
              <span className="text-xs">real results</span>
            </StickyNote>
          </div>

          {/* Thought bubble */}
          <div className="absolute top-1/4 left-8 hidden xl:block w-32">
            <ThoughtBubble className="text-muted-foreground/50">
              <span className="text-xs font-mono">portfolio</span>
            </ThoughtBubble>
          </div>

          <div className="container mx-auto max-w-6xl px-4 relative z-10">
            <div className="mx-auto max-w-3xl text-center">
              <div className="flex items-center justify-center gap-3 mb-4">
                <NumberedCallout number={1} />
                <span className="font-mono text-xs text-foreground">{"// our work"}</span>
              </div>

              <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl font-display relative inline-block">
                <span className="relative">
                  Featured Work
                  <HandDrawnUnderline className="absolute -bottom-2 left-0 w-full h-3 text-primary/50" />
                </span>
                <ScribbleDecoration variant={3} className="absolute -right-10 -top-2 w-8 h-8 text-secondary/40" />
              </h1>

              <p className="text-lg text-foreground md:text-xl">
                A selection of <MarkerHighlight color="bg-yellow-200/40">blockchain products</MarkerHighlight> we've
                built for teams around the world.
              </p>
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

        {/* Projects Grid */}
        <section className="relative pb-24 overflow-hidden">
          <DoodleElements />

          <div className="container mx-auto max-w-6xl px-4 py-4 relative z-10">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {projects.map((project, index) => (
                <div
                  key={project.title}
                  className="relative"
                >
                  {/* Push pin */}
                  <PushPin className="absolute -top-3 left-6 w-6 h-6 z-20" color="text-blue-500" />

                  <Link href={`/projects/${project.id}`}>
                    <div className={`${project.color} p-6 shadow-lg relative h-full cursor-pointer`}>
                      {/* Hand-drawn border */}
                      <svg
                        className="absolute inset-0 w-full h-full pointer-events-none"
                        viewBox="0 0 300 250"
                        fill="none"
                        preserveAspectRatio="none"
                      >
                        <path
                          d="M8 12C60 6 240 10 292 8C296 50 294 200 292 242C240 246 60 244 8 242C4 200 6 50 8 12"
                          stroke="currentColor"
                          strokeWidth="2"
                          fill="none"
                          className="text-gray-400/40"
                        />
                      </svg>

                      {/* Annotation tag */}
                      <div className="absolute -top-3 -right-2 z-20">
                        <span className="bg-white px-2 py-1 text-xs font-mono rotate-3 inline-block border border-gray-300 shadow-sm">
                          {project.annotation}
                        </span>
                      </div>

                      <div className="relative z-10 space-y-4">
                        {project.featured && (
                          <div className="flex items-center gap-2">
                            <Badge variant="secondary" className="bg-white/80">
                              Featured
                            </Badge>
                            <HandDrawnCheck className="w-4 h-4 text-green-600" />
                          </div>
                        )}
                        <h3 className="text-xl font-bold text-foreground relative inline-block">
                          {project.title}
                          <HandDrawnUnderline className="absolute -bottom-1 left-0 w-full h-2 text-gray-400/50" />
                        </h3>
                        <p className="text-foreground leading-relaxed text-sm">{project.description}</p>
                        <div className="flex flex-wrap gap-2 pt-2">
                          {project.tags.map((tag) => (
                            <span
                              key={tag}
                              className="bg-white/60 px-2 py-1 text-xs text-foreground border border-gray-300/50 rounded"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                        <div className="flex items-center gap-2 pt-2 text-primary">
                          <span className="text-sm font-medium">View details</span>
                          <ArrowRight className="w-4 h-4" />
                        </div>
                      </div>

                      {/* Corner doodle */}
                      <ScribbleDecoration
                        variant={((index % 4) + 1) as 1 | 2 | 3 | 4}
                        className="absolute bottom-3 right-3 w-6 h-6 text-gray-400/40"
                      />
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="relative py-24 overflow-hidden bg-muted/30">
          <NotebookLines className="opacity-15" />

          <div className="absolute top-16 right-12 hidden lg:block">
            <StickyNote color="bg-yellow-100" rotation={-2}>
              <span className="text-xs">our process</span>
              <br />
              <span className="text-xs font-mono">4 steps</span>
            </StickyNote>
          </div>

          <div className="container mx-auto max-w-6xl px-4 relative z-10">
            <div className="mb-16 text-center">
              <div className="flex items-center justify-center gap-3 mb-4">
                <NumberedCallout number={2} />
                <span className="font-mono text-xs text-foreground">{"// how we work"}</span>
              </div>
              <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl font-display relative inline-block">
                <MarkerHighlight color="bg-blue-200/40">How We Work</MarkerHighlight> With Clients
              </h2>
              <p className="mx-auto max-w-2xl text-foreground mt-4">
                A proven process that delivers results consistently.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
              {processSteps.map((step, index) => (
                <div
                  key={step.step}
                  className="relative"
                >
                  <div className="relative bg-card rounded-lg p-6 h-full">
                    <svg
                      className="absolute inset-0 w-full h-full pointer-events-none"
                      viewBox="0 0 200 200"
                      fill="none"
                      preserveAspectRatio="none"
                    >
                      <path
                        d="M10 15C40 10 160 12 190 10C195 40 193 160 190 190C160 195 40 193 10 190C5 160 7 40 10 15"
                        stroke="currentColor"
                        strokeWidth="2"
                        fill="none"
                        className="text-border"
                      />
                    </svg>

                    <div className="relative z-10 text-center flex flex-col items-center">
                      <div className="relative mb-4">
                        <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10">
                          <step.icon className="h-8 w-8 text-primary" />
                        </div>
                        <HandDrawnCircle
                          className="absolute -inset-2 w-20 h-20 text-primary/30"
                        />
                        <span className="absolute -top-2 -right-2 text-lg text-primary/50">{step.doodle}</span>
                      </div>

                      <div className="font-mono text-2xl font-bold text-primary/60 mb-2 relative inline-block">
                        {step.step}
                        <HandDrawnUnderline className="absolute -bottom-1 left-0 w-full h-2 text-primary/30" />
                      </div>

                      <h3 className="text-lg font-semibold mb-2 text-foreground">{step.title}</h3>

                      <p className="text-sm text-foreground leading-relaxed">{step.description}</p>
                    </div>

                    <ScribbleDecoration
                      variant={((index % 4) + 1) as 1 | 2 | 3 | 4}
                      className="absolute bottom-2 right-2 w-5 h-5 text-muted-foreground/20"
                    />
                  </div>

                  {index < processSteps.length - 1 && (
                    <div className="hidden lg:flex absolute top-1/2 -right-4 transform translate-x-1/2 -translate-y-1/2 z-20 items-center justify-center">
                      <div>
                        <HandDrawnArrow className="w-8 h-6 text-primary/40" direction="right" />
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative py-24 overflow-hidden">
          <DoodleElements />

          <div className="container mx-auto max-w-6xl px-4 relative z-10">
            <div className="relative mx-auto max-w-2xl">
              <div className="relative p-8 md:p-12 text-center">
                <svg
                  className="absolute inset-0 w-full h-full pointer-events-none"
                  viewBox="0 0 600 300"
                  fill="none"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M15 25C100 15 500 20 585 18C590 60 588 240 585 280C500 288 100 285 15 282C10 240 12 60 15 25"
                    stroke="currentColor"
                    strokeWidth="3"
                    fill="none"
                    className="text-primary/40"
                  />
                </svg>

                <PushPin className="absolute top-1 left-4 w-5 h-5" color="text-red-500" />
                <PushPin className="absolute top-1 right-4 w-5 h-5" color="text-blue-500" />

                <div className="relative z-10">
                  <h2 className="mb-4 text-2xl font-bold tracking-tight md:text-3xl font-display">
                    Want to see something{" "}
                    <span className="relative inline-block">
                      specific
                      <HandDrawnCircle className="absolute -inset-2 w-[calc(100%+1rem)] h-[calc(100%+1rem)] text-secondary/40" />
                    </span>
                    ?
                  </h2>
                  <p className="mb-8 text-foreground">
                    We can share <MarkerHighlight color="bg-yellow-200/40">private case studies</MarkerHighlight> on
                    call.
                  </p>

                  <div className="flex items-center justify-center gap-3 mb-4">
                    <div>
                      <HandDrawnArrow className="w-8 h-4 text-foreground/50" direction="right" />
                    </div>
                  </div>

                  <Button
                    size="lg"
                    asChild
                    className="gap-2 rounded-xl px-8 bg-foreground text-background hover:bg-foreground/90 border-2 border-foreground shadow-[4px_4px_0px_0px] shadow-primary/40 hover:shadow-[2px_2px_0px_0px] transition-all"
                  >
                    <Link href="mailto:hello@sqrtlabs.com">
                      Schedule a call
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </div>

                <Annotation className="absolute -bottom-6 right-4 text-primary/60" arrowDirection="up">
                  let's talk!
                </Annotation>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}