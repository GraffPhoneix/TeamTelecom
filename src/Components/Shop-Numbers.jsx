import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import ShopNumbersItem from './Shop-NumbersItem';
import DataBase from '../DataBase';

export default function ShopNumbers() {
    return (
        <div className="p-4">
            <h2 className="text-2xl font-bold mb-4 text-center">Номера</h2>

            <div className="flex justify-center">
                <div className="w-full max-w-7xl">
                    <Swiper modules={[Navigation, Pagination]} navigation pagination={{ clickable: true }} spaceBetween={20} slidesPerView={4} className="py-4">
                        {DataBase.numbers.map((item, i) => (<SwiperSlide key={i} className="flex justify-center"><ShopNumbersItem type={item.type} number={item.number} price={item.price} subText={item.subText} /></SwiperSlide>))}
                    </Swiper>
                </div>
            </div>
        </div>
    );
}
