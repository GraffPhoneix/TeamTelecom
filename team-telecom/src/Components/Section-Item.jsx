export default function SectionItem({title, body, imgURL, key}) {
    return (
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center" key={key}>
            <div>
                <h1 className="text-4xl font-bold text-gray-900 mb-4">{title}</h1>
                <p className="text-gray-600 mb-6">{body}</p>
                <button className="bg-red-600 text-white px-6 py-2 rounded-full hover:bg-red-700 cursor-pointer">Узнать больше</button>
            </div>
            <div>
                <img src={imgURL} className="rounded-lg shadow-md" />
            </div>
        </div>
    )
}