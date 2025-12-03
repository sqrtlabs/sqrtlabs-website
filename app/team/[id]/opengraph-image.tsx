import { ImageResponse } from 'next/og'
import teamData from '@/data/team.json'
import { readFile } from 'node:fs/promises'
import { join } from 'node:path'

// Route segment config
export const runtime = 'nodejs'

// Image metadata
export const alt = 'SQRT Labs Team Member'
export const size = {
  width: 1200,
  height: 630,
}

export const contentType = 'image/png'

interface Props {
  params: Promise<{ id: string }>
}

// Image generation
export default async function Image({ params }: Props) {
  const { id } = await params
  const member = teamData.find((m) => m.id === id)
  const logoData = await readFile(join(process.cwd(), 'public/sqrtlabs-icon.png'))

  if (!member) {
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
              Team Member Not Found
           </div>
        ),
        { ...size }
     )
  }

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
            alignItems: 'center',
            justifyContent: 'center',
            background: 'white',
            padding: '60px 80px',
            borderRadius: '20px',
            border: '4px solid #171717',
            boxShadow: '10px 10px 0px 0px #3b82f6',
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
             }}
          >
             <div style={{ marginRight: '15px', display: 'flex' }}>
                {/* @ts-ignore */}
                <img src={logoData.buffer} width="50" height="50" />
             </div>
             <div style={{ fontSize: '30px', fontWeight: 'bold', color: '#171717' }}>SQRT Labs Team</div>
          </div>

          <div
             style={{
               width: '150px',
               height: '150px',
               borderRadius: '50%',
               background: '#e0e7ff',
               display: 'flex',
               alignItems: 'center',
               justifyContent: 'center',
               fontSize: '60px',
               fontWeight: 'bold',
               color: '#3730a3',
               marginBottom: '30px',
               border: '4px solid #3730a3',
               overflow: 'hidden',
               position: 'relative',
             }}
          >
             {member.image ? (
               // @ts-ignore
               <img
                  src={member.image}
                  width="150"
                  height="150"
                  style={{
                    objectFit: 'cover',
                    width: '100%',
                    height: '100%',
                  }}
               />
             ) : (
               member.name.charAt(0)
             )}
          </div>

          <h1
            style={{
              fontSize: '56px',
              fontWeight: '900',
              margin: '0 0 10px 0',
              lineHeight: '1.1',
              color: '#171717',
              textAlign: 'center'
            }}
          >
            {member.name}
          </h1>

          <div
             style={{
               fontSize: '32px',
               color: '#4b5563',
               marginBottom: '30px',
               fontWeight: '500',
               textAlign: 'center',
               background: '#f3f4f6',
               padding: '10px 30px',
               borderRadius: '50px'
             }}
          >
             {member.role}
          </div>

          <div style={{ display: 'flex', gap: '15px', marginTop: '10px', flexWrap: 'wrap', justifyContent: 'center' }}>
             {member.skills.slice(0, 3).map((skill, i) => (
                <div key={i} style={{ 
                   fontSize: '24px', 
                   color: '#6b7280',
                   fontWeight: '400'
                }}>
                   {skill} {i < Math.min(member.skills.length, 3) - 1 ? '•' : ''}
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
