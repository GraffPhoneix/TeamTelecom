import CategoryItem from './Category-Item'

export default function Category() {
    const categories = [
        {
            id: 1,
            title: 'Интернет',
            body: 'Стабильное и быстрое соединение для дома и офиса.',
            imgURL: '#'
        },
        {
            id: 2,
            title: 'Мобильная связь',
            body: 'Надёжная связь и выгодные тарифы для всех.',
            imgURL: '#'
        },
        {
            id: 3,
            title: 'TV',
            body: 'Любимые каналы и фильмы в высоком качестве.',
            imgURL: '#'
        },
    ]

    return (
        <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-10">Наши услуги</h2>
                <div className="grid md:grid-cols-3 gap-8">
                    {categories.map(el => {
                        return (
                            <CategoryItem
                                key={el.id}
                                title={el.title}
                                body={el.body}
                                imgURL={el.imgURL}
                            />
                        )
                    })}
                </div>
            </div>
        </section>
    )
}