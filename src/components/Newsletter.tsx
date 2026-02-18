import React, { useState } from 'react'
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap'

const Newsletter: React.FC = () => {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!email || !email.includes('@')) {
      setError('Please enter a valid email address')
      return
    }

    // In a real app, send this to your backend
    console.log('Newsletter signup:', email)
    
    setSubmitted(true)
    setEmail('')
    setError('')
    
    setTimeout(() => setSubmitted(false), 4000)
  }

  return (
    <section style={{ backgroundColor: '#1a1a1a', padding: 'clamp(50px, 8vw, 80px) 0', color: '#fff' }}>
      <Container>
        <Row className="align-items-center g-4">
          <Col xs={12} lg={6}>
            <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', marginBottom: '1rem' }}>
              Join Our Newsletter
            </h3>
            <p style={{ color: '#ccc', fontSize: 'clamp(0.9rem, 2vw, 1rem)', marginBottom: 0 }}>
              Get exclusive offers, special events, and culinary updates delivered to your inbox.
            </p>
          </Col>
          
          <Col xs={12} lg={6}>
            {submitted && (
              <Alert variant="success" className="mb-3" style={{ backgroundColor: '#28a745', border: 'none' }}>
                Thank you! Check your email to confirm your subscription.
              </Alert>
            )}
            
            {error && (
              <Alert variant="danger" className="mb-3" style={{ backgroundColor: '#c0392b', border: 'none' }}>
                {error}
              </Alert>
            )}
            
            <Form onSubmit={handleSubmit} className="d-flex gap-2">
              <Form.Control
                type="email"
                placeholder="Your email address"
                value={email}
                onChange={e => setEmail(e.target.value)}
                style={{
                  backgroundColor: '#2a2a2a',
                  border: '1px solid #444',
                  color: '#fff',
                  padding: '12px 16px',
                }}
              />
              <Button
                type="submit"
                style={{
                  backgroundColor: '#c0392b',
                  border: 'none',
                  fontWeight: 600,
                  padding: '12px 32px',
                  whiteSpace: 'nowrap',
                }}
              >
                Subscribe
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Newsletter
