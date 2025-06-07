import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import SectionItem from './Section-Item';

const sections = [
    {
        id: 1,
        title: 'COSMO',
        body: 'При подключении онлайн — первый месяц БЕСПЛАТНО.',
        imgURL: 'https://www.telecomarmenia.am/images/advanced_slider/2/17486286320455.png'
    },
    {
        id: 2,
        title: 'Тарифный план BE FREE 4000',
        body: 'Тарифный план BE FREE 4000',
        imgURL: 'https://www.telecomarmenia.am/images/advanced_slider/1/17144722984561.png'
    },
]
export default function Section() {
    return (
        <Swiper
            spaceBetween={50}
            slidesPerView={1}
            modules={[Navigation]}
            navigation={true}
        >
            {sections.map(el => {
                return (
                    <SwiperSlide>
                        <SectionItem title={el.title} body={el.body} imgURL={el.imgURL} key={el.id} />
                    </SwiperSlide>
                )
            })}
        </Swiper>
    );
}
