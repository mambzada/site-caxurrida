import camisaImg from '../assets/camisa-caxurida.jpg.jpeg'
import lencoImg from '../assets/lenco-cachurrida.jpg.jpeg'
import medalhaImg from '../assets/medalha-cachurrida.jpg.png'

const KIT_ITEMS = [
  {
    image: camisaImg,
    title: 'Camisa oficial',
    desc: 'Camiseta exclusiva da 1ª Cachurrida, com a identidade visual do evento.',
  },
  {
    image: lencoImg,
    title: 'Lenço para o pet',
    desc: 'Seu cão também vai com estilo: lenço temático exclusivo para participantes peludos.',
  },
  {
    image: medalhaImg,
    title: 'Medalha de conclusão',
    desc: 'Para guardar a memória: medalha oficial para cada dupla que cruzar a linha de chegada.',
  },
  {
    image: null,
    icon: <GiftIcon />,
    title: 'Kit pet e brindes',
    desc: 'Surpresas e brindes dos patrocinadores para você e seu companheiro de quatro patas.',
  },
]

export default function Kit() {
  return (
    <section
      id="kit"
      style={{
        background: '#E0592A',
        paddingTop: '6rem',
        paddingBottom: '6rem',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Stripe texture */}
      <div className="stripe-bg" style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }} />

      {/* Decorative large text */}
      <div
        style={{
          position: 'absolute',
          top: '-1rem',
          left: '-1rem',
          fontFamily: 'var(--font-heading)',
          fontWeight: 900,
          fontSize: 'clamp(8rem, 22vw, 18rem)',
          lineHeight: 1,
          color: 'rgba(0,0,0,0.06)',
          textTransform: 'uppercase',
          pointerEvents: 'none',
          userSelect: 'none',
          whiteSpace: 'nowrap',
        }}
      >
        KIT
      </div>

      <div
        style={{
          maxWidth: '1280px',
          margin: '0 auto',
          padding: '0 1.5rem',
          position: 'relative',
          zIndex: 1,
        }}
      >
        {/* Header */}
        <div style={{ marginBottom: '3.5rem' }} className="reveal">
          <span className="section-label section-label-white">O kit do participante</span>
          <h2
            style={{
              fontFamily: 'var(--font-heading)',
              fontWeight: 900,
              fontSize: 'clamp(2.4rem, 5vw, 3.5rem)',
              lineHeight: 0.95,
              textTransform: 'uppercase',
              color: '#fff',
              margin: '0 0 1rem',
              letterSpacing: '-0.01em',
            }}
          >
            Você e seu pet <br />
            <span style={{ color: 'rgba(255,255,255,0.55)' }}>chegam preparados</span>
          </h2>
          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '1rem',
              color: 'rgba(255,255,255,0.75)',
              maxWidth: '480px',
              lineHeight: 1.65,
            }}
          >
            Todos os inscritos recebem um kit especial, pensado para que a experiência da Cachurrida comece antes mesmo do dia do evento.
          </p>
        </div>

        {/* Kit items grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))',
            gap: '1.25rem',
          }}
        >
          {KIT_ITEMS.map((item, i) => (
            <div
              key={i}
              className="reveal"
              style={{ transitionDelay: `${i * 0.08}s` }}
            >
              <div
                style={{
                  background: 'rgba(255,255,255,0.1)',
                  border: '1px solid rgba(255,255,255,0.2)',
                  borderRadius: '10px',
                  overflow: 'hidden',
                  height: '100%',
                  boxSizing: 'border-box',
                  display: 'flex',
                  flexDirection: 'column',
                  backdropFilter: 'blur(8px)',
                  transition: 'background 0.22s ease, transform 0.22s ease',
                  cursor: 'default',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgba(255,255,255,0.18)'
                  e.currentTarget.style.transform = 'translateY(-4px)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(255,255,255,0.1)'
                  e.currentTarget.style.transform = 'translateY(0)'
                }}
              >
                {/* Photo or icon area */}
                {item.image ? (
                  <div
                    style={{
                      height: '200px',
                      flexShrink: 0,
                      overflow: 'hidden',
                      background: 'rgba(255,255,255,0.08)',
                    }}
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        objectPosition: 'center',
                        display: 'block',
                        transition: 'transform 0.4s ease',
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.04)')}
                      onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                    />
                  </div>
                ) : (
                  <div
                    style={{
                      height: '200px',
                      flexShrink: 0,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      background: 'rgba(255,255,255,0.08)',
                      color: 'rgba(255,255,255,0.6)',
                    }}
                  >
                    {item.icon}
                  </div>
                )}

                {/* Text content */}
                <div style={{ padding: '1.25rem 1.5rem 1.5rem', flex: 1, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <h3
                    style={{
                      fontFamily: 'var(--font-heading)',
                      fontWeight: 800,
                      fontSize: '1.2rem',
                      color: '#fff',
                      margin: 0,
                      textTransform: 'uppercase',
                      letterSpacing: '0.02em',
                    }}
                  >
                    {item.title}
                  </h3>
                  <p
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: '0.88rem',
                      color: 'rgba(255,255,255,0.75)',
                      lineHeight: 1.6,
                      margin: 0,
                    }}
                  >
                    {item.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <p
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: '0.82rem',
            color: 'rgba(255,255,255,0.5)',
            marginTop: '2rem',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
          }}
          className="reveal"
        >
          <InfoIcon />
          O kit é entregue no credenciamento, no dia do evento. Retire entre 6h e 7h na Praça de Fátima.
        </p>
      </div>
    </section>
  )
}

function GiftIcon() {
  return (
    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 12 20 22 4 22 4 12" />
      <rect x="2" y="7" width="20" height="5" />
      <line x1="12" y1="22" x2="12" y2="7" />
      <path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z" />
      <path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z" />
    </svg>
  )
}

function InfoIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <line x1="12" y1="8" x2="12" y2="12" />
      <line x1="12" y1="16" x2="12.01" y2="16" />
    </svg>
  )
}
