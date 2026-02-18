import React, { useState } from 'react'
import { Form, Button, Row, Col, Alert } from 'react-bootstrap'

const ReservationForm: React.FC = () => {
  const [form, setForm] = useState({
    name: '', email: '', phone: '', date: '', time: '', guests: '2', message: ''
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setForm({ name: '', email: '', phone: '', date: '', time: '', guests: '2', message: '' })
  }

  return (
    <>
      {submitted && (
        <Alert variant="success" onClose={() => setSubmitted(false)} dismissible>
          🎉 Reservation confirmed! We'll contact you shortly.
        </Alert>
      )}
      <Form onSubmit={handleSubmit}>
        <Row>
          <Col md={6}>
            <Form.Group className="mb-3">
              <Form.Label>Full Name</Form.Label>
              <Form.Control name="name" value={form.name} onChange={handleChange} placeholder="Juan dela Cruz" required />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" name="email" value={form.email} onChange={handleChange} placeholder="you@email.com" required />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group className="mb-3">
              <Form.Label>Phone</Form.Label>
              <Form.Control name="phone" value={form.phone} onChange={handleChange} placeholder="+63 917 000 0000" required />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group className="mb-3">
              <Form.Label>Number of Guests</Form.Label>
              <Form.Select name="guests" value={form.guests} onChange={handleChange}>
                {[1, 2, 3, 4, 5, 6, 7, 8].map(n => (
                  <option key={n} value={n}>{n} {n === 1 ? 'Guest' : 'Guests'}</option>
                ))}
              </Form.Select>
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group className="mb-3">
              <Form.Label>Date</Form.Label>
              <Form.Control type="date" name="date" value={form.date} onChange={handleChange} required />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group className="mb-3">
              <Form.Label>Time</Form.Label>
              <Form.Select name="time" value={form.time} onChange={handleChange}>
                {['11:00 AM','12:00 PM','1:00 PM','2:00 PM','6:00 PM','7:00 PM','8:00 PM','9:00 PM'].map(t => (
                  <option key={t}>{t}</option>
                ))}
              </Form.Select>
            </Form.Group>
          </Col>
          <Col md={12}>
            <Form.Group className="mb-4">
              <Form.Label>Special Requests (Optional)</Form.Label>
              <Form.Control as="textarea" rows={3} name="message" value={form.message} onChange={handleChange} placeholder="Allergies, special occasion, seating preference..." />
            </Form.Group>
          </Col>
        </Row>
        <Button type="submit" size="lg" style={{ backgroundColor: '#c0392b', border: 'none', width: '100%', fontWeight: 600 }}>
          Confirm Reservation
        </Button>
      </Form>
    </>
  )
}

export default ReservationForm