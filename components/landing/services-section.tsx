"use client"

import { Code2, Layers, Settings, Zap } from "lucide-react"
import { motion } from "framer-motion"
import { FadeUp } from "@/components/ui/animated-text"
import {
  HandDrawnUnderline,
  HandDrawnStar,
  SketchyCard,
  SketchyIconWrapper,
  DoodleConnector,
  StickyNote,
  MarkerHighlight,
  ScribbleDecoration,
} from "@/components/ui/hand-drawn"

const services = [
  {
    icon: Code2,
    title: "Smart Contract Development",
    description:
      "Clean, battle-tested contracts for DeFi, infra, and high-value products. Auditable. Upgradeable. Built to last.",
    annotation: "solidity + rust",
  },
  {
    icon: Layers,
    title: "Full-Stack dApp Development",
    description:
      "Smooth frontends, reliable backends, and everything in between. We ship fast without breaking things.",
    annotation: "react + node",
  },
  {
    icon: Settings,
    title: "Protocol & Infra Engineering",
    description:
      "L2 integrations, indexing, wallets, bridges, and custom blockchain tooling. If it needs strong engineering, we're in.",
    annotation: "deep infra",
  },
  {
    icon: Zap,
    title: "Miniapps & Web3 Growth Tools",
    description:
      "Farcaster miniapps, x402 apps, token-gated flows, onchain identity, growth loops. You get traction without hacks.",
    annotation: "farcaster +",
  },
]

export function ServicesSection() {
  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 relative">
      <div className="absolute top-20 right-10 opacity-20">
        <svg width="120" height="120" viewBox="0 0 120 120" fill="none">
          <circle
            cx="60"
            cy="60"
            r="50"
            stroke="currentColor"
            strokeWidth="1"
            strokeDasharray="8 4"
            className="text-primary"
          />
          <circle cx="60" cy="60" r="30" stroke="currentColor" strokeWidth="1" className="text-secondary" />
        </svg>
      </div>

      <motion.div
        className="absolute top-16 left-8 hidden lg:block z-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        <StickyNote color="bg-blue-100" rotation={-5}>
          <span className="text-[10px]">our services</span>
        </StickyNote>
      </motion.div>

      <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <FadeUp>
          <div className="mb-10 sm:mb-12 md:mb-14 text-center">
            <div className="inline-flex items-center gap-2 mb-4">
              <HandDrawnStar className="w-5 h-5 text-primary" />
              <span className="text-sm font-semibold uppercase tracking-widest text-primary">Services</span>
              <HandDrawnStar className="w-5 h-5 text-primary" />
            </div>
            <h2 className="mb-4 sm:mb-6 font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-foreground relative inline-block">
              What We <MarkerHighlight color="bg-yellow-200/30">Do</MarkerHighlight>
              <HandDrawnUnderline className="absolute -bottom-2 left-0 w-full h-3 text-secondary/50" />
            </h2>
            <p className="mx-auto max-w-2xl text-base sm:text-lg text-foreground font-semibold mt-4 sm:mt-6">
              End-to-end blockchain development for teams that want to ship{" "}
              <span className="font-mono text-sm bg-muted px-1 rounded">real</span> products.
            </p>
          </div>
        </FadeUp>

        <div className="grid gap-4 sm:gap-5 md:gap-6 md:grid-cols-2 relative">
          <DoodleConnector
            className="absolute left-1/2 top-[22%] -translate-x-1/2 w-20 h-10 text-border/40 hidden md:block rotate-90"
            variant="curved"
          />
          <DoodleConnector
            className="absolute left-1/2 top-[72%] -translate-x-1/2 w-20 h-10 text-border/40 hidden md:block rotate-90"
            variant="zigzag"
          />

          {services.map((service, i) => (
            <FadeUp key={service.title} delay={0.1 * i}>
              <motion.div
                className="group relative"
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <SketchyCard delay={0.1 * i} className="h-full">
                  <div className="absolute -top-2 right-4">
                    <span className="font-mono text-[10px] text-muted-foreground bg-background px-2 py-0.5 border border-dashed border-border rounded">
                      {service.annotation}
                    </span>
                  </div>

                  <div className="relative z-10 p-4 sm:p-5 md:p-6">
                    <div className="mb-4 sm:mb-5">
                      <SketchyIconWrapper className="w-12 h-12 sm:w-14 sm:h-14">
                        <motion.div
                          whileHover={{ rotate: 5, scale: 1.1 }}
                          transition={{ type: "spring", stiffness: 400, damping: 17 }}
                        >
                          <service.icon className="h-6 w-6 sm:h-7 sm:w-7 text-foreground" />
                        </motion.div>
                      </SketchyIconWrapper>
                    </div>

                    <h3 className="mb-2 sm:mb-3 font-display text-lg sm:text-xl font-semibold text-foreground relative inline-block">
                      {service.title}
                      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary/30 group-hover:w-full transition-all duration-300" />
                    </h3>
                    <p className="text-foreground leading-relaxed text-sm sm:text-base">{service.description}</p>

                    <ScribbleDecoration
                      variant={((i % 4) + 1) as 1 | 2 | 3 | 4}
                      className="absolute bottom-2 right-2 w-6 h-6 text-muted-foreground/20"
                    />
                  </div>
                </SketchyCard>
              </motion.div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  )
}
