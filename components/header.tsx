"use client"

import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { HandDrawnUnderline, ScribbleDecoration } from "@/components/ui/hand-drawn"

function StickyMan({ className = "" }: { className?: string }) {
  return (
    <motion.svg
      className={className}
      viewBox="0 0 40 50"
      fill="none"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6, type: "spring", stiffness: 200 }}
    >
      {/* Head */}
      <circle cx="20" cy="8" r="6" stroke="currentColor" strokeWidth="2" fill="none" />
      {/* Body */}
      <path d="M20 14 L20 28" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      {/* Legs - sitting position */}
      <path
        d="M20 28 L12 38 L8 38"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M20 28 L28 38 L32 38"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Arm holding phone */}
      <path
        d="M20 18 L28 14 L30 10"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Phone */}
      <rect x="28" y="6" width="6" height="10" rx="1" stroke="currentColor" strokeWidth="1.5" fill="none" />
      {/* Other arm waving */}
      <motion.path
        d="M20 18 L12 12 L8 8"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        animate={{ rotate: [0, 10, -10, 0] }}
        transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
        style={{ transformOrigin: "20px 18px" }}
      />
    </motion.svg>
  )
}

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <motion.header
      className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur-sm border-b border-border"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
    >
      <div className="container mx-auto flex h-16 sm:h-18 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2 sm:gap-3 group">
          <motion.div
            className="relative flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center"
            whileHover={{ rotate: 5 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            {/* Hand-drawn logo box */}
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 50 50" fill="none">
              <motion.path
                d="M5 8C15 5 35 6 45 5C47 15 46 35 45 45C35 47 15 46 5 45C3 35 4 15 5 8"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
                className="text-foreground"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 0.8 }}
              />
            </svg>
            <span className="font-display text-lg sm:text-xl font-bold">√</span>
          </motion.div>
          <div className="relative">
            <span className="font-display text-lg sm:text-xl font-semibold tracking-tight text-foreground">
              SQRT Labs
            </span>
            <HandDrawnSquiggle className="absolute -bottom-1 left-0 w-full h-1 text-primary/40" />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 md:flex">
          {[
            { name: "Home", href: "/" },
            { name: "About", href: "/about" },
            { name: "Work", href: "/work" },
            { name: "Blog", href: "/blog" },
            { name: "Team", href: "/team" },
          ].map((item, i) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + i * 0.1 }}
              className="relative group"
            >
              <Link
                href={item.href}
                className="text-sm font-medium text-foreground transition-colors hover:text-primary"
              >
                {item.name}
              </Link>
              <HandDrawnUnderline className="absolute -bottom-1 left-0 w-full h-2 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
            className="relative hidden sm:block"
          >
            <StickyMan className="absolute -top-12 left-1/2 -translate-x-1/2 w-10 h-12 text-foreground z-20" />
            <Button
              asChild
              className="relative overflow-visible rounded-xl px-5 sm:px-6 font-semibold bg-foreground text-background hover:bg-foreground/90 border-2 border-foreground shadow-[3px_3px_0px_0px] shadow-primary/40 hover:shadow-[1px_1px_0px_0px] hover:shadow-primary/40 transition-all"
            >
              <Link href="#contact">
                Start a project
                <ScribbleDecoration variant={3} className="absolute -right-2 -top-2 w-4 h-4 text-yellow-400" />
              </Link>
            </Button>
          </motion.div>

          {/* Mobile menu button - styled to match theme */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden border-2 border-foreground/20 hover:border-foreground hover:bg-muted rounded-xl transition-all"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-border bg-background overflow-hidden"
          >
            <div className="container mx-auto px-4 py-4">
              <div className="flex flex-col gap-1">
                {[
                  { name: "Home", href: "/" },
                  { name: "About", href: "/about" },
                  { name: "Work", href: "/work" },
                  { name: "Blog", href: "/blog" },
                  { name: "Team", href: "/team" },
                ].map((item, i) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 * i }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="flex items-center py-3 px-4 rounded-xl text-foreground font-medium hover:bg-muted transition-colors border-2 border-transparent hover:border-border"
                    >
                      <span className="relative">
                        {item.name}
                        <HandDrawnUnderline className="absolute -bottom-1 left-0 w-full h-1.5 text-primary/30" />
                      </span>
                    </Link>
                  </motion.div>
                ))}

                {/* Mobile CTA */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                  className="mt-3 pt-3 border-t border-border"
                >
                  <Button
                    asChild
                    className="w-full rounded-xl font-semibold bg-foreground text-background hover:bg-foreground/90 border-2 border-foreground shadow-[3px_3px_0px_0px] shadow-primary/40"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <Link href="#contact">Start a project</Link>
                  </Button>
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}

function HandDrawnSquiggle({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 100 8" fill="none" preserveAspectRatio="none">
      <path
        d="M2 4C12 2 22 6 32 4C42 2 52 6 62 4C72 2 82 6 92 4"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  )
}
