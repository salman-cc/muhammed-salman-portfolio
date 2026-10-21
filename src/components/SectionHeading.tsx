type SectionHeadingProps = {
  id?: string
  index: string
  label: string
  title: string
  lede?: string
}

export function SectionHeading({ id, index, label, title, lede }: SectionHeadingProps) {
  return (
    <header className="section-heading reveal">
      <p className="eyebrow">
        <span className="eyebrow-index">{index}</span>
        <span className="eyebrow-rule" aria-hidden="true" />
        <span>{label}</span>
      </p>
      <h2 id={id}>{title}</h2>
      {lede ? <p className="section-lede">{lede}</p> : null}
    </header>
  )
}
