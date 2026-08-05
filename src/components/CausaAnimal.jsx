const IMPACTS = [
  'Redução do abandono animal na cidade',
  'Incentivo à adoção responsável',
  'Fortalecimento das organizações de proteção animal',
  'Desenvolvimento da consciência cidadã',
  'Engajamento social da comunidade',
  'Promoção da responsabilidade social corporativa',
  'Construção de uma cidade mais humana e solidária',
]

export default function CausaAnimal() {
  return (
    <section
      id="causa"
      style={{
        background: '#15130D',
        paddingTop: '6rem',
        paddingBottom: '6rem',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Large decorative watermark */}
      <div
        style={{
          position: 'absolute',
          bottom: '-2rem',
          right: '-1rem',
          fontFamily: 'var(--font-heading)',
          fontWeight: 900,
          fontSize: 'clamp(6rem, 18vw, 16rem)',
          lineHeight: 1,
          color: 'rgba(255,255,255,0.03)',
          textTransform: 'uppercase',
          pointerEvents: 'none',
          userSelect: 'none',
          whiteSpace: 'nowrap',
        }}
      >
        AMOR
      </div>

      <div
        style={{
          maxWidth: '1280px',
          margin: '0 auto',
          padding: '0 1.5rem',
          position: 'relative',
          zIndex: 1,
          display: 'grid',
          gap: '4rem',
          alignItems: 'start',
        }}
        className="lg:grid-cols-2"
      >
        {/* Left column */}
        <div className="reveal">
          {/* Project badge */}
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              background: 'rgba(255,255,255,0.1)',
              border: '1px solid rgba(255,255,255,0.2)',
              borderRadius: '3px',
              padding: '0.3rem 0.85rem',
              marginBottom: '1.5rem',
            }}
          >
            <HeartPawIcon />
            <span
              style={{
                fontFamily: 'var(--font-heading)',
                fontWeight: 700,
                fontSize: '0.68rem',
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: 'rgba(255,255,255,0.75)',
              }}
            >
              Projeto Amor Não Tem Raça
            </span>
          </div>

          <h2
            style={{
              fontFamily: 'var(--font-heading)',
              fontWeight: 900,
              fontSize: 'clamp(2.2rem, 5vw, 3.2rem)',
              lineHeight: 0.95,
              textTransform: 'uppercase',
              color: '#fff',
              margin: '0 0 1.5rem',
              letterSpacing: '-0.01em',
            }}
          >
            A causa animal <br />
            <span style={{ color: '#FFC72C' }}>e o impacto social</span>
          </h2>

          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '1.05rem',
              color: 'rgba(255,255,255,0.75)',
              lineHeight: 1.75,
              marginBottom: '1.25rem',
            }}
          >
            O Brasil é o 4º país com maior número de animais abandonados no mundo. Em Cachoeiro de Itapemirim, assim como em todo o país, o abandono de cães e gatos é uma realidade que exige ação coletiva e conscientização permanente.
          </p>
          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '1.05rem',
              color: 'rgba(255,255,255,0.75)',
              lineHeight: 1.75,
            }}
          >
            O projeto <strong style={{ color: '#fff' }}>"Amor Não Tem Raça"</strong>, da ONG Patas Needs, trabalha para mudar essa realidade — conectando animais que precisam de um lar com famílias dispostas a dar amor e cuidado responsável. A Cachurrida é o braço festivo desse movimento.
          </p>
        </div>

        {/* Right column: impact list */}
        <div className="reveal reveal-delay-2">
          <p
            style={{
              fontFamily: 'var(--font-heading)',
              fontWeight: 700,
              fontSize: '0.7rem',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: '#FFC72C',
              marginBottom: '1.5rem',
            }}
          >
            Impactos gerados
          </p>
          <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {IMPACTS.map((item, i) => (
              <li
                key={i}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  background: 'rgba(255,255,255,0.06)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  borderRadius: '6px',
                  padding: '0.85rem 1.1rem',
                  transition: 'background 0.2s ease, transform 0.2s ease',
                  cursor: 'default',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgba(255,199,44,0.12)'
                  e.currentTarget.style.transform = 'translateX(4px)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(255,255,255,0.06)'
                  e.currentTarget.style.transform = 'translateX(0)'
                }}
              >
                <span
                  style={{
                    width: '8px',
                    height: '8px',
                    borderRadius: '50%',
                    background: '#FFC72C',
                    flexShrink: 0,
                  }}
                />
                <span
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.95rem',
                    color: 'rgba(255,255,255,0.85)',
                    lineHeight: 1.4,
                  }}
                >
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

function HeartPawIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" stroke="rgba(255,255,255,0.75)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}
