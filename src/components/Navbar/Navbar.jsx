import { useState } from 'react'
import './Navbar.css'

const navItems = ['Consulting', 'Training', 'Speaking', 'Clients', 'The Book']

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="site-header">
      <div className="top-line" aria-hidden="true" />
      <div className="header-inner">
        <a className="logo" href="/" aria-label="Alexei Kapterev home">
          Alexei Kapterev
        </a>

        <button
          className="menu-toggle"
          type="button"
          aria-expanded={menuOpen}
          aria-controls="site-navigation"
          aria-label="Toggle navigation"
          onClick={() => setMenuOpen((isOpen) => !isOpen)}
        >
          <span />
          <span />
        </button>

        <nav
          id="site-navigation"
          className={`site-nav ${menuOpen ? 'is-open' : ''}`}
          aria-label="Primary navigation"
        >
          {navItems.map((item) => (
            <a key={item} href={`#${item.toLowerCase().replaceAll(' ', '-')}`}>
              {item}
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}

export default Navbar
