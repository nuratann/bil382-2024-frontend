import RecomendationCard from "./RecomendationCard"

function RecomendationBlock() {
    const recomendationCards = Array.from({ length: 10 }, (_, index) => <RecomendationCard key={index} />);
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
