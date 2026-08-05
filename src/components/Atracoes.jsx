const ATRACOES = [
  {
    icon: <HeartHandsIcon />,
    title: 'Feira de Adoção Responsável',
    desc: 'Conheça pets que buscam um lar e, quem sabe, leve um novo companheiro para casa.',
  },
  {
    icon: <CatWalkIcon />,
    title: 'Passarela Modelo Caramelo',
    desc: 'Os pets mais elegantes desfilam num palco à parte. Elegância e fofura em destaque.',
  },
  {
    icon: <PawShopIcon />,
    title: 'Espaço Pet e Expositores',
    desc: 'Produtos, serviços e novidades do mundo pet reunidos em um só lugar.',
  },
  {
    icon: <KidsIcon />,
    title: 'Espaço Kids e Praça de Alimentação',
    desc: 'Diversão para a criançada e muitas opções de alimentação para toda a família.',
  },
  {
    icon: <CameraIcon />,
    title: 'Espaço Instagramável',
    desc: 'Cenários exclusivos para registrar o momento mais fotogênico do dia com seu pet.',
  },
  {
    icon: <BazarIcon />,
    title: 'Bazar Solidário e Rifa Beneficente',
    desc: 'Compre, participe e ajude a ONG Patas Needs a continuar sua missão.',
  },
  {
    icon: <MusicIcon />,
    title: 'Show ao Vivo',
    desc: 'A manhã encerra com muita música e animação com artista local.',
  },
]

export default function Atracoes() {
  return (
    <section
      id="atracoes"
      style={{
        background: '#fff',
        paddingTop: '6rem',
        paddingBottom: '6rem',
      }}
    >
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1.5rem' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }} className="reveal">
          <span className="section-label" style={{ justifyContent: 'center' }}>O que você vai encontrar</span>
          <h2
            style={{
              fontFamily: 'var(--font-heading)',
              fontWeight: 900,
              fontSize: 'clamp(2.4rem, 5vw, 3.5rem)',
              lineHeight: 0.95,
              textTransform: 'uppercase',
              color: '#15130D',
              margin: '0 0 1rem',
              letterSpacing: '-0.01em',
            }}
          >
            Muito além da corrida
          </h2>
          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '1rem',
              color: '#6B6862',
              maxWidth: '520px',
              margin: '0 auto',
              lineHeight: 1.65,
            }}
          >
            A Cachurrida é uma festa completa. Venha com seu pet e aproveite um dia repleto de atrações para toda a família.
          </p>
        </div>

        {/* Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
            gap: '1.25rem',
          }}
        >
          {ATRACOES.map((item, i) => (
            <div
              key={i}
              className="reveal"
              style={{ transitionDelay: `${(i % 4) * 0.08}s` }}
            >
              <div
                style={{
                  background: '#F7F5EC',
                  border: '1px solid rgba(21,19,13,0.1)',
                  borderRadius: '10px',
                  padding: '1.6rem',
                  height: '100%',
                  boxSizing: 'border-box',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.75rem',
                  transition: 'transform 0.22s ease, box-shadow 0.22s ease, border-color 0.22s ease',
                  cursor: 'default',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-5px)'
                  e.currentTarget.style.boxShadow = '0 12px 32px rgba(0,0,0,0.1)'
                  e.currentTarget.style.borderColor = '#15130D'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)'
                  e.currentTarget.style.boxShadow = 'none'
                  e.currentTarget.style.borderColor = 'rgba(21,19,13,0.1)'
                }}
              >
                <div
                  style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '10px',
                    background: 'rgba(255,199,44,0.2)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#15130D',
                    flexShrink: 0,
                  }}
                >
                  {item.icon}
                </div>
                <h3
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontWeight: 800,
                    fontSize: '1.1rem',
                    color: '#15130D',
                    margin: 0,
                    lineHeight: 1.2,
                  }}
                >
                  {item.title}
                </h3>
                <p
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.88rem',
                    color: '#5a5750',
                    lineHeight: 1.6,
                    margin: 0,
                  }}
                >
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function HeartHandsIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
    </svg>
  )
}

function CatWalkIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="5" r="3" />
      <path d="M6.5 8a2 2 0 0 0-2 2l-.5 8h16l-.5-8a2 2 0 0 0-2-2z" />
      <path d="M6 18l-1 3M18 18l1 3" />
    </svg>
  )
}

function PawShopIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
      <line x1="3" y1="6" x2="21" y2="6" />
      <path d="M16 10a4 4 0 0 1-8 0" />
    </svg>
  )
}

function KidsIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="8" r="4" />
      <path d="M8 16l-2 6h12l-2-6" />
      <path d="M6 12H4a2 2 0 0 0-2 2v2M18 12h2a2 2 0 0 1 2 2v2" />
    </svg>
  )
}

function CameraIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
      <circle cx="12" cy="13" r="4" />
    </svg>
  )
}

function BazarIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 12 20 22 4 22 4 12" />
      <rect x="2" y="7" width="20" height="5" />
      <line x1="12" y1="22" x2="12" y2="7" />
      <path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z" />
      <path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z" />
    </svg>
  )
}

function MusicIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 18V5l12-2v13" />
      <circle cx="6" cy="18" r="3" />
      <circle cx="18" cy="16" r="3" />
    </svg>
  )
}
