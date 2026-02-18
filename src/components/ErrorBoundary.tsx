import { Component } from 'react'
import type { ReactNode } from 'react'
import { Container } from 'react-bootstrap'

interface Props  { children: ReactNode }
interface State  { hasError: boolean }

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = { hasError: false }
  }
  static getDerivedStateFromError(): State { return { hasError: true } }

  render() {
    if (this.state.hasError) return (
      <div style={{ minHeight: '100vh', backgroundColor: '#1a1a1a', display: 'flex', alignItems: 'center', color: '#fff' }}>
        <Container className="text-center py-5">
          <div style={{ fontSize: '4rem', marginBottom: '1.5rem' }}>⚠️</div>
          <h2 style={{ fontFamily: 'Playfair Display, serif', color: '#f39c12', marginBottom: '1rem' }}>Something went wrong</h2>
          <p style={{ color: '#aaa', marginBottom: '2rem' }}>We're sorry for the inconvenience. Please refresh the page.</p>
          <button onClick={() => window.location.reload()}
            style={{ backgroundColor: '#c0392b', color: '#fff', border: 'none', padding: '12px 32px', borderRadius: 6, fontWeight: 600, cursor: 'pointer', fontSize: '1rem' }}>
            Refresh Page
          </button>
        </Container>
      </div>
    )
    return this.props.children
  }
}

export default ErrorBoundary