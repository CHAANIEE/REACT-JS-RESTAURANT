import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import usePageTitle from '../hooks/usePageTitle'

const Blog: React.FC = () => {
  usePageTitle('Blog & News')

  const posts = [
    {
      id: 1,
      title: 'Introducing Our New Spring Menu',
      date: 'February 15, 2026',
      author: 'Chef Marco',
      excerpt: 'We\'re thrilled to unveil our fresh Spring collection featuring seasonal ingredients and innovative preparations...',
      image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600',
      category: 'Menu'
    },
    {
      id: 2,
      title: '5-Star Excellence: Our Recent Awards',
      date: 'February 10, 2026',
      author: 'Antonio',
      excerpt: 'La Bella has been recognized for culinary excellence and outstanding service by prestigious dining organizations...',
      image: 'https://images.unsplash.com/photo-1504674900940-1f64526aeea9?w=600',
      category: 'News'
    },
    {
      id: 3,
      title: 'Wine Pairing Evening with Isabella',
      date: 'February 5, 2026',
      author: 'Isabella Costa',
      excerpt: 'Join our sommelier for an exclusive wine pairing dinner experience featuring rare selections from around the world...',
      image: 'https://images.unsplash.com/photo-1510812431401-41d2ded4f5a6?w=600',
      category: 'Events'
    },
    {
      id: 4,
      title: 'Behind the Scenes: A Day in Our Kitchen',
      date: 'January 28, 2026',
      author: 'Sofia',
      excerpt: 'Discover the passion and precision that goes into creating every dish at La Bella, from ingredients to plating...',
      image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600',
      category: 'Kitchen Stories'
    },
    {
      id: 5,
      title: 'Sustainable Sourcing: Our Commitment',
      date: 'January 20, 2026',
      author: 'Marco Rossi',
      excerpt: 'Learn how we partner with local farmers and sustainable suppliers to bring the finest ingredients to your table...',
      image: 'https://images.unsplash.com/photo-1488459716781-0f52582f1443?w=600',
      category: 'Sustainability'
    },
    {
      id: 6,
      title: 'Guest Spotlight: Celebrating Our Regulars',
      date: 'January 12, 2026',
      author: 'Antonio',
      excerpt: 'Meet some of our beloved guests who have made La Bella part of their dining traditions for many years...',
      image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600',
      category: 'Community'
    },
  ]

  return (
    <>
      {/* Header */}
      <section style={{ backgroundColor: '#1a1a1a', color: '#fff', padding: 'clamp(50px, 8vw, 80px) 0 clamp(30px, 5vw, 50px)', textAlign: 'center' }}>
        <Container>
          <p style={{ color: '#f39c12', letterSpacing: 3, textTransform: 'uppercase', fontSize: '0.85rem' }}>Latest Updates</p>
          <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(2rem, 5vw, 3rem)' }}>Blog & News</h1>
          <p style={{ color: '#ccc', marginTop: '1rem', fontSize: 'clamp(0.9rem, 2vw, 1rem)' }}>
            Stories, insights, and updates from our culinary world
          </p>
          <div style={{ width: 60, height: 3, backgroundColor: '#c0392b', margin: '1rem auto 0' }} />
        </Container>
      </section>

      {/* Blog Posts */}
      <section className="section">
        <Container>
          <Row className="g-4">
            {posts.map((post, index) => (
              <Col key={post.id} xs={12} md={6} lg={index === 0 ? 12 : 6}>
                <div style={{
                  display: 'flex',
                  backgroundColor: '#fff',
                  borderRadius: 12,
                  overflow: 'hidden',
                  boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
                  transition: 'all 0.3s',
                  height: index === 0 ? 'auto' : '100%',
                  flexDirection: index === 0 ? 'row' : 'column',
                  cursor: 'pointer',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.boxShadow = '0 8px 25px rgba(0,0,0,0.15)'
                  e.currentTarget.style.transform = 'translateY(-3px)'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.boxShadow = '0 4px 15px rgba(0,0,0,0.1)'
                  e.currentTarget.style.transform = 'translateY(0)'
                }}>
                  {/* Image */}
                  <img src={post.image} alt={post.title} style={{
                    width: index === 0 ? '45%' : '100%',
                    height: index === 0 ? 'auto' : 200,
                    objectFit: 'cover',
                  }} />

                  {/* Content */}
                  <div style={{
                    padding: '1.5rem',
                    flex: 1,
                    display: 'flex',
                    flexDirection: 'column',
                  }}>
                    <div style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      marginBottom: '0.75rem',
                      gap: '1rem',
                      flexWrap: 'wrap',
                    }}>
                      <span style={{
                        backgroundColor: '#f39c12',
                        color: '#1a1a1a',
                        padding: '4px 12px',
                        borderRadius: 20,
                        fontSize: '0.75rem',
                        fontWeight: 600,
                        letterSpacing: 0.5,
                        textTransform: 'uppercase',
                      }}>
                        {post.category}
                      </span>
                      <span style={{ fontSize: '0.85rem', color: '#999' }}>
                        {post.date}
                      </span>
                    </div>

                    <h3 style={{
                      fontFamily: 'Playfair Display, serif',
                      fontSize: index === 0 ? '1.8rem' : '1.3rem',
                      marginBottom: '0.75rem',
                      color: '#333',
                      lineHeight: 1.4,
                    }}>
                      {post.title}
                    </h3>

                    <p style={{
                      color: '#666',
                      fontSize: '0.95rem',
                      lineHeight: 1.6,
                      marginBottom: '1rem',
                      flex: 1,
                    }}>
                      {post.excerpt}
                    </p>

                    <div style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                    }}>
                      <span style={{ fontSize: '0.85rem', color: '#999' }}>
                        By {post.author}
                      </span>
                      <Button style={{
                        backgroundColor: '#c0392b',
                        border: 'none',
                        padding: '8px 24px',
                        fontSize: '0.9rem',
                        fontWeight: 600,
                      }}>
                        Read More
                      </Button>
                    </div>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Newsletter CTA */}
      <section style={{
        backgroundColor: '#f39c12',
        padding: 'clamp(40px, 8vw, 60px) 0',
        textAlign: 'center',
      }}>
        <Container>
          <h3 style={{
            fontFamily: 'Playfair Display, serif',
            color: '#1a1a1a',
            marginBottom: '1rem',
            fontSize: 'clamp(1.6rem, 3vw, 2rem)',
          }}>
            Stay Updated
          </h3>
          <p style={{ color: '#333', marginBottom: '1.5rem' }}>
            Subscribe to our newsletter to receive the latest culinary stories and special offers
          </p>
        </Container>
      </section>
    </>
  )
}

export default Blog
