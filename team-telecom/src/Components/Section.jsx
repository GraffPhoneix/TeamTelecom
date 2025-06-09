import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import SectionItem from './Section-Item';
import slider1 from '../Img/Slider/img_1.png'
import slider2 from '../Img/Slider/img_2.png'

const sections = [
    {
        id: 1,
        title: 'COSMO',
        body: 'При подключении онлайн — первый месяц БЕСПЛАТНО.',
        imgURL: slider1
    },
    {
        id: 2,
        title: 'Тарифный план BE FREE 4000',
        body: 'Тарифный план BE FREE 4000',
        imgURL: slider2
    },
]

export default function Section() {
    return (
        <Swiper spaceBetween={50} slidesPerView={1} modules={[Navigation]} navigation={true} >
            {sections.map(el => <SwiperSlide><SectionItem title={el.title} body={el.body} imgURL={el.imgURL} key={el.id} /></SwiperSlide>)}
        </Swiper>
    );
}