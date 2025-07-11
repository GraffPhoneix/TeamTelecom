import { useState, useEffect } from "react";
import { db, setData } from "../firebase";
import { ref, get, onValue } from "firebase/database";
import DataBase from "../DataBase";
import isLogined from '../Components/isLogined'

export default function Chat() {
    isLogined()
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState("");
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const messagesRef = ref(db, "messages");
        const unsubscribe = onValue(messagesRef, (snapshot) => {
            if (snapshot.exists()) {
                setMessages(snapshot.val());
            } else {
                setMessages([]);
            }
            setLoading(false);
        });

        return () => unsubscribe();
    }, []);

    const handleSend = async (e) => {
        e.preventDefault();
        if (!input.trim()) return;

        const newMessage = {
            sender: `${DataBase.me.name} ${DataBase.me.surname}`,
            description: input.trim(),
        };

        try {
            const messagesRef = ref(db, "messages");
            const snapshot = await get(messagesRef);
            const existingMessages = snapshot.exists() ? snapshot.val() : [];
            const updatedMessages = [...existingMessages, newMessage];
            await setData("messages", updatedMessages);
            setInput("");
        } catch (error) {
            console.error("Error sending message:", error);
        }
    };

    return (
        <div className="max-w-3xl mx-auto mt-8 p-8 bg-white shadow-xl rounded-3xl border border-red-200 mb-8">
            <h2 className="text-3xl font-bold text-center text-red-600 mb-6">Чат</h2>

            <div className="mb-6 h-96 overflow-y-auto rounded-xl border-2 border-red-100 bg-gray-50 p-6 shadow-inner">
                {loading ? (
                    <p className="text-center text-gray-500 text-lg">Загрузка сообщений...</p>
                ) : messages.length === 0 ? (
                    <p className="text-center text-gray-400 text-lg">Нет сообщений</p>
                ) : (
                    messages.map((msg, i) => (
                        <div
                            key={i}
                            className="mb-5 p-4 bg-white rounded-xl border border-gray-200 shadow hover:shadow-md transition"
                        >
                            <p className="text-lg font-semibold text-red-600">{msg.sender}</p>
                            <p className="text-gray-700 text-base mt-1">{msg.description}</p>
                        </div>
                    ))
                )}
            </div>

            <form onSubmit={handleSend} className="flex items-center gap-4">
                <input
                    type="text"
                    placeholder="Введите ваше сообщение..."
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    className="flex-grow border border-gray-300 rounded-full px-5 py-3 text-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                />
                <button
                    type="submit"
                    className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-full text-lg font-medium transition"
                >
                    Отправить
                </button>
            </form>
        </div>
    );
}
