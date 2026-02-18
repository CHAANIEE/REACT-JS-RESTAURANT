import React from 'react'

const WhatsAppButton: React.FC = () => {
  const phoneNumber = '+63917123456' // Replace with actual number
  const message = 'Hello La Bella, I would like to make a reservation or have a question.'
  const whatsappUrl = `https://wa.me/${phoneNumber.replace(/\D/g, '')}?text=${encodeURIComponent(message)}`

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        position: 'fixed',
        bottom: 30,
        right: 30,
        width: 60,
        height: 60,
        backgroundColor: '#25D366',
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '1.8rem',
        boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
        cursor: 'pointer',
        zIndex: 999,
        transition: 'transform 0.2s, box-shadow 0.2s',
        textDecoration: 'none',
      }}
      title="Chat with us on WhatsApp"
      onMouseEnter={e => {
        e.currentTarget.style.transform = 'scale(1.1)'
        e.currentTarget.style.boxShadow = '0 6px 16px rgba(0,0,0,0.4)'
      }}
      onMouseLeave={e => {
        e.currentTarget.style.transform = 'scale(1)'
        e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.3)'
      }}
    >
      💬
    </a>
  )
}

export default WhatsAppButton
