import { useState } from 'react';
import dataBase from "../DataBase";

export default function ShopItem({ title, body, id, imgURL, price }) {
    const [status, setStatus] = useState(dataBase.products[id - 1].status);
    const handleClick = () => {
        setStatus('in_busket');
        dataBase.products[id - 1].status = 'in_busket';
        localStorage.setItem('dataBase', JSON.stringify(dataBase))
    };
    return (
        <div className="max-w-sm bg-white rounded-xl shadow hover:shadow-lg transition p-4 flex flex-col items-center text-center" key={id}>
            <img src={imgURL} alt="Product" className="w-40 h-40 object-contain mb-4" />
            <h3 className="text-lg font-semibold text-gray-800 mb-1">{title}</h3>
            <p className="text-sm text-gray-500 mb-3">{body}</p>
            <div className="text-xl font-bold text-gray-800 mb-3">{price}</div>
            <button onClick={handleClick} className="bg-red-600 hover:bg-red-700 cursor-pointer text-white text-sm font-medium px-4 py-2 rounded">
                {status === 'none' ? 'В корзину' : 'В корзине'}
            </button>
        </div>
    );
}
