import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Github, Linkedin, Mail, ExternalLink, Code2 } from "lucide-react"
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
import type { Metadata } from "next"

function XIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  )
}

function FarcasterIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M18.24 0.24H5.76C2.5789 0.24 0 2.8188 0 6v12c0 3.1811 2.5789 5.76 5.76 5.76h12.48c3.1812 0 5.76 -2.5789 5.76 -5.76V6C24 2.8188 21.4212 0.24 18.24 0.24m0.8155 17.1662v0.504c0.2868 -0.0256 0.5458 0.1905 0.5439 0.479v0.5688h-5.1437v-0.5688c-0.0019 -0.2885 0.2576 -0.5047 0.5443 -0.479v-0.504c0 -0.22 0.1525 -0.402 0.358 -0.458l-0.0095 -4.3645c-0.1589 -1.7366 -1.6402 -3.0979 -3.4435 -3.0979 -1.8038 0 -3.2846 1.3613 -3.4435 3.0979l-0.0096 4.3578c0.2276 0.0424 0.5318 0.2083 0.5395 0.4648v0.504c0.2863 -0.0256 0.5457 0.1905 0.5438 0.479v0.5688H4.3915v-0.5688c-0.0019 -0.2885 0.2575 -0.5047 0.5438 -0.479v-0.504c0 -0.2529 0.2011 -0.4548 0.4536 -0.4724v-7.895h-0.4905L4.2898 7.008l2.6405 -0.0005V5.0419h9.9495v1.9656h2.8219l-0.6091 2.0314h-0.4901v7.8949c0.2519 0.0177 0.453 0.2195 0.453 0.4724" />
    </svg>
  )
}

function TelegramIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
    </svg>
  )
}

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
    farcaster?: string
    telegram?: string
  }
  projects: string[]
  image: string
}

type ProjectData = {
  title: string
  description: string
  // other fields...
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params
  const member = teamData.find((m) => m.id === id)

  if (!member) {
    return {
      title: "Member Not Found",
    }
  }

  const title = `${member.name} - ${member.role} | SQRT Labs`
  const description = member.bio

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "profile",
      url: `https://sqrtlabs.com/team/${member.id}`,
      images: [
        {
          url: "https://sqrtlabs.com/opengraph-image", // Use default or specific if available
          width: 1200,
          height: 630,
          alt: `${member.name} - ${member.role}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      creator: "@sqrtlabs", // or member's twitter handle if we want
    },
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
                       <div className="w-40 h-40 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center text-5xl font-display font-bold text-primary border-4 border-background shadow-inner relative overflow-hidden">
                          {member.image ? (
                            <Image
                              src={member.image}
                              alt={member.name}
                              fill
                              className="object-cover"
                            />
                          ) : (
                            member.name.charAt(0)
                          )}
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
                               <XIcon className="w-5 h-5" />
                             </Link>
                           )}
                           {member.socials.linkedin && (
                             <Link href={member.socials.linkedin} target="_blank" className="p-2 rounded-full bg-muted hover:bg-foreground hover:text-background transition-colors">
                               <Linkedin className="w-5 h-5" />
                             </Link>
                           )}
                           {member.socials.farcaster && (
                             <Link href={member.socials.farcaster} target="_blank" className="p-2 rounded-full bg-muted hover:bg-foreground hover:text-background transition-colors">
                               <FarcasterIcon className="w-5 h-5" />
                             </Link>
                           )}
                           {member.socials.telegram && (
                             <Link href={member.socials.telegram} target="_blank" className="p-2 rounded-full bg-muted hover:bg-foreground hover:text-background transition-colors">
                               <TelegramIcon className="w-5 h-5" />
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
