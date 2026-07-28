import { useState, useEffect } from 'react'
import PawIcon from './icons/PawIcon'

const NAV_LINKS = [
  { label: 'Sobre', href: '#sobre' },
  { label: 'Programação', href: '#programacao' },
  { label: 'Kit', href: '#kit' },
  { label: 'Atrações', href: '#atracoes' },
  { label: 'Inscrições', href: '#inscricoes' },
  { label: 'Apoio', href: '#apoio' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const closeMenu = () => setMenuOpen(false)

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        transition: 'background 0.35s ease, box-shadow 0.35s ease',
        background: scrolled
          ? 'rgba(20, 20, 20, 0.97)'
          : 'rgba(20, 20, 20, 0.55)',
        backdropFilter: 'blur(14px)',
        WebkitBackdropFilter: 'blur(14px)',
        boxShadow: scrolled ? '0 1px 24px rgba(0,0,0,0.45)' : 'none',
      }}
    >
      {/* Top accent bar */}
      <div style={{ height: '3px', background: 'linear-gradient(90deg, #E0592A 0%, #8CB63C 50%, #E0592A 100%)' }} />

      <nav
        style={{
          maxWidth: '1280px',
          margin: '0 auto',
          padding: '0 1.5rem',
          height: '64px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '1rem',
        }}
      >
        {/* Logo */}
        <a
          href="#"
          style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', textDecoration: 'none', flexShrink: 0 }}
          onClick={closeMenu}
        >
          <PawIcon size={20} color="#E0592A" />
          <span
            style={{
              fontFamily: 'var(--font-heading)',
              fontWeight: 900,
              fontSize: '1.25rem',
              color: '#fff',
              letterSpacing: '0.06em',
              textTransform: 'uppercase',
              lineHeight: 1,
            }}
          >
            Cachurrida
          </span>
        </a>

        {/* Desktop nav links */}
        <ul
          style={{
            gap: '0.25rem',
            listStyle: 'none',
            margin: 0,
            padding: 0,
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}
          className="show-md"
        >
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                style={{
                  display: 'block',
                  color: 'rgba(255,255,255,0.75)',
                  textDecoration: 'none',
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.82rem',
                  fontWeight: 500,
                  letterSpacing: '0.02em',
                  padding: '0.4rem 0.75rem',
                  borderRadius: '3px',
                  transition: 'color 0.15s, background 0.15s',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = '#E0592A'
                  e.currentTarget.style.background = 'rgba(224,89,42,0.1)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = 'rgba(255,255,255,0.75)'
                  e.currentTarget.style.background = 'transparent'
                }}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <a
          href="https://www.megaatletas.com.br/e/prova/cachurrida/"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary show-md-inline"
          style={{ padding: '0.5rem 1.25rem', fontSize: '0.82rem', flexShrink: 0, boxShadow: '0 3px 0 #C04A1E' }}
        >
          Inscreva-se
        </a>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="hide-md"
          aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
          style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: '8px',
            flexDirection: 'column',
            gap: '5px',
            alignItems: 'flex-end',
          }}
        >
          <span
            style={{
              display: 'block',
              width: '24px',
              height: '2px',
              background: '#fff',
              borderRadius: '2px',
              transition: 'transform 0.22s ease',
              transform: menuOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none',
            }}
          />
          <span
            style={{
              display: 'block',
              width: '18px',
              height: '2px',
              background: '#fff',
              borderRadius: '2px',
              transition: 'opacity 0.22s ease, width 0.22s ease',
              opacity: menuOpen ? 0 : 1,
            }}
          />
          <span
            style={{
              display: 'block',
              width: '24px',
              height: '2px',
              background: '#fff',
              borderRadius: '2px',
              transition: 'transform 0.22s ease',
              transform: menuOpen ? 'rotate(-45deg) translate(5px, -5px)' : 'none',
            }}
          />
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className="hide-md"
        style={{
          maxHeight: menuOpen ? '500px' : '0',
          overflow: 'hidden',
          transition: 'max-height 0.3s ease',
          background: 'rgba(20,20,20,0.98)',
          borderTop: menuOpen ? '1px solid rgba(255,255,255,0.08)' : 'none',
        }}
      >
        <div style={{ padding: '0.5rem 1.5rem 1.5rem' }}>
          {NAV_LINKS.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              onClick={closeMenu}
              style={{
                display: 'block',
                color: 'rgba(255,255,255,0.85)',
                textDecoration: 'none',
                padding: '0.8rem 0',
                fontFamily: 'var(--font-body)',
                fontSize: '1rem',
                fontWeight: 500,
                borderBottom: i < NAV_LINKS.length - 1 ? '1px solid rgba(255,255,255,0.06)' : 'none',
                transition: 'color 0.15s',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#E0592A')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.85)')}
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://www.megaatletas.com.br/e/prova/cachurrida/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
            onClick={closeMenu}
            style={{ marginTop: '1.25rem', width: '100%', justifyContent: 'center' }}
          >
            Inscreva-se agora
          </a>
        </div>
      </div>
    </header>
  )
}
