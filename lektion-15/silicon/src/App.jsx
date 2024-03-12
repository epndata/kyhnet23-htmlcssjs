import { Route, Routes } from 'react-router-dom'
import './assets/scss/app.css'
import Home from './views/Home'
import { UseAppStore } from './stores/AppStore'
import Contact from './views/Contact'

function App() {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  )
}

export default App
