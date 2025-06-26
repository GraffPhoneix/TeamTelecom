export default function ShopNumbersItem({ type, number, price, subText }) {
  return (
    <div className="max-w-xs bg-white rounded-lg shadow p-4.5 flex flex-col items-center text-center bg-center h-74">
      <div className="text-3xl text-white p-2 font-semibold mb-7 w-[100%] rounded-2xl bg-[#1B2B40]">{type}</div>
      <div className="text-3xl font-mono mb-2">{number}</div>
      <div className="text-xl font-bold mb-2.5">{price}</div>
      {subText && <div className="text-xs text-gray-500">{subText}</div>}
      <button className="border-red-500 transition border-2 hover:bg-red-500 w-[100%] hover:text-white mt-8 cursor-pointer text-red-600 text-sm font-medium px-4 py-2 rounded-4xl">Добавить в корзину</button>
    </div>
  );
}
