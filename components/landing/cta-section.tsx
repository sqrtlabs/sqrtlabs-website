"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { motion } from "framer-motion"
import { FadeUp } from "@/components/ui/animated-text"
import {
  HandDrawnStar,
  HandDrawnArrow,
  StickyNote,
  MarkerHighlight,
  Annotation,
  ScribbleDecoration,
  ThoughtBubble,
  PushPin,
} from "@/components/ui/hand-drawn"

export function CTASection() {
  return (
    <section id="contact" className="py-16 sm:py-24 relative overflow-hidden">
      {/* Background doodles */}
      <svg className="absolute top-20 left-20 w-16 h-16 text-primary/10" viewBox="0 0 60 60" fill="none">
        <circle cx="30" cy="30" r="25" stroke="currentColor" strokeWidth="2" strokeDasharray="6 4" />
      </svg>
      <svg className="absolute bottom-20 right-20 w-20 h-20 text-secondary/10" viewBox="0 0 80 80" fill="none">
        <path d="M10 40L40 10L70 40L40 70L10 40" stroke="currentColor" strokeWidth="2" />
      </svg>

      <motion.div
        className="absolute top-16 right-24 hidden lg:block w-28"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <ThoughtBubble className="text-foreground/50">
          <span className="text-[10px] font-mono">idea?</span>
        </ThoughtBubble>
      </motion.div>

      <motion.div
        className="absolute bottom-24 left-16 hidden lg:block"
        initial={{ opacity: 0, rotate: -8 }}
        animate={{ opacity: 1, rotate: -5 }}
        transition={{ delay: 1.2 }}
      >
        <div className="relative">
          <PushPin className="absolute -top-3 left-1/2 -translate-x-1/2 w-5 h-5 z-10" color="text-blue-500" />
          <StickyNote color="bg-pink-100" rotation={-5}>
            <span className="text-[10px]">let's build</span>
            <br />
            <span className="text-[10px]">something cool</span>
          </StickyNote>
        </div>
      </motion.div>

      <div className="container mx-auto max-w-6xl px-3 sm:px-4 relative z-10">
        <FadeUp>
          <motion.div
            className="mx-auto max-w-3xl relative p-8 sm:p-12 md:p-16 text-center"
            whileHover={{ scale: 1.01 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
          >
            {/* Hand-drawn card border */}
            <svg
              className="absolute inset-0 w-full h-full pointer-events-none"
              viewBox="0 0 600 400"
              fill="none"
              preserveAspectRatio="none"
            >
              <motion.path
                d="M20 30C150 20 450 25 580 20C590 100 585 300 580 380C450 390 150 385 20 380C10 300 15 100 20 30"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
                className="text-border"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1 }}
              />
            </svg>

            {/* Corner decorations */}
            <HandDrawnStar className="absolute top-4 left-4 w-6 h-6 text-primary/40" />
            <HandDrawnStar className="absolute top-4 right-4 w-6 h-6 text-secondary/40" />
            <ScribbleDecoration variant={3} className="absolute bottom-4 left-4 w-6 h-6 text-secondary/40" />
            <ScribbleDecoration variant={4} className="absolute bottom-4 right-4 w-6 h-6 text-primary/40" />

            <motion.div
              animate={{ rotate: [0, 10, -10, 0], scale: [1, 1.1, 1] }}
              transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, repeatDelay: 2 }}
              className="mb-6"
            >
              <svg className="w-12 h-12 sm:w-14 sm:h-14 mx-auto text-yellow-400" viewBox="0 0 56 56" fill="none">
                {/* Lightbulb */}
                <motion.path
                  d="M28 8C18 8 12 16 12 24C12 30 16 34 18 38C19 40 20 44 20 46L36 46C36 44 37 40 38 38C40 34 44 30 44 24C44 16 38 8 28 8Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="currentColor"
                  fillOpacity="0.2"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 0.8 }}
                />
                {/* Rays */}
                <motion.path
                  d="M28 2L28 5M48 24L51 24M5 24L8 24M42 10L44 8M12 10L10 8M42 38L44 40M12 38L10 40"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                />
                {/* Base */}
                <path d="M22 48L34 48M24 51L32 51" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </motion.div>

            <h2 className="mb-4 sm:mb-6 font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-foreground relative">
              Got something in <MarkerHighlight color="bg-yellow-200/40">mind</MarkerHighlight>?
            </h2>
            <p className="mb-6 sm:mb-8 text-lg sm:text-xl text-foreground">
              {"Let's turn it into something "}
              <span className="font-mono text-sm bg-muted px-1 rounded">real</span>
              {"."}
            </p>

            <motion.div
              className="flex justify-center items-center gap-3 mb-4 sm:mb-6"
              animate={{ y: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
            >
              <Annotation arrowDirection="right" className="text-foreground">
                one click away
              </Annotation>
              <HandDrawnArrow className="w-6 h-3 text-foreground/70 rotate-90" />
            </motion.div>

            <Button
              size="lg"
              asChild
              className="group rounded-xl px-8 sm:px-10 text-sm sm:text-base font-semibold h-12 sm:h-14 bg-foreground text-background hover:bg-foreground/90 border-2 border-foreground shadow-[4px_4px_0px_0px] shadow-primary/40 hover:shadow-[2px_2px_0px_0px] hover:shadow-primary/40 transition-all"
            >
              <Link href="mailto:hello@sqrtlabs.xyz">
                {"Let's talk"}
                <motion.span
                  className="ml-2 inline-block"
                  animate={{ x: [0, 4, 0] }}
                  transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
                >
                  <ArrowRight className="h-4 w-4" />
                </motion.span>
              </Link>
            </Button>

            <motion.p
              className="mt-6 sm:mt-8 font-mono text-xs text-foreground/70"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5 }}
            >
              {"/* no spam, just good convos */"}
            </motion.p>
          </motion.div>
        </FadeUp>
      </div>
    </section>
  )
}
