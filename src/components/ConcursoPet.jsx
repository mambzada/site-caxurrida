const CRITERIOS = [
  { label: 'Criatividade da caracterização', icon: '✦' },
  { label: 'Originalidade do look', icon: '✦' },
  { label: 'Harmonia dos acessórios', icon: '✦' },
  { label: 'Simpatia e interação tutor-pet', icon: '✦' },
  { label: 'Respeito ao bem-estar do animal', icon: '✦' },
]

export default function ConcursoPet() {
  return (
    <section
      id="concurso"
      style={{
        background: '#F7F5EC',
        paddingTop: '6rem',
        paddingBottom: '6rem',
        overflow: 'hidden',
        position: 'relative',
      }}
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
        {/* Left: Trophy illustration */}
        <div
          style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
          className="reveal order-last md:order-first"
        >
          <TrophyIllustration />
        </div>

        {/* Right: content */}
        <div className="reveal reveal-delay-2">
          <span className="section-label">Durante o evento</span>
          <h2
            style={{
              fontFamily: 'var(--font-heading)',
              fontWeight: 900,
              fontSize: 'clamp(2.2rem, 5vw, 3.2rem)',
              lineHeight: 0.95,
              textTransform: 'uppercase',
              color: '#15130D',
              margin: '0 0 0.75rem',
              letterSpacing: '-0.01em',
            }}
          >
            Concurso <br />
            <span className="hl">"Pet Mais Estiloso"</span>
          </h2>
          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '1rem',
              color: '#5a5750',
              lineHeight: 1.7,
              marginBottom: '2rem',
            }}
          >
            Venha com seu pet produzido e concorra a uma premiação especial! Os jurados avaliam criatividade, estilo e a harmonia entre tutor e animal. O bem-estar do pet é prioridade absoluta.
          </p>

          {/* Criteria */}
          <p
            style={{
              fontFamily: 'var(--font-heading)',
              fontWeight: 700,
              fontSize: '0.7rem',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: '#6B6862',
              marginBottom: '1rem',
            }}
          >
            Critérios de avaliação
          </p>
          <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
            {CRITERIOS.map((c, i) => (
              <li
                key={i}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.85rem',
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.95rem',
                  color: '#2D2D2D',
                  fontWeight: 500,
                }}
              >
                <span
                  style={{
                    color: '#15130D',
                    fontSize: '0.65rem',
                    flexShrink: 0,
                    lineHeight: 1,
                  }}
                >
                  {c.icon}
                </span>
                {c.label}
              </li>
            ))}
          </ul>

          {/* Prize note */}
          <div
            style={{
              marginTop: '2rem',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.75rem',
              background: 'rgba(255,199,44,0.18)',
              border: '1px solid rgba(255,199,44,0.4)',
              borderRadius: '6px',
              padding: '0.85rem 1.25rem',
            }}
          >
            <span style={{ fontSize: '1.4rem' }}>🏆</span>
            <div>
              <p
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontWeight: 800,
                  fontSize: '0.9rem',
                  color: '#15130D',
                  margin: '0 0 0.15rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                }}
              >
                Premiação especial
              </p>
              <p
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.82rem',
                  color: '#6B6862',
                  margin: 0,
                }}
              >
                O vencedor recebe um prêmio surpresa e muito reconhecimento!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function TrophyIllustration() {
  return (
    <svg
      viewBox="0 0 300 320"
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: '100%', maxWidth: '280px' }}
      fill="none"
      aria-hidden="true"
    >
      {/* Glow */}
      <ellipse cx="150" cy="290" rx="80" ry="14" fill="#15130D" opacity="0.1" />

      {/* Base */}
      <rect x="90" y="265" width="120" height="18" rx="4" fill="#15130D" />
      <rect x="105" y="248" width="90" height="20" rx="3" fill="#15130D" />

      {/* Stem */}
      <rect x="133" y="200" width="34" height="52" rx="4" fill="#FFC72C" />

      {/* Cup body */}
      <path d="M70 80 L85 198 Q150 220 215 198 L230 80 Z" fill="#FFC72C" />

      {/* Cup shine */}
      <path d="M95 90 L105 185 Q130 200 155 198 L160 90 Z" fill="#FFFFFF" opacity="0.35" />

      {/* Cup rim */}
      <rect x="65" y="72" width="170" height="18" rx="6" fill="#15130D" />

      {/* Handles */}
      <path d="M70 100 Q40 100 40 140 Q40 175 70 175" stroke="#15130D" strokeWidth="12" strokeLinecap="round" fill="none" />
      <path d="M230 100 Q260 100 260 140 Q260 175 230 175" stroke="#15130D" strokeWidth="12" strokeLinecap="round" fill="none" />

      {/* Paw stamped on cup */}
      <g transform="translate(118, 120)" fill="#15130D" opacity="0.85">
        <ellipse cx="17" cy="8" rx="8" ry="11" />
        <ellipse cx="36" cy="6" rx="7" ry="9" />
        <ellipse cx="4" cy="22" rx="6" ry="8" />
        <ellipse cx="49" cy="19" rx="6" ry="8" />
        <ellipse cx="27" cy="38" rx="16" ry="21" />
      </g>

      {/* Stars */}
      <text x="50" y="60" fontSize="22" fill="#15130D" opacity="0.55">★</text>
      <text x="230" y="45" fontSize="16" fill="#15130D" opacity="0.4">★</text>
      <text x="240" y="80" fontSize="11" fill="#15130D" opacity="0.4">★</text>
      <text x="35" y="40" fontSize="13" fill="#15130D" opacity="0.35">★</text>
    </svg>
  )
}
