import { useEffect, useState } from 'react';
import { fetchData } from '../firebase';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import ShopItem from './Shop-item';

export default function ProductsSlider() {
    const [products, setProducts] = useState([]);
    useEffect(() => { fetchData('products', setProducts) }, []);
    const filteredProducts = products.filter(product => product.status === 'none');

    return (
        <div className="bg-gray-100 px-4 py-10">
            <div className="max-w-7xl mx-auto">
                <h1 className="text-3xl font-bold text-gray-800 mb-6">Магазин</h1>
                <Swiper modules={[Navigation, Pagination]} spaceBetween={20} slidesPerView={1} breakpoints={{ 640: { slidesPerView: 2 }, 768: { slidesPerView: 3 }, 1024: { slidesPerView: 4 }, }} navigation pagination={{ clickable: true }}>
                    {filteredProducts.map((product) => (
                        <SwiperSlide key={product.id}>
                            <ShopItem id={product.id} title={product.title} body={product.body} imgURL={product.imgURL} price={product.price} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
}
