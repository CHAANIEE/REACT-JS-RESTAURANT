import React from 'react'
import { Container } from 'react-bootstrap'
import usePageTitle from '../hooks/usePageTitle'

const TermsOfService: React.FC = () => {
  usePageTitle('Terms of Service')

  return (
    <>
      {/* Header */}
      <section style={{ backgroundColor: '#1a1a1a', color: '#fff', padding: 'clamp(50px, 8vw, 80px) 0 clamp(30px, 5vw, 50px)', textAlign: 'center' }}>
        <Container>
          <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(2rem, 5vw, 3rem)' }}>Terms of Service</h1>
          <div style={{ width: 60, height: 3, backgroundColor: '#c0392b', margin: '1rem auto 0' }} />
        </Container>
      </section>

      {/* Content */}
      <section className="section">
        <Container>
          <div style={{ maxWidth: 900, margin: '0 auto', lineHeight: 1.8 }}>
            <h3 style={{ fontFamily: 'Playfair Display, serif', marginBottom: '1rem', marginTop: '2rem' }}>1. Agreement to Terms</h3>
            <p>By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.</p>

            <h3 style={{ fontFamily: 'Playfair Display, serif', marginBottom: '1rem', marginTop: '2rem' }}>2. Use License</h3>
            <p>Permission is granted to temporarily download one copy of the materials (information or software) on La Bella restaurant's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:</p>
            <ul>
              <li>Modify or copy the materials</li>
              <li>Use the materials for any commercial purpose or for any public display</li>
              <li>Attempt to decompile or reverse engineer any software contained on the website</li>
              <li>Transmit or distribute the materials to anyone or "mirror" the materials on any other server</li>
              <li>Remove any copyright or other proprietary notations from the materials</li>
            </ul>

            <h3 style={{ fontFamily: 'Playfair Display, serif', marginBottom: '1rem', marginTop: '2rem' }}>3. Disclaimer</h3>
            <p>The materials on La Bella restaurant's website are provided on an 'as is' basis. La Bella restaurant makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.</p>

            <h3 style={{ fontFamily: 'Playfair Display, seth', marginBottom: '1rem', marginTop: '2rem' }}>4. Limitations</h3>
            <p>In no event shall La Bella restaurant or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on La Bella restaurant's website, even if La Bella restaurant or an authorized representative has been notified orally or in writing of the possibility of such damage.</p>

            <h3 style={{ fontFamily: 'Playfair Display, serif', marginBottom: '1rem', marginTop: '2rem' }}>5. Reservations</h3>
            <ul>
              <li>Reservations are subject to availability and confirmation</li>
              <li>Cancellations must be made 24 hours in advance</li>
              <li>No-shows may result in charges</li>
              <li>We reserve the right to request contact information and payment details</li>
            </ul>

            <h3 style={{ fontFamily: 'Playfair Display, serif', marginBottom: '1rem', marginTop: '2rem' }}>6. Amendments</h3>
            <p>La Bella restaurant may revise these terms of service for its website at any time without notice. By using this website, you are agreeing to be bound by the then current version of these terms of service.</p>

            <h3 style={{ fontFamily: 'Playfair Display, serif', marginBottom: '1rem', marginTop: '2rem' }}>7. Governing Law</h3>
            <p>These terms and conditions are governed by and construed in accordance with the laws of the Philippines, and you irrevocably submit to the exclusive jurisdiction of the courts in that location.</p>

            <h3 style={{ fontFamily: 'Playfair Display, serif', marginBottom: '1rem', marginTop: '2rem' }}>8. Contact Information</h3>
            <p>If you have any questions about these Terms of Service, please contact us at:</p>
            <p>Email: legal@labella.com<br/>Phone: +63 917 123 4567</p>

            <p style={{ marginTop: '2rem', color: '#666', fontSize: '0.9rem' }}>Last updated: February 2026</p>
          </div>
        </Container>
      </section>
    </>
  )
}

export default TermsOfService
