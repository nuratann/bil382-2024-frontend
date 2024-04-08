import LaptopPhoto from "../../assets/discountLaptop.png"

function DiscountCard() {
    return(
        <>
            <div className="discount-card">
                <img src={LaptopPhoto} alt="Laptop"/>
                <h3>
                    Ноутбук
                </h3>
                <div className="discount-percent">
                    -25%
                </div>
            </div>
        </>
    );
}

export default DiscountCard