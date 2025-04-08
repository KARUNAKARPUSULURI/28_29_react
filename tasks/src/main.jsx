import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import CreateData from './CreateData'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CreateData />
  </StrictMode>,
)
