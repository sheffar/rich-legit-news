import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import { Home } from './pages/Home'
import { Footer } from './Components/FooterComp/Footer.jsx'
import { Teachnology } from './pages/War.jsx'
import { Sports } from './pages/Sports.jsx'
import { NewsPage } from './pages/NewsPage.jsx'
import { Nav } from './Components/Nav.jsx'
import { Display } from './Components/Display.jsx'
import { Ads } from './Components/Ads.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(


  <React.StrictMode>
    <BrowserRouter>
      <Nav />
      {/* <Ads />
      <div id="banner"></div>  */}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/war' element={<Teachnology />} />
        <Route path='/sport' element={<Sports />} />
        <Route path='/news' element={<NewsPage />} />
        <Route path='/display/:id' element={<Display />} />

      </Routes>
      <Footer />
    </BrowserRouter>
  </React.StrictMode>
)
