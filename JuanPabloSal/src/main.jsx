/** 
 * node modules
 */

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

/** 
 * components
 */
import App from './App.jsx'

/** 
 * nCSS link
 */

import './index.css'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
