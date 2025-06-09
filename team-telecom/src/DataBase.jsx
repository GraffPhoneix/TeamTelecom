import promo1 from './Img/Promo/img_1.png'
import promo2 from './Img/Promo/img_2.png'
import promo3 from './Img/Promo/img_3.png'
import promo4 from './Img/Promo/img_4.png'
import slider1 from './Img/Slider/img_1.png'
import slider2 from './Img/Slider/img_2.png'
import slider3 from './Img/Slider/img_3.jpg'
import slider4 from './Img/Slider/img_4.png'

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
        },
        {
            id: 3,
            title: 'BE FREE 3500',
            body: 'Безлимитный интернет',
            imgURL: slider3
        },
        {
            id: 4,
            title: 'Sony Smart TV',
            body: 'Пакеты COSMO / COMBO',
            imgURL: slider4
        }
    ],
    News: [
        {
            id: 1,
            title: "Новые тарифные пакеты от Team Telecom Armenia",
            date: "2025-06-08",
            body: "Team Telecom Armenia представила новые тарифные пакеты, предлагающие больше интернета и высокую скорость для всех абонентов."
        },
        {
            id: 2,
            title: "5G покрытие в Ереване",
            date: "2025-06-05",
            body: "В Ереване запущена сеть 5G от Team Telecom Armenia, обеспечивающая сверхбыстрый интернет и низкую задержку."
        },
        {
            id: 3,
            title: "Team поддерживает IT-образование",
            date: "2025-06-01",
            body: "Team Telecom Armenia запустила программу по поддержке IT-образования в школах и университетах."
        },
        {
            id: 4,
            title: "Team модернизирует инфраструктуру в регионах",
            date: "2025-05-28",
            body: "Компания расширяет оптоволоконные сети и улучшает связь в марзах Армении, обеспечивая равный доступ к интернету."
        },
        {
            id: 5,
            title: "Team запускает приложение для управления услугами",
            date: "2025-05-20",
            body: "Новое мобильное приложение Team позволяет легко управлять своими услугами, оплачивать счета и следить за расходами."
        },
        {
            id: 6,
            title: "Team представила бизнес-решения для компаний",
            date: "2025-05-15",
            body: "Team Telecom Armenia предлагает новые корпоративные тарифы и облачные сервисы для малого и среднего бизнеса."
        },
        {
            id: 7,
            title: "Team расширяет Wi-Fi-зоны в общественных местах",
            date: "2025-05-10",
            body: "Благодаря Team Telecom Armenia в Ереване и других городах появилось больше бесплатных зон Wi-Fi."
        },
        {
            id: 8,
            title: "Сотрудничество с международными операторами",
            date: "2025-05-05",
            body: "Team заключила соглашения с ведущими международными телеком-компаниями для улучшения качества роуминга."
        },
        {
            id: 9,
            title: "Team участвует в мероприятии Digitec 2025",
            date: "2025-05-01",
            body: "На крупнейшей тех-выставке страны Team представила новейшие разработки в сфере связи и технологий."
        },
        {
            id: 10,
            title: "Team снижает цены на международные звонки",
            date: "2025-04-28",
            body: "Компания объявила о снижении тарифов на международные звонки, делая связь с зарубежьем доступнее."
        }
    ]
}
export default dataBase
