export default function CategoryItem({ title, body, imgURL, key }) {
    return (
        <div className="text-center p-6 border rounded-lg hover:shadow-md" key={key}>
            <img src={imgURL} className="mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">{title}</h3>
            <p className="text-gray-600">{body}</p>
        </div>
    )
}