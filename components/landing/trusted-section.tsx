"use client"

import { motion } from "framer-motion"
import { FadeUp } from "@/components/ui/animated-text"
import { Rocket, Link2, Building2, Lightbulb } from "lucide-react"
import { HandDrawnSquiggle, HandDrawnCircle, ScribbleDecoration, Annotation, PushPin } from "@/components/ui/hand-drawn"

const clients = [
  { name: "Startups", icon: Rocket },
  { name: "Protocols", icon: Link2 },
  { name: "DAOs", icon: Building2 },
  { name: "Founders", icon: Lightbulb },
]

export function TrustedSection() {
  return (
    <section className="py-10 sm:py-12 md:py-16 relative">
      <ScribbleDecoration variant={1} className="absolute top-8 left-8 w-8 h-8 text-primary/20" />
      <ScribbleDecoration variant={2} className="absolute bottom-8 right-8 w-8 h-8 text-secondary/20" />

      <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <FadeUp>
          <div className="text-center mb-6 sm:mb-8">
            <p className="text-sm font-semibold uppercase tracking-widest text-foreground relative inline-flex items-center gap-4">
              <HandDrawnSquiggle className="w-12 sm:w-16 h-3 text-border" />
              Trusted By
              <HandDrawnSquiggle className="w-12 sm:w-16 h-3 text-border" />
            </p>
            <motion.div className="mt-2" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>
              <Annotation className="text-foreground/70">builders who ship</Annotation>
            </motion.div>
          </div>
        </FadeUp>

        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 md:gap-8 lg:gap-10">
          {clients.map((client, i) => (
            <FadeUp key={client.name} delay={0.1 * i}>
              <motion.div
                className="relative"
                whileHover={{ scale: 1.08, rotate: 0 }}
                initial={{ rotate: i % 2 === 0 ? -2 : 2 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <div className="relative">
                  <PushPin
                    className="absolute -top-3 left-1/2 -translate-x-1/2 w-5 h-5 z-10"
                    color={i % 2 === 0 ? "text-red-500" : "text-blue-500"}
                  />

                  <div
                    className={`px-4 sm:px-5 md:px-6 py-3 sm:py-4 md:py-5 shadow-md flex flex-col items-center gap-2 sm:gap-3 ${
                      i === 0 ? "bg-yellow-100" : i === 1 ? "bg-blue-100" : i === 2 ? "bg-green-100" : "bg-pink-100"
                    }`}
                    style={{ transform: `rotate(${i % 2 === 0 ? -1 : 1}deg)` }}
                  >
                    <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full bg-white/60 flex items-center justify-center">
                      <client.icon className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-gray-700" />
                    </div>

                    <span className="text-sm sm:text-base md:text-lg font-display font-semibold text-gray-800">
                      {client.name}
                    </span>
                  </div>
                </div>

                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                  <HandDrawnCircle className="w-full h-full text-primary/20" delay={0} />
                </div>
              </motion.div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  )
}
