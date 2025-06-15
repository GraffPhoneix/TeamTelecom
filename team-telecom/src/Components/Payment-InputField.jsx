export default function InputField({ label, placeholder, type = 'text' }) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-red-500 focus:outline-none"
      />
    </div>
  );
}
