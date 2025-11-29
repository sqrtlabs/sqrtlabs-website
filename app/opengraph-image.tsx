import { ImageResponse } from 'next/og'

// Route segment config
export const runtime = 'edge'

// Image metadata
export const alt = 'SQRT Labs - Web3 Development Studio'
export const size = {
  width: 1200,
  height: 630,
}

export const contentType = 'image/png'

// Image generation
export default async function Image() {
  console.log('Generating OG image')
  
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
          <h1
            style={{
              fontSize: '72px',
              fontWeight: 'bold',
              margin: '0',
              maxWidth: '90%',
              lineHeight: '1.2',
            }}
          >
            SQRT Labs
          </h1>
          <p
            style={{
              fontSize: '36px',
              margin: '0',
              color: '#666',
              maxWidth: '80%',
            }}
          >
            Web3 Development Studio
          </p>
          <p
            style={{
              fontSize: '28px',
              margin: '20px 0 0',
              color: '#999',
              maxWidth: '80%',
            }}
          >
            Blockchain products that make sense in the real world
          </p>
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}