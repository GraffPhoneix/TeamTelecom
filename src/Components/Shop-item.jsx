import { useState } from 'react';
import dataBase from "../DataBase";

export default function ShopItem({ title, body, id, imgURL, price }) {
    const [status, setStatus] = useState(dataBase.products[id - 1].status);
    const click = () => {
        setStatus('in_busket');
        dataBase.products[id - 1].status = 'in_busket';
        localStorage.setItem('dataBase', JSON.stringify(dataBase))
    };
    return (
        <div className="h-150 bg-white rounded-xl shadow hover:shadow-xl hover:scale-103 transition p-6 flex flex-col text-center m-2 mb-10" key={id}>
            <h3 className="text-lg font-semibold text-gray-800 mb-1">{title}</h3>
            <label className="space-x-2 mb-2 mt-8 text-left">
                <input type="checkbox" className="accent-red-600" />
                <span className='text-[#666e75] font-light'>Сравнить</span>
            </label>
            <img src={imgURL} alt="product" className="w-70 h-70 object-contain mb-4" />
            <div className="text-xl text-left font-semibold text-[#2c3843] mb-3">{price}</div>
            <p className="text-md text-gray-600 mb-3 text-left flex-grow">{body}</p>
            <div className="mt-auto">
                <button 
                    onClick={click} 
                    className="border-red-500 transition border-2 hover:bg-red-500 hover:text-white cursor-pointer font-bold text-red-600 text-sm font-medium px-4 py-2 rounded-4xl w-full"
                >
                    {status === 'none' ? 'Добавить в корзниу' : 'В корзине'}
                </button>
            </div>
        </div>
    );
}
