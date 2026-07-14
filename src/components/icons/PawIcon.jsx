export default function PawIcon({ size = 24, color = 'currentColor', className = '' }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <ellipse cx="9" cy="6.5" rx="3.5" ry="4.5" fill={color} />
      <ellipse cx="18" cy="5.5" rx="3" ry="4" fill={color} />
      <ellipse cx="4" cy="14" rx="3" ry="4" fill={color} />
      <ellipse cx="24" cy="13" rx="3" ry="4" fill={color} />
      <ellipse cx="14" cy="22" rx="8" ry="9.5" fill={color} />
    </svg>
  )
}
