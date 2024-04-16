
import { ElectronicsIcon, ClothingIcon, ShoesIcon, HousingAndgardening, ChildItems, HealthBeauty, BytovayaTech, Remont, Sport, Food, Pharmacy, Zootovar, Books, Tourism, Accessouars, Mebel, GameConsole, Schoolsupplies, Hygen, Auto } from './CatalogIcons';

export const categories = [
    {
        name: "Электроника",
        items: [{
            subcategories: [{
                name: "Смартфоны", links: [
                    { text: "Аксессуары для смартфонов и телефонов", url: "/televisions" },
                    { text: "Фитнес-браслеты", url: "/more-televisions" },
                    { text: "Ремешки для смарт-часов и фитнес-браслетов", url: "/more-televisions" },
                    { text: "Аксессуары для смарт-часов и фитнес барслетов", url: "/more-televisions" },
                    { text: "Мобильные телефоны", url: "/more-televisions" },
                ]
            },
            {
                name: "Компьютеры", links: [
                    { text: "Мониторы", url: "/televisions" },
                    { text: "Системные блоки", url: "/televisions" },
                    { text: "Моноблоки", url: "/televisions" },
                    { text: "Аксессуары", url: "/televisions" },
                    { text: "Аксессуары для смарт-часов и фитнес барслетов", url: "/more-televisions" },
                    { text: "Периферия", url: "/televisions" },
                    { text: "Сетевое оборудование", url: "/televisions" },
                    { text: "Неттопы и Мини ПК", url: "/more-televisions" }
                ]
            }, {
                name: "Умный дом", links: [
                    { text: "Управление умным домом", url: "/televisions" },
                    { text: "Комплекты умного дома", url: "/televisions" },
                    { text: "Умные розетки", url: "/televisions" },
                    { text: "Электрокарнизы", url: "/televisions" },
                    { text: "Климатические станции", url: "/televisions" },
                    { text: "Аксессуары", url: "/televisions" },
                    { text: "Датчики для умного дома", url: "/more-televisions" }
                ]
            }, {
                name: "Ноутбуки, планшеты, электронные книги", links: [
                    { text: "Ноутбуки", url: "/televisions" },
                    { text: "Планшеты", url: "/televisions" },
                    { text: "Электронные книги", url: "/televisions" },
                    { text: "Игровые ноутбуки", url: "/televisions" },
                    { text: "Графические планшеты", url: "/televisions" },
                    { text: "Чехлы и подставки", url: "/televisions" },
                    { text: "Стилусы", url: "/televisions" },
                    { text: "Запчасти", url: "/televisions" },
                    { text: "Зарядные устройства", url: "/more-televisions" }
                ]
            }, {
                name: "Фото и видеокамеры", links: [
                    { text: "Экшн-камеры", url: "/televisions" },
                    { text: "Видеокамеры", url: "/televisions" },
                    { text: "Зеркальные фотоаппараты", url: "/televisions" },
                    { text: "Беззеркальные фотоаппараты", url: "/televisions" },
                    { text: "Обьективы", url: "/televisions" },
                    { text: "Фотофоны", url: "/televisions" },
                    { text: "Цифровые фоторамки", url: "/more-televisions" }
                ]
            }, {
                name: "Офисная техника", links: [
                    { text: "Системные блоки", url: "/televisions" },
                    { text: "Мониторы", url: "/televisions" },
                    { text: "МФУ", url: "/televisions" },
                    { text: "Принтеры", url: "/televisions" },
                    { text: "Картриджи и расходные материалы", url: "/televisions" },
                    { text: "Ноутбуки", url: "/televisions" },
                    { text: "Камерынаблюдения", url: "/televisions" },
                    { text: "Сканеры", url: "/more-televisions" }
                ]
            },
            {
                name: "Аксессуары для электротехниики", links: [
                    { text: "Кабели и проводники", url: "/televisions" },
                    { text: "Внешние аккумуляторы", url: "/televisions" },
                    { text: "Батарейки", url: "/televisions" },
                    { text: "Принтеры", url: "/televisions" },
                    { text: "Картриджи и расходные материалы", url: "/televisions" },
                    { text: "Ноутбуки", url: "/televisions" },
                    { text: "Камерынаблюдения", url: "/televisions" },
                    { text: "Сканеры", url: "/more-televisions" }
                ]
            },

            {
                name: "Комплектуещие для ПК", links: [

                    { text: "Системные блоки", url: "/televisions" },
                    { text: "Оперативная память", url: "/televisions" },
                    { text: "Накопители", url: "/televisions" },
                    { text: "Мониторы", url: "/televisions" },
                    { text: "МФУ", url: "/televisions" },
                    { text: "Принтеры", url: "/televisions" },
                    { text: "Картриджи и расходные материалы", url: "/televisions" },
                    { text: "Ноутбуки", url: "/televisions" },
                    { text: "Камерынаблюдения", url: "/televisions" },
                    { text: "Сканеры", url: "/more-televisions" }
                ]
            },

            ]
        }],
        icon: <ElectronicsIcon />
    },


    {
        name: "Одежда",
        items: [{
            subcategories: [{
                name: "Телевизоры и видеотехника", links: [
                    { text: "Системные блоки", url: "/televisions" },
                    { text: "Мониторы", url: "/televisions" },
                    { text: "МФУ", url: "/televisions" },
                    { text: "Принтеры", url: "/televisions" },
                    { text: "Картриджи и расходные материалы", url: "/televisions" },
                    { text: "Ноутбуки", url: "/televisions" },
                    { text: "Камерынаблюдения", url: "/televisions" },
                    { text: "Сканеры", url: "/more-televisions" }
                ]
            },
            {
                name: "Компьютеры", links: [
                    { text: "Мониторы", url: "/televisions" },
                    { text: "Системные блоки", url: "/televisions" },
                    { text: "Моноблоки", url: "/televisions" },
                    { text: "Аксессуары", url: "/televisions" },
                    { text: "Аксессуары для смарт-часов и фитнес барслетов", url: "/more-televisions" },
                    { text: "Периферия", url: "/televisions" },
                    { text: "Сетевое оборудование", url: "/televisions" },
                    { text: "Неттопы и Мини ПК", url: "/more-televisions" }
                ]
            }, {
                name: "Умный дом", links: [
                    { text: "Управление умным домом", url: "/televisions" },
                    { text: "Комплекты умного дома", url: "/televisions" },
                    { text: "Умные розетки", url: "/televisions" },
                    { text: "Электрокарнизы", url: "/televisions" },
                    { text: "Климатические станции", url: "/televisions" },
                    { text: "Аксессуары", url: "/televisions" },
                    { text: "Датчики для умного дома", url: "/more-televisions" }
                ]
            }, {
                name: "Ноутбуки, планшеты, электронные книги", links: [
                    { text: "Ноутбуки", url: "/televisions" },
                    { text: "Планшеты", url: "/televisions" },
                    { text: "Электронные книги", url: "/televisions" },
                    { text: "Игровые ноутбуки", url: "/televisions" },
                    { text: "Графические планшеты", url: "/televisions" },
                    { text: "Чехлы и подставки", url: "/televisions" },
                    { text: "Стилусы", url: "/televisions" },
                    { text: "Запчасти", url: "/televisions" },
                    { text: "Зарядные устройства", url: "/more-televisions" }
                ]
            }, {
                name: "Фото и видеокамеры", links: [
                    { text: "Экшн-камеры", url: "/televisions" },
                    { text: "Видеокамеры", url: "/televisions" },
                    { text: "Зеркальные фотоаппараты", url: "/televisions" },
                    { text: "Беззеркальные фотоаппараты", url: "/televisions" },
                    { text: "Обьективы", url: "/televisions" },
                    { text: "Фотофоны", url: "/televisions" },
                    { text: "Цифровые фоторамки", url: "/more-televisions" }
                ]
            }, {
                name: "Офисная техника", links: [
                    { text: "Системные блоки", url: "/televisions" },
                    { text: "Мониторы", url: "/televisions" },
                    { text: "МФУ", url: "/televisions" },
                    { text: "Принтеры", url: "/televisions" },
                    { text: "Картриджи и расходные материалы", url: "/televisions" },
                    { text: "Ноутбуки", url: "/televisions" },
                    { text: "Камерынаблюдения", url: "/televisions" },
                    { text: "Сканеры", url: "/more-televisions" }
                ]
            },
            {
                name: "Аксессуары для электротехниики", links: [
                    { text: "Кабели и проводники", url: "/televisions" },
                    { text: "Внешние аккумуляторы", url: "/televisions" },
                    { text: "Батарейки", url: "/televisions" },
                    { text: "Принтеры", url: "/televisions" },
                    { text: "Картриджи и расходные материалы", url: "/televisions" },
                    { text: "Ноутбуки", url: "/televisions" },
                    { text: "Камерынаблюдения", url: "/televisions" },
                    { text: "Сканеры", url: "/more-televisions" }
                ]
            },

            {
                name: "Комплектуещие для ПК", links: [

                    { text: "Системные блоки", url: "/televisions" },
                    { text: "Оперативная память", url: "/televisions" },
                    { text: "Накопители", url: "/televisions" },
                    { text: "Мониторы", url: "/televisions" },
                    { text: "МФУ", url: "/televisions" },
                    { text: "Принтеры", url: "/televisions" },
                    { text: "Картриджи и расходные материалы", url: "/televisions" },
                    { text: "Ноутбуки", url: "/televisions" },
                    { text: "Камерынаблюдения", url: "/televisions" },
                    { text: "Сканеры", url: "/more-televisions" }
                ]
            },


            ]
        }],
        icon: <ClothingIcon />
    },

    {
        name: "Обувь",
        items: [{
            subcategories: [{
                name: "Смартфоны", links: [
                    { text: "Аксессуары для смартфонов и телефонов", url: "/televisions" },
                    { text: "Фитнес-браслеты", url: "/more-televisions" },
                    { text: "Ремешки для смарт-часов и фитнес-браслетов", url: "/more-televisions" },
                    { text: "Аксессуары для смарт-часов и фитнес барслетов", url: "/more-televisions" },
                    { text: "Мобильные телефоны", url: "/more-televisions" },
                ]
            },
            {
                name: "Компьютеры", links: [
                    { text: "Мониторы", url: "/televisions" },
                    { text: "Системные блоки", url: "/televisions" },
                    { text: "Моноблоки", url: "/televisions" },
                    { text: "Аксессуары", url: "/televisions" },
                    { text: "Аксессуары для смарт-часов и фитнес барслетов", url: "/more-televisions" },
                    { text: "Периферия", url: "/televisions" },
                    { text: "Сетевое оборудование", url: "/televisions" },
                    { text: "Неттопы и Мини ПК", url: "/more-televisions" }
                ]
            }, {
                name: "Умный дом", links: [
                    { text: "Управление умным домом", url: "/televisions" },
                    { text: "Комплекты умного дома", url: "/televisions" },
                    { text: "Умные розетки", url: "/televisions" },
                    { text: "Электрокарнизы", url: "/televisions" },
                    { text: "Климатические станции", url: "/televisions" },
                    { text: "Аксессуары", url: "/televisions" },
                    { text: "Датчики для умного дома", url: "/more-televisions" }
                ]
            }, {
                name: "Ноутбуки, планшеты, электронные книги", links: [
                    { text: "Ноутбуки", url: "/televisions" },
                    { text: "Планшеты", url: "/televisions" },
                    { text: "Электронные книги", url: "/televisions" },
                    { text: "Игровые ноутбуки", url: "/televisions" },
                    { text: "Графические планшеты", url: "/televisions" },
                    { text: "Чехлы и подставки", url: "/televisions" },
                    { text: "Стилусы", url: "/televisions" },
                    { text: "Запчасти", url: "/televisions" },
                    { text: "Зарядные устройства", url: "/more-televisions" }
                ]
            }, {
                name: "Фото и видеокамеры", links: [
                    { text: "Экшн-камеры", url: "/televisions" },
                    { text: "Видеокамеры", url: "/televisions" },
                    { text: "Зеркальные фотоаппараты", url: "/televisions" },
                    { text: "Беззеркальные фотоаппараты", url: "/televisions" },
                    { text: "Обьективы", url: "/televisions" },
                    { text: "Фотофоны", url: "/televisions" },
                    { text: "Цифровые фоторамки", url: "/more-televisions" }
                ]
            }, {
                name: "Офисная техника", links: [
                    { text: "Системные блоки", url: "/televisions" },
                    { text: "Мониторы", url: "/televisions" },
                    { text: "МФУ", url: "/televisions" },
                    { text: "Принтеры", url: "/televisions" },
                    { text: "Картриджи и расходные материалы", url: "/televisions" },
                    { text: "Ноутбуки", url: "/televisions" },
                    { text: "Камерынаблюдения", url: "/televisions" },
                    { text: "Сканеры", url: "/more-televisions" }
                ]
            },
            {
                name: "Аксессуары для электротехниики", links: [
                    { text: "Кабели и проводники", url: "/televisions" },
                    { text: "Внешние аккумуляторы", url: "/televisions" },
                    { text: "Батарейки", url: "/televisions" },
                    { text: "Принтеры", url: "/televisions" },
                    { text: "Картриджи и расходные материалы", url: "/televisions" },
                    { text: "Ноутбуки", url: "/televisions" },
                    { text: "Камерынаблюдения", url: "/televisions" },
                    { text: "Сканеры", url: "/more-televisions" }
                ]
            },

            {
                name: "Комплектуещие для ПК", links: [

                    { text: "Системные блоки", url: "/televisions" },
                    { text: "Оперативная память", url: "/televisions" },
                    { text: "Накопители", url: "/televisions" },
                    { text: "Мониторы", url: "/televisions" },
                    { text: "МФУ", url: "/televisions" },
                    { text: "Принтеры", url: "/televisions" },
                    { text: "Картриджи и расходные материалы", url: "/televisions" },
                    { text: "Ноутбуки", url: "/televisions" },
                    { text: "Камерынаблюдения", url: "/televisions" },
                    { text: "Сканеры", url: "/more-televisions" }
                ]
            },

            ]
        }],
        icon: <ShoesIcon />
    },



    {
        name: "Дом и сад",
        items: [{
            subcategories: [{
                name: "Televisions", links: [
                    { text: "Televisions", url: "/televisions" },
                    { text: "More Televisions", url: "/more-televisions" }
                ]
            },
            {
                name: "Smartphones", links: [
                    { text: "Televisions", url: "/televisions" },
                    { text: "More Televisions", url: "/more-televisions" }
                ]
            }, {
                name: "Sneakers", links: [
                    { text: "Televisions", url: "/televisions" },
                    { text: "More Televisions", url: "/more-televisions" }
                ]
            }, {
                name: "Sneakers", links: [
                    { text: "Televisions", url: "/televisions" },
                    { text: "More Televisions", url: "/more-televisions" }
                ]
            }, {
                name: "Sneakers", links: [
                    { text: "Televisions", url: "/televisions" },
                    { text: "More Televisions", url: "/more-televisions" }
                ]
            }, {
                name: "Sneakers", links: [
                    { text: "Televisions", url: "/televisions" },
                    { text: "More Televisions", url: "/more-televisions" }
                ]
            }]
        }],
        icon: <HousingAndgardening />
    },




    {
        name: "Детские товары",
        items: [{
            subcategories: [{
                name: "Televisions", links: [
                    { text: "Televisions", url: "/televisions" },
                    { text: "More Televisions", url: "/more-televisions" }
                ]
            },
            {
                name: "Smartphones", links: [
                    { text: "Televisions", url: "/televisions" },
                    { text: "More Televisions", url: "/more-televisions" }
                ]
            }, {
                name: "Sneakers", links: [
                    { text: "Televisions", url: "/televisions" },
                    { text: "More Televisions", url: "/more-televisions" }
                ]
            }, {
                name: "Sneakers", links: [
                    { text: "Televisions", url: "/televisions" },
                    { text: "More Televisions", url: "/more-televisions" }
                ]
            }, {
                name: "Sneakers", links: [
                    { text: "Televisions", url: "/televisions" },
                    { text: "More Televisions", url: "/more-televisions" }
                ]
            }, {
                name: "Sneakers", links: [
                    { text: "Televisions", url: "/televisions" },
                    { text: "More Televisions", url: "/more-televisions" }
                ]
            }]
        }],
        icon: <ChildItems />
    },



    {
        name: "Красота и здоровье",
        items: [{
            subcategories: [{
                name: "Televisions", links: [
                    { text: "Televisions", url: "/televisions" },
                    { text: "More Televisions", url: "/more-televisions" }
                ]
            },
            {
                name: "Smartphones", links: [
                    { text: "Televisions", url: "/televisions" },
                    { text: "More Televisions", url: "/more-televisions" }
                ]
            }, {
                name: "Sneakers", links: [
                    { text: "Televisions", url: "/televisions" },
                    { text: "More Televisions", url: "/more-televisions" }
                ]
            }, {
                name: "Sneakers", links: [
                    { text: "Televisions", url: "/televisions" },
                    { text: "More Televisions", url: "/more-televisions" }
                ]
            }, {
                name: "Sneakers", links: [
                    { text: "Televisions", url: "/televisions" },
                    { text: "More Televisions", url: "/more-televisions" }
                ]
            }, {
                name: "Sneakers", links: [
                    { text: "Televisions", url: "/televisions" },
                    { text: "More Televisions", url: "/more-televisions" }
                ]
            }]
        }],
        icon: <HealthBeauty />
    },



    {
        name: "Бытовая техника",
        items: [{
            subcategories: [{
                name: "Televisions", links: [
                    { text: "Televisions", url: "/televisions" },
                    { text: "More Televisions", url: "/more-televisions" }
                ]
            },
            {
                name: "Smartphones", links: [
                    { text: "Televisions", url: "/televisions" },
                    { text: "More Televisions", url: "/more-televisions" }
                ]
            }, {
                name: "Sneakers", links: [
                    { text: "Televisions", url: "/televisions" },
                    { text: "More Televisions", url: "/more-televisions" }
                ]
            }, {
                name: "Sneakers", links: [
                    { text: "Televisions", url: "/televisions" },
                    { text: "More Televisions", url: "/more-televisions" }
                ]
            }, {
                name: "Sneakers", links: [
                    { text: "Televisions", url: "/televisions" },
                    { text: "More Televisions", url: "/more-televisions" }
                ]
            }, {
                name: "Sneakers", links: [
                    { text: "Televisions", url: "/televisions" },
                    { text: "More Televisions", url: "/more-televisions" }
                ]
            }]
        }],
        icon: <BytovayaTech />
    },



    {
        name: "Спорт и отдых",
        items: [{
            subcategories: [{
                name: "Televisions", links: [
                    { text: "Televisions", url: "/televisions" },
                    { text: "More Televisions", url: "/more-televisions" }
                ]
            },
            {
                name: "Smartphones", links: [
                    { text: "Televisions", url: "/televisions" },
                    { text: "More Televisions", url: "/more-televisions" }
                ]
            }, {
                name: "Sneakers", links: [
                    { text: "Televisions", url: "/televisions" },
                    { text: "More Televisions", url: "/more-televisions" }
                ]
            }, {
                name: "Sneakers", links: [
                    { text: "Televisions", url: "/televisions" },
                    { text: "More Televisions", url: "/more-televisions" }
                ]
            }, {
                name: "Sneakers", links: [
                    { text: "Televisions", url: "/televisions" },
                    { text: "More Televisions", url: "/more-televisions" }
                ]
            }, {
                name: "Sneakers", links: [
                    { text: "Televisions", url: "/televisions" },
                    { text: "More Televisions", url: "/more-televisions" }
                ]
            }]
        }],
        icon: <Sport />
    },



    {
        name: "Строительсвто и ремонт",
        items: [{
            subcategories: [{
                name: "Televisions", links: [
                    { text: "Televisions", url: "/televisions" },
                    { text: "More Televisions", url: "/more-televisions" }
                ]
            },
            {
                name: "Smartphones", links: [
                    { text: "Televisions", url: "/televisions" },
                    { text: "More Televisions", url: "/more-televisions" }
                ]
            }, {
                name: "Sneakers", links: [
                    { text: "Televisions", url: "/televisions" },
                    { text: "More Televisions", url: "/more-televisions" }
                ]
            }, {
                name: "Sneakers", links: [
                    { text: "Televisions", url: "/televisions" },
                    { text: "More Televisions", url: "/more-televisions" }
                ]
            }, {
                name: "Sneakers", links: [
                    { text: "Televisions", url: "/televisions" },
                    { text: "More Televisions", url: "/more-televisions" }
                ]
            }, {
                name: "Sneakers", links: [
                    { text: "Televisions", url: "/televisions" },
                    { text: "More Televisions", url: "/more-televisions" }
                ]
            }]
        }],
        icon: <Remont />
    },




    {
        name: "Продукты питания",
        items: [{
            subcategories: [{
                name: "Televisions", links: [
                    { text: "Televisions", url: "/televisions" },
                    { text: "More Televisions", url: "/more-televisions" }
                ]
            },
            {
                name: "Smartphones", links: [
                    { text: "Televisions", url: "/televisions" },
                    { text: "More Televisions", url: "/more-televisions" }
                ]
            }, {
                name: "Sneakers", links: [
                    { text: "Televisions", url: "/televisions" },
                    { text: "More Televisions", url: "/more-televisions" }
                ]
            }, {
                name: "Sneakers", links: [
                    { text: "Televisions", url: "/televisions" },
                    { text: "More Televisions", url: "/more-televisions" }
                ]
            }, {
                name: "Sneakers", links: [
                    { text: "Televisions", url: "/televisions" },
                    { text: "More Televisions", url: "/more-televisions" }
                ]
            }, {
                name: "Sneakers", links: [
                    { text: "Televisions", url: "/televisions" },
                    { text: "More Televisions", url: "/more-televisions" }
                ]
            }]
        }],
        icon: <Food />
    },

    {
        name: "Аптека",
        items: [{
            subcategories: [{
                name: "Televisions", links: [
                    { text: "Televisions", url: "/televisions" },
                    { text: "More Televisions", url: "/more-televisions" }
                ]
            },
            {
                name: "Smartphones", links: [
                    { text: "Televisions", url: "/televisions" },
                    { text: "More Televisions", url: "/more-televisions" }
                ]
            }, {
                name: "Sneakers", links: [
                    { text: "Televisions", url: "/televisions" },
                    { text: "More Televisions", url: "/more-televisions" }
                ]
            }, {
                name: "Sneakers", links: [
                    { text: "Televisions", url: "/televisions" },
                    { text: "More Televisions", url: "/more-televisions" }
                ]
            }, {
                name: "Sneakers", links: [
                    { text: "Televisions", url: "/televisions" },
                    { text: "More Televisions", url: "/more-televisions" }
                ]
            }, {
                name: "Sneakers", links: [
                    { text: "Televisions", url: "/televisions" },
                    { text: "More Televisions", url: "/more-televisions" }
                ]
            }]
        }],
        icon: <Pharmacy />
    },


    {
        name: "Товары для животных",
        items: [{
            subcategories: [{
                name: "Televisions", links: [
                    { text: "Televisions", url: "/televisions" },
                    { text: "More Televisions", url: "/more-televisions" }
                ]
            },
            {
                name: "Smartphones", links: [
                    { text: "Televisions", url: "/televisions" },
                    { text: "More Televisions", url: "/more-televisions" }
                ]
            }, {
                name: "Sneakers", links: [
                    { text: "Televisions", url: "/televisions" },
                    { text: "More Televisions", url: "/more-televisions" }
                ]
            }, {
                name: "Sneakers", links: [
                    { text: "Televisions", url: "/televisions" },
                    { text: "More Televisions", url: "/more-televisions" }
                ]
            }, {
                name: "Sneakers", links: [
                    { text: "Televisions", url: "/televisions" },
                    { text: "More Televisions", url: "/more-televisions" }
                ]
            }, {
                name: "Sneakers", links: [
                    { text: "Televisions", url: "/televisions" },
                    { text: "More Televisions", url: "/more-televisions" }
                ]
            }]
        }],
        icon: <Zootovar />
    },


    {
        name: "Книги",
        items: [{
            subcategories: [{
                name: "Televisions", links: [
                    { text: "Televisions", url: "/televisions" },
                    { text: "More Televisions", url: "/more-televisions" }
                ]
            },
            {
                name: "Smartphones", links: [
                    { text: "Televisions", url: "/televisions" },
                    { text: "More Televisions", url: "/more-televisions" }
                ]
            }, {
                name: "Sneakers", links: [
                    { text: "Televisions", url: "/televisions" },
                    { text: "More Televisions", url: "/more-televisions" }
                ]
            }, {
                name: "Sneakers", links: [
                    { text: "Televisions", url: "/televisions" },
                    { text: "More Televisions", url: "/more-televisions" }
                ]
            }, {
                name: "Sneakers", links: [
                    { text: "Televisions", url: "/televisions" },
                    { text: "More Televisions", url: "/more-televisions" }
                ]
            }, {
                name: "Sneakers", links: [
                    { text: "Televisions", url: "/televisions" },
                    { text: "More Televisions", url: "/more-televisions" }
                ]
            }]
        }],
        icon: <Books />
    },


    {
        name: "Туризм, Рыбалка",
        items: [{
            subcategories: [{
                name: "Televisions", links: [
                    { text: "Televisions", url: "/televisions" },
                    { text: "More Televisions", url: "/more-televisions" }
                ]
            },
            {
                name: "Smartphones", links: [
                    { text: "Televisions", url: "/televisions" },
                    { text: "More Televisions", url: "/more-televisions" }
                ]
            }, {
                name: "Sneakers", links: [
                    { text: "Televisions", url: "/televisions" },
                    { text: "More Televisions", url: "/more-televisions" }
                ]
            }, {
                name: "Sneakers", links: [
                    { text: "Televisions", url: "/televisions" },
                    { text: "More Televisions", url: "/more-televisions" }
                ]
            }, {
                name: "Sneakers", links: [
                    { text: "Televisions", url: "/televisions" },
                    { text: "More Televisions", url: "/more-televisions" }
                ]
            }, {
                name: "Sneakers", links: [
                    { text: "Televisions", url: "/televisions" },
                    { text: "More Televisions", url: "/more-televisions" }
                ]
            }]
        }],
        icon: <Tourism />
    },



    {
        name: "Мебель",
        items: [{
            subcategories: [{
                name: "Televisions", links: [
                    { text: "Televisions", url: "/televisions" },
                    { text: "More Televisions", url: "/more-televisions" }
                ]
            },
            {
                name: "Smartphones", links: [
                    { text: "Televisions", url: "/televisions" },
                    { text: "More Televisions", url: "/more-televisions" }
                ]
            }, {
                name: "Sneakers", links: [
                    { text: "Televisions", url: "/televisions" },
                    { text: "More Televisions", url: "/more-televisions" }
                ]
            }, {
                name: "Sneakers", links: [
                    { text: "Televisions", url: "/televisions" },
                    { text: "More Televisions", url: "/more-televisions" }
                ]
            }, {
                name: "Sneakers", links: [
                    { text: "Televisions", url: "/televisions" },
                    { text: "More Televisions", url: "/more-televisions" }
                ]
            }, {
                name: "Sneakers", links: [
                    { text: "Televisions", url: "/televisions" },
                    { text: "More Televisions", url: "/more-televisions" }
                ]
            }]
        }],
        icon: <Mebel />
    },


    {
        name: "Аксессуары",
        items: [{
            subcategories: [{
                name: "Televisions", links: [
                    { text: "Televisions", url: "/televisions" },
                    { text: "More Televisions", url: "/more-televisions" }
                ]
            },
            {
                name: "Smartphones", links: [
                    { text: "Televisions", url: "/televisions" },
                    { text: "More Televisions", url: "/more-televisions" }
                ]
            }, {
                name: "Sneakers", links: [
                    { text: "Televisions", url: "/televisions" },
                    { text: "More Televisions", url: "/more-televisions" }
                ]
            }, {
                name: "Sneakers", links: [
                    { text: "Televisions", url: "/televisions" },
                    { text: "More Televisions", url: "/more-televisions" }
                ]
            }, {
                name: "Sneakers", links: [
                    { text: "Televisions", url: "/televisions" },
                    { text: "More Televisions", url: "/more-televisions" }
                ]
            }, {
                name: "Sneakers", links: [
                    { text: "Televisions", url: "/televisions" },
                    { text: "More Televisions", url: "/more-televisions" }
                ]
            }]
        }],
        icon: <Accessouars />
    },

    {
        name: "Канцелярия",
        items: [{
            subcategories: [{
                name: "Televisions", links: [
                    { text: "Televisions", url: "/televisions" },
                    { text: "More Televisions", url: "/more-televisions" }
                ]
            },
            {
                name: "Smartphones", links: [
                    { text: "Televisions", url: "/televisions" },
                    { text: "More Televisions", url: "/more-televisions" }
                ]
            }, {
                name: "Sneakers", links: [
                    { text: "Televisions", url: "/televisions" },
                    { text: "More Televisions", url: "/more-televisions" }
                ]
            }, {
                name: "Sneakers", links: [
                    { text: "Televisions", url: "/televisions" },
                    { text: "More Televisions", url: "/more-televisions" }
                ]
            }, {
                name: "Sneakers", links: [
                    { text: "Televisions", url: "/televisions" },
                    { text: "More Televisions", url: "/more-televisions" }
                ]
            }, {
                name: "Sneakers", links: [
                    { text: "Televisions", url: "/televisions" },
                    { text: "More Televisions", url: "/more-televisions" }
                ]
            }]
        }],
        icon: <Schoolsupplies />
    },

    {
        name: "Бытовая химия и гигиена",
        items: [{
            subcategories: [{
                name: "Televisions", links: [
                    { text: "Televisions", url: "/televisions" },
                    { text: "More Televisions", url: "/more-televisions" }
                ]
            },
            {
                name: "Smartphones", links: [
                    { text: "Televisions", url: "/televisions" },
                    { text: "More Televisions", url: "/more-televisions" }
                ]
            }, {
                name: "Sneakers", links: [
                    { text: "Televisions", url: "/televisions" },
                    { text: "More Televisions", url: "/more-televisions" }
                ]
            }, {
                name: "Sneakers", links: [
                    { text: "Televisions", url: "/televisions" },
                    { text: "More Televisions", url: "/more-televisions" }
                ]
            }, {
                name: "Sneakers", links: [
                    { text: "Televisions", url: "/televisions" },
                    { text: "More Televisions", url: "/more-televisions" }
                ]
            }, {
                name: "Sneakers", links: [
                    { text: "Televisions", url: "/televisions" },
                    { text: "More Televisions", url: "/more-televisions" }
                ]
            }]
        }],
        icon: <Hygen />
    },

    {
        name: "Игры и консоли",
        items: [{
            subcategories: [{
                name: "Televisions", links: [
                    { text: "Televisions", url: "/televisions" },
                    { text: "More Televisions", url: "/more-televisions" }
                ]
            },
            {
                name: "Smartphones", links: [
                    { text: "Televisions", url: "/televisions" },
                    { text: "More Televisions", url: "/more-televisions" }
                ]
            }, {
                name: "Sneakers", links: [
                    { text: "Televisions", url: "/televisions" },
                    { text: "More Televisions", url: "/more-televisions" }
                ]
            }, {
                name: "Sneakers", links: [
                    { text: "Televisions", url: "/televisions" },
                    { text: "More Televisions", url: "/more-televisions" }
                ]
            }, {
                name: "Sneakers", links: [
                    { text: "Televisions", url: "/televisions" },
                    { text: "More Televisions", url: "/more-televisions" }
                ]
            }, {
                name: "Sneakers", links: [
                    { text: "Televisions", url: "/televisions" },
                    { text: "More Televisions", url: "/more-televisions" }
                ]
            }]
        }],
        icon: <GameConsole />
    },

    {
        name: "Автомобили",
        items: [{
            subcategories: [{
                name: "Televisions", links: [
                    { text: "Televisions", url: "/televisions" },
                    { text: "More Televisions", url: "/more-televisions" }
                ]
            },
            {
                name: "Smartphones", links: [
                    { text: "Televisions", url: "/televisions" },
                    { text: "More Televisions", url: "/more-televisions" }
                ]
            }, {
                name: "Sneakers", links: [
                    { text: "Televisions", url: "/televisions" },
                    { text: "More Televisions", url: "/more-televisions" }
                ]
            }, {
                name: "Sneakers", links: [
                    { text: "Televisions", url: "/televisions" },
                    { text: "More Televisions", url: "/more-televisions" }
                ]
            }, {
                name: "Sneakers", links: [
                    { text: "Televisions", url: "/televisions" },
                    { text: "More Televisions", url: "/more-televisions" }
                ]
            }, {
                name: "Sneakers", links: [
                    { text: "Televisions", url: "/televisions" },
                    { text: "More Televisions", url: "/more-televisions" }
                ]
            }]
        }],
        icon: <Auto />
    }


];
