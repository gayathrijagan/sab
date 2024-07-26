import Item from '../item/Item';
import './layout.scss';


const Layout = ({ name, items }) => {
    return (
        <div>
            <h2 className='menu-category'>{name}</h2>
            <div className='layout'>
                <div className='image-section-container'>
                    <div className='image-section'>
                        <img className='image-layout-one' src='/images/idli-sambar-chutney.jpg' alt='vertical-one' />
                        <img className='image-layout-one' src='/images/rava-dosa.jpg' alt='vertical-two' />
                    </div>
                    <div className='image-section'>
                        <img className='image-layout-two' src='/images/poori-masala-2.jpg' alt='vertical-one' />
                        <img className='image-layout-two' src='/images/pizza-dosa.jpeg' alt='vertical-two' />
                        <img className='image-layout-two' src='/images/RavaKichadi.jpg' alt='vertical-two' />
                    </div>
                </div>
                <div className='menu-items'>
                    {items?.map((item, index) =>
                        (<Item key={name + index} item={item} />)
                    )}
                </div>
            </div>
        </div>
    )
}

export default Layout;