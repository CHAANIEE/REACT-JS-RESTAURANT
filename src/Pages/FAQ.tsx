import React from 'react'
import { Container, Accordion } from 'react-bootstrap'
import usePageTitle from '../hooks/usePageTitle'

const FAQ: React.FC = () => {
  usePageTitle('FAQ')

  const faqs = [
    {
      question: 'How do I make a reservation?',
      answer: 'You can make a reservation through our website by clicking the "Reservations" button in the navigation menu. Fill in your details, preferred date, and time. Alternatively, you can call us directly at +63 917 123 4567 or message us on WhatsApp.'
    },
    {
      question: 'What is your cancellation policy?',
      answer: 'Reservations can be cancelled up to 24 hours in advance without any charges. Cancellations made within 24 hours may be subject to a charge. For parties of 8 or more, cancellations require 48 hours notice.'
    },
    {
      question: 'Do you accommodate dietary restrictions?',
      answer: 'Yes! We accommodate various dietary preferences including vegetarian, vegan, gluten-free, and allergies. Please mention any restrictions when making your reservation or upon arrival. Our chefs will be happy to prepare special dishes.'
    },
    {
      question: 'What is the dress code?',
      answer: 'Smart casual attire is recommended. We ask guests to avoid athletic wear, tank tops, and flip-flops. For special occasions, formal wear is welcomed and encouraged.'
    },
    {
      question: 'Do you have a private dining area?',
      answer: 'Yes, we offer private dining rooms for special occasions and business events. Please contact us at +63 917 123 4567 for more information about availability and pricing.'
    },
    {
      question: 'What are your opening hours?',
      answer: 'We are open Tuesday to Sunday, 11:00 AM to 10:00 PM. We are closed on Mondays. Special arrangements can be made for private events. Please call ahead for holiday hours.'
    },
    {
      question: 'Do you accept credit cards?',
      answer: 'Yes, we accept all major credit cards (Visa, Mastercard, American Express) and cash. A service charge is not automatically added; tipping is appreciated.'
    },
    {
      question: 'Is there parking available?',
      answer: 'Yes, complimentary parking is available for all our guests. We have a dedicated parking area adjacent to the restaurant.'
    },
    {
      question: 'Can I order catering for events?',
      answer: 'Absolutely! We offer catering services for weddings, corporate events, and other special occasions. Please contact our catering team at events@labella.com or call +63 917 123 4567.'
    },
    {
      question: 'Do you offer takeout or delivery?',
      answer: 'We do offer limited takeout for selected items. Delivery is available to nearby areas. Please call us to inquire about availability.'
    },
  ]

  return (
    <>
      {/* Header */}
      <section style={{ backgroundColor: '#1a1a1a', color: '#fff', padding: 'clamp(50px, 8vw, 80px) 0 clamp(30px, 5vw, 50px)', textAlign: 'center' }}>
        <Container>
          <p style={{ color: '#f39c12', letterSpacing: 3, textTransform: 'uppercase', fontSize: '0.85rem' }}>Help & Support</p>
          <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(2rem, 5vw, 3rem)' }}>Frequently Asked Questions</h1>
          <div style={{ width: 60, height: 3, backgroundColor: '#c0392b', margin: '1rem auto 0' }} />
        </Container>
      </section>

      {/* FAQ Content */}
      <section className="section">
        <Container>
          <div style={{ maxWidth: 800, margin: '0 auto' }}>
            <Accordion>
              {faqs.map((faq, index) => (
                <Accordion.Item key={index} eventKey={index.toString()}>
                  <Accordion.Header style={{
                    fontFamily: 'Playfair Display, serif',
                    fontSize: '1.1rem',
                    fontWeight: 600,
                    color: '#333',
                  }}>
                    {faq.question}
                  </Accordion.Header>
                  <Accordion.Body style={{
                    fontSize: '0.95rem',
                    color: '#555',
                    lineHeight: 1.8,
                  }}>
                    {faq.answer}
                  </Accordion.Body>
                </Accordion.Item>
              ))}
            </Accordion>

            <div style={{ marginTop: '3rem', padding: '2rem', backgroundColor: '#f9f6f2', borderRadius: 12, textAlign: 'center' }}>
              <h4 style={{ fontFamily: 'Playfair Display, serif', marginBottom: '1rem', color: '#333' }}>Didn't find your answer?</h4>
              <p style={{ color: '#666', marginBottom: '1.5rem' }}>Get in touch with our team for personalized assistance.</p>
              <a href="mailto:info@labella.com" style={{
                display: 'inline-block',
                backgroundColor: '#c0392b',
                color: '#fff',
                padding: '12px 32px',
                borderRadius: 6,
                textDecoration: 'none',
                fontWeight: 600,
              }}>
                Contact Us
              </a>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}

export default FAQ
