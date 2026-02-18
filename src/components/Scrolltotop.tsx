import React, { useState, useEffect } from 'react'

const ScrollToTop: React.FC = () => {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  if (!visible) return null

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      title="Back to top"
      style={{
        position: 'fixed', bottom: 90, right: 20, zIndex: 997,
        backgroundColor: '#c0392b', color: '#fff', border: 'none',
        borderRadius: '50%', width: 44, height: 44, fontSize: '1.1rem',
        cursor: 'pointer', boxShadow: '0 4px 16px rgba(0,0,0,0.3)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        transition: 'transform 0.2s, background-color 0.2s',
      }}
      onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.12)')}
      onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')}
    >↑</button>
  )
}

export default ScrollToTop