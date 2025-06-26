import Category_1 from '../Img/Slider/img_4.png'

export default function ShopPsudoHeader({ title, body, imgURL }) {
    return (
        <div className="relative text-white p-6 border rounded-2xl bg-cover bg-center hover:shadow-md w-full h-150 flex items-center justify-center" style={{ backgroundImage: `url(${Category_1})` }}>
            <div className="bg-white/20 backdrop-blur-md p-10 rounded shadow-lg max-w-md text-center">
                <h3 className="text-2xl font-bold mb-2 text-gray-900">Sony Smart TV</h3>
                <p className="text-gray-800 text-medium">Пакеты COSMO/COMBO</p>
                <button className='rounded-xl bg-red-400 p-1.5 w-60 mt-5 transition hover:bg-red-500 cursor-pointer'>Подробнее</button>
            </div>
        </div>
    );
}
