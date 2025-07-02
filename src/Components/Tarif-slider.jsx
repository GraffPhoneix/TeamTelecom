// src/components/TarifSlider.js
import { useEffect, useState } from 'react';
import { fetchData } from '../firebase'; // Reuse the fetchData function
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import TarifItem from './Tarif-item';

function chunkArray(array, size) {
    const result = [];
    for (let i = 0; i < array.length; i += size) { result.push(array.slice(i, i + size)) }
    return result;
}

export default function TarifSlider() {
    const [tarifs, setTarifs] = useState([]);
    useEffect(() => { fetchData('tarifs', setTarifs); }, []);

    return (
        <section className="py-12 bg-white">
            <div className="max-w-7xl mx-auto px-4">
                <Swiper modules={[Navigation, Autoplay]} spaceBetween={24} slidesPerView={1} navigation autoplay={{ delay: 4000 }}>
                    {chunkArray(tarifs, 3).map((tarifGroup, index) => (
                        <SwiperSlide key={index}>
                            <div className="flex justify-between gap-6">
                                {tarifGroup.map((tarif, i) => (
                                    <TarifItem key={i} {...tarif} />
                                ))}
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
}
