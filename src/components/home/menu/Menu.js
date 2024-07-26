import TwoRowImageText from './TwoRowImageText/TwoRowImageText';
import './menu.scss';

const Menu = () => {
    const data = [
        {
            category: 'breakfast',
            image: '/images/pongal_sambar_chutney.jpg',
            alt: 'pongal',
            title: 'Simple Tamilian Brekfast',
            text: 'We combine traditional preparations with local ingredients for dishes that are authentic to both their Spanish origins and New York setting.',
        },
        {
            category: 'lunch',
            image: '/images/meals.jpeg',
            alt: 'pongal',
            title: 'No-onion No-garlic lunch',
            text: 'We combine traditional preparations with local ingredients for dishes that are authentic to both their Spanish origins and New York setting.',
        },
        {
            category: 'dinner',
            image: '/images/parotta_kurma.jpeg',
            alt: 'pongal',
            title: 'Indo-Chinese Dinner',
            text: 'We combine traditional preparations with local ingredients for dishes that are authentic to both their Spanish origins and New York setting.',
        },
        {
            image: '/images/bananaLeaf.jpeg',
            alt: 'pongal',
            title: 'Tapas originated in the Catalonian region of Spain and are small plates typically consumed with wine or vermouth.',
            text: 'We combine traditional preparations with local ingredients for dishes that are authentic to both their Spanish origins and New York setting.',
        }
    ]

    return (
    
        <div className='menu-summary'>
            <TwoRowImageText {...data[0]} />
            <TwoRowImageText {...data[1]} />
            <TwoRowImageText {...data[2]} />
        </div>
    )
}

export default Menu;