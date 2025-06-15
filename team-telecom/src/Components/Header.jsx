export default function Header() {
    return (
        <header className="bg-white shadow-md sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
                <div className="text-xl font-bold text-red-600">Telecom</div>
                <nav className="hidden md:flex space-x-6 text-sm">
                    <a href='/' className="hover:text-red-600 cursor-pointer">Главная</a>
                    <a href='/register' className="hover:text-red-600 cursor-pointer">Регистрация</a>
                    <a href='/payment' className="hover:text-red-600 cursor-pointer">Онлайн-платежи</a>
                    <a className="hover:text-red-600 cursor-pointer">Магазин</a>
                    <a className="hover:text-red-600 cursor-pointer">Корзина</a>
                </nav>
                <div className="flex items-center space-x-4">
                    <button className="text-sm hover:text-red-600 cursor-pointer">RU</button>
                    <button className="bg-red-600 text-white px-4 py-1.5 rounded-full text-sm hover:bg-red-700 cursor-pointer">Войти</button>
                </div>
            </div>
        </header>
    )
}
