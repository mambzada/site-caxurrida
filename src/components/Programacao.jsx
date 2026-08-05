const TIMELINE = [
  { time: '06h00', event: 'Credenciamento e recepção dos participantes', highlight: false },
  { time: '06h45', event: 'Aquecimento e orientações finais', highlight: false },
  { time: '07h00', event: 'Largada oficial da Primeira Cachurrida', highlight: true },
  { time: '08h00', event: 'Cerimônia oficial de abertura', highlight: false },
  { time: '08h30', event: 'Abertura da Feira de Adoção Responsável', highlight: false },
  { time: '08h30', event: 'Início da Campanha Solidária "Amor de Verdade"', highlight: false },
  { time: '09h30', event: 'Passarela Modelo Caramelo', highlight: false },
  { time: '10h30', event: 'Sorteios e premiações', highlight: false },
  { time: '11h00', event: 'Show com artista municipal', highlight: true },
  { time: '12h00', event: 'Homenagens e agradecimentos', highlight: false },
  { time: '12h30', event: 'Encerramento oficial', highlight: false },
]

export default function Programacao() {
  return (
    <section
      id="programacao"
      style={{
        background: '#F7F5EC',
        paddingTop: '6rem',
        paddingBottom: '6rem',
      }}
    >
      <div style={{ maxWidth: '900px', margin: '0 auto', padding: '0 1.5rem' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '4rem' }} className="reveal">
          <span className="section-label" style={{ justifyContent: 'center' }}>Domingo, 16 de agosto</span>
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
            Programação do evento
          </h2>
          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '1rem',
              color: '#6B6862',
              maxWidth: '480px',
              margin: '0 auto',
              lineHeight: 1.65,
            }}
          >
            Uma manhã repleta de atividades, emoção e amor pelos animais.
          </p>
        </div>

        {/* Timeline */}
        <div style={{ position: 'relative' }}>
          {/* Vertical line (desktop) */}
          <div
            className="hidden md:block"
            style={{
              position: 'absolute',
              left: '50%',
              top: '12px',
              bottom: '12px',
              width: '2px',
              background: 'linear-gradient(to bottom, transparent, rgba(21,19,13,0.14) 4%, rgba(21,19,13,0.14) 96%, transparent)',
              transform: 'translateX(-50%)',
            }}
          />

          {/* Mobile vertical line */}
          <div
            className="md:hidden"
            style={{
              position: 'absolute',
              left: '88px',
              top: '12px',
              bottom: '12px',
              width: '2px',
              background: 'linear-gradient(to bottom, transparent, rgba(21,19,13,0.14) 4%, rgba(21,19,13,0.14) 96%, transparent)',
            }}
          />

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
            {TIMELINE.map((item, i) => {
              const isEven = i % 2 === 0
              return (
                <div
                  key={i}
                  className="reveal"
                  style={{ '--delay': `${i * 0.06}s`, transitionDelay: `${i * 0.06}s` }}
                >
                  {/* Desktop layout: alternating */}
                  <div
                    className="hidden md:grid"
                    style={{
                      gridTemplateColumns: '1fr 60px 1fr',
                      alignItems: 'center',
                      minHeight: '72px',
                    }}
                  >
                    {/* Left side */}
                    <div style={{ textAlign: 'right', paddingRight: '1.5rem', paddingTop: '8px', paddingBottom: '8px' }}>
                      {isEven ? (
                        <TimelineCard item={item} align="right" />
                      ) : (
                        <div />
                      )}
                    </div>

                    {/* Center dot */}
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative', zIndex: 1 }}>
                      <div
                        style={{
                          width: item.highlight ? '18px' : '12px',
                          height: item.highlight ? '18px' : '12px',
                          borderRadius: '50%',
                          background: item.highlight ? '#FFC72C' : '#F7F5EC',
                          border: `2.5px solid ${item.highlight ? '#15130D' : 'rgba(21,19,13,0.3)'}`,
                          transition: 'transform 0.2s',
                          flexShrink: 0,
                        }}
                      />
                    </div>

                    {/* Right side */}
                    <div style={{ textAlign: 'left', paddingLeft: '1.5rem', paddingTop: '8px', paddingBottom: '8px' }}>
                      {!isEven ? (
                        <TimelineCard item={item} align="left" />
                      ) : (
                        <div />
                      )}
                    </div>
                  </div>

                  {/* Mobile layout: linear */}
                  <div
                    className="md:hidden"
                    style={{
                      display: 'flex',
                      gap: '1.5rem',
                      alignItems: 'flex-start',
                      paddingTop: '6px',
                      paddingBottom: '6px',
                      paddingLeft: '0',
                    }}
                  >
                    {/* Time */}
                    <div
                      style={{
                        width: '80px',
                        flexShrink: 0,
                        textAlign: 'right',
                      }}
                    >
                      <span
                        style={{
                          fontFamily: 'var(--font-mono)',
                          fontWeight: 700,
                          fontSize: '0.92rem',
                          color: item.highlight ? '#15130D' : '#8a877f',
                        }}
                      >
                        {item.time}
                      </span>
                    </div>

                    {/* Dot + line */}
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flexShrink: 0, marginTop: '4px' }}>
                      <div
                        style={{
                          width: item.highlight ? '14px' : '10px',
                          height: item.highlight ? '14px' : '10px',
                          borderRadius: '50%',
                          background: item.highlight ? '#FFC72C' : '#F7F5EC',
                          border: `2.5px solid ${item.highlight ? '#15130D' : 'rgba(21,19,13,0.3)'}`,
                          flexShrink: 0,
                          position: 'relative',
                          zIndex: 1,
                        }}
                      />
                    </div>

                    {/* Event */}
                    <div style={{ paddingTop: '0', paddingBottom: '1rem', flex: 1 }}>
                      <p
                        style={{
                          fontFamily: 'var(--font-body)',
                          fontSize: item.highlight ? '1rem' : '0.95rem',
                          fontWeight: item.highlight ? 700 : 500,
                          color: '#2D2D2D',
                          lineHeight: 1.4,
                          margin: 0,
                        }}
                      >
                        {item.event}
                        {item.highlight && (
                          <span className="hl" style={{ display: 'inline-flex', marginLeft: '0.5rem', fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '0.62rem', letterSpacing: '0.1em', textTransform: 'uppercase', verticalAlign: 'middle' }}>
                            Destaque
                          </span>
                        )}
                      </p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

function TimelineCard({ item, align }) {
  return (
    <div>
      <span
        style={{
          display: 'block',
          fontFamily: 'var(--font-mono)',
          fontWeight: 700,
          fontSize: '0.92rem',
          color: item.highlight ? '#15130D' : '#8a877f',
          marginBottom: '0.2rem',
          textAlign: align,
        }}
      >
        {item.time}
      </span>
      <p
        style={{
          fontFamily: 'var(--font-body)',
          fontSize: item.highlight ? '0.98rem' : '0.92rem',
          fontWeight: item.highlight ? 700 : 500,
          color: '#2D2D2D',
          lineHeight: 1.4,
          margin: 0,
          textAlign: align,
        }}
      >
        {item.event}
        {item.highlight && (
          <span
            className="hl"
            style={{
              display: 'inline-flex',
              marginLeft: align === 'right' ? '0' : '0.5rem',
              marginRight: align === 'right' ? '0.5rem' : '0',
              fontFamily: 'var(--font-heading)',
              fontWeight: 700,
              fontSize: '0.6rem',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              verticalAlign: 'middle',
            }}
          >
            Destaque
          </span>
        )}
      </p>
    </div>
  )
}
