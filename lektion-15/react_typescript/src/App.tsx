import { Route, Routes } from "react-router-dom";
import Contact from "./views/Contact";

function App() {


  return (
    <Routes>
      <Route path="/" element={<Contact />} />
    </Routes>
  )
}

export default App
