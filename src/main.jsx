import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import './index.css'
import { Home } from './pages/Home'
import { Footer } from './Components/FooterComp/Footer.jsx'
import { Teachnology } from './pages/Teachnology.jsx'
import { Sports } from './pages/Sports.jsx'
import { BusinessPage } from './pages/BusinessPage.jsx'
import { Nav } from './Components/Nav.jsx'
import { Display } from './Components/Display.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(


  <React.StrictMode>
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/technology' element={<Teachnology />} />
        <Route path='/sport' element={<Sports />} />
        <Route path='/business' element={<BusinessPage />} />
        <Route path='/display/:id' element={<Display />} />

      </Routes>
      <Footer />
    </BrowserRouter>
  </React.StrictMode>
)
