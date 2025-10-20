import { useState, useEffect } from "react";
import DataBase from "../DataBase";
import { ShoppingCart } from "lucide-react";

export default function PseudoHeader() {
    const [productsInBusket, setProductsInBusket] = useState(
        DataBase.products.filter(el => el.status !== "none").length
    );

    useEffect(() => {
        const interval = setInterval(() => {
            const count = DataBase.products.filter(el => el.status !== "none").length;
            setProductsInBusket(count);
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <header className="bg-white shadow-md border-b border-gray-100">
            <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
                <nav className="flex items-center space-x-6 text-sm font-medium">
                    <img
                        src="https://www.telecomarmenia.am/img/logo.svg?v=1"
                        alt="team_logo"
                        className="w-36"
                    />
                    <a href="/mobile" className="text-gray-700 hover:text-red-600 transition">
                        Моблиная связь
                    </a>
                    <a href="/smartphones" className="text-gray-700 hover:text-red-600 transition">
                        Интернет
                    </a>
                    <a href="/payment-services" className="text-gray-700 hover:text-red-600 transition">
                        Платежи и пополнения
                    </a>
                    <a href="/roaming" className="text-gray-700 hover:text-red-600 transition">
                        Роуминг
                    </a>
                </nav>
                <a
                    href="/busket"
                    className="relative flex items-center px-4 py-2 bg-[#01415f] text-white rounded-2xl shadow-md hover:shadow-lg hover:scale-[1.03] transition"
                >
                    <ShoppingCart className="w-5 h-5 mr-2" />
                    <span className="font-semibold">Корзина</span>
                    <span className="absolute -top-2 -right-2 bg-white text-[#01415f] text-xs font-bold px-2 py-0.5 rounded-full shadow-sm">
                        {productsInBusket}
                    </span>
                </a>
            </div>
        </header>
    );
}
