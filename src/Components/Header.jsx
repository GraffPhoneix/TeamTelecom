export default function Header() {
    return (
        <header className="bg-[#1B2B40] shadow-md sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
                <div className="text-xl font-bold text-white">
                    Tele<span className="text-red-600">com</span>
                </div>
                <nav className="hidden md:flex space-x-6 text-sm">
                    <a href='/' className="text-white hover:text-red-600 cursor-pointer py-2">Главная</a>
                    <a href='/bisnes' className="text-white hover:text-red-600 cursor-pointer py-2">Бизнесу</a>
                    <a href='/shop' className="text-white hover:text-red-600 cursor-pointer py-2">E-shop</a>
                    <a href='/busket' className="text-white hover:text-red-600 cursor-pointer py-2">Корзина</a>
                </nav>
                <div className="flex items-center space-x-4">
                    <button className="text-white text-sm hover:text-red-600 cursor-pointer py-2">AM</button>
                    <button className="text-white text-sm hover:text-red-600 cursor-pointer py-2">RU</button>
                    <button className="text-white text-sm hover:text-red-600 cursor-pointer py-2">ENG</button>
                    <a href='/register' className="bg-red-600 text-white px-4 py-1.5 rounded-full text-sm hover:bg-red-700 cursor-pointer">Личный кабинет</a>
                </div>
            </div>
        </header>
    )
}
