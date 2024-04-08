import blendorImg from "../../assets/blender.png"

function TopCategoryCard() {
    return(
        <div className="topcategory-card">
            <h4>Блендер</h4>
            <div className="topcategory-card-bottom">
                <div className="topcategory-card-left">
                    <p>От <br />5400 сом</p>
                </div>
                <img src={blendorImg} alt="Blendor Image" />
            </div>
        </div>
        );
}

export default TopCategoryCard