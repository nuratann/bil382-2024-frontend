import walletImg from "./assets/wallet.png"

function RecomendationCard() {
    return(
        <div className="recomendation-card">
            <img src={walletImg}/>
            <h4>1400 сом</h4>
            <p>Кошелек<br/>синий</p>
        </div>
    );
}

export default RecomendationCard