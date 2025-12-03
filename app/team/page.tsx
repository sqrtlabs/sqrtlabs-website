import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Github, Linkedin } from "lucide-react"
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
                               <XIcon className="w-4 h-4" />
                             </div>
                           )}
                           {member.socials.linkedin && (
                             <div className="p-2 rounded-full bg-muted text-muted-foreground hover:text-foreground hover:bg-muted/80 transition-colors">
                               <Linkedin className="w-4 h-4" />
                             </div>
                           )}
                           {(member.socials as any).farcaster && (
                             <div className="p-2 rounded-full bg-muted text-muted-foreground hover:text-foreground hover:bg-muted/80 transition-colors">
                               <FarcasterIcon className="w-4 h-4" />
                             </div>
                           )}
                           {(member.socials as any).telegram && (
                             <div className="p-2 rounded-full bg-muted text-muted-foreground hover:text-foreground hover:bg-muted/80 transition-colors">
                               <TelegramIcon className="w-4 h-4" />
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
