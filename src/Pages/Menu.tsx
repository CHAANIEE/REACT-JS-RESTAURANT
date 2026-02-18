import React, { useState } from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import MenuCard from '../components/MenuCard.tsx'

const menuData = {
  Starters: [
    { name: 'Caesar Salad', description: 'Crisp romaine, parmesan, croutons, and house Caesar dressing.', price: 280, image: 'https://images.unsplash.com/photo-1546793665-c74683f339c1?w=400' },
    { name: 'Bruschetta', description: 'Toasted bread topped with fresh tomatoes, basil, and olive oil.', price: 220, image: 'https://images.unsplash.com/photo-1572695157366-5e585ab2b69f?w=400' },
    { name: 'French Onion Soup', description: 'Slow-cooked caramelized onion soup topped with gruyère.', price: 260, image: 'https://images.unsplash.com/photo-1476718406336-bb5a9690ee2a?w=400' },
  ],
  Mains: [
    { name: 'Grilled Salmon', description: 'Atlantic salmon, herb butter, asparagus, roasted potatoes.', price: 650, image: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=400', tag: 'Best Seller' },
    { name: 'Beef Tenderloin', description: 'Prime tenderloin, red wine reduction, truffle mash.', price: 950, image: 'https://images.unsplash.com/photo-1558030006-450675393462?w=400', tag: "Chef's Pick" },
    { name: 'Mushroom Risotto', description: 'Arborio rice, wild mushrooms, parmesan, herbs.', price: 480, image: 'https://images.unsplash.com/photo-1476124369491-e7addf5db371?w=400', tag: 'Vegetarian' },
    { name: 'Chicken Parmesan', description: 'Breaded chicken breast, marinara, mozzarella, pasta.', price: 520, image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400' },
  ],
  Desserts: [
    { name: 'Tiramisu', description: 'Classic Italian dessert with espresso, mascarpone, and cocoa.', price: 280, image: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=400' },
    { name: 'Crème Brûlée', description: 'Silky vanilla custard with caramelized sugar crust.', price: 260, image: 'https://images.unsplash.com/photo-1470124182917-cc6e71b22ecc?w=400' },
  ],
  Drinks: [
    { name: 'Lemon Basil Cooler', description: 'Fresh lemon, basil, sparkling water, honey.', price: 150, image: 'https://images.unsplash.com/photo-1544145945-f90425340c7e?w=400' },
    { name: 'Mango Lassi', description: 'Creamy mango yogurt smoothie with cardamom.', price: 160, image: 'https://images.unsplash.com/photo-1553361371-9b22f78e8b1d?w=400' },
  ],
}

type Category = keyof typeof menuData

const Menu: React.FC = () => {
  const [active, setActive] = useState<Category>('Mains')
  const categories = Object.keys(menuData) as Category[]

  return (
    <>
      {/* Header */}
      <section style={{ backgroundColor: '#1a1a1a', color: '#fff', padding: 'clamp(50px, 8vw, 80px) 0 clamp(30px, 5vw, 50px)', textAlign: 'center' }}>
        <Container>
          <p style={{ color: '#f39c12', letterSpacing: 3, textTransform: 'uppercase', fontSize: '0.85rem' }}>Explore</p>
          <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(2rem, 5vw, 3rem)' }}>Our Menu</h1>
          <div style={{ width: 60, height: 3, backgroundColor: '#c0392b', margin: '1rem auto 0' }} />
        </Container>
      </section>

      {/* Category Filter Buttons */}
      <section className="section">
        <Container>
          <div className="d-flex justify-content-center gap-2 flex-wrap mb-5 menu-filters">
            {categories.map(cat => (
              <Button
                key={cat}
                onClick={() => setActive(cat)}
                className="btn-category"
                style={{
                  backgroundColor: active === cat ? '#c0392b' : 'transparent',
                  border: '2px solid #c0392b',
                  color: active === cat ? '#fff' : '#c0392b',
                  fontWeight: 600,
                  padding: '10px 24px',
                  borderRadius: 50,
                  transition: 'all 0.2s',
                  cursor: 'pointer',
                  opacity: 1,
                  visibility: 'visible',
                  pointerEvents: 'auto',
                }}
              >
                {cat}
              </Button>
            ))}
          </div>

          <Row className="g-4">
            {menuData[active].map(dish => (
              <Col key={dish.name} xs={12} sm={6} lg={4}>
                <MenuCard {...dish} />
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </>
  )
}

export default Menu