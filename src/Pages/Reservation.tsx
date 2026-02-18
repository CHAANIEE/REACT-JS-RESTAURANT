import React, { useState } from 'react'
import { Container, Row, Col, Button, Modal } from 'react-bootstrap'
import ReservationForm from '../components/ReservationForm.tsx'

const Reservation: React.FC = () => {
  const [show, setShow] = useState(false)

  return (
    <>
      {/* Header */}
      <section
        style={{
          background: 'linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url("https://images.unsplash.com/photo-1424847651672-bf20a4b0982b?w=1600") center/cover',
          color: '#fff',
          padding: 'clamp(60px, 10vw, 100px) 0 clamp(40px, 6vw, 60px)',
          textAlign: 'center',
        }}
      >
        <Container>
          <p style={{ color: '#f39c12', letterSpacing: 3, textTransform: 'uppercase', fontSize: '0.85rem' }}>Book a Table</p>
          <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(2rem, 5vw, 3rem)' }}>Make a Reservation</h1>
          <p style={{ color: '#ccc', marginTop: '1rem', padding: '0 1rem', fontSize: 'clamp(0.9rem, 2vw, 1rem)' }}>
            We'd love to host you. Open the booking form to secure your table.
          </p>
        </Container>
      </section>

      <section className="section">
        <Container>
          <Row className="g-4">
            <Col xs={12} lg={8}>
              <div className="reservation-form-box" style={{ backgroundColor: '#fff', padding: '2.5rem', borderRadius: 12, boxShadow: '0 6px 30px rgba(0,0,0,0.08)', textAlign: 'center' }}>
                <h4 style={{ marginBottom: '1.25rem' }}>Ready to book?</h4>
                <p style={{ color: '#666', marginBottom: '1.25rem' }}>Click the button to open the reservation form in a modal.</p>
                <Button onClick={() => setShow(true)} size="lg" style={{ backgroundColor: '#c0392b', border: 'none', fontWeight: 700 }}>
                  Open Booking Form
                </Button>
              </div>
            </Col>

            {/* Side info */}
            <Col xs={12} lg={4} className="reservation-info">
              <div style={{ backgroundColor: '#1a1a1a', color: '#fff', padding: '2rem', borderRadius: 12 }}>
                <h5 style={{ fontFamily: 'Playfair Display, serif', color: '#f39c12', marginBottom: '1.5rem' }}>Good to Know</h5>
                {[
                  { icon: '📅', text: 'Reservations can be made up to 30 days in advance.' },
                  { icon: '⏰', text: 'We hold your table for 15 minutes past your reservation time.' },
                  { icon: '👥', text: 'For parties of 9+, please call us directly.' },
                  { icon: '🎂', text: "Let us know if you're celebrating a special occasion!" },
                  { icon: '📞', text: 'Call +63 917 123 4567 for immediate assistance.' },
                ].map(({ icon, text }) => (
                  <div key={text} className="d-flex mb-3">
                    <span style={{ fontSize: '1.2rem', marginRight: '0.75rem' }}>{icon}</span>
                    <p style={{ color: '#ccc', fontSize: '0.9rem', lineHeight: 1.7, marginBottom: 0 }}>{text}</p>
                  </div>
                ))}
              </div>
            </Col>
          </Row>

          <Modal show={show} onHide={() => setShow(false)} centered size="lg">
            <Modal.Header closeButton>
              <Modal.Title>Reserve a Table</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <ReservationForm />
            </Modal.Body>
          </Modal>
        </Container>
      </section>
    </>
  )
}

export default Reservation