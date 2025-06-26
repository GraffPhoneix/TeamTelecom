export default function TarifItem({ title, time1, time2, sms, weight }) {
    return (
        <div className="bg-[#f5f7fa] border border-[#d8e1ec] shadow-md w-80 h-100 rounded-2xl m-10 p-5 flex flex-col justify-between transition hover:scale-115">
            <h3 className="text-3xl text-center font-semibold text-[#023766] mb-6">{title}</h3>
            <ul className="text-sm text-gray-700 flex-grow space-y-2">
                <li className="flex justify-between text-lg"><span>Звонки внутри сети:</span><span className="font-semibold">{time1}</span></li>
                <li className="flex justify-between text-lg"><span>На другие сети:</span><span className="font-semibold">{time2}</span></li>
                <li className="flex justify-between text-lg"><span>SMS:</span><span className="font-semibold">{sms}</span></li>
                <li className="flex justify-between text-lg"><span>Интернет:</span><span className="font-semibold">{weight}</span></li>
            </ul>
            <button className="text-red-700 mt-4 mb-4 border-2 border-red-600 py-2 px-6 rounded-3xl font-medium transition hover:bg-red-700 hover:text-white hover:border-red-700 cursor-pointer">Подробнее</button>
        </div>
    ); 
}