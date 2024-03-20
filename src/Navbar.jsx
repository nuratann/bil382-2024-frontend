
function Navbar() {
    return (
        <>
            <hr />
            <div className="navbar">
                <div className="navbar-category">
                    <select className="navbar-category-select">
                        <option value="category1">Все категории</option>
                        <option value="category2">Техника</option>
                        <option value="category3">Одежда</option>
                        <option value="category4">Материалы</option>
                        <option value="category5">Прочее</option>
                        {/* Другие категории */}
                    </select>
                </div>
                <div className="navbar-currency">
                    <select className="navbar-currency-select">
                        <option value="currency1">СОМ</option>
                        <option value="currency2">ТЕНГЕ</option>
                        <option value="currency3">РУБЛЬ</option>
                        {/* Другие валюты */}
                    </select>
                </div>
            </div>
            <hr />
        </>

    );
}
export default Navbar;
