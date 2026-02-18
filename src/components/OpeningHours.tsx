import React from 'react'
import { siteConfig } from '../data/siteConfig'

const OpeningHours: React.FC = () => {
  const hour    = new Date().getHours()
  const isOpen  = hour >= siteConfig.openHour && hour < siteConfig.closeHour

  return (
    <div style={{ backgroundColor: '#fff', borderRadius: 10, padding: '1.4rem', boxShadow: '0 3px 16px rgba(0,0,0,0.08)', borderLeft: `4px solid ${isOpen ? '#27ae60' : '#c0392b'}` }}>
      <div className="d-flex align-items-center justify-content-between mb-3">
        <h6 style={{ fontFamily: 'Playfair Display, serif', marginBottom: 0, fontSize: '1rem' }}>Opening Hours</h6>
        <span style={{ backgroundColor: isOpen ? '#eafaf1' : '#fef0f0', color: isOpen ? '#27ae60' : '#c0392b', fontSize: '0.72rem', fontWeight: 700, padding: '3px 10px', borderRadius: 20 }}>
          {isOpen ? '● Open Now' : '● Closed'}
        </span>
      </div>
      {siteConfig.hours.map(({ day, time }) => (
        <div key={day} className="d-flex justify-content-between" style={{ padding: '5px 0', borderBottom: '1px solid #f0f0f0', fontSize: '0.85rem' }}>
          <span style={{ color: '#555' }}>{day}</span>
          <span style={{ fontWeight: 600 }}>{time}</span>
        </div>
      ))}
      <p style={{ color: '#999', fontSize: '0.78rem', marginTop: '0.75rem', marginBottom: 0 }}>
        🎄 Holiday hours may vary. Call us to confirm.
      </p>
    </div>
  )
}

export default OpeningHours