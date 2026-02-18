import React from 'react'
import { Container } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import usePageTitle from '../hooks/usePageTitle'

const NotFound: React.FC = () => {
  usePageTitle('404 — Page Not Found')
  const navigate = useNavigate()

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(rgba(0,0,0,0.82), rgba(0,0,0,0.82)), url("https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1600") center/cover',
      display: 'flex', alignItems: 'center', color: '#fff', textAlign: 'center',
    }}>
      <Container>
        <div style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(5rem, 18vw, 10rem)', color: '#f39c12', lineHeight: 1, marginBottom: '0.25rem' }}>
          404
        </div>
        <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(1.4rem, 4vw, 2.4rem)', marginBottom: '1rem' }}>
          This table doesn't exist
        </h2>
        <p style={{ color: '#bbb', fontSize: 'clamp(0.88rem, 2vw, 1.05rem)', maxWidth: 440, margin: '0 auto 2.5rem', lineHeight: 1.8 }}>
          The page you're looking for has left the menu. Let's get you back to something delicious.
        </p>
        <div className="d-flex gap-3 justify-content-center flex-wrap">
          <button onClick={() => navigate('/')}
            style={{ backgroundColor: '#c0392b', color: '#fff', border: 'none', padding: '12px 34px', borderRadius: 6, fontWeight: 700, cursor: 'pointer', fontSize: '0.95rem', letterSpacing: 0.5 }}>
            Back to Home
          </button>
          <button onClick={() => navigate('/menu')}
            style={{ backgroundColor: 'transparent', color: '#fff', border: '2px solid rgba(255,255,255,0.5)', padding: '12px 34px', borderRadius: 6, fontWeight: 700, cursor: 'pointer', fontSize: '0.95rem', letterSpacing: 0.5, transition: 'border-color 0.2s' }}
            onMouseEnter={e => (e.currentTarget.style.borderColor = '#fff')}
            onMouseLeave={e => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.5)')}
          >View Menu</button>
        </div>
      </Container>
    </div>
  )
}

export default NotFound