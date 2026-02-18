import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'

import Navbar from './components/Navba.tsx'
import Footer from './components/Footer.tsx'
import ScrollToTop from './components/Scrolltotop.tsx'
import ScrollToTopOnNavigate from './components/ScrollToTopOnNavigate.tsx'
import StickyBookingBar from './components/StickyBookingBar.tsx'
import Loader from './components/Loader.tsx'
import ErrorBoundary from './components/ErrorBoundary.tsx'
import OffersNotification from './components/OffersNotification.tsx'

import Home from './Pages/Home.tsx'
import Menu from './Pages/Menu.tsx'
import About from './Pages/About.tsx'
import Contact from './Pages/Contact.tsx'
import Reservation from './Pages/Reservation.tsx'
import Gallery from './Pages/Gallery.tsx'
import FAQ from './Pages/FAQ.tsx'
import StaffProfiles from './Pages/StaffProfiles.tsx'
import PrivacyPolicy from './Pages/PrivacyPolicy.tsx'
import TermsOfService from './Pages/TermsOfService.tsx'
import NotFound from './Pages/NotFound.tsx'

const App: React.FC = () => {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1400)
    return () => clearTimeout(timer)
  }, [])

  if (loading) return <Loader />

  return (
    <ErrorBoundary>
      <OffersNotification />
      <Router>
        <ScrollToTopOnNavigate />
        <Navbar />
        <main>
          <Routes>
            <Route path="/"            element={<Home />} />
            <Route path="/menu"        element={<Menu />} />
            <Route path="/about"       element={<About />} />
            <Route path="/contact"     element={<Contact />} />
            <Route path="/reservation" element={<Reservation />} />
            <Route path="/gallery"     element={<Gallery />} />
            <Route path="/team"        element={<StaffProfiles />} />
            <Route path="/faq"         element={<FAQ />} />
            <Route path="/privacy"     element={<PrivacyPolicy />} />
            <Route path="/terms"       element={<TermsOfService />} />
            <Route path="*"            element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
        <ScrollToTop />
        <StickyBookingBar />
      </Router>
    </ErrorBoundary>
  )
}

export default App