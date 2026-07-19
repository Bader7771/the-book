import { useEffect, useRef, useState } from 'react'
import './Navbar.css'

const navItems = ['Work', 'Approach', 'Studio', 'Journal', 'Contact']

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(() => window.innerWidth <= 767)
  const menuButtonRef = useRef(null)
  const navRef = useRef(null)

  useEffect(() => {
    if (!menuOpen) return undefined

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    navRef.current?.querySelector('a')?.focus()

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setMenuOpen(false)
        menuButtonRef.current?.focus()
      }

      if (event.key === 'Tab') {
        const focusable = [menuButtonRef.current, ...navRef.current.querySelectorAll('a')]
        const first = focusable[0]
        const last = focusable[focusable.length - 1]

        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault()
          last.focus()
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault()
          first.focus()
        }
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = previousOverflow
    }
  }, [menuOpen])

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth <= 767
      setIsMobile(mobile)
      if (!mobile) setMenuOpen(false)
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <header className="site-header">
      <div className="top-line" aria-hidden="true" />
      <div className="header-inner">
        <a className="logo" href="#home" aria-label="Common Thread home">
          Common Thread
        </a>

        <button
          ref={menuButtonRef}
          className="menu-toggle"
          type="button"
          aria-expanded={menuOpen}
          aria-controls="site-navigation"
          aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}
          onClick={() => setMenuOpen((isOpen) => !isOpen)}
        >
          <span />
          <span />
        </button>

        <nav
          ref={navRef}
          id="site-navigation"
          className={`site-nav ${menuOpen ? 'is-open' : ''}`}
          aria-label="Primary navigation"
        >
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              tabIndex={!isMobile || menuOpen ? 0 : -1}
              onClick={() => setMenuOpen(false)}
            >
              {item}
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}

export default Navbar
