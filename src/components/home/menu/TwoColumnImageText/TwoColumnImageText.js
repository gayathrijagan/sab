// import { useEffect, useState } from 'react';
import './twoColumnImageText.scss';

const TwoColumnImageText = ({ image, alt, title, text, buttonText, left }) => {

    // const [amountToScroll, setYOffset] = useState(0);
    // const handleScroll = () => {
    //     console.log(window.scrollY, window.innerHeight);
    //     const margin = window.innerHeight-window.scrollY;
    //     let variableX = (Math.sign(margin)*margin**2/window.scrollY);
    //     if (variableX < 0) {
    //         variableX = Math.max(variableX, -48);
    //     } else {
    //         variableX = Math.min(variableX, 48);
    //     }
    //     setYOffset(variableX);
    // }

    // useEffect(() => {
    //     (
    //         window.addEventListener('scroll', handleScroll)
    //     )
    // }, []);

    return (
        <div className="twoColumnImageTextContainer" style={{ 'flexDirection': left ? "row" : "row-reverse" }}>
            {/* <div className='wrapper' style={{ transform: `translateY(${amountToScroll}px)` }}> */}
            <img src={image} alt={alt} className="twoColumnImage" />
            {/* </div> */}
            <div className="twoColumnContent">
                <h2 className="twoColumnTitle">{title}</h2>
                <p className="twoColumnText">{text}</p>
                <button className="twoColumnButton">{buttonText}</button>
            </div>

        </div>
    )
}

export default TwoColumnImageText;