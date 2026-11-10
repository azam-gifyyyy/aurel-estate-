import { useState } from 'react'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Properties from './components/Properties'
import About from './components/About'
import Approach from './components/Approach'
import Contact from './components/Contact'
import Footer from './components/Footer'
import PropertyModal from './components/PropertyModal'
import useReveal from './hooks/useReveal'
import { properties } from './data/properties'

export default function App() {
  const [selectedProperty, setSelectedProperty] = useState(null)
  useReveal()

  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>

      <Nav />

      <main id="main">
        <Hero />
        <Properties properties={properties} onSelect={setSelectedProperty} />
        <About />
        <Approach />
        <Contact />
      </main>

      <Footer />

      <PropertyModal
        property={selectedProperty}
        onClose={() => setSelectedProperty(null)}
      />
    </>
  )
}
