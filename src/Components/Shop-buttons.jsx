export default function ShopButtons() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-6 gap-6 mt-6">
            <div></div>
            <button className="p-4 bg-gray-200 rounded-xl border-gray-300 border h-16 transition hover:shadow-lg cursor-pointer">Смартфоны</button>
            <button className="p-4 bg-gray-200 rounded-xl border-gray-300 border h-16 transition hover:shadow-lg cursor-pointer">Номера</button>
            <button className="p-4 bg-gray-200 rounded-xl border-gray-300 border h-16 transition hover:shadow-lg cursor-pointer">Устройства</button>
            <button className="p-4 bg-gray-200 rounded-xl border-gray-300 border h-16 transition hover:shadow-lg cursor-pointer">Аксессуары</button>
            <div></div>
        </div>
    )
}