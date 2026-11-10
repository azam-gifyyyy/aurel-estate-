import SectionLabel from './SectionLabel'
import { ArrowUpRight } from './Icons'
import { imageSrcSet, imageUrl } from '../data/properties'

const ABOUT_IMAGE = '1600566753051-f0b89df2dd90'

const principles = [
  {
    title: 'Curated Selection',
    copy: 'A short list, considered over a long one. Every home we represent has been visited, assessed and understood first-hand.',
  },
  {
    title: 'Personal Guidance',
    copy: 'One point of contact from first conversation to final handover — the same person throughout, without layers in between.',
  },
  {
    title: 'Thoughtful Living',
    copy: 'We look beyond square footage — to light, material and the daily rhythm a home makes possible.',
  },
]

export default function About() {
  return (
    <section className="about section" id="about" aria-labelledby="about-title">
      <div className="container about__grid">
        <figure className="about__media-wrap" data-reveal>
          <div className="about__media media-reveal" data-image-reveal>
            <span className="media-reveal__inner">
              <img
                src={imageUrl(ABOUT_IMAGE, 1200)}
                srcSet={imageSrcSet(ABOUT_IMAGE, [640, 960, 1280, 1600])}
                sizes="(max-width: 860px) 92vw, 42vw"
                alt="Morning light falling across a quiet bedroom with timber panelling and a perforated screen."
                width="1200"
                height="1500"
                loading="lazy"
                decoding="async"
              />
            </span>
          </div>
          <figcaption className="about__caption">
            <span className="about__capture-index">Interior study — 01</span>
            <span>Aurel Estates archive</span>
          </figcaption>
        </figure>

        <div className="about__body">
          <div data-reveal>
            <SectionLabel>The studio</SectionLabel>
            <h2 className="display about__heading" id="about-title">
              Property is more than
              <br />
              {' '}an <em>address.</em>
            </h2>
          </div>

          <div
            className="about__copy"
            data-reveal
            style={{ '--reveal-delay': '100ms' }}
          >
            <p>
              Aurel Estates is a small, independent advisory working across India&rsquo;s west
              coast and city centres. We represent a deliberately limited number of homes and work
              closely with the people who own them and the people considering them.
            </p>
            <p>
              Our role is straightforward: to bring the right property and the right life together,
              with discretion, patience and a clear understanding of both.
            </p>
          </div>

          <ol className="about__principles">
            {principles.map((principle, index) => (
              <li
                className="principle"
                key={principle.title}
                data-reveal
                style={{ '--reveal-delay': `${index * 70}ms` }}
              >
                <h3 className="principle__title">{principle.title}</h3>
                <p className="principle__copy">{principle.copy}</p>
              </li>
            ))}
          </ol>

          <a className="text-link about__link" href="#approach">
            Read our approach
            <ArrowUpRight size={12} />
          </a>
        </div>
      </div>
    </section>
  )
}
