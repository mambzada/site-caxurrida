import RunnerDogSVG from './icons/RunnerDogSVG'
import PawStamp from './icons/PawStamp'

export default function Hero() {
  return (
    <section
      id="hero"
      style={{
        position: 'relative',
        minHeight: '100svh',
        background: '#15130D',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
      }}
    >
      {/* Subtle diagonal texture */}
      <div
        className="stripe-bg"
        style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}
      />

      {/* Main content */}
      <div
        style={{
          position: 'relative',
          zIndex: 2,
          maxWidth: '1280px',
          margin: '0 auto',
          padding: '7rem 1.5rem 5rem',
          width: '100%',
          boxSizing: 'border-box',
          display: 'grid',
          gap: '3rem',
          alignItems: 'center',
        }}
        className="md:grid-cols-2"
      >
        {/* Left: text */}
        <div style={{ maxWidth: '640px' }} className="animate-fade-in-up">
          {/* Edition badge */}
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              background: 'rgba(255,199,44,0.14)',
              border: '1px solid rgba(255,199,44,0.4)',
              borderRadius: '3px',
              padding: '0.3rem 0.85rem',
              marginBottom: '1.5rem',
            }}
          >
            <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#FFC72C', display: 'inline-block' }} />
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontWeight: 700,
                fontSize: '0.7rem',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: '#FFC72C',
              }}
            >
              1ª Edição · 16 de Agosto de 2026
            </span>
          </div>

          {/* Main headline */}
          <h1
            style={{
              position: 'relative',
              fontFamily: 'var(--font-heading)',
              fontWeight: 900,
              lineHeight: 0.88,
              margin: '0 0 1.25rem',
              textTransform: 'uppercase',
            }}
          >
            <span
              style={{
                position: 'relative',
                display: 'block',
                fontSize: 'clamp(4.5rem, 13vw, 10rem)',
                color: '#ffffff',
                letterSpacing: '-0.01em',
              }}
            >
              Cachurrida
              <PawStamp
                size={64}
                rotation={-14}
                delay="0.65s"
                style={{
                  position: 'absolute',
                  top: '-0.3em',
                  right: '-0.1em',
                  width: 'clamp(2.4rem, 6vw, 4rem)',
                  height: 'auto',
                  filter: 'drop-shadow(0 6px 10px rgba(0,0,0,0.5))',
                }}
              />
            </span>
            <span
              style={{
                display: 'block',
                fontSize: 'clamp(1.1rem, 3.2vw, 2.2rem)',
                color: 'rgba(255,255,255,0.55)',
                fontWeight: 700,
                letterSpacing: '0.04em',
                marginTop: '0.3rem',
              }}
            >
              de Cachoeiro de Itapemirim
            </span>
          </h1>

          {/* Date + location badge row */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '0.75rem',
              marginBottom: '2rem',
              alignItems: 'center',
            }}
          >
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontWeight: 700,
                fontSize: '0.95rem',
                letterSpacing: '0.02em',
                color: '#15130D',
                background: '#FFC72C',
                padding: '0.35rem 0.9rem',
                borderRadius: '3px',
              }}
            >
              16 AGO 2026
            </span>
            <span style={{ color: 'rgba(255,255,255,0.35)', fontSize: '1.1rem' }}>·</span>
            <span
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.88rem',
                color: 'rgba(255,255,255,0.65)',
                display: 'flex',
                alignItems: 'center',
                gap: '0.35rem',
              }}
            >
              <LocationIcon />
              Linha Vermelha, Cachoeiro/ES
            </span>
            <span style={{ color: 'rgba(255,255,255,0.35)', fontSize: '1.1rem' }}>·</span>
            <span
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.88rem',
                color: 'rgba(255,255,255,0.65)',
                display: 'flex',
                alignItems: 'center',
                gap: '0.35rem',
              }}
            >
              <ClockIcon />
              Largada às 7h
            </span>
          </div>

          {/* Subtitle */}
          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: 'clamp(0.95rem, 2vw, 1.1rem)',
              color: 'rgba(255,255,255,0.7)',
              lineHeight: 1.65,
              marginBottom: '2.5rem',
              maxWidth: '480px',
            }}
          >
            Corra ao lado do seu melhor amigo. Viva uma manhã de diversão,{' '}
            <strong style={{ color: 'rgba(255,255,255,0.9)', fontWeight: 600 }}>
              solidariedade e amor pelos animais.
            </strong>
          </p>

          {/* CTAs */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', alignItems: 'center' }}>
            <a
              href="https://www.megaatletas.com.br/e/prova/cachurrida/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              <PawSmall />
              Inscreva-se agora
            </a>
            <a href="#sobre" className="btn-outline-white">
              Saiba mais
            </a>
          </div>

          {/* Urgency note */}
          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '0.78rem',
              color: 'rgba(255,255,255,0.38)',
              marginTop: '1.25rem',
              letterSpacing: '0.01em',
            }}
          >
            Inscrições até 13 de agosto de 2026 ou enquanto houver vagas
          </p>
        </div>

        {/* Right: illustration */}
        <div
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            position: 'relative',
          }}
          className="show-md"
        >
          <RunnerDogSVG
            style={{ width: '100%', maxWidth: '480px', filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.5))' }}
            className="animate-fade-in-up"
          />
        </div>
      </div>

      {/* Bottom scroll indicator */}
      <div
        style={{
          position: 'absolute',
          bottom: '2rem',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '0.4rem',
          opacity: 0.4,
          animation: 'fadeInUp 1s ease 1.2s backwards',
          zIndex: 2,
        }}
      >
        <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.65rem', color: '#fff', letterSpacing: '0.15em', textTransform: 'uppercase' }}>
          Role para baixo
        </span>
        <div style={{ width: '1px', height: '36px', background: 'rgba(255,255,255,0.4)', position: 'relative', overflow: 'hidden' }}>
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            background: '#FFC72C',
            animation: 'scrollDot 1.6s ease-in-out infinite',
          }} />
        </div>
      </div>

      {/* Hazard-tape strip — ground level of the start corral */}
      <div className="hazard-tape" style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '10px', zIndex: 2 }} />

      <style>{`
        @keyframes scrollDot {
          0% { height: 0; top: 0; }
          50% { height: 100%; top: 0; }
          100% { height: 0; top: 100%; }
        }
      `}</style>
    </section>
  )
}

function LocationIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  )
}

function ClockIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  )
}

function PawSmall() {
  return (
    <svg width="16" height="16" viewBox="0 0 32 32" fill="none">
      <ellipse cx="9" cy="6.5" rx="3.5" ry="4.5" fill="currentColor" />
      <ellipse cx="18" cy="5.5" rx="3" ry="4" fill="currentColor" />
      <ellipse cx="4" cy="14" rx="3" ry="4" fill="currentColor" />
      <ellipse cx="24" cy="13" rx="3" ry="4" fill="currentColor" />
      <ellipse cx="14" cy="22" rx="8" ry="9.5" fill="currentColor" />
    </svg>
  )
}
