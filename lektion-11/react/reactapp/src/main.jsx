import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Header from './partials/sections/Header'
import Footer from './partials/sections/Footer'

import Home from './views/Home'
import Contact from './views/Contact'
import Error from './views/Error'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    
    <div className="wrapper">
      <Header />
       
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Error />} />
      </Routes>

      <Footer />
    </div>

    </BrowserRouter>
  </React.StrictMode>,
)
