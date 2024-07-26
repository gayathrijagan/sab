import "./twoRowImageText.scss";

const TwoRowImageText = ({ category, image, alt, title, text }) => {
    
    function redirect (category) {
        window.location = `/menu#${category}`
    }

    return (
        <div className="row-image-text-container">
            <img src={image} alt={alt} className="row-image" />
            <div className="row-content">
                <h2 className="row-title">{title}</h2>
                <p className="row-text">{text}</p>
                <button className="row-button" onClick={() => redirect(category)}>See {category} Menu</button>
            </div>

        </div>
    )
}
export default TwoRowImageText;