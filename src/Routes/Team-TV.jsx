import isLogined from "../Components/isLogined";

export default function TeamTV() {
    isLogined();
    return (
        <div>
            <div className="bg-[#062635] text-center font-semibold">
                <div className="text-[320px]">
                    <span className="text-[#ee4a51]">Team</span>
                    <span className="text-[#88d2d9]"> TV</span>
                </div>
                <div className="flex items-start">
                    <div className="ml-62 mt-10">
                        <div className="flex text-white w-145 text-left mb-5">
                            <div>
                                <img src="https://www.telecomarmenia.am/img/bee-tv-top-icon-1.png" alt="logo" />
                            </div>
                            <div>
                                <div className="text-2xl font-semibold">Catch-Up до 7 дней</div>
                                <div className="font-light text-xl">Выберите программу и смотрите ее в удобное вам время</div>
                            </div>
                        </div>
                        <div className="flex text-white w-135 text-left mb-5">
                            <div>
                                <img src="https://www.telecomarmenia.am/img/bee-tv-top-icon-2.png" alt="logo" />
                            </div>
                            <div>
                                <div className="text-2xl font-semibold">Богатая медиатека</div>
                                <div className="font-light text-xl">Большой выбор фильмов, мультфильмов и сериалов</div>
                            </div>
                        </div>
                        <div className="flex text-white w-135 text-left">
                            <div>
                                <img src="https://www.telecomarmenia.am/img/bee-tv-top-icon-3.png" alt="logo" />
                            </div>
                            <div>
                                <div className="text-2xl font-semibold">Богатая медиатека</div>
                                <div className="font-light text-xl">Большой выбор фильмов, мультфильмов и сериалов</div>
                            </div>
                        </div>
                    </div>
                    <div className="-mt-25 pl-7">
                        <img src="https://www.telecomarmenia.am/file_manager/teamtv/tv_image_banner.png" alt="big_logo" className="w-160" />
                    </div>
                </div>
            </div>
            <div>
                <div className="text-[#01425e] font-bold text-center text-5xl mt-10 mb-15">Как зарегистрироваться в приложении?</div>
                <div className="grid grid-cols-5 gap-4">
                    <div></div>
                    <div className="">
                        <img src="https://www.telecomarmenia.am/file_manager/teamtv/teamTV_1000x500.png" alt="logo" className="w-40 ml-13.5 mb-5" />
                        <div className="text-[#01425e] font-stretch-100% text-2xl w-60 text-center">
                            <span className="">1. Скачай приложение</span>
                            <span className="font-bold"> TeamTV</span>
                        </div>
                    </div>
                    <div className="">
                        <img src="https://www.telecomarmenia.am/file_manager/teamtv/profile.png" alt="logo" className="w-20 ml-22 mb-5" />
                        <div className="text-[#01425e] font-stretch-100% text-2xl w-60 text-center">
                            <span className="">2. Зарегистрируйся в приложении, набрав</span>
                            <span className="underline"> *818#</span>
                        </div>
                    </div>
                    <div className="">
                        <img src="https://www.telecomarmenia.am/file_manager/teamtv/play.png" alt="logo" className="w-20 ml-22 mb-5" />
                        <div className="text-[#01425e] font-stretch-100% text-2xl w-60 text-center">
                            <span className="">3. Смотри множество фильмов и мультфильмов</span>
                        </div>
                    </div>
                    <div></div>
                </div>
            </div>
            <div>
                <div className="bg-[#01425e] flex mb-5 mt-12">
                    <div className="p-10 rounded-md">
                        <img src="https://www.telecomarmenia.am/file_manager/teamtv/Team%20tv%20landing.jpg" alt="img" className="w-240" />
                    </div>
                    <div className="text-white">
                        <div className="font-bold text-5xl mt-8 w-130">TeamTV доступен всем</div>
                        <div className="font-light text-xl pt-8">
                            <div>- Скачай и зарегистрируйся в приложении TeamTV</div>
                            <div>- Подпишись на любой из следующих тарифных планов:</div>
                            <div> teamTV Start, teamTV Public, teamTV Max</div>
                            <div>- Наслаждайся просмотром разнообразных каналов с</div>
                            <div>TeamTV</div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className="text-4xl text-[#01425e] font-bold text-center">
                    <div>Тарифные планы</div>
                </div>
                <div className="flex justify-center mt-8 shadow-[0_2px_4px_rgba(0,0,0,0.25)] rounded-md overflow-hidden w-250 h-22 mx-auto mb-5">
                    <button className="flex items-center justify-center bg-[#01425e] text-white w-1/2 py-3 cursor-pointer">
                        <img src="https://www.telecomarmenia.am/file_manager/teamtv/15486137852488.png" alt="logo" className="w-15 h-15 mr-2" />
                        <span className="font-semibold text-lg">Для Мобильного</span>
                    </button>
                    <button className="flex items-center justify-center bg-white text-[#01425e] w-1/2 py-3 cursor-pointer border-l border-gray-300">
                        <img src="https://www.telecomarmenia.am/files/icons/1/16115558113903/80x80.png" alt="logo" className="w-15 h-15 mr-2" />
                        <span className="font-semibold text-lg">Для Мобильного и Smart TV</span>
                    </button>
                </div>
            </div>
            <div>
                <div className="bg-[#01425e] flex mb-5 mt-12">
                    <div className="p-10 rounded-md">
                        <iframe src="https://www.youtube.com/embed/ZqXUbLS1dRw?si=ugbquaFXy99Nj7RS" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen className="w-150 h-80 ml-50 rounded-md"></iframe>
                    </div>
                    <div className="text-white ml-10">
                        <div className="font-bold text-5xl mt-8 w-130">Путеводитель по новому TeamTV</div>
                        <div className="font-light text-xl pt-8">
                            <div>- Обновленный дизайн</div>
                            <div>- Список каналов по жанрам и возможность</div>
                            <div> одновременного просмотра 2-х каналов</div>
                            <div>- Возможность создания списка избранных</div>
                            <div> фильмов</div>
                            <div>- Возможность поиска программ</div>
                            <div>- Управление устройствами</div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className="text-4xl text-[#01425e] font-bold text-center">
                    <div>Доступные пакеты</div>
                </div>
                <div className="flex justify-center mt-8 shadow-[0_2px_4px_rgba(0,0,0,0.25)] rounded-md overflow-hidden w-250 h-22 mx-auto mb-5">
                    <button className="flex items-center justify-center bg-[#01425e] text-white w-1/2 py-3 cursor-pointer">
                        <img src="https://www.telecomarmenia.am/file_manager/teamtv/15486137852488.png" alt="logo" className="w-15 h-15 mr-2" />
                        <span className="font-semibold text-lg">Для дома</span>
                    </button>
                    <button className="flex items-center justify-center bg-white text-[#01425e] w-1/2 py-3 cursor-pointer border-l border-gray-300">
                        <img src="https://www.telecomarmenia.am/files/icons/1/16115558113903/80x80.png" alt="logo" className="w-15 h-15 mr-2" />
                        <span className="font-semibold text-lg"> Для мобильного</span>
                    </button>
                </div>
            </div>
            <div className="bg-[#01425e] py-12 px-4 sm:px-6 lg:px-8 text-center mb-5 mt-12">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-5xl font-bold text-white mb-5">Отправить заявку</h2>
                    <p className="text-2xl text-gray-200 mb-6">Проверь максимальную скорость домашнего Интернета, оставив онлайн заявку.</p>
                    <button className="bg-white text-red-600 px-6 py-2 rounded-4xl text-lg w-[50%] font-semibold hover:bg-red-600 hover:text-white cursor-pointer transition duration-300 ease-in-out">Отправить</button>
                </div>
            </div>
        </div>
    );
}
