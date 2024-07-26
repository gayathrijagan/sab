import Category from './category/Category';
import './menu.scss';
import { breakfast, lunch, dinner } from '../../constants/menu-items';
import Layout from './layout/Layout';
import { useTheme, useMediaQuery } from "@material-ui/core";

const Menu = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('768'));

    return (
        <div className='menu'>
            <h1 className='menu-title'>Explore Some Of Our Unique Dishes</h1>
            <Category name='breakfast' items={breakfast.items} images={breakfast.images} imagePosition='left' />
            <Category name='lunch' items={lunch.items} images={lunch.images} imagePosition='right' />
            {
                isMobile
                    ? <Category name='dinner' items={dinner.items} images={dinner.images} imagePosition='left' />
                    : <Layout name='dinner' items={dinner.items} />
            }
        </div>
    )
}

export default Menu;