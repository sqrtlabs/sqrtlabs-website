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
  // We can't easily load local fonts in edge without fetch, so we'll rely on system sans-serif 
  // but style it to look clean.
  
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

        {/* Decorate Elements (Hand drawn style circles/lines) */}
        <svg
          style={{ position: 'absolute', top: '50px', right: '50px' }}
          width="100"
          height="100"
          viewBox="0 0 100 100"
        >
          <circle cx="50" cy="50" r="40" stroke="#3b82f6" strokeWidth="4" fill="none" opacity="0.2" />
          <path d="M20 20 L80 80" stroke="#3b82f6" strokeWidth="4" opacity="0.2" />
          <path d="M80 20 L20 80" stroke="#3b82f6" strokeWidth="4" opacity="0.2" />
        </svg>

         <svg
          style={{ position: 'absolute', bottom: '50px', left: '50px' }}
          width="120"
          height="20"
          viewBox="0 0 120 20"
        >
          <path d="M0 10 Q 30 0, 60 10 T 120 10" stroke="#ef4444" strokeWidth="4" fill="none" opacity="0.3" />
        </svg>

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
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '30px',
            }}
          >
             {/* Logo */}
             <div style={{ display: 'flex', alignItems: 'center' }}>
                <div 
                   style={{ 
                     fontSize: '60px', 
                     fontWeight: '900', 
                     marginRight: '10px',
                     color: '#171717'
                   }}
                >
                  √
                </div>
                <div style={{ fontSize: '50px', fontWeight: 'bold', color: '#171717' }}>
                   SQRT Labs
                </div>
             </div>
          </div>

          <div style={{ width: '100px', height: '4px', background: '#3b82f6', marginBottom: '30px' }} />

          <div
            style={{
              fontSize: '32px',
              textAlign: 'center',
              maxWidth: '600px',
              lineHeight: 1.4,
              color: '#404040',
              fontWeight: '500',
            }}
          >
            We build blockchain products that actually make sense.
          </div>

          <div style={{ display: 'flex', gap: '20px', marginTop: '40px' }}>
             <div style={{ background: '#f3f4f6', padding: '10px 20px', borderRadius: '10px', fontSize: '24px', color: '#666' }}>Smart Contracts</div>
             <div style={{ background: '#f3f4f6', padding: '10px 20px', borderRadius: '10px', fontSize: '24px', color: '#666' }}>dApps</div>
             <div style={{ background: '#f3f4f6', padding: '10px 20px', borderRadius: '10px', fontSize: '24px', color: '#666' }}>Audit</div>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}