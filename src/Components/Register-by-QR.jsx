import QRcode from '../Img/QR-codes/img_1.png'

export default function RegisterByQR() {
    return (
        <div className="hidden md:flex md:w-1/2 bg-blue-50 items-center justify-center p-8">
            <div className="text-center space-y-4">
                <img src={QRcode} alt="QR" className="w-30 h-30 mx-auto" />
                <p className="text-sm text-gray-600">Сканируйте QR-код, чтобы войти через приложение</p>
            </div>
        </div>
    )
}