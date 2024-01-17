import "./location.scss";

const Location = () => {

    const getDirections = () => {
        window.open("https://maps.app.goo.gl/UbmfJ8CEphi8efrQ7")
    }

    return (
        <div className="location-container">
            <img className='location-map' src="/images/location1.png" alt="map" />
            <div className="location-text-container">
                <div className="location-text-wrapper">
                    <div className="address">
                        <p>Upstairs, North of Aristo Hospital</p>
                        <p>52, Rasi Towers, Bypass Rd, Ponmeni, Tamil Nadu 625016, India</p>
                    </div>

                    <p className="location-phone">+91 9003403444</p>

                    <div className="timings">
                        <p>Open on all days</p>
                        <p>7:30AM - 10PM</p>
                    </div>

                    <button className="directions-button" onClick={getDirections}>Get Directions</button>
                </div>
            </div>

        </div>
    )
}

export default Location;