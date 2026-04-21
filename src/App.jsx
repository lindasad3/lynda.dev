import { Route, Routes } from 'react-router-dom'
import Portfolio from './Portfolio'
import Contact from './pages/Contact'
import Kuramono from "./pages/Kuramono.jsx"
import ColorPoint from "./pages/ColorPoint.jsx"
import Softseoul from "./pages/Softseoul.jsx"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Portfolio />} />
      <Route path="/kuramono" element={<Kuramono />} />     
      <Route path="/colorpoint" element={<ColorPoint />} />
      <Route path="/softseoul" element={<Softseoul />} />
      <Route path="/Contact" element={<Contact />} />
    </Routes>
  )
}

export default App