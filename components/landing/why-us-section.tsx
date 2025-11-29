"use client"

import { motion } from "framer-motion"
import { FadeUp } from "@/components/ui/animated-text"
import { X } from "lucide-react"
import {
  HandDrawnArrow,
  HandDrawnUnderline,
  MarkerHighlight,
  HandDrawnCheck,
  PushPin,
} from "@/components/ui/hand-drawn"

const reasons = [
  { text: "We think like engineers, not salespeople", highlight: "engineers" },
  { text: "We don't guess; we test, measure, and improve", highlight: "test" },
  { text: "We ship on time, and we communicate clearly", highlight: "on time" },
  { text: "We work as an extension of your own team", highlight: "your own team" },
  { text: "We don't just build the product — we make it future-ready", highlight: "future-ready" },
]

const antiReasons = ["endless meetings", "scope creep", "vaporware"]

export function WhyUsSection() {
  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 overflow-hidden relative bg-muted/30">
      {/* Top border - only on mobile/tablet */}
      <svg
        className="absolute top-0 left-0 w-full h-6 lg:hidden"
        viewBox="0 0 1200 24"
        fill="none"
        preserveAspectRatio="none"
      >
        <path
          d="M0 12C200 4 400 20 600 12C800 4 1000 20 1200 12"
          stroke="currentColor"
          strokeWidth="1.5"
          className="text-border"
          fill="none"
        />
      </svg>

      <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <FadeUp>
          <div className="text-center mb-8 sm:mb-10 md:mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="text-sm font-semibold uppercase tracking-widest text-primary">Why Us</span>
              <HandDrawnArrow className="w-8 h-4 text-primary/50" />
            </div>
            <h2 className="mb-4 font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-foreground relative inline-block">
              Why Teams{" "}
              <span className="relative inline-block">
                <MarkerHighlight color="bg-blue-200/30">Work With Us</MarkerHighlight>
                <HandDrawnUnderline className="absolute -bottom-2 left-0 w-full h-3 text-primary/40" />
              </span>
            </h2>
            <p className="mx-auto max-w-2xl text-base sm:text-lg text-foreground mt-4">
              We bring <span className="font-mono text-sm bg-muted px-1 rounded">clarity</span> to complex problems and
              deliver products that last.
            </p>
          </div>
        </FadeUp>

        <div className="grid md:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12 items-start">
          {/* Left side - Reasons list */}
          <div className="space-y-3 sm:space-y-4 md:space-y-5">
            {reasons.map((reason, i) => (
              <FadeUp key={reason.text} delay={0.1 * i}>
                <motion.div
                  className="flex items-start gap-3 sm:gap-4 group"
                  whileHover={{ x: 4 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  {/* Hand-drawn checkmark */}
                  <div className="shrink-0 mt-0.5">
                    <HandDrawnCheck className="w-5 h-5 sm:w-6 sm:h-6 text-secondary" />
                  </div>

                  <p className="text-foreground font-medium text-sm sm:text-base leading-relaxed">
                    {reason.text.split(reason.highlight)[0]}
                    <MarkerHighlight color="bg-yellow-200/30">{reason.highlight}</MarkerHighlight>
                    {reason.text.split(reason.highlight)[1]}
                  </p>
                </motion.div>
              </FadeUp>
            ))}
          </div>

          {/* Right side - Sticky note with anti-reasons */}
          <FadeUp delay={0.5}>
            <div className="flex justify-center items-center h-full">
              <motion.div
                className="relative"
                initial={{ rotate: 2 }}
                whileHover={{ rotate: 0, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <PushPin className="absolute -top-4 left-1/2 -translate-x-1/2 w-6 h-6 z-10" color="text-red-500" />

                <div className="bg-red-50 p-5 sm:p-6 shadow-lg max-w-xs" style={{ transform: "rotate(1deg)" }}>
                  <div className="font-mono text-xs text-foreground mb-4 font-medium">what you won't get:</div>

                  <div className="space-y-3">
                    {antiReasons.map((anti, i) => (
                      <motion.div
                        key={anti}
                        className="flex items-center gap-2"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.8 + i * 0.1 }}
                      >
                        <X className="w-4 h-4 text-destructive shrink-0" />
                        <span className="font-mono text-sm text-foreground line-through">{anti}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  )
}
