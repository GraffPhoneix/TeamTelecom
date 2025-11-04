import isLogined from "../Components/isLogined";
import img_1 from '../Img/Roaming/img_1.jpg';
import img_2 from '../Img/Roaming/img_2.png';
import img_3 from '../Img/Roaming/img_3.png';
import img_4 from '../Img/Roaming/img_4.png';

export default function Roaming() {
    isLogined();
    return (
        <div>
            <div className="w-full mx-auto px-4 grid md:grid-cols-2 gap-10 items-center bg-gray-100/70 rounded-2xl pt-4 pb-5 pl-5 pr-3.5 bg-cover bg-center h-160" style={{ backgroundImage: `url(${img_1})` }}>
                <div className="bg-[#33333399] ml-60 p-12 rounded-lg w-120 mt-10">
                    <h1 className="text-4xl font-bold text-white mb-4">Откроем мир</h1>
                    <p className="text-white text-lg mb-6">Интернет в роуминге начиная с 1.5 др/МБ</p>
                    <button className="bg-red-600 text-white px-6 py-2 rounded-full hover:bg-red-700 cursor-pointer">Карта</button>
                </div>
                <div>
                    <img src="https://www.telecomarmenia.am/images/sliders_block_slides/1/17506826314375.png" alt="img" className="mt-25" />
                </div>
            </div>

            <div className="bg-[#01415f] py-22">
                <h2 className="text-center text-6xl font-bold text-white">Более чем 100 стран</h2>
                <div className="grid grid-cols-1 md:grid-cols-5 gap-6 mt-18">
                    <div></div>
                    <div className="flex flex-col items-center text-center space-y-4">
                        <img src={img_2} alt="add" />
                        <p className="font-semibold text-gray-100 text-2xl">Звонки</p>
                        <p className="text-white font-sans">Начиная от 29,99 др/мин</p>
                    </div>
                    <div className="flex flex-col items-center text-center space-y-4">
                        <img src={img_3} alt="add" />
                        <p className="font-semibold text-gray-100 text-2xl">Интернет</p>
                        <p className="text-white font-sans">От 1.5 др/МБ</p>
                    </div>
                    <div className="flex flex-col items-center text-center space-y-4">
                        <img src={img_4} alt="add" />
                        <p className="font-semibold text-gray-100 text-2xl">Во всех сетях</p>
                    </div>
                    <div></div>
                </div>
            </div>

            <div>
                <div className="text-6xl text-[#2c3843] font-bold text-center mt-18 mb-15">Полезная информация</div>
                <div className="flex justify-left gap-18 mb-5.5 ml-10">
                    <div className="w-90 h-100 p-8 bg-[#EBEDEF66] border border-gray-200 rounded-lg shadow hover:shadow-2xl hover:scale-106 cursor-pointer transform transition duration-300">
                        <div className="text-[25px] text-[#666e75] font-bold mb-12 text-left">Условия подключения роуминга</div>
                        <button className="px-4 py-2 mt-[175px] border-3 w-[50%] rounded-3xl font-bold text-white bg-red-600 hover:bg-red-500 cursor-pointer transition">Подробнее</button>
                    </div>
                    <div className="w-90 h-100 p-8 bg-[#EBEDEF66] border border-gray-200 rounded-lg shadow hover:shadow-2xl hover:scale-106 cursor-pointer transform transition duration-300">
                        <div className="text-[25px] text-[#666e75] font-bold mb-12 text-left">Тарифы роуминга на море и в воздухе</div>
                        <div className="text-[#666e75] mb-6.5 text-left font-light text-lg">Будьте онлайн, даже на море и в воздухе</div>
                        <button className="px-4 py-2 mt-22 border-3 w-[50%] rounded-3xl font-bold text-white bg-red-600 hover:bg-red-500 cursor-pointer transition">Подробнее</button>
                    </div>
                </div>
            </div>
            <section className="relative mt-10">
                <div className="absolute inset-0 pointer-events-none">
                    <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: `url('https://www.telecomarmenia.am/img/new/bg.jpg')`, filter: "none" }}></div>
                    <div className="absolute inset-0" style={{ background: "linear-gradient(90deg, rgba(232,246,249,0.55) 0%, rgba(255,250,250,0.60) 65%)", mixBlendMode: "normal" }}></div>
                </div>
                <div className="relative z-10 py-16 font-light">
                    <h2 className="text-center text-5xl md:text-[34px] text-[#2c3843] mb-10">Часто Задаваемые Вопросы</h2>
                    <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-stretch justify-center gap-8">
                        <div className="flex-1 max-w-[600px] w-full">
                            <div className="bg-white border rounded-sm shadow-[0_12px_30px_rgba(33,48,63,0.06)] overflow-hidden">
                                <button className="w-full h-5 text-left flex items-center justify-between p-5 md:p-6 cursor-pointer bg-white hover:bg-gray-50 transition">
                                    <span className="text-[#2c3843] text-[12px] md:text-[13px] font-medium">Гостям из других сетей</span>
                                    <span className="ml-3 text-[#ff4d4f] text-xl leading-none" aria-hidden="true">⮟</span>
                                </button>
                            </div>
                        </div>
                        <div className="flex-1 max-w-[600px] w-full">
                            <div className="bg-white border rounded-sm shadow-[0_12px_30px_rgba(33,48,63,0.06)] overflow-hidden">
                                <button className="w-full h-5 text-left flex items-center justify-between p-5 md:p-6 cursor-pointer bg-white hover:bg-gray-50 transition">
                                    <span className="text-[#2c3843] text-[12px] md:text-[13px] font-medium">Как пополнить счёт за рубежом?</span>
                                    <span className="ml-3 text-[#ff4d4f] text-xl leading-none" aria-hidden="true">⮟</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
