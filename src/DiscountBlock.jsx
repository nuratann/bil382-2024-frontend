import DiscountCard from "./DiscountCard";

function DiscountBlock() {
    const discountCards = Array.from({ length: 5 }, (_, index) => <DiscountCard key={index} />);
    return (
        <>
            <div class="discount">
                <div id="discount-time">
                    <h3>Акции и скидки</h3>
                    <div className="time-container">
                        <div class="time">
                            <h4>08</h4>
                            Дня
                        </div>
                        <div class="time">
                            <h4>10</h4>
                            Часов
                        </div>
                        <div class="time">
                            <h4>34</h4>
                            Минут
                        </div>
                        <div class="time">
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