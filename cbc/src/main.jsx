import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import State from './StateManagement/State.jsx'
import Counter from './StateManagement/Counter.jsx'
import Toggle from './StateManagement/Toggle.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    {/* <State /> */}
    {/* <Counter /> */}
    <Toggle />
  </StrictMode>,
)
