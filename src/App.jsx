import './index.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './Components/Header'
import Footer from './Components/Footer'
import Home from './Routes/Home'
import Shop from './Routes/Shop'
import Busket from './Routes/Busket'
import Bisnes from './Routes/Bisnes'
import Register from './Routes/Register'

export default function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='shop' element={<Shop />} />
        <Route path='busket' element={<Busket />} />
        <Route path='bisnes' element={<Bisnes />} />
        <Route path='register' element={<Register />} />
      </Routes>
      <Footer />
    </Router>
  )
}
