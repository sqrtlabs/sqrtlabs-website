"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { FadeUp } from "@/components/ui/animated-text"
import { HandDrawnSquiggle, ScribbleDecoration, Annotation, MarkerHighlight } from "@/components/ui/hand-drawn"

export function Footer() {
  return (
    <footer className="relative pt-2">
      {/* Hand-drawn top border */}
      <svg className="w-full h-4" viewBox="0 0 1200 16" fill="none" preserveAspectRatio="none">
        <path
          d="M0 8C100 4 200 12 300 8C400 4 500 12 600 8C700 4 800 12 900 8C1000 4 1100 12 1200 8"
          stroke="currentColor"
          strokeWidth="1"
          className="text-border"
        />
      </svg>

      <div className="container mx-auto max-w-6xl px-3 sm:px-4 py-10 sm:py-14">
        <div className="grid gap-8 sm:gap-10 md:grid-cols-4">
          <FadeUp>
            <div className="space-y-3">
              <Link href="/" className="flex items-center gap-2 sm:gap-3 group">
                <motion.div
                  className="relative flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center"
                  whileHover={{ rotate: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <svg className="absolute inset-0 w-full h-full" viewBox="0 0 50 50" fill="none">
                    <path
                      d="M5 8C15 5 35 6 45 5C47 15 46 35 45 45C35 47 15 46 5 45C3 35 4 15 5 8"
                      stroke="currentColor"
                      strokeWidth="2"
                      fill="none"
                      className="text-foreground"
                    />
                  </svg>
                  <span className="font-display text-lg sm:text-xl font-bold">√</span>
                </motion.div>
                <span className="font-display text-lg sm:text-xl font-semibold tracking-tight text-foreground">
                  SQRT Labs
                </span>
              </Link>
              <p className="text-sm text-foreground leading-relaxed">
                Building with <MarkerHighlight color="bg-yellow-200/20">clarity</MarkerHighlight>.
                <br />
                Shipping with confidence.
              </p>
              <HandDrawnSquiggle className="w-20 h-2 text-border" />

              <ScribbleDecoration variant={1} className="w-12 h-6 text-primary/20" />
            </div>
          </FadeUp>

          <FadeUp delay={0.1}>
            <div className="space-y-3">
              <h4 className="font-display font-semibold text-foreground relative inline-block">
                Navigation
                <svg
                  className="absolute -bottom-1 left-0 w-full h-1"
                  viewBox="0 0 80 4"
                  fill="none"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M0 2C20 1 40 3 60 2C70 1.5 80 2 80 2"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    className="text-primary/40"
                  />
                </svg>
              </h4>
              <nav className="flex flex-col gap-2">
                {["Home", "About", "Work", "Blog", "Team"].map((item, i) => (
                  <Link
                    key={item}
                    href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                    className="text-sm text-foreground hover:text-primary transition-colors w-fit relative group"
                  >
                    <span className="inline-flex items-center gap-2">
                      <motion.span
                        className="w-1.5 h-1.5 rounded-full bg-current opacity-40 group-hover:opacity-100"
                        whileHover={{ scale: 1.5 }}
                      />
                      {item}
                    </span>
                    <span className="absolute -bottom-0.5 left-4 w-0 h-0.5 bg-primary/50 group-hover:w-[calc(100%-1rem)] transition-all duration-300" />
                  </Link>
                ))}
              </nav>
            </div>
          </FadeUp>

          <FadeUp delay={0.2}>
            <div className="space-y-3">
              <h4 className="font-display font-semibold text-foreground relative inline-block">
                Services
                <svg
                  className="absolute -bottom-1 left-0 w-full h-1"
                  viewBox="0 0 80 4"
                  fill="none"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M0 2C20 3 40 1 60 2C70 2.5 80 2 80 2"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    className="text-secondary/40"
                  />
                </svg>
              </h4>
              <nav className="flex flex-col gap-2">
                {["Smart Contracts", "dApp Development", "Protocol Engineering", "Miniapps"].map((item, i) => (
                  <span key={item} className="text-sm text-foreground inline-flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-current opacity-40" />
                    {item}
                  </span>
                ))}
              </nav>
            </div>
          </FadeUp>

          <FadeUp delay={0.3}>
            <div className="space-y-3">
              <h4 className="font-display font-semibold text-foreground relative inline-block">
                Connect
                <svg
                  className="absolute -bottom-1 left-0 w-full h-1"
                  viewBox="0 0 80 4"
                  fill="none"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M0 2C20 1 40 3 60 2C70 1.5 80 2 80 2"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    className="text-primary/40"
                  />
                </svg>
              </h4>
              <nav className="flex flex-col gap-2">
                {[
                  { name: "Twitter", href: "https://twitter.com" },
                  { name: "GitHub", href: "https://github.com" },
                  { name: "Farcaster", href: "https://warpcast.com" },
                ].map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-sm text-foreground hover:text-primary transition-colors w-fit relative group inline-flex items-center gap-2"
                  >
                    <motion.span
                      className="w-1.5 h-1.5 rounded-full bg-current opacity-40 group-hover:opacity-100"
                      whileHover={{ scale: 1.5 }}
                    />
                    {item.name}
                    <span className="absolute -bottom-0.5 left-4 w-0 h-0.5 bg-primary/50 group-hover:w-[calc(100%-1rem)] transition-all duration-300" />
                  </Link>
                ))}
              </nav>

              <Annotation className="text-foreground/50 mt-4">say hi!</Annotation>
            </div>
          </FadeUp>
        </div>

        <FadeUp delay={0.4}>
          <div className="mt-10 sm:mt-12 pt-6 text-center text-sm text-foreground relative">
            {/* Hand-drawn divider */}
            <svg className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-2" viewBox="0 0 200 8" fill="none">
              <path
                d="M10 4C40 2 80 6 100 4C120 2 160 6 190 4"
                stroke="currentColor"
                strokeWidth="1"
                className="text-border"
              />
            </svg>

            <p className="pt-4 font-mono text-xs">
              {"/* "}
              {new Date().getFullYear()}
              {" SQRT Labs. Built with care */"}
            </p>
          </div>
        </FadeUp>
      </div>
    </footer>
  )
}
