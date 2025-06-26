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
        <div className="max-w-sm bg-white rounded-xl shadow hover:shadow-lg transition p-4 flex flex-col items-center text-center m-2 h-90" key={id}>
            <h3 className="text-lg font-semibold text-gray-800 mb-1">{title}</h3>
            <label className="flex items-center space-x-2 mb-2">
                <input type="checkbox" className="accent-red-600" />
                <span>Сравнить</span>
            </label>
            <img src={imgURL} alt="Product" className="w-40 h-40 object-contain mb-4" />
            <div className="text-xl font-bold text-gray-800 mb-3">{price}</div>
            <p className="text-sm text-gray-500 mb-3">{body}</p>
            <button onClick={click} className="border-red-500 transition border-2 hover:bg-red-500 hover:text-white mt-7 cursor-pointer text-red-600 text-sm font-medium px-4 py-2 rounded-4xl">
                {status === 'none' ? 'Добавить в корзниу' : 'В корзине'}
            </button>
        </div>
    );
}
