import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import usePageTitle from '../hooks/usePageTitle'

const StaffProfiles: React.FC = () => {
  usePageTitle('Our Team')

  const staff = [
    {
      name: 'Marco Rossi',
      title: 'Head Chef',
      bio: 'With 20+ years of culinary experience across Europe and Asia, Marco brings world-class expertise and innovation to our kitchen.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400',
      specialty: 'Italian Cuisine & International Fusion'
    },
    {
      name: 'Sofia Santos',
      title: 'Executive Pastry Chef',
      bio: 'Sofia\'s artisanal desserts have won multiple awards. Her creations are the perfect ending to any meal at La Bella.',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400',
      specialty: 'Desserts & Pastries'
    },
    {
      name: 'Antonio Miguel',
      title: 'General Manager',
      bio: 'Antonio ensures every guest experiences exceptional service and hospitality. With 15 years in restaurant management, he\'s dedicated to excellence.',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400',
      specialty: 'Restaurant Operations & Guest Relations'
    },
    {
      name: 'Isabella Costa',
      title: 'Sommelier & Wine Director',
      bio: 'Isabella curates our award-winning wine collection, perfectly pairing selections with our menu for an unforgettable experience.',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400',
      specialty: 'Wine Pairing & Sommelier Services'
    },
    {
      name: 'James Morrison',
      title: 'Head Waiter',
      bio: 'James leads our front-of-house team with grace and professionalism, ensuring impeccable service standards at every table.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400',
      specialty: 'Service Excellence'
    },
    {
      name: 'Maria Gonzalez',
      title: 'Chef de Cuisine',
      bio: 'Maria oversees kitchen operations and maintains the highest standards of food preparation and presentation.',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400',
      specialty: 'Kitchen Management & Menu Development'
    },
  ]

  return (
    <>
      {/* Header */}
      <section style={{ backgroundColor: '#1a1a1a', color: '#fff', padding: 'clamp(50px, 8vw, 80px) 0 clamp(30px, 5vw, 50px)', textAlign: 'center' }}>
        <Container>
          <p style={{ color: '#f39c12', letterSpacing: 3, textTransform: 'uppercase', fontSize: '0.85rem' }}>Meet the Team</p>
          <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(2rem, 5vw, 3rem)' }}>Our Culinary Team</h1>
          <p style={{ color: '#ccc', marginTop: '1rem', fontSize: 'clamp(0.9rem, 2vw, 1rem)' }}>
            Dedicated professionals passionate about delivering exceptional dining experiences
          </p>
          <div style={{ width: 60, height: 3, backgroundColor: '#c0392b', margin: '1rem auto 0' }} />
        </Container>
      </section>

      {/* Staff Grid */}
      <section className="section">
        <Container>
          <Row className="g-4">
            {staff.map(member => (
              <Col key={member.name} xs={12} sm={6} lg={4}>
                <div style={{
                  backgroundColor: '#fff',
                  borderRadius: 12,
                  overflow: 'hidden',
                  boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
                  transition: 'transform 0.3s, box-shadow 0.3s',
                  cursor: 'pointer',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = 'translateY(-5px)'
                  e.currentTarget.style.boxShadow = '0 8px 25px rgba(0,0,0,0.15)'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = 'translateY(0)'
                  e.currentTarget.style.boxShadow = '0 4px 15px rgba(0,0,0,0.1)'
                }}>
                  {/* Image */}
                  <img src={member.image} alt={member.name} style={{
                    width: '100%',
                    height: 300,
                    objectFit: 'cover',
                  }} />

                  {/* Info */}
                  <div style={{ padding: '1.5rem' }}>
                    <h4 style={{
                      fontFamily: 'Playfair Display, serif',
                      marginBottom: '0.25rem',
                      color: '#333',
                      fontSize: '1.3rem',
                    }}>
                      {member.name}
                    </h4>
                    <p style={{
                      color: '#c0392b',
                      fontWeight: 600,
                      fontSize: '0.9rem',
                      marginBottom: '0.75rem',
                      letterSpacing: 0.5,
                    }}>
                      {member.title}
                    </p>
                    <p style={{
                      color: '#666',
                      fontSize: '0.85rem',
                      lineHeight: 1.6,
                      marginBottom: '0.75rem',
                    }}>
                      {member.bio}
                    </p>
                    <p style={{
                      color: '#f39c12',
                      fontStyle: 'italic',
                      fontSize: '0.85rem',
                      borderTop: '1px solid #eee',
                      paddingTop: '0.75rem',
                    }}>
                      {member.specialty}
                    </p>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Call to Action */}
      <section style={{
        backgroundColor: '#f39c12',
        padding: 'clamp(40px, 8vw, 60px) 0',
        color: '#1a1a1a',
        textAlign: 'center',
      }}>
        <Container>
          <h3 style={{ fontFamily: 'Playfair Display, serif', marginBottom: '1rem', fontSize: 'clamp(1.6rem, 3vw, 2rem)' }}>
            Experience Excellence
          </h3>
          <p style={{ marginBottom: '1.5rem', fontSize: 'clamp(0.9rem, 2vw, 1rem)' }}>
            Our passionate team is ready to deliver an unforgettable dining experience
          </p>
          <a href="/reservation" style={{
            display: 'inline-block',
            backgroundColor: '#c0392b',
            color: '#fff',
            padding: '12px 36px',
            borderRadius: 6,
            textDecoration: 'none',
            fontWeight: 700,
            transition: 'opacity 0.2s',
          }}
          onMouseEnter={e => (e.currentTarget.style.opacity = '0.8')}
          onMouseLeave={e => (e.currentTarget.style.opacity = '1')}>
            Reserve Your Table
          </a>
        </Container>
      </section>
    </>
  )
}

export default StaffProfiles
