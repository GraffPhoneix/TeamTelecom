import promo1 from './Img/Promo/img_1.png';
import promo2 from './Img/Promo/img_2.png';
import promo3 from './Img/Promo/img_3.png';
import promo4 from './Img/Promo/img_4.png';
import slider1 from './Img/Slider/img_1.png';
import slider2 from './Img/Slider/img_2.png';
import slider3 from './Img/Slider/img_3.jpg';
import slider4 from './Img/Slider/img_4.png';
import img1 from './Img/News/img_1.png';

const dataBase = {
    categories: [
        { id: 1, title: 'Интернет', body: 'Стабильное и быстрое соединение для дома и офиса.', imgURL: promo1 },
        { id: 2, title: 'Мобильная связь', body: 'Надёжная связь и выгодные тарифы для всех.', imgURL: promo2 },
        { id: 3, title: 'TV', body: 'Любимые каналы и фильмы в высоком качестве.', imgURL: promo3 },
        { id: 4, title: 'Фиксированая связь', body: 'Надёжная и фиксированая связь, выгодные тарифы для всех.', imgURL: promo4 }
    ],
    sections: [
        { id: 1, title: 'COSMO', body: 'При подключении онлайн — первый месяц БЕСПЛАТНО.', imgURL: slider1 },
        { id: 2, title: 'Тарифный план BE FREE 4000', body: 'Тарифный план BE FREE 4000', imgURL: slider2 },
        { id: 3, title: 'BE FREE 3500', body: 'Безлимитный интернет', imgURL: slider3 },
        { id: 4, title: 'Sony Smart TV', body: 'Пакеты COSMO / COMBO', imgURL: slider4 }
    ],
    News: [
        { id: 1, title: "Новые тарифные пакеты от Team Telecom Armenia", date: "2025-06-08", body: "Team Telecom Armenia представила новые тарифные пакеты, предлагающие больше интернета и высокую скорость для всех абонентов.", imgURL: img1 },
        { id: 2, title: "5G покрытие в Ереване", date: "2025-06-05", body: "В Ереване запущена сеть 5G от Team Telecom Armenia, обеспечивающая сверхбыстрый интернет и низкую задержку.", imgURL: img1 },
        { id: 3, title: "Team поддерживает IT-образование", date: "2025-06-01", body: "Team Telecom Armenia запустила программу по поддержке IT-образования в школах и университетах.", imgURL: img1 },
        { id: 4, title: "Team модернизирует инфраструктуру в регионах", date: "2025-05-28", body: "Компания расширяет оптоволоконные сети и улучшает связь в марзах Армении, обеспечивая равный доступ к интернету.", imgURL: img1 },
        { id: 5, title: "Team запускает приложение для управления услугами", date: "2025-05-20", body: "Новое мобильное приложение Team позволяет легко управлять своими услугами, оплачивать счета и следить за расходами.", imgURL: img1 },
        { id: 6, title: "Team представила бизнес-решения для компаний", date: "2025-05-15", body: "Team Telecom Armenia предлагает новые корпоративные тарифы и облачные сервисы для малого и среднего бизнеса.", imgURL: img1 },
        { id: 7, title: "Team расширяет Wi-Fi-зоны в общественных местах", date: "2025-05-10", body: "Благодаря Team Telecom Armenia в Ереване и других городах появилось больше бесплатных зон Wi-Fi.", imgURL: img1 },
        { id: 8, title: "Сотрудничество с международными операторами", date: "2025-05-05", body: "Team заключила соглашения с ведущими международными телеком-компаниями для улучшения качества роуминга.", imgURL: img1 },
        { id: 9, title: "Team участвует в мероприятии Digitec 2025", date: "2025-05-01", body: "На крупнейшей тех-выставке страны Team представила новейшие разработки в сфере связи и технологий.", imgURL: img1 }
    ],
    products: [
        { id: 1, title: "iPhone 15 Pro", body: "Новинка с отличными характеристиками", price: "459,000 ֏", imgURL: img1, status: 'none' },
        { id: 2, title: "Samsung Galaxy S24", body: "Высокая производительность", price: "412,000 ֏", imgURL: img1, status: 'none' },
        { id: 3, title: "Xiaomi Redmi Note 13", body: "Оптимальное соотношение цена/качество", price: "189,000 ֏", imgURL: img1, status: 'none' },
        { id: 4, title: "AirPods Pro", body: "Беспроводные наушники с шумоподавлением", price: "99,000 ֏", imgURL: img1, status: 'none' },
        { id: 5, title: "Smart Watch Huawei", body: "Умные часы с мониторингом здоровья", price: "59,000 ֏", imgURL: img1, status: 'none' },
        { id: 6, title: "Sony Bluetooth Speaker", body: "Мощная портативная акустика", price: "75,000 ֏", imgURL: img1, status: 'none' },
        { id: 7, title: "MacBook Air M2", body: "Новый уровень производительности", price: "779,000 ֏", imgURL: img1, status: 'none' },
        { id: 8, title: "ASUS Gaming Laptop", body: "Мощный ноутбук для игр и работы", price: "659,000 ֏", imgURL: img1, status: 'none' },
        { id: 9, title: "JBL Tune 510BT", body: "Беспроводные наушники", price: "34,900 ֏", imgURL: img1, status: 'none' },
        { id: 10, title: "HP Laser Printer", body: "Быстрая и надёжная печать", price: "139,000 ֏", imgURL: img1, status: 'none' },
        { id: 11, title: "Canon DSLR Camera", body: "Профессиональная фотосъёмка", price: "329,000 ֏", imgURL: img1, status: 'none' },
        { id: 12, title: "LG Smart TV 55\"", body: "Ультра HD и webOS", price: "499,000 ֏", imgURL: img1, status: 'none' },
        { id: 13, title: "Xiaomi TV Box", body: "Преврати телевизор в Smart TV", price: "42,000 ֏", imgURL: img1, status: 'none' },
        { id: 14, title: "TP-Link Wi-Fi Router", body: "Скоростной интернет по всему дому", price: "29,900 ֏", imgURL: img1, status: 'none' },
        { id: 15, title: "Lenovo Tablet", body: "Идеален для мультимедиа", price: "179,000 ֏", imgURL: img1, status: 'none' },
        { id: 16, title: "External SSD 1TB", body: "Скоростное хранение данных", price: "89,000 ֏", imgURL: img1, status: 'none' },
        { id: 17, title: "Team Combo Box", body: "Набор устройств с выгодой", price: "349,000 ֏", imgURL: img1, status: 'none' },
        { id: 18, title: "Philips LED Monitor", body: "Чёткое изображение и широкие углы обзора", price: "145,000 ֏", imgURL: img1, status: 'none' },
        { id: 19, title: "Beats Studio Pro", body: "Звук профессионального уровня", price: "125,000 ֏", imgURL: img1, status: 'none' },
        { id: 20, title: "Power Bank 20,000mAh", body: "Надёжная подзарядка в пути", price: "22,900 ֏", imgURL: img1, status: 'none' },
        { id: 21, title: "Smart Light Bulb", body: "Управление светом с телефона", price: "9,900 ֏", imgURL: img1, status: 'none' },
        { id: 22, title: "Mi Band 7", body: "Фитнес-браслет с OLED-дисплеем", price: "18,900 ֏", imgURL: img1, status: 'none' },
        { id: 23, title: "Apple Pencil", body: "Точное рисование и заметки", price: "49,000 ֏", imgURL: img1, status: 'none' },
        { id: 24, title: "Gamepad PS5 DualSense", body: "Беспроводной контроллер нового поколения", price: "45,000 ֏", imgURL: img1, status: 'none' },
        { id: 25, title: "Logitech Wireless Mouse", body: "Комфорт и точность", price: "12,900 ֏", imgURL: img1, status: 'none' },
        { id: 26, title: "Dell USB-C Hub", body: "Расширение возможностей ноутбука", price: "26,000 ֏", imgURL: img1, status: 'none' },
        { id: 27, title: "SanDisk Flash 128GB", body: "Компактная и быстрая флешка", price: "14,000 ֏", imgURL: img1, status: 'none' },
        { id: 28, title: "HDMI Cable 2m", body: "Надёжное соединение без потерь", price: "4,500 ֏", imgURL: img1, status: 'none' },
        { id: 29, title: "Razer Gaming Keyboard", body: "Подсветка и высокая отзывчивость", price: "69,000 ֏", imgURL: img1, status: 'none' },
        { id: 30, title: "Gigabyte AORUS", body: "Высокая производительность", price: "599,000 ֏", imgURL: img1, status: 'none' },
        { id: 31, title: "Honor X9c Smart 256 GB", body: "Умный выбор с отличным соотношением цена–качество", price: "104,900 ֏", imgURL: img1, status: 'none' },
        { id: 32, title: "Kodak Mini 3 Portable Printer", body: "Компактный фотопринтер – идеален для дома", price: "89,900 ֏", imgURL: img1, status: 'none' }
    ]
};

export default dataBase;
