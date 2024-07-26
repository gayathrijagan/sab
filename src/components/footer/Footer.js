import './footer.scss';
import { MdLocationOn as Location, MdPhone as Phone } from 'react-icons/md'

const Footer = () => {
    return (
        <div className='topBanner'>
            <div className='location'>
                <Location />
                <p>Near Aristo Hospital, By-pass road, Madurai</p>
            </div>
            <div className='phone'>
                <Phone />
                <p>+91 9003403444</p>
            </div>
        </div>
    );
}

export default Footer;