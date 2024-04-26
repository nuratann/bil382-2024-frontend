import { create } from "zustand";
import { persist, devtools } from 'zustand/middleware'
import SearchService from "@/api/SearchService";
import { Product } from "@/types/Product";

type SearchStore = {
    query: string,
    history: string[],
    suggestions: string[],
    choosenCat: string,
    isChoosen: boolean,
    results: Product[],
    recomendations: Product[],
    updateQuery: (new_query: string) => void,
    updateChoosen: (category: string) => void,
    updateHistory: (query: string) => void,
    deleteHistory: (index: number) => void,
    getSuggestions: (query: string) => void,
    search: (query: string) => void,
    getRecomendations: (query: string) => void,
    reset: () => void
}

const useSearchStore = create<SearchStore>()(
    devtools(
        persist(
            (set, get) => ({
                query: '',
                history: ['ryzen 7840hs', 'xiaomi redmi 12 pro'],
                suggestions: [],
                choosenCat: 'Везде',
                isChoosen: false,
                results: [],
                recomendations: [
                  {
                    "id": 0,
                    "img": "https://ir-3.ozone.ru/s3/multimedia-b/wc1000/6064306271.jpg",
                    "title": "Кофе жареный зерновой JAMADJI 1 кг",
                    "description": "Кофе хареный зерновой JAMADJI 1 кг - отличный подарок для мужчин и женщин на 14 и 23 февраля...",
                    "specs": {
                      "type": "смартфон",
                      "chip": "A15 Bionic",
                      "display": "Retina XDR 6,1 дюйма",
                      "camera": "тройная камера 12 Мп"
                    },
                    "rating": 4,
                    "category": "Кофе и чай",
                    "orders": 5000,
                    "sells": ["скидки недели"],
                    "quantity": 100,
                    "price": 3554,
                    "old_price": 3600,
                    "seller": 'OOO "Фаворит"',
                    "is_premium_seller": true,
                    "reviews": 1200,
                    "delivery_date": "05-07-2024"
                  },
                    {
                      "id": 1,
                      "img": "https://login.kg/image/cache/catalog/new/Phones/Apple/IPhone%2013/Pro/1-500x400.jpg",
                      "title": "Смартфон Apple iPhone 13",
                      "description": "Смартфон Apple iPhone 13 – это новейшая модель от компании Apple, представленная в 2023 году. Устройство оснащено чипом A15 Bionic, который обеспечивает высокую производительность и эффективную работу. Дисплей Retina XDR с диагональю 6,1 дюйма позволяет наслаждаться яркими и четкими изображениями. Камера с тройным объективом делает превосходные фотографии и видео в 4K. iPhone 13 поддерживает 5G, Face ID для безопасного разблокирования и работает на последней версии iOS.",
                      "specs": {
                        "type": "смартфон",
                        "chip": "A15 Bionic",
                        "display": "Retina XDR 6,1 дюйма",
                        "camera": "тройная камера 12 Мп"
                      },
                      "rating": 4.8,
                      "category": "Электроника",
                      "orders": 5000,
                      "sells": ["скидки недели"],
                      "quantity": 100,
                      "price": 799,
                      "old_price": 899,
                      "seller": "apple_store",
                      "is_premium_seller": true,
                      "reviews": 1200,
                      "delivery_date": "05-07-2024"
                    },
                    {
                      "id": 2,
                      "img": "https://object.pscloud.io/cms/cms/Photo/img_0_62_2249_7_6.png",
                      "title": "Ноутбук Lenovo IdeaPad 5",
                      "description": "Ноутбук Lenovo IdeaPad 5 – отличное решение для работы и учебы. Устройство оснащено процессором AMD Ryzen 5, который обеспечивает быструю и плавную работу приложений. 15,6-дюймовый дисплей с разрешением Full HD обеспечивает четкое изображение. SSD-накопитель объемом 512 ГБ обеспечивает быструю загрузку системы и приложений. Встроенная камера и микрофон делают ноутбук удобным для видеозвонков. Операционная система Windows 11 предустановлена на устройстве.",
                      "specs": {
                        "type": "ноутбук",
                        "processor": "AMD Ryzen 5",
                        "display": "15,6 дюйма Full HD",
                        "storage": "SSD 512 ГБ"
                      },
                      "rating": 4.5,
                      "category": "Компьютеры",
                      "orders": 3000,
                      "sells": ["скидки недели"],
                      "quantity": 200,
                      "price": 699,
                      "old_price": 799,
                      "seller": "lenovo_official",
                      "is_premium_seller": false,
                      "reviews": 900,
                      "delivery_date": "10-07-2024"
                    },
                    {
                      "id": 3,
                      "img": "https://delonghi-shop.com.ua/modules/images/delonghi_magnifica_esam_4200s_a.jpg",
                      "title": "Кофемашина De'Longhi Magnifica",
                      "description": "Кофемашина De'Longhi Magnifica – это автоматическая кофеварка, идеально подходящая для приготовления ароматного и насыщенного кофе. Устройство оснащено встроенным молочным паром, который позволяет приготовить капучино или латте. Емкость для зерен кофе составляет 250 грамм, что обеспечивает продолжительное время работы без дозаправки. Кофемашина имеет регулируемую настройку степени помола и интуитивно понятный интерфейс управления.",
                      "specs": {
                        "type": "кофемашина",
                        "grinder": "регулируемый помол",
                        "capacity": "250 г зерен",
                        "milk_frother": "встроенный"
                      },
                      "rating": 4.9,
                      "category": "Бытовая техника",
                      "orders": 2000,
                      "sells": ["скидки недели"],
                      "quantity": 50,
                      "price": 599,
                      "old_price": 699,
                      "seller": "delonghi_official",
                      "is_premium_seller": true,
                      "reviews": 750,
                      "delivery_date": "15-07-2024"
                    },
                    {
                      "id": 4,
                      "img": "https://login.kg/image/cache/catalog/new/Aksessuary/Samsung/Smart%20Watch/SM-R860/100-1200x800.jpg",
                      "title": "Смарт-часы Samsung Galaxy Watch 4",
                      "description": "Смарт-часы Samsung Galaxy Watch 4 – это стильные и функциональные умные часы с круглым AMOLED-дисплеем. Устройство оснащено множеством трекеров активности, включая пульс, сон и уровень стресса. Galaxy Watch 4 совместим с множеством приложений и устройств на платформе Android. Встроенный GPS-модуль позволяет отслеживать маршруты при тренировках. Смарт-часы поддерживают бесконтактные платежи и работают на базе операционной системы Wear OS от Google.",
                      "specs": {
                        "type": "смарт-часы",
                        "display": "AMOLED",
                        "sensors": "пульс, сон, стресс",
                        "compatibility": "Android"
                      },
                      "rating": 4.7,
                      "category": "Электроника",
                      "orders": 4000,
                      "sells": ["скидки недели"],
                      "quantity": 150,
                      "price": 299,
                      "old_price": 349,
                      "seller": "samsung_official",
                      "is_premium_seller": false,
                      "reviews": 1100,
                      "delivery_date": "20-07-2024"
                    },
                    {
                      "id": 5,
                      "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1Vp1Kq8JjsxTaq1CwY4voyrrb6-21m5lqkLJhTO4vOQ&s",
                      "title": "Умный телевизор LG OLED C1",
                      "description": "Умный телевизор LG OLED C1 – это высококачественный телевизор с диагональю экрана 55 дюймов и разрешением 4K. Телевизор использует технологию OLED для достижения глубокого черного цвета и ярких оттенков. Он оснащен процессором α9 Gen4 AI, который обеспечивает четкое и детализированное изображение. Умный телевизор работает на операционной системе webOS и поддерживает голосовое управление. Также устройство оснащено множеством приложений для стримингового контента и игр.",
                      "specs": {
                        "type": "телевизор",
                        "display": "OLED 55 дюймов 4K",
                        "processor": "α9 Gen4 AI",
                        "smart_features": "webOS, голосовое управление"
                      },
                      "rating": 4.9,
                      "category": "Электроника",
                      "orders": 2500,
                      "sells": ["скидки недели"],
                      "quantity": 100,
                      "price": 1499,
                      "old_price": 1699,
                      "seller": "lg_store",
                      "is_premium_seller": true,
                      "reviews": 850,
                      "delivery_date": "25-07-2024"
                    },
                    {
                      "id": 6,
                      "img": "https://happy.kg/storage/images/dbMY7FdWsQpf5yqpoSuLsQeA1LTFhDEnsG4a7R67.webp",
                      "title": "Беспроводные наушники Sony WH-1000XM4",
                      "description": "Беспроводные наушники Sony WH-1000XM4 – это премиальные наушники с активным шумоподавлением. Устройство обеспечивает высококачественное звучание благодаря технологии LDAC и высоким драйверам. Наушники поддерживают множество аудио кодеков и совместимы с приложением Sony Headphones Connect для настройки звука. Автономность работы до 30 часов позволяет наслаждаться музыкой в течение всего дня. Встроенный микрофон и кнопки управления наушниками облегчают использование наушников во время звонков.",
                      "specs": {
                        "type": "наушники",
                        "sound": "LDAC, высокие драйверы",
                        "battery_life": "до 30 часов",
                        "connectivity": "Bluetooth"
                      },
                      "rating": 4.8,
                      "category": "Аудио и видео",
                      "orders": 3500,
                      "sells": ["скидки недели"],
                      "quantity": 120,
                      "price": 299,
                      "old_price": 349,
                      "seller": "sony_official",
                      "is_premium_seller": false,
                      "reviews": 950,
                      "delivery_date": "30-07-2024"
                    },
                    {
                      "id": 7,
                      "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_teefk43msBqG_evHJn3kNaZO4YUSYo6FzSWuqZ7uXg&s",
                      "title": "Каркасный рюкзак The North Face Borealis",
                      "description": "Каркасный рюкзак The North Face Borealis – это удобный и практичный рюкзак для активного отдыха и городской жизни. Рюкзак оснащен отделением для ноутбука до 15 дюймов и множеством карманов для хранения мелочей. Спинка и лямки рюкзака обеспечивают комфорт при носке благодаря вентилируемой сетчатой ткани. Водоотталкивающее покрытие материала защищает вещи от непогоды. Рюкзак имеет рефлективные элементы для безопасности в темное время суток.",
                      "specs": {
                        "type": "рюкзак",
                        "laptop_compartment": "до 15 дюймов",
                        "pockets": "множество карманов",
                        "material": "водоотталкивающий"
                      },
                      "rating": 4.7,
                      "category": "Спорт и отдых",
                      "orders": 1500,
                      "sells": ["скидки недели"],
                      "quantity": 80,
                      "price": 99,
                      "old_price": 129,
                      "seller": "northface_official",
                      "is_premium_seller": true,
                      "reviews": 600,
                      "delivery_date": "05-08-2024"
                    },
                    {
                      "id": 8,
                      "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQrbwEvJRpX75tW0cw8bKb0Te-cSUW950Gtiv0SMpQ3w&s",
                      "title": "Электросамокат Xiaomi Mi Electric Scooter Pro 2",
                      "description": "Электросамокат Xiaomi Mi Electric Scooter Pro 2 – это современное и экологичное транспортное средство для городской езды. Скорость до 25 км/ч и дальность хода до 45 км обеспечивают быстрые и долгие поездки. Электросамокат оснащен ярким передним и задним светодиодными фонарями для безопасного движения в темное время суток. Устройство складывается и легко переносится благодаря компактному дизайну. Электросамокат совместим с приложением для мониторинга состояния батареи и настроек.",
                      "specs": {
                        "type": "электросамокат",
                        "speed": "до 25 км/ч",
                        "range": "до 45 км",
                        "lights": "передние и задние LED"
                      },
                      "rating": 4.6,
                      "category": "Транспорт",
                      "orders": 2800,
                      "sells": ["скидки недели"],
                      "quantity": 70,
                      "price": 549,
                      "old_price": 599,
                      "seller": "xiaomi_official",
                      "is_premium_seller": false,
                      "reviews": 500,
                      "delivery_date": "10-08-2024"
                    },
                    {
                      "id": 9,
                      "img": "https://boschcenter.kz/image/cache/catalog/products/MMBV625M/blender-bosch-MMBV625M-04-447x476.jpg",
                      "title": "Блендер Bosch VitaMaxx",
                      "description": "Блендер Bosch VitaMaxx – это мощный и надежный кухонный помощник для приготовления смузи, коктейлей и других блюд. Устройство оснащено двигателем мощностью 1000 Вт, который легко справляется с измельчением льда и твердых ингредиентов. Стеклянная кувшин с объемом 1,5 л идеально подходит для приготовления больших порций. Блендер имеет несколько режимов работы и функцию пульсации для получения идеальной консистенции.",
                      "specs": {
                        "type": "блендер",
                        "power": "1000 Вт",
                        "jar": "стеклянный 1,5 л",
                        "functions": "несколько режимов, пульсация"
                      },
                      "rating": 4.8,
                      "category": "Бытовая техника",
                      "orders": 2100,
                      "sells": ["скидки недели"],
                      "quantity": 100,
                      "price": 149,
                      "old_price": 179,
                      "seller": "bosch_official",
                      "is_premium_seller": true,
                      "reviews": 650,
                      "delivery_date": "15-08-2024"
                    },
                    {
                      "id": 10,
                      "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRM7OIRa1M2pUhbqAXtlkjs54MLz8S3bCBXTq3aWcbEkQ&s",
                      "title": "Фитнес-браслет Fitbit Charge 5",
                      "description": "Фитнес-браслет Fitbit Charge 5 – это стильный и функциональный гаджет для мониторинга физической активности и здоровья. Браслет отслеживает шаги, расстояние, калории, частоту сердечных сокращений и уровень кислорода в крови. Устройство оснащено большим AMOLED-дисплеем и сенсорной панелью для удобного управления. Водонепроницаемый корпус позволяет использовать браслет в душе и при плавании. Батарея обеспечивает до 7 дней автономной работы без подзарядки.",
                      "specs": {
                        "type": "фитнес-браслет",
                        "tracking": "шаги, калории, пульс",
                        "display": "AMOLED",
                        "battery_life": "до 7 дней"
                      },
                      "rating": 4.7,
                      "category": "Фитнес и спорт",
                      "orders": 3200,
                      "sells": ["скидки недели"],
                      "quantity": 130,
                      "price": 169,
                      "old_price": 199,
                      "seller": "fitbit_official",
                      "is_premium_seller": false,
                      "reviews": 700,
                      "delivery_date": "20-08-2024"
                    },
                    {
                      "id": 11,
                      "img": "https://china-review.com.ua/uploads/posts/2013-04/1366298573_xyz-x1.jpg",
                      "title": "Смартфон XYZ",
                      "description": "Смартфон XYZ - это ультрасовременное устройство с передовыми технологиями. Он оснащен мощным процессором, большим дисплеем, и высококачественной камерой. Смартфон XYZ предлагает выдающуюся производительность и непревзойденный дизайн.",
                      "specs": {
                        "type": "смартфон",
                        "screen_size": "6.5 дюймов",
                        "processor": "Snapdragon 888",
                        "camera": "108 Мп"
                      },
                      "rating": 4,
                      "category": "Электроника",
                      "orders": 5000,
                      "sells": ["скидки недели"],
                      "quantity": 50,
                      "price": 25000,
                      "old_price": 28000,
                      "seller": "seller123",
                      "is_premium_seller": true,
                      "reviews": 120,
                      "delivery_date": "05-07-2024"
                    },
                    {
                      "id": 12,
                      "img": "https://img.freepik.com/premium-photo/online-education-concept-modern-laptop-with-abc-toy-cubes-on-a-white-background_476612-10985.jpg",
                      "title": "Ноутбук ABC",
                      "description": "Ноутбук ABC - это идеальное решение для работы и развлечений. Он имеет быстрый процессор, высококачественный экран и продолжительное время работы от аккумулятора. Ноутбук ABC обеспечивает отличную производительность и удобство использования.",
                      "specs": {
                        "type": "ноутбук",
                        "processor": "Intel Core i7",
                        "ram": "16 ГБ",
                        "storage": "512 ГБ SSD"
                      },
                      "rating": 4.5,
                      "category": "Компьютеры",
                      "orders": 3000,
                      "sells": ["скидки недели"],
                      "quantity": 30,
                      "price": 60000,
                      "old_price": 65000,
                      "seller": "seller456",
                      "is_premium_seller": false,
                      "reviews": 90,
                      "delivery_date": "10-07-2024"
                    },
                    {
                      "id": 13,
                      "img": "https://ir.ozone.ru/s3/multimedia-a/c1000/6807017134.jpg",
                      "title": "Фитнес-браслет DEF",
                      "description": "Фитнес-браслет DEF - это стильное и функциональное устройство для отслеживания физической активности и состояния здоровья. Он обеспечивает точный мониторинг сердечного ритма, шагов, и сна. Фитнес-браслет DEF помогает поддерживать активный и здоровый образ жизни.",
                      "specs": {
                        "type": "фитнес-браслет",
                        "display": "Цветной OLED",
                        "battery_life": "7 дней",
                        "water_resistance": "IP68"
                      },
                      "rating": 4.2,
                      "category": "Спорт и отдых",
                      "orders": 8000,
                      "sells": ["скидки недели"],
                      "quantity": 100,
                      "price": 5000,
                      "old_price": 5500,
                      "seller": "seller789",
                      "is_premium_seller": true,
                      "reviews": 150,
                      "delivery_date": "15-07-2024"
                    },
                    {
                      "id": 14,
                      "img": "https://www.zigmund-shtain.ru/netcat_files/multifile/3009/zacm_2000_10.jpg",
                      "title": "Кофемашина GHI",
                      "description": "Кофемашина GHI - это идеальное решение для любителей кофе. Она предлагает автоматическое приготовление различных видов кофе с превосходным вкусом. Кофемашина GHI обеспечивает быструю и удобную подачу напитков.",
                      "specs": {
                        "type": "кофемашина",
                        "coffee_types": "эспрессо, латте, капучино",
                        "water_tank_capacity": "1.5 л",
                        "power": "1500 Вт"
                      },
                      "rating": 4.8,
                      "category": "Дом и сад",
                      "orders": 4000,
                      "sells": ["скидки недели"],
                      "quantity": 20,
                      "price": 20000,
                      "old_price": 22000,
                      "seller": "seller101",
                      "is_premium_seller": false,
                      "reviews": 80,
                      "delivery_date": "20-07-2024"
                    },
                    {
                      "id": 15,
                      "img": "https://content1.rozetka.com.ua/goods/images/big/298368649.jpg",
                      "title": "Наушники JKL",
                      "description": "Наушники JKL - это стильное и комфортное устройство для прослушивания музыки. Они обеспечивают высококачественное звучание и удобство при использовании. Наушники JKL подходят для активного отдыха и повседневного использования.",
                      "specs": {
                        "type": "наушники",
                        "connection": "беспроводное",
                        "battery_life": "20 часов",
                        "noise_cancellation": "активное"
                      },
                      "rating": 4.7,
                      "category": "Электроника",
                      "orders": 6000,
                      "sells": ["скидки недели"],
                      "quantity": 40,
                      "price": 10000,
                      "old_price": 11000,
                      "seller": "seller112",
                      "is_premium_seller": true,
                      "reviews": 100,
                      "delivery_date": "25-07-2024"
                    },
                    {
                      "id": 16,
                      "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0KtMUI0iTZ7s7vB-_0k7qQJOt0c_ZBSOEICk9-uso-w&s",
                      "title": "Телевизор MNO",
                      "description": "Телевизор MNO - это современное устройство с высоким качеством изображения и звука. Он предлагает большой дисплей с яркими и насыщенными цветами. Телевизор MNO идеально подходит для домашнего кинотеатра и просмотра любимых фильмов и сериалов.",
                      "specs": {
                        "type": "телевизор",
                        "screen_size": "55 дюймов",
                        "resolution": "4K UHD",
                        "smart_features": "Wi-Fi, Smart TV"
                      },
                      "rating": 4.6,
                      "category": "ТВ и аудио",
                      "orders": 3500,
                      "sells": ["скидки недели"],
                      "quantity": 25,
                      "price": 45000,
                      "old_price": 48000,
                      "seller": "seller131",
                      "is_premium_seller": false,
                      "reviews": 85,
                      "delivery_date": "30-07-2024"
                    },
                    {
                      "id": 17,
                      "img": "https://m.media-amazon.com/images/I/61g3Lzt7sWL._AC_UF1000,1000_QL80_.jpg",
                      "title": "Книга PQR",
                      "description": "Книга PQR - это увлекательное литературное произведение, которое погружает читателя в мир приключений и фантазии. Она написана талантливым автором и предлагает уникальный сюжет и глубокие персонажи. Книга PQR идеально подходит для любителей чтения.",
                      "specs": {
                        "type": "книга",
                        "genre": "фэнтези",
                        "author": "Александр Иванов",
                        "pages": "400"
                      },
                      "rating": 4.9,
                      "category": "Книги",
                      "orders": 2000,
                      "sells": ["скидки недели"],
                      "quantity": 100,
                      "price": 800,
                      "old_price": 900,
                      "seller": "seller156",
                      "is_premium_seller": true,
                      "reviews": 95,
                      "delivery_date": "05-08-2024"
                    },
                    {
                      "id": 18,
                      "img": "https://www.gadget.kg/upload/catalog/64/item_6355/56e13c913b4379f13ec809a67a619981.jpg",
                      "title": "Кофеварка STU",
                      "description": "Кофеварка STU - это прекрасное устройство для приготовления вкусного и ароматного кофе. Она обладает стильным дизайном и простотой в использовании. Кофеварка STU позволяет приготовить до 12 чашек кофе за один раз.",
                      "specs": {
                        "type": "кофеварка",
                        "capacity": "1.5 л",
                        "coffee_types": "молотый, зерновой",
                        "power": "1000 Вт"
                      },
                      "rating": 4.4,
                      "category": "Дом и сад",
                      "orders": 4500,
                      "sells": ["скидки недели"],
                      "quantity": 35,
                      "price": 3000,
                      "old_price": 3200,
                      "seller": "seller179",
                      "is_premium_seller": false,
                      "reviews": 75,
                      "delivery_date": "10-08-2024"
                    },
                    {
                      "id": 19,
                      "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNhXwD1je3ZOtB_0m-yvvPe1TZ8wuh1KzV8-aO_DaOrA&s",
                      "title": "Спортивный рюкзак VWX",
                      "description": "Спортивный рюкзак VWX - это практичное и функциональное средство для переноски вещей. Он имеет множество отделений и карманов для удобного хранения спортивной экипировки и аксессуаров. Спортивный рюкзак VWX идеально подходит для тренировок и путешествий.",
                      "specs": {
                        "type": "рюкзак",
                        "material": "нейлон",
                        "capacity": "30 л",
                        "features": "гидроизоляция, вентиляция"
                      },
                      "rating": 4.3,
                      "category": "Спорт и отдых",
                      "orders": 7000,
                      "sells": ["скидки недели"],
                      "quantity": 50,
                      "price": 1500,
                      "old_price": 1600,
                      "seller": "seller182",
                      "is_premium_seller": true,
                      "reviews": 110,
                      "delivery_date": "15-08-2024"
                    },
                    {
                      "id": 20,
                      "img": "https://submarinashop.ru/assets/images/products/5510/ai2008-50yza-000-0-maurice-lacroix-aikon-tide-benzilla-3.jpg",
                      "title": "Смарт-часы YZA",
                      "description": "Смарт-часы YZA - это современное и стильное устройство для отслеживания времени и активности. Они предлагают множество функций, включая мониторинг сердечного ритма, уведомления о сообщениях и звонках, и управление музыкой. Смарт-часы YZA помогут вам быть в курсе всего важного и оставаться активным.",
                      "specs": {
                        "type": "смарт-часы",
                        "display": "AMOLED",
                        "battery_life": "5 дней",
                        "water_resistance": "IP67"
                      },
                      "rating": 4.7,
                      "category": "Электроника",
                      "orders": 5500,
                      "sells": ["скидки недели"],
                      "quantity": 45,
                      "price": 7000,
                      "old_price": 7500,
                      "seller": "seller193",
                      "is_premium_seller": false,
                      "reviews": 95,
                      "delivery_date": "20-08-2024"
                    }
                  ],
                updateQuery: (new_query) => set({query:new_query}),
                updateChoosen: (category) => {
                    set({choosenCat:category})
                    category==='Везде'?set({isChoosen:false}):set({isChoosen:true});                    
                },
                updateHistory: (query) => {
                    set((state) => {
                        if(state.history.findIndex(item => item === query) === -1){
                            return { history: [query, ...state.history] };
                        }else{
                            return { history: state.history };}
                    })                        
                },
                deleteHistory: (index)=>{
                    set((state) => {
                        if (index === -1) {return { history: [] };
                    } else {
                      const updatedHistory = [...state.history];
                      updatedHistory.splice(index, 1);
                      return { history: updatedHistory };
                    }
                  })},
                getSuggestions: async (query) => {
                    const suggestions = await SearchService.getSuggestions(query);
                    set(()=>({suggestions:suggestions}));
                },
                search: async (query) => {
                    const results = await SearchService.search(query);
                    set(()=>({results:results}));
                },
                getRecomendations: async (query) => {
                    const results = await SearchService.getRecomendations();
                    set(()=>({recomendations:results}));
                },
                reset: () => set(()=>({history: []})),
            }),
            {
                name: 'searchStore'
            },
        )
    ),
)

export default useSearchStore