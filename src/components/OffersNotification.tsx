import React, { useState, useEffect } from 'react'
import { Alert, Container, Button } from 'react-bootstrap'

const OffersNotification: React.FC = () => {
  const [show, setShow] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setShow(false), 8000)
    return () => clearTimeout(timer)
  }, [])

  if (!show) return null

  return (
    <div style={{ backgroundColor: '#f39c12', padding: '16px 0', zIndex: 1000 }}>
      <Container>
        <Alert variant="warning" dismissible onClose={() => setShow(false)} style={{ marginBottom: 0, backgroundColor: 'transparent', border: 'none', color: '#1a1a1a' }}>
          <strong>🎉 Special Offer!</strong> Get 20% off on reservations this weekend! Use code: <strong>WEEKEND20</strong>
          <div style={{ marginTop: '8px' }}>
            <Button 
              size="sm" 
              style={{ backgroundColor: '#c0392b', border: 'none', fontWeight: 600 }}
              onClick={() => window.location.href = '/reservation'}
            >
              Book Now
            </Button>
          </div>
        </Alert>
      </Container>
    </div>
  )
}

export default OffersNotification
