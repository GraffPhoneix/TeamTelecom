import Section from '../Components/Section'
import Category from '../Components/Category'
import JoinUs from '../Components/Join-us'
import News from '../Components/News'
import OurApps from '../Components/Our-apps'
import isLogined from '../Components/isLogined'

export default function Home() {
    isLogined()
    return (
        <>
            <Section />
            <Category />
            <JoinUs />
            <News />
            <OurApps />
        </>
    )
}