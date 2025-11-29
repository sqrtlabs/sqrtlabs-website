"use client"

export function GridPattern() {
  return (
    <div className="absolute inset-0 -z-20 overflow-hidden">
      <svg className="absolute inset-0 h-full w-full stroke-border/30" aria-hidden="true">
        <defs>
          <pattern id="grid-pattern" width="60" height="60" patternUnits="userSpaceOnUse">
            <path d="M 60 0 L 0 0 0 60" fill="none" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid-pattern)" />
      </svg>

      {/* Gradient overlay to fade the grid */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
    </div>
  )
}
