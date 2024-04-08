import ProductCard from "../ProductCard/ProductCard";

function RecomendationBlock() {
    const recomendationCards = Array.from({ length: 10 }, (_, index) => 
        <ProductCard 
            key={index} 
            imageUrl='https://cdn.leroymerlin.ru/lmru/image/upload/f_auto/q_auto/dpr_1.0/c_pad/w_1000/h_1000/v1711535077/lmcode/pqAx59XDzkmBgWH_oBNxcg/86858614_01.png'
            imageAlt='KUDO image'
            price={360.99}
            oldPrice={399.99}
            rating={4.8}
            reviews={118}
            seller='KUDO bishkek'
            description='Грунт-эмаль 3 в 1 по ржавчине KUDO высокопрочная ...'
            date='11 апреля'
        />);
    return(
        <div className="recomendation">
            <h3>Рекомендации</h3>
                <div className="recomendation-cards">
                    {recomendationCards}
                </div>
        </div>
    );
}

export default RecomendationBlock
