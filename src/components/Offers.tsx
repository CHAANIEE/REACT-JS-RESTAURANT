import React from 'react'
import { Container, Row, Col, Badge } from 'react-bootstrap'
import { offersData } from '../data/teamData'

const Offers: React.FC = () => (
  <section className="section section-light">
    <Container>
      <div className="text-center mb-5">
        <span className="section-label">Save More</span>
        <h2 className="section-title">Special Offers</h2>
        <div className="divider" />
      </div>
      <Row className="g-4">
        {offersData.map(({ icon, title, subtitle, description, badge, color }) => (
          <Col key={title} xs={12} md={4}>
            <div className="card-hover h-100"
              style={{ backgroundColor: '#fff', borderRadius: 12, padding: '2rem', boxShadow: '0 4px 18px rgba(0,0,0,0.07)', borderTop: `4px solid ${color}`, position: 'relative', overflow: 'hidden' }}>
              <Badge style={{ position: 'absolute', top: 14, right: 14, backgroundColor: color, fontSize: '0.7rem', padding: '5px 9px' }}>
                {badge}
              </Badge>
              <div style={{ fontSize: '2.6rem', marginBottom: '1rem' }}>{icon}</div>
              <h5 style={{ fontFamily: 'Playfair Display, serif', marginBottom: 4 }}>{title}</h5>
              <p style={{ color, fontWeight: 700, fontSize: '0.82rem', marginBottom: '0.75rem', textTransform: 'uppercase', letterSpacing: 1 }}>{subtitle}</p>
              <p style={{ color: '#666', fontSize: '0.88rem', lineHeight: 1.72, marginBottom: 0 }}>{description}</p>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  </section>
)

export default Offers