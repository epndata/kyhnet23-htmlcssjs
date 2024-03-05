import { Route, Routes } from 'react-router-dom'
import './assets/css/app.min.css'
import FetchWithUseRef from './components/FetchWithUseRef'
import FetchWithUseState from './components/FetchWithUseState'
import UseLocationHook from './components/UseLocationHook'
import UseRefHook from './components/UseRefHook'
import UseStateHook from './components/UseStateHook'

function App() {
  return (
    <Routes>
      <Route path="/" element={<UseLocationHook />} />
      <Route path="/useState" element={<UseStateHook />} />
      <Route path="/useRef" element={<UseStateHook />} />
      <Route path="/fetchWithUseState" element={<UseStateHook />} />
      <Route path="/fetchWithUseRef" element={<UseStateHook />} />
    </Routes>
  )
}

export default App
