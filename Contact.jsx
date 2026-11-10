import SectionLabel from './SectionLabel'
import { ArrowUpRight } from './Icons'

const emailHref =
  'mailto:hello@aurelestates.example?subject=Private%20enquiry%20%E2%80%94%20Aurel%20Estates'

export default function Contact() {
  return (
    <section className="contact" id="contact" aria-labelledby="contact-title">
      <div className="container">
        <div className="contact__grid">
          <div className="contact__body" data-reveal>
            <SectionLabel tone="light">Enquiries</SectionLabel>

            <h2 className="contact__heading" id="contact-title">
              Your next chapter
              <br />
              starts <em>here.</em>
            </h2>

            <p className="contact__copy">
              Tell us a little about what you are looking for. We will reply personally, usually
              within two working days, and arrange a private conversation at your convenience.
            </p>

            <div className="contact__actions">
              <a className="btn btn--champagne" href={emailHref}>
                Begin an enquiry
                <ArrowUpRight />
              </a>
              <a className="contact__email" href="mailto:hello@aurelestates.example">
                hello@aurelestates.example
              </a>
            </div>
          </div>

          <aside className="contact__panel" data-reveal style={{ '--reveal-delay': '120ms' }}>
            <div className="contact__panel-head">
              <span>Private office</span>
              <span>By appointment</span>
            </div>

            <dl className="contact__details">
              <div className="contact__detail">
                <dt>Visit</dt>
                <dd>Colaba, Mumbai 400005 — address shared on appointment.</dd>
              </div>
              <div className="contact__detail">
                <dt>Telephone</dt>
                <dd>
                  <a href="tel:+912200000000">+91 22 0000 0000</a>
                </dd>
              </div>
              <div className="contact__detail">
                <dt>Email</dt>
                <dd>
                  <a href="mailto:hello@aurelestates.example">hello@aurelestates.example</a>
                </dd>
              </div>
              <div className="contact__detail">
                <dt>Hours</dt>
                <dd>Monday — Saturday · 10am — 6pm IST</dd>
              </div>
            </dl>

            <p className="contact__notice">
              Placeholder details for demonstration. No enquiry form or backend is connected; all
              correspondence links open your email client or telephone app.
            </p>
          </aside>
        </div>

        <div className="contact__base">
          <span>Mumbai · Alibaug · North Goa</span>
          <span>Private viewings arranged on request</span>
        </div>
      </div>
    </section>
  )
}
