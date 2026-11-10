import { useEffect, useRef, useState } from 'react'
import { ArrowUpRight } from './Icons'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Properties', href: '#properties' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const toggleRef = useRef(null)
  const menuRef = useRef(null)

  useEffect(() => {
    let frame = 0

    const update = () => {
      frame = 0
      setScrolled(window.scrollY > 24)
    }

    const onScroll = () => {
      if (!frame) frame = window.requestAnimationFrame(update)
    }

    update()
    window.addEventListener('scroll', onScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', onScroll)
      if (frame) window.cancelAnimationFrame(frame)
    }
  }, [])

  useEffect(() => {
    const desktop = window.matchMedia('(min-width: 961px)')
    const closeOnDesktop = (event) => {
      if (event.matches) setMenuOpen(false)
    }

    desktop.addEventListener('change', closeOnDesktop)
    return () => desktop.removeEventListener('change', closeOnDesktop)
  }, [])

  useEffect(() => {
    if (!menuOpen) return undefined

    document.body.classList.add('no-scroll')
    const menu = menuRef.current
    const focusable = menu
      ? Array.from(menu.querySelectorAll('a[href], button:not([disabled])'))
      : []

    if (focusable.length) focusable[0].focus()

    const onKeyDown = (event) => {
      if (event.key === 'Escape') {
        event.preventDefault()
        setMenuOpen(false)
        toggleRef.current?.focus()
        return
      }

      if (event.key !== 'Tab' || focusable.length === 0) return

      const first = focusable[0]
      const last = focusable[focusable.length - 1]

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault()
        last.focus()
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault()
        first.focus()
      }
    }

    document.addEventListener('keydown', onKeyDown)

    return () => {
      document.removeEventListener('keydown', onKeyDown)
      document.body.classList.remove('no-scroll')
    }
  }, [menuOpen])

  const closeMenu = () => setMenuOpen(false)

  return (
    <>
      <header
        className={`site-header${scrolled ? ' is-scrolled' : ''}${
          menuOpen ? ' is-menu-open' : ''
        }`}
      >
        <nav className="nav" aria-label="Primary navigation">
          <a className="brand" href="#home" aria-label="Aurel Estates — home" onClick={closeMenu}>
            <span className="brand__name">AUREL</span>
            <span className="brand__sub">ESTATES</span>
          </a>

          <ul className="nav__links">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a className="nav__link" href={link.href}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <a className="nav__enquire" href="#contact">
            Enquire
            <ArrowUpRight size={11} />
          </a>

          <button
            ref={toggleRef}
            className="nav__toggle"
            type="button"
            aria-expanded={menuOpen}
            aria-controls={menuOpen ? 'mobile-menu' : undefined}
            aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span className="nav__toggle-lines" aria-hidden="true" />
          </button>
        </nav>
      </header>

      {menuOpen && (
        <div
          id="mobile-menu"
          className="mobile-menu"
          role="dialog"
          aria-modal="true"
          aria-label="Site navigation"
          ref={menuRef}
        >
          <div className="mobile-menu__main">
            <ul className="mobile-menu__list">
              {navLinks.map((link, index) => (
                <li
                  className="mobile-menu__item"
                  key={link.href}
                  style={{ '--item-index': index }}
                >
                  <a className="mobile-menu__link" href={link.href} onClick={closeMenu}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="mobile-menu__foot">
            <div>
              <p className="mobile-menu__label">Enquiries</p>
              <a href="mailto:hello@aurelestates.example">hello@aurelestates.example</a>
              <br />
              <a href="tel:+912200000000">+91 22 0000 0000</a>
            </div>
            <div>
              <p className="mobile-menu__label">Studio</p>
              <p>Colaba, Mumbai</p>
              <p>By appointment</p>
            </div>
            <p className="mobile-menu__note">
              A fictional agency. All properties, prices and contact details are illustrative.
            </p>
          </div>
        </div>
      )}
    </>
  )
}
