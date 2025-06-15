export default function NewsItem({ title, body, date, id, imgURL }) {
    return (
        <div className="bg-gray-100 rounded-2xl shadow-md p-6 hover:shadow-lg transition-shadow duration-300" key={id}>
            <img alt='data' src={imgURL} className="rounded-2xl" />
            <h3 className="text-xl font-semibold text-red-600 mb-2 mt-2">{title}</h3>
            <p className="text-sm text-gray-500 mt-1">{date}</p>
            <p className="mt-2 text-gray-700">{body}</p>
        </div>
    );
}
