import SectionLabel from './SectionLabel'
import { ArrowUpRight } from './Icons'

const steps = [
  {
    title: 'Discover',
    copy: 'We begin with a conversation — about how you live, what you are drawn to, and what home needs to hold.',
  },
  {
    title: 'Explore',
    copy: 'A short, personal selection of properties, seen at their best and understood in person rather than on a screen.',
  },
  {
    title: 'Find Your Place',
    copy: 'We guide the negotiation, due diligence and handover quietly, so the transition feels considered from start to finish.',
  },
]

export default function Approach() {
  return (
    <section className="approach section" id="approach" aria-labelledby="approach-title">
      <div className="container">
        <div className="approach__head">
          <div data-reveal>
            <SectionLabel>Our approach</SectionLabel>
            <h2 className="display approach__heading" id="approach-title">
              Three steps,
              <br />
              taken <em>slowly.</em>
            </h2>
          </div>

          <p className="body-copy approach__intro" data-reveal style={{ '--reveal-delay': '100ms' }}>
            A clear process, designed around your pace, your privacy and the way you actually want
            to live.
          </p>
        </div>

        <ol className="approach__steps">
          {steps.map((step, index) => (
            <li
              className="step"
              key={step.title}
              data-reveal
              style={{ '--reveal-delay': `${index * 90}ms` }}
            >
              <div className="step__head">
                <span className="step__index">0{index + 1}</span>
              </div>
              <h3 className="step__title">{step.title}</h3>
              <p className="step__copy">{step.copy}</p>
            </li>
          ))}
        </ol>

        <div className="approach__foot" data-reveal>
          <p className="approach__note">
            Most journeys take between six weeks and six months. We work at your pace, not ours.
          </p>
          <a className="text-link" href="#contact">
            Begin a conversation
            <ArrowUpRight size={12} />
          </a>
        </div>
      </div>
    </section>
  )
}
