export default function ShopNumbersItem({ type, number, price, subText }) {
  return (
    <div className="max-w-xs bg-white shadow flex flex-col rounded-2xl p-4.5 text-center bg-center h-95 mb-10">
      <div className="text-3xl text-white p-3 font-semibold mb-7 w-[100%] rounded-t-2xl bg-[#00425F]">{type}</div>
      <div className="text-3xl font-bold mb-8 text-[#2c3843]">{number}</div>
      <div className="text-2xl font-bold mb-2.5 text-[#00425F] text-left">{price}</div>
      {subText && <div className="text-xs text-gray-500 mb-8 mt-5 text-left">{subText}</div>}
      <button className="border-red-500 transition border-2 hover:bg-red-500 w-[100%] hover:text-white mt-8 cursor-pointer text-red-600 text-sm font-medium px-4 py-3 rounded-4xl">Добавить в корзину</button>
    </div>
  );
}
