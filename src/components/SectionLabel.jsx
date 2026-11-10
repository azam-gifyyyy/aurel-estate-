export default function SectionLabel({ children, tone = 'dark' }) {
  return (
    <p className={`section-label${tone === 'light' ? ' section-label--light' : ''}`}>
      <span className="section-label__rule" aria-hidden="true" />
      <span>{children}</span>
    </p>
  )
}
