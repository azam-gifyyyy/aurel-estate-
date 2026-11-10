import { ArrowUpRight } from './Icons'
import { imageSrcSet, imageUrl } from '../data/properties'

const HERO_IMAGE = '1600585154526-990dced4db0d'

export default function Hero() {
  return (
    <section className="hero" id="home" aria-labelledby="hero-title">
      <div className="hero__grid">
        <div className="hero__content">
          <p className="eyebrow hero__eyebrow">
            <span className="hero__eyebrow-rule" aria-hidden="true" />
            Private residences · India
          </p>

          <h1 className="hero__title" id="hero-title">
            <span className="hero__line">
              <span className="hero__line-inner">A more</span>
            </span>
            <span className="hero__line">
              <span className="hero__line-inner">considered</span>
            </span>
            <span className="hero__line">
              <span className="hero__line-inner">way to find</span>
            </span>
            <span className="hero__line">
              <span className="hero__line-inner">
                <em>home.</em>
              </span>
            </span>
          </h1>

          <div className="hero__lower">
            <p className="hero__copy">
              A small, independent practice representing exceptional homes across India&rsquo;s
              west coast — chosen for their architecture, their setting, and the life they make
              possible.
            </p>

            <div className="hero__actions">
              <a className="btn btn--dark" href="#properties">
                Explore properties
                <ArrowUpRight />
              </a>
              <a className="text-link" href="#approach">
                Our approach
                <ArrowUpRight size={12} />
              </a>
            </div>
          </div>

          <div className="hero__meta">
            <span>Alibaug · North Goa · Mumbai</span>
            <span>Est. 2011 — Mumbai</span>
          </div>
        </div>

        <figure className="hero__figure">
          <div className="hero__media">
            <img
              src={imageUrl(HERO_IMAGE, 1600)}
              srcSet={imageSrcSet(HERO_IMAGE, [900, 1200, 1600, 2000])}
              sizes="(max-width: 960px) 100vw, 46vw"
              alt="A contemporary dark-timber villa with warmly lit rooms, photographed at dusk."
              width="1400"
              height="1750"
              fetchPriority="high"
              decoding="async"
            />
          </div>

          <figcaption className="hero__caption">
            <span className="hero__caption-kicker">A private residence</span>
            <span className="hero__caption-title">Alibaug, Maharashtra</span>
            <span className="hero__caption-place">West coast · India</span>
          </figcaption>

          <a className="hero__scroll" href="#properties" aria-label="Scroll to featured properties">
            <span>Scroll</span>
            <span className="hero__scroll-line" aria-hidden="true" />
          </a>
        </figure>
      </div>
    </section>
  )
}
