import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import ContactForm from '../components/ContactForm.tsx'

const Contact: React.FC = () => {
  return (
    <>
      {/* Header */}
      <section style={{ backgroundColor: '#1a1a1a', color: '#fff', padding: 'clamp(50px, 8vw, 80px) 0 clamp(30px, 5vw, 50px)', textAlign: 'center' }}>
        <Container>
          <p style={{ color: '#f39c12', letterSpacing: 3, textTransform: 'uppercase', fontSize: '0.85rem' }}>Get In Touch</p>
          <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(2rem, 5vw, 3rem)' }}>Contact Us</h1>
          <div style={{ width: 60, height: 3, backgroundColor: '#c0392b', margin: '1rem auto 0' }} />
        </Container>
      </section>

      <section className="section">
        <Container>
          <Row className="g-4 g-lg-5">
            {/* Info */}
            <Col xs={12} md={5}>
              <h3 style={{ fontFamily: 'Playfair Display, serif', marginBottom: '2rem', fontSize: 'clamp(1.3rem, 3vw, 1.75rem)' }}>Visit Us</h3>

              {[
                { icon: '📍', title: 'Address', lines: ['123 Fine Dining Ave', 'Makati City, Manila, PH 1200'] },
                { icon: '📞', title: 'Phone', lines: ['+63 917 123 4567', '+63 2 8123 4567'] },
                { icon: '✉️', title: 'Email', lines: ['hello@labella.com', 'reservations@labella.com'] },
                { icon: '🕐', title: 'Hours', lines: ['Mon – Fri: 11:00 AM – 10:00 PM', 'Sat – Sun: 10:00 AM – 11:00 PM'] },
              ].map(({ icon, title, lines }) => (
                <div key={title} className="d-flex mb-4 contact-info-item">
                  <div style={{ fontSize: '1.5rem', marginRight: '1rem', minWidth: 40 }}>{icon}</div>
                  <div>
                    <h6 style={{ fontWeight: 700, marginBottom: 4 }}>{title}</h6>
                    {lines.map(l => <p key={l} style={{ color: '#666', marginBottom: 2, fontSize: 'clamp(0.85rem, 2vw, 1rem)' }}>{l}</p>)}
                  </div>
                </div>
              ))}

              <div style={{ borderRadius: 12, overflow: 'hidden', marginTop: '1rem' }}>
                <iframe
                  title="Restaurant Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3861.802!2d121.0244!3d14.5547!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTTCsDMzJzE3LjAiTiAxMjHCsDAxJzI3LjgiRQ!5e0!3m2!1sen!2sph!4v1"
                  width="100%"
                  height="200"
                  style={{ border: 0, display: 'block' }}
                  loading="lazy"
                />
              </div>
            </Col>

            {/* Form */}
            <Col xs={12} md={7}>
              <div className="contact-form-box" style={{ backgroundColor: '#fff', padding: '2.5rem', borderRadius: 12, boxShadow: '0 6px 30px rgba(0,0,0,0.08)' }}>
                <h3 style={{ fontFamily: 'Playfair Display, serif', marginBottom: '1.5rem', fontSize: 'clamp(1.3rem, 3vw, 1.75rem)' }}>Send a Message</h3>
                <ContactForm />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}

export default Contact