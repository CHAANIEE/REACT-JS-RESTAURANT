import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import Hero        from '../components/Hero.tsx'
import MenuCard    from '../components/MenuCard.tsx'
import Newsletter  from '../components/Newsletter.tsx'
import Testimonials from '../components/Testimonial.tsx'
import Offers      from '../components/Offers.tsx'
import { featuredDishes } from '../data/menuData'
import { siteConfig }     from '../data/siteConfig'
import usePageTitle from '../hooks/usePageTitle'

const features = [
  { icon: '🍷', title: 'Fine Dining',        desc: 'Premium dining experience' },
  { icon: '👨‍🍳', title: 'Expert Chefs',       desc: 'World-class culinary team' },
  { icon: '🌿', title: 'Fresh Ingredients',   desc: 'Locally sourced daily' },
  { icon: '⭐', title: '5-Star Rated',        desc: 'Loved by thousands' },
]

const Home: React.FC = () => {
  usePageTitle('Home')
  const navigate = useNavigate()

  return (
    <>
      <Hero />

      {/* Feature Bar */}
      <section style={{ backgroundColor: '#c0392b', padding: 'clamp(28px, 5vw, 44px) 0' }}>
        <Container>
          <Row className="text-center text-white g-3">
            {features.map(({ icon, title, desc }) => (
              <Col key={title} xs={6} md={3}>
                <div style={{ fontSize: 'clamp(1.4rem, 3vw, 2rem)' }}>{icon}</div>
                <h6 style={{ fontFamily: 'Playfair Display, serif', marginTop: 6, fontSize: 'clamp(0.82rem, 1.8vw, 1rem)', marginBottom: 2 }}>{title}</h6>
                <small style={{ opacity: 0.82, fontSize: 'clamp(0.72rem, 1.4vw, 0.85rem)' }}>{desc}</small>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Featured Dishes */}
      <section className="section">
        <Container>
          <div className="text-center">
            <span className="section-label">Our Specialties</span>
            <h2 className="section-title">Featured Dishes</h2>
            <div className="divider" />
          </div>
          <Row className="g-4">
            {featuredDishes.map(dish => (
              <Col key={dish.name} xs={12} sm={6} md={4}>
                <MenuCard {...dish} />
              </Col>
            ))}
          </Row>
          <div className="text-center mt-5">
            <Button onClick={() => navigate('/menu')} size="lg"
              style={{ backgroundColor: '#c0392b', border: 'none', padding: '12px 36px', fontWeight: 700, letterSpacing: 0.5 }}>
              View Full Menu
            </Button>
          </div>
        </Container>
      </section>

      {/* Stats */}
      <section style={{ backgroundColor: '#1a1a1a', padding: 'clamp(40px, 6vw, 60px) 0' }}>
        <Container>
          <Row className="text-center g-4">
            {siteConfig.stats.map(({ value, label }) => (
              <Col key={label} xs={12} md={4}>
                <div style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(2rem, 5vw, 3rem)', color: '#f39c12', fontWeight: 700 }}>{value}</div>
                <div style={{ color: '#aaa', fontSize: 'clamp(0.85rem, 2vw, 1rem)', marginTop: 4 }}>{label}</div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <Offers />
      <Testimonials />

      <Newsletter />

      {/* CTA */}
      <section style={{
        background: 'linear-gradient(rgba(0,0,0,0.72), rgba(0,0,0,0.72)), url("https://images.unsplash.com/photo-1424847651672-bf20a4b0982b?w=1600") center/cover',
        padding: 'clamp(60px, 10vw, 110px) 0', color: '#fff', textAlign: 'center',
      }}>
        <Container>
          <span className="section-label" style={{ color: '#f39c12' }}>Don't Wait</span>
          <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(1.6rem, 4vw, 2.8rem)', marginBottom: '1rem' }}>
            Reserve Your Table Today
          </h2>
          <p style={{ color: '#ccc', marginBottom: '2.5rem', fontSize: 'clamp(0.9rem, 2vw, 1.1rem)', maxWidth: 500, margin: '0 auto 2.5rem' }}>
            Join us for an unforgettable dining experience. Limited seats available nightly.
          </p>
          <Button onClick={() => navigate('/reservation')} size="lg"
            style={{ backgroundColor: '#c0392b', border: 'none', padding: '14px 42px', fontWeight: 700, fontSize: '1rem', letterSpacing: 0.5 }}>
            Book a Table
          </Button>
        </Container>
      </section>
    </>
  )
}

export default Home