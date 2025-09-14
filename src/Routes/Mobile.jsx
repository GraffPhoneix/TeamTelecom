import img_1 from '../Img/Mobile/img_1.jpg'
import { ChevronDown } from "lucide-react";
import isLogined from '../Components/isLogined'

export default function Mobile() {
    isLogined()
    return (
        <div>
            <div className="bg-center min-h-[300px]" style={{ backgroundImage: `url(${img_1})` }}></div>
            <div className='text-center bg-gray-100'>
                <button className="p-6.5 m-3 bg-white rounded-md hover:text-xl cursor-pointer transition-all duration-300">Моблиная связь</button>
                <button className="p-6.5 m-3 bg-white rounded-md hover:text-xl cursor-pointer transition-all duration-300">Интернет и ТВ - COSMO</button>
                <button className="p-6.5 m-3 bg-white rounded-md hover:text-xl cursor-pointer transition-all duration-300">Интернет и ТВ - COSMO</button>
                <button className="p-6.5 m-3 bg-white rounded-md hover:text-xl cursor-pointer transition-all duration-300">Домашний телефон</button>
            </div>
            <div className='text-center bold text-4xl text-gray-700'>
                <div className="relative font-bold hover:underline cursor-pointer w-full text-center p-3">
                    <span className="inline-block pr-6">Be Free Unlimit</span>
                    <ChevronDown className="absolute right-30 top-1/2 transform -translate-y-1/2 w-4 h-4" />
                </div>
                <div className="relative font-bold hover:underline cursor-pointer w-full text-center p-3">
                    <span className="inline-block pr-6">Be Free</span>
                    <ChevronDown className="absolute right-30 top-1/2 transform -translate-y-1/2 w-4 h-4" />
                </div>
                <div className="relative font-bold hover:underline cursor-pointer w-full text-center p-3">
                    <span className="inline-block pr-6">Be Free Unlimit Региональный</span>
                    <ChevronDown className="absolute right-30 top-1/2 transform -translate-y-1/2 w-4 h-4" />
                </div>
                <div className="relative font-bold hover:underline cursor-pointer w-full text-center p-3">
                    <span className="inline-block pr-6">COSMO/COMBO + Be Free</span>
                    <ChevronDown className="absolute right-30 top-1/2 transform -translate-y-1/2 w-4 h-4" />
                </div>
                <div className="relative font-bold hover:underline cursor-pointer w-full text-center p-3">
                    <span className="inline-block pr-6">Смарт</span>
                    <ChevronDown className="absolute right-30 top-1/2 transform -translate-y-1/2 w-4 h-4" />
                </div>
                <div className="relative font-bold hover:underline cursor-pointer w-full text-center p-3">
                    <span className="inline-block pr-6">Смарт Региональный</span>
                    <ChevronDown className="absolute right-30 top-1/2 transform -translate-y-1/2 w-4 h-4" />
                </div>
            </div>
            <div className="p-6">
                <div className="ml-20 text-3xl font-bold hover:underline cursor-pointer mb-7">Другие тарифные планы</div>
                <div className="flex flex-wrap gap-6 ml-20">
                    <div className="w-64 p-4 bg-white border border-gray-200 rounded-lg shadow hover:shadow-lg transition">
                        <div className="text-xl font-bold mb-12">Be Free 2500/15 дней</div>
                        <div className="text-gray-600 mb-6.5">Безлимитный интернет навсегда.</div>
                        <button className="px-4 py-2 border-3 w-[100%] rounded-3xl text-red-500 font-bold border-red-500 hover:text-white hover:bg-red-600 cursor-pointer transition">Подробнее</button>
                    </div>
                    <div className="w-64 p-4 bg-white border border-gray-200 rounded-lg shadow hover:shadow-lg transition">
                        <div className="text-xl font-bold mb-12">Удобный+</div>
                        <div className="text-gray-600 mb-6.5">Единая цена на все направления</div>
                        <button className="px-4 py-2 border-3 w-[100%] rounded-3xl text-red-500 font-bold border-red-500 hover:text-white hover:bg-red-600 cursor-pointer transition">Подробнее</button>
                    </div>
                    <div className="w-64 p-4 bg-white border border-gray-200 rounded-lg shadow hover:shadow-lg transition">
                        <div className="text-xl font-bold mb-12">Добро пожаловать</div>
                        <div className="text-gray-600 mb-6.5">Звонки на все сети РА 49 драм Интернет 50 драм</div>
                        <button className="px-4 py-2 border-3 w-[100%] rounded-3xl text-red-500 font-bold border-red-500 hover:text-white hover:bg-red-600 cursor-pointer transition">Подробнее</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
