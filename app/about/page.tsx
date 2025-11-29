"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CTASection } from "@/components/landing/cta-section"
import { Target, Clock, MessageCircle, Lightbulb, Shield, Eye, Cpu, CalendarClock } from "lucide-react"
import { motion } from "framer-motion"
import {
  DoodleElements,
  HandDrawnUnderline,
  HandDrawnCircle,
  StickyNote,
  Annotation,
  MarkerHighlight,
  ScribbleDecoration,
  NumberedCallout,
  ThoughtBubble,
  NotebookLines,
  SketchyCard,
  PushPin,
  HandDrawnCheck,
} from "@/components/ui/hand-drawn"
import { ArticleStructuredData } from "@/components/structured-data"

const approaches = [
  {
    icon: Lightbulb,
    title: "Build with clarity",
    description: "We break complex ideas into small, testable pieces so nothing slips.",
    annotation: "no confusion!",
  },
  {
    icon: Target,
    title: "Design for the long run",
    description: "We avoid hacks, shortcuts, or anything that creates future headaches.",
    annotation: "future-proof",
  },
  {
    icon: Clock,
    title: "Ship fast, but smart",
    description: "Iteration > assumptions. We learn from real usage, not guesswork.",
    annotation: "speed + quality",
  },
  {
    icon: MessageCircle,
    title: "Communicate like humans",
    description: "No jargon. No ego. Just honest updates and real progress.",
    annotation: "real talk",
  },
]

const values = [
  {
    icon: Shield,
    title: "Ownership over everything we build",
    color: "bg-blue-100",
  },
  {
    icon: Eye,
    title: "Transparent communication",
    color: "bg-green-100",
  },
  {
    icon: Cpu,
    title: "Engineering-first decision making",
    color: "bg-yellow-100",
  },
  {
    icon: CalendarClock,
    title: "Long-term thinking in every project",
    color: "bg-pink-100",
  },
]

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      {/* Structured Data */}
      <ArticleStructuredData 
        title="About | SQRT Labs"
        description="Learn about SQRT Labs, a Web3 development studio focused on building blockchain products that make sense in the real world."
        date={new Date().toISOString()}
        author="SQRT Labs Team"
      />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-24 md:py-32 overflow-hidden">
          <NotebookLines className="opacity-20" />
          <DoodleElements />

          {/* Floating sticky note */}
          <motion.div
            className="absolute top-20 right-12 hidden lg:block z-20"
            initial={{ opacity: 0, rotate: -10, y: -20 }}
            animate={{ opacity: 1, rotate: 5, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <StickyNote color="bg-blue-100" rotation={5}>
              <span className="text-xs font-mono">est. 2021</span>
              <br />
              <span className="text-xs">blockchain nerds</span>
            </StickyNote>
          </motion.div>

          {/* Thought bubble */}
          <motion.div
            className="absolute top-1/3 left-8 hidden xl:block w-36"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.2 }}
          >
            <ThoughtBubble className="text-foreground/60">
              <span className="text-xs font-mono">who are we?</span>
            </ThoughtBubble>
          </motion.div>

          <div className="container mx-auto max-w-6xl px-4 relative z-10">
            <div className="mx-auto max-w-3xl">
              <motion.div
                className="flex items-center gap-3 mb-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                <NumberedCallout number={1} />
                <span className="font-mono text-xs text-foreground">{"// about us"}</span>
              </motion.div>

              <motion.h1
                className="mb-6 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl font-display relative"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <span className="relative inline-block">
                  Who We Are
                  <HandDrawnUnderline className="absolute -bottom-2 left-0 w-full h-3 text-primary/50" />
                </span>
                <ScribbleDecoration variant={1} className="absolute -right-10 top-0 w-8 h-8 text-secondary/40" />
              </motion.h1>

              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
                <p className="text-lg leading-relaxed text-foreground md:text-xl relative">
                  SQRT Labs started with a simple idea:{" "}
                  <MarkerHighlight color="bg-yellow-200/40">
                    blockchain development shouldn't feel complicated or messy
                  </MarkerHighlight>
                  . Good engineering is supposed to feel calm. Predictable. Sharply executed.
                </p>
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}>
                <p className="mt-6 text-lg leading-relaxed text-foreground md:text-xl">
                  We're a team of engineers who've worked across{" "}
                  <span className="relative inline-block">
                    DeFi, infra, prediction markets, perps, lending, wallets
                    <HandDrawnCircle className="absolute -inset-2 w-[calc(100%+1rem)] h-[calc(100%+1rem)] text-secondary/30" />
                  </span>
                  , and growth-focused Web3 apps. We've shipped products for teams of all sizes.
                </p>
              </motion.div>

              <motion.div
                className="mt-8 relative"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                {/* Hand-drawn box around important text */}
                <div className="relative p-6">
                  <svg
                    className="absolute inset-0 w-full h-full"
                    viewBox="0 0 600 100"
                    fill="none"
                    preserveAspectRatio="none"
                  >
                    <motion.path
                      d="M10 15C100 8 500 12 590 10C595 30 593 70 590 90C500 95 100 92 10 90C5 70 7 30 10 15"
                      stroke="currentColor"
                      strokeWidth="2"
                      fill="none"
                      className="text-primary/40"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 1, delay: 0.8 }}
                    />
                  </svg>
                  <p className="text-lg leading-relaxed text-foreground font-medium relative z-10">
                    What this really means is… if you need a team that{" "}
                    <MarkerHighlight color="bg-green-200/40">thinks clearly</MarkerHighlight> and{" "}
                    <MarkerHighlight color="bg-blue-200/40">delivers consistently</MarkerHighlight>, you're in the right
                    place.
                  </p>
                  <Annotation className="absolute -right-4 -bottom-6 text-primary/60" arrowDirection="up">
                    this is important!
                  </Annotation>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Bottom wavy line */}
          <div className="absolute bottom-0 left-0 right-0">
            <svg className="w-full h-6" viewBox="0 0 1200 24" fill="none" preserveAspectRatio="none">
              <path
                d="M0 12C200 20 400 4 600 12C800 20 1000 4 1200 12"
                stroke="currentColor"
                strokeWidth="1.5"
                className="text-border"
                fill="none"
              />
            </svg>
          </div>
        </section>

        {/* Our Approach Section */}
        <section className="relative py-24 overflow-hidden">
          <DoodleElements />

          {/* Annotation */}
          <motion.div
            className="absolute top-16 left-8 hidden lg:block"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
          >
            <Annotation arrowDirection="right" className="text-foreground">
              how we work
            </Annotation>
          </motion.div>

          <div className="container mx-auto max-w-6xl px-4 relative z-10">
            <motion.div className="mb-16 text-center" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <div className="flex items-center justify-center gap-3 mb-4">
                <NumberedCallout number={2} />
                <span className="font-mono text-xs text-foreground">{"// our approach"}</span>
              </div>
              <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl font-display relative inline-block">
                Our Approach
                <HandDrawnCircle className="absolute -inset-4 w-[calc(100%+2rem)] h-[calc(100%+2rem)] text-secondary/30" />
              </h2>
              <p className="mx-auto max-w-2xl text-foreground mt-6">How we think about building products that last.</p>
            </motion.div>

            <div className="grid gap-8 md:grid-cols-2">
              {approaches.map((approach, index) => (
                <motion.div
                  key={approach.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                >
                  <SketchyCard className="h-full bg-card" delay={0.3 + index * 0.1}>
                    <div className="flex items-start gap-4">
                      <div className="relative">
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                          <approach.icon className="h-6 w-6 text-primary" />
                        </div>
                        <HandDrawnCircle
                          className="absolute -inset-2 w-16 h-16 text-primary/20"
                          delay={0.5 + index * 0.1}
                        />
                      </div>
                      <div className="flex-1">
                        <h3 className="mb-2 text-lg font-semibold relative inline-block text-foreground">
                          {approach.title}
                          <HandDrawnUnderline className="absolute -bottom-1 left-0 w-full h-2 text-secondary/40" />
                        </h3>
                        <p className="text-foreground leading-relaxed">{approach.description}</p>
                      </div>
                    </div>
                    {/* Corner annotation */}
                    <motion.div
                      className="absolute -top-3 -right-3"
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.8 + index * 0.1 }}
                    >
                      <span className="bg-yellow-100 px-2 py-1 text-xs font-mono rotate-3 inline-block border border-yellow-300">
                        {approach.annotation}
                      </span>
                    </motion.div>
                  </SketchyCard>
                </motion.div>
              ))}
            </div>

            {/* Connecting doodles between cards */}
            <div className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
              <motion.svg
                className="w-24 h-24 text-primary/20"
                viewBox="0 0 100 100"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
              >
                <motion.path
                  d="M20 50C35 30 65 70 80 50"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeDasharray="5 5"
                  fill="none"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1.5, delay: 1 }}
                />
              </motion.svg>
            </div>
          </div>

          {/* Wavy divider */}
          <div className="absolute bottom-0 left-0 right-0">
            <svg className="w-full h-6" viewBox="0 0 1200 24" fill="none" preserveAspectRatio="none">
              <path
                d="M0 12C150 4 300 20 450 12C600 4 750 20 900 12C1050 4 1150 16 1200 12"
                stroke="currentColor"
                strokeWidth="1.5"
                className="text-border"
                fill="none"
              />
            </svg>
          </div>
        </section>

        {/* Our Values Section */}
        <section className="relative py-24 overflow-hidden">
          <NotebookLines className="opacity-10" />

          {/* Floating elements */}
          <motion.div
            className="absolute top-20 right-16 hidden lg:block"
            initial={{ opacity: 0, rotate: 10 }}
            animate={{ opacity: 1, rotate: -3 }}
            transition={{ delay: 0.6 }}
          >
            <StickyNote color="bg-pink-100" rotation={-3}>
              <span className="text-xs">what we</span>
              <br />
              <span className="text-xs font-bold">believe in</span>
            </StickyNote>
          </motion.div>

          <div className="container mx-auto max-w-6xl px-4 relative z-10">
            <motion.div className="mb-16 text-center" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <div className="flex items-center justify-center gap-3 mb-4">
                <NumberedCallout number={3} />
                <span className="font-mono text-xs text-foreground">{"// values"}</span>
              </div>
              <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl font-display relative inline-block">
                <MarkerHighlight color="bg-purple-200/40">Our Values</MarkerHighlight>
              </h2>
              <p className="mx-auto max-w-2xl text-foreground mt-4">
                The principles that guide every decision we make.
              </p>
            </motion.div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  className="relative"
                  initial={{ opacity: 0, y: 30, rotate: -2 }}
                  animate={{ opacity: 1, y: 0, rotate: index % 2 === 0 ? 1 : -1 }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  whileHover={{ scale: 1.05, rotate: 0 }}
                >
                  {/* Push pin */}
                  <PushPin className="absolute -top-3 left-1/2 -translate-x-1/2 w-6 h-6 z-20" />

                  {/* Sticky note style card */}
                  <div className={`${value.color} p-6 shadow-md relative`}>
                    {/* Hand-drawn border */}
                    <svg
                      className="absolute inset-0 w-full h-full pointer-events-none"
                      viewBox="0 0 200 200"
                      fill="none"
                      preserveAspectRatio="none"
                    >
                      <motion.path
                        d="M5 5C60 3 140 7 195 5C197 60 195 140 195 195C140 197 60 195 5 195C3 140 5 60 5 5"
                        stroke="currentColor"
                        strokeWidth="1"
                        fill="none"
                        className="text-gray-400/30"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                      />
                    </svg>

                    <div className="relative z-10 text-center">
                      <div className="mb-4 flex justify-center">
                        <div className="relative">
                          <value.icon className="h-8 w-8 text-foreground" />
                          <HandDrawnCircle
                            className="absolute -inset-3 w-14 h-14 text-gray-500/30"
                            delay={0.6 + index * 0.1}
                          />
                        </div>
                      </div>
                      <h3 className="font-medium leading-snug text-foreground text-sm">{value.title}</h3>
                      <HandDrawnCheck className="absolute bottom-2 right-2 w-5 h-5 text-green-600/60" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <CTASection />
      </main>
      <Footer />
    </div>
  )
}