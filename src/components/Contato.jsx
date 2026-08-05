export default function Contato() {
  const phone = '(28) 99905-0737'
  const phoneClean = '5528999050737'

  return (
    <section
      id="contato"
      style={{
        background: '#fff',
        paddingTop: '5rem',
        paddingBottom: '5rem',
        borderTop: '1px solid rgba(21,19,13,0.1)',
      }}
    >
      <div
        style={{
          maxWidth: '800px',
          margin: '0 auto',
          padding: '0 1.5rem',
          textAlign: 'center',
        }}
        className="reveal"
      >
        <span className="section-label" style={{ justifyContent: 'center' }}>Fale com a organização</span>
        <h2
          style={{
            fontFamily: 'var(--font-heading)',
            fontWeight: 900,
            fontSize: 'clamp(2rem, 5vw, 3rem)',
            lineHeight: 0.95,
            textTransform: 'uppercase',
            color: '#15130D',
            margin: '0 0 1.5rem',
            letterSpacing: '-0.01em',
          }}
        >
          Dúvidas? <span className="hl">Fale com a gente</span>
        </h2>
        <p
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: '1rem',
            color: '#6B6862',
            lineHeight: 1.65,
            marginBottom: '2.5rem',
          }}
        >
          A equipe da ONG Patas Needs está disponível para responder suas dúvidas sobre o evento, inscrições, regulamento e cotas.
        </p>

        {/* Contact card */}
        <div
          style={{
            display: 'inline-flex',
            flexWrap: 'wrap',
            gap: '1rem',
            justifyContent: 'center',
          }}
        >
          {/* WhatsApp — kept in its real brand green: a recognized functional affordance, used only here */}
          <a
            href={`https://wa.me/${phoneClean}?text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20sobre%20a%20Cachurrida%20de%20Cachoeiro.`}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.75rem',
              background: '#25D366',
              color: '#fff',
              fontFamily: 'var(--font-heading)',
              fontWeight: 800,
              fontSize: '1.1rem',
              letterSpacing: '0.06em',
              textTransform: 'uppercase',
              padding: '0.9rem 1.75rem',
              borderRadius: '4px',
              textDecoration: 'none',
              boxShadow: '0 4px 0 #1aab50',
              transition: 'transform 0.15s, box-shadow 0.15s',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px)'
              e.currentTarget.style.boxShadow = '0 6px 0 #1aab50, 0 8px 20px rgba(37,211,102,0.3)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)'
              e.currentTarget.style.boxShadow = '0 4px 0 #1aab50'
            }}
          >
            <WhatsAppIcon />
            Chamar no WhatsApp
          </a>

          {/* Phone */}
          <a
            href={`tel:${phoneClean}`}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.75rem',
              background: '#F7F5EC',
              color: '#15130D',
              fontFamily: 'var(--font-heading)',
              fontWeight: 800,
              fontSize: '1.1rem',
              letterSpacing: '0.06em',
              textTransform: 'uppercase',
              padding: '0.9rem 1.75rem',
              borderRadius: '4px',
              textDecoration: 'none',
              border: '1.5px solid rgba(21,19,13,0.15)',
              boxShadow: '0 4px 0 rgba(21,19,13,0.15)',
              transition: 'transform 0.15s, box-shadow 0.15s',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px)'
              e.currentTarget.style.boxShadow = '0 6px 0 rgba(21,19,13,0.2), 0 8px 20px rgba(0,0,0,0.08)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)'
              e.currentTarget.style.boxShadow = '0 4px 0 rgba(21,19,13,0.15)'
            }}
          >
            <PhoneIcon />
            {phone}
          </a>
        </div>

        <p
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: '0.78rem',
            color: '#8a877f',
            marginTop: '1.5rem',
          }}
        >
          ONG Patas Needs · Cachoeiro de Itapemirim/ES
        </p>
      </div>
    </section>
  )
}

function WhatsAppIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
    </svg>
  )
}

function PhoneIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.37 2 2 0 0 1 3.62 1h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  )
}
