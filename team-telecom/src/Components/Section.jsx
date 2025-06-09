import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import SectionItem from './Section-Item';
import dataBase from '../DataBase';

export default function Section() {
    return (
        <Swiper spaceBetween={50} slidesPerView={1} modules={[Navigation]} navigation={true} >
            {dataBase.sections.map(el => <SwiperSlide><SectionItem title={el.title} body={el.body} imgURL={el.imgURL} /></SwiperSlide>)}
        </Swiper>
    );
}