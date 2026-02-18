import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

const Footer: React.FC = () => {
  return (
    <footer style={{ backgroundColor: '#1a1a1a', color: '#ccc', padding: 'clamp(40px, 6vw, 60px) 0 30px' }}>
      <Container>
        <Row className="mb-4 g-4">
          {/* Brand */}
          <Col xs={12} md={4}>
            <h4 style={{ fontFamily: 'Playfair Display, serif', color: '#f39c12', fontSize: 'clamp(1.3rem, 3vw, 1.8rem)' }}>🍽 La Bella</h4>
            <p className="mt-3" style={{ lineHeight: 1.8, fontSize: 'clamp(0.85rem, 2vw, 1rem)' }}>
              Experience fine dining with a warm, welcoming atmosphere. Every dish is crafted with passion and the freshest ingredients.
            </p>
          </Col>

          {/* Quick Links */}
          <Col xs={6} md={4}>
            <h6 style={{ color: '#fff', letterSpacing: 2, textTransform: 'uppercase', marginBottom: '1rem', fontSize: '0.85rem' }}>Quick Links</h6>
            {[
              { path: '/', label: 'Home' },
              { path: '/menu', label: 'Menu' },
              { path: '/about', label: 'About Us' },
              { path: '/reservation', label: 'Reservations' },
              { path: '/contact', label: 'Contact' },
            ].map(({ path, label }) => (
              <div key={path}>
                <NavLink
                  to={path}
                  style={{ color: '#aaa', display: 'block', marginBottom: 6, transition: 'color 0.2s', fontSize: 'clamp(0.85rem, 2vw, 1rem)' }}
                  onMouseEnter={(e: React.MouseEvent<HTMLAnchorElement>) => (e.currentTarget.style.color = '#f39c12')}
                  onMouseLeave={(e: React.MouseEvent<HTMLAnchorElement>) => (e.currentTarget.style.color = '#aaa')}
                >
                  {label}
                </NavLink>
              </div>
            ))}
          </Col>

          {/* Contact Info */}
          <Col xs={6} md={4}>
            <h6 style={{ color: '#fff', letterSpacing: 2, textTransform: 'uppercase', marginBottom: '1rem', fontSize: '0.85rem' }}>Contact Us</h6>
            {[
              '📍 123 Fine Dining Ave, Manila, PH',
              '📞 +63 917 123 4567',
              '✉️ hello@labella.com',
              '🕐 Mon–Sun: 11:00 AM – 10:00 PM',
            ].map(line => (
              <p key={line} style={{ fontSize: 'clamp(0.8rem, 1.8vw, 0.95rem)', marginBottom: 6 }}>{line}</p>
            ))}
          </Col>
        </Row>

        <hr style={{ borderColor: '#333' }} />
        <p className="text-center mb-0" style={{ color: '#555', fontSize: '0.85rem' }}>
          © {new Date().getFullYear()} La Bella Restaurant. All rights reserved.
        </p>
      </Container>
    </footer>
  )
}

export default Footer