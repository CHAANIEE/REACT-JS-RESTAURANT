import React, { useState } from 'react'
import { Form, Button, Alert } from 'react-bootstrap'

const ContactForm: React.FC = () => {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setForm({ name: '', email: '', subject: '', message: '' })
  }

  return (
    <>
      {submitted && (
        <Alert variant="success" onClose={() => setSubmitted(false)} dismissible>
          ✅ Message sent! We'll get back to you within 24 hours.
        </Alert>
      )}
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Name</Form.Label>
          <Form.Control name="name" value={form.name} onChange={handleChange} placeholder="Your name" required />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" name="email" value={form.email} onChange={handleChange} placeholder="your@email.com" required />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Subject</Form.Label>
          <Form.Control name="subject" value={form.subject} onChange={handleChange} placeholder="What's this about?" required />
        </Form.Group>
        <Form.Group className="mb-4">
          <Form.Label>Message</Form.Label>
          <Form.Control as="textarea" rows={5} name="message" value={form.message} onChange={handleChange} placeholder="Write your message here..." required />
        </Form.Group>
        <Button type="submit" style={{ backgroundColor: '#c0392b', border: 'none', width: '100%', fontWeight: 600 }} size="lg">
          Send Message
        </Button>
      </Form>
    </>
  )
}

export default ContactForm