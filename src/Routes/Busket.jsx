import { useState, useEffect } from 'react';
import dataBase from '../DataBase';
import BusketItem from '../Components/Busket-item';

export default function Busket() {
    const [products, setProducts] = useState(() => {
        const stored = localStorage.getItem('dataBase');
        return stored ? JSON.parse(stored).products : dataBase.products;
    });

    useEffect(() => {
        localStorage.setItem('dataBase', JSON.stringify({ ...dataBase, products }));
    }, [products]);

    const basketProducts = products.filter(product => product.status === 'in_busket');

    const removeFromBasket = (id) => {
        setProducts(prev =>
            prev.map(product =>
                product.id === id ? { ...product, status: 'none' } : product
            )
        );
    };

    return (
        <div className="min-h-screen bg-gray-100 px-4 py-10">
            <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {basketProducts.length > 0 ? (
                    basketProducts.map(({ id, title, body, price, imgURL }) => (
                        <div key={id}>
                            <BusketItem id={id} title={title} price={price} imgURL={imgURL} />
                            <button onClick={() => removeFromBasket(id)} className="mt-4 px-6 py-2 bg-red-500 text-white font-semibold rounded-xl shadow-md hover:bg-red-600 w-[100%] transition duration-200">Удалить из корзины</button>
                        </div>
                    ))
                ) : <p className="text-center text-gray-600 col-span-full">Ваша корзина пуста.</p>}
            </div>
        </div>
    );
}
