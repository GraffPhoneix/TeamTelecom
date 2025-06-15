import './index.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './Components/Header'
import Footer from './Components/Footer'
import Home from './Routes/Home'
import Register from './Routes/Register'

export default function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='register' element={<Register />} />
      </Routes>
      <Footer />
    </Router>
  )
}
