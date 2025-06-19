export default function BusketItem({ title, body, id, price, imgURL }) {
    return (
        <div className="max-w-sm bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300" key={id}>
            <img src={imgURL} alt="product" className="w-full h-56 object-cover" />
            <div className="p-4 flex flex-col">
                <h2 className="text-xl font-semibold text-gray-800 mb-2">{title}</h2>
                <p className="text-gray-600 flex-grow">{body}</p>
                <div className="mt-4 flex items-center justify-between">
                    <span className="text-2xl font-bold text-red-600">{price}</span>
                    <button className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 cursor-pointer transition-colors">Купить</button>
                </div>
            </div>
        </div>
    );
}
