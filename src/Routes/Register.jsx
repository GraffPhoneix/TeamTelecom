export default function RegisterForm() {
    return (
        <div className="max-w-md mx-auto bg-white border border-gray-200 rounded-lg shadow-lg p-8 mt-12 mb-4">
            <h2 className="text-2xl font-semibold mb-6 text-gray-800 text-center">Регистрация</h2>
            <form className="space-y-5">
                <div>
                    <label htmlFor="phone" className="block mb-1 text-sm font-medium text-gray-700">Номер телефона</label>
                    <input type="tel" name="phone" id="phone" placeholder="+374 XX XXX XXX" className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-red-600" />
                </div>
                <div>
                    <label htmlFor="fullName" className="block mb-1 text-sm font-medium text-gray-700">ФИО</label>
                    <input type="text" name="fullName" id="fullName" placeholder="Введите ваше имя" className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-red-600" />
                </div>
                <div>
                    <label htmlFor="email" className="block mb-1 text-sm font-medium text-gray-700">Email</label>
                    <input type="email" name="email" id="email" placeholder="example@mail.com" className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-red-600" />
                </div>
                <div>
                    <label htmlFor="password" className="block mb-1 text-sm font-medium text-gray-700">Пароль</label>
                    <input type="password" name="password" id="password" placeholder="Введите пароль" className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-red-600" />
                </div>
                <div>
                    <label htmlFor="confirmPassword" className="block mb-1 text-sm font-medium text-gray-700">Подтвердите пароль</label>
                    <input type="password" name="confirmPassword" id="confirmPassword" placeholder="Повторите пароль" className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-red-600" />
                </div>
                <button type="submit" className="border-red-500 w-fullW transition border-2 hover:bg-red-500 hover:text-white mt-7 cursor-pointer text-red-600 text-sm font-medium px-4 py-2 rounded-4xl">Зарегистрироваться</button>
            </form>
        </div>
    );
}
