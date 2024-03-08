import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import Header from './views/sections/Header.jsx'
import { AppStoreProvider } from './stores/AppStore.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <AppStoreProvider>
        <Header />
        <App />
        </AppStoreProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
