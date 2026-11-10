import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import './styles/base.css'
import './styles/nav.css'
import './styles/hero.css'
import './styles/properties.css'
import './styles/about.css'
import './styles/approach.css'
import './styles/contact.css'
import './styles/footer.css'
import './styles/modal.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
