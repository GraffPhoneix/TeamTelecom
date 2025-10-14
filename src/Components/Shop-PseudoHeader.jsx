import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import DataBase from '../DataBase';

export default function ShopPsudoHeader() {
    return (
        <div className="w-full bg-white py-4">
            <Swiper modules={[Navigation, Autoplay]} spaceBetween={20} slidesPerView={1} navigation autoplay={{ delay: 3000, disableOnInteraction: false }} loop className="max-w-5xl mx-auto">
                {DataBase.shop_pseudo_header_images.map((el, i) => (
                    <SwiperSlide key={i}>
                        <img src={el} alt={`slide-${i}`} className="w-130 h-130 object-cover flex ml-70" />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}
