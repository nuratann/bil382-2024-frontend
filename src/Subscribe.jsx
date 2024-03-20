

function Subscribe() {
    return(
        <div className="subscribe">
            <h4>Подпишись на рассылки</h4>
            <p>Получай прямо на почту, выгодные предложения</p>
            <div className="subscribe-send">
                <div className="subscribe-email">
                    <input type="email" name="email" id="email" placeholder="почта"/>
                    <div className="background-image"></div>
                </div>
                <button id="email-button">Подписаться</button>
            </div>
            
        </div>
    );
}

export default Subscribe