import "./twoRowImageText.scss";

const TwoRowImageText = ({ category, image, alt, title, text }) => {
    return (
        <div className="row-image-text-container">
            {/* <div className=""> */}
                <img src={image} alt={alt} className="row-image" />
            {/* </div> */}
            <div className="row-content">
                <h2 className="row-title">{title}</h2>
                <p className="row-text">{text}</p>
                <button className="row-button">See {category} Menu</button>
            </div>

        </div>
    )
}
export default TwoRowImageText;