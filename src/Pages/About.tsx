import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const team = [
  { name: 'Marco Reyes', role: 'Head Chef', image: 'https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=300' },
  { name: 'Sofia Lim', role: 'Sous Chef', image: 'https://images.unsplash.com/photo-1607631568010-a87245c0daf8?w=300' },
  { name: 'Carlos Santos', role: 'Pastry Chef', image: 'https://images.unsplash.com/photo-1581299894007-aaa50297cf16?w=300' },
]

const About: React.FC = () => {
  return (
    <>
      {/* Header */}
      <section style={{ backgroundColor: '#1a1a1a', color: '#fff', padding: 'clamp(50px, 8vw, 80px) 0 clamp(30px, 5vw, 50px)', textAlign: 'center' }}>
        <Container>
          <p style={{ color: '#f39c12', letterSpacing: 3, textTransform: 'uppercase', fontSize: '0.85rem' }}>Who We Are</p>
          <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(2rem, 5vw, 3rem)' }}>About La Bella</h1>
          <div style={{ width: 60, height: 3, backgroundColor: '#c0392b', margin: '1rem auto 0' }} />
        </Container>
      </section>

      {/* Story */}
      <section className="section">
        <Container>
          <Row className="align-items-center g-4 g-md-5">
            <Col xs={12} md={6}>
              <img
                src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600"
                alt="Restaurant interior"
                style={{ width: '100%', borderRadius: 12, boxShadow: '0 10px 40px rgba(0,0,0,0.1)' }}
              />
            </Col>
            <Col xs={12} md={6}>
              <p style={{ color: '#c0392b', letterSpacing: 3, textTransform: 'uppercase', fontSize: '0.85rem' }}>Our Story</p>
              <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(1.5rem, 3vw, 2.2rem)', marginBottom: '1.5rem' }}>
                A Passion for <span style={{ color: '#c0392b' }}>Fine Food</span>
              </h2>
              <p style={{ color: '#555', lineHeight: 1.9, marginBottom: '1rem' }}>
                Founded in 2010, La Bella was born from a dream to bring the warmth of Italian home cooking to the heart of Manila. Our founders, Marco and Sofia, trained under Michelin-starred chefs in Rome before returning to share their passion.
              </p>
              <p style={{ color: '#555', lineHeight: 1.9 }}>
                Every dish on our menu tells a story — from the hand-selected ingredients sourced from local farms to the centuries-old recipes reimagined for the modern palate.
              </p>

              <Row className="mt-4 text-center g-2">
                {[['15+', 'Years of Excellence'], ['50K+', 'Happy Guests'], ['30+', 'Award Wins']].map(([num, label]) => (
                  <Col key={label} xs={4}>
                    <h3 style={{ color: '#c0392b', fontFamily: 'Playfair Display, serif', fontSize: 'clamp(1.2rem, 3vw, 1.75rem)' }}>{num}</h3>
                    <small style={{ color: '#777', fontSize: 'clamp(0.7rem, 1.5vw, 0.875rem)' }}>{label}</small>
                  </Col>
                ))}
              </Row>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Team */}
      <section style={{ backgroundColor: '#f5f0eb', padding: 'clamp(40px, 8vw, 80px) 0' }}>
        <Container>
          <div className="text-center mb-5">
            <p style={{ color: '#c0392b', letterSpacing: 3, textTransform: 'uppercase', fontSize: '0.85rem' }}>The People</p>
            <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(1.5rem, 3vw, 2.2rem)' }}>Meet Our Team</h2>
            <div style={{ width: 60, height: 3, backgroundColor: '#c0392b', margin: '1rem auto 0' }} />
          </div>
          <Row className="g-4 justify-content-center">
            {team.map(({ name, role, image }) => (
              <Col key={name} xs={12} sm={6} md={4} className="text-center team-card">
                <img
                  src={image}
                  alt={name}
                  style={{
                    width: 'clamp(120px, 20vw, 160px)',
                    height: 'clamp(120px, 20vw, 160px)',
                    borderRadius: '50%',
                    objectFit: 'cover',
                    marginBottom: '1rem',
                    boxShadow: '0 6px 20px rgba(0,0,0,0.12)',
                  }}
                />
                <h5 style={{ fontFamily: 'Playfair Display, serif' }}>{name}</h5>
                <p style={{ color: '#c0392b', fontWeight: 600, fontSize: '0.9rem' }}>{role}</p>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </>
  )
}

export default About