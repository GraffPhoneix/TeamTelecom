export default function TeamNumber() {
    return (
        <div className="bg-[#1B2B40] py-16">
            <div className="max-w-7xl mx-auto px-4 flex flex-col items-center text-center space-y-6">
                <h2 className="text-4xl font-bold text-white">Переходите в Team с вашим номером</h2>
                <p className="text-lg text-gray-200 max-w-lg">Сохраняйте свой номер и пользуйтесь всеми преимуществами Team.</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <sub className="text-gray-200">Номер для перехода (введите в формате 0XXYYYYYY)*</sub><br />
                        <input value={0} placeholder="" className="bg-white rounded-4xl p-2 m-1 w-90 font-sans" />
                    </div>
                    <div>
                        <sub className="text-gray-200">ФИО*</sub><br />
                        <input placeholder="" className="bg-white rounded-4xl p-2 m-1 w-90 font-sans" />
                    </div>
                    <div>
                        <sub className="text-gray-200">Организация*</sub><br />
                        <input placeholder="" className="bg-white rounded-4xl p-2 m-1 w-90 font-sans" />
                    </div>
                    <div>
                        <sub className="text-gray-200">Контактный телефон*</sub><br />
                        <input value={0} placeholder="" className="bg-white rounded-4xl p-2 m-1 w-90 font-sans" />
                    </div>
                </div>
                <button className="bg-red-500 w-75 text-white px-6 py-3 rounded-3xl font-medium transition hover:bg-red-600 cursor-pointer">Подключиться</button>
            </div>
        </div>
    )
}