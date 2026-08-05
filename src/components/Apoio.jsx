import logoPatasNeeds from '../assets/logo_patas_needs.jpeg'
import logoPrefeitura from '../assets/logo-prefeitura-cachoeiro.png.png'

const REALIZACAO = [
  {
    name: 'ONG Patas Needs',
    role: 'Realização',
    logo: logoPatasNeeds,
    logoAlt: 'ONG Patas Needs',
    width: 180,
  },
]

const APOIADORES = [
  {
    name: 'Prefeitura Municipal de Cachoeiro de Itapemirim',
    role: 'Apoio Institucional',
    logo: logoPrefeitura,
    logoAlt: 'Prefeitura Municipal de Cachoeiro de Itapemirim',
    width: 160,
  },
  {
    name: 'Edipo Running',
    role: 'Apoio Esportivo',
    logo: null,
    abbr: 'EDIPO\nRUNNING',
    color: '#15130D',
    width: 140,
  },
]

export default function Apoio() {
  return (
    <section
      id="apoio"
      style={{
        background: '#F7F5EC',
        paddingTop: '5rem',
        paddingBottom: '5rem',
        borderTop: '1px solid rgba(21,19,13,0.1)',
      }}
    >
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 1.5rem' }}>
        {/* Realização */}
        <div style={{ marginBottom: '3.5rem', textAlign: 'center' }} className="reveal">
          <p
            style={{
              fontFamily: 'var(--font-heading)',
              fontWeight: 700,
              fontSize: '0.68rem',
              letterSpacing: '0.22em',
              textTransform: 'uppercase',
              color: '#6B6862',
              marginBottom: '1.75rem',
            }}
          >
            Realização
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap' }}>
            {REALIZACAO.map((org) => (
              <LogoCard key={org.name} org={org} size="large" />
            ))}
          </div>
        </div>

        {/* Divider */}
        <div
          style={{
            height: '1px',
            background: 'linear-gradient(90deg, transparent, rgba(21,19,13,0.14) 20%, rgba(21,19,13,0.14) 80%, transparent)',
            marginBottom: '3.5rem',
          }}
          className="reveal"
        />

        {/* Apoio */}
        <div style={{ textAlign: 'center' }} className="reveal reveal-delay-1">
          <p
            style={{
              fontFamily: 'var(--font-heading)',
              fontWeight: 700,
              fontSize: '0.68rem',
              letterSpacing: '0.22em',
              textTransform: 'uppercase',
              color: '#6B6862',
              marginBottom: '1.75rem',
            }}
          >
            Apoio
          </p>
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '2rem',
              flexWrap: 'wrap',
              alignItems: 'center',
            }}
          >
            {APOIADORES.map((org) => (
              <LogoCard key={org.name} org={org} size="medium" />
            ))}
          </div>
        </div>

        {/* Sponsor note */}
        <div
          style={{
            marginTop: '3.5rem',
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '0.75rem',
          }}
          className="reveal"
        >
          <div style={{ width: '36px', height: '1px', background: 'rgba(21,19,13,0.2)' }} />
          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '0.82rem',
              color: '#6B6862',
              maxWidth: '440px',
              lineHeight: 1.6,
            }}
          >
            Quer apoiar a Cachurrida e contribuir com a causa animal? Entre em contato conosco.
          </p>
          <a href="#contato" className="link-underline" style={{ fontSize: '0.88rem' }}>
            Fale com a organização
          </a>
        </div>
      </div>
    </section>
  )
}

function LogoCard({ org, size }) {
  const isLarge = size === 'large'
  const boxW = isLarge ? 220 : 180
  const boxH = isLarge ? 100 : 80

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '0.6rem',
        cursor: 'default',
        transition: 'transform 0.2s ease',
      }}
      onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.04)')}
      onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
    >
      <div
        style={{
          width: `${boxW}px`,
          height: `${boxH}px`,
          borderRadius: '8px',
          background: '#fff',
          border: '1px solid rgba(21,19,13,0.12)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '12px 16px',
          boxSizing: 'border-box',
          boxShadow: '0 1px 4px rgba(0,0,0,0.06)',
          filter: 'grayscale(100%)',
          opacity: 0.65,
          transition: 'filter 0.3s ease, opacity 0.3s ease, box-shadow 0.3s ease',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.filter = 'grayscale(0%)'
          e.currentTarget.style.opacity = '1'
          e.currentTarget.style.boxShadow = '0 4px 16px rgba(0,0,0,0.12)'
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.filter = 'grayscale(100%)'
          e.currentTarget.style.opacity = '0.65'
          e.currentTarget.style.boxShadow = '0 1px 4px rgba(0,0,0,0.06)'
        }}
      >
        {org.logo ? (
          <img
            src={org.logo}
            alt={org.logoAlt}
            style={{
              maxWidth: '100%',
              maxHeight: '100%',
              objectFit: 'contain',
              display: 'block',
            }}
          />
        ) : (
          <span
            style={{
              fontFamily: 'var(--font-heading)',
              fontWeight: 900,
              fontSize: isLarge ? '0.9rem' : '0.75rem',
              color: org.color,
              textAlign: 'center',
              letterSpacing: '0.06em',
              textTransform: 'uppercase',
              lineHeight: 1.2,
              whiteSpace: 'pre-line',
            }}
          >
            {org.abbr}
          </span>
        )}
      </div>
      <span
        style={{
          fontFamily: 'var(--font-body)',
          fontSize: '0.72rem',
          color: '#6B6862',
          letterSpacing: '0.05em',
        }}
      >
        {org.role}
      </span>
    </div>
  )
}
