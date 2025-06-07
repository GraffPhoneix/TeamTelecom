export default function Section() {
    return (
        <section className="bg-gray-100 py-12">
            <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
                <div>
                    <h1 className="text-4xl font-bold text-gray-900 mb-4">Станьте ближе с нашими услугами связи</h1>
                    <p className="text-gray-600 mb-6">Подключайтесь к лучшему интернету, ТВ и мобильной связи.</p>
                    <button className="bg-red-600 text-white px-6 py-2 rounded-full hover:bg-red-700 cursor-pointer">Узнать больше</button>
                </div>
                <div>
                    <img src="https://www.telecomarmenia.am/images/advanced_slider/2/17486286320455.png" alt="Promo" className="rounded-lg shadow-md" />
                </div>
            </div>
        </section>
    )
}