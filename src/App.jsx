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
import Roaming from './Routes/Roaming'
import NoPage from './Components/No-page'
import MyCabinet from './Routes/My-Cabinet'

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
        <Route path='roaming' element={<Roaming />} />
        <Route path='login' element={<MyCabinet />} />
        <Route path='mycabinet' element={<MyCabinet />} /> 
        <Route path='*' element={<NoPage />} />
      </Routes>
      <Footer />
    </Router>
  )
}
