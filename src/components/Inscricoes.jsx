export default function Inscricoes() {
  return (
    <section
      id="inscricoes"
      style={{
        background: '#15130D',
        paddingTop: '6rem',
        paddingBottom: '6rem',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Decorative elements */}
      <div
        className="stripe-bg"
        style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}
      />
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '600px',
          height: '600px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(255,199,44,0.08) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      <div
        style={{
          maxWidth: '860px',
          margin: '0 auto',
          padding: '0 1.5rem',
          position: 'relative',
          zIndex: 1,
          textAlign: 'center',
        }}
        className="reveal"
      >
        {/* Badge */}
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
          <span
            style={{
              display: 'inline-block',
              width: '6px',
              height: '6px',
              borderRadius: '50%',
              background: '#FFC72C',
              animation: 'pulse 1.8s ease-in-out infinite',
            }}
          />
          <span
            style={{
              fontFamily: 'var(--font-heading)',
              fontWeight: 700,
              fontSize: '0.68rem',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: '#FFC72C',
            }}
          >
            Inscrições abertas
          </span>
        </div>

        <h2
          style={{
            fontFamily: 'var(--font-heading)',
            fontWeight: 900,
            fontSize: 'clamp(2.8rem, 7vw, 5rem)',
            lineHeight: 0.92,
            textTransform: 'uppercase',
            color: '#fff',
            margin: '0 0 1.5rem',
            letterSpacing: '-0.02em',
          }}
        >
          Garanta sua vaga <br />
          <span style={{ color: '#FFC72C' }}>e a do seu pet</span>
        </h2>

        <p
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: '1.05rem',
            color: 'rgba(255,255,255,0.65)',
            lineHeight: 1.7,
            marginBottom: '0.75rem',
            maxWidth: '540px',
            marginInline: 'auto',
          }}
        >
          As inscrições são realizadas pela plataforma Mega Atletas. Vagas limitadas — a corrida é gratuita para tutores e seus pets.
        </p>

        {/* Deadline */}
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.6rem',
            background: 'rgba(255,255,255,0.05)',
            border: '1px solid rgba(255,255,255,0.1)',
            borderRadius: '4px',
            padding: '0.65rem 1.25rem',
            marginBottom: '2.5rem',
          }}
        >
          <ClockIcon />
          <span
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '0.88rem',
              color: 'rgba(255,255,255,0.7)',
            }}
          >
            Prazo:{' '}
            <strong style={{ color: '#fff', fontWeight: 600 }}>
              13 de agosto de 2026, às 23h59
            </strong>
            {' '}ou até o fim das vagas
          </span>
        </div>

        <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
          <a
            href="https://www.megaatletas.com.br/e/prova/cachurrida/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
            style={{ fontSize: '1.15rem', padding: '1rem 2.5rem' }}
          >
            <PawIcon />
            Inscreva-se agora
          </a>
        </div>

        <p
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: '0.78rem',
            color: 'rgba(255,255,255,0.3)',
            marginTop: '1.5rem',
          }}
        >
          Acesso via plataforma Mega Atletas · megaatletas.com.br
        </p>
      </div>

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.6; transform: scale(0.8); }
        }
      `}</style>
    </section>
  )
}

function ClockIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.5)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  )
}

function PawIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 32 32" fill="none">
      <ellipse cx="9" cy="6.5" rx="3.5" ry="4.5" fill="currentColor" />
      <ellipse cx="18" cy="5.5" rx="3" ry="4" fill="currentColor" />
      <ellipse cx="4" cy="14" rx="3" ry="4" fill="currentColor" />
      <ellipse cx="24" cy="13" rx="3" ry="4" fill="currentColor" />
      <ellipse cx="14" cy="22" rx="8" ry="9.5" fill="currentColor" />
    </svg>
  )
}
