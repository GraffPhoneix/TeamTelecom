export default function SmartphonesContainer({ header, title }) {
    return (
        <div className="w-64 p-4 bg-white border border-gray-200 rounded-lg shadow hover:shadow-lg hover:scale-110 cursor-pointer transform transition duration-300">
            <div className="text-xl font-bold mb-12 text-center">{header}</div>
            <div className="text-gray-600 mb-6.5 text-center">{title}</div>
            <button className="px-4 py-2 border-3 w-[100%] rounded-3xl text-red-500 font-bold border-red-500 hover:text-white hover:bg-red-600 cursor-pointer transition">Подробнее</button>
        </div>
    )
}
