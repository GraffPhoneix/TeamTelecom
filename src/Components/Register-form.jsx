export default function RegisterForm() {
    return (
        <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">Личный кабинет</h2>
            <p className="text-sm text-gray-500 mb-4">Войдите в свою учетную запись</p>
            <form className="space-y-4">
                <div>
                    <label htmlFor="msisdn" className="block text-sm font-medium text-gray-700 mb-1">Номер телефона</label>
                    <input id="msisdn" type="text" placeholder="0XXYYYYYY" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-1 focus:ring-blue-500 focus:outline-none" />
                </div>
                <div>
                    <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">Пароль</label>
                    <input id="password" type="password" placeholder="••••••••" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-1 focus:ring-blue-500 focus:outline-none" />
                </div>
                <button type="button" className="w-full py-2 bg-blue-700 text-white rounded-md hover:bg-blue-800 transition">Войти </button>
                <div className="flex justify-between text-sm text-blue-700">
                    <a href="#" className="hover:underline">Забыли пароль?</a>
                    <a href="#" className="hover:underline">Регистрация</a>
                </div>
            </form>
        </div>
    );
}
