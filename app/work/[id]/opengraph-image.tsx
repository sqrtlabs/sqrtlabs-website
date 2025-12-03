import { ImageResponse } from 'next/og'
import projectsData from '@/data/projects.json'

// Route segment config
export const runtime = 'edge'

// Image metadata
export const alt = 'SQRT Labs Project'
export const size = {
  width: 1200,
  height: 630,
}

export const contentType = 'image/png'

type ProjectData = {
  title: string
  description: string
  longDescription: string
  tags: string[]
  color: string
  annotation: string
  featured: boolean
  challenges: string[]
  solutions: string[]
  results: string[]
  techStack: string[]
  timeline: string
  team: string
  subtitle?: string
}

interface Props {
  params: Promise<{ id: string }>
}

// Image generation
export default async function Image({ params }: Props) {
  const { id: projectId } = await params
  const project = (projectsData as Record<string, ProjectData>)[projectId]

  if (!project) {
     return new ImageResponse(
        (
           <div
              style={{
                 fontSize: 48,
                 background: '#FAFAFA',
                 width: '100%',
                 height: '100%',
                 display: 'flex',
                 flexDirection: 'column',
                 alignItems: 'center',
                 justifyContent: 'center',
              }}
           >
              Project Not Found
           </div>
        ),
        { ...size }
     )
  }

  // Determine a color accent based on project color if possible, else default blue
  const accentColor = '#3b82f6' 

  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 48,
          background: '#FAFAFA',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
        }}
      >
        {/* Background Grid Pattern */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: 'radial-gradient(#e5e7eb 1px, transparent 1px)',
            backgroundSize: '30px 30px',
            opacity: 0.5,
          }}
        />

        {/* Main Card */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            justifyContent: 'center',
            background: 'white',
            padding: '60px 80px',
            borderRadius: '20px',
            border: '4px solid #171717',
            boxShadow: `10px 10px 0px 0px ${accentColor}`,
            zIndex: 10,
            maxWidth: '1000px',
            width: '90%'
          }}
        >
          {/* Header with Logo */}
          <div
             style={{
               display: 'flex',
               alignItems: 'center',
               marginBottom: '40px',
               width: '100%',
               borderBottom: '2px solid #e5e7eb',
               paddingBottom: '20px'
             }}
          >
             <div style={{ marginRight: '15px', display: 'flex' }}>
               <svg width="40" height="40" viewBox="0 0 180 180" fill="none">
                 <rect width="180" height="180" rx="37" fill="black" />
                 <g style={{ transform: "scale(0.95)", transformOrigin: "center" }}>
                   <path fill="white" d="M101.141 53H136.632C151.023 53 162.689 64.6662 162.689 79.0573V112.904H148.112V79.0573C148.112 78.7105 148.098 78.3662 148.072 78.0251L112.581 112.898C112.701 112.902 112.821 112.904 112.941 112.904H148.112V126.672H112.941C98.5504 126.672 86.5638 114.891 86.5638 100.5V66.7434H101.141V100.5C101.141 101.15 101.191 101.792 101.289 102.422L137.56 66.7816C137.255 66.7563 136.945 66.7434 136.632 66.7434H101.141V53Z" />
                   <path fill="white" d="M65.2926 124.136L14 66.7372H34.6355L64.7495 100.436V66.7372H80.1365V118.47C80.1365 126.278 70.4953 129.958 65.2926 124.136Z" />
                 </g>
               </svg>
             </div>
             <div style={{ fontSize: '24px', fontWeight: 'bold', color: '#171717', marginRight: 'auto' }}>SQRT Labs</div>
             
             {project.featured && (
                <div style={{ 
                   fontSize: '20px', 
                   background: '#fef3c7', 
                   color: '#d97706', 
                   padding: '5px 15px', 
                   borderRadius: '20px',
                   fontWeight: '600'
                }}>
                   Featured Project
                </div>
             )}
          </div>

          <div
             style={{
               fontSize: '20px',
               color: '#6b7280',
               fontWeight: '600',
               textTransform: 'uppercase',
               letterSpacing: '1px',
               marginBottom: '10px'
             }}
          >
             Case Study
          </div>

          <h1
            style={{
              fontSize: '64px',
              fontWeight: '900',
              margin: '0 0 10px 0',
              lineHeight: '1.1',
              color: '#171717',
            }}
          >
            {project.title}
          </h1>

          {project.subtitle && (
            <div style={{ fontSize: '30px', color: '#4b5563', marginBottom: '30px', fontWeight: '500' }}>
               {project.subtitle}
            </div>
          )}

          <div style={{ display: 'flex', gap: '15px', marginTop: '20px', flexWrap: 'wrap' }}>
             {project.tags.slice(0, 4).map((tag, i) => (
                <div key={i} style={{ 
                   background: '#eff6ff', 
                   border: '1px solid #bfdbfe',
                   padding: '8px 20px', 
                   borderRadius: '8px', 
                   fontSize: '20px', 
                   color: '#1e40af',
                   fontWeight: '500'
                }}>
                   {tag}
                </div>
             ))}
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}