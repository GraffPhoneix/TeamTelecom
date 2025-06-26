export default function CategoryItem({ title, body, imgURL }) {
    return (
        <div className="relative h-64 md:h-72 lg:h-80 rounded-2xl overflow-hidden shadow-lg group transition-all duration-300" style={{ backgroundImage: `url(${imgURL})` }}>
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-all duration-300" />
            <div className="relative z-10 h-full w-full flex flex-col justify-center items-center text-center px-6">
                <div className="bg-white/20 backdrop-blur-md p-4 rounded-xl max-w-xs">
                    <h3 className="text-xl md:text-2xl font-semibold text-white mb-2">{title}</h3>
                    <p className="text-sm text-gray-200">{body}</p>
                </div>
                <p className="text-md mt-3 text-red-600 transition hover:text-red-700 cursor-pointer">Подробнее <span className="text-xl">></span></p>
            </div>
        </div>
    );
}
