import promo1 from './Img/Promo/img_1.png'
import promo2 from './Img/Promo/img_2.png'
import promo3 from './Img/Promo/img_3.png'
import promo4 from './Img/Promo/img_4.png'
import slider1 from './Img/Slider/img_1.png'
import slider2 from './Img/Slider/img_2.png'

const dataBase = {
    categories: [
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
    ],
    sections: [
        {
            id: 1,
            title: 'COSMO',
            body: 'При подключении онлайн — первый месяц БЕСПЛАТНО.',
            imgURL: slider1
        },
        {
            id: 2,
            title: 'Тарифный план BE FREE 4000',
            body: 'Тарифный план BE FREE 4000',
            imgURL: slider2
        }
    ]
}

export default dataBase
