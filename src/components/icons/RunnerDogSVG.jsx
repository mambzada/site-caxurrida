export default function RunnerDogSVG({ className = '' }) {
  return (
    <svg
      viewBox="0 0 460 300"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      fill="none"
      aria-hidden="true"
    >
      {/* Motion lines */}
      <line x1="0" y1="155" x2="48" y2="155" stroke="#FFC72C" strokeWidth="4" strokeLinecap="round" opacity="0.55" />
      <line x1="0" y1="170" x2="30" y2="170" stroke="#FFC72C" strokeWidth="3" strokeLinecap="round" opacity="0.35" />
      <line x1="0" y1="140" x2="36" y2="140" stroke="#FFC72C" strokeWidth="3" strokeLinecap="round" opacity="0.35" />
      <line x1="0" y1="185" x2="18" y2="185" stroke="#FFC72C" strokeWidth="2" strokeLinecap="round" opacity="0.22" />

      {/* === DOG === */}
      {/* Body */}
      <ellipse cx="155" cy="165" rx="65" ry="30" fill="#FFFFFF" transform="rotate(-10 155 165)" />
      {/* Head */}
      <circle cx="215" cy="138" r="26" fill="#FFFFFF" />
      {/* Snout */}
      <ellipse cx="233" cy="147" rx="14" ry="10" fill="rgba(255,255,255,0.55)" />
      {/* Nose */}
      <ellipse cx="240" cy="142" rx="5" ry="4" fill="#15130D" />
      {/* Eye */}
      <circle cx="218" cy="130" r="5" fill="#fff" />
      <circle cx="219.5" cy="130" r="2.5" fill="#15130D" />
      <circle cx="220.5" cy="129" r="1" fill="#fff" />
      {/* Ear */}
      <path d="M200 122 L184 104 L206 116 Z" fill="rgba(255,255,255,0.55)" />
      {/* Tail */}
      <path d="M92 155 Q72 128 86 108 Q94 98 100 108" stroke="#FFFFFF" strokeWidth="10" strokeLinecap="round" fill="none" />
      {/* Front legs (extended forward) */}
      <line x1="198" y1="190" x2="222" y2="225" stroke="#FFFFFF" strokeWidth="11" strokeLinecap="round" />
      <line x1="182" y1="192" x2="150" y2="222" stroke="#FFFFFF" strokeWidth="11" strokeLinecap="round" />
      {/* Back legs (pushed back) */}
      <line x1="125" y1="188" x2="98" y2="218" stroke="#FFFFFF" strokeWidth="11" strokeLinecap="round" />
      <line x1="140" y1="188" x2="160" y2="220" stroke="#FFFFFF" strokeWidth="11" strokeLinecap="round" />
      {/* Paws */}
      <ellipse cx="224" cy="227" rx="9" ry="5" fill="rgba(255,255,255,0.55)" />
      <ellipse cx="148" cy="224" rx="9" ry="5" fill="rgba(255,255,255,0.55)" />
      <ellipse cx="96" cy="220" rx="9" ry="5" fill="rgba(255,255,255,0.55)" />
      <ellipse cx="162" cy="222" rx="9" ry="5" fill="rgba(255,255,255,0.55)" />

      {/* === LEASH === */}
      <path d="M215 112 Q240 90 282 98" stroke="#FFC72C" strokeWidth="3.5" strokeLinecap="round" fill="none" />

      {/* === RUNNER === */}
      {/* Head */}
      <circle cx="318" cy="68" r="28" fill="#FFFFFF" />
      {/* Eyes */}
      <circle cx="326" cy="63" r="4" fill="#15130D" />
      <circle cx="327.5" cy="63" r="2" fill="#15130D" />
      {/* Smile */}
      <path d="M310 76 Q318 84 328 80" stroke="#15130D" strokeWidth="2.5" strokeLinecap="round" fill="none" />
      {/* Headband */}
      <path d="M293 58 Q318 48 343 58" stroke="#FFC72C" strokeWidth="6" strokeLinecap="round" fill="none" />
      {/* Body */}
      <path d="M318 96 L315 158" stroke="#FFFFFF" strokeWidth="16" strokeLinecap="round" />
      {/* Shirt stripe */}
      <path d="M318 104 L315 130" stroke="rgba(255,255,255,0.5)" strokeWidth="16" strokeLinecap="round" opacity="0.6" />
      {/* Left arm (swings back) */}
      <line x1="315" y1="110" x2="278" y2="90" stroke="#FFFFFF" strokeWidth="13" strokeLinecap="round" />
      {/* Right arm (leash hand, forward) */}
      <line x1="316" y1="108" x2="350" y2="85" stroke="#FFFFFF" strokeWidth="13" strokeLinecap="round" />
      {/* Leash handle */}
      <circle cx="350" cy="84" r="6" fill="#FFC72C" />
      {/* Left leg (forward stride) */}
      <line x1="315" y1="158" x2="285" y2="210" stroke="#FFFFFF" strokeWidth="14" strokeLinecap="round" />
      {/* Right leg (back kick) */}
      <line x1="316" y1="158" x2="348" y2="200" stroke="#FFFFFF" strokeWidth="14" strokeLinecap="round" />
      {/* Shoes */}
      <path d="M285 210 L265 215 L262 208" stroke="rgba(255,255,255,0.55)" strokeWidth="8" strokeLinecap="round" fill="none" />
      <path d="M348 200 L368 192 L370 200" stroke="rgba(255,255,255,0.55)" strokeWidth="8" strokeLinecap="round" fill="none" />

      {/* Decorative paw prints (trail) */}
      <g opacity="0.5" fill="#FFC72C">
        <ellipse cx="400" cy="255" rx="7" ry="9" />
        <ellipse cx="390" cy="248" rx="4" ry="5" />
        <ellipse cx="403" cy="245" rx="4" ry="5" />
        <ellipse cx="384" cy="258" rx="3.5" ry="4.5" />
        <ellipse cx="413" cy="250" rx="3.5" ry="4.5" />
      </g>
      <g opacity="0.3" fill="#FFC72C" transform="translate(430, 240) scale(0.7)">
        <ellipse cx="0" cy="12" rx="7" ry="9" />
        <ellipse cx="-10" cy="4" rx="4" ry="5" />
        <ellipse cx="3" cy="2" rx="4" ry="5" />
        <ellipse cx="-16" cy="14" rx="3.5" ry="4.5" />
        <ellipse cx="11" cy="6" rx="3.5" ry="4.5" />
      </g>
    </svg>
  )
}
