import { useState } from "react";
import { db, setData } from "../firebase";
import { ref, get } from "firebase/database";
import DataBase from "../DataBase";

export default function RegisterForm() {
    if (DataBase.isLogined) {
        location.href = "http://localhost:5173/";
    }

    const [fullName, setFullName] = useState("");
    const [surname, setSurname] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        const user = {
            name: fullName,
            surname: surname,
            username: `@${username}`,
            password: password,
        };

        try {
            const usersRef = ref(db, "users");
            const snapshot = await get(usersRef);
            const existingUsers = snapshot.exists() ? snapshot.val() : [];
            const updatedUsers = [...existingUsers, user];
            await setData("users", updatedUsers);

            DataBase.isLogined = true;
            DataBase.me = user;
            localStorage.setItem("dataBase", JSON.stringify(DataBase));
            location.href = "http://localhost:5173/";

            console.log("Пользователь успешно добавлен!");
        } catch (error) {
            console.error("Ошибка при сохранении пользователя:", error);
        }
    };

    return (
        <div className="flex items-center justify-center p-4">
            <div className="w-full max-w-md bg-white border border-gray-200 rounded-2xl shadow-xl p-6 mt-6 mb-6">
                <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Регистрация</h2>
                <form className="space-y-5" onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="fullName" className="block mb-1 text-sm font-semibold text-gray-700">Имя</label>
                        <input
                            type="text"
                            id="fullName"
                            value={fullName}
                            onChange={(e) => setFullName(e.target.value)}
                            placeholder="Введите ваше имя"
                            className="w-full border border-gray-300 rounded-xl px-4 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500 transition"
                        />
                    </div>
                    <div>
                        <label htmlFor="surname" className="block mb-1 text-sm font-semibold text-gray-700">Фамилия</label>
                        <input
                            type="text"
                            id="surname"
                            value={surname}
                            onChange={(e) => setSurname(e.target.value)}
                            placeholder="Введите вашу фамилию"
                            className="w-full border border-gray-300 rounded-xl px-4 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500 transition"
                        />
                    </div>
                    <div>
                        <label htmlFor="username" className="block mb-1 text-sm font-semibold text-gray-700">Username</label>
                        <input
                            type="text"
                            id="username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            placeholder="@username"
                            className="w-full border border-gray-300 rounded-xl px-4 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500 transition"
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
                            className="w-full border border-gray-300 rounded-xl px-4 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500 transition"
                        />
                    </div>
                    <button type="submit" className="w-full py-3 mt-4 rounded-xl font-semibold text-white text-lg shadow-lg bg-gradient-to-r from-red-500 to-pink-600 hover:from-pink-600 hover:to-red-500 cursor-pointer transition-transform transform hover:scale-[1.02] active:scale-95">Зарегистрироваться</button>
                </form>
            </div>
        </div>
    );
}
