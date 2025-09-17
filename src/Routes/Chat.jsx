import { useState, useEffect } from "react";
import { db, setData } from "../firebase";
import { ref, get, onValue } from "firebase/database";
import DataBase from "../DataBase";
import isLogined from '../Components/isLogined'

export default function Chat() {
    isLogined();
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
        <div className="max-w-5xl mx-auto mt-10 mb-10 p-6 sm:p-10 bg-white/80 backdrop-blur-md shadow-2xl rounded-2xl border border-red-200">
            <div className="bg-gradient-to-r from-red-600 to-red-400 text-white rounded-2xl shadow-md p-5 mb-6 text-center">
                <h2 className="text-3xl font-bold tracking-wide">Чат</h2>
                <p className="text-sm opacity-80">Общайтесь в реальном времени</p>
            </div>
            <div className="mb-6 h-96 overflow-y-auto rounded-xl border border-red-200 bg-gray-50 p-6 shadow-inner">
                {loading ? (
                    <p className="text-center text-gray-500 text-lg">Загрузка сообщений...</p>
                ) : messages.length === 0 ? (
                    <p className="text-center text-gray-400 text-lg">Нет сообщений</p>
                ) : (
                    messages.map((msg, i) => (
                        <div
                            key={i}
                            className="mb-5 p-5 bg-white/70 backdrop-blur-sm rounded-2xl border border-gray-200 shadow-md hover:shadow-lg transition"
                        >
                            <p className="text-lg font-semibold text-red-600">{msg.sender}</p>
                            <p className="text-gray-700 text-base mt-1 leading-relaxed">
                                {msg.description}
                            </p>
                        </div>
                    ))
                )}
            </div>
            <form onSubmit={handleSend} className="flex items-center gap-3 bg-white border border-gray-200 rounded-xl p-2 pl-5 shadow-md">
                <input
                    type="text"
                    placeholder="Введите ваше сообщение..."
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    className="flex-grow bg-transparent outline-none text-lg px-2"
                />
                <button type="submit" className="bg-gradient-to-r from-red-600 to-red-400 hover:from-red-700 hover:to-red-600 text-white px-6 py-2 rounded-full text-lg font-medium shadow-md transition">➤</button>
            </form>
        </div>
    );
}
