import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import dataBase from '../DataBase';
import NewsItem from './News-item';

const slides = [];
for (let i = 0; i < dataBase.News.length; i += 3) {
    slides.push(dataBase.News.slice(i, i + 3));
}

export default function News() {
    return (
        <section className="bg-white py-10 px-4 md:px-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-6 bg-center text-center">Новости</h2>
            <Swiper modules={[Navigation, Pagination]} navigation spaceBetween={20} >
                {slides.map((group, index) => (
                    <SwiperSlide key={index}>
                        <div className="grid gap-6 md:grid-cols-3 mr-18 ml-18">{group.map((el) => <NewsItem id={el.id} title={el.title} body={el.body} date={el.date} imgURL={el.imgURL} />)}</div>
                    </SwiperSlide>))}
            </Swiper>
        </section>
    );
}
