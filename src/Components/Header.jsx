export default function Header() {
    return (
        <header className="bg-[#01415f] shadow-md sticky h-11 top-0 z-50 font-stretch-75%">
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                <nav className="hidden md:flex text-sm">
                    <a href='/' className="text-white text-center px-3 py-3 cursor-pointer hover:bg-[rgba(150,209,219,.2)]">Частным лицам</a>
                    <a href='/bisnes' className="text-white text-center px-3 py-3 cursor-pointer hover:bg-[rgba(150,209,219,.2)]">Бизнесу</a>
                    <img src="https://www.telecomarmenia.am/img/eshop-icon.svg" alt="shop_icon" className="ml-1" />
                    <a href='/shop' className="text-white text-center px-3 py-3 cursor-pointer hover:bg-[rgba(150,209,219,.2)]">E-shop</a>
                </nav>
                <div className="flex items-center space-x-4">
                    <button className="text-white text-sm hover:text-red-500 cursor-pointer">AM</button>
                    <button className="text-red-500 text-sm">RU</button>
                    <button className="text-white text-sm hover:text-red-500 cursor-pointer">ENG</button>
                </div>
            </div>
        </header>
    )

}