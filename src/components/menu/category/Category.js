import ReactImageGallery from 'react-image-gallery';
import './category.scss'
import Item from "../item/Item";
import { useTheme, useMediaQuery } from "@material-ui/core";

const Category = ({ imagePosition, name, ...mealCategory }) => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('768'));

    return (
        <div className='content' id={name}>
            <h2 className='menu-category'>{name}</h2>
            <div className={'category-content ' + name}
                style={isMobile ? { flexDirection: 'column' } :
                    (imagePosition === 'left' ? { flexDirection: 'row-reverse' } : { flexDirection: 'row' })}>
                <ReactImageGallery
                    items={mealCategory.images}
                    showFullscreenButton={false}
                    showPlayButton={true}
                    showBullets={true}
                    showThumbnails={false}
                    showNav={false}
                    autoPlay={true}
                />
                <div className="menuItems">
                    {mealCategory.items?.map((item, index) =>
                        (<Item key={name + index} item={item} />)
                    )}
                </div>
            </div>
        </div>
    )
}

export default Category;
