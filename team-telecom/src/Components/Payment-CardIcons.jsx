export default function CardIcons() {
  return (
    <div className="flex items-center space-x-3 mt-4">
      <span className="text-sm text-gray-600 font-medium">Принимаем карты:</span>
      <div className="w-10 h-6 bg-gray-300 rounded shadow-sm text-xs center">PayPal</div>
      <div className="w-10 h-6 bg-gray-300 rounded shadow-sm text-xs center">Alfa</div>
      <div className="w-10 h-6 bg-gray-300 rounded shadow-sm text-xs center">VISA</div>
    </div>
  );
}
