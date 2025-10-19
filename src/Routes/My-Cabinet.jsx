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
      <div className="w-full md:w-[45%] bg-[#f7f7f8] flex flex-col justify-center items-center px-6 py-12">
        <div className="w-full max-w-sm">
          <img
            src="https://www.telecomarmenia.am/myaccount/img/account-logo.png"
            alt="Team Telecom"
            className="w-44 mb-10"
          />
          <div className="flex justify-start font-bold gap-6 mb-6 border-b border-gray-300 text-[15px] text-gray-600">
            <span className="pb-2 border-b-2 border-[#86d2da] text-[#2e3a44] cursor-pointer">
              Частным лицам
            </span>
            <span className="pb-2 cursor-pointer text-[#2e3a44] hover:text-[#2c3843]">
              Бизнес
            </span>
          </div>
          <form
            onSubmit={handleSubmit}
            className="bg-white border border-gray-200 rounded-2xl shadow-md p-6"
          >
            <div className="flex justify-around text-sm font-semibold mb-5 text-gray-700 border-b border-gray-200">
              <span className="pb-2 border-b-2 font-bold border-[#86d2da] text-[#2c3843] cursor-pointer">
                Номер/имя пользователя
              </span>
              <span className="pb-2 cursor-pointer font-bold hover:text-[#2e3a44]">
                Эл. адрес
              </span>
            </div>

            <label className="block text-[13px] text-gray-700 mb-1">
              Имя пользователя
            </label>
            <div className="flex items-center border border-gray-300 rounded-xl px-3 py-2 mb-4 bg-white">
              <span className="text-gray-500 mr-2 select-none"></span>
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
              <div className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="#94a3b8"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.6}
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.6}
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.477 0 8.268 2.943 9.542 7-1.274 4.057-5.065 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  />
                </svg>
              </div>
            </div>
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
          <div className="flex justify-center mt-8 gap-4">
            <button className="w-10 h-10 rounded-full overflow-hidden border-2 border-white shadow-md">
              <img
                src="https://flagcdn.com/w80/am.png"
                alt="AM"
                className="w-full h-full object-cover"
              />
            </button>
            <button className="w-10 h-10 rounded-full overflow-hidden border-2 border-white shadow-md">
              <img
                src="https://flagcdn.com/w80/ru.png"
                alt="RU"
                className="w-full h-full object-cover"
              />
            </button>
            <button className="w-10 h-10 rounded-full overflow-hidden border-2 border-white shadow-md">
              <img
                src="https://flagcdn.com/w80/gb.png"
                alt="EN"
                className="w-full h-full object-cover"
              />
            </button>
          </div>
        </div>
      </div>
      <div
        className="hidden md:flex w-[55%] relative bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://testing.telecomarmenia.am/myaccount/img/bg-image.png')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-white/30 via-transparent to-transparent" />
        <div className="absolute top-24 left-16 text-[#2c3843] z-10">
          <h1 className="text-[46px] font-extrabold tracking-tight mb-8">
            ЛИЧНЫЙ КАБИНЕТ
          </h1>
        </div>
        <img
          src="https://www.telecomarmenia.am/myaccount/img/mobile-devices.png?v=2"
          alt="Devices"
          className="absolute bottom-0 right-0 w-[80%] max-w-[600px] z-0 select-none"
        />
      </div>
    </div>
  );
}
