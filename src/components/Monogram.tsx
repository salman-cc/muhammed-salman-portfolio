type MonogramProps = {
  initials: string
  label: string
}

/** Fallback shown when the portrait image cannot be loaded. */
export function Monogram({ initials, label }: MonogramProps) {
  return (
    <div className="monogram">
      <svg className="monogram-components" viewBox="0 0 400 500" fill="none" aria-hidden="true" focusable="false">
        <g stroke="currentColor" strokeWidth="1" opacity="0.6">
          <path d="M0 96h64v44h72V96" />
          <path d="M400 150h-58v52H282v-52" />
          <path d="M0 372h72v-46h64" />
          <path d="M400 404h-64v-56h-58" />
          <circle cx="64" cy="140" r="3" fill="currentColor" stroke="none" />
          <circle cx="342" cy="202" r="3" fill="currentColor" stroke="none" />
          <circle cx="136" cy="326" r="3" fill="currentColor" stroke="none" />
          <circle cx="278" cy="348" r="3" fill="currentColor" stroke="none" />
        </g>
      </svg>
      <span className="monogram-mark" aria-hidden="true">
        {initials}
      </span>
      <span className="monogram-label">{label}</span>
    </div>
  )
}
