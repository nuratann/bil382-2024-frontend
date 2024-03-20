import IconBuyers from "./assets/icon.png"
import flag from "./assets/rus-flag.png"

function Header() {
    return (
        <>
            <header className="header">
                <div className="logo">
                    <img src={IconBuyers} alt="Website Logo" />
                </div>
                <div className="search">
                    <input className="search-input" type="text" placeholder="Поиск" />
                    <select className="search-select">
                        <option value="category1">Все категории</option>
                        <option value="category2">Техника</option>
                        <option value="category3">Одежда</option>
                        <option value="category4">Материалы</option>
                        <option value="category5">Прочее</option>
                        {/* Другие категории */}
                    </select>
                    <button className="search-button" >Поиск</button>
                </div>
                <div className="user-links">
                    <a href="/login">Войти</a>
                    <span> или </span>
                    <a href="/register">Создать акаунт</a>
                </div>
                <div className="language-switch">
                    <img src={flag} alt="image flag" />
                    <select className="select-language">
                        <option value="language1">Русский</option>
                        <option value="language2">Кыргызча</option>
                        <option value="language3">English</option>
                    </select>
                </div>
            </header>
        </>
    );
}

export default Header