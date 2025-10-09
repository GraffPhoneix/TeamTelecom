export default function CategoryItem({ title, body, imgURL }) {
    return (
        <div className="relative h-64 md:h-72 lg:h-80 rounded-2xl overflow-hidden shadow-lg group transition-all duration-300 flex">
            <div className="w-1/2 h-full flex flex-col justify-center items-start text-left px-6" style={{ backgroundColor: '#01415f' }}>
                <h3 className="text-xl md:text-2xl font-semibold text-white mb-2">{title}</h3>
                <p className="text-sm text-gray-50">{body}</p>
                <p className="text-md mt-3 text-white cursor-pointer transition-colors duration-300 flex items-center gap-1 hover:text-red-600">
                    Подробнее
                    <span className="text-xl font-bold text-red-600">﹥</span>
                </p>
            </div>
            <div className="w-1/2 h-full bg-cover bg-center" style={{ backgroundImage: `url(${imgURL})` }}></div>
        </div>
    );
}
