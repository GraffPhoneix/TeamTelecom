import { useState, useEffect } from "react";
import { fetchData } from "../firebase";
import DataBase from "../DataBase";

export default function Login() {
    const [users, setUsers] = useState([]);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    useEffect(() => {
        fetchData("users", (fetchedUsers) => {
            setUsers(fetchedUsers);
        });
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();

        const user = users.find(
            (u) => u.username === username || u.username === `@${username}` && u.password === password
        );

        if (user) {
            DataBase.isLogined = true;
            DataBase.me = user;
            localStorage.setItem("dataBase", JSON.stringify(DataBase));
            location.href = "http://localhost:5173/";
        } else {
            setError("Неверный логин или пароль");
        }
    };

    return (
        <div className="flex items-center justify-center p-5">
            <div className="w-full max-w-md bg-white border border-gray-200 rounded-2xl shadow-xl p-6 mt-17.5 mb-18">
                <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
                    Вход в аккаунт
                </h2>
                <form className="space-y-5" onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="username" className="block mb-1 text-sm font-semibold text-gray-700">Username</label>
                        <input
                            type="text"
                            id="username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            placeholder="@username"
                            className="w-full border border-gray-300 rounded-xl px-4 py-2 shadow-sm 
                         focus:outline-none focus:ring-2 focus:ring-pink-500 
                         focus:border-pink-500 transition"
                        />
                    </div>
                    <div>
                        <label htmlFor="password" className="block mb-1 text-sm font-semibold text-gray-700">Пароль</label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Введите пароль"
                            className="w-full border border-gray-300 rounded-xl px-4 py-2 shadow-sm 
                         focus:outline-none focus:ring-2 focus:ring-pink-500 
                         focus:border-pink-500 transition"
                        />
                    </div>
                    <button type="submit" className="w-full py-3 mt-4 rounded-xl font-semibold text-white text-lg shadow-lg bg-gradient-to-r from-red-500 to-pink-600 hover:from-pink-600 hover:to-red-500 cursor-pointer transition-transform transform hover:scale-[1.02] active:scale-95">Войти</button>
                </form>
                {!DataBase.isLogined && (
                    <div className="mt-4 text-center text-sm">
                        <span className="text-gray-600">Нет аккаунта? </span>
                        <a href="/register" className="font-semibold text-blue-600 hover:text-blue-800 hover:underline transition">Зарегистрироваться</a>
                    </div>
                )}
                {error && (
                    <div className="mt-3 text-red-600 text-sm font-medium bg-red-50 border border-red-200 rounded-lg p-2 text-center">
                        {error}
                    </div>
                )}
            </div>
        </div>
    );
}
