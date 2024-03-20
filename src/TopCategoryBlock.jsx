import TopCategoryCard from "./TopCategoryCard";

function TopCategoryBlock() {
    const topCategoryCards = Array.from({ length: 8 }, (_, index) => <TopCategoryCard key={index} />);

    return(
        <div className="topcategory">
            <div className="topcategory-left">
                <h3>Бытовая техника</h3>
                <button className="topcategroy-left-more">
                    Посмотреть больше
                </button>
            </div>
            <div className="topcategory-right">
                {topCategoryCards}
            </div>
        </div>
    );
}

export default TopCategoryBlock