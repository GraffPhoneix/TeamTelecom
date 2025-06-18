import ShopItem from '../Components/Shop-item';
import dataBase from '../DataBase';

export default function Shop() {
    return (
        <div className="min-h-screen bg-gray-100 px-4 py-10">
            <div className="max-w-7xl mx-auto">
                <h1 className="text-3xl font-bold text-gray-800 mb-6">Магазин</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
                    {dataBase.products.filter(product => product.status === 'none').map(product => <ShopItem id={product.id} title={product.title} body={product.body} imgURL={product.imgURL} price={product.price} />)}
                </div>
            </div>
        </div>
    );
}
