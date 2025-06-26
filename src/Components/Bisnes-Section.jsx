import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import SectionItem from './Section-Item';
import dataBase from '../DataBase';

export default function BisnesSection() {
    return (
        <Swiper className='bg-white text-black' spaceBetween={50} slidesPerView={1} modules={[Navigation, Autoplay]} autoplay={{ delay: 3000, disableOnInteraction: false }} loop={true} navigation={true} >
            {dataBase.bisnesSections.map(el => <SwiperSlide><SectionItem title={el.title} body={el.body} imgURL={el.imgURL} /></SwiperSlide>)}
        </Swiper>
    );
}   