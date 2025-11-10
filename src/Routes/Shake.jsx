export default function Shake() {
    return (
        <div className="font-sans text-gray-900">
            <div className="w-full mx-auto px-4 grid md:grid-cols-2 gap-10 items-center bg-gray-100/70 pt-4 pb-5 pl-5 pr-3.5 bg-cover bg-center h-160" style={{ backgroundImage: `url(https://www.telecomarmenia.am/images/sliders_block_slides/1/17624108143421.png)` }}>
                <div className="bg-[#33333399] ml-60 p-12 rounded-md w-130 mt-10">
                    <h1 className="text-4xl font-bold text-white mb-4">Шейкай и Выигрывай!</h1>
                    <p className="text-white text-lg mb-6">Билет на матч Армения-Венгрия</p>
                    <button className="bg-red-600 text-white px-6 py-2 rounded-full hover:bg-red-700 cursor-pointer">Присоединиться</button>
                </div>
                <div>
                    <img src="https://www.telecomarmenia.am/images/sliders_block_slides/1/17624108143881.png" alt="img" className="mt-25" />
                </div>
            </div>
            <div className="bg-[#f5f6f7]">
                <div className="bg-white py-16">
                    <div className="mx-auto flex items-center space-x-8">
                        <div className="ml-75 w-120 px-8 text-[#01415f]">
                            <h4 className="text-7xl font-bold mb-10">Шейкни и получи множество других подарков</h4>
                            <div className="mt-4 text-2xl"> Шейкай каждый день и получи возможность выиграть Redmi 13C, планшет, smart watch, фотоаппарат Kodak, powerbank, колонки, наушники и множество других призов.</div>
                        </div>
                        <div className="w-150 ml-20">
                            <img src="https://www.telecomarmenia.am/images/block_with_text/1/17592955590266.png" alt="Наградные призы Shake" className="mx-auto" />
                        </div>
                    </div>
                </div>
                <div className="bg-gray-50 py-16">
                    <div className="text-center text-5xl font-bold text-[#01425f] mb-20">Как участвовать?</div>
                    <div className="max-w-4xl mx-auto grid grid-cols-3 text-center gap-8">
                        <div className="">
                            <img src="https://www.telecomarmenia.am/file_manager/new_shake/am.png" alt="Иконка регистрации" className="mx-auto h-20" />
                            <h4 className="mt-4 font-semibold text-[#01425f]">Зарегистрируйся в приложении My Team</h4>
                            <button href="#" className="inline-block mt-4 bg-[#f04d4d] text-white w-50 px-4 py-2 rounded-3xl">Скачать</button>
                        </div>
                        <div>
                            <img src="https://www.telecomarmenia.am/file_manager/icons/logo_icon%20(2).png" alt="Иконка Shake" className="mx-auto h-20" />
                            <h4 className="mt-4 font-semibold text-[#01425f]">Открой раздел Shake</h4>
                        </div>
                        <div>
                            <img src="https://www.telecomarmenia.am/file_manager/new_shake/logoshake_icon.png" alt="Иконка Shake" className="mx-auto h-20" />
                            <h4 className="mt-4 font-semibold text-[#01425f]">Шейкай и выигрывай призы каждый день</h4>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-[#f6f4f4] py-12 px-4 sm:px-6 lg:px-8 text-center mb-5 mt-12">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-5xl font-bold text-[#01425e] mb-5">Абоненты других операторов также могут шейкать</h2>
                    <button className="text-white bg-red-600 px-6 py-2  mt-4 rounded-4xl text-lg w-[20%] font-semibold hover:text-red-600 hover:bg-white cursor-pointer transition duration-300 ease-in-out">Хочу!</button>
                </div>
            </div>
            <div className="bg-white py-16">
                <div className="ml-[25%] text-center text-6xl font-bold text-[#01425f] mb-20 mt-5 w-[50%]">Если ты абонент другого оператора</div>
                <div className="max-w-5xl mx-auto flex items-start space-x-8">
                    <div className="flex-1">
                        <ul className="mt-4 list-disc pl-5 space-y-2 text-xl font-light">
                            <li>Шейкай каждый день, накапливай МБ-ы и баллы Team Bonus</li>
                            <li>
                                Став абонентом TEAM со своим номером в рамках акции Шейк, сможешь активировать все накопленные бонусные баллы и мегабайты сроком на 3 дня, заплатив 1 драм за каждый выигранный пакет МБ
                            </li>
                        </ul>
                    </div>
                    <div className="flex-1 text-center">
                        <img src="https://www.telecomarmenia.am/file_manager/new_shake/shake%20lending-07.png" alt="Shake для других операторов" className="w-200 ml-17" />
                    </div>
                </div>
            </div>

            <div className="bg-[#01425f] text-white py-16">
                <div className="max-w-3xl mx-auto text-center">
                    <h2 className="text-7xl mt-6 font-bold">Шейк-счётчик</h2>
                    <div className="mt-4 text-xl"> Уже шейкнули</div>
                    <div className="font-black text-7xl mt-10">10000000+</div>
                    <div className="mt-4 text-xl">Раз</div>
                </div>
            </div>
            <div className="bg-[#01425e] py-12 px-4 sm:px-6 lg:px-8 text-center mb-5 mt-12">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-5xl font-bold text-white mb-5">Стань абонентом TEAM</h2>
                    <p className="text-2xl text-gray-200 mb-6">Купи новый номер либо присоединись со своим и пользуйся всеми преимуществами TEAM</p>
                    <button className="text-white bg-red-600 px-6 py-2 rounded-4xl text-lg w-[30%] font-semibold hover:text-red-600 hover:bg-white cursor-pointer transition duration-300 ease-in-out">Подключиться</button>
                </div>
            </div>
        </div>
    );
}
