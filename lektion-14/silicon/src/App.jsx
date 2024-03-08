import { Route, Routes } from 'react-router-dom'
import './css/app.css'
import Home from './views/Home'

function App() {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  )
}

export default App
