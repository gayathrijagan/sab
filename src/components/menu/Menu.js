import Item from "./item/Item";
import './menu.scss';
import ReactImageGallery from 'react-image-gallery';
import { useTheme, useMediaQuery } from "@material-ui/core";

const Menu = (items) => {

    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('628'));

    items = {
        breakfast: [{
            name: 'idly',
            description: 'lorem ipsum'
        },
        {
            name: 'dosa',
            description: 'lorem ipsum'
        },
        {
            name: 'pongal',
            description: 'lorem ipsum'
        },
        {
            name: 'vada',
            description: 'lorem ipsum'
        },
        {
            name: 'poori',
            description: 'lorem ipsum'
        },
        {
            name: 'coffee',
            description: 'lorem ipsum'
        }],
        lunch: [{
            name: 'full meals',
            description: 'lorem ipsum'
        },
        {
            name: 'mini meals',
            description: 'lorem ipsum'
        },
        {
            name: 'sambhar sadam',
            description: 'lorem ipsum'
        },
        {
            name: 'rasam sadam',
            description: 'lorem ipsum'
        },
        {
            name: 'curd rice',
            description: 'lorem ipsum'
        },
        {
            name: 'kootu rice',
            description: 'lorem ipsum'
        }],
        dinner: [{
            name: 'dosa',
            description: 'lorem ipsum'
        },
        {
            name: 'parotta',
            description: 'lorem ipsum'
        },
        {
            name: 'mini idly',
            description: 'lorem ipsum'
        },
        {
            name: 'idly',
            description: 'lorem ipsum'
        },
        {
            name: 'paneer',
            description: 'lorem ipsum'
        },
        {
            name: 'wheat parotta',
            description: 'lorem ipsum'
        }]
    }

    const width = '85vw';
    const image_gallery = [
        {
            original: '/images/dosa4.jpeg',
            originalWidth: width,
            originalHeight: 'calc(100vw * 0.85)'
        },
        {
            original: '/images/parotta_kurma.jpeg',
            originalWidth: width,
            originalHeight: 'calc(100vw * 0.66)'
        },
        {
            original: '/images/rasam_sadham.jpeg',
            originalWidth: width,
            originalHeight: 'calc(100vw * 0.66)'
        },
        {
            original: '/images/uthappam.jpeg',
            originalWidth: width,
            originalHeight: 'calc(100vw * 0.66)'
        },
        {
            original: '/images/pongal_sambar_chutney.jpeg',
            originalWidth: width,
            originalHeight: 'calc(100vw * 0.66)'
        },
        {
            original: '/images/vada.jpeg',
            originalWidth: width,
            originalHeight: 'calc(100vw * 0.66)'
        },
    ]
    
    const breakfast = items?.breakfast;
    const lunch = items?.lunch;
    const dinner = items?.dinner;

    return (
        <div className="menu">
             <ReactImageGallery
                items={image_gallery}
                showFullscreenButton={false}
                showPlayButton={false}
                showBullets={true}
                showThumbnails={false}
                showNav={false}
                // autoPlay={true}
            />
                {/* : <div className="gallery">
                    {gallery.map((image, index) => (<img key={index} src={image} className="image" />))}
                </div> */}
            
            <div className="menuSection">
                <h2 className="menuTitle">Breakfast</h2>
                <div className="menuItems">
                    {breakfast?.map((item, index) =>
                        (<Item key={'breakfast' + index} item={item} />)
                    )}
                </div>
                <h2 className="menuTitle">Lunch</h2>
                <div className="menuItems">
                    {lunch?.map((item, index) => (
                        <Item key={'lunch' + index} item={item} />
                    ))}
                </div>
                <h2 className="menuTitle">Dinner</h2>
                <div className="menuItems">
                    {dinner?.map((item, index) => (
                        <Item key={'dinner' + index} item={item} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Menu;