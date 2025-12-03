import Link from "next/link"
import Image from "next/image"
import { Github, Linkedin, ArrowRight } from "lucide-react"
import {
  DoodleElements,
  HandDrawnUnderline,
  ScribbleDecoration,
  NotebookLines,
  MarkerHighlight,
} from "@/components/ui/hand-drawn"
import teamData from "@/data/team.json"
import { Button } from "@/components/ui/button"

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
                    
                    <h3 className="text-lg font-bold font-display">{member.name}</h3>
                    <p className="text-xs font-medium text-primary/80 uppercase tracking-wide mb-3">{member.role}</p>
                    
                    <div className="mt-auto flex justify-center gap-2 opacity-80 group-hover:opacity-100 transition-opacity">
                       {member.socials.github && <Github className="w-4 h-4 text-muted-foreground" />}
                       {member.socials.twitter && <XIcon className="w-4 h-4 text-muted-foreground" />}
                       {(member.socials as any).farcaster && <FarcasterIcon className="w-4 h-4 text-muted-foreground" />}
                       {(member.socials as any).telegram && <TelegramIcon className="w-4 h-4 text-muted-foreground" />}
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
