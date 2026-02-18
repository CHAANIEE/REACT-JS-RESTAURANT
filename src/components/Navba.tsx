import React, { useState } from 'react'
import { Navbar as BsNavbar, Nav, Container } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

const Navbar: React.FC = () => {
  const [expanded, setExpanded] = useState(false)

  const handleLogoClick = () => {
    window.location.href = '/'
  }

  return (
    <BsNavbar
      expanded={expanded}
      expand="xxl"
      sticky="top"
      style={{ backgroundColor: '#1a1a1a', boxShadow: '0 2px 10px rgba(0,0,0,0.3)' }}
    >
      <Container>
        <BsNavbar.Brand
          onClick={handleLogoClick}
          style={{ 
            fontFamily: 'Playfair Display, serif', 
            color: '#f39c12', 
            fontSize: 'clamp(1.2rem, 3vw, 1.6rem)', 
            fontWeight: 700,
            cursor: 'pointer',
            userSelect: 'none',
            transition: 'opacity 0.2s'
          }}
          onMouseEnter={e => (e.currentTarget.style.opacity = '0.8')}
          onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
        >
          🍽 La Bella
        </BsNavbar.Brand>

        <BsNavbar.Toggle
          aria-controls="main-nav"
          onClick={() => setExpanded(!expanded)}
          style={{ borderColor: '#555' }}
        />

        <BsNavbar.Collapse id="main-nav">
          <Nav className="ms-auto" onClick={() => setExpanded(false)}>
            {[
              { path: '/', label: 'Home' },
              { path: '/menu', label: 'Menu' },
              { path: '/about', label: 'About' },
              { path: '/reservation', label: 'Reservations' },
              { path: '/contact', label: 'Contact' },
            ].map(({ path, label }) => (
              <NavLink
                key={path}
                to={path}
                style={({ isActive }) => ({
                  color: isActive ? '#f39c12' : '#ccc',
                  fontWeight: 600,
                  marginLeft: '8px',
                  transition: 'color 0.2s',
                  padding: '10px 12px',
                  display: 'inline-block',
                  textDecoration: 'none',
                  fontSize: '0.95rem',
                })}
              >
                {label}
              </NavLink>
            ))}
          </Nav>
        </BsNavbar.Collapse>
      </Container>
    </BsNavbar>
  )
}

export default Navbar