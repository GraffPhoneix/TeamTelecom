import DataBase from "../DataBase"

export default function PseudoHeader() {
    const productsInBusket = DataBase.products.filter(el => el.status !== 'none').length
    return (
        <header className="bg-gray-50 shadow-xl">
            <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
                <nav className="flex space-x-5 text-sm items-center">
                    <img src="https://www.telecomarmenia.am/img/logo.svg?v=1" alt="team_logo" />
                    <a href='/mobile' className="text-black hover:text-red-600 py-3.5">Моблиная связь</a>
                    <a href='/smartphones' className="text-black hover:text-red-600 py-3.5">Интернет</a>
                    <a href='/payment-services' className="text-black hover:text-red-600 py-3.5">Платежи и пополнения</a>
                    <a href='/roaming' className="text-black hover:text-red-600 py-3.5">Роуминг</a>
                </nav>
                <a href='/busket' className="text-black hover:text-red-600 py-3.5 flex items-center">
                    <span className="text-md font-semibold text-[#2c3843] ml-2">Товаров в корзине:{productsInBusket}</span>
                </a>
            </div>
        </header>
    )
}
