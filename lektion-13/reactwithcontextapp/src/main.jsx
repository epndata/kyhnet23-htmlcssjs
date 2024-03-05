import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { UserProvider } from './contexts/UserContext.jsx'
import { NewsProvider } from './contexts/NewsContext.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <NewsProvider>
        <UserProvider>
          <App />
        </UserProvider>
      </NewsProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
