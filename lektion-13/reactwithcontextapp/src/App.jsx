import './assets/css/app.min.css'
import { Route, Routes } from 'react-router-dom'
import Account from './views/Account'
import Header from './components/Header'
import News from './views/News'

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Account />} />
        <Route path="/news" element={<News />} />
      </Routes>
    </>
  )
}

export default App
