import CategoryItem from './Category-Item'
import promo1 from '../Img/Promo/img_1.png'
import promo2 from '../Img/Promo/img_2.png'
import promo3 from '../Img/Promo/img_3.png'
import promo4 from '../Img/Promo/img_4.png'

const categories = [
    {
        id: 1,
        title: 'Интернет',
        body: 'Стабильное и быстрое соединение для дома и офиса.',
        imgURL: promo1
    },
    {
        id: 2,
        title: 'Мобильная связь',
        body: 'Надёжная связь и выгодные тарифы для всех.',
        imgURL: promo2
    },
    {
        id: 3,
        title: 'TV',
        body: 'Любимые каналы и фильмы в высоком качестве.',
        imgURL: promo3
    },
    {
        id: 4,
        title: 'Фиксированая связь',
        body: 'Надёжная и фиксированая связь, выгодные тарифы для всех.',
        imgURL: promo4
    }
]
export default function Category() {
    return (
        <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-10">Наши услуги</h2>
                <div className="grid md:grid-cols-2 gap-8">{categories.map(el => <CategoryItem key={el.id} title={el.title} body={el.body} imgURL={el.imgURL} />)}</div>
            </div>
        </section>
    )
}