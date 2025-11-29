"use client"

import type React from "react"
import { motion } from "framer-motion"

// Animated path drawing
const draw = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: (i: number) => ({
    pathLength: 1,
    opacity: 1,
    transition: {
      pathLength: { delay: i * 0.1, type: "spring", duration: 1.5, bounce: 0 },
      opacity: { delay: i * 0.1, duration: 0.01 },
    },
  }),
}

// Hand-drawn underline SVG
export function HandDrawnUnderline({ className = "", color = "currentColor" }: { className?: string; color?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 200 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
    >
      <motion.path
        d="M2 8C30 4 60 6 90 5C120 4 150 7 198 3"
        stroke={color}
        strokeWidth="3"
        strokeLinecap="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      />
    </svg>
  )
}

// Hand-drawn circle
export function HandDrawnCircle({
  className = "",
  color = "currentColor",
  delay = 0,
}: { className?: string; color?: string; delay?: number }) {
  return (
    <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <motion.path
        d="M50 5C75 3 95 20 97 45C99 70 80 95 50 97C20 99 3 75 2 50C1 25 20 7 50 5"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1, ease: "easeOut", delay }}
      />
    </svg>
  )
}

// Hand-drawn arrow pointing right
export function HandDrawnArrow({
  className = "",
  color = "currentColor",
  direction = "right",
}: { className?: string; color?: string; direction?: "right" | "down" | "left" | "up" }) {
  const rotations = { right: 0, down: 90, left: 180, up: -90 }
  return (
    <svg
      className={className}
      viewBox="0 0 60 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ transform: `rotate(${rotations[direction]}deg)` }}
    >
      <motion.path
        d="M2 15C10 14 25 16 45 15M45 15C40 10 38 7 35 3M45 15C40 20 38 23 35 27"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      />
    </svg>
  )
}

// Hand-drawn star
export function HandDrawnStar({ className = "", color = "currentColor" }: { className?: string; color?: string }) {
  return (
    <svg className={className} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <motion.path
        d="M20 2L20 38M2 20L38 20M6 6L34 34M34 6L6 34"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      />
    </svg>
  )
}

// Hand-drawn squiggle line
export function HandDrawnSquiggle({ className = "", color = "currentColor" }: { className?: string; color?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 100 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
    >
      <motion.path
        d="M2 10C10 5 20 15 30 10C40 5 50 15 60 10C70 5 80 15 90 10C95 7 98 10 98 10"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      />
    </svg>
  )
}

// Hand-drawn checkmark
export function HandDrawnCheck({ className = "", color = "currentColor" }: { className?: string; color?: string }) {
  return (
    <svg className={className} viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
      <motion.path
        d="M4 16C8 20 10 22 12 24C16 18 22 10 26 4"
        stroke={color}
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      />
    </svg>
  )
}

// Hand-drawn bracket
export function HandDrawnBracket({ className = "", color = "currentColor" }: { className?: string; color?: string }) {
  return (
    <svg className={className} viewBox="0 0 20 60" fill="none" xmlns="http://www.w3.org/2000/svg">
      <motion.path
        d="M15 5C10 8 8 15 7 30C8 45 10 52 15 55"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      />
    </svg>
  )
}

export function StickyNote({
  children,
  className = "",
  color = "bg-yellow-100",
  rotation = -2,
}: {
  children: React.ReactNode
  className?: string
  color?: string
  rotation?: number
}) {
  return (
    <motion.div
      className={`relative ${color} p-4 shadow-md ${className}`}
      style={{ transform: `rotate(${rotation}deg)` }}
      initial={{ opacity: 0, y: 20, rotate: rotation - 5 }}
      animate={{ opacity: 1, y: 0, rotate: rotation }}
      whileHover={{ scale: 1.05, rotate: 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      {/* Tape on top */}
      <div
        className="absolute -top-3 left-1/2 -translate-x-1/2 w-12 h-6 bg-amber-200/80 opacity-70"
        style={{ transform: `rotate(${-rotation * 0.5}deg)` }}
      />
      <div className="font-mono text-sm text-gray-700">{children}</div>
    </motion.div>
  )
}

export function Annotation({
  children,
  className = "",
  arrowDirection = "left",
}: {
  children: React.ReactNode
  className?: string
  arrowDirection?: "left" | "right" | "up" | "down"
}) {
  return (
    <motion.div
      className={`flex items-center gap-2 ${className}`}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.5 }}
    >
      {arrowDirection === "right" && <HandDrawnArrow className="w-8 h-4 text-current" direction="right" />}
      {arrowDirection === "down" && <HandDrawnArrow className="w-4 h-8 text-current" direction="down" />}
      <span className="font-mono text-xs italic">{children}</span>
      {arrowDirection === "left" && <HandDrawnArrow className="w-8 h-4 text-current rotate-180" />}
      {arrowDirection === "up" && <HandDrawnArrow className="w-4 h-8 text-current -rotate-90" />}
    </motion.div>
  )
}

export function ThoughtBubble({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <motion.div
      className={`relative ${className}`}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ type: "spring", stiffness: 200, damping: 15 }}
    >
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 200 120" fill="none" preserveAspectRatio="none">
        <motion.path
          d="M30 20C60 10 140 10 170 20C190 35 195 60 180 80C165 95 140 100 100 100C60 100 35 95 20 80C5 60 10 35 30 20Z"
          fill="white"
          stroke="currentColor"
          strokeWidth="2"
          className="text-gray-400"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.8 }}
        />
        {/* Bubble dots */}
        <circle cx="35" cy="105" r="6" fill="white" stroke="currentColor" strokeWidth="1.5" className="text-gray-400" />
        <circle cx="20" cy="115" r="4" fill="white" stroke="currentColor" strokeWidth="1.5" className="text-gray-400" />
      </svg>
      <div className="relative z-10 px-8 py-6 text-center">{children}</div>
    </motion.div>
  )
}

export function NumberedCallout({ number, className = "" }: { number: number; className?: string }) {
  return (
    <motion.div
      className={`relative inline-flex items-center justify-center w-8 h-8 ${className}`}
      initial={{ scale: 0, rotate: -180 }}
      animate={{ scale: 1, rotate: 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 15 }}
    >
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 40 40" fill="none">
        <motion.circle
          cx="20"
          cy="20"
          r="16"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
          className="text-primary"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.5 }}
        />
      </svg>
      <span className="relative z-10 font-mono font-bold text-sm text-primary">{number}</span>
    </motion.div>
  )
}

export function CrossedOut({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <span className={`relative inline-block ${className}`}>
      <span className="opacity-50">{children}</span>
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 20" fill="none" preserveAspectRatio="none">
        <motion.path
          d="M5 10C30 8 70 12 95 10"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          className="text-red-500"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.4, delay: 0.2 }}
        />
      </svg>
    </span>
  )
}

export function MarkerHighlight({
  children,
  color = "bg-yellow-200/50",
  className = "",
}: { children: React.ReactNode; color?: string; className?: string }) {
  return (
    <span className={`relative inline-block ${className}`}>
      <motion.span
        className={`absolute inset-0 ${color} -skew-x-2`}
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        style={{ transformOrigin: "left" }}
      />
      <span className="relative z-10">{children}</span>
    </span>
  )
}

export function SketchyCard({
  children,
  className = "",
  delay = 0,
}: { children: React.ReactNode; className?: string; delay?: number }) {
  return (
    <motion.div
      className={`relative ${className}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay }}
    >
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        viewBox="0 0 400 250"
        fill="none"
        preserveAspectRatio="none"
      >
        <motion.path
          d="M8 12C80 6 320 10 392 8C396 50 394 200 392 242C320 246 80 244 8 242C4 200 6 50 8 12"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
          className="text-border"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.8, delay }}
        />
      </svg>
      <div className="relative z-10 p-6">{children}</div>
    </motion.div>
  )
}

export function DoodleConnector({
  className = "",
  variant = "curved",
}: { className?: string; variant?: "curved" | "straight" | "zigzag" }) {
  const paths = {
    curved: "M5 25C30 5 70 45 95 25",
    straight: "M5 25L95 25",
    zigzag: "M5 25L25 10L45 40L65 10L85 40L95 25",
  }
  return (
    <svg className={className} viewBox="0 0 100 50" fill="none">
      <motion.path
        d={paths[variant]}
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeDasharray="6 4"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1, ease: "easeInOut" }}
      />
      <motion.circle
        cx="95"
        cy="25"
        r="4"
        fill="currentColor"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.8 }}
      />
    </svg>
  )
}

export function SketchyIconWrapper({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`relative inline-flex items-center justify-center ${className}`}>
      <svg className="absolute inset-0 w-full h-full -m-2" viewBox="0 0 60 60" fill="none">
        <motion.path
          d="M30 5C45 3 55 13 57 30C59 47 47 57 30 57C13 57 3 47 3 30C3 13 13 5 30 5"
          stroke="currentColor"
          strokeWidth="1.5"
          fill="none"
          className="text-muted-foreground/30"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.6 }}
        />
      </svg>
      <div className="relative z-10">{children}</div>
    </div>
  )
}

export function PushPin({ className = "", color = "text-red-500" }: { className?: string; color?: string }) {
  return (
    <motion.svg
      className={`${className} ${color}`}
      viewBox="0 0 24 24"
      fill="none"
      initial={{ scale: 0, rotate: -45 }}
      animate={{ scale: 1, rotate: 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 15 }}
    >
      <circle cx="12" cy="8" r="6" fill="currentColor" />
      <path d="M12 14L12 22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <ellipse cx="12" cy="8" rx="2" ry="1.5" fill="white" fillOpacity="0.3" />
    </motion.svg>
  )
}

export function ScribbleDecoration({ variant = 1, className = "" }: { variant?: 1 | 2 | 3 | 4; className?: string }) {
  const paths = {
    1: "M5 15C15 5 25 25 35 15C45 5 55 25 65 15", // wave
    2: "M10 10L30 30M30 10L10 30", // x
    3: "M20 5L20 35M5 20L35 20", // plus
    4: "M5 20C15 10 25 30 35 20C35 30 25 25 20 35", // loop
  }
  return (
    <svg className={className} viewBox="0 0 40 40" fill="none">
      <motion.path
        d={paths[variant]}
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
      />
    </svg>
  )
}

export function NotebookLines({ className = "" }: { className?: string }) {
  return (
    <div className={`absolute inset-0 pointer-events-none overflow-hidden ${className}`}>
      <svg className="w-full h-full" preserveAspectRatio="none">
        <defs>
          <pattern id="notebook-lines" width="100%" height="32" patternUnits="userSpaceOnUse">
            <line x1="0" y1="31" x2="100%" y2="31" stroke="currentColor" strokeWidth="1" className="text-blue-200/40" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#notebook-lines)" />
        {/* Red margin line */}
        <line x1="60" y1="0" x2="60" y2="100%" stroke="currentColor" strokeWidth="1" className="text-red-300/30" />
      </svg>
    </div>
  )
}

export function LabeledBox({
  label,
  children,
  className = "",
}: { label: string; children: React.ReactNode; className?: string }) {
  return (
    <div className={`relative ${className}`}>
      {/* Box */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        viewBox="0 0 200 150"
        fill="none"
        preserveAspectRatio="none"
      >
        <motion.path
          d="M10 25C50 22 150 23 190 22C193 50 192 120 190 145C150 148 50 147 10 145C7 120 8 50 10 25"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
          className="text-border"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.8 }}
        />
      </svg>
      {/* Label */}
      <div className="absolute -top-3 left-4 bg-background px-2">
        <span className="font-mono text-xs text-muted-foreground">{label}</span>
      </div>
      <div className="relative z-10 p-6 pt-4">{children}</div>
    </div>
  )
}

// Floating doodle elements for backgrounds
export function DoodleElements({ className = "" }: { className?: string }) {
  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {/* Small circles */}
      <motion.svg
        className="absolute top-[10%] left-[5%] w-8 h-8 text-primary/20"
        viewBox="0 0 30 30"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5 }}
      >
        <circle cx="15" cy="15" r="12" stroke="currentColor" strokeWidth="2" fill="none" />
      </motion.svg>

      {/* Small x marks */}
      <motion.svg
        className="absolute top-[20%] right-[10%] w-6 h-6 text-secondary/20"
        viewBox="0 0 20 20"
        initial={{ opacity: 0, rotate: -45 }}
        animate={{ opacity: 1, rotate: 0 }}
        transition={{ delay: 0.7 }}
      >
        <path d="M4 4L16 16M16 4L4 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </motion.svg>

      {/* Triangle */}
      <motion.svg
        className="absolute bottom-[30%] left-[8%] w-10 h-10 text-primary/15"
        viewBox="0 0 40 40"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9 }}
      >
        <path d="M20 5L35 35H5L20 5Z" stroke="currentColor" strokeWidth="2" fill="none" />
      </motion.svg>

      {/* Dots */}
      <motion.svg
        className="absolute top-[60%] right-[15%] w-12 h-4 text-primary/20"
        viewBox="0 0 50 10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1 }}
      >
        <circle cx="5" cy="5" r="3" fill="currentColor" />
        <circle cx="20" cy="5" r="3" fill="currentColor" />
        <circle cx="35" cy="5" r="3" fill="currentColor" />
      </motion.svg>

      {/* Squiggle */}
      <motion.svg
        className="absolute bottom-[15%] right-[25%] w-20 h-6 text-secondary/15"
        viewBox="0 0 80 20"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.3 }}
      >
        <path
          d="M2 10C12 5 22 15 32 10C42 5 52 15 62 10C72 5 78 10 78 10"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
        />
      </motion.svg>

      {/* Star */}
      <motion.svg
        className="absolute top-[40%] left-[15%] w-6 h-6 text-yellow-400/30"
        viewBox="0 0 24 24"
        initial={{ opacity: 0, rotate: -30 }}
        animate={{ opacity: 1, rotate: 0 }}
        transition={{ delay: 1.5 }}
      >
        <path d="M12 2L14 9H21L15 13L17 20L12 16L7 20L9 13L3 9H10L12 2Z" fill="currentColor" />
      </motion.svg>

      {/* Spiral */}
      <motion.svg
        className="absolute bottom-[40%] right-[8%] w-10 h-10 text-primary/10"
        viewBox="0 0 40 40"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.7 }}
      >
        <motion.path
          d="M20 20C20 15 25 15 25 20C25 27 13 27 13 20C13 10 30 10 30 20C30 32 8 32 8 20"
          stroke="currentColor"
          strokeWidth="1.5"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, delay: 1.7 }}
        />
      </motion.svg>

      {/* Arrow doodle */}
      <motion.svg
        className="absolute top-[75%] left-[20%] w-12 h-8 text-secondary/20"
        viewBox="0 0 50 30"
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 2 }}
      >
        <path
          d="M5 15C15 15 30 15 40 15M40 15L32 8M40 15L32 22"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </motion.svg>
    </div>
  )
}
