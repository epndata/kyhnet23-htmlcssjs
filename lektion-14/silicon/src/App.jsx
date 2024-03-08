import { Route, Routes } from 'react-router-dom'
import './css/app.css'
import Home from './views/Home'
import Error404 from './views/Error404'
import News from './views/News'

function App() {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/news" element={<News />} />
      <Route path="*" element={<Error404 />} />
    </Routes>
  )
}
export default App
