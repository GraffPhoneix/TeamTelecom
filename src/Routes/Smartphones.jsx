import img_1 from '../Img/Smartphones/img_1.jpg'
import isLogined from '../Components/isLogined'
import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from 'react';

export default function Smartphones() {
    isLogined();

    const smartphones = [
        { id: 1, name: "Безлимитные приложения", text: "PLACEHOLDER" },
        { id: 2, name: "Giga", text: "PLACEHOLDER" },
        { id: 3, name: "Mega", text: "PLACEHOLDER" },
        { id: 4, name: "Пакет «3ГБ» = 500֏", text: "PLACEHOLDER" },
    ];

    const [openPlan, setOpenPlan] = useState();
    const togglePlan = (id) => {
        setOpenPlan(openPlan === id ? null : id);
    };

    return (
        <div className="overflow-x-e">
            <div className="bg-center bg-cover bg-no-repeat min-h-[390px]" style={{ backgroundImage: `url(${img_1})` }}></div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 px-53 justify-center -translate-y-1/2">
                <button className="p-10 py-12 bg-[#f7f8f9] h-16 text-[#2c3843] transition shadow-[1.95px_1.95px_2.6px_rgba(0,0,0,0.15)] cursor-pointer  flex items-center justify-center gap-2 w-full border-b-4 border-[#86d2da] rounded-l-lg">
                    <img src="https://www.telecomarmenia.am/files/icons/1/1651070448779/45x45.png" alt="icon" className="w-10 h-10" />
                    <span className="font-semibold mr-3">Для смартфона</span>
                </button>
                <button className="p-10 py-12 bg-[#f5f5f5] border-b-4 border-[#f5f5f5] h-16 text-[#2c3843] transition hover:shadow-[1.95px_1.95px_2.6px_rgba(0,0,0,0.15)] cursor-pointer hover:border-[#86d2da] flex items-center justify-center gap-2 w-full">
                    <img src="https://www.telecomarmenia.am/files/icons/1/16511223989344/45x45.png" alt="icon" className="w-10 h-10" />
                    <span className="font-semibold mr-3">Для дома - COSMO</span>
                </button>
                <button className="p-10 py-12 bg-[#f5f5f5] border-b-4 border-[#f5f5f5] h-16 text-[#2c3843] transition hover:shadow-[1.95px_1.95px_2.6px_rgba(0,0,0,0.15)] cursor-pointer hover:border-[#86d2da] flex items-center justify-center gap-2 w-full">
                    <img src="https://www.telecomarmenia.am/files/icons/1/16511223989344/45x45.png" alt="icon" className="w-10 h-10" />
                    <span className="font-semibold mr-3">Для дома - COSMO</span>
                </button>
                <button className="p-10 py-12 bg-[#f5f5f5] border-b-4 border-[#f5f5f5] h-16 text-[#2c3843] transition hover:shadow-[1.95px_1.95px_2.6px_rgba(0,0,0,0.15)] cursor-pointer hover:border-[#86d2da] flex items-center justify-center gap-2 w-full">
                    <img src="https://www.telecomarmenia.am/files/icons/1/16511223895748/45x45.png" alt="icon" className="w-10 h-10" />
                    <span className="font-semibold mr-3">Для компьютеров и планшетов</span>
                </button>
                <button className="p-10 py-12 bg-[#f5f5f5] border-b-4 border-[#f5f5f5] h-16 text-[#2c3843] transition hover:shadow-[1.95px_1.95px_2.6px_rgba(0,0,0,0.15)] cursor-pointer hover:border-[#86d2da] flex items-center justify-center gap-2 w-full rounded-r-lg">
                    <img src="https://www.telecomarmenia.am/files/icons/1/17569729574067/45x45.png" alt="icon" className="w-10 h-10" />
                    <span className="font-semibold mr-3">Team 5G</span>
                </button>
            </div>
            <div className='bg-gray-50 py-3'>
                <div className='ml-54 text-sm text-[#666e75] font-light '>
                    <span className='underline hover:cursor-pointer'>Главная</span>
                    <span className='hover:cursor-pointer'> › </span>
                    <span className='underline hover:cursor-pointer'>Частным лицам</span>
                    <span className='hover:cursor-pointer'> › </span>
                    <span className='underline hover:cursor-pointer'>Интернет</span>
                    <span className='hover:cursor-pointer'> › </span>
                    <span className='hover:cursor-pointer'>Для смартфона</span>
                </div>
            </div>
            <div className='pl-53.5 p-4 text-[#2c3843] bg-[#f7f8f9] border-b border-[#edeeef]'>
                <span className="relative inline-block font-bold pb-3.5 mr-6 px-2.5">
                    <span className="absolute bottom-0 left-0 w-full h-1 bg-[#86d2da] rounded-full"></span>
                    <span className="relative z-10">Предоплатные</span>
                </span>
                <span className="relative inline-block text-[#666e75] font-bold pb-3.5 px-2.5">
                    <span className="absolute bottom-0 left-0 w-full h-1 bg-[#86d2da] rounded-full"></span>
                    <span className="relative z-10">Постоплатные</span>
                </span>
            </div>
            <div className="w-full overflow-x-hidden">
                <div className='font-bold text-3xl text-[#2c3843] w-full ml-54 mt-8'>
                    <div className='text-4xl text-[#2c3843] font-bold mt-4 mb-[60px]'>Для смартфона</div>
                    {smartphones.map(plan => (
                        <div key={plan.id}>
                            <div
                                onClick={() => togglePlan(plan.id)}
                                className='py-5 border-b border-[#e0e1e3] relative w-315 pr-[100px] cursor-pointer select-none overflow-hidden'
                            >
                                <span className='hover:underline'>{plan.name}</span>
                                {openPlan === plan.id ? (
                                    <ChevronUp className='absolute right-0 top-1/2 -translate-y-1/2' />
                                ) : (
                                    <ChevronDown className='absolute right-0 top-1/2 -translate-y-1/2' />
                                )}
                            </div>
                            {openPlan === plan.id && (
                                <div
                                    className='border-b border-[#e0e1e3] text-lg font-normal text-[#444] p-6 w-[250px] leading-relaxed overflow-hidden'
                                    dangerouslySetInnerHTML={{ __html: plan.text }}
                                />
                            )}
                        </div>
                    ))}
                </div>
            </div>

            <div className='ml-53 mt-14 mb-20'>
                <span className='text-[#666e75] font-light text-xl'>Архивированные тарифные планами и интернет </span>
                <a href="#" className='text-[#4e789a] text-xl underline hover:no-underline'>пакеты</a>
            </div>
        </div>
    )
}
