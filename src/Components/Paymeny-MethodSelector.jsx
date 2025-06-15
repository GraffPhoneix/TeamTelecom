export default function MethodSelector() {
  return (
    <div>
      <h2 className="text-xl font-semibold text-gray-800 mb-2">Способы пополнения</h2>
      <p className="text-sm text-gray-600 mb-4"> Вы можете использовать номер телефона или лицевой счёт для совершения оплаты.</p>
      <div className="flex items-center space-x-4">
        <button className="px-4 py-2 text-sm font-medium border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition">Номер телефона</button>
        <button className="px-4 py-2 text-sm font-medium border border-blue-300 text-blue-600 rounded-lg hover:bg-blue-100 transition">Лицевой счет</button>
      </div>
    </div>
  );
}
