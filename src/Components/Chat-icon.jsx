import { MessageCircle } from "lucide-react";

export default function ChatButton() {
    return (
        <a className="fixed bottom-6 right-6 bg-[#005f87] hover:bg-[#0073a6] text-white rounded-full p-4 shadow-lg transition-all duration-300 hover:scale-110 focus:outline-none" aria-label="Chat Support" href="/chat">
            <MessageCircle size={28} />
        </a>
    );
}
