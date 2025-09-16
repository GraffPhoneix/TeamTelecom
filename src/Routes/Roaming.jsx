import isLogined from "../Components/isLogined";
import img_1 from '../Img/Roaming/img_1.jpg'
import img_2 from '../Img/Roaming/img_2.png'
import img_3 from '../Img/Roaming/img_3.png'
import img_4 from '../Img/Roaming/img_4.png'
import DataBase from "../DataBase";
import SmartphonesContainer from "../Components/Smartphone-container";

export default function Roaming() {
    isLogined()
    return (
        <div>
            <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center bg-gray-100 rounded-2xl mt-4 pt-4 pb-5 pl-5 pr-3.5 bg-cover bg-center h-160" style={{ backgroundImage: `url(${img_1})` }}>
                <div className="bg-white/80 backdrop-blur-lg p-6 rounded-xl">
                    <h1 className="text-4xl font-bold text-gray-900 mb-4">Откроем мир</h1>
                    <p className="text-gray-700 mb-6">Интернет в роуминге начиная с 1.5 др/МБ</p>
                    <button className="bg-red-600 text-white px-6 py-2 rounded-full hover:bg-red-700 cursor-pointer">Карта</button>
                </div>
            </div>
            <div className="bg-[#1B2B40] py-18">
                <h2 className='text-center text-6xl font-bold text-white'>Более чем 100 стран</h2>
                <div className="grid grid-cols-1 md:grid-cols-5 gap-6 mt-18">
                    <div></div>
                    <div className="flex flex-col items-center text-center space-y-4 ">
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
                <div className='text-5xl text-gray-800 font-bold ml-57 mt-7 mb-10'>Платежи и пополнение</div>
                <div className='flex justify-center gap-18 mb-5.5'>
                    {DataBase.roaming.map((item, i) => (
                        <SmartphonesContainer key={i} header={item.header} title={item.title} />
                    ))}
                </div>
            </div>
            <div class="bg-gray-50 py-12">
                <h2 class="text-center text-3xl font-bold mb-8">Часто Задаваемые Вопросы</h2>
                <div class="max-w-2xl mx-auto space-y-4">
                    <div class="border shadow-lg bg-white rounded-lg">
                        <div class="flex justify-between items-center p-4 cursor-pointer text-gray-700 font-medium hover:bg-gray-50 transition">
                            Гостям из других сетей
                            <span class="ml-2 transform transition-transform group-open:rotate-180">⮟</span>
                        </div>
                    </div>
                    <div class="border shadow-lg bg-white rounded-lg">
                        <div class="flex justify-between items-center p-4 cursor-pointer text-gray-700 font-medium hover:bg-gray-50 transition">
                            Как пополнить счёт за рубежом?
                            <span class="ml-2 transform transition-transform group-open:rotate-180">⮟</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}