export default function SectionItem({ title, body, imgURL, key }) {
    return (
        <div className="w-full mx-auto px-4 md:grid-cols-2 gap-10 items-center flex bg-gray-100 rounded-2xl mt-4 pt-4 pb-5 pl-5 pr-3.5 bg-cover bg-center h-160" key={key}>
            <div className="bg-white/80 backdrop-blur-lg p-6 rounded-2xl ml-75">
                <h1 className="text-4xl font-bold text-gray-900 mb-4">{title}</h1>
                <p className="text-gray-700 mb-6">{body}</p>
                <button className="bg-red-600 text-white px-6 py-2 rounded-full hover:bg-red-700 cursor-pointer"> Узнать больше </button>
            </div>
            <div className="bg-gray-100">
                <img src={imgURL} alt="img" />
            </div>
        </div>
    );
}