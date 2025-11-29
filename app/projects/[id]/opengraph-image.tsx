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
            background: 'white',
            width: '100%',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '40px',
            textAlign: 'center',
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '40px',
            }}
          >
            <div
              style={{
                width: '80px',
                height: '80px',
                background: '#3b82f6',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                fontSize: '40px',
                fontWeight: 'bold',
              }}
            >
              √L
            </div>
          </div>
          <h1 style={{ fontSize: '48px', fontWeight: 'bold', margin: '0 0 20px' }}>
            SQRT Labs
          </h1>
          <p style={{ fontSize: '32px', margin: '0', color: '#666' }}>
            Project Not Found
          </p>
        </div>
      ),
      {
        ...size,
      }
    )
  }

  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 48,
          background: 'white',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '60px',
          textAlign: 'center',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: '40px',
          }}
        >
          <div
            style={{
              width: '80px',
              height: '80px',
              background: '#3b82f6',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              fontSize: '40px',
              fontWeight: 'bold',
            }}
          >
            √L
          </div>
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '20px',
          }}
        >
          <div
            style={{
              fontSize: '24px',
              background: '#f3f4f6',
              padding: '8px 16px',
              borderRadius: '20px',
              fontWeight: '600',
            }}
          >
            Project
          </div>
          <h1
            style={{
              fontSize: '56px',
              fontWeight: 'bold',
              margin: '0',
              maxWidth: '80%',
              lineHeight: '1.2',
            }}
          >
            {project.title}
          </h1>
          <p
            style={{
              fontSize: '32px',
              margin: '20px 0 0',
              color: '#666',
              maxWidth: '80%',
            }}
          >
            SQRT Labs Project
          </p>
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}