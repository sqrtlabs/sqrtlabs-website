import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { ArrowLeft, Github, Linkedin, Twitter, Mail, ExternalLink, Code2 } from "lucide-react"
import {
  DoodleElements,
  HandDrawnUnderline,
  HandDrawnCircle,
  NotebookLines,
  PushPin,
  SketchyCard,
  MarkerHighlight,
} from "@/components/ui/hand-drawn"
import teamData from "@/data/team.json"
import projectsData from "@/data/projects.json"
import { ArticleStructuredData } from "@/components/structured-data"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

type TeamMember = {
  id: string
  name: string
  role: string
  bio: string
  skills: string[]
  socials: {
    github?: string
    twitter?: string
    linkedin?: string
  }
  projects: string[]
  image: string
}

type ProjectData = {
  title: string
  description: string
  // other fields...
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const member = teamData.find((m) => m.id === id)

  if (!member) {
    return {
      title: "Member Not Found",
    }
  }

  return {
    title: `${member.name} - ${member.role} | SQRT Labs`,
    description: member.bio,
  }
}

export default async function TeamMemberPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const member = teamData.find((m) => m.id === id)

  if (!member) {
    return (
      <div className="flex min-h-screen flex-col bg-background">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Team Member Not Found</h1>
            <Button asChild>
              <Link href="/team">Back to Team</Link>
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    )
  }

  // Find linked projects from projects.json based on names in member.projects
  // This is a fuzzy match or exact match depending on how data is structured.
  // Assuming member.projects contains project TITLES or IDs.
  // Let's assume they are titles or similar.
  const allProjects = Object.entries(projectsData as Record<string, ProjectData>).map(([pid, data]) => ({
    id: pid,
    ...data
  }))

  const memberProjects = member.projects.map(projName => {
     // Try to find by title (case insensitive)
     const found = allProjects.find(p => p.title.toLowerCase() === projName.toLowerCase())
     return found ? { ...found, found: true } : { title: projName, found: false }
  })

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <ArticleStructuredData 
        title={`${member.name} | SQRT Labs`}
        description={member.bio}
        date="2024-03-20T00:00:00.000Z"
        author={member.name}
      />
      <main className="flex-1">
        <section className="relative py-24 overflow-hidden">
          <NotebookLines className="opacity-20" />
          <DoodleElements />

          <div className="container mx-auto max-w-5xl px-4 relative z-10">
            <div className="mb-8">
              <Link
                href="/team"
                className="inline-flex items-center gap-2 text-foreground hover:text-foreground/80 transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                <span className="text-sm font-medium">Back to Team</span>
              </Link>
            </div>

            <div className="grid md:grid-cols-[300px_1fr] gap-12 items-start">
               {/* Sidebar / Profile Card */}
               <div className="md:sticky md:top-24">
                  <div className="relative">
                    <PushPin className="absolute -top-3 right-6 w-6 h-6 z-20" color="text-red-500" />
                    <div className="bg-card border-2 border-foreground p-6 rounded-xl shadow-[8px_8px_0px_0px_var(--color-primary)]">
                       <div className="w-40 h-40 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center text-5xl font-display font-bold text-primary border-4 border-background shadow-inner">
                          {member.name.charAt(0)}
                       </div>
                       
                       <h1 className="text-2xl font-bold font-display text-center mb-1">{member.name}</h1>
                       <p className="text-center text-primary font-medium mb-6 uppercase tracking-wide text-sm">{member.role}</p>
                       
                       <div className="flex justify-center gap-4 mb-6">
                           {member.socials.github && (
                             <Link href={member.socials.github} target="_blank" className="p-2 rounded-full bg-muted hover:bg-foreground hover:text-background transition-colors">
                               <Github className="w-5 h-5" />
                             </Link>
                           )}
                           {member.socials.twitter && (
                             <Link href={member.socials.twitter} target="_blank" className="p-2 rounded-full bg-muted hover:bg-foreground hover:text-background transition-colors">
                               <Twitter className="w-5 h-5" />
                             </Link>
                           )}
                           {member.socials.linkedin && (
                             <Link href={member.socials.linkedin} target="_blank" className="p-2 rounded-full bg-muted hover:bg-foreground hover:text-background transition-colors">
                               <Linkedin className="w-5 h-5" />
                             </Link>
                           )}
                       </div>
                       
                       <Button className="w-full gap-2" variant="outline" asChild>
                         <Link href={`mailto:hello@sqrtlabs.com?subject=Contacting ${member.name}`}>
                           <Mail className="w-4 h-4" />
                           Contact
                         </Link>
                       </Button>
                    </div>
                  </div>
               </div>

               {/* Main Content */}
               <div className="space-y-12">
                  <div>
                    <h2 className="text-3xl font-bold font-display mb-6 relative inline-block">
                      About Me
                      <HandDrawnUnderline className="absolute -bottom-2 left-0 w-full h-3 text-secondary/40" />
                    </h2>
                    <p className="text-lg leading-relaxed text-foreground/90">{member.bio}</p>
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold font-display mb-6">
                      <MarkerHighlight color="bg-yellow-200/40">Technical Skills</MarkerHighlight>
                    </h2>
                    <div className="flex flex-wrap gap-3">
                      {member.skills.map((skill) => (
                        <div key={skill} className="px-4 py-2 bg-white/50 border border-border rounded-lg shadow-sm font-mono text-sm">
                           {skill}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                     <h2 className="text-2xl font-bold font-display mb-6 flex items-center gap-3">
                       Portfolio & Projects
                       <HandDrawnCircle className="w-6 h-6 text-primary/20" />
                     </h2>
                     <div className="grid sm:grid-cols-2 gap-6">
                        {memberProjects.map((proj, idx) => (
                          <div key={idx} className="group">
                             {proj.found ? (
                               <Link href={`/work/${(proj as any).id}`}>
                                 <SketchyCard className="h-full bg-card hover:border-primary/50 transition-colors cursor-pointer" delay={idx * 0.1}>
                                    <div className="p-5 h-full flex flex-col">
                                       <div className="flex items-start justify-between mb-3">
                                          <Code2 className="w-8 h-8 text-primary/40" />
                                          <ExternalLink className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                                       </div>
                                       <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors">{(proj as any).title}</h3>
                                       <p className="text-sm text-muted-foreground line-clamp-2 mb-4">{(proj as any).description}</p>
                                       <div className="mt-auto pt-2 text-xs font-medium text-primary uppercase tracking-wider">
                                          View Case Study
                                       </div>
                                    </div>
                                 </SketchyCard>
                               </Link>
                             ) : (
                               <SketchyCard className="h-full bg-muted/30" delay={idx * 0.1}>
                                  <div className="p-5 h-full flex flex-col">
                                     <Code2 className="w-8 h-8 text-muted-foreground/20 mb-3" />
                                     <h3 className="text-lg font-bold mb-2 text-muted-foreground">{proj.title}</h3>
                                     <p className="text-sm text-muted-foreground/60 italic">Internal / Unlisted Project</p>
                                  </div>
                               </SketchyCard>
                             )}
                          </div>
                        ))}
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
