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
              border: '2px solid black',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginRight: '20px',
              fontWeight: 'bold',
              fontSize: '40px',
            }}
          >
            âˆš
          </div>
          <div style={{ fontSize: '64px', fontWeight: 'bold' }}>SQRT Labs</div>
        </div>
        <div
          style={{
            fontSize: '36px',
            color: 'gray',
            maxWidth: '80%',
          }}
        >
          Web3 Development Studio
        </div>
        <div
          style={{
            fontSize: '24px',
            color: 'gray',
            marginTop: '40px',
          }}
        >
          Blockchain products that make sense in the real world
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}