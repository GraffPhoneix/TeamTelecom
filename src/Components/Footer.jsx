export default function Footer() {
    return (
        <footer className="bg-[#01415f] pt-10">
            <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-3 gap-8">
                <div className="ml-30">
                    <img src="https://www.telecomarmenia.am/files/icons/1/16511388037707/45x45.png" alt="logo" className="mb-2" />
                    <h4 className="text-lg font-semibold mb-4 text-white">О компании</h4>
                    <ul className="space-y-3.5 text-sm">
                        <li><a href="#" className="text-gray-300 hover:underline">О нас</a></li>
                        <li><a href="#" className="text-gray-300 hover:underline">Музей связи</a></li>
                        <li><a href="#" className="text-gray-300 hover:underline">Новости</a></li>
                        <li><a href="#" className="text-gray-300 hover:underline">Работа в Телеком Армения</a></li>
                        <li><a href="#" className="text-gray-300 hover:underline">Результаты и отчётность</a></li>
                        <li><a href="#" className="text-gray-300 hover:underline">Комплаенс и Деловая этика</a></li>
                        <li><a href="#" className="text-gray-300 hover:underline">Акционерам</a></li>
                    </ul>
                </div>
                <div className="ml-30">
                    <img src="https://www.telecomarmenia.am/files/icons/1/16511387478667/45x45.png" alt="logo" className="mb-2" />
                    <h4 className="text-lg font-semibold mb-4 text-white">Информация</h4>
                    <ul className="space-y-2 text-sm">
                        <li><a href="#" className="text-gray-300 hover:underline">Общие положения и условия</a></li>
                        <li><a href="#" className="text-gray-300 hover:underline">Безопасность</a></li>
                        <li><a href="#" className="text-gray-300 hover:underline">E-shop условия</a></li>
                        <li><a href="#" className="text-gray-300 hover:underline">Условия кредитования</a></li>
                        <li><a href="#" className="text-gray-300 hover:underline">Условия доставки</a></li>
                        <li><a href="#" className="text-gray-300 hover:underline">Центры продаж и обслуживания</a></li>
                        <li><a href="#" className="text-gray-300 hover:underline">Покрытие</a></li>
                        <li><a href="#" className="text-gray-300 hover:underline">Зоны покрытия мобильной сети</a></li>
                        <li><a href="#" className="text-gray-300 hover:underline">Зоны доступности интернета Team</a></li>
                        <li><a href="#" className="text-gray-300 hover:underline">Полезные документы</a></li>
                        <li><a href="#" className="text-gray-300 hover:underline">Партнерам и поставщикам</a></li>
                        <li><a href="#" className="text-gray-300 hover:underline">Политика конфиденциальности</a></li>
                        <li><a href="#" className="text-gray-300 hover:underline">Коды регионов Армении</a></li>
                    </ul>
                </div>
                <div className="ml-30">
                    <img src="https://www.telecomarmenia.am/files/icons/1/16511387748123/45x45.png" alt="logo" className="mb-2" />
                    <h4 className="text-lg font-semibold mb-4 text-white">Приложения Team</h4>
                    <ul className="space-y-2 text-sm">
                        <li><a href="#" className="text-gray-300 hover:underline">TeamTV</a></li>
                        <li><a href="#" className="text-gray-300 hover:underline">My Team</a></li>
                        <li><a href="#" className="text-gray-300 hover:underline">Team Pay</a></li>
                        <li><a href="#" className="text-gray-300 hover:underline">Team Energy</a></li>
                    </ul>
                </div>
            </div>
            <div className="bg-[#022739] mt-10">
                <div className="text-center text-sm text-white py-2.5">&copy; 2025 Telecom. Все права защищены.</div>
            </div>
        </footer>
    )
}