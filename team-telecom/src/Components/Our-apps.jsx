import appImg from '../Img/Our-app/img_1.png'

export default function OurApps() {
    return (
        <div className="max-w-md mx-auto bg-white rounded-lg shadow-md p-6 text-center mb-4 container">
            <h2 className="text-2xl font-bold mb-2 text-gray-900">Приложение My Team</h2>
            <p className="text-sm text-gray-600 mb-4">Установите My Team для iOS, Android, Mac, Windows</p>
            <p className="text-gray-700 mb-6">Проводите платежи, получайте бонусы, шейкайте и пользуйтесь другими преимуществами.</p>
            <img src={appImg} alt="App image" className='mb-4' />
            <div className="flex justify-center space-x-4">
                <a href="#" className="bg-green-600 text-white px-4 py-2 w-22 rounded-lg text-sm hover:bg-green-700 transition" aria-label="Download on the App Store" >iOS</a>
                <a href="#" className="bg-green-600 text-white px-4 py-2 w-22 rounded-lg text-sm hover:bg-green-700 transition" aria-label="Download on Google Play" >Android</a>
                <a href="#" className="bg-green-600 text-white px-4 py-2 w-22 rounded-lg text-sm hover:bg-green-700 transition" aria-label="Download on Google Play" >Mac</a>
                <a href="#" className="bg-green-600 text-white px-4 py-2 w-22 rounded-lg text-sm hover:bg-green-700 transition" aria-label="Download on Google Play" >Windows</a>
            </div>
        </div>
    );
}
