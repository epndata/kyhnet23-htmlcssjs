import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './assets/css/main.min.css'
import Home from './views/Home'
import Error from './views/Error'
import News from './views/News'
import NewsDetails from './views/NewsDetails'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/news" element={<News />} />
        <Route path="/news/:id" element={<NewsDetails />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>

  </React.StrictMode>,
)
