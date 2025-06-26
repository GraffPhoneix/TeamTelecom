import bisnesAdd_1 from '../Img/Bisnes-Add/img_1.png'
import bisnesAdd_2 from '../Img/Bisnes-Add/img_2.png'
import bisnesAdd_3 from '../Img/Bisnes-Add/img_3.png'

export default function BisnesAdd() {
    return (
        <div className="bg-[#1B2B40] py-10">
            <h2 className='text-center text-5xl font-semibold text-white'>Виртуалная АТС</h2>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-6 mt-18">
                <div></div>
                <div className="flex flex-col items-center text-center space-y-4 ">
                    <img src={bisnesAdd_1} alt="add" />
                    <p className="font-semibold text-gray-100">Распределение звонков, ни одного пропущенного звонка</p>
                </div>
                <div className="flex flex-col items-center text-center space-y-4">
                    <img src={bisnesAdd_2} alt="add" />
                    <p className="font-semibold text-gray-100">Запись разговоров и статистика звонков</p>
                </div>
                <div className="flex flex-col items-center text-center space-y-4">
                    <img src={bisnesAdd_3} alt="add" />
                    <p className="font-semibold text-gray-100">Голосовой помощник для клиентов</p>
                </div>
                <div></div>
            </div>
            <div className="flex justify-center">
                <button className="bg-white font-semibold text-red-600 p-2 rounded-3xl w-60 mt-2.5 mb-2.5 text-center">Подробнее</button>
            </div>
        </div>
    );
}
