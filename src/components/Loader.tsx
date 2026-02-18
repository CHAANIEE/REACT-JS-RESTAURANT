import React from 'react'
import { siteConfig } from '../data/siteConfig'

const Loader: React.FC = () => (
  <div style={{ position: 'fixed', inset: 0, backgroundColor: '#1a1a1a', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', zIndex: 9999 }}>
    <div style={{ fontFamily: 'Playfair Display, serif', color: '#f39c12', fontSize: 'clamp(1.5rem, 4vw, 2.2rem)', fontWeight: 700, marginBottom: '2rem', letterSpacing: 2 }}>
      🍽 {siteConfig.name}
    </div>
    <div style={{ display: 'flex', gap: 8 }}>
      {[0, 1, 2].map(i => (
        <div key={i} style={{
          width: 10, height: 10, borderRadius: '50%', backgroundColor: '#c0392b',
          animation: `bounce 0.8s ease-in-out ${i * 0.15}s infinite alternate`,
        }} />
      ))}
    </div>
    <style>{`@keyframes bounce { from { transform: translateY(0); opacity:0.4; } to { transform: translateY(-14px); opacity:1; } }`}</style>
  </div>
)

export default Loader