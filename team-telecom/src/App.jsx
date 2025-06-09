import './index.css'
import Header from './Components/Header'
import Section from './Components/Section'
import Category from './Components/Category'
import Footer from './Components/Footer'
import JoinUs from './Components/Join-us'
import News from './Components/News'

export default function App() {
  return (
    <div className='Team-Telecom-Armenia'>
      <Header />
      <Section />
      <Category />
      <News />
      <JoinUs />
      <Footer />
    </div>
  )
}