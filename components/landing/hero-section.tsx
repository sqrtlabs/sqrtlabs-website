"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { motion } from "framer-motion"
import { FadeUp } from "@/components/ui/animated-text"
import {
  DoodleElements,
  HandDrawnArrow,
  HandDrawnCircle,
  HandDrawnUnderline,
  StickyNote,
  Annotation,
  MarkerHighlight,
  ScribbleDecoration,
  ThoughtBubble,
  NotebookLines,
} from "@/components/ui/hand-drawn"

export function HeroSection() {
  return (
    <section className="relative min-h-[85vh] sm:min-h-[90vh] flex items-center overflow-hidden py-8 sm:py-12 lg:py-16">
      <NotebookLines className="opacity-30" />

      {/* Sketchy grid background */}
      <SketchyGrid />

      {/* Floating doodles */}
      <DoodleElements />

      <motion.div
        className="absolute top-24 right-8 hidden lg:block z-20"
        initial={{ opacity: 0, rotate: -10, y: -20 }}
        animate={{ opacity: 1, rotate: 3, y: 0 }}
        transition={{ delay: 1.2 }}
      >
        <StickyNote color="bg-yellow-100" rotation={3}>
          <span className="text-xs">web3 builders</span>
          <br />
          <span className="text-xs">since 2021</span>
        </StickyNote>
      </motion.div>

      <motion.div
        className="absolute top-1/3 left-4 hidden xl:block w-32"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.5 }}
      >
        <ThoughtBubble className="text-foreground/60">
          <span className="text-xs font-mono">{"<code/>"}</span>
        </ThoughtBubble>
      </motion.div>

      <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mx-auto max-w-4xl text-center">
          <motion.div
            className="flex items-center justify-center gap-3 mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <Annotation arrowDirection="right" className="text-foreground/70">
              start here
            </Annotation>
          </motion.div>

          {/* Badge with hand-drawn box */}
          <motion.div
            className="mb-6 inline-flex items-center gap-2 relative px-4 sm:px-6 py-2 sm:py-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Hand-drawn box around badge */}
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 200 50" fill="none" preserveAspectRatio="none">
              <motion.path
                d="M5 8C40 4 160 6 195 5C197 15 196 35 195 45C160 47 40 46 5 45C3 35 4 15 5 8"
                stroke="currentColor"
                strokeWidth="1.5"
                fill="none"
                className="text-border"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              />
            </svg>
            <motion.span
              className="flex h-2 w-2"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            >
              <span className="relative inline-flex h-2 w-2 rounded-full bg-secondary" />
            </motion.span>
            <span className="text-xs sm:text-sm font-medium text-foreground">Web3 Development Studio</span>
          </motion.div>

          <motion.h1
            className="mb-6 font-display text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <span className="block relative">
              Building with <MarkerHighlight color="bg-yellow-200/40">clarity</MarkerHighlight>
              <span className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl">.</span>
              <ScribbleDecoration
                variant={1}
                className="absolute -right-6 sm:-right-8 top-0 w-6 h-6 sm:w-8 sm:h-8 text-primary/30 hidden md:block"
              />
            </span>
            <span className="block mt-2 relative inline-block">
              <span className="relative z-10">Shipping with</span>
              {/* Hand-drawn circle around "confidence" */}
              <span className="relative inline-block ml-2 sm:ml-3">
                <span className="relative z-10 text-primary">confidence</span>
                <HandDrawnCircle className="absolute -inset-2 sm:-inset-4 w-[calc(100%+1rem)] sm:w-[calc(100%+2rem)] h-[calc(100%+1rem)] sm:h-[calc(100%+2rem)] text-primary/40" />
              </span>
              <span className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl">.</span>
            </span>
          </motion.h1>

          <FadeUp delay={0.5}>
            <p className="mb-8 sm:mb-10 mx-auto max-w-2xl text-base sm:text-lg leading-relaxed text-foreground md:text-xl relative px-2 sm:px-0">
              We design and develop blockchain products that{" "}
              <span className="relative inline-block">
                <MarkerHighlight color="bg-green-200/30">actually make sense</MarkerHighlight>
                <HandDrawnUnderline className="absolute -bottom-1 left-0 w-full h-2 text-secondary/60" />
              </span>{" "}
              in the real world. From deep protocol work to polished apps.
            </p>
          </FadeUp>

          <FadeUp delay={0.6}>
            <div className="flex items-center justify-center gap-3 mb-4 sm:mb-6">
              <motion.div animate={{ x: [0, 5, 0] }} transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}>
                <HandDrawnArrow className="w-10 sm:w-12 h-5 sm:h-6 text-foreground/60 rotate-[20deg]" />
              </motion.div>
              <span className="text-xs sm:text-sm text-foreground/70 font-mono italic">{"// click me!"}</span>
            </div>
          </FadeUp>

          <FadeUp delay={0.7}>
            <div className="flex flex-col items-center justify-center gap-4 sm:gap-5 sm:flex-row">
              <Button
                size="lg"
                asChild
                className="group w-full sm:w-auto rounded-xl px-6 sm:px-8 text-sm sm:text-base font-semibold h-12 sm:h-14 bg-foreground text-background hover:bg-foreground/90 border-2 border-foreground shadow-[4px_4px_0px_0px] shadow-primary/40 hover:shadow-[2px_2px_0px_0px] hover:shadow-primary/40 transition-all"
              >
                <Link href="#contact">
                  Start a project
                  <motion.span
                    className="ml-2"
                    animate={{ x: [0, 4, 0] }}
                    transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
                  >
                    <ArrowRight className="h-4 w-4" />
                  </motion.span>
                </Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                asChild
                className="w-full sm:w-auto rounded-xl px-6 sm:px-8 text-sm sm:text-base font-semibold h-12 sm:h-14 border-2 border-foreground bg-background text-foreground hover:bg-muted relative overflow-visible shadow-[4px_4px_0px_0px] shadow-secondary/40 hover:shadow-[2px_2px_0px_0px] hover:shadow-secondary/40 transition-all"
              >
                <Link href="/projects">
                  Explore our work
                  <ScribbleDecoration variant={2} className="absolute -right-3 -top-3 w-6 h-6 text-primary/40" />
                </Link>
              </Button>
            </div>
          </FadeUp>

          <motion.div
            className="mt-12 sm:mt-16 lg:mt-20 mb-8 sm:mb-12 lg:mb-16 flex items-center justify-center gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
          >
            <span className="font-mono text-[10px] sm:text-xs text-foreground/60">{"/* scroll down for more */"}</span>
            <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}>
              <HandDrawnArrow direction="down" className="w-4 h-5 sm:h-6 text-foreground/50" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function SketchyGrid() {
  return (
    <div className="absolute inset-0 -z-20 overflow-hidden opacity-20">
      <svg className="absolute inset-0 h-full w-full" aria-hidden="true">
        <defs>
          <pattern id="sketchy-grid" width="80" height="80" patternUnits="userSpaceOnUse">
            <path
              d="M0 40 C20 38, 40 42, 60 39 S80 41, 80 40"
              stroke="currentColor"
              strokeWidth="0.5"
              fill="none"
              className="text-foreground/20"
            />
            <path
              d="M40 0 C38 20, 42 40, 39 60 S41 80, 40 80"
              stroke="currentColor"
              strokeWidth="0.5"
              fill="none"
              className="text-foreground/20"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#sketchy-grid)" />
      </svg>
    </div>
  )
}
