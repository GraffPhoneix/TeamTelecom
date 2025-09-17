export default function Header() {
    return (
        <header className="bg-[#1B2B40] shadow-md sticky top-0 z-50 font-stretch-75%">
            <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
                <nav className="hidden md:flex space-x-6 text-sm">
                    <a href='/' className="text-white hover:text-red-500 cursor-pointer py-2.5 font-medium">Частным лицам</a>
                    <a href='/bisnes' className="text-white hover:text-red-500 cursor-pointer py-2.5 font-medium">Бизнесу</a>
                    <a href='/shop' className="text-white hover:text-red-500 cursor-pointer py-2.5 font-medium">E-shop</a>
                    <a href='/busket' className="text-white hover:text-red-500 cursor-pointer py-2.5 font-medium">Корзина</a>
                    <a href="/login" className="text-white hover:text-red-500 cursor-pointer py-2.5 font-medium">Вход в аккаунт</a>
                    <a href='/chat' className="text-white hover:text-red-500 cursor-pointer py-2.5 font-medium">Чат</a>
                </nav>
                <div className="flex items-center space-x-4">
                    <button className="text-white text-sm hover:text-red-500 cursor-pointer py-2.5 font-medium">AM</button>
                    <button className="text-red-500 text-sm">RU</button>
                    <button className="text-white text-sm hover:text-red-500 cursor-pointer py-2.5 font-medium">ENG</button>
                </div>
            </div>
        </header>
    )

}