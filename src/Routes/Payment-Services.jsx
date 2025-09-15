import img_1 from '../Img/Payment-Services/img_1.png'
import isLogined from "../Components/isLogined";
import DataBase from '../DataBase';
import SmartphonesContainer from '../Components/Smartphone-container';

export default function PaymentServices() {
    isLogined()
    return (
        <div>
            <div className="bg-center min-h-[300px]" style={{ backgroundImage: `url(${img_1})` }}></div>
            <div className='text-center bg-gray-100'>
                <button className="p-6.5 m-3 bg-white rounded-md hover:text-xl cursor-pointer transition-all duration-300">Team TV</button>
                <button className="p-6.5 m-3 bg-white rounded-md hover:text-xl cursor-pointer transition-all duration-300">Платежи и пополнения</button>
                <button className="p-6.5 m-3 bg-white rounded-md hover:text-xl cursor-pointer transition-all duration-300">Развлечения</button>
                <button className="p-6.5 m-3 bg-white rounded-md hover:text-xl cursor-pointer transition-all duration-300">Звонки и безопасность</button>
                <button className="p-6.5 m-3 bg-white rounded-md hover:text-xl cursor-pointer transition-all duration-300">Домашний телефон</button>
            </div>
            <div>
                <div className='text-5xl text-gray-800 font-bold ml-57 mt-7 mb-10'>Платежи и пополнение</div>
                <div className='flex justify-center gap-18 mb-5.5'>
                    {DataBase.payment.map((item, i) => (
                        <SmartphonesContainer key={i} header={item.header} title={item.title} />
                    ))}
                </div>
            </div>
            <div className='ml-56.5 mb-5.5'>
                <span className='text-gray-700 font-sans'>Архивные услуги </span>
                <span className='text-cyan-700 font-bold font-sans underline'>пакеты</span>
            </div>
        </div>
    )
}