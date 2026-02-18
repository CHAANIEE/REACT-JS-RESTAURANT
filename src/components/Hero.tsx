import React from 'react'
import { Container, Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

const Hero: React.FC = () => {
  const navigate = useNavigate()

  return (
    <section
      style={{
        minHeight: '92vh',
        background: 'linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url("https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1600") center/cover no-repeat',
        display: 'flex',
        alignItems: 'center',
        color: '#fff',
        padding: '40px 0',
      }}
    >
      <Container>
        <p style={{ color: '#f39c12', letterSpacing: 4, textTransform: 'uppercase', fontSize: '0.85rem' }}>
          Welcome to La Bella
        </p>
        <h1
          style={{
            fontFamily: 'Playfair Display, serif',
            fontSize: 'clamp(2rem, 6vw, 5rem)',
            fontWeight: 700,
            lineHeight: 1.2,
            marginBottom: '1.5rem',
            maxWidth: 700,
          }}
        >
          Fine Dining, <br />
          <span style={{ color: '#f39c12' }}>Unforgettable</span> Experience
        </h1>
        <p style={{
          fontSize: 'clamp(0.95rem, 2vw, 1.2rem)',
          color: '#ddd',
          maxWidth: 500,
          marginBottom: '2rem',
          lineHeight: 1.8,
        }}>
          Crafted with love, served with elegance. Discover a culinary journey that blends tradition with innovation.
        </p>
        <div className="d-flex flex-wrap gap-3 hero-buttons">
          <Button
            size="lg"
            onClick={() => navigate('/menu')}
            style={{ backgroundColor: '#c0392b', border: 'none', padding: '12px 32px', fontWeight: 600 }}
          >
            View Our Menu
          </Button>
          <Button
            size="lg"
            variant="outline-light"
            onClick={() => navigate('/reservation')}
            style={{ padding: '12px 32px', fontWeight: 600 }}
          >
            Reserve a Table
          </Button>
        </div>
      </Container>
    </section>
  )
}

export default Hero