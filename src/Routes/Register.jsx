import { useState } from "react";
import { db, setData } from "../firebase";
import { ref, get } from "firebase/database";
import DataBase from "../DataBase";

export default function RegisterForm() {
    const [fullName, setFullName] = useState("");
    const [surname, setSurname] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (
            fullName.trim().length <= 5 ||
            surname.trim().length <= 5 ||
            username.trim().length <= 5 ||
            Number(password) <= 9999
        ) {
            setError("Все поля должны содержать больше 5 символов, а пароль — быть пятизначним и более.");
            return;
        }

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

            setError("");
            console.log("Пользователь зарегистрирован");
        } catch (error) {
            console.error("Ошибка регистрации:", error);
            setError("Произошла ошибка при регистрации. Попробуйте снова.");
        }
    };

    return (
        <div className="max-w-md mx-auto bg-white border border-gray-200 rounded-lg shadow-lg p-8 mt-12 mb-4">
            <h2 className="text-2xl font-semibold mb-6 text-gray-800 text-center">Регистрация</h2>
            <form className="space-y-5" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="fullName" className="block mb-1 text-sm font-medium text-gray-700">Имя</label>
                    <input
                        type="text"
                        id="fullName"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        placeholder="Введите ваше имя"
                        className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-red-600"
                    />
                </div>
                <div>
                    <label htmlFor="surname" className="block mb-1 text-sm font-medium text-gray-700">Фамилия</label>
                    <input
                        type="text"
                        id="surname"
                        value={surname}
                        onChange={(e) => setSurname(e.target.value)}
                        placeholder="Введите вашу фамилию"
                        className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-red-600"
                    />
                </div>
                <div>
                    <label htmlFor="username" className="block mb-1 text-sm font-medium text-gray-700">Username</label>
                    <input
                        type="text"
                        id="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        placeholder="@username"
                        className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-red-600"
                    />
                </div>
                <div>
                    <label htmlFor="password" className="block mb-1 text-sm font-medium text-gray-700">Пароль</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Введите пароль"
                        className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-red-600"
                    />
                </div>
                <button type="submit" className="border-red-500 w-full transition border-2 hover:bg-red-500 hover:text-white mt-7 cursor-pointer text-red-600 text-sm font-medium px-4 py-2 rounded-4xl">Зарегистрироваться</button>

                {error && (
                    <p className="mt-4 text-center text-sm text-red-600 font-medium">
                        {error}
                    </p>
                )}
            </form>
        </div>
    );
}
