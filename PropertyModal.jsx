import { useEffect, useRef } from 'react'
import { ArrowUpRight, CloseIcon } from './Icons'
import { imageSrcSet, imageUrl } from '../data/properties'

export default function PropertyModal({ property, onClose }) {
  const dialogRef = useRef(null)

  useEffect(() => {
    const dialog = dialogRef.current
    if (!dialog) return undefined

    if (property) {
      document.body.classList.add('no-scroll')
      if (!dialog.open) dialog.showModal()
    } else {
      document.body.classList.remove('no-scroll')
      if (dialog.open) dialog.close()
    }

    return () => {
      document.body.classList.remove('no-scroll')
    }
  }, [property])

  const handleCancel = (event) => {
    event.preventDefault()
    onClose()
  }

  const handleBackdrop = (event) => {
    if (event.target === event.currentTarget) onClose()
  }

  const enquiryHref = property
    ? `mailto:hello@aurelestates.example?subject=${encodeURIComponent(
        `Enquiry — ${property.name}, ${property.location}`,
      )}`
    : undefined

  return (
    <dialog
      className="property-modal"
      ref={dialogRef}
      aria-labelledby={property ? 'property-modal-title' : undefined}
      aria-label={property ? undefined : 'Property details'}
      onCancel={handleCancel}
      onClick={handleBackdrop}
    >
      {property && (
        <div className="property-modal__panel">
          <button
            className="property-modal__close"
            type="button"
            aria-label="Close property details"
            onClick={onClose}
          >
            <CloseIcon />
          </button>

          <div className="property-modal__media">
            <img
              src={imageUrl(property.image, 1400)}
              srcSet={imageSrcSet(property.image, [800, 1200, 1600])}
              sizes="(max-width: 900px) 100vw, 55vw"
              alt={property.alt}
              width="1400"
              height="1100"
              loading="eager"
              decoding="async"
            />
            <span className="property-modal__media-caption">
              {property.reference} · Demo residence
            </span>
          </div>

          <div className="property-modal__content">
            <p className="property-modal__eyebrow">
              {property.type} · {property.location}
            </p>
            <h2 className="property-modal__title" id="property-modal-title">
              {property.name}
            </h2>

            <p className="property-modal__price">
              {property.price}
              <span>Guide price</span>
            </p>

            <p className="property-modal__copy">{property.description}</p>

            <dl className="property-modal__facts">
              <div className="property-modal__fact">
                <dt>Type</dt>
                <dd>{property.type}</dd>
              </div>
              <div className="property-modal__fact">
                <dt>Bedrooms</dt>
                <dd>{property.beds}</dd>
              </div>
              <div className="property-modal__fact">
                <dt>Interior</dt>
                <dd>{property.area}</dd>
              </div>
              <div className="property-modal__fact">
                <dt>Setting</dt>
                <dd>{property.setting}</dd>
              </div>
            </dl>

            <div className="property-modal__actions">
              <a className="btn btn--dark" href={enquiryHref}>
                Enquire about this residence
                <ArrowUpRight />
              </a>
              <a className="text-link" href="tel:+912200000000">
                Call the studio
              </a>
            </div>

            <p className="property-modal__note">
              This is demonstration content. Aurel Estates is a fictional agency and this property,
              its price and its details are not real. Enquiries open your email client.
            </p>
          </div>
        </div>
      )}
    </dialog>
  )
}
