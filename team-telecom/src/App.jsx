import './index.css'
import Header from './Components/Header'
import Section from './Components/Section'
import Category from './Components/Category'
import Footer from './Components/Footer'
import JoinUs from './Components/Join-us'
import News from './Components/News'
import OurApps from './Components/Our-apps'

export default function App() {
  return (
    <div className='Team-Telecom-Armenia'>
      <Header />
      <Section />
      <Category />
      <JoinUs />
      <News />
      <OurApps />
      <Footer />
    </div>
  )
}