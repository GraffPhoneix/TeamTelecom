export default function PseudoHeader() {
    return (
        <header className="bg-gray-100 shadow-xl">
            <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
                <nav className="hidden md:flex space-x-6 text-sm">
                    <a href='/mobile' className="text-black hover:text-red-600 cursor-pointer py-2.5">Моблиная связь</a>
                    <a href='/bisnes' className="text-black hover:text-red-600 cursor-pointer py-2.5">Интернет</a>
                    <a href='/shop' className="text-black hover:text-red-600 cursor-pointer py-2.5">Услуги</a>
                    <a href='/busket' className="text-black hover:text-red-600 cursor-pointer py-2.5">Роуминг</a>
                    <a className="text-black hover:text-red-600 cursor-pointer py-2.5">Помошь</a>
                </nav>
            </div>
        </header>
    )
}
