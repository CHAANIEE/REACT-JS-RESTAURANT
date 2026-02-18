import React from 'react'
import { Card, Badge } from 'react-bootstrap'

interface MenuCardProps {
  name: string
  description: string
  price: number
  image: string
  tag?: string
}

const MenuCard: React.FC<MenuCardProps> = ({ name, description, price, image, tag }) => {
  return (
    <Card
      style={{
        border: 'none',
        borderRadius: 12,
        overflow: 'hidden',
        boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
        transition: 'transform 0.3s, box-shadow 0.3s',
        cursor: 'pointer',
      }}
      onMouseEnter={(e: React.MouseEvent<HTMLDivElement>) => {
        (e.currentTarget as HTMLElement).style.transform = 'translateY(-6px)'
        ;(e.currentTarget as HTMLElement).style.boxShadow = '0 12px 30px rgba(0,0,0,0.15)'
      }}
      onMouseLeave={(e: React.MouseEvent<HTMLDivElement>) => {
        (e.currentTarget as HTMLElement).style.transform = 'translateY(0)'
        ;(e.currentTarget as HTMLElement).style.boxShadow = '0 4px 20px rgba(0,0,0,0.08)'
      }}
    >
      <div style={{ position: 'relative', height: 200, overflow: 'hidden' }}>
        <Card.Img
          src={image}
          style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.4s' }}
          onMouseEnter={(e: React.MouseEvent<HTMLImageElement>) => ((e.currentTarget as HTMLImageElement).style.transform = 'scale(1.05)')}
          onMouseLeave={(e: React.MouseEvent<HTMLImageElement>) => ((e.currentTarget as HTMLImageElement).style.transform = 'scale(1)')}
        />
        {tag && (
          <Badge
            style={{
              position: 'absolute', top: 12, right: 12,
              backgroundColor: '#c0392b', fontSize: '0.75rem', padding: '6px 10px'
            }}
          >
            {tag}
          </Badge>
        )}
      </div>
      <Card.Body style={{ padding: '1.25rem' }}>
        <div className="d-flex justify-content-between align-items-start mb-2">
          <Card.Title style={{ fontFamily: 'Playfair Display, serif', marginBottom: 0, fontSize: '1.1rem' }}>
            {name}
          </Card.Title>
          <span style={{ color: '#c0392b', fontWeight: 700, fontSize: '1.1rem', whiteSpace: 'nowrap', marginLeft: 8 }}>
            ₱{price.toLocaleString()}
          </span>
        </div>
        <Card.Text style={{ color: '#777', fontSize: '0.9rem', lineHeight: 1.6 }}>
          {description}
        </Card.Text>
      </Card.Body>
    </Card>
  )
}

export default MenuCard