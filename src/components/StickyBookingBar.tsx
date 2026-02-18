import React, { useState, useEffect } from 'react'
import { Container } from 'react-bootstrap'
import { useNavigate, useLocation } from 'react-router-dom'

const StickyBookingBar: React.FC = () => {
  const [visible, setVisible]   = useState(false)
  const navigate                = useNavigate()
  const { pathname }            = useLocation()
  const isReservationPage       = pathname === '/reservation'

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  if (!visible || isReservationPage) return null

  return (
    <div style={{ position: 'fixed', bottom: 0, left: 0, right: 0, zIndex: 998, backgroundColor: '#111', borderTop: '2px solid #c0392b', padding: '11px 0', boxShadow: '0 -4px 20px rgba(0,0,0,0.35)' }}>
      <Container>
        <div className="d-flex align-items-center justify-content-between gap-3 flex-wrap">
          <div>
            <span style={{ color: '#fff', fontFamily: 'Playfair Display, serif', fontSize: 'clamp(0.88rem, 2vw, 1.05rem)' }}>
              🍽 Ready for an unforgettable meal?
            </span>
            <span className="sticky-bar-text" style={{ color: '#666', fontSize: '0.82rem', marginLeft: 8 }}>
              Limited tables available tonight
            </span>
          </div>
          <button onClick={() => navigate('/reservation')}
            style={{ backgroundColor: '#c0392b', color: '#fff', border: 'none', borderRadius: 6, padding: '9px 26px', fontWeight: 700, cursor: 'pointer', fontSize: '0.9rem', whiteSpace: 'nowrap', transition: 'background-color 0.2s' }}
            onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#96281b')}
            onMouseLeave={e => (e.currentTarget.style.backgroundColor = '#c0392b')}
          >Book a Table →</button>
        </div>
      </Container>
    </div>
  )
}

export default StickyBookingBar