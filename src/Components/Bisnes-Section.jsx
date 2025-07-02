import { useEffect, useState } from 'react';
import { fetchData } from '../firebase';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import SectionItem from './Section-Item';

export default function BisnesSection() {
    const [bisnesSections, setBisnesSections] = useState([]);

    useEffect(() => {
        fetchData('bisnesSections', setBisnesSections);
    }, []);

    return (
        <Swiper
            className='bg-white text-black'
            spaceBetween={50}
            slidesPerView={1}
            modules={[Navigation, Autoplay]}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            loop={true}
            navigation={true}
        >
            {bisnesSections.map((el) => (
                <SwiperSlide key={el.id}>
                    <SectionItem title={el.title} body={el.body} imgURL={el.imgURL} />
                </SwiperSlide>
            ))}
        </Swiper>
    );
}
