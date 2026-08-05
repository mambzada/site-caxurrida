import PawIcon from './icons/PawIcon'

const INFO_CARDS = [
  {
    icon: <LocationIcon />,
    label: 'Local',
    value: 'Linha Vermelha',
    sub: 'Cachoeiro de Itapemirim/ES',
  },
  {
    icon: <CalendarIcon />,
    label: 'Data',
    value: '16 de Agosto de 2026',
    sub: 'Domingo · Largada às 7h',
  },
  {
    icon: <PawIcon size={22} color="#15130D" />,
    label: 'Realização',
    value: 'ONG Patas Needs',
    sub: 'Proteção e adoção animal',
  },
  {
    icon: <HeartIcon />,
    label: 'Apoio',
    value: 'Edipo Running',
    sub: 'Prefeitura Municipal de Cachoeiro',
  },
]

export default function Sobre() {
  return (
    <section
      id="sobre"
      style={{ background: '#F7F5EC', paddingTop: '6rem', paddingBottom: '6rem' }}
    >
      <div
        style={{
          maxWidth: '1280px',
          margin: '0 auto',
          padding: '0 1.5rem',
          display: 'grid',
          gap: '4rem',
          alignItems: 'center',
        }}
        className="md:grid-cols-2"
      >
        {/* Left: Text */}
        <div className="reveal">
          <span className="section-label">Sobre o evento</span>
          <h2
            style={{
              fontFamily: 'var(--font-heading)',
              fontWeight: 900,
              fontSize: 'clamp(2.4rem, 5vw, 3.5rem)',
              lineHeight: 0.95,
              textTransform: 'uppercase',
              color: '#15130D',
              margin: '0 0 1.5rem',
              letterSpacing: '-0.01em',
            }}
          >
            Onde tutores e pets <span className="hl">correm juntos</span>
          </h2>
          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '1.05rem',
              color: '#3a3833',
              lineHeight: 1.75,
              marginBottom: '1.5rem',
            }}
          >
            A Cachurrida é um evento criado para reunir apaixonados por cães em um dia de integração, lazer e convivência entre pets e tutores. Nasce para celebrar o amor pelos animais, incentivar a guarda responsável e fortalecer a comunidade pet de Cachoeiro de Itapemirim.
          </p>
          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '1.05rem',
              color: '#3a3833',
              lineHeight: 1.75,
              marginBottom: '2.5rem',
            }}
          >
            Com um percurso recreativo de 400 metros — acessível e sem competição — o evento convida tutores e seus cães a participarem juntos de uma manhã inesquecível na Linha Vermelha.
          </p>

          {/* Pull quote */}
          <blockquote
            style={{
              borderLeft: '4px solid #FFC72C',
              paddingLeft: '1.5rem',
              margin: 0,
            }}
          >
            <p
              style={{
                fontFamily: 'var(--font-heading)',
                fontWeight: 800,
                fontSize: 'clamp(1.3rem, 3vw, 1.75rem)',
                color: '#15130D',
                lineHeight: 1.2,
                textTransform: 'uppercase',
                letterSpacing: '0.01em',
              }}
            >
              "Porque amor não tem raça. Amor se compartilha."
            </p>
          </blockquote>
        </div>

        {/* Right: Info cards grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '1rem',
          }}
          className="reveal reveal-delay-2"
        >
          {INFO_CARDS.map((card, i) => (
            <div
              key={i}
              style={{
                background: '#fff',
                border: '1px solid rgba(21,19,13,0.1)',
                borderRadius: '8px',
                padding: '1.4rem',
                transition: 'transform 0.2s ease, box-shadow 0.2s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-3px)'
                e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,0,0,0.08)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = 'none'
              }}
            >
              <div
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '8px',
                  background: 'rgba(255,199,44,0.18)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '1rem',
                  color: '#15130D',
                }}
              >
                {card.icon}
              </div>
              <p
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontWeight: 700,
                  fontSize: '0.68rem',
                  letterSpacing: '0.18em',
                  textTransform: 'uppercase',
                  color: '#6B6862',
                  marginBottom: '0.3rem',
                }}
              >
                {card.label}
              </p>
              <p
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontWeight: 800,
                  fontSize: '1.1rem',
                  color: '#15130D',
                  lineHeight: 1.2,
                  marginBottom: '0.25rem',
                }}
              >
                {card.value}
              </p>
              <p
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.82rem',
                  color: '#6B6862',
                  lineHeight: 1.4,
                }}
              >
                {card.sub}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function LocationIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  )
}

function CalendarIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
      <line x1="16" y1="2" x2="16" y2="6" />
      <line x1="8" y1="2" x2="8" y2="6" />
      <line x1="3" y1="10" x2="21" y2="10" />
    </svg>
  )
}

function HeartIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
    </svg>
  )
}
