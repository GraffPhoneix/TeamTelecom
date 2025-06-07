export default function Footer() {
    return (
        <footer className="bg-gray-900 text-gray-300 py-10">
            <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-4 gap-8">
                <div>
                    <h4 className="text-lg font-semibold mb-4">Компания</h4>
                    <ul className="space-y-2 text-sm">
                        <li><a href="#" className="hover:text-white">О нас</a></li>
                        <li><a href="#" className="hover:text-white">Карьера</a></li>
                        <li><a href="#" className="hover:text-white">Новости</a></li>
                    </ul>
                </div>
                <div>
                    <h4 className="text-lg font-semibold mb-4">Поддержка</h4>
                    <ul className="space-y-2 text-sm">
                        <li><a href="#" className="hover:text-white">Контакты</a></li>
                        <li><a href="#" className="hover:text-white">Помощь</a></li>
                        <li><a href="#" className="hover:text-white">Документы</a></li>
                    </ul>
                </div>
                <div>
                    <h4 className="text-lg font-semibold mb-4">Услуги</h4>
                    <ul className="space-y-2 text-sm">
                        <li><a href="#" className="hover:text-white">Интернет</a></li>
                        <li><a href="#" className="hover:text-white">Мобильная связь</a></li>
                        <li><a href="#" className="hover:text-white">TV</a></li>
                    </ul>
                </div>
                <div>
                    <h4 className="text-lg font-semibold mb-4">Подписка</h4>
                    <p className="text-sm mb-4">Получайте обновления и спецпредложения первыми.</p>
                    <input type="email" placeholder="Ваш email" className="w-full px-3 py-2 rounded-md text-gray-900" />
                </div>
            </div>
            <div className="text-center mt-10 text-sm text-gray-500">&copy; 2025 Telecom. Все права защищены.</div>
        </footer>
    )
}