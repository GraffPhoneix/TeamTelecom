export default function Header() {
    return (
        <header className="bg-[#1B2B40] shadow-md sticky top-0 z-50 font-stretch-75%">
            <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
                <nav className="hidden md:flex space-x-6 text-sm">
                    <a href='/' className="text-white hover:text-red-600 cursor-pointer py-2.5">Частным лицам</a>
                    <a href='/bisnes' className="text-white hover:text-red-600 cursor-pointer py-2.5">Бизнесу</a>
                    <a href='/shop' className="text-white hover:text-red-600 cursor-pointer py-2.5">E-shop</a>
                    <a href='/busket' className="text-white hover:text-red-600 cursor-pointer py-2.5">Корзина</a>
                    <a className="text-white hover:text-red-600 cursor-pointer line-through py-2.5">Регистрация</a>
                    <a href='/chat' className="text-white hover:text-red-600 cursor-pointer py-2.5">Чат</a>
                </nav>
                <div className="flex items-center space-x-4">
                    <button className="text-white text-sm hover:text-red-600 cursor-pointer py-2.5">AM</button>
                    <button className="text-red-600 text-sm hover:text-red-600 cursor-pointer py-2.5">RU</button>
                    <button className="text-white text-sm hover:text-red-600 cursor-pointer py-2.5">ENG</button>
                </div>
            </div>
        </header>
    )

}