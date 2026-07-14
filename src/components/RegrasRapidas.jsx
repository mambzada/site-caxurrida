const REGRAS = [
  {
    icon: <RouteIcon />,
    title: 'Percurso de 400m',
    desc: 'Trajeto curto, acessível e sinalizado — pensado para toda a família, incluindo pets de todos os portes.',
  },
  {
    icon: <LeashIcon />,
    title: 'Guia/coleira obrigatória',
    desc: 'Todos os cães devem estar devidamente coleirados e na guia durante todo o percurso.',
  },
  {
    icon: <FlagIcon />,
    title: 'Caráter recreativo',
    desc: 'Sem cronômetro, sem competição. O objetivo é curtir, sorrir e criar memórias com seu pet.',
  },
  {
    icon: <PersonIcon />,
    title: 'Menores de 18 anos',
    desc: 'Participantes menores de 18 anos devem estar acompanhados de um responsável legal durante o evento.',
  },
]

export default function RegrasRapidas() {
  return (
    <section
      id="regras"
      style={{
        background: '#fff',
        paddingTop: '6rem',
        paddingBottom: '6rem',
      }}
    >
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1.5rem' }}>
        {/* Header */}
        <div
          style={{
            display: 'grid',
            gap: '2rem',
            alignItems: 'end',
            marginBottom: '3rem',
          }}
          className="md:grid-cols-2 reveal"
        >
          <div>
            <span className="section-label">Antes de se inscrever</span>
            <h2
              style={{
                fontFamily: 'var(--font-heading)',
                fontWeight: 900,
                fontSize: 'clamp(2.2rem, 5vw, 3.2rem)',
                lineHeight: 0.95,
                textTransform: 'uppercase',
                color: '#1A1A1A',
                margin: '0',
                letterSpacing: '-0.01em',
              }}
            >
              Regras rápidas
            </h2>
          </div>
          <div>
            <p
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '1rem',
                color: '#6b6b6b',
                lineHeight: 1.65,
                margin: 0,
              }}
            >
              A Caxurrida é um evento seguro, inclusivo e divertido. Leia as regras principais e, para mais detalhes, consulte o regulamento completo.
            </p>
            <a
              href="#regulamento"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.35rem',
                marginTop: '1rem',
                color: '#E0592A',
                fontFamily: 'var(--font-body)',
                fontSize: '0.9rem',
                fontWeight: 600,
                textDecoration: 'none',
                borderBottom: '1px solid rgba(224,89,42,0.35)',
                paddingBottom: '1px',
                transition: 'border-color 0.15s',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.borderColor = '#E0592A')}
              onMouseLeave={(e) => (e.currentTarget.style.borderColor = 'rgba(224,89,42,0.35)')}
            >
              Ver regulamento completo
              <ArrowRightIcon />
            </a>
          </div>
        </div>

        {/* Rules grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
            gap: '1rem',
          }}
        >
          {REGRAS.map((regra, i) => (
            <div
              key={i}
              className="reveal"
              style={{ transitionDelay: `${i * 0.07}s` }}
            >
              <div
                style={{
                  border: '1px solid #ebe0ce',
                  borderRadius: '10px',
                  padding: '1.5rem',
                  height: '100%',
                  boxSizing: 'border-box',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.75rem',
                  transition: 'border-color 0.2s, transform 0.2s',
                  cursor: 'default',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = '#E0592A'
                  e.currentTarget.style.transform = 'translateY(-3px)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = '#ebe0ce'
                  e.currentTarget.style.transform = 'translateY(0)'
                }}
              >
                <div
                  style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: '8px',
                    background: '#FAF6EE',
                    border: '1px solid #ebe0ce',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#E0592A',
                    flexShrink: 0,
                  }}
                >
                  {regra.icon}
                </div>
                <h3
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontWeight: 800,
                    fontSize: '1.05rem',
                    color: '#1A1A1A',
                    margin: 0,
                    textTransform: 'uppercase',
                    letterSpacing: '0.02em',
                  }}
                >
                  {regra.title}
                </h3>
                <p
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.88rem',
                    color: '#5a5a5a',
                    lineHeight: 1.6,
                    margin: 0,
                  }}
                >
                  {regra.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function RouteIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="6" cy="19" r="3" />
      <path d="M9 19h8.5c.4 0 .9-.2 1.2-.5l1.4-1.4c.3-.3.5-.8.5-1.2V6.5c0-.4-.2-.9-.5-1.2l-1.4-1.4C18.4 3.6 17.9 3.4 17.5 3.4H6C5.6 3.4 5 3.7 4.7 4L3.3 5.4C3 5.7 2.8 6.2 2.8 6.6V9" />
      <path d="M4 9H2" />
    </svg>
  )
}

function LeashIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="6" cy="18" r="3" />
      <circle cx="18" cy="6" r="3" />
      <path d="M6 15C6 11 10 7 14 6" />
    </svg>
  )
}

function FlagIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" />
      <line x1="4" y1="22" x2="4" y2="15" />
    </svg>
  )
}

function PersonIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  )
}

function ArrowRightIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  )
}
