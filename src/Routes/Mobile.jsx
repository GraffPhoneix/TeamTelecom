import img_1 from '../Img/Mobile/img_1.jpg'
import { ChevronDown, ChevronUp } from "lucide-react";
import isLogined from '../Components/isLogined'
import { useState } from 'react';

export default function Mobile() {
    isLogined();

    const plans = [
        { id: 1, name: "Bee Free Unlimit", text: "PLACEHOLDER" },
        { id: 2, name: "Be Free", text: "PLACEHOLDER" },
        { id: 3, name: "Be Free Региональный", text: "PLACEHOLDER" },
        { id: 4, name: "COMBO/COSMO + Bee Free", text: "PLACEHOLDER" },
        { id: 5, name: "Смарт", text: "PLACEHOLDER" }
    ];

    const [openPlan, setOpenPlan] = useState(null);

    const togglePlan = (id) => {
        setOpenPlan(openPlan === id ? null : id);
    };

    return (
        <div className="overflow-x-hidden">
            <div className="bg-center bg-cover bg-no-repeat min-h-[390px]" style={{ backgroundImage: `url(${img_1})` }}></div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 mt-0 px-53 justify-center -translate-y-1/2">
                <button className="p-10 py-12 bg-[#f7f8f9] h-16 text-[#2c3843] transition shadow-[1.95px_1.95px_2.6px_rgba(0,0,0,0.15)] cursor-pointer flex items-center justify-center gap-2 w-full border-b-4 border-[#86d2da] rounded-l-lg">
                    <img src="https://www.telecomarmenia.am/files/icons/1/16511434160671/220x220.png" alt="icon" className="w-10 h-10" />
                    <span className="font-semibold mr-3">Мобильная связь</span>
                </button>
                <button className="p-10 py-12 bg-[#f5f5f5] border-b-4 border-[#f5f5f5] h-16 text-[#2c3843] transition hover:shadow-[1.95px_1.95px_2.6px_rgba(0,0,0,0.15)] cursor-pointer hover:border-[#86d2da] flex items-center justify-center gap-2 w-full">
                    <img src="https://www.telecomarmenia.am/files/icons/1/16511223989344/45x45.png" alt="icon" className="w-10 h-10" />
                    <span className="font-semibold mr-3">Интернет и TV - COSMO</span>
                </button>
                <button className="p-10 py-12 bg-[#f5f5f5] border-b-4 border-[#f5f5f5] h-16 text-[#2c3843] transition hover:shadow-[1.95px_1.95px_2.6px_rgba(0,0,0,0.15)] cursor-pointer hover:border-[#86d2da] flex items-center justify-center gap-2 w-full">
                    <img src="https://www.telecomarmenia.am/files/icons/1/16511223989344/45x45.png" alt="icon" className="w-10 h-10" />
                    <span className="font-semibold mr-3">Интернет и TV - COSMO</span>
                </button>
                <button className="p-10 py-12 bg-[#f5f5f5] border-b-4 border-[#f5f5f5] h-16 text-[#2c3843] transition hover:shadow-[1.95px_1.95px_2.6px_rgba(0,0,0,0.15)] cursor-pointer hover:border-[#86d2da] flex items-center justify-center gap-2 w-full rounded-r-lg">
                    <img src="https://www.telecomarmenia.am/files/icons/1/16510709622802/45x45.png" alt="icon" className="w-10 h-10" />
                    <span className="font-semibold mr-3">Домашний телефон</span>
                </button>
            </div>
            <div className='bg-gray-50 py-3'>
                <div className='ml-54 text-sm text-[#666e75] font-light'>
                    <span className='underline hover:cursor-pointer'>Главная</span>
                    <span className='hover:cursor-pointer'> › </span>
                    <span className='underline hover:cursor-pointer'>Частным лицам</span>
                    <span className='hover:cursor-pointer'> › </span>
                    <span className='underline hover:cursor-pointer'>Тарифы</span>
                    <span className='hover:cursor-pointer'> › </span>
                    <span className='hover:cursor-pointer'>Мобильная связь</span>
                </div>
            </div>
            <div className='pl-129 p-4 text-[#2c3843] bg-[#f7f8f9] border-b border-[#edeeef]'>
                <span className="relative inline-block font-bold pb-3.5 mr-6 px-2.5">
                    <span className="absolute bottom-0 left-0 w-full h-1 bg-[#86d2da] rounded-full"></span>
                    <span className="relative z-10">Предоплатные</span>
                </span>
                <span className="relative inline-block font-normal pb-3.5 px-2.5">
                    <span className="absolute bottom-0 left-0 w-full h-1 bg-[#86d2da] rounded-full"></span>
                    <span className="relative z-10">Постоплатные</span>
                </span>
            </div>
            <div className='flex overflow-x-hidden'>
                <div className='ml-54 mr-20 bg-[#f7f8f9] rounded-b-xl w-[370px] font-sans text-left text-[#2c3843] text-lg h-[312px]'>
                    <div className='pt-8 pl-3.5 pb-6 text-xl font-bold border-b border-[#edeeef]'>Выбери свой пакет</div>
                    {plans.map(plan => (
                        <div key={plan.id} className='py-2 pl-3.5 border border-[#edeeef] hover:bg-white cursor-pointer'>
                            {plan.name}
                        </div>
                    ))}
                </div>
                <div className="w-full overflow-x-hidden">
                    <div className="font-bold text-5xl text-[#2c3843] w-full">
                        {plans.map(plan => (
                            <div key={plan.id}>
                                <div
                                    onClick={() => togglePlan(plan.id)}
                                    className="py-5 border-b border-[#e0e1e3] relative w-250 pr-[100px] cursor-pointer select-none overflow-hidden"
                                >
                                    <span className="hover:underline">{plan.name}</span>
                                    {openPlan === plan.id ? (
                                        <ChevronUp className="absolute right-0 top-1/2 -translate-y-1/2" />
                                    ) : (
                                        <ChevronDown className="absolute right-0 top-1/2 -translate-y-1/2" />
                                    )}
                                </div>

                                {openPlan === plan.id && (
                                    <div className="border-b border-[#e0e1e3] text-lg font-normal text-[#444] p-6 w-[250px] leading-relaxed overflow-hidden">
                                        {plan.text}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className='font-bold text-4xl text-[#2c3843] w-full ml-54 mt-8 mb-12 overflow-x-hidden'>
                <div className='py-5 border-b border-[#e0e1e3] relative w-332 pr-[100px]'>
                    <span className='hover:cursor-pointer hover:underline'>Другие тарифные планы</span>
                    <ChevronDown className='absolute right-0 top-1/2 -translate-y-1/2 hover:cursor-pointer' />
                </div>
            </div>
        </div>
    );
}
