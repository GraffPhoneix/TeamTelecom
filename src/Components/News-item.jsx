export default function NewsItem({ title, body, date, id, imgURL }) {
    return (
        <div className="bg-gray-100 rounded-2xl shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
            <img alt='data' src={imgURL} className="rounded-2xl" />
            <p className="text-sm text-gray-500 mt-1.5">{date}</p>
            <h3 className="text-2xl font-semibold text-black mb-2 mt-2">{title}</h3>
            <p className="mt-2 text-gray-800">{body}</p>
        </div>
    );
}
