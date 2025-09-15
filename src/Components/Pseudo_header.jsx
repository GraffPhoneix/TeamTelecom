export default function PseudoHeader() {
    return (
        <header className="bg-gray-100 shadow-xl">
            <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
                <nav className="hidden md:flex space-x-6 text-sm">
                    <a href='/mobile' className="text-black hover:text-red-600 cursor-pointer py-2.5">Моблиная связь</a>
                    <a href='/smartphones' className="text-black hover:text-red-600 cursor-pointer py-2.5">Интернет</a>
                    <a href='/payment-services' className="text-black hover:text-red-600 cursor-pointer py-2.5">Платежи и пополнения</a>
                    <a href='/' className="text-black hover:text-red-600 cursor-pointer py-2.5">...</a>
                    <a className="text-black hover:text-red-600 cursor-pointer py-2.5">...</a>
                </nav>
            </div>
        </header>
    )
}
