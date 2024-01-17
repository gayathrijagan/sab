import Testimonails from './testimonials/Testimonials';
import Banner from './banner/Banner';
import './home.scss';
import Menu from './menu/Menu';
import Location from './location/Location';

const Home = () => {

    const breakfast = {
        image: '/images/idli1.jpg',
        heading: 'Breakfast',
        description: "Enjoy a blend of flavors and textures, incorporating steamed rice cakes, fermented rice crepes, lentil porridge, or semolina porridge served a variety of chutnies and sambar."
    }

    const lunch = {
        image: '/images/meals.jpeg',
        heading: 'Lunch',
        description: "Enjoy a blend of flavors and textures, incorporating steamed rice cakes, fermented rice crepes, lentil porridge, or semolina porridge served a variety of chutnies and sambar."
    }

    const dinner = {
        image: '/images/parotta_kurma.jpeg',
        heading: 'Dinner',
        description: "Enjoy a blend of flavors and textures, incorporating steamed rice cakes, fermented rice crepes, lentil porridge, or semolina porridge served a variety of chutnies and sambar."
    }

    const catering = {
        image: '/images/vada.jpeg',
        heading: 'Catering',
        description: "Enjoy a blend of flavors and textures, incorporating steamed rice cakes, fermented rice crepes, lentil porridge, or semolina porridge served a variety of chutnies and sambar."
    }

    const homepageTop = {
        title: 'Sri Acharya Bhavan',
        description: 'Restaurant & Catering',
        subText: 'Pure Vegetarian',
        image: '/images/vada.jpeg',
        alt: 'vada sambhar',
        gradient: 'linear'
    }

    const cateringBanner = {
        title: '',
        description: 'We cater!',
        subText: 'experience bhramin style complete food on your special days',
        image: '/images/catering.jpeg',
        buttonText: 'explore our catering services',
        alt: 'south indian meals',
        gradient: 'radial'
    }


    return (
        <div className="homeContainer">
            <Banner {...homepageTop}/>
            <Menu />
            <Banner {...cateringBanner}/>
            <Testimonails />
            <Location />
        </div>
    )
}

export default Home;