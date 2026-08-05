export default function PawStamp({
  size = 120,
  rotation = -10,
  animate = true,
  delay = '0.5s',
  className = '',
  style = {},
}) {
  return (
    <svg
      viewBox="0 0 120 120"
      width={size}
      height={size}
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={`${animate ? 'paw-stamp' : ''} ${className}`}
      style={{
        '--stamp-rot': `${rotation}deg`,
        '--stamp-delay': delay,
        overflow: 'visible',
        ...style,
      }}
    >
      {/* Main pad — irregular, hand-stamped edge rather than a clean ellipse */}
      <path
        d="M60 62
           C74 61 85 71 84 85
           C83 98 71 106 58 105
           C45 104 34 95 35 82
           C36 70 47 63 60 62 Z"
        fill="var(--color-yellow)"
        stroke="var(--color-black)"
        strokeWidth="3"
        strokeLinejoin="round"
      />
      {/* Toes — four irregular blobs, uneven pressure like a real stamp */}
      <path
        d="M38 40 C44 38 49 43 48 51 C47 58 41 62 35 60 C29 58 27 51 29 45 C30 42 34 41 38 40 Z"
        fill="var(--color-yellow)" stroke="var(--color-black)" strokeWidth="2.5" strokeLinejoin="round"
      />
      <path
        d="M63 30 C69 28 75 33 74 41 C73 48 67 52 61 50 C55 48 53 41 55 35 C56 32 59 31 63 30 Z"
        fill="var(--color-yellow)" stroke="var(--color-black)" strokeWidth="2.5" strokeLinejoin="round"
      />
      <path
        d="M89 41 C95 40 100 45 99 52 C98 58 92 62 87 60 C81 58 79 52 81 47 C82 44 85 42 89 41 Z"
        fill="var(--color-yellow)" stroke="var(--color-black)" strokeWidth="2.5" strokeLinejoin="round"
      />
      <path
        d="M50 20 C55 18 60 22 59 29 C58 35 53 38 48 36 C43 34 41 29 43 24 C44 22 47 21 50 20 Z"
        fill="var(--color-yellow)" stroke="var(--color-black)" strokeWidth="2.5" strokeLinejoin="round"
      />
      {/* Ink-spatter flecks — a real stamp never lands perfectly clean */}
      <circle cx="26" cy="70" r="2.5" fill="var(--color-yellow)" opacity="0.85" />
      <circle cx="94" cy="88" r="2" fill="var(--color-yellow)" opacity="0.7" />
      <circle cx="72" cy="18" r="2" fill="var(--color-yellow)" opacity="0.6" />
    </svg>
  )
}
