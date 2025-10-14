import { useState, useEffect } from 'react';
import dataBase from '../DataBase';
import { Trash2 } from 'lucide-react';

export default function BusketProducts() {
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
            prev.map(p => (p.id === id ? { ...p, status: 'none' } : p))
        );
    };

    const changeQty = (id, delta) => {
        setProducts(prev =>
            prev.map(p =>
                p.id === id
                    ? { ...p, qty: Math.max(1, (p.qty || 1) + delta) }
                    : p
            )
        );
    };

    const grouped = basketProducts.reduce((acc, p) => {
        if (!acc[p.type]) acc[p.type] = [];
        acc[p.type].push(p);
        return acc;
    }, {});

    const typeNames = {
        "#gadget": "Устройства и аксессуары",
    };
    const parsePrice = (price) => {
        if (typeof price === "number") return price;
        return Number(price.replace(/[^\d]/g, "")) || 0;
    };

    const total = basketProducts.reduce((sum, p) => sum + parsePrice(p.price) * (p.qty || 1), 0);

    return (
        <div className="min-h-screen bg-white py-10">
            <div className="max-w-7xl mx-auto px-10 mb-4">
                <h2 className="text-4xl font-bold text-[#2C3843] mb-7">Корзина</h2>
            </div>
            <div className="max-w-7xl mx-auto px-10">
                {basketProducts.length > 0 ? (
                    Object.keys(grouped).map(type => (
                        <div key={type} className="mb-8">
                            <div className="text-[#2C3843] font-medium text-[15px] mb-2">
                                {typeNames[type] || type}
                            </div>
                            <div className="bg-white border border-[#ebedef] rounded-md shadow-none">
                                {grouped[type].map(({ id, title, imgURL, price, qty = 1 }, idx, arr) => (
                                    <div key={id} className={`p-4 ${idx < arr.length - 1 ? 'border-b border-[#ebedef]' : ''}`}>
                                        <div className="grid grid-cols-[1fr_150px_150px_40px] text-[13px] text-[#2C3843] font-medium mb-1">
                                            <span></span>
                                            <span className="text-center font-light text-lg">Количество </span>
                                            <span className="text-center font-light text-lg">Цена </span>
                                            <span></span>
                                        </div>
                                        <div className="grid grid-cols-[1fr_150px_150px_40px] items-center gap-3">
                                            <div className="flex items-center gap-3">
                                                <img
                                                    src={imgURL}
                                                    alt={title}
                                                    className="w-24 h-24 object-contain rounded-md"
                                                />
                                                <div>
                                                    <h3 className="text-[14px] font-semibold text-[#2C3843] leading-tight">
                                                        {title}
                                                    </h3>
                                                    <p className="text-[14px] font-bold text-black">
                                                        128 GB / Space Gray
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="flex justify-center">
                                                <div className="flex items-center gap-2 border-1 py-0.5 px-0.5 rounded-3xl">
                                                    <button
                                                        onClick={() => changeQty(id, -1)}
                                                        className="border border-gray-300 rounded-full w-6 h-6 flex items-center justify-center text-sm text-[#2C3843] hover:bg-gray-100"
                                                    >
                                                        -
                                                    </button>
                                                    <span className="w-6 text-center font-semibold text-[#2C3843]">
                                                        {qty}
                                                    </span>
                                                    <button
                                                        onClick={() => changeQty(id, 1)}
                                                        className="border border-gray-300 rounded-full w-6 h-6 flex items-center justify-center text-sm text-[#2C3843] hover:bg-gray-100"
                                                    >
                                                        +
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="text-center text-[#2C3843] text-xl font-bold">
                                                {price}
                                            </div>
                                            <div className="flex items-center justify-center">
                                                <button
                                                    onClick={() => removeFromBasket(id)}
                                                    className="text-gray-500 hover:text-red-600 transition"
                                                >
                                                    <Trash2 size={20} />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                                <div className="p-4 border-t border-[#ebedef] text-md text-[#2C3843]">
                                    Для оформления онлайн кредита, на странице оформления заказа в секции «Тип Оплаты» перейдите в раздел «Купить в кредит» и пройдите процесс подачи заявления. Важно, что приобрести красивый номер телефона в кредит возможно только через банк ВТБ.
                                </div>
                                <div className="p-4 border-t border-[#ebedef]">
                                    <div className="flex justify-between items-center text-[#2C3843] font-medium text-[15px] mb-4">
                                        <span>Итого</span>
                                        <span className="font-semibold text-[17px]">{total.toLocaleString()} ֏</span>
                                    </div>
                                    <div className="flex justify-end">
                                        <button className="bg-[#f04d4d] hover:bg-[#c00510] text-white rounded-3xl px-15 font-semibold text-[15px] py-3 transition">
                                            Купить
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <p className="text-center text-gray-500 py-16 text-lg">
                        Ваша корзина пуста.
                    </p>
                )}
            </div>
        </div>
    );
}
