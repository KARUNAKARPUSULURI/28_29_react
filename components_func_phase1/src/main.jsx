import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Header from './Components/Header/Header'
import Banner from './Components/Banner/Banner'
import Main from './Components/Main/Main'
import Footer from './Components/Footer/Footer'
import { Greet } from './App'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
    <Banner />
    <Main />
    <Footer />
    <Greet />
  </StrictMode>,
)
