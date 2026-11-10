import { ArrowUp } from './Icons'

const footerLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Properties', href: '#properties' },
  { label: 'About', href: '#about' },
  { label: 'Our Approach', href: '#approach' },
  { label: 'Contact', href: '#contact' },
]

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__top">
          <div className="footer__brand">
            <a className="footer__wordmark" href="#home" aria-label="Aurel Estates — back to top">
              <span className="footer__wordmark-name">AUREL</span>
              <span className="footer__wordmark-sub">ESTATES</span>
            </a>
            <p className="footer__statement">
              A fictional property advisory devoted to exceptional homes, considered guidance and
              a quieter way to move.
            </p>
          </div>

          <nav className="footer__nav" aria-label="Footer navigation">
            <p className="footer__label">Navigate</p>
            <ul>
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="footer__contact">
            <p className="footer__label">Contact</p>
            <p className="footer__contact-detail">
              <a href="mailto:hello@aurelestates.example">hello@aurelestates.example</a>
            </p>
            <p className="footer__contact-detail">
              <a href="tel:+912200000000">+91 22 0000 0000</a>
            </p>
            <address className="footer__contact-detail">
              Colaba, Mumbai 400005
              <br />
              India
            </address>
            <p className="footer__contact-note">
              Placeholder details. By appointment only, Monday — Saturday.
            </p>
          </div>
        </div>

        <div className="footer__bottom">
          <p>© 2026 Aurel Estates. All rights reserved.</p>
          <p>Fictional agency · demo website · photography via Unsplash</p>
          <a className="footer__top-link" href="#home">
            Back to top
            <ArrowUp size={11} />
          </a>
        </div>
      </div>
    </footer>
  )
}
