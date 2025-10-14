export default function ShopButtons() {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-6 px-53 justify-center">
            <button className="p-10 py-9 rounded-md bg-[#f5f6f7] border border-[#ebedef] h-16 text-[#2c3843] transition hover:shadow-[1.95px_1.95px_2.6px_rgba(0,0,0,0.15)] cursor-pointer flex items-center justify-center gap-2 w-full">
                <img src="https://www.telecomarmenia.am/files/icons/1/16511434160671/220x220.png" alt="icon" className="w-10 h-10" />
                <span className="font-semibold mr-3">Смартфоны</span>
            </button>
            <button className="p-10 py-9 rounded-md bg-[#f5f6f7] border border-[#ebedef] h-16 text-[#2c3843] transition hover:shadow-[1.95px_1.95px_2.6px_rgba(0,0,0,0.15)] cursor-pointer flex items-center justify-center gap-2 w-full">
                <img src="https://www.telecomarmenia.am/files/icons/1/16511436682774/220x220.png" alt="icon" className="w-10 h-10" />
                <span className="font-semibold mr-3">Номера</span>
            </button>
            <button className="p-10 py-9 rounded-md bg-[#f5f6f7] border border-[#ebedef] h-16 text-[#2c3843] transition hover:shadow-[1.95px_1.95px_2.6px_rgba(0,0,0,0.15)] cursor-pointer flex items-center justify-center gap-2 w-full">
                <img src="https://www.telecomarmenia.am/files/icons/1/16511433995815/220x220.png" alt="icon" className="w-10 h-10" />
                <span className="font-semibold mr-3">Устройства</span>
            </button>
            <button className="p-10 py-9 rounded-md bg-[#f5f6f7] border border-[#ebedef] h-16 text-[#2c3843] transition hover:shadow-[1.95px_1.95px_2.6px_rgba(0,0,0,0.15)] cursor-pointer flex items-center justify-center gap-2 w-full">
                <img src="https://www.telecomarmenia.am/files/icons/1/16511434076021/220x220.png" alt="icon" className="w-10 h-10" />
                <span className="font-semibold mr-3">Аксессуары</span>
            </button>
        </div>
    )
}