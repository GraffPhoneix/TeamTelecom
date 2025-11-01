export default function Header() {
    return (
        <header className="bg-[#01415f] shadow-md sticky h-11 top-0 z-50 font-stretch-75%">
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                <nav className="hidden md:flex text-sm">
                    <a href="/" className="text-white text-center px-3.5 py-3.5 cursor-pointer hover:bg-[rgba(150,209,219,.2)]">Частным лицам</a>
                    <a href="/bisnes" className="text-white text-center px-3.5 py-3.5 cursor-pointer hover:bg-[rgba(150,209,219,.2)]">Бизнесу</a>
                    <a href="/shop" className="flex items-center gap-1 text-white text-center px-3.5 py-3.5 cursor-pointer hover:bg-[rgba(150,209,219,.2)]">
                        <img src="https://www.telecomarmenia.am/img/eshop-icon.svg" alt="shop_icon" className="w-4 h-4"/>
                        <span>E-shop</span>
                    </a>
                </nav>
                <div className="flex items-center space-x-4">
                    <button className="text-white text-sm hover:text-red-500 cursor-pointer">AM</button>
                    <button className="text-red-500 text-sm">RU</button>
                    <button className="text-white text-sm hover:text-red-500 cursor-pointer">ENG</button>
                    <div>
                        <a href="/login" className="text-white underline text-sm ml-5 flex items-center gap-1 text-center px-3.5 py-3.5 cursor-pointer hover:bg-[rgba(150,209,219,.2)">Личный кабинет</a>
                    </div>
                </div>
            </div>
        </header>
    );
}
