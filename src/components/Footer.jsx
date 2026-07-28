import PawIcon from './icons/PawIcon'

const NAV_LINKS = [
  { label: 'Sobre o evento', href: '#sobre' },
  { label: 'Causa animal', href: '#causa' },
  { label: 'Programação', href: '#programacao' },
  { label: 'Atrações', href: '#atracoes' },
  { label: 'Kit do participante', href: '#kit' },
  { label: 'Concurso Pet', href: '#concurso' },
  { label: 'Regras', href: '#regras' },
  { label: 'Inscrições', href: '#inscricoes' },
  { label: 'Apoio', href: '#apoio' },
  { label: 'Contato', href: '#contato' },
]

export default function Footer() {
  return (
    <footer
      style={{
        background: '#141414',
        paddingTop: '4rem',
        paddingBottom: '2rem',
        borderTop: '3px solid #E0592A',
      }}
    >
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1.5rem' }}>
        {/* Top row */}
        <div
          style={{
            display: 'grid',
            gap: '3rem',
            paddingBottom: '3rem',
            borderBottom: '1px solid rgba(255,255,255,0.08)',
          }}
          className="md:grid-cols-3"
        >
          {/* Brand */}
          <div>
            <a
              href="#"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.45rem',
                textDecoration: 'none',
                marginBottom: '1rem',
              }}
            >
              <PawIcon size={22} color="#E0592A" />
              <span
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontWeight: 900,
                  fontSize: '1.3rem',
                  color: '#fff',
                  letterSpacing: '0.06em',
                  textTransform: 'uppercase',
                  lineHeight: 1,
                }}
              >
                Cachurrida
              </span>
            </a>
            <p
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.88rem',
                color: 'rgba(255,255,255,0.45)',
                lineHeight: 1.65,
                marginBottom: '1.25rem',
                maxWidth: '260px',
              }}
            >
              1ª Cachurrida de Cachoeiro de Itapemirim — corrida solidária de 400m para tutores e seus pets.
            </p>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                background: 'rgba(224,89,42,0.12)',
                border: '1px solid rgba(224,89,42,0.25)',
                borderRadius: '4px',
                padding: '0.35rem 0.85rem',
              }}
            >
              <span
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontWeight: 700,
                  fontSize: '0.72rem',
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  color: '#E0592A',
                }}
              >
                16 Ago 2026 · Cachoeiro/ES
              </span>
            </div>
          </div>

          {/* Links col 1 */}
          <div>
            <p
              style={{
                fontFamily: 'var(--font-heading)',
                fontWeight: 700,
                fontSize: '0.68rem',
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: 'rgba(255,255,255,0.35)',
                marginBottom: '1rem',
              }}
            >
              Navegação
            </p>
            <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: '0.55rem' }}>
              {NAV_LINKS.slice(0, 5).map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: '0.88rem',
                      color: 'rgba(255,255,255,0.5)',
                      textDecoration: 'none',
                      transition: 'color 0.15s',
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = '#E0592A')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.5)')}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Links col 2 + CTA */}
          <div>
            <p
              style={{
                fontFamily: 'var(--font-heading)',
                fontWeight: 700,
                fontSize: '0.68rem',
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: 'rgba(255,255,255,0.35)',
                marginBottom: '1rem',
              }}
            >
              Mais
            </p>
            <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: '0.55rem', marginBottom: '1.75rem' }}>
              {NAV_LINKS.slice(5).map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: '0.88rem',
                      color: 'rgba(255,255,255,0.5)',
                      textDecoration: 'none',
                      transition: 'color 0.15s',
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = '#E0592A')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.5)')}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>

            <a
              href="https://www.megaatletas.com.br/e/prova/cachurrida/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
              style={{ padding: '0.65rem 1.4rem', fontSize: '0.85rem', boxShadow: '0 3px 0 #C04A1E' }}
            >
              Inscreva-se
            </a>
          </div>
        </div>

        {/* Bottom row */}
        <div
          style={{
            paddingTop: '1.75rem',
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '1rem',
          }}
        >
          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '0.78rem',
              color: 'rgba(255,255,255,0.25)',
              margin: 0,
            }}
          >
            © 2026 ONG Patas Needs · 1ª Cachurrida de Cachoeiro de Itapemirim. Todos os direitos reservados.
          </p>
          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '0.78rem',
              color: 'rgba(255,255,255,0.2)',
              margin: 0,
              display: 'flex',
              alignItems: 'center',
              gap: '0.4rem',
            }}
          >
            <span>Realização:</span>
            <span style={{ color: 'rgba(255,255,255,0.4)', fontWeight: 600 }}>ONG Patas Needs</span>
            <span>·</span>
            <span>Apoio:</span>
            <span style={{ color: 'rgba(255,255,255,0.4)', fontWeight: 600 }}>Edipo Running & Prefeitura de Cachoeiro</span>
          </p>
        </div>
      </div>
    </footer>
  )
}
