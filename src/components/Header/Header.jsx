import IconBuyers from '../../assets/icon.png'
import flag from "../../assets/rus-flag.png"
import SearchLine from '../SearchLine/SearchLine';

function Header() {
    return (
        <>
            <header className="header">
                <div className="logo">
                    <img src={IconBuyers} alt="Website Logo" />
                </div>
                <SearchLine/>
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