import DiscountCard from "../DiscountCard/DiscountCard";

function DiscountBlock() {
    const discountCards = Array.from({ length: 5 }, (_, index) => <DiscountCard key={index} />);
    return (
        <>
            <div className="discount">
                <div id="discount-time">
                    <h3>Акции и скидки</h3>
                    <div className="time-container">
                        <div className="time">
                            <h4>08</h4>
                            Дня
                        </div>
                        <div className="time">
                            <h4>10</h4>
                            Часов
                        </div>
                        <div className="time">
                            <h4>34</h4>
                            Минут
                        </div>
                        <div className="time">
                            <h4>08</h4>
                            Секунд
                        </div>
                    </div>    
                </div>
                <div id="discount-cards">
                    {discountCards}
                </div>
                {}
            </div>
        </>
    );
}

export default DiscountBlock