import DataBase from '../DataBase'
import img_1 from '../Img/Smartphones/img_1.jpg'
import SmartphonesContainer from '../Components/Smartphone-container'
import isLogined from '../Components/isLogined'

export default function Smartphones() {
    isLogined()
    return (
        <div>
            <div className="bg-center min-h-[300px]" style={{ backgroundImage: `url(${img_1})` }}></div>
            <div className='text-center bg-gray-100'>
                <button className="p-6.5 m-3 bg-white rounded-md hover:text-xl cursor-pointer transition-all duration-300">Для смартфона</button>
                <button className="p-6.5 m-3 bg-white rounded-md hover:text-xl cursor-pointer transition-all duration-300">Для дома - COSMO</button>
                <button className="p-6.5 m-3 bg-white rounded-md hover:text-xl cursor-pointer transition-all duration-300">Для дома - COMBO</button>
                <button className="p-6.5 m-3 bg-white rounded-md hover:text-xl cursor-pointer transition-all duration-300">Для компьютеров и планшетов</button>
                <button className="p-6.5 m-3 bg-white rounded-md hover:text-xl cursor-pointer transition-all duration-300">Team 5G</button>
            </div>
            <div>
                <div>
                    <div className='text-5xl text-gray-800 font-bold ml-57 mt-7 mb-10'>Для смартфона</div>
                    <div className='text-3xl hover:underline cursor-pointer text-center mt-7 font-bold mb-5.5'>Безлимитные приложения</div>
                    <div className='flex justify-center gap-18'>
                        {DataBase.smartphones.unlimited.map((item, i) => (
                            <SmartphonesContainer key={i} header={item.header} title={item.title} />
                        ))}
                    </div>
                </div>
                <div>
                    <div className='text-3xl hover:underline cursor-pointer text-center mt-6.5 font-bold mb-5.5'>Giga</div>
                    <div className='flex justify-center gap-18'>
                        {DataBase.smartphones.giga.map((item, i) => (
                            <SmartphonesContainer key={i} header={item.header} title={item.title} />
                        ))}
                    </div>
                </div>
                <div>
                    <div className='text-3xl hover:underline cursor-pointer text-center mt-6.5 font-bold mb-5.5'>Mega</div>
                    <div className='flex justify-center gap-18 mb-5'>
                        {DataBase.smartphones.mega.map((item, i) => (
                            <SmartphonesContainer key={i} header={item.header} title={item.title} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}