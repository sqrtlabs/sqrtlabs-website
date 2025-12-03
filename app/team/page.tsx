import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Github, Linkedin, Twitter } from "lucide-react"
import {
  DoodleElements,
  HandDrawnUnderline,
  HandDrawnCircle,
  ScribbleDecoration,
  NotebookLines,
  PushPin,
} from "@/components/ui/hand-drawn"
import teamData from "@/data/team.json"
import { ArticleStructuredData } from "@/components/structured-data"

import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Team | SQRT Labs",
  description: "Meet the developers behind SQRT Labs. The builders, thinkers, and creators making Web3 accessible.",
  openGraph: {
    title: "Team | SQRT Labs",
    description: "Meet the developers behind SQRT Labs. The builders, thinkers, and creators making Web3 accessible.",
    url: "https://sqrtlabs.com/team",
    siteName: "SQRT Labs",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Team | SQRT Labs",
    description: "Meet the developers behind SQRT Labs. The builders, thinkers, and creators making Web3 accessible.",
    creator: "@sqrtlabs",
  },
}

export default function TeamPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <ArticleStructuredData 
        title="Team | SQRT Labs"
        description="Meet the developers behind SQRT Labs."
        date="2024-03-20T00:00:00.000Z"
        author="SQRT Labs Team"
      />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-24 md:py-32 overflow-hidden">
          <NotebookLines className="opacity-20" />
          <DoodleElements />

          <div className="container mx-auto max-w-6xl px-4 relative z-10">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl font-display relative inline-block">
                <span className="relative">
                  Our Team
                  <HandDrawnUnderline className="absolute -bottom-2 left-0 w-full h-3 text-primary/50" />
                </span>
                <ScribbleDecoration variant={1} className="absolute -right-10 -top-4 w-10 h-10 text-secondary/40" />
              </h1>
              <p className="text-lg text-foreground md:text-xl">
                The builders, thinkers, and creators making Web3 accessible.
              </p>
            </div>
          </div>
        </section>

        {/* Team Grid */}
        <section className="relative pb-24 overflow-hidden">
          <div className="container mx-auto max-w-6xl px-4 relative z-10">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {teamData.map((member, index) => (
                <Link href={`/team/${member.id}`} key={member.id} className="group">
                  <div className="relative h-full">
                     <div className="bg-card border-2 border-border p-6 rounded-xl h-full transition-all duration-300 group-hover:-translate-y-2 group-hover:shadow-[8px_8px_0px_0px_var(--color-primary)] shadow-[4px_4px_0px_0px_var(--color-border)] relative overflow-hidden">
                        {/* Placeholder for member image if no image provided, using a gradient or initial */}
                        <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center text-3xl font-display font-bold text-primary border-2 border-primary/20 relative overflow-hidden">
                          {/* In a real app, use Image component here with member.image */}
                          {member.name.charAt(0)}
                        </div>
                        
                        <div className="text-center space-y-2">
                          <h3 className="text-xl font-bold font-display">{member.name}</h3>
                          <p className="text-sm font-medium text-primary/80 uppercase tracking-wide">{member.role}</p>
                          <p className="text-sm text-muted-foreground line-clamp-3">{member.bio}</p>
                        </div>

                        <div className="mt-6 flex justify-center gap-3">
                           {member.socials.github && (
                             <div className="p-2 rounded-full bg-muted text-muted-foreground hover:text-foreground hover:bg-muted/80 transition-colors">
                               <Github className="w-4 h-4" />
                             </div>
                           )}
                           {member.socials.twitter && (
                             <div className="p-2 rounded-full bg-muted text-muted-foreground hover:text-foreground hover:bg-muted/80 transition-colors">
                               <Twitter className="w-4 h-4" />
                             </div>
                           )}
                           {member.socials.linkedin && (
                             <div className="p-2 rounded-full bg-muted text-muted-foreground hover:text-foreground hover:bg-muted/80 transition-colors">
                               <Linkedin className="w-4 h-4" />
                             </div>
                           )}
                        </div>
                     </div>
                     <ScribbleDecoration
                        variant={((index % 4) + 1) as 1 | 2 | 3 | 4}
                        className="absolute -bottom-2 -right-2 w-8 h-8 text-primary/10 pointer-events-none group-hover:text-primary/20 transition-colors"
                      />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
