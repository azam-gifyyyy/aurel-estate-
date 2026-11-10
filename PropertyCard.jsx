import { ArrowUpRight } from './Icons'
import { imageSrcSet, imageUrl } from '../data/properties'

export default function PropertyCard({ property, variant, onSelect, revealDelay }) {
  return (
    <article className={`property property--${variant}`} data-reveal style={{ '--reveal-delay': revealDelay }}>
      <button
        className="property__media media-reveal"
        type="button"
        data-image-reveal
        aria-label={`View property details for ${property.name}`}
        onClick={() => onSelect(property)}
      >
        <span className="media-reveal__inner">
          <img
            src={imageUrl(property.image, 1200)}
            srcSet={imageSrcSet(property.image, [640, 960, 1280, 1600])}
            sizes={
              variant === 'one'
                ? '(max-width: 860px) 92vw, (max-width: 1200px) 56vw, 48vw'
                : '(max-width: 860px) 92vw, (max-width: 1200px) 38vw, 32vw'
            }
            alt=""
            width="1200"
            height="900"
            loading="lazy"
            decoding="async"
          />
        </span>
        <span className="property__overlay" aria-hidden="true">
          <span className="property__view">
            View property
            <ArrowUpRight size={12} />
          </span>
        </span>
      </button>

      <div className="property__info">
        <div className="property__meta-row">
          <span className="property__index">{property.index}</span>
          <span className="property__type">
            {property.type} · {property.beds}
          </span>
        </div>

        <h3 className="property__name">{property.name}</h3>
        <p className="property__location">{property.location}</p>

        <div className="property__foot">
          <span className="property__price">{property.price}</span>
          <span className="property__price-note">Guide price</span>
        </div>
      </div>
    </article>
  )
}
