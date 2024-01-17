import './banner.scss';

const Banner = ({title, description, subText, buttonText, image, alt, gradient}) => {
    console.log(gradient)
    const gradients = {
        linear: 'linear-gradient(to left top, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0) 100%)',
        radial: 'radial-gradient(circle at center, rgba(0, 0, 0, 0) 0%, rgb(0, 0, 0) 120%)'
    }
    return (
        <>
            <div className='bannerContainer'>
                <div className='overlayConatiner'>
                    <div className='bannerImageWrapper' style={{'background': gradients[gradient]}}>
                        <img src={image} alt={alt} className='bannerImage' />
                    </div>
                    {title && <h2 className='overlay title'>{title}</h2>}
                    <div className="overlay bannerCenterText">
                        <p className="banner-description">{description}</p>
                        <p className="banner-sub-text">{subText}</p>
                        {buttonText && <button className='banner-button'>{buttonText}</button>}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Banner;