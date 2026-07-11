import { useState } from 'react'
import './App.css'

const navItems = ['Consulting', 'Training', 'Speaking', 'Clients', 'The Book']

function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
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

      <main>
        <section className="hero-visual" aria-label="Two illustrated hands holding a star">
          <div className="hand-slot hand-slot-left">
            <img
              className="hand-image hand-image-left"
              src="/images/left-hand.png"
              alt="Illustrated left hand reaching toward the center"
            />
          </div>

          <div className="star-slot">
            <img className="star-image" src="/images/star.png" alt="" aria-hidden="true" />
          </div>

          <div className="hand-slot hand-slot-right">
            <img
              className="hand-image hand-image-right"
              src="/images/right-hand.png"
              alt="Illustrated right hand reaching toward the center"
            />
          </div>
        </section>

        <section className="intro" aria-labelledby="intro-heading">
          <h1 id="intro-heading" className="sr-only">
            Alexei Kapterev introduction
          </h1>
          <p className="intro-copy">
            My name is Alexei Kapterev. I assist my clients with solving difficult
            communication problems. I provide{' '}
            <a className="accent-link" href="#consulting">
              consulting
            </a>{' '}
            services,{' '}
            <a className="accent-link" href="#training">
              teach
            </a>{' '}
            presentation skills and{' '}
            <a className="accent-link" href="#speaking">
              speak
            </a>{' '}
            at conferences. Please have a look at my book{' '}
            <a className="accent-link" href="#the-book">
              Presentation Secrets
            </a>
            .
          </p>
        </section>
      </main>

      <footer className="site-footer">
        <div className="footer-links" aria-label="Contact and social links">
          <a href="tel:+74957641898">+7 495 764 1898</a>
          <span aria-hidden="true">.</span>
          <a href="mailto:alexei@kapterev.com">alexei@kapterev.com</a>
          <span aria-hidden="true">.</span>
          <a href="#facebook">Facebook</a>
          <span aria-hidden="true">.</span>
          <a href="#twitter">Twitter</a>
          <span aria-hidden="true">.</span>
          <a href="#slideshare">SlideShare</a>
        </div>
        <a className="language-link" href="#ru">
          По-русски, пожалуйста
        </a>
      </footer>
    </>
  )
}

export default App
