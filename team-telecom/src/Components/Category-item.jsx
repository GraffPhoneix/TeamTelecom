export default function CategoryItem({ title, body, imgURL }) {
    return (
        <div className="relative text-white p-6 border rounded-lg bg-cover bg-center hover:shadow-md h-65 flex items-center justify-center" style={{ backgroundImage: `url(${imgURL})` }}>
            <div className="bg-white/20 backdrop-blur-md p-4 rounded shadow-lg max-w-md text-center">
                <h3 className="text-xl font-bold mb-2 text-white">{title}</h3>
                <p className="text-gray-100">{body}</p>
            </div>
        </div>
    );
}
