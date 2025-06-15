import Header from '../Components/Payment-Header';
import MethodSelector from '../Components/Paymeny-MethodSelector';
import InputField from '../Components/Payment-InputField';
import CardIcons from '../Components/Payment-CardIcons';
import InfoBlocks from '../Components/Payment-InfoBlocks';
import Footer from '../Components/Payment-Footer';

export default function Payment() {
  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-xl overflow-hidden">
        <Header />
        <div className="p-8 space-y-8">
          <MethodSelector />
          <InputField label="Номер / Лицевой счет" placeholder="+374 XX XX XX XX" />
          <InputField label="Сумма (֏)" placeholder="1000" type="number" />
          <CardIcons />
          <div>
            <button className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-4 rounded-lg transition">
              Продолжить
            </button>
          </div>
          <InfoBlocks />
        </div>
        <Footer />
      </div>
    </div>
  );
}
