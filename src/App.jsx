import './index.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './Components/Header'
import Footer from './Components/Footer'
import Home from './Routes/Home'
import Shop from './Routes/Shop'
import Busket from './Routes/Busket'
import Bisnes from './Routes/Bisnes'
import Register from './Routes/Register'
import Chat from './Routes/Chat'
import Mobile from './Routes/Mobile'
import PseudoHeader from './Components/pseudo_header'
import Smartphones from './Routes/Smartphones'
import PaymentServices from './Routes/Payment-Services'

export default function App() {
  return (
    <Router>
      <Header />
      <PseudoHeader />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='shop' element={<Shop />} />
        <Route path='busket' element={<Busket />} />
        <Route path='bisnes' element={<Bisnes />} />
        <Route path='register' element={<Register />} />
        <Route path='chat' element={<Chat />} />
        <Route path='mobile' element={<Mobile />} />
        <Route path='smartphones' element={<Smartphones />} />
        <Route path='payment-services' element={<PaymentServices />} />
      </Routes>
      <Footer />
    </Router>
  )
}
