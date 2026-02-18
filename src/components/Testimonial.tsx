import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { testimonialsData } from '../data/teamData'

const Stars: React.FC<{ n: number }> = ({ n }) => (
  <div style={{ color: '#f39c12', fontSize: '1rem', marginBottom: 10, letterSpacing: 2 }}>
    {'★'.repeat(n)}{'☆'.repeat(5 - n)}
  </div>
)

const Testimonials: React.FC = () => (
  <section className="section section-dark">
    <Container>
      <div className="text-center mb-5">
        <span className="section-label" style={{ color: '#f39c12' }}>What People Say</span>
        <h2 className="section-title section-title-white">Guest Reviews</h2>
        <div className="divider" />
      </div>
      <Row className="g-4">
        {testimonialsData.map(({ name, location, rating, comment, avatar }) => (
          <Col key={name} xs={12} md={4}>
            <div className="card-hover h-100"
              style={{ backgroundColor: '#1e1e1e', borderRadius: 12, padding: '1.75rem', borderLeft: '4px solid #c0392b' }}>
              <Stars n={rating} />
              <p style={{ color: '#bbb', lineHeight: 1.82, fontStyle: 'italic', marginBottom: '1.5rem', fontSize: '0.92rem' }}>
                "{comment}"
              </p>
              <div className="d-flex align-items-center gap-3">
                <img src={avatar} alt={name} style={{ width: 46, height: 46, borderRadius: '50%', objectFit: 'cover', border: '2px solid #c0392b' }} />
                <div>
                  <div style={{ color: '#fff', fontWeight: 700, fontSize: '0.9rem' }}>{name}</div>
                  <div style={{ color: '#666', fontSize: '0.78rem' }}>{location}</div>
                </div>
              </div>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  </section>
)

export default Testimonials