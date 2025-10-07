export default function PseudoHeader() {
    return (
        <header className="bg-gray-50 shadow-xl">
            <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
                <nav className="hidden md:flex space-x-5 text-sm">
                    <img src="https://www.telecomarmenia.am/img/logo.svg?v=1" alt="team_logo" />
                    <a href='/mobile' className="text-black hover:text-red-600 py-3.5">Моблиная связь</a>
                    <a href='/smartphones' className="text-black hover:text-red-600 py-3.5">Интернет</a>
                    <a href='/payment-services' className="text-black hover:text-red-600 py-3.5">Платежи и пополнения</a>
                    <a href='/roaming' className="text-black hover:text-red-600 py-3.5">Роуминг</a>
                </nav>
            </div>
        </header>
    )
}
