import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import Header from './components/Header.jsx'
import {ProductStoreProvider} from './stores/ProductStore'
import {CartStoreProvider} from './stores/CartStore'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <ProductStoreProvider>
      <CartStoreProvider>
          <Header />
          <App />
      </CartStoreProvider>
      </ProductStoreProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
