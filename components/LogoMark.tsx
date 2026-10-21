/** Medical Billers mark — accent tile with a cross, navy check badge. Colors follow the site tokens. */
export function LogoMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      <rect x="2" y="2" width="56" height="56" rx="12" fill="var(--color-accent)" />
      <rect x="24" y="13" width="12" height="34" rx="2.5" fill="var(--band-paper)" />
      <rect x="13" y="24" width="34" height="12" rx="2.5" fill="var(--band-paper)" />
      <circle
        cx="50"
        cy="50"
        r="11"
        fill="var(--color-accent-2)"
        stroke="var(--band-paper)"
        strokeWidth="3"
      />
      <path
        d="M44.5 50.5l3.8 3.6 7-7.6"
        fill="none"
        stroke="var(--band-paper)"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
