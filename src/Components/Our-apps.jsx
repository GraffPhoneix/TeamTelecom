import appImg from '../Img/Our-app/img_1.png';

export default function OurApps() {
    return (
        <div className="w-full bg-[#F2F6FA] py-12">
            <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-10">
                <div className="w-full md:w-1/2 text-left">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#1B2B40] mb-4">
                        Приложение <span className="text-[#00A79D]">My Team</span>
                    </h2>
                    <p className="text-[#6B7280] text-base mb-4">
                        Установите My Team для iOS, Android.
                    </p>
                    <p className="text-[#1B2B40] text-[16px] mb-6">
                        Проводите платежи, получайте бонусы, шейкайте и пользуйтесь другими преимуществами.
                    </p>
                    <div className="flex flex-wrap gap-3">
                        <a href="#" className="bg-[#00A79D] text-white px-5 py-2 w-25 text-center rounded-lg text-sm font-medium hover:bg-[#00968C] transition">iOS</a>
                        <a href="#" className="bg-[#00A79D] text-white px-5 py-2 w-25 text-center rounded-lg text-sm font-medium hover:bg-[#00968C] transition">Android</a>
                    </div>
                </div>
                <div className="w-full md:w-1/2 flex justify-center">
                    <img src={appImg} alt="App" className="max-w-xs md:max-w-sm" />
                </div>
            </div>
        </div>
    );
}
