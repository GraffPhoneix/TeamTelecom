import { useState, useEffect } from "react";
import { fetchData } from "../firebase";
import DataBase from "../DataBase";

export default function MyCabinet() {
  const [users, setUsers] = useState([]);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    fetchData("users", (fetchedUsers) => setUsers(fetchedUsers));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = users.find(
      (u) =>
        (u.username === username || u.username === `@${username}`) &&
        u.password === password
    );

    if (user) {
      DataBase.isLogined = true;
      DataBase.me = user;
      localStorage.setItem("dataBase", JSON.stringify(DataBase));
      location.href = "/";
    } else {
      setError("Неверный логин или пароль");
    }
  };

  return (
    <div className="w-full min-h-screen flex bg-white">
      {/* Left side - Login form */}
      <div className="w-full md:w-[45%] bg-[#f7f7f8] flex flex-col justify-center items-center px-6 py-12">
        <div className="w-full max-w-sm">
          {/* Logo */}
          <img
            src="https://www.telecomarmenia.am/myaccount/img/account-logo.png"
            alt="Team Telecom"
            className="w-44 mb-10"
          />

          {/* Top Tabs */}
          <div className="flex justify-start gap-6 mb-6 border-b border-gray-300 text-[15px] font-semibold text-gray-600">
            <span className="pb-2 border-b-2 border-[#009de0] text-[#009de0] cursor-pointer">
              Частным лицам
            </span>
            <span className="pb-2 cursor-pointer hover:text-[#009de0]">
              Бизнес
            </span>
          </div>

          {/* Login Box */}
          <form
            onSubmit={handleSubmit}
            className="bg-white border border-gray-200 rounded-2xl shadow-md p-6"
          >
            <div className="flex justify-around text-sm font-semibold mb-5 text-gray-700 border-b border-gray-200">
              <span className="pb-2 border-b-2 border-[#009de0] text-[#009de0] cursor-pointer">
                Номер телефона
              </span>
              <span className="pb-2 cursor-pointer hover:text-[#009de0]">
                Эл. адрес
              </span>
            </div>

            <label className="block text-[13px] text-gray-700 mb-1">
              Имя пользователя
            </label>
            <div className="flex items-center border border-gray-300 rounded-xl px-3 py-2 mb-4 bg-white">
              <span className="text-gray-500 mr-2 select-none">+374</span>
              <input
                type="text"
                placeholder="Заполните имя пользователя"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full outline-none text-sm text-gray-700 placeholder-gray-400"
              />
            </div>

            <label className="block text-[13px] text-gray-700 mb-1">Пароль</label>
            <div className="relative">
              <input
                type="password"
                placeholder="Введите пароль"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full border border-gray-300 rounded-xl px-4 py-2 mb-6 text-sm text-gray-700 focus:ring-2 focus:ring-[#ff4b4b] focus:outline-none"
              />
              {/* Eye icon */}
              <div className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="#94a3b8">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.477 0 8.268 2.943 9.542 7-1.274 4.057-5.065 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
            </div>

            {/* Error message */}
            {error && (
              <div className="text-red-600 text-sm mb-3 bg-red-50 border border-red-100 rounded-md p-2 text-center">
                {error}
              </div>
            )}

            <button
              type="submit"
              className="w-full py-2.5 rounded-xl font-semibold text-white bg-[#ee4b56] hover:bg-[#e03f4a] transition shadow-sm"
            >
              Вход
            </button>

            <a
              href="#"
              className="block mt-3 text-center text-[13px] text-[#6b7a87] hover:underline"
            >
              Забыли пароль?
            </a>
          </form>

          <button className="w-full mt-5 py-2.5 rounded-xl font-semibold text-[#ee4b56] border border-[#ee4b56] hover:bg-[#fff5f6] transition">
            Регистрация
          </button>

          {/* Round language flags */}
          <div className="flex justify-center mt-8 gap-4">
            <button className="w-10 h-10 rounded-full overflow-hidden border-2 border-white shadow-md">
              <img src="https://flagcdn.com/w80/am.png" alt="AM" className="w-full h-full object-cover" />
            </button>
            <button className="w-10 h-10 rounded-full overflow-hidden border-2 border-white shadow-md">
              <img src="https://flagcdn.com/w80/ru.png" alt="RU" className="w-full h-full object-cover" />
            </button>
            <button className="w-10 h-10 rounded-full overflow-hidden border-2 border-white shadow-md">
              <img src="https://flagcdn.com/w80/gb.png" alt="EN" className="w-full h-full object-cover" />
            </button>
          </div>
        </div>
      </div>

      {/* Right side - Big image, title and app badges */}
      <div className="hidden md:flex w-[55%] relative items-center justify-center bg-white overflow-hidden">
        {/* subtle left divider line */}
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#d1d5d9] opacity-40" />

        {/* Background image (covers) */}
        <div
          className="absolute inset-0 bg-center bg-no-repeat bg-cover"
          style={{
            backgroundImage:
              "url('https://www.telecomarmenia.am/myaccount/img/mobile-devices.png?v=2')",
            backgroundSize: "cover",
            transform: "scale(1.02)",
            filter: "drop-shadow(0 2px 6px rgba(0,0,0,0.08))",
          }}
        />

        {/* dark gradient at bottom to improve contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-white/90 via-transparent to-transparent pointer-events-none" />

        {/* Title */}
        <div className="absolute top-16 left-16 z-20">
          <h1 className="text-[44px] font-extrabold text-[#2c3843] tracking-tight">
            ЛИЧНЫЙ КАБИНЕТ
          </h1>
        </div>

        {/* Phones centered-right */}
        <div className="relative z-20 w-full h-full flex items-end justify-end pr-20 pb-12">
          {/* The background image already contains the phones; we show it via CSS background.
              Optionally you can place a foreground phone image (uncomment and swap src). */}
          {/* <img src="/path/to/foreground-phone.png" alt="phones" className="max-w-sm object-contain" /> */}
          <div className="flex flex-col items-end gap-4">
            {/* App badges */}
            <a
              href="#"
              className="inline-flex items-center gap-3 px-4 py-2 rounded-md shadow-md bg-black text-white text-sm"
              aria-label="App Store"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" className="inline-block" fill="white" xmlns="http://www.w3.org/2000/svg">
                <path d="M16.365 1.43c.3.33.56.705.78 1.12-1.03.65-1.73 1.6-2.15 2.67-.4 1.01-.6 2.06-.5 3.12 0 .13.01.26.02.39-2.02-.1-3.9-.95-5.2-2.24C8.02 6.64 7.25 5.3 6.86 3.8 6.7 3.13 6.64 2.44 6.95 1.84 7.28 1.16 8.11.67 9 .7c.84.02 1.64.4 2.27.95.7.94 1.35 1.8 2.09 2.62.02.03.06.07.08.1.37-.53.66-1.1.84-1.72.31-.98.55-2.03 1.01-2.95.14-.28.35-.53.63-.69z" />
              </svg>
              <span className="text-sm font-medium">Download on the App Store</span>
            </a>

            <a
              href="#"
              className="inline-flex items-center gap-3 px-4 py-2 rounded-md shadow-md bg-black text-white text-sm"
              aria-label="Google Play"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" className="inline-block" fill="white" xmlns="http://www.w3.org/2000/svg">
                <path d="M3.4 1.7L18.6 12 3.4 22.3c-.6.4-1.4-.08-1.4-.83V2.5c0-.76.78-1.24 1.4-.8z" />
              </svg>
              <span className="text-sm font-medium">GET IT ON Google Play</span>
            </a>
          </div>
        </div>

        {/* small footer on right side */}
        <div className="absolute bottom-4 right-6 text-xs text-gray-400 z-20">
          Team © 2025.
        </div>
      </div>
    </div>
  );
}
