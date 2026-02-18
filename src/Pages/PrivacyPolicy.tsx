import React from 'react'
import { Container } from 'react-bootstrap'
import usePageTitle from '../hooks/usePageTitle'

const PrivacyPolicy: React.FC = () => {
  usePageTitle('Privacy Policy')

  return (
    <>
      {/* Header */}
      <section style={{ backgroundColor: '#1a1a1a', color: '#fff', padding: 'clamp(50px, 8vw, 80px) 0 clamp(30px, 5vw, 50px)', textAlign: 'center' }}>
        <Container>
          <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(2rem, 5vw, 3rem)' }}>Privacy Policy</h1>
          <div style={{ width: 60, height: 3, backgroundColor: '#c0392b', margin: '1rem auto 0' }} />
        </Container>
      </section>

      {/* Content */}
      <section className="section">
        <Container>
          <div style={{ maxWidth: 900, margin: '0 auto', lineHeight: 1.8 }}>
            <h3 style={{ fontFamily: 'Playfair Display, serif', marginBottom: '1rem', marginTop: '2rem' }}>1. Introduction</h3>
            <p>La Bella Restaurant ("we", "our", or "us") operates the website. This page informs you of our policies regarding the collection, use, and disclosure of personal data when you use our Service and the choices you have associated with that data.</p>

            <h3 style={{ fontFamily: 'Playfair Display, serif', marginBottom: '1rem', marginTop: '2rem' }}>2. Information Collection and Use</h3>
            <p>We collect several different types of information for various purposes to provide and improve our Service to you.</p>
            <ul>
              <li><strong>Personal Data:</strong> Name, email address, phone number, and reservation details</li>
              <li><strong>Usage Data:</strong> Browser type, IP address, pages visited, and time spent on pages</li>
              <li><strong>Cookies:</strong> We use cookies to enhance your experience and analyze site performance</li>
            </ul>

            <h3 style={{ fontFamily: 'Playfair Display, serif', marginBottom: '1rem', marginTop: '2rem' }}>3. Use of Data</h3>
            <p>La Bella uses the collected data for various purposes:</p>
            <ul>
              <li>To provide and maintain our Service</li>
              <li>To notify you about changes to our Service</li>
              <li>To allow you to participate in interactive features of our Service</li>
              <li>To provide customer support</li>
              <li>To gather analysis or valuable information for improving our Service</li>
              <li>To monitor the usage of our Service</li>
              <li>To detect, prevent and address technical issues</li>
            </ul>

            <h3 style={{ fontFamily: 'Playfair Display, serif', marginBottom: '1rem', marginTop: '2rem' }}>4. Security of Data</h3>
            <p>The security of your data is important to us, but remember that no method of transmission over the Internet or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your Personal Data, we cannot guarantee its absolute security.</p>

            <h3 style={{ fontFamily: 'Playfair Display, serif', marginBottom: '1rem', marginTop: '2rem' }}>5. Changes to This Privacy Policy</h3>
            <p>We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date at the bottom of this Privacy Policy.</p>

            <h3 style={{ fontFamily: 'Playfair Display, serif', marginBottom: '1rem', marginTop: '2rem' }}>6. Contact Us</h3>
            <p>If you have any questions about this Privacy Policy, please contact us at:</p>
            <p>Email: privacy@labella.com<br/>Phone: +63 917 123 4567</p>

            <p style={{ marginTop: '2rem', color: '#666', fontSize: '0.9rem' }}>Last updated: February 2026</p>
          </div>
        </Container>
      </section>
    </>
  )
}

export default PrivacyPolicy
