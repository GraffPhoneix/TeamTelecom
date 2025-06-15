export default function RegisterHeader() {
    return (
        <div className="flex justify-between items-center mb-6">
            <p className="h-10">Team Telecom Armeina</p>
            <div className="space-x-2 text-sm text-blue-700">
                <button className="hover:underline">Рус</button>
                <button className="text-gray-400">Հայ</button>
                <button className="text-gray-400">Eng</button>
            </div>
        </div>
    )
}