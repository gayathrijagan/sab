import TwoRowImageText from './TwoRowImageText/TwoRowImageText';
import './menu.scss';

const Menu = () => {
    const data = [
        {
            category: 'breakfast',
            image: '/images/pongal_sambar_chutney.jpg',
            alt: 'pongal',
            title: 'Simple Tamilian Brekfast',
            text: 'Our breakfast features traditional delights like soft idlis, crispy dosas, and a variety of food, served with various chutnies and tangy sambar. These wholesome, flavorful dishes are a perfect start to the day, offering a blend of nutrition and authentic South Indian taste.',
        },
        {
            category: 'lunch',
            image: '/images/meals.jpeg',
            alt: 'pongal',
            title: 'stomach filling lunch',
            text: 'Our lunch includes traditional rice, sambar, and rasam, with options for no-onion, no-garlic, and jain food. Enjoy a variety of North Indian dishes like paneer masala, alongside Chinese favorites such as fried rice and munchurian, offering a diverse, satisfying meal for everyone.',
        },
        {
            category: 'dinner',
            image: '/images/parotta_kurma.jpeg',
            alt: 'pongal',
            title: 'Indo-Chinese Dinner',
            text: 'Our dinner features Madurai favorite flaky parotta, crispy dosa, and fluffy idly among other tamil delicacies with a few North Indian dishes. Enjoy our fusion twist creating a delightful blend of Indian and Chinese culinary for a unique and satisfying dining experience.',
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