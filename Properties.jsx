import SectionLabel from './SectionLabel'
import PropertyCard from './PropertyCard'
import { ArrowUpRight } from './Icons'

export default function Properties({ properties, onSelect }) {
  return (
    <section className="properties section" id="properties" aria-labelledby="properties-title">
      <div className="container">
        <div className="properties__head">
          <div data-reveal>
            <SectionLabel>The collection</SectionLabel>
            <h2 className="display properties__heading" id="properties-title">
              <span className="properties__heading-line">Spaces worth</span>
              <span className="properties__heading-line">
                <em>discovering.</em>
              </span>
            </h2>
          </div>

          <div className="properties__intro" data-reveal style={{ '--reveal-delay': '100ms' }}>
            <p className="body-copy">
              A deliberately short list of houses with a point of view — places where material,
              light and landscape have been considered together.
            </p>
            <p className="properties__count">
              <span className="properties__count-number">03</span>
              Residences currently represented
            </p>
          </div>
        </div>

        <div className="properties__layout">
          <PropertyCard
            property={properties[0]}
            variant="one"
            onSelect={onSelect}
            revealDelay="0ms"
          />
          <PropertyCard
            property={properties[1]}
            variant="two"
            onSelect={onSelect}
            revealDelay="100ms"
          />
          <PropertyCard
            property={properties[2]}
            variant="three"
            onSelect={onSelect}
            revealDelay="40ms"
          />

          <aside className="properties__aside" data-reveal>
            <p className="properties__aside-copy">
              Private viewings are arranged individually, with the owner&rsquo;s representative
              present. A fuller portfolio is available on request.
            </p>
            <a className="text-link" href="#contact">
              Request the portfolio
              <ArrowUpRight size={12} />
            </a>
          </aside>
        </div>

        <p className="demo-note">
          <span>Demonstration content.</span> Aurel Estates is a fictional agency. All properties,
          prices, locations and details shown are illustrative and do not represent real listings.
        </p>
      </div>
    </section>
  )
}
