import Link from "next/link"
import { Github, Linkedin, Twitter, ArrowRight } from "lucide-react"
import {
  DoodleElements,
  HandDrawnUnderline,
  ScribbleDecoration,
  NotebookLines,
  MarkerHighlight,
} from "@/components/ui/hand-drawn"
import teamData from "@/data/team.json"
import { Button } from "@/components/ui/button"

export function TeamSection() {
  return (
    <section className="relative py-24 overflow-hidden bg-background">
      <NotebookLines className="opacity-10" />
      <DoodleElements />

      <div className="container mx-auto max-w-6xl px-4 relative z-10">
        <div className="mx-auto max-w-3xl text-center mb-16">
          <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl font-display relative inline-block">
            <span className="relative">
              Meet The Team
              <HandDrawnUnderline className="absolute -bottom-2 left-0 w-full h-3 text-secondary/40" />
            </span>
          </h2>
          <p className="text-lg text-foreground mt-4">
            The <MarkerHighlight color="bg-primary/20">builders</MarkerHighlight> making Web3 happen.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {teamData.map((member, index) => (
            <Link href={`/team/${member.id}`} key={member.id} className="group block">
              <div className="relative h-full">
                 <div className="bg-card border-2 border-border p-6 rounded-xl h-full transition-all duration-300 group-hover:-translate-y-2 group-hover:shadow-[8px_8px_0px_0px_var(--color-primary)] shadow-[4px_4px_0px_0px_var(--color-border)] relative overflow-hidden flex flex-col items-center text-center">
                    
                    <div className="w-24 h-24 mb-4 rounded-full bg-primary/10 flex items-center justify-center text-3xl font-display font-bold text-primary border-2 border-primary/20 relative overflow-hidden group-hover:scale-105 transition-transform">
                      {member.name.charAt(0)}
                    </div>
                    
                    <h3 className="text-lg font-bold font-display">{member.name}</h3>
                    <p className="text-xs font-medium text-primary/80 uppercase tracking-wide mb-3">{member.role}</p>
                    
                    <div className="mt-auto flex justify-center gap-2 opacity-80 group-hover:opacity-100 transition-opacity">
                       {member.socials.github && <Github className="w-4 h-4 text-muted-foreground" />}
                       {member.socials.twitter && <Twitter className="w-4 h-4 text-muted-foreground" />}
                    </div>
                 </div>
                 <ScribbleDecoration
                    variant={((index % 4) + 1) as 1 | 2 | 3 | 4}
                    className="absolute -bottom-2 -right-2 w-6 h-6 text-primary/10 pointer-events-none group-hover:text-primary/20 transition-colors"
                  />
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-12 text-center">
           <Button asChild variant="outline" className="rounded-xl border-2">
             <Link href="/team">
               View Full Team
               <ArrowRight className="w-4 h-4 ml-2" />
             </Link>
           </Button>
        </div>
      </div>
    </section>
  )
}
