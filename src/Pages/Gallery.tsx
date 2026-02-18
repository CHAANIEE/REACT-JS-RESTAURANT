import React, { useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { galleryImages } from '../data/teamData'
import usePageTitle      from '../hooks/usePageTitle'

const categories = ['All', 'Food', 'Ambiance', 'Desserts', 'Drinks', 'Team']

const Gallery: React.FC = () => {
  usePageTitle('Gallery')
  const [active,   setActive]   = useState('All')
  const [lightbox, setLightbox] = useState<string | null>(null)

  const filtered = active === 'All' ? galleryImages : galleryImages.filter(img => img.category === active)

  return (
    <>
      <div className="page-header">
        <Container>
          <span className="section-label" style={{ color: '#f39c12' }}>Our World</span>
          <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(2rem, 5vw, 3rem)', color: '#fff' }}>Gallery</h1>
          <div className="page-header-divider" />
        </Container>
      </div>

      <section className="section">
        <Container>
          {/* Filter Buttons */}
          <div className="d-flex justify-content-center gap-2 flex-wrap mb-5">
            {categories.map(cat => (
              <button key={cat} onClick={() => setActive(cat)}
                style={{
                  backgroundColor: active === cat ? '#c0392b' : 'transparent',
                  border: '2px solid #c0392b',
                  color: active === cat ? '#fff' : '#c0392b',
                  fontWeight: 700, padding: '8px 20px', borderRadius: 50,
                  cursor: 'pointer', transition: 'all 0.2s', fontSize: '0.85rem', letterSpacing: 0.4,
                }}>
                {cat}
              </button>
            ))}
          </div>

          {/* Grid */}
          <Row className="g-3">
            {filtered.map(({ src, alt }) => (
              <Col key={src} xs={6} md={4} lg={3}>
                <div onClick={() => setLightbox(src)} className="gallery-img"
                  style={{ borderRadius: 10, overflow: 'hidden', cursor: 'zoom-in', position: 'relative', aspectRatio: '1', backgroundColor: '#eee' }}
                  onMouseEnter={e => { const ov = e.currentTarget.querySelector('.ov') as HTMLElement; if (ov) ov.style.opacity = '1' }}
                  onMouseLeave={e => { const ov = e.currentTarget.querySelector('.ov') as HTMLElement; if (ov) ov.style.opacity = '0' }}
                >
                  <img src={src} alt={alt} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', transition: 'transform 0.4s' }} />
                  <div className="ov" style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(192,57,43,0.65)', display: 'flex', alignItems: 'center', justifyContent: 'center', opacity: 0, transition: 'opacity 0.3s', fontSize: '1.8rem' }}>
                    🔍
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Lightbox */}
      {lightbox && (
        <div onClick={() => setLightbox(null)}
          style={{ position: 'fixed', inset: 0, zIndex: 9999, backgroundColor: 'rgba(0,0,0,0.94)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1rem', cursor: 'zoom-out' }}>
          <img src={lightbox} alt="Gallery" onClick={e => e.stopPropagation()}
            style={{ maxWidth: '90vw', maxHeight: '90vh', borderRadius: 8, objectFit: 'contain', boxShadow: '0 0 60px rgba(0,0,0,0.6)' }} />
          <button onClick={() => setLightbox(null)}
            style={{ position: 'absolute', top: 18, right: 22, backgroundColor: 'transparent', border: 'none', color: '#fff', fontSize: '2rem', cursor: 'pointer', lineHeight: 1 }}>✕</button>
        </div>
      )}
    </>
  )
}

export default Gallery